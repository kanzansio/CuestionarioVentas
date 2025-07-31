
import { assessmentData } from './questions';

// Genera recomendaciones por área basado en el % del máximo
export const generateRecommendations = (areaScores) => {
  const areaRecommendations = [];
  const patterns = [];

  assessmentData.areas.forEach(area => {
    const areaMax = area.questions.length * 5;
    const score = areaScores[area.id] || 0;
    const pct = areaMax ? (score / areaMax) : 0;

    let priority, title, actions, timeline;

    if (pct < 0.5) {
      priority = 'CRÍTICA';
      timeline = '0–30 días';
    } else if (pct < 0.75) {
      priority = 'ALTA';
      timeline = '30–60 días';
    } else {
      priority = 'MEDIA';
      timeline = '60–90 días';
    }

    switch (area.id) {
      case 'estrategia':
        title = pct < 0.5 ? 'Definir y priorizar casos de uso de IA' : 'Actualizar portafolio y OKRs de IA';
        actions = [
          'Mapear embudo y puntos de fricción donde IA impacta (outreach, calificación, propuestas)',
          'Priorizar 2–3 casos con mayor impacto y baja complejidad',
          'Asignar champion de IA con responsabilidades claras',
          'Ligar objetivos de IA a KPIs (respuesta, citas, win rate, ciclo)'
        ];
        break;
      case 'datos':
        title = pct < 0.5 ? 'Higiene y cobertura de datos en CRM' : 'DataOps para IA';
        actions = [
          'Definir campos obligatorios (industria, tamaño, decisor, actividad) y reglas anti-duplicados',
          'Activar auto-logging de llamadas/reuniones y correos',
          'Diseñar extractos/datasets para pruebas A/B y afinado de prompts/modelos',
          'Documentar fuentes de datos y responsables'
        ];
        break;
      case 'herramientas':
        title = pct < 0.5 ? 'Activar IA en el flujo del vendedor' : 'Automatizar y orquestar IA en CRM';
        actions = [
          'Habilitar redacción asistida, resúmenes de llamadas y next steps con IA',
          'Configurar lead scoring/next-best-action visible en CRM',
          'Automatizar notas/actividades en CRM con IA',
          'Revisiones de calidad (QA) de contenido generado'
        ];
        break;
      case 'habilidades':
        title = pct < 0.5 ? 'Entrenamiento básico de prompting' : 'Librería avanzada y evaluación de prompts';
        actions = [
          'Capacitar en patrón de prompts (rol-objetivo-formato-tono-restricciones-ejemplos)',
          'Crear plantillas por etapa (TOFU/MOFU/BOFU)',
          'Checklist de evaluación de salidas (fidelidad, relevancia, riesgos)',
          'Rutina diaria de uso (30–60 min) y atajos/macros'
        ];
        break;
      case 'procesos':
        title = pct < 0.5 ? 'Establecer medición y A/B testing' : 'Iteración basada en datos';
        actions = [
          'Diseñar 3 A/B tests mensuales (asuntos, CTAs, secuencias)',
          'Tableros por rep y caso de uso con métricas clave',
          'Ciclos de revisión semanal/mensual y actualización de playbooks',
          'Etiquetar oportunidades ganadas/perdidas con uso/no uso de IA'
        ];
        break;
      case 'habilitacion':
        title = pct < 0.5 ? 'Onboarding de IA y coaching' : 'Programa de champions e incentivos';
        actions = [
          'Onboarding con microlecciones y rúbricas de calidad',
          'Role-play con IA (objeciones, discovery, propuestas)',
          'Coaching 1:1 y comunidad interna de práctica',
          'Incentivos vinculados a adopción efectiva de IA'
        ];
        break;
      case 'gobernanza':
        title = pct < 0.5 ? 'Políticas y controles de IA' : 'Auditoría y mejora continua';
        actions = [
          'Políticas de PII/consentimiento y límites de uso',
          'Revisión humana obligatoria para contenido sensible',
          'Registro de riesgos y mitigaciones (alucinación, sesgo, cumplimiento)',
          'Auditorías periódicas y logs'
        ];
        break;
      case 'impacto':
        title = pct < 0.5 ? 'Caso de negocio para IA' : 'Optimizar ROI por caso de uso';
        actions = [
          'Definir línea base y atribución (con/sin IA)',
          'Medir lift en respuesta, citas, win rate y ciclo',
          'Calcular ahorro de tiempo por rep y ticket medio',
          'Repriorizar cartera de casos de uso según ROI'
        ];
        break;
      default:
        title = 'Mejora continua';
        actions = ['Estandarizar buenas prácticas y documentar aprendizajes'];
    }

    areaRecommendations.push({
      areaId: area.id,
      areaName: area.name,
      priority,
      timeline,
      title,
      actions
    });

    patterns.push({
      areaId: area.id,
      risk: pct < 0.5 ? 'ALTO' : (pct < 0.75 ? 'MEDIO' : 'BAJO'),
      insight: `${{estrategia:'Estrategia',datos:'Datos',herramientas:'Herramientas',habilidades:'Habilidades',procesos:'Procesos',habilitacion:'Habilitación',gobernanza:'Gobernanza',impacto:'Impacto'}[area.id]} al ${Math.round(pct*100)}% del máximo`
    });
  });

  const priorityOrder = { 'CRÍTICA': 0, 'ALTA': 1, 'MEDIA': 2, 'BAJA': 3 };
  areaRecommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return {
    areaRecommendations,
    patterns,
    topPriorities: areaRecommendations.slice(0, 3)
  };
};
