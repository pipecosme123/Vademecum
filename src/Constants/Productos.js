import { imgCepillosDentales, imgEnjuaguesBucales, imgCremasDentales } from "./Images";

// Pre consulta

export const PreConsulta = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: "15 ml x 30-60 segundos antes de cada procedimiento odontológico"
    },
    {
        id: 1,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml x 30-60 segundos antes de cada procedimiento odontológico",
    }
];

// PERIODONCIA

export const Periodoncia_FaseHigienica = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos por 15 días",
        Observaciones: "Únicamente como coadyuvante a la terapia MECÁNICA PROFESIONAL"
    },
    {
        id: 1,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos por 15 días",
        Observaciones: "Únicamente como coadyuvante a la terapia MECÁNICA PROFESIONAL"
    },
    {
        id: 2,
        img: imgCremasDentales.CremaDental_PerioGard,
        name: "Crema dental Colgate® PerioGard®",
        PrincipioActivo: "Citrato de Zinc 0.2%",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 3,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_SlimSoft,
        name: "Cepillo dental SLIM SOFT",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
    {
        id: 5,
        img: imgCepillosDentales.CepilloDental_Elmex_Ultrasoft,
        name: "Cepillo dental ELMEX",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    }
];

export const Periodoncia_FaseCorrectiva = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos por 7 a 20 días",
        Observaciones: "Según evolución"
    },
    {
        id: 1,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos por 7 a 20 días",
        Observaciones: "Según evolución"
    },
    {
        id: 2,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 3,
        img: imgCepillosDentales.CepilloDental_Elmex_Ultrasoft,
        name: "Cepillo dental ELMEX",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_ETB_Electrico,
        name: "Cepillo dental eléctrico Colgate ETB",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    }
]

export const Periodoncia_Ferulización = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos de uso diario",
        Observaciones: ""
    },
    {
        id: 1,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 2,
        img: imgCepillosDentales.CepilloDental_SlimSoft,
        name: "Cepillo dental SLIM SOFT",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
    {
        id: 3,
        img: imgCepillosDentales.CepilloDental_Elmex_Ultrasoft,
        name: "Cepillo dental ELMEX",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_ETB_Electrico,
        name: "Cepillo dental eléctrico Colgate ETB",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    }
]


export const Periodoncia_Mantenimiento = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos por 7 a 20 días",
        Observaciones: "Según evolución"
    },
    {
        id: 1,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 2,
        img: imgCepillosDentales.CepilloDental_SlimSoft,
        name: "Cepillo dental SLIM SOFT",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
    {
        id: 3,
        img: imgCepillosDentales.CepilloDental_Elmex_Ultrasoft,
        name: "Cepillo dental ELMEX",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
];

// CIRUGIA ORAL Y MAXILOFACIAL

export const CirugiaOral_Sindrome_Boca_Seca = [
    {
        id: 0,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 1,
        img: imgCepillosDentales.CepilloDental_SlimSoft,
        name: "Cepillo dental SLIM SOFT",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
    {
        id: 2,
        img: imgCepillosDentales.CepilloDental_Elmex_Ultrasoft,
        name: "Cepillo dental ELMEX",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
];

export const CirugiaOral_Candidiasis = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: "Inmersión de las prótesis por 8 horas por 4 noches. 15 ml/2 veces al dia 30-60 segundos por 7 a 20 días",
        Observaciones: "Según evolución"
    },
    {
        id: 1,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 1,
        img: imgCepillosDentales.CepilloDental_UltraSoft,
        name: "Cepillo dental ULTRASOFT",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cepillar la prótesis removible fuera de la boca"
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_ETB_Electrico,
        name: "Cepillo dental eléctrico Colgate ETB",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cepillar la prótesis removible fuera de la boca"
    }
]

export const CirugiaOral_Inmunosuprimido = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: `• 15 ml/2 veces al dia por 30-60 segundos por 7 a 20 días \n • 15 ml/2 veces al dia por 30-60 segundos según recomendación médica`,
        Observaciones: `• En caso de mucositis establecida. Según evolución \n • En pacientes trasplantados con células madre hematopoyéticas`
    },
    {
        id: 1,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos por 7 a 20 días",
        Observaciones: "En caso de mucositis establecida. Según evolución"
    },
    {
        id: 2,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 3,
        img: imgCepillosDentales.CepilloDental_SlimSoft,
        name: "Cepillo dental SLIM SOFT",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_Elmex_Ultrasoft,
        name: "Cepillo dental ELMEX",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
];

export const CirugiaOral_Quimioterapia = [
    {
        id: 0,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 1,
        img: imgCepillosDentales.CepilloDental_SlimSoft,
        name: "Cepillo dental SLIM SOFT",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
    {
        id: 2,
        img: imgCepillosDentales.CepilloDental_Elmex_Ultrasoft,
        name: "Cepillo dental ELMEX",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
];

// ORTODONCIA Y ORTOPEDIA MAXILAR

export const OrtopediaMaxilar_TtoActivo = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos de uso diario",
        Observaciones: ""
    },
    {
        id: 1,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 3,
        img: imgCremasDentales.CremaDental_PerioGard,
        name: "Crema dental Colgate® PerioGard®",
        PrincipioActivo: "Citrato de Zinc 0.2%",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 4,
        img: imgEnjuaguesBucales.Enjuague_OrthoGard,
        name: "Enjuague bucal Colgate® ORTHOGARD®",
        PrincipioActivo: "NaF 0.04% + APF",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos de uso diario",
        Observaciones: ""
    },
    {
        id: 5,
        img: imgCepillosDentales.CepilloDental_OrthoGard,
        name: "Cepillo dental Colgate ORTHOGARD®",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
];

export const OrtopediaMaxilar_RetencionFija = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos de uso diario",
        Observaciones: ""
    },
    {
        id: 1,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 3,
        img: imgCremasDentales.CremaDental_PerioGard,
        name: "Crema dental Colgate® PerioGard®",
        PrincipioActivo: "Citrato de Zinc 0.2%",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 4,
        img: imgEnjuaguesBucales.Enjuague_OrthoGard,
        name: "Enjuague bucal Colgate® ORTHOGARD®",
        PrincipioActivo: "NaF 0.04% + APF",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos de uso diario",
        Observaciones: ""
    },
    {
        id: 5,
        img: imgCepillosDentales.CepilloDental_OrthoGard,
        name: "Cepillo dental Colgate ORTHOGARD®",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
];

export const OrtopediaMaxilar_Mantenimiento = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos de uso diario",
    },
    {
        id: 1,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 3,
        img: imgCremasDentales.CremaDental_PerioGard,
        name: "Crema dental Colgate® PerioGard®",
        PrincipioActivo: "Citrato de Zinc 0.2%",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Si hay riesgo de inflamación o crecimiento gingival"
    },
    {
        id: 4,
        img: imgEnjuaguesBucales.Enjuague_OrthoGard,
        name: "Enjuague bucal Colgate® ORTHOGARD®",
        PrincipioActivo: "NaF 0.04% + APF",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos de uso diario",
        Observaciones: "Si hay riesgo de caries"
    },
    {
        id: 5,
        img: imgCepillosDentales.CepilloDental_OrthoGard,
        name: "Cepillo dental Colgate ORTHOGARD®",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
];

export const OrtopediaMaxilar_Mini_implantes = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos por 7 a 20 días",
        Observaciones: "Según evolución"
    },
    {
        id: 1,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos por 7 a 20 días",
        Observaciones: "Según evolución"
    },
    {
        id: 2,
        img: imgCepillosDentales.CepilloDental_OrthoGard,
        name: "Cepillo dental Colgate ORTHOGARD®",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
];

// PACIENTE HOSPITALIZADO

export const SituacionesClinicasComunes_PteHospitalizado = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos según la permanencia hospitalizado"
    },
    {
        id: 1,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos según la permanencia hospitalizado"
    },
    {
        id: 2,
        img: imgCremasDentales.CremaDental_PerioGard,
        name: "Crema dental Colgate® PerioGard®",
        PrincipioActivo: "Citrato de Zinc 0.2%",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    },
    {
        id: 3,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_SlimSoft,
        name: "Cepillo dental SLIM SOFT",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
    {
        id: 5,
        img: imgCepillosDentales.CepilloDental_Elmex_Ultrasoft,
        name: "Cepillo dental ELMEX",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
];

// PACIENTE HOSPITALIZADO EN UCI

export const SituacionesClinicasComunes_PteHospitalizadoUCI = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos y/o aplicación tópica según la condición en UCI"
    },
    {
        id: 1,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos y/o aplicación tópica según la condición en UCI"
    },
    {
        id: 2,
        img: imgCremasDentales.CremaDental_PerioGard,
        name: "Crema dental Colgate® PerioGard®",
        PrincipioActivo: "Citrato de Zinc 0.2%",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Dependiendo de la condición en UCI"
    },
    {
        id: 3,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Dependiendo de la condición en UCI"
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_PerioGard,
        name: "Cepillo dental PerioGard®",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Dependiendo de la condición en UCI"
    },
];

export const SituacionesClinicasComunes_PteCirugiaGeneral = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: "15 ml x 30-60 segundos dos veces al día, comenzar 7 días antes de la hospitalización",
        Observaciones: "Seguir utilizando durante toda la permanencia hospitalaria",
    },
    {
        id: 1,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "15 ml x 30-60 segundos dos veces al día, comenzar 7 días antes de la hospitalización",
        Observaciones: "Seguir utilizando durante toda la permanencia hospitalaria",
    },
    {
        id: 3,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Siempre y cuando haya autonomía para realizar la higiene oral"
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_SlimSoft,
        name: "Cepillo dental SLIM SOFT",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
    {
        id: 5,
        img: imgCepillosDentales.CepilloDental_Elmex_Ultrasoft,
        name: "Cepillo dental ELMEX",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
];

// PREPARACIÓN PRE-QUIRÚRGICA

export const SituacionesClinicasComunes_PreparacionPreQuirurgica = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: "Comenzar 48 horas antes, 15 ml x 30-60 segundos dos veces al día",
    },
    {
        id: 1,
        img: imgEnjuaguesBucales.Enjuague_Total12,
        name: "Enjuague bucal Colgate® TOTAL 12®",
        PrincipioActivo: "CCPC (Cloruro de Cetil Piridinio)  0.075% Lactato de ZInc 0.24% NaF 0.05%",
        ModoUso: "Comenzar 48 horas antes, 15 ml x 30-60 segundos dos veces al día",
    },
    {
        id: 2,
        img: imgCremasDentales.CremaDental_PerioGard,
        name: "Crema dental Colgate® PerioGard®",
        PrincipioActivo: "Citrato de Zinc 0.2%",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 3,
        img: imgCepillosDentales.CepilloDental_SlimSoft,
        name: "Cepillo dental SLIM SOFT",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_Elmex_Ultrasoft,
        name: "Cepillo dental ELMEX",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Cambiarlo máximo cada 3 meses"
    },
];

export const SituacionesClinicasComunes_PostOperatorios = [
    {
        id: 0,
        img: imgEnjuaguesBucales.Enjuague_PerioGard,
        name: "Enjuague bucal Colgate® PerioGard®",
        PrincipioActivo: "CLORHEXIDINA, 0.12%",
        ModoUso: "15 ml/2 veces al dia por 30-60 segundos por 7 a 20 días",
        Observaciones: "Según evolución"
    },
    {
        id: 2,
        img: imgCremasDentales.CremaDental_PerioGard,
        name: "Crema dental Colgate® PerioGard®",
        PrincipioActivo: "Citrato de Zinc 0.2%",
        ModoUso: "Cepillado 2 - 3 veces/día"
    },
    {
        id: 3,
        img: imgCremasDentales.CremaDental_Total12,
        name: "Crema dental Colgate® TOTAL 12®",
        PrincipioActivo: "Arginina 1.5% + Doble Zinc",
        ModoUso: "Cepillado 2 - 3 veces/día",
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_PerioGard,
        name: "Cepillo dental PerioGard®",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: "Dependiendo de la condición en UCI"
    },
    {
        id: 4,
        img: imgCepillosDentales.CepilloDental_ETB_Electrico,
        name: "Cepillo dental eléctrico Colgate ETB",
        PrincipioActivo: "",
        ModoUso: "Cepillado 2 - 3 veces/día",
        Observaciones: ""
    }
]
// {
//     id: 1,
//     img: ,
//     name: "",
//     PrincipioActivo: "",
//     ModoUso: "",
//     Observaciones: ""
// },

