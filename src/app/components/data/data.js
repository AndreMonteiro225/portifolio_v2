import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


import Image from "next/image";

export const projects = [
  {
    id: 1,
    titulo: "site para empresa de topografia",
    url: (
      <a href="topoleasing_img.webp" target="_blank">
        <Image
          src="/topoleasing_img.webp"
          width={1280}
          height={720}
          alt="site barbearia"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={75}
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
        <FaNodeJs />
        <FaGoogle />

      </>
    ),
  },
  {
    id: 2,
    titulo: "site para barbearia",
    url: (
      <a href="https://barbeariadojohnny.com.br" target="_blank">
        <Image
          src="/print_screen_barbearia.webp.webp"
          width={1280}
          height={720}
          alt="site barbearia"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={75}
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
        <FaGoogle />

      </>
    ),
  },
  {
    id: 3,
    titulo: "cardapio de restaurante",
    url: (
      <a href="https://cardapio-para-restaurante.vercel.app/" target="_blank">
        <Image
          src="/1.36MB_restaurante.webp"
          width={1280}
          height={720}
          alt="projeto restaurante"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={75}
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
    id: 4,
    titulo: "agencia de design",
    url: (
      <a href="https://agencia-design-digital-mu.vercel.app/" target="_blank">
        <Image
          src="/1.29MB_agencia_design.webp"
          width={1280}
          height={720}
          alt="Site para agencia de designs"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={75}
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
    id: 5,
    titulo: "sorveteria",
    url: (
      <a href="https://spa-sorveteria-iota.vercel.app/" target="_blank">
        <Image
          src="/269KB_sorveteria.webp"
          width={1280}
          height={720}
          alt="SPA sorveteria"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={75}
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
    id: 6,
    titulo: "site com formulário de contato para agencia de viagem",
    url: (
      <a
        href="https://projeto-agencia-de-viagens-alpha.vercel.app/"
        target="_blank"
      >
        <Image
          src="/1.71MB_site_viagens.webp"
          width={1280}
          height={720}
          alt="agencia de viagens"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
          priority
          quality={75}
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
  // {
  //   id: ,
  //   titulo: "Site de Vendas online",
  //   url: (
  //     <a href="https://projeto-uidi.vercel.app/" target="_blank">
  //       <Image
  //         src="/986KB_site_uidi.webp"
  //         height={1350}
  //         width={2400}
  //         alt="site de vendas"
  //         // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 2400px"
  //         priority
  //         quality={85}
  //       />
  //     </a>
  //   ),
  //   technologies: (
  //     <>
  //       <FaReact />
  //       <RiJavascriptFill />
  //       <IoLogoCss3 />
  //       <IoLogoHtml5 />
  //       <RiNextjsFill />
  //     </>
  //   ),
  // },
];

export const heroSlides = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description:
      "Fazemos o site do seu negócio baseado no design da sua identidade digital",
    imageUrl: "/748KB_hero_webDevelop.webp",
    alt: "desenvolvimento web",
  },
  {
    id: 2,
    title: "Trafego Online e soluções para aumentar sua relevância digital",
    description:
      "Receba tráfego qualificado para o seu site e aumente suas vendas.",
    imageUrl: "/913KB_hero_sistemas.webp",
    alt: "tráfego online",
  },
  {
    id: 3,
    title:
      "Relevância Online, Ficha do Google Meu Negócio, Ranquamento Online do seu negócio",
    description:
      "Relevância Online, Ficha do Google Meu Negócio, Ranquamento Online do seu negócio",
    imageUrl: "/9.96MB_hero_SEO.webp",
    alt: "relevância online",
  },
];
