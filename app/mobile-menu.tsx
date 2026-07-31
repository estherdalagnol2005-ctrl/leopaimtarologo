"use client";

import { useEffect, useState } from "react";

type MobileMenuProps = {
  whatsappUrl: string;
  instagramUrl: string;
};

export default function MobileMenu({ whatsappUrl, instagramUrl }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`}>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <div className="menu-overlay" aria-hidden={!open}>
        <nav id="mobile-navigation" aria-label="Navegação mobile">
          <p className="menu-kicker">Navegação</p>
          <div className="menu-links">
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#sobre" onClick={closeMenu}>Minha história</a>
            <a href="#atendimento" onClick={closeMenu}>Atendimento</a>
          </div>

          <div className="menu-footer">
            <a
              className="menu-book"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Agendar minha consulta <span aria-hidden="true">→</span>
            </a>
            <a
              className="menu-instagram"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Instagram @leopaimx
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
