import React from 'react';

export default function AsminahLandingPage() {
  return (
    <>
      <style>{`
        :root {
          --red: #B9031D;
          --red-deep: #7A0214;
          --black: #141210;
          --paper: #FBF8F2;
          --paper-dim: #F2EBDB;
          --ink: #141210;
          --ink-soft: #4A453E;
          --line: #E6DDC8;
          --line-on-red: rgba(255, 255, 255, 0.32);
          --serif: 'Fraunces', Georgia, serif;
          --sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: var(--red);
          color: #fff;
          font-family: var(--sans);
          font-size: 16px;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
        }
        img { max-width: 100%; }
        a { color: inherit; }
        .wrap { max-width: 1080px; margin: 0 auto; padding: 0 32px; }
        @media (max-width: 640px) { .wrap { padding: 0 20px; } }

        /* ---------- Header ---------- */
        header {
          position: sticky; top: 0; z-index: 20;
          background: rgba(185, 3, 29, 0.94);
          backdrop-filter: saturate(140%) blur(6px);
          border-bottom: 1px solid var(--line-on-red);
        }
        .nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 0;
        }
        .wordmark {
          font-family: var(--serif); font-weight: 600; font-size: 1.35rem;
          letter-spacing: 0.01em; color: #fff;
        }
        .wordmark span { color: var(--black); }
        .navlinks { display: flex; gap: 32px; font-size: 0.95rem; }
        .navlinks a { text-decoration: none; color: #fff; border-bottom: 1px solid transparent; padding-bottom: 2px; transition: border-color .2s; }
        .navlinks a:hover { border-color: #fff; }
        .nav-cta {
          font-size: 0.9rem; text-decoration: none; padding: 9px 18px;
          background: var(--black); color: #fff; border-radius: 2px;
          white-space: nowrap;
        }
        @media (max-width: 760px) { .navlinks { display: none; } }

        /* ---------- Hero ---------- */
        .hero { padding: 88px 0 80px; }
        .hero-grid {
          display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 56px; align-items: center;
        }
        @media (max-width: 860px) { .hero-grid { grid-template-columns: 1fr; gap: 48px; } }
        .hero h1 {
          font-family: var(--serif); font-weight: 500; font-style: italic;
          font-size: clamp(2.1rem, 4.4vw, 3.25rem);
          line-height: 1.12; margin: 0 0 22px; letter-spacing: -0.01em; color: #fff;
        }
        .hero p.lede {
          font-size: 1.08rem; max-width: 46ch; color: rgba(255, 255, 255, 0.86); margin: 0 0 30px;
        }
        .hero-ctas { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
        .btn-primary {
          background: var(--black); color: #fff; text-decoration: none;
          padding: 14px 26px; border-radius: 2px; font-size: 0.95rem; font-weight: 500;
          display: inline-block;
        }
        .btn-ghost {
          text-decoration: none; padding: 14px 6px; border-bottom: 1px solid #fff; color: #fff;
          font-size: 0.95rem;
        }

        /* Envelope preview card */
        .envelope {
          background: var(--black); color: #fff; border-radius: 6px;
          padding: 26px 26px 22px; transform: rotate(1.4deg);
          box-shadow: 0 24px 48px -20px rgba(0, 0, 0, 0.55);
          position: relative;
        }
        .envelope::before {
          content: "";
          position: absolute; inset: 10px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 3px; pointer-events: none;
        }
        .env-row { display: flex; justify-content: space-between; font-size: 0.78rem; opacity: 0.65; padding: 2px 0; }
        .env-subject {
          font-family: var(--serif); font-style: italic; font-size: 1.28rem;
          margin: 16px 0 10px; line-height: 1.3;
        }
        .env-preview { font-size: 0.92rem; opacity: 0.82; line-height: 1.5; }
        .env-stamp {
          position: absolute; top: 20px; right: 22px;
          width: 46px; height: 46px; border-radius: 50%;
          border: 1.5px dashed #fff; color: #fff;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--serif); font-style: italic; font-size: 0.72rem;
          transform: rotate(8deg);
        }

        /* ---------- Section shell ---------- */
        section { padding: 76px 0; }
        .rule-top { border-top: 1px solid var(--line-on-red); }
        h2 {
          font-family: var(--serif); font-weight: 500; font-size: clamp(1.6rem, 2.6vw, 2.15rem);
          margin: 0 0 14px; max-width: 24ch; color: #fff;
        }
        .section-intro { color: rgba(255, 255, 255, 0.82); max-width: 56ch; margin: 0 0 44px; font-size: 1.02rem; }

        /* ---------- Panels ---------- */
        .panel {
          background: var(--paper); color: var(--ink); border-radius: 10px;
        }

        /* ---------- Stats ---------- */

        .stats {
          display: flex !important;
          gap: 16px;
          flex-wrap: wrap;
        }
       
            .stamp {
                 flex: 0 0 45%;
                  width: 45% !important;
            }
        .stamp {
          background: var(--paper); border-radius: 10px; padding: 26px 18px; text-align: center;
        }
        .stamp .num {
          font-family: var(--serif); font-weight: 600; font-size: 2.1rem; color: var(--red);
          display: block; margin-bottom: 6px;
        }
        .stamp .label { font-size: 0.86rem; color: var(--ink-soft); line-height: 1.4; }
        .stats-note { font-size: 0.8rem; color: rgba(255, 255, 255, 0.72); margin-top: 18px; }

        /* ---------- Secteurs ---------- */
        .chips { display: flex; flex-wrap: wrap; gap: 10px; }
        .chip {
          border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 999px; padding: 9px 18px;
          font-size: 0.92rem; color: #fff;
        }

        /* ---------- Process ---------- */
        .process-list {
          background: var(--paper); border-radius: 10px; overflow: hidden;
        }
        .process-item {
          display: grid; grid-template-columns: 64px 1fr; gap: 24px;
          padding: 28px 26px; border-bottom: 1px solid var(--line);
        }
        .process-item:last-child { border-bottom: none; }
        .process-item .pnum {
          font-family: var(--serif); font-style: italic; font-size: 1.5rem; color: var(--red);
        }
        .process-item h3 { font-family: var(--serif); font-weight: 500; font-size: 1.2rem; margin: 0 0 6px; color: var(--ink); }
        .process-item p { margin: 0; color: var(--ink-soft); max-width: 60ch; }

        /* ---------- Valeurs ---------- */
        .values { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 760px) { .values { grid-template-columns: 1fr; } }
        .value-card { background: var(--paper); padding: 30px 26px; border-radius: 10px; }
        .value-card h3 { font-family: var(--serif); font-weight: 500; font-size: 1.1rem; margin: 0 0 10px; color: var(--ink); }
        .value-card p { margin: 0; font-size: 0.94rem; color: var(--ink-soft); }

        /* ---------- Bio ---------- */
        .bio-panel {
          background: var(--black); color: #fff; border-radius: 10px; padding: 48px 40px;
        }
        .bio-panel .wrap-inner { display: grid; grid-template-columns: auto 1fr 1fr; gap: 40px; align-items: start; }
        @media (max-width: 900px) { .bio-panel .wrap-inner { grid-template-columns: 1fr; gap: 28px; } }
        .bio-avatar {
          width: 120px; height: 120px; border-radius: 50%; overflow: hidden;
          border: 3px solid var(--red); flex-shrink: 0;
        }
        .bio-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bio-panel h2 { color: #fff; }
        .bio-panel p { color: rgba(255, 255, 255, 0.82); font-size: 1.02rem; max-width: 52ch; }
        .bio-quote {
          font-family: var(--serif); font-style: italic; font-size: 1.4rem; line-height: 1.4;
          border-left: 2px solid var(--red); padding-left: 22px;
        }
        .bio-sign { margin-top: 18px; font-family: var(--serif); font-style: italic; opacity: 0.85; }

        /* ---------- Temoignages ---------- */
        .testi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 760px) { .testi-grid { grid-template-columns: 1fr; } }
        .testi-card {
          background: var(--paper); border-radius: 10px; padding: 26px; color: var(--ink-soft);
        }
        .testi-card .qmark { font-family: var(--serif); font-style: italic; font-size: 2.2rem; color: var(--red); line-height: 1; }
        .testi-card p.body { margin: 10px 0 16px; font-size: 0.96rem; }
        .testi-card .who { font-size: 0.82rem; letter-spacing: 0.02em; color: var(--ink); }

        /* ---------- FAQ ---------- */
        .faq-panel { background: var(--paper); border-radius: 10px; padding: 8px 26px; }
        details {
          border-bottom: 1px solid var(--line); padding: 20px 0;
        }
        details:last-child { border-bottom: none; }
        details summary {
          cursor: pointer; font-family: var(--serif); font-size: 1.08rem; list-style: none; color: var(--ink);
          display: flex; justify-content: space-between; align-items: center; gap: 16px;
        }
        details summary::-webkit-details-marker { display: none; }
        details summary::after {
          content: "+"; font-size: 1.3rem; color: var(--red); flex-shrink: 0; transition: transform .2s;
        }
        details[open] summary::after { content: "–"; }
        details p { margin: 14px 0 0; color: var(--ink-soft); max-width: 64ch; }

        /* ---------- CTA final ---------- */
        .cta-final { text-align: center; padding: 96px 0; }
        .cta-final h2 { margin: 0 auto 18px; max-width: 20ch; }
        .cta-final p { max-width: 48ch; margin: 0 auto 34px; color: rgba(255, 255, 255, 0.85); }

        /* ---------- Footer ---------- */
        footer { padding: 40px 0; border-top: 1px solid var(--line-on-red); }
        .foot-grid { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px; font-size: 0.86rem; color: rgba(255, 255, 255, 0.8); }
        .foot-grid a { text-decoration: none; color: #fff; border-bottom: 1px solid transparent; }
        .foot-grid a:hover { border-color: currentColor; }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
        }
        .all_content {
  background: #b9031d;
}
      `}</style>

      <div className="all_content">
        <header>
          <div className="wrap nav">
            <div className="wordmark">Asminah<span>.</span></div>
            <nav className="navlinks">
              <a href="#expertise">Expertise</a>
              <a href="#secteurs">Secteurs</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </nav>
            <a className="nav-cta" href="#contact">Discutons de votre marque</a>
          </div>
        </header>

        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>Des emails que vos clients ouvrent — et qui font acheter.</h1>
              <p className="lede">Asminah, copywriter email marketing freelance. J'écris les flows et campagnes qui transforment votre liste en chiffre d'affaires, pour des marques e-commerce en France comme à l'international.</p>
              <div className="hero-ctas">
                <a className="btn-primary" href="#contact">Discutons de votre marque</a>
                <a className="btn-ghost" href="#process">Voir la méthode</a>
              </div>
            </div>
            <div className="envelope">
              <div className="env-stamp">Asminah</div>
              <div className="env-row"><span>De : Asminah</span><span>09:14</span></div>
              <div className="env-row"><span>À : Votre liste</span><span></span></div>
              <div className="env-subject">Objet : Le panier que vous avez laissé... vous attend encore</div>
              <div className="env-preview">Un rappel qui ne ressemble pas à un rappel. Le genre d'email qu'on ouvre, qu'on lit — et après lequel on clique.</div>
            </div>
          </div>
        </section>

        <section className="rule-top" id="expertise">
          <div className="wrap">
            <h2>Des repères qui expliquent pourquoi l'email reste le canal le plus rentable de l'e-commerce.</h2>
            <p className="section-intro">Quelques chiffres qui reviennent constamment dans les études du secteur — et qui montrent ce qu'un email bien écrit peut apporter à une marque.</p>
            <div className="stats">
              <div className="stamp"><span className="num">36€</span><span className="label">de retour pour 1€ investi en email marketing, en moyenne</span></div>
              <div className="stamp"><span className="num">~82%</span><span className="label">de taux d'ouverture pour un bon email de bienvenue</span></div>
              <div className="stamp"><span className="num">+760%</span><span className="label">de revenu généré par les campagnes segmentées vs non segmentées</span></div>
              <div className="stamp"><span className="num">+371%</span><span className="label">de clics quand l'email a un seul call-to-action clair</span></div>
            </div>
            <p className="stats-note">Moyennes couramment citées dans les études sectorielles (Klaviyo, Omnisend, Campaign Monitor, DMA) — vos résultats dépendront de votre liste, votre secteur et votre historique d'envoi.</p>
          </div>
        </section>

        <section className="rule-top" id="secteurs">
          <div className="wrap">
            <h2>J'écris pour des marques e-commerce, dans des secteurs très différents.</h2>
            <p className="section-intro">D'un flow d'abandon de panier pour un bijou fin à une campagne de lancement pour un complément alimentaire, l'exercice change — la méthode reste la même : comprendre la marque, parler à sa cliente, et écrire pour convertir.</p>
            <div className="chips">
              <span className="chip">Parfumerie</span>
              <span className="chip">Bijouterie</span>
              <span className="chip">Bien-être</span>
              <span className="chip">Accessoires pour animaux</span>
              <span className="chip">Mode</span>
              <span className="chip">Skincare</span>
              <span className="chip">Cosmétique</span>
              <span className="chip">Accessoires</span>
              <span className="chip">Alimentation</span>
              <span className="chip">Lifestyle</span>
            </div>
          </div>
        </section>

        <section className="rule-top" id="process">
          <div className="wrap">
            <h2>La méthode, du premier email à la routine installée.</h2>
            <div className="process-list">
              <div className="process-item">
                <div className="pnum">01</div>
                <div><h3>Audit & positionnement</h3><p>Je regarde votre marque, votre liste et vos emails existants pour comprendre ce qui fonctionne déjà — et ce qui laisse du chiffre d'affaires sur la table.</p></div>
              </div>
              <div className="process-item">
                <div className="pnum">02</div>
                <div><h3>Stratégie & calendrier éditorial</h3><p>Flows prioritaires, cadence de campagnes, angles éditoriaux : un plan clair, adapté à votre secteur et à votre saisonnalité.</p></div>
              </div>
              <div className="process-item">
                <div className="pnum">03</div>
                <div><h3>Rédaction des flows & campagnes</h3><p>Objets, corps de texte, séquences complètes — écrits pour votre ton de marque, pensés pour la conversion.</p></div>
              </div>
              <div className="process-item">
                <div className="pnum">04</div>
                <div><h3>Suivi & ajustements</h3><p>Les emails qui performent sont rarement parfaits dès le premier envoi. On ajuste objets, timing et angles au fil des résultats.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="rule-top">
          <div className="wrap">
            <h2>Ce qui change avec un copywriter dédié, plutôt qu'une agence généraliste.</h2>
            <div className="values">
              <div className="value-card"><h3>Un seul interlocuteur</h3><p>Pas de brief qui se perd entre trois personnes. Vous parlez à la personne qui écrit vos emails.</p></div>
              <div className="value-card"><h3>Une vraie connaissance client</h3><p>Un passage par le service client e-commerce, qui aide à écrire des emails qui répondent aux vraies objections d'achat.</p></div>
              <div className="value-card"><h3>Du texte pensé pour votre ton</h3><p>Chaque marque a une voix différente. Le travail commence toujours par la comprendre, avant d'écrire un seul mot.</p></div>
            </div>
          </div>
        </section>

        <section className="rule-top">
          <div className="wrap">
            <div className="bio-panel">
              <div className="wrap-inner">
                <div className="bio-avatar">
                  <img src="data:image/png;base64,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" alt="Asminah" />
                </div>
                <div>
                  <h2>Asminah</h2>
                  <p>Copywriter email marketing freelance spécialisée e-commerce. J'aide les marques à développer leur chiffre d'affaires grâce à des séquences automatisées et des campagnes d'emailing sur-mesure.</p>
                </div>
                <div>
                  <div className="bio-quote">« Un bon email ne vend pas un produit, il continue la conversation que votre client a déjà dans sa tête. »</div>
                  <div className="bio-sign">— Asminah</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rule-top">
          <div className="wrap">
            <h2>Témoignages</h2>
            <div className="testi-grid">
              <div className="testi-card">
                <div className="qmark">“</div>
                <p className="body">Les emails écrits par Asminah ont permis de doubler nos revenus issus des flows d'abandon de panier dès le premier mois.</p>
                <div className="who">FONDATRICE — MARQUE DE BIJOUX</div>
              </div>
              <div className="testi-card">
                <div className="qmark">“</div>
                <p className="body">Un ton parfaitement aligné avec notre image de marque et une réactivité exemplaire. Les résultats sur nos campagnes de lancement parlent d'eux-mêmes.</p>
                <div className="who">DIRECTEUR MARKETING — COSMÉTIQUE</div>
              </div>
            </div>
          </div>
        </section>

        <section className="rule-top">
          <div className="wrap">
            <h2>Foire aux questions</h2>
            <div className="faq-panel">
              <details>
                <summary>Combien de temps prend la mise en place des flows ?</summary>
                <p>En moyenne, comptez 2 à 3 semaines entre le brief initial et la livraison finale des séquences prêtes à être intégrées dans votre outil (Klaviyo, ActiveCampaign, etc.).</p>
              </details>
              <details>
                <summary>Travaillez-vous avec des outils spécifiques ?</summary>
                <p>Je travaille principalement avec Klaviyo, Brevo (Sendinblue), ActiveCampaign, et Mailchimp, mais la méthode s'adapte à n'importe quelle plateforme d'emailing.</p>
              </details>
              <details>
                <summary>Proposez-vous le design et l'intégration des emails ?</summary>
                <p>Mon cœur d'expertise est le copywriting et la stratégie. Je fournis des maquettes textuelles claires avec suggestions de structure visuelle, et peux collaborer avec votre designer/intégrateur ou vous recommander des partenaires.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="cta-final" id="contact">
          <div className="wrap">
            <h2>Prêt à faire de l'email votre canal le plus rentable ?</h2>
            <p>Réservez un échange de 30 minutes pour analyser vos emails actuels et identifier vos opportunités de croissance.</p>
            <a className="btn-primary" href="mailto:contact@asminah.com">Prendre rendez-vous</a>
          </div>
        </section>

        <footer>
          <div className="wrap foot-grid">
            <div>© {new Date().getFullYear()} Asminah. Tous droits réservés.</div>
            <div>
              <a href="#expertise">Expertise</a> · <a href="#secteurs">Secteurs</a> · <a href="#process">Process</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}