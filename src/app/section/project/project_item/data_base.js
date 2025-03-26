const projects = [
  {
    id: 1,
    img: "/image/project/image_one.svg",
    title: "UNIMARKET",
    status: "EN PROCESO",
    percentage: "55%",
    description: "App para comprar, vender y compartir material académico.",
    characteristics: [
      "Dos épicas principales: compraventa y comunidad.",
      "Búsqueda filtrada en cascada.",
      "Integración con Mercado Pago Checkout Pro API.",
      "Integración con Cloudinary para almacenamiento de imágenes.",
      "Inicio de sesión con Passport y Express Session.",
      "Lógica de puntos para incentivar los aportes voluntarios en la comunidad.",
      "Sistema de favoritos para publicaciones y aportes.",
      "Panel de administración con sistema CRUD y endpoints específicos.",
      "Renderizado hibrido (CSR, SSG, SSR) con Next.js para mejorar el SEO.",
    ],
    technology: "Next / Node-Express / MySQL-Prisma",
    linkApp: "",
    linkCode: "https://github.com/fernandozarate07/summaries-app-back",
  },
  {
    id: 2,
    img: "/image/project/image_two.svg",
    title: "PROTOPROGRAMADORES",
    status: "FINALIZADO",
    percentage: "100%",
    description: "Protoprogramadores es la web de una agencia de desarrollo web que brinda soluciones digitales.",
    characteristics: ["Renderizado hibrido (CSR y SSG) con Next.js", "Integración con redes sociales.", "Diseño de UI"],
    technology: "Next",
    linkApp: "https://www.protoprogramadores.com",
    linkCode: "https://github.com/fernandozarate07/protoprogramadores",
  },
];

export default projects;
