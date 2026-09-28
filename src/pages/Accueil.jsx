import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// Remplacement de FaFacebook par FaLinkedin ici
import { 
  FaCode, 
  FaEnvelope, 
  FaLaptopCode, 
  FaGem, 
  FaEye, 
  FaUsers, 
  FaHeart, 
  FaWhatsapp, 
  FaLinkedin 
} from "react-icons/fa";

// Variantes d'animation au défilement réutilisables
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Accueil() {
  const canvasRef = useRef(null);

  // Données de ton Portfolio
  const projets = [
    {
      id: 1,
      titre: "Projet 1",
      description: "Description du projet",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      titre: "Projet 2",
      description: "Description du projet",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      titre: "Projet 3",
      description: "Description du projet",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const services = [
    {
      icone: <FaGem className="text-[#ff5722] text-5xl" />,
      titre: "Expertise WordPress & Builders",
      description: "Création de sites sur-mesure, performants et faciles à administrer avec Kadence, Elementor et Divi."
    },
    {
      icone: <FaEye className="text-[#ff5722] text-5xl" />,
      titre: "Performance & Veille",
      description: "Optimisation des temps de chargement, respect des bonnes pratiques SEO et veille technologique constante."
    },
    {
      icone: <FaUsers className="text-[#ff5722] text-5xl" />,
      titre: "Ergonomie & UX/UI",
      description: "Conception d'interfaces modernes et intuitives, pensées pour offrir une expérience utilisateur optimale."
    },
    {
      icone: <FaHeart className="text-[#ff5722] text-5xl" />,
      titre: "Engagement & Suivi",
      description: "Accompagnement rigoureux, code propre et soin méticuleux apporté aux détails sur chaque projet."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const competences = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "WordPress",
    "PHP",
    "Node.js",
    "MySQL",
  ];

  const formations = [
    {
      date: "2017-2018",
      titre: "Licence professionnelle CDW",
      description: "Formation en alternance à l'école Aries (Licence conception et développement d'application web et mobile).",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=150&auto=format&fit=crop",
    },
    {
      date: "2014-2016",
      titre: "BTS Services Informatiques aux Organisations",
      description: "Formation au lycée Ella Fitzgerald en spécialité SLAM (Solution Logiciel Application Métier).",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=150&auto=format&fit=crop",
    },
    {
      date: "2014",
      titre: "BAC STMG",
      description: "BAC STMG au lycée Ella Fitzgerald en spécialité SIG (Système de Gestion de l'Information).",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=150&auto=format&fit=crop",
    },
    {
      date: "Avant 2014",
      titre: "Passion pour l'informatique",
      description: "Avant de débuter une formation dans le développement web, j'ai d'abord commencé par être passionné par la complexité de l'informatique et plus précisément dans la programmation.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=150&auto=format&fit=crop",
    }
  ];

  // Constellation & Effet Prisme Géométrique
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const particleCount = 75; 
    const connectionDistance = 120;
    
    const mouse = {
      x: null,
      y: null,
      radius: 120 
    };

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
        canvas.height = canvas.parentElement?.clientHeight || 700;
      }
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8, 
          vy: (Math.random() - 0.5) * 0.8,
          baseVx: 0,
          baseVy: 0
        });
        particles[i].baseVx = particles[i].vx;
        particles[i].baseVy = particles[i].vy;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        if (mouse.x !== null && mouse.y !== null) {
          const dxMouse = p.x - mouse.x;
          const dyMouse = p.y - mouse.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < mouse.radius) {
            const force = (mouse.radius - distMouse) / mouse.radius; 
            const forceDirectionX = dxMouse / distMouse;
            const forceDirectionY = dyMouse / distMouse;
            
            p.x += forceDirectionX * force * 4; 
            p.y += forceDirectionY * force * 4;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx1 = particles[i].x - particles[j].x;
          const dy1 = particles[i].y - particles[j].y;
          const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);

          if (dist1 < connectionDistance) {
            for (let k = j + 1; k < particles.length; k++) {
              const dx2 = particles[j].x - particles[k].x;
              const dy2 = particles[j].y - particles[k].y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

              const dx3 = particles[k].x - particles[i].x;
              const dy3 = particles[k].y - particles[i].y;
              const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);

              if (dist2 < connectionDistance && dist3 < connectionDistance) {
                const avgDist = (dist1 + dist2 + dist3) / 3;
                const alphaTriangle = (1 - avgDist / connectionDistance) * 0.04;

                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.lineTo(particles[k].x, particles[k].y);
                ctx.closePath();
                
                ctx.fillStyle = `rgba(255, 255, 255, ${alphaTriangle})`;
                ctx.fill();
              }
            }

            const alphaLine = (1 - dist1 / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alphaLine})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resizeCanvas();
    createParticles();
    draw();

    window.addEventListener("resize", resizeCanvas);
    const parentSection = canvas.parentElement;
    if (parentSection) {
      parentSection.addEventListener("mousemove", handleMouseMove);
      parentSection.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      if (parentSection) {
        parentSection.removeEventListener("mousemove", handleMouseMove);
        parentSection.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-base-100 text-base-content font-sans antialiased selection:bg-primary selection:text-primary-content">
      
      {/* 1. HERO SECTION */}
      <section className=" hero-content- relative min-h-screen flex flex-col justify-center items-center bg-[#1e2229] overflow-hidden px-6 text-center">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />

        <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-black uppercase tracking-wider leading-tight"
          >
            <span className="text-white font-bold text-[50px]"> Vous recherchez un </span><br />
            <span className="text-white font-bold text-[50px]">développeur web ?</span>
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-1 bg-[#ff5722] my-8 rounded-full"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            Ça tombe bien ! Je suis passionné par le web et j'ai pu acquérir un certain nombre de compétences depuis mes débuts dans le web il y a déjà plus de 10 ans.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-gray-400 text-base md:text-lg mt-2 font-light italic"
          >
            La suite c'est à vous de la découvrir !
          </motion.p>

          <motion.a 
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 12, 0] }}
            transition={{ 
              opacity: { delay: 1, duration: 0.5 },
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" } 
            }}
            className="mt-14 w-14 h-14 bg-[#ff5722] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#e64a19] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </motion.a>
        </div>
      </section>

      {/* 2. À PROPOS */}
      <section id="about" className="py-24 bg-base-200 border-b border-base-300">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 uppercase tracking-wider">À propos</h2>
            <div className="w-16 h-1 bg-[#ff5722] mx-auto rounded-full mb-8"></div>
            <p className="text-xl leading-relaxed text-base-content/80">
              Développeur web spécialisé en WordPress, React et PHP. J'accompagne les entreprises dans la création de sites performants, modernes et optimisés SEO.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="py-24 bg-base-100 text-base-content border-b border-base-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider mb-4">
              A votre service !
            </h2>
            <div className="w-12 h-1 bg-[#ff5722] mx-auto rounded-full" />
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className="flex flex-col items-center p-4 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icone}
                </div>
                <h3 className="text-xl font-bold tracking-wide mb-3 text-base-content">
                  {service.titre}
                </h3>
                <p className="text-base-content/70 text-sm leading-relaxed max-w-[240px]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. COMPÉTENCES */}
      <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider mb-4">Mes Compétences</h2>
          <div className="w-16 h-1 bg-[#ff5722] mx-auto rounded-full"></div>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {competences.map((skill, index) => (
            <motion.span
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-base-200 border border-base-300 rounded-full font-medium shadow-sm cursor-default hover:border-primary/50 hover:bg-base-100 transition-all duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* 5. PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-base-200 border-y border-base-300">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider mb-4">Portfolio</h2>
            <div className="w-16 h-1 bg-[#ff5722] mx-auto rounded-full"></div>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {projets.map((projet) => (
              <motion.div
                key={projet.id}
                variants={fadeInUp}
                className="card card-compact bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-all duration-300 group"
              >
                <figure className="overflow-hidden">
                  <img
                    src={projet.image}
                    alt={projet.titre}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </figure>

                <div className="card-body p-6">
                  <h3 className="card-title text-xl font-bold mb-1">
                    {projet.titre}
                  </h3>
                  <p className="text-base-content/70">
                    {projet.description}
                  </p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-link text-[#ff5722] p-0 no-underline hover:underline btn-sm">
                      Voir le projet →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. FORMATION */}
      <section id="formation" className="py-24 bg-base-100 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider mb-4">
            Formation
          </h2>
          <div className="w-16 h-1 bg-[#ff5722] mx-auto rounded-full mb-4"></div>
          <p className="text-base-content/60 italic text-sm">
            Voici mon parcours depuis mes débuts en développement web.
          </p>
        </div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {formations.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <li key={index}>
                {index !== 0 && <hr className="bg-base-300" />}

                <div className="timeline-middle my-4">
                  <motion.div 
                    className="avatar group"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="w-24 h-24 rounded-full ring ring-[#ff5722] ring-offset-base-100 ring-offset-2 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
                      <img src={item.image} alt={item.titre} className="object-cover w-full h-full" />
                    </div>
                  </motion.div>
                </div>

                <div className={`mb-10 p-4 max-w-md ${isEven ? 'timeline-start text-end md:pr-8' : 'timeline-end text-start md:pl-8'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <time className="font-mono text-sm font-bold text-[#ff5722] opacity-80 block mb-1">
                      {item.date}
                    </time>
                    <h3 className="text-xl font-bold text-base-content mb-2">
                      {item.titre}
                    </h3>
                    <p className="text-base-content/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {index !== formations.length - 1 && <hr className="bg-base-300" />}
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center mt-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 rounded-full bg-warning text-warning-content font-bold flex items-center justify-center text-center text-xs shadow-lg ring ring-warning ring-offset-2 ring-offset-base-100"
          >
            Début de mon Parcours
          </motion.div>
        </div>
      </section>

      {/* 7. EXPÉRIENCES */}
      <section className="py-24 max-w-4xl mx-auto px-6 border-t border-base-300">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider mb-4">Expériences</h2>
          <div className="w-16 h-1 bg-[#ff5722] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 relative pl-4 md:pl-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-[#ff5722] pl-6 py-2"
          >
            <div className="flex items-center gap-2 mb-1">
              <FaLaptopCode className="text-[#ff5722]" />
              <h3 className="font-bold text-xl">Développeur Front-End</h3>
            </div>
            <span className="badge badge-sm bg-base-200 text-base-content/60 border-none font-medium mb-3">
              2023 - Aujourd'hui
            </span>
            <p className="text-base-content/70">
              Développement d'interfaces web modernes avec React.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-gray-400 pl-6 py-2"
          >
            <div className="flex items-center gap-2 mb-1">
              <FaCode className="text-gray-500" />
              <h3 className="font-bold text-xl">Développeur WordPress</h3>
            </div>
            <span className="badge badge-sm bg-base-200 text-base-content/60 border-none font-medium mb-3">
              2021 - 2023
            </span>
            <p className="text-base-content/70">
              Création de thèmes et plugins personnalisés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8. CONTACT (Divisé en 2 colonnes avec LinkedIn) */}
      <section id="contact" className="py-24 bg-neutral text-neutral-content shadow-inner">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 uppercase tracking-wider">Contact</h2>
            <div className="w-16 h-1 bg-[#ff5722] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Colonne Gauche : Infos réseaux */}
            <div className="space-y-8 text-white">
              <div>
                <h3 className="text-2xl font-bold mb-2">Discutons de votre projet</h3>
                <p className="text-gray-300 font-light leading-relaxed">
                  Que ce soit pour une création de site, une refonte ou une simple question, n'hésitez pas à me contacter directement ou via le formulaire.
                </p>
              </div>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/0345072165" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 bg-base-100/10 rounded-xl border border-white/10 hover:border-[#ff5722]/50 hover:bg-base-100/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-md">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">WhatsApp</p>
                    <p className="text-base font-medium group-hover:text-[#ff5722] transition-colors">+261 34 50 721 65</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:ambinintsoatafita467@gmail.com" 
                  className="flex items-center gap-4 p-4 bg-base-100/10 rounded-xl border border-white/10 hover:border-[#ff5722]/50 hover:bg-base-100/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#ff5722] rounded-full flex items-center justify-center text-white text-xl shadow-md">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">Email</p>
                    <p className="text-base font-medium group-hover:text-[#ff5722] transition-colors">ambinintsoatafita467@gmail.com</p>
                  </div>
                </a>

                {/* LinkedIn - Modification effectuée ici */}
                <a 
                  href="https://www.linkedin.com/in/tafita-ambinintsoa-raharinaivo-3a66b9380/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 p-4 bg-base-100/10 rounded-xl border border-white/10 hover:border-[#ff5722]/50 hover:bg-base-100/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#0077b5] rounded-full flex items-center justify-center text-white text-xl shadow-md">
                    <FaLinkedin />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-mono">LinkedIn</p>
                    <p className="text-base font-medium group-hover:text-[#ff5722] transition-colors">Mon profil LinkedIn</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Colonne Droite : Le formulaire */}
            <form className="space-y-5 bg-base-100 p-8 rounded-2xl shadow-xl text-base-content w-full">
              <div className="form-control w-full">
                <label className="label font-medium text-sm">Nom</label>
                <input
                  type="text"
                  placeholder="Nom"
                  className="input input-bordered w-full focus:input-primary bg-base-200"
                />
              </div>

              <div className="form-control w-full">
                <label className="label font-medium text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full focus:input-primary bg-base-200"
                />
              </div>

              <div className="form-control w-full">
                <label className="label font-medium text-sm">Votre message</label>
                <textarea
                  rows={5}
                  placeholder="Votre message"
                  className="textarea textarea-bordered w-full focus:textarea-primary bg-base-200"
                />
              </div>

              <button
                type="submit"
                className="btn bg-[#ff5722] hover:bg-[#e64a19] text-white w-full shadow-md mt-4 border-none"
              >
                Envoyer
              </button>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
}