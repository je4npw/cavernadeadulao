export const galeriaContent = {
  meta: {
    title: "Galeria — Caverna de Adulão",
    description: "Imagens do espaço, das atividades e da rotina do Centro de Reabilitação.",
    ogTitle: "Galeria — Caverna de Adulão",
    ogDescription: "O cotidiano da casa em imagens.",
  },
  header: {
    eyebrow: "O dia a dia",
    title: "Imagens da casa.",
    intro: "O espaço, as atividades e o tempo que passa devagar — registros simples do cotidiano.",
  },
  images: Array.from({ length: 80 }, (_, i) => ({
    src: `/galeria/${i + 1}.webp`,
    alt: `Imagem da galeria ${i + 1}`,
  })),
};
