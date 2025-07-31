export const assessmentData = {
  areas: [
    {
      id: "estrategia",
      name: "Estrategia y Casos de Uso",
      description: "Objetivos y priorización de IA en el proceso comercial",
      questions: [
        { id: "E1", text: "Tenemos casos de uso de IA priorizados para prospección, calificación y cierre.", type: "likert" },
        { id: "E2", text: "Los objetivos de IA están ligados a KPIs (respuesta, citas, win rate, ciclo).", type: "likert" },
        { id: "E3", text: "Existe un champion de IA comercial con autoridad para impulsar adopción.", type: "likert" },
        { id: "E4", text: "Revisamos el portafolio de casos de uso al menos trimestralmente.", type: "likert" }
      ]
    },
    {
      id: "datos",
      name: "Datos y CRM",
      description: "Calidad, cobertura e integración de datos para IA",
      questions: [
        { id: "D1", text: "El CRM tiene registros completos y actualizados (campos clave ≥90%).", type: "likert" },
        { id: "D2", text: "Higiene de datos (duplicados, campos críticos y registro de actividades).", type: "likert" },
        { id: "D3", text: "La IA está integrada al CRM sin pasos manuales (sin copiar/pegar).", type: "likert" },
        { id: "D4", text: "Generamos datasets para pruebas A/B y evaluación de modelos.", type: "likert" }
      ]
    },
    {
      id: "herramientas",
      name: "Herramientas y Automatización",
      description: "Disponibilidad y uso de herramientas de IA en el flujo del vendedor",
      questions: [
        { id: "H1", text: "Usamos IA para redactar y personalizar emails/mensajes de alcance.", type: "likert" },
        { id: "H2", text: "Transcribimos y resumimos llamadas con IA; capturamos próximos pasos.", type: "likert" },
        { id: "H3", text: "Lead scoring/next-best-action con IA está disponible en el CRM.", type: "likert" },
        { id: "H4", text: "Actualizaciones en CRM (notas, actividades) se hacen automáticamente con IA.", type: "likert" }
      ]
    },
    {
      id: "habilidades",
      name: "Habilidades de Prompting y Flujo",
      description: "Capacidad para diseñar prompts efectivos e integrar IA al día a día",
      questions: [
        { id: "S1", text: "La mayoría domina prompts efectivos (rol, objetivo, formato, tono, límites).", type: "likert" },
        { id: "S2", text: "Usamos plantillas de prompts por etapa (TOFU/MOFU/BOFU).", type: "likert" },
        { id: "S3", text: "Tenemos checklist para validar calidad de salidas de IA.", type: "likert" },
        { id: "S4", text: "Integramos IA diariamente (≥30–60 min) con atajos/macros documentados.", type: "likert" }
      ]
    },
    {
      id: "procesos",
      name: "Procesos y Medición",
      description: "A/B testing, tableros y mejora continua basada en evidencia",
      questions: [
        { id: "P1", text: "Realizamos A/B tests con y sin IA (copys, asuntos, secuencias).", type: "likert" },
        { id: "P2", text: "Medimos impacto de IA en KPIs (respuesta, citas, win rate, ciclo, ticket).", type: "likert" },
        { id: "P3", text: "Tenemos tableros por rep y por caso de uso de IA.", type: "likert" },
        { id: "P4", text: "Iteramos playbooks de IA con revisiones semanales/mensuales.", type: "likert" }
      ]
    },
    {
      id: "habilitacion",
      name: "Habilitación y Cambio",
      description: "Onboarding, coaching y gestión del cambio para adopción",
      questions: [
        { id: "C1", text: "Onboarding de IA para nuevos reps (microcursos, rúbricas).", type: "likert" },
        { id: "C2", text: "Role-plays con IA (objeciones, discovery, propuestas).", type: "likert" },
        { id: "C3", text: "Programa de champions y coaching 1:1 para prompts y stack.", type: "likert" },
        { id: "C4", text: "Incentivos/bonos ligados a adopción efectiva y resultados con IA.", type: "likert" }
      ]
    },
    {
      id: "gobernanza",
      name: "Gobernanza y Seguridad",
      description: "Políticas, riesgos y cumplimiento",
      questions: [
        { id: "G1", text: "Políticas de PII/consentimiento y límites de uso de IA.", type: "likert" },
        { id: "G2", text: "Controles: logs, revisión humana, catálogo de riesgos.", type: "likert" },
        { id: "G3", text: "Aprobación para contenido sensible generado con IA (propuestas, pricing).", type: "likert" },
        { id: "G4", text: "Cumplimos marcos legales/industriales y realizamos auditorías.", type: "likert" }
      ]
    },
    {
      id: "impacto",
      name: "Impacto y ROI",
      description: "Resultados atribuibles a IA en métricas de negocio",
      questions: [
        { id: "R1", text: "La IA reduce tiempo administrativo por rep (≥20–30%).", type: "likert" },
        { id: "R2", text: "La IA aumenta tasa de respuesta y agendamientos.", type: "likert" },
        { id: "R3", text: "Mejora el win rate o acorta el ciclo en ≥2 periodos.", type: "likert" },
        { id: "R4", text: "Existe un caso financiero (ROI): inversión vs. ahorro/retorno.", type: "likert" }
      ]
    }
  ]
};

export const scaleOptions = [
  { value: 1, text: "Nunca / No existe" },
  { value: 2, text: "A veces / Piloto aislado" },
  { value: 3, text: "Regular / Integración inicial" },
  { value: 4, text: "Consistente / Estándar de equipo" },
  { value: 5, text: "Avanzado / Automatizado y medido" }
];

export const getMaturityLevel = (score, totalMax) => {
  const q1 = 0.25 * totalMax;
  const q2 = 0.50 * totalMax;
  const q3 = 0.75 * totalMax;
  if (score <= q1) return { label: "Explorador", color: "#ef4444", description: "Pilotos dispersos; enfócate en datos/CRM y 1–2 casos de uso tractables." };
  if (score <= q2) return { label: "Iniciado", color: "#f59e0b", description: "Adopción inicial; formaliza playbooks, plantillas de prompt y medición." };
  if (score <= q3) return { label: "Integrador", color: "#3b82f6", description: "Fluye en el día a día; acelera A/B tests, automatiza CRM y QA." };
  return { label: "Orquestador", color: "#10b981", description: "Optimización continua; escala automatizaciones y mide ROI por caso de uso." };
};

export const getAreaMaturityLevel = (areaScore, areaMax) => {
  const q1 = 0.25 * areaMax;
  const q2 = 0.50 * areaMax;
  const q3 = 0.75 * areaMax;
  if (areaScore <= q1) return { label: "Explorador", color: "#ef4444", min: 0, max: q1 };
  if (areaScore <= q2) return { label: "Iniciado", color: "#f59e0b", min: q1, max: q2 };
  if (areaScore <= q3) return { label: "Integrador", color: "#3b82f6", min: q2, max: q3 };
  return { label: "Orquestador", color: "#10b981", min: q3, max: areaMax };
};
