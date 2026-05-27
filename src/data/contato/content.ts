import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const contatoContent = {
  meta: {
    title: "Contato — Caverna de Adulão",
    description:
      "Endereço, telefone, e-mail e horário de visitas do Centro de Reabilitação Caverna de Adulão.",
    ogTitle: "Contato — Caverna de Adulão",
    ogDescription: "Fale com a equipe da casa.",
  },
  header: {
    eyebrow: "Fale conosco",
    title: "A porta está aberta.",
    intro:
      "Para informações sobre admissão, doações, voluntariado ou visitas, use o canal de sua preferência. Respondemos o mais breve possível.",
  },
  info: [
    {
      icon: MapPin,
      label: "Endereço",
      value: "Estrada Municipal do Rio Galego, km 8\nZona Rural — CEP 884300-000",
    },
    { icon: Phone, label: "Telefone / WhatsApp", value: "(47) 99791-5103" },
    { icon: Mail, label: "E-mail", value: "admadulao@gmail.com" },
    {
      icon: Clock,
      label: "Visitas",
      value: "2º Domingo do mês, das 10h às 17h\n(agendamento recomendado)",
    },
  ],
  form: {
    title: "Envie uma mensagem",
    labels: {
      name: "Nome",
      email: "E-mail",
      phone: "Telefone",
      subject: "Assunto",
      message: "Mensagem",
    },
    subjects: ["Admissão", "Doação", "Voluntariado", "Visita", "Outro"],
    submitButton: "Enviar mensagem",
    successMessage: "Mensagem registrada. Em breve um voluntário entrará em contato.",
  },
  map: {
    address: "Estrada do Retiro, km 12",
    placeholder: "Mapa em breve",
  },
};
