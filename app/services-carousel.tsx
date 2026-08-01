"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Service = {
  title: string;
  category: string;
  text: string;
  note?: string;
};

type ServicesCarouselProps = {
  services: Service[];
  whatsappUrl: string;
};

const symbols = ["☾", "♡", "❧", "✦", "☼", "✺", "✧", "∞", "♛"];
function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {direction === "left" ? (
        <path d="M19 12H5m6-6-6 6 6 6" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

export default function ServicesCarousel({ services, whatsappUrl }: ServicesCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>(".tarot-card"));
    if (!cards.length) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    const closest = cards.reduce(
      (best, card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - trackCenter);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );

    setActive(closest.index);
    setCanPrev(closest.index > 0);
    setCanNext(closest.index < cards.length - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updatePosition();
    const frame = window.requestAnimationFrame(updatePosition);
    const timer = window.setTimeout(updatePosition, 250);
    const observer = new ResizeObserver(updatePosition);
    observer.observe(track);
    track.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      observer.disconnect();
      track.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [updatePosition]);

  const move = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>(".tarot-card"));
    const nextIndex = Math.max(0, Math.min(cards.length - 1, active + direction));
    const card = cards[nextIndex];
    if (!card) return;

    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const centeredLeft =
      track.scrollLeft +
      (cardRect.left - trackRect.left) -
      (track.clientWidth - cardRect.width) / 2;

    track.scrollTo({ left: centeredLeft, behavior: "smooth" });
  };

  return (
    <div className="tarot-carousel">
      <div className="tarot-stage">
        <div className="tarot-track" ref={trackRef} aria-label="Serviços em formato de cartas de tarô">
          {services.map((service, index) => (
            <article
              className={`tarot-card tarot-tone-${(index % 3) + 1}${index === active ? " is-active" : ""}`}
              id={`servico-${index + 1}`}
              aria-current={index === active ? "true" : undefined}
              key={service.title}
            >
              <div className="tarot-border">
                <div className="tarot-number">
                  <span>✦</span>
                  <b>✧</b>
                  <span>✦</span>
                </div>

                <div className="tarot-art" aria-hidden="true">
                  <span className="art-stars">✦　·　✧</span>
                  <div className="art-orbit"><i>{symbols[index]}</i></div>
                  <span className="art-rays" />
                  <span className="art-ground">☾　✦　☽</span>
                </div>

                <div className="tarot-copy">
                  <p className="tarot-category">{service.category}</p>
                  <h3>{service.title}</h3>
                  <p className="tarot-description">{service.text}</p>
                  {service.note && <p className="tarot-note">{service.note}</p>}
                </div>

                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Consulte o valor <Arrow direction="right" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="tarot-buttons">
          <button type="button" onClick={() => move(-1)} disabled={!canPrev} aria-label="Carta anterior">
            <Arrow direction="left" />
          </button>
          <button type="button" onClick={() => move(1)} disabled={!canNext} aria-label="Próxima carta">
            <Arrow direction="right" />
          </button>
        </div>
      </div>

      <div className="tarot-controls">
        <div className="tarot-progress" aria-label="Progresso do carrossel">
          {services.map((service, index) => (
            <i className={index === active ? "active" : ""} key={service.title} />
          ))}
        </div>
      </div>
      <p className="swipe-hint">Deslize para conhecer todos os atendimentos <span>→</span></p>
    </div>
  );
}
