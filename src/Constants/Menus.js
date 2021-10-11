import {
    Periodoncia_FaseHigienica, Periodoncia_FaseCorrectiva, Periodoncia_Ferulizacion, Periodoncia_Mantenimiento,
    CirugiaOral_Sindrome_Boca_Seca, CirugiaOral_Candidiasis, CirugiaOral_Inmunosuprimido, CirugiaOral_Quimioterapia,
    OrtopediaMaxilar_TtoActivo, OrtopediaMaxilar_RetencionFija, OrtopediaMaxilar_Mantenimiento, OrtopediaMaxilar_Mini_implantes
} from "./Productos";
import { RoutersLinks } from "./RoutersLinks";

export const SituacionesEspecialidad = [
    {
        title: "Periodoncia",
        link: RoutersLinks.periodoncia,
        menu: [
            {
                name: "Fase Higienica",
                linea: Periodoncia_FaseHigienica,
                link: RoutersLinks.Periodoncia_FaseHigienica,
                color: "Blue"
            },
            {
                name: "Fase Correctiva",
                linea: Periodoncia_FaseCorrectiva,
                link: RoutersLinks.Periodoncia_FaseCorrectiva,
                color: "Blue"
            },
            {
                name: "Ferulización",
                linea: Periodoncia_Ferulizacion,
                link: RoutersLinks.Periodoncia_Ferulizacion,
                color: "Blue"
            },
            {
                name: "Mantenimiento",
                linea: Periodoncia_Mantenimiento,
                link: RoutersLinks.Periodoncia_Mantenimiento,
                color: "Blue"
            },
        ],

        color: "Blue"
    },
    {
        title: "Cirugía Oral y Maxilofacial",
        link: RoutersLinks.cirugiaOral,
        menu: [
            {
                name: "Síndrome de Boca Seca",
                linea: CirugiaOral_Sindrome_Boca_Seca,
                link: RoutersLinks.CirugiaOral_Sindrome_Boca_Seca,
                color: "Green"
            },
            {
                name: "Candidiasis",
                linea: CirugiaOral_Candidiasis,
                link: RoutersLinks.CirugiaOral_Candidiasis,
                color: "Green"
            },
            {
                name: "Paciente Inmunosuprimido",
                linea: CirugiaOral_Inmunosuprimido,
                link: RoutersLinks.CirugiaOral_Inmunosuprimido,
                color: "Green"
            },
            {
                name: "Paciente Quimioterapia",
                linea: CirugiaOral_Quimioterapia,
                link: RoutersLinks.CirugiaOral_Quimioterapia,
                color: "Green"
            },
        ],
        color: "Green"
    },
    {
        title: "Patología Oral y Medicina Oral",
        link: RoutersLinks.patologiaOral,
        color: "Blue"
    },
    {
        title: "Endodoncia",
        link: RoutersLinks.endodoncia,
        color: "Green"
    },
    {
        title: "Operatoria y Rehabilitación",
        link: RoutersLinks.operatoria_Rehabilitación,
        color: "Blue"
    },
    {
        title: "Ortodoncia y Ortopedia Maxilar",
        link: RoutersLinks.ortodonciaOrtopediaMaxilar,
        menu: [
            {
                name: "Tratamiento Activo",
                linea: OrtopediaMaxilar_TtoActivo,
                link: RoutersLinks.OrtopediaMaxilar_TtoActivo,
                color: "Green"
            },
            {
                name: "Retención Fija",
                linea: OrtopediaMaxilar_RetencionFija,
                link: RoutersLinks.OrtopediaMaxilar_RetencionFija,
                color: "Green"
            },
            {
                name: "Mantenimiento",
                linea: OrtopediaMaxilar_Mantenimiento,
                link: RoutersLinks.OrtopediaMaxilar_Mantenimiento,
                color: "Green"
            },
            {
                name: "Postoperatorio Mini-implantes de Anclaje",
                linea: OrtopediaMaxilar_Mini_implantes,
                link: RoutersLinks.OrtopediaMaxilar_Mini_implantes,
                color: "Green"
            },
        ],
        color: "Green"
    },
];

export const SituacionesClinicasComunes = [
    {
        title: "Paciente Hospitalizado",
        link: RoutersLinks.pacienteHospitalizado,
        color: "Blue"
    },
    {
        title: "Paciente Hospitalizado en UCI",
        link: RoutersLinks.pacienteHospitalizadoUCI,
        color: "Green"
    },
    {
        title: "Paciente De Cirugía General Programada en Hospital",
        link: RoutersLinks.pacienteDeCirugiaGeneral,
        color: "Blue"
    },
];

export const SituacionesClínicasEspecíficas = [
    {
        title: "Preparación Pre-Quirúrgica",
        link: RoutersLinks.preparacionPreQuirurgica,
        color: "Green"
    },
    {
        title: "Post-Operatorios Quirúrgicos",
        link: RoutersLinks.postOperatorios,
        color: "Blue"
    },
]