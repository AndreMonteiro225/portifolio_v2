import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

import Image from "next/image";
import restauranteImg from "../../../../public/restaurante_portifolio.png";
import agenciaDedignImg from "../../../../public/agencia_design_portifolio.png";
import sorveteriaImg from "../../../../public/captura de tela SPA-sorveteria.png";
import agenciaViagemImg from "../../../../public/agencia_viagem.png";
import siteVendasImg from "../../../../public/foto_site_uidi.png";

export const projects = [
  {
    id: 1,
    titulo: "cardapio de restaurante",
    url: <a href="https://cardapio-para-restaurante.vercel.app/" target="_blank"><Image src={restauranteImg} alt="projeto restaurante"/></a>,
    technologies: <>
      <FaReact/>
      <RiJavascriptFill/>
      <IoLogoCss3/>
      <IoLogoHtml5/>
      <RiNextjsFill/>
    </>  
  },
 {
    id: 2,
    titulo: "site agencia de design",
    url: <a href="https://agencia-design-digital-mu.vercel.app/" target="_blank"><Image src={agenciaDedignImg} alt="Site para agencia de designs"/></a>,
    technologies: <>
      <FaReact/>
      <RiJavascriptFill/>
      <IoLogoCss3/>
      <IoLogoHtml5/>
    </>   
  },
  {
    id: 3,
    titulo: "SPA de uma sorveteria",
    url: <a href="https://spa-sorveteria-iota.vercel.app/" target="_blank"><Image src={sorveteriaImg} alt="SPA sorveteria"/></a>,
    technologies: <>
      <FaReact/>
      <IoLogoCss3/>
      <IoLogoHtml5/>
      <RiNextjsFill/>
    </>
  },
  {
    id: 4,
    titulo: "site para agencia de viagem",
    url: <a href="https://projeto-agencia-de-viagens-alpha.vercel.app/" target="_blank"><Image src={agenciaViagemImg} alt="agencia de viagens"/></a>,
    technologies: <>
      <IoLogoCss3/>
      <IoLogoHtml5/>
    </>
  },
  {
    id: 5,
    titulo: "Site de Vendas",
    url: <a href="https://projeto-uidi.vercel.app/" target="_blank"><Image src={siteVendasImg} alt="site de vendas"/></a>,
    technologies: <>
      <FaReact/>
      <RiJavascriptFill/>
      <IoLogoCss3/>
      <IoLogoHtml5/>
      <RiNextjsFill/>
    </>
  }
];

export const heroSlides = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    description: "Criação de sites modernos e responsivos para sua empresa.",
    imageUrl: "/bannerHero2_1200h.webp",
    alt: "Imagem representando desenvolvimento web"
  },
  {
    id: 2,
    title: "Sistemas Personalizados",
    description: "Soluções sob medida para otimizar os processos do seu negócio.",
    imageUrl: "/bannerHero1.webp",
    alt: "Imagem representando sistemas personalizados"
  },
  {
    id: 3,
    title: "Sistemas Personalizados",
    description: "Soluções sob medida para otimizar os processos do seu negócio.",
    imageUrl: "/bannerHero2_1200h.webp",
    alt: "Imagem representando sistemas personalizados"
  }
];