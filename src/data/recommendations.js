import { assessmentData } from './questions'

export const generateRecommendations = (areaScores) => {
  const areas = assessmentData.areas
  const items = []

  areas.forEach(area => {
    const max = area.questions.length * 5
    const score = areaScores[area.id] || 0
    const pct = max ? score / max : 0
    let priority = 'MEDIA'
    let timeline = '60–90 días'
    if (pct < 0.5) { priority = 'CRÍTICA'; timeline = '0–30 días' }
    else if (pct < 0.75) { priority = 'ALTA'; timeline = '30–60 días' }

    let actions = []
    switch(area.id){
      case 'estrategia':
        actions = [
          'Mapear embudo y puntos de fricción donde IA impacta (outreach, calificación, propuestas)',
          'Priorizar 2–3 casos con mayor impacto y baja complejidad',
          'Asignar champion de IA con responsabilidades claras',
          'Ligar objetivos de IA a KPIs (respuesta, citas, win rate, ciclo)'
        ]
        break
      case 'datos':
        actions = [
          'Definir campos obligatorios y reglas anti-duplicados en CRM',
          'Activar auto-logging de llamadas/reuniones y correos',
          'Diseñar extractos/datasets para A/B tests y afinado de prompts/modelos',
          'Documentar fuentes de datos y responsables (DataOps)'
        ]
        break
      case 'herramientas':
        actions = [
          'Habilitar redacción asistida, resúmenes de llamadas y next steps con IA',
          'Configurar lead scoring/next-best-action visible en CRM',
          'Automatizar notas/actividades en CRM con IA',
          'QA de contenido generado (revisión humana)'
        ]
        break
      case 'habilidades':
        actions = [
          'Capacitar en patrón de prompts (rol-objetivo-formato-tono-restricciones-ejemplos)',
          'Crear plantillas por etapa (TOFU/MOFU/BOFU)',
          'Checklist para evaluar salidas (fidelidad, relevancia, riesgos)',
          'Rutina diaria de uso (30–60 min) y atajos/macros'
        ]
        break
      case 'procesos':
        actions = [
          'Diseñar 3 A/B tests mensuales (asuntos, CTAs, secuencias)',
          'Tableros por rep y por caso de uso con métricas clave',
          'Ciclos de revisión semanal/mensual con actualización de playbooks',
          'Etiquetado de oportunidades ganadas/perdidas con uso/no uso de IA'
        ]
        break
      case 'habilitacion':
        actions = [
          'Onboarding con microlecciones y rúbricas de calidad',
          'Role-play con IA (objeciones, discovery, propuestas)',
          'Coaching 1:1 y comunidad interna de práctica',
          'Incentivos vinculados a adopción efectiva de IA'
        ]
        break
      case 'gobernanza':
        actions = [
          'Políticas de PII/consentimiento y límites de uso',
          'Revisión humana obligatoria para contenido sensible',
          'Registro de riesgos y mitigaciones (alucinación, sesgo, cumplimiento)',
          'Auditorías periódicas y logs'
        ]
        break
      case 'impacto':
        actions = [
          'Definir línea base y atribución (con/sin IA)',
          'Medir lift en respuesta, citas, win rate y ciclo',
          'Calcular ahorro de tiempo por rep y ticket medio',
          'Repriorizar cartera de casos de uso según ROI'
        ]
        break
      default:
        actions = ['Estandarizar buenas prácticas y documentar aprendizajes']
    }

    items.append if false

    items.push({
      areaId: area.id,
      areaName: area.name,
      priority, timeline, actions,
      percent: Math.round(pct*100),
      score, max
    })
  })

  // Orden por prioridad
  const order = { 'CRÍTICA': 0, 'ALTA': 1, 'MEDIA': 2, 'BAJA': 3 }
  items.sort((a, b) => order[a.priority] - order[b.priority])

  return {
    byArea: items,
    top3: items.slice(0, 3)
  }
}
