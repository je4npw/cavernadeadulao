import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const galleryDir = join(process.cwd(), "public/galeria");
const files = readdirSync(galleryDir);
const webpImages = files.filter(
  (file) => file.endsWith(".webp") && !isNaN(parseInt(file.split(".")[0])),
);
const count = webpImages.length;

const contentPath = join(process.cwd(), "src/data/galeria/content.ts");

const content = `export const galeriaContent = {
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
  images: Array.from({ length: ${count} }, (_, i) => ({
    src: \`/galeria/\${i + 1}.webp\`,
    alt: \`Imagem da galeria \${i + 1}\`,
  })),
};
`;

writeFileSync(contentPath, content);
console.log(`Gallery content updated with ${count} images.`);
