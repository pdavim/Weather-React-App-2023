const holidays = [
  {
    publicFixedHolidays: [
      {
        date: "1",
        month: "1",
        dayDescription: "New Year's Day",
        portugalContinatal: true,
        madeira: true,
        acores: true,
        description: ""
      },
      {
        date: "25",
        month: "4",
        dayDescription: "Dia da Liberdade",
        portugalContinatal: true,
        madeira: true,
        acores: true,
        description:
          "Celebrates the 1974 coup d'état that ended the Estado Novo government and established the Portuguese Third Republic."
      },
      {
        date: "1",
        month: "5",
        dayDescription: "Dia do Trabalhador",
        portugalContinatal: true,
        madeira: true,
        acores: true,
        description: "Similar to Labor Day celebrated worldwide."
      },
      {
        date: "10",
        month: "6",
        dayDescription:
          "Dia de Portugal, de Camões e das Comunidades Portuguesas",
        portugalContinatal: true,
        madeira: true,
        acores: true,
        description: "National Day."
      }
    ]
  },
  {
    localFixedHolidays: [
      {
        date: "15",
        month: "1",
        description: "Dia do Concelho",
        region: "Santa Cruz,Madeira",
        portugalContinatal: false,
        madeira: true,
        acores: false
      },
      {
        date: "22",
        month: "1",
        description: "Dia do Concelho",
        region: "São Vicente,Madeira",
        portugalContinatal: false,
        madeira: true,
        acores: false
      },
      {
        date: "1",
        month: "6",
        description: "Dia dos Açores",
        region: "Açores",
        portugalContinatal: false,
        madeira: false,
        acores: true
      },
      {
        date: "1",
        month: "7",
        description:
          "Dia da Região Autónoma da Madeira e das Comunidades Madeirenses",
        region: "Madeira",
        portugalContinatal: false,
        madeira: true,
        acores: false
      }
    ]
  },
  { partiesFairs: {} }
];

export default holidays;
