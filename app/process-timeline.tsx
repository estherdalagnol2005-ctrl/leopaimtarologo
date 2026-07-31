"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    symbol: "✦",
    title: "Escolha o serviço",
    text: "Conheça as possibilidades e selecione o atendimento que mais conversa com o seu momento.",
  },
  {
    symbol: "☾",
    title: "Fale diretamente comigo",
    text: "Entre em contato pelo WhatsApp ou pelo direct para consultar o valor e combinar os detalhes.",
  },
  {
    symbol: "☼",
    title: "Receba sua orientação",
    text: "Conduzo o atendimento com sigilo, acolhimento e profundo respeito pela sua espiritualidade.",
  },
];

export default function ProcessTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const items = Array.from(timeline.querySelectorAll<HTMLElement>(".process-step"));
    timeline.classList.add("timeline-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.34 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="process-timeline" ref={timelineRef}>
      <div className="process-line" aria-hidden="true" />
      {steps.map((step, index) => (
        <article
          className={`process-step ${index % 2 === 0 ? "process-step-right" : "process-step-left"}`}
          key={step.title}
        >
          <span className="process-node" aria-hidden="true">{step.symbol}</span>
          <div className="process-step-content">
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
