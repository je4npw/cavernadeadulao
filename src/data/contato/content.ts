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
      "Para informações sobre admissão, doações, voluntariado ou visitas, use o canal de sua preferência. Respondemos em até 48 horas.",
  },
  info: [
    {
      icon: MapPin,
      label: "Endereço",
      value: "Estrada do Retiro, km 12\nZona Rural — CEP 00000-000",
    },
    { icon: Phone, label: "Telefone / WhatsApp", value: "(00) 00000-0000" },
    { icon: Mail, label: "E-mail", value: "contato@cavernadeadulao.org.br" },
    { icon: Clock, label: "Visitas", value: "Sábados, das 14h às 17h\n(agendamento recomendado)" },
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
