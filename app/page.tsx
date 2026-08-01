import ServicesCarousel from "./services-carousel";
import ProcessTimeline from "./process-timeline";
import ScrollReveal from "./scroll-reveal";
import MobileMenu from "./mobile-menu";

const whatsappUrl =
  "https://api.whatsapp.com/message/SVUCDDB7LGHPP1?autoload=1&app_absent=0&utm_source=ig";

const instagramUrl =
  "https://www.instagram.com/leopaimx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const services = [
  {
    title: "Baralho Cigano",
    category: "Orientação e caminhos",
    text: "Uma leitura direta para esclarecer o seu momento, revelar possibilidades e orientar decisões com mais segurança.",
  },
  {
    title: "Vidas Passadas",
    category: "Tiragem de baralho",
    text: "Uma leitura para compreender aprendizados e padrões de outras trajetórias que podem estar refletindo na sua vida atual.",
  },
  {
    title: "Tarô",
    category: "Orientação e autoconhecimento",
    text: "Uma leitura simbólica para compreender desafios, tendências e caminhos, trazendo clareza para as suas escolhas.",
  },
  {
    title: "Energia do Amor",
    category: "Tiragem de baralho",
    text: "Analiso a energia atual e as possibilidades futuras da sua vida amorosa, revelando pontos que pedem atenção para relações mais saudáveis.",
  },
  {
    title: "Tarô Fitoenergético",
    category: "Equilíbrio energético",
    text: "Uma prática voltada à harmonização das emoções e dos pensamentos por meio da sabedoria energética das plantas.",
  },
  {
    title: "Terapia Multidimensional",
    category: "Terapia holística",
    text: "Um processo de limpeza e harmonização energética que acolhe questões emocionais, resgata a confiança e favorece clareza e equilíbrio.",
  },
  {
    title: "Reiki à Distância",
    category: "Energia universal",
    text: "Uma prática integrativa realizada à distância, direcionada à harmonização dos centros energéticos e à promoção de bem-estar.",
  },
  {
    title: "Mandala Astrológica Cigana",
    category: "Panorama de vida",
    text: "Uma leitura ampla de diferentes áreas da vida para compreender padrões, possibilidades, desafios e caminhos de transformação.",
  },
  {
    title: "Anjo da Guarda",
    category: "Trabalho espiritual",
    text: "Um trabalho de conexão espiritual, proteção e fortalecimento para aproximar você de seus amparadores e afastar energias densas.",
  },
  {
    title: "Acordos Espirituais",
    category: "Tiragem de baralho",
    text: "Um oráculo de autoconhecimento para investigar simbolicamente acordos, ciclos e padrões que acompanham sua trajetória espiritual.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3 20.6l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
      <path d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.5 1.1 1.4 2 2.5 2.6.3.2.5.2.7 0l.9-1.1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .4-.2 1.4-1 2-.7.6-1.6.8-2.7.4-1.2-.4-2.7-1-4.4-2.5-1.4-1.3-2.4-2.9-2.7-4.1-.3-1.1 0-1.8.3-2.4Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Léo Paim — início">
          <strong>Léo Paim</strong>
          <small>Tarólogo profissional</small>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Minha história</a>
          <a href="#atendimento">Atendimento</a>
        </nav>

        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Agendar consulta <ArrowIcon />
        </a>

        <MobileMenu whatsappUrl={whatsappUrl} instagramUrl={instagramUrl} />
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Tarô • Cartomancia • Terapias holísticas</p>
          <h1>
            Clareza para os seus <em>caminhos.</em>
          </h1>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Agendar minha consulta <ArrowIcon />
            </a>
          </div>
          <div className="hero-proof">
            <span className="proof-line" />
            <p><strong>Atendimento com respeito</strong><br />sensibilidade e propósito</p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/leo-paim-hero-v3.webp"
              alt="Léo Paim durante um momento de conexão espiritual"
            />
            <span className="photo-vignette" aria-hidden="true" />
          </div>
          <p className="vertical-note">Espiritualidade • orientação • equilíbrio</p>
        </div>
      </section>

      <section className="marquee" aria-label="Áreas de atendimento">
        <div>
          <span>Tarô</span><b>✦</b><span>Cartomancia</span><b>✦</b>
          <span>Espiritualidade</span><b>✦</b><span>Autoconhecimento</span><b>✦</b>
          <span>Tarô</span><b>✦</b><span>Cartomancia</span><b>✦</b>
          <span>Espiritualidade</span><b>✦</b><span>Autoconhecimento</span><b>✦</b>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-kicker light"><p>Serviços espirituais</p></div>
        <div className="services-intro">
          <div>
            <p className="eyebrow"><span /> Escolha a sua consulta</p>
            <h2>Caminhos de orientação e <em>autoconhecimento.</em></h2>
          </div>
          <p>
            Cada atendimento é conduzido com sensibilidade, responsabilidade e
            respeito à sua história. Se você não souber qual escolher, fale comigo
            e eu ajudo a encontrar o mais adequado para o seu momento.
          </p>
        </div>

        <ServicesCarousel services={services} whatsappUrl={whatsappUrl} />
      </section>

      <section className="special-works" id="trabalhos-especiais">
        <div className="special-works-shell">
          <header className="special-works-heading">
            <p className="eyebrow"><span /> Trabalhos especiais <span /></p>
            <h2>Cuidados para intenções <em>especiais.</em></h2>
            <p>
              Trabalhos conduzidos com responsabilidade, respeito e atenção ao seu
              momento. Fale comigo para entender qual caminho conversa com a sua intenção.
            </p>
          </header>

          <div className="special-works-grid">
            <article className="special-work">
              <span className="special-work-symbol" aria-hidden="true">✧</span>
              <p className="special-work-label">Harmonização afetiva</p>
              <h3>Adoçamento Amoroso</h3>
              <p>
                Um trabalho voltado a suavizar as energias da relação, favorecer
                o diálogo e fortalecer a harmonia entre o casal.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Consultar este trabalho <ArrowIcon />
              </a>
            </article>

            <article className="special-work">
              <span className="special-work-symbol" aria-hidden="true">☼</span>
              <p className="special-work-label">Movimento e possibilidades</p>
              <h3>Abertura de Caminhos</h3>
              <p>
                Um trabalho espiritual para movimentar energias estagnadas,
                fortalecer possibilidades e apoiar novos ciclos.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Consultar este trabalho <ArrowIcon />
              </a>
            </article>

            <article className="special-work special-work-collective">
              <span className="special-work-symbol" aria-hidden="true">✦</span>
              <p className="special-work-label">Datas e propósitos especiais</p>
              <h3>Trabalhos Coletivos</h3>
              <p>
                Trabalhos realizados em datas específicas, reunindo pessoas em
                torno de uma mesma intenção espiritual.
              </p>
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                Ver quais estão abertos <ArrowIcon />
              </a>
            </article>

            <article className="special-work">
              <span className="special-work-symbol" aria-hidden="true">☾</span>
              <p className="special-work-label">Panorama dos próximos ciclos</p>
              <h3>Tiragem Anual</h3>
              <p>
                Uma leitura completa das energias e tendências dos próximos
                doze meses, com orientações para cada etapa do ano.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Consultar este trabalho <ArrowIcon />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-heading">
          <p className="eyebrow"><span /> Minha história <span /></p>
          <h2>Quem sou eu</h2>
          <p className="about-statement">A espiritualidade sempre esteve <em>em mim.</em></p>
          <div className="mystic-mark" aria-hidden="true">
            <span>☾</span><i /><span>✦</span><i /><span>☽</span>
          </div>
        </div>

        <div className="about-feature">
          <figure className="about-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/leo-paim-historia.jpg"
              alt="Léo Paim durante um ritual espiritual"
            />
            <span aria-hidden="true" />
          </figure>

          <div className="about-copy">
            <p className="lead">
              Meu nome é <strong>Léo Paim</strong>. Sou tarólogo há 5 anos,
              cartomante e terapeuta holístico. Minha conexão com a
              espiritualidade começou aos sete anos e cresceu comigo. Guiado
              pelas minhas raízes e por diferentes caminhos de fé, encontrei
              nas tradições de matriz africana o meu verdadeiro chamado.
            </p>
            <blockquote>
              “Hoje, uso minha sensibilidade para orientar, acolher e ajudar cada
              pessoa a reencontrar clareza e equilíbrio.”
            </blockquote>
          </div>
        </div>

      </section>

      <section className="process section" id="atendimento">
        <div className="section-kicker"><p>Como funciona</p></div>
        <div className="process-header">
          <p className="eyebrow"><span /> Seu atendimento</p>
          <h2>Do primeiro contato à sua <em>orientação.</em></h2>
        </div>
        <ProcessTimeline />
      </section>

      <section className="final-cta">
        <div className="final-symbol" aria-hidden="true"><span>✦</span></div>
        <p className="eyebrow"><span /> O seu momento começa aqui</p>
        <h2>Encontre clareza para seguir o seu <em>caminho.</em></h2>
        <p>
          Se algo dentro de você pede respostas, acolhimento ou uma nova direção,
          estou pronto para receber a sua história.
        </p>
        <div className="final-actions">
          <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp <WhatsAppIcon />
          </a>
          <a className="social-link" href={instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon /> Falar pelo direct
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio" aria-label="Voltar ao início">
          <strong>Léo Paim</strong>
          <small>Tarólogo profissional</small>
        </a>
        <p>Tarô • Cartomancia • Terapias holísticas</p>
        <div className="footer-links">
          <a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <small className="disclaimer">
          Os atendimentos possuem caráter espiritual e de autoconhecimento e não
          substituem acompanhamento médico, psicológico, jurídico ou financeiro.
        </small>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">
        <WhatsAppIcon />
        <span>Agendar</span>
      </a>
    </main>
  );
}
