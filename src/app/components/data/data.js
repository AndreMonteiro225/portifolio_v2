import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

import Image from "next/image";

export const projects = [
  {
    id: 1,
    titulo: "cardapio de restaurante",
    url: (
      <a href="https://cardapio-para-restaurante.vercel.app/" target="_blank">
        <Image
          src="/1.36MB_restaurante.webp"
          width={2400}
          height={1350}
          alt="projeto restaurante"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={85}
        />
      </a>
    ),
    technologies: (
      <>
        <FaReact />
        <RiJavascriptFill />
        <IoLogoCss3 />
        <IoLogoHtml5 />
        <RiNextjsFill />
      </>
    ),
  },
  {
    id: 2,
    titulo: "site agencia de design",
    url: (
      <a href="https://agencia-design-digital-mu.vercel.app/" target="_blank">
        <Image
          src="/1.29MB_agencia_design.webp"
          height={1350}
          width={2400}
          alt="Site para agencia de designs"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={85}
        />
      </a>
    ),
    technologies: (
      <>
        <FaReact />
        <RiJavascriptFill />
        <IoLogoCss3 />
        <IoLogoHtml5 />
      </>
    ),
  },
  {
    id: 3,
    titulo: "SPA de uma sorveteria",
    url: (
      <a href="https://spa-sorveteria-iota.vercel.app/" target="_blank">
        <Image
          src="/269KB_sorveteria.webp"
          height={1350}
          width={2400}
          alt="SPA sorveteria"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={85}
        />
      </a>
    ),
    technologies: (
      <>
        <FaReact />
        <IoLogoCss3 />
        <IoLogoHtml5 />
        <RiNextjsFill />
      </>
    ),
  },
  {
    id: 4,
    titulo: "site para agencia de viagem",
    url: (
      <a
        href="https://projeto-agencia-de-viagens-alpha.vercel.app/"
        target="_blank"
      >
        <Image
          src="/1.71MB_site_viagens.webp"
          height={1350}
          width={2400}
          alt="agencia de viagens"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={85}
        />
      </a>
    ),
    technologies: (
      <>
        <IoLogoCss3 />
        <IoLogoHtml5 />
      </>
    ),
  },
  {
    id: 5,
    titulo: "Site de Vendas",
    url: (
      <a href="https://projeto-uidi.vercel.app/" target="_blank">
        <Image
          src="/986KB_site_uidi.webp"
          height={1350}
          width={2400}
          alt="site de vendas"
                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={85}
        />
      </a>
    ),
    technologies: (
      <>
        <FaReact />
        <RiJavascriptFill />
        <IoLogoCss3 />
        <IoLogoHtml5 />
        <RiNextjsFill />
      </>
    ),
  },
];

export const heroSlides = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Criação de sites modernos e responsivos para sua empresa.",
    imageUrl: "/748KB_hero_webDevelop.webp",
    alt: "desenvolvimento web",
  },
  {
    id: 2,
    title: "Sistemas Personalizados",
    description:
      "Sistemas personalizados para otimizar os processos do seu negócio.",
    imageUrl: "/913KB_hero_sistemas.webp",
    alt: "sistemas personalizados",
  },
  {
    id: 3,
    title: "Relevância Online",
    description:
      "Sites construidos trabalhando com SEO a fim de aumentar a relevância online.",
    imageUrl: "/9.96MB_hero_SEO.webp",
    alt: "relevância online",
  },
];
