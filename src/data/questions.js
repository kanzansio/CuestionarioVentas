export const assessmentData = {
  areas: [
    {
      id: 'prospection',
      name: 'Prospección y Generación de Leads',
      description: 'Capacidad para identificar y contactar prospectos cualificados',
      questions: [
        {
          id: 'p1',
          text: '¿Con qué frecuencia los miembros de tu equipo realizan actividades de prospección de manera consistente?',
          type: 'likert',
          options: [
            { value: 1, text: 'Esporádicamente, sin rutina establecida' },
            { value: 2, text: 'Ocasionalmente, cuando tienen tiempo libre' },
            { value: 3, text: 'Regularmente, pero sin un plan estructurado' },
            { value: 4, text: 'Consistentemente, siguiendo un plan semanal' },
            { value: 5, text: 'Diariamente, con objetivos específicos y medibles' }
          ]
        },
        {
          id: 'p2',
          text: '¿Qué porcentaje de los leads generados por tu equipo están realmente cualificados (BANT: Budget, Authority, Need, Timeline)?',
          type: 'likert',
          options: [
            { value: 1, text: 'Menos del 20%' },
            { value: 2, text: '21-40%' },
            { value: 3, text: '41-60%' },
            { value: 4, text: '61-80%' },
            { value: 5, text: 'Más del 80%' }
          ]
        },
        {
          id: 'p3',
          text: '¿Cuál describe mejor el uso de herramientas de prospección en tu equipo?',
          type: 'multiple',
          options: [
            { value: 1, text: 'Solo teléfono y email básico' },
            { value: 2, text: 'Teléfono, email y LinkedIn básico' },
            { value: 3, text: 'Múltiples canales con algunas herramientas de automatización' },
            { value: 4, text: 'Stack tecnológico integrado con CRM y herramientas especializadas' },
            { value: 5, text: 'Plataforma completa con IA, automatización y análisis predictivo' }
          ]
        },
        {
          id: 'p4',
          text: '¿Qué tan bien investiga tu equipo a los prospectos antes del primer contacto?',
          type: 'likert',
          options: [
            { value: 1, text: 'No realizan investigación previa' },
            { value: 2, text: 'Revisión básica del sitio web de la empresa' },
            { value: 3, text: 'Investigación de la empresa y el contacto en LinkedIn' },
            { value: 4, text: 'Análisis profundo de la empresa, industria y contacto' },
            { value: 5, text: 'Investigación exhaustiva incluyendo noticias, financieros y red de contactos' }
          ]
        },
        {
          id: 'p5',
          text: '¿Qué nivel de personalización utilizan en sus mensajes de prospección?',
          type: 'likert',
          options: [
            { value: 1, text: 'Mensajes genéricos para todos' },
            { value: 2, text: 'Personalización básica (nombre y empresa)' },
            { value: 3, text: 'Personalización por industria o rol' },
            { value: 4, text: 'Mensajes altamente personalizados por prospecto' },
            { value: 5, text: 'Personalización basada en triggers específicos y contexto actual' }
          ]
        },
        {
          id: 'p6',
          text: '¿Cómo manejan el seguimiento de prospectos que no responden inicialmente?',
          type: 'likert',
          options: [
            { value: 1, text: 'No realizan seguimiento sistemático' },
            { value: 2, text: '1-2 intentos adicionales sin estrategia' },
            { value: 3, text: 'Secuencia básica de 3-4 touchpoints' },
            { value: 4, text: 'Secuencia estructurada de 6-8 touchpoints multicanal' },
            { value: 5, text: 'Secuencia sofisticada con contenido de valor y timing optimizado' }
          ]
        },
        {
          id: 'p7',
          text: '¿Qué tan bien rastrea tu equipo las métricas de prospección?',
          type: 'likert',
          options: [
            { value: 1, text: 'No rastrean métricas específicas' },
            { value: 2, text: 'Solo número de llamadas/emails enviados' },
            { value: 3, text: 'Tasas de respuesta básicas' },
            { value: 4, text: 'Métricas completas de actividad y conversión' },
            { value: 5, text: 'Análisis avanzado con predicción y optimización continua' }
          ]
        },
        {
          id: 'p8',
          text: '¿Qué tan efectivo es tu equipo generando referidos de clientes existentes?',
          type: 'likert',
          options: [
            { value: 1, text: 'No tienen proceso para generar referidos' },
            { value: 2, text: 'Ocasionalmente piden referidos sin estructura' },
            { value: 3, text: 'Proceso básico para solicitar referidos' },
            { value: 4, text: 'Sistema estructurado con incentivos y seguimiento' },
            { value: 5, text: 'Programa sofisticado de referidos con múltiples touchpoints' }
          ]
        },
        {
          id: 'p9',
          text: '¿Cómo utilizan las redes sociales para prospección?',
          type: 'likert',
          options: [
            { value: 1, text: 'No utilizan redes sociales para prospección' },
            { value: 2, text: 'Presencia básica en LinkedIn sin estrategia' },
            { value: 3, text: 'Uso activo de LinkedIn para conectar y enviar mensajes' },
            { value: 4, text: 'Estrategia multicanal en redes sociales con contenido de valor' },
            { value: 5, text: 'Social selling avanzado con personal branding y thought leadership' }
          ]
        },
        {
          id: 'p10',
          text: '¿Qué tan bien adapta tu equipo sus estrategias de prospección según los resultados?',
          type: 'likert',
          options: [
            { value: 1, text: 'Mantienen la misma estrategia sin cambios' },
            { value: 2, text: 'Cambios ocasionales sin análisis sistemático' },
            { value: 3, text: 'Ajustes básicos basados en resultados obvios' },
            { value: 4, text: 'Análisis regular y optimización de estrategias' },
            { value: 5, text: 'Experimentación continua con A/B testing y optimización basada en datos' }
          ]
        }
      ]
    },
    {
      id: 'process',
      name: 'Proceso de Ventas y Metodología',
      description: 'Adherencia a un proceso de ventas estructurado y uso de metodologías',
      questions: [
        {
          id: 'pr1',
          text: '¿Qué tan consistentemente sigue tu equipo un proceso de ventas estructurado?',
          type: 'likert',
          options: [
            { value: 1, text: 'No tienen un proceso definido' },
            { value: 2, text: 'Proceso básico que se sigue inconsistentemente' },
            { value: 3, text: 'Proceso definido con adherencia moderada' },
            { value: 4, text: 'Proceso bien establecido que se sigue regularmente' },
            { value: 5, text: 'Proceso optimizado con adherencia estricta y mejora continua' }
          ]
        },
        {
          id: 'pr2',
          text: '¿Qué metodología de ventas utiliza principalmente tu equipo?',
          type: 'multiple',
          options: [
            { value: 1, text: 'Sin metodología específica, enfoque intuitivo' },
            { value: 2, text: 'Metodología básica propia sin estructura formal' },
            { value: 3, text: 'Metodología reconocida implementada parcialmente (SPIN, Challenger, etc.)' },
            { value: 4, text: 'Metodología reconocida bien implementada y entrenada' },
            { value: 5, text: 'Múltiples metodologías integradas y adaptadas al contexto' }
          ]
        },
        {
          id: 'pr3',
          text: '¿Qué tan efectivo es tu equipo cualificando oportunidades (BANT, MEDDIC, etc.)?',
          type: 'likert',
          options: [
            { value: 1, text: 'No utilizan criterios de cualificación específicos' },
            { value: 2, text: 'Cualificación básica e inconsistente' },
            { value: 3, text: 'Uso regular de criterios básicos de cualificación' },
            { value: 4, text: 'Proceso estructurado de cualificación bien implementado' },
            { value: 5, text: 'Cualificación avanzada con múltiples frameworks y scoring' }
          ]
        },
        {
          id: 'pr4',
          text: '¿Qué tan bien documenta tu equipo las interacciones y progreso en el CRM?',
          type: 'likert',
          options: [
            { value: 1, text: 'Documentación mínima o inexistente' },
            { value: 2, text: 'Información básica sin detalles' },
            { value: 3, text: 'Documentación regular pero inconsistente' },
            { value: 4, text: 'Documentación completa y consistente' },
            { value: 5, text: 'Documentación exhaustiva con insights y próximos pasos claros' }
          ]
        },
        {
          id: 'pr5',
          text: '¿Cómo gestiona tu equipo su pipeline de ventas?',
          type: 'likert',
          options: [
            { value: 1, text: 'Sin gestión formal del pipeline' },
            { value: 2, text: 'Revisión ocasional sin estructura' },
            { value: 3, text: 'Revisiones regulares básicas' },
            { value: 4, text: 'Gestión estructurada con métricas y forecasting' },
            { value: 5, text: 'Gestión avanzada con análisis predictivo y optimización continua' }
          ]
        },
        {
          id: 'pr6',
          text: '¿Qué tan bien controla tu equipo la duración de sus ciclos de ventas?',
          type: 'likert',
          options: [
            { value: 1, text: 'No rastrean duración del ciclo' },
            { value: 2, text: 'Conocen duración promedio pero no la gestionan' },
            { value: 3, text: 'Monitorean y buscan reducir ciclos largos' },
            { value: 4, text: 'Gestión activa con estrategias para acelerar' },
            { value: 5, text: 'Optimización continua con análisis de cuellos de botella' }
          ]
        },
        {
          id: 'pr7',
          text: '¿Qué tan efectiva es la colaboración entre ventas y otros departamentos?',
          type: 'likert',
          options: [
            { value: 1, text: 'Colaboración mínima o inexistente' },
            { value: 2, text: 'Colaboración ocasional sin estructura' },
            { value: 3, text: 'Colaboración regular en casos específicos' },
            { value: 4, text: 'Colaboración estructurada con procesos definidos' },
            { value: 5, text: 'Colaboración integrada con objetivos compartidos' }
          ]
        },
        {
          id: 'pr8',
          text: '¿Qué tan preparado está tu equipo para manejar objeciones comunes?',
          type: 'likert',
          options: [
            { value: 1, text: 'Respuestas improvisadas sin preparación' },
            { value: 2, text: 'Conocimiento básico de respuestas comunes' },
            { value: 3, text: 'Preparación moderada con scripts básicos' },
            { value: 4, text: 'Entrenamiento estructurado en manejo de objeciones' },
            { value: 5, text: 'Dominio avanzado con técnicas sofisticadas y personalización' }
          ]
        },
        {
          id: 'pr9',
          text: '¿Qué tan consistente es el seguimiento después de reuniones de ventas?',
          type: 'likert',
          options: [
            { value: 1, text: 'Seguimiento esporádico o inexistente' },
            { value: 2, text: 'Seguimiento básico ocasional' },
            { value: 3, text: 'Seguimiento regular pero sin estructura' },
            { value: 4, text: 'Seguimiento estructurado con templates y timing' },
            { value: 5, text: 'Seguimiento sofisticado con contenido personalizado y múltiples touchpoints' }
          ]
        },
        {
          id: 'pr10',
          text: '¿Qué tan bien adapta tu equipo el proceso de ventas según el tipo de cliente?',
          type: 'likert',
          options: [
            { value: 1, text: 'Proceso rígido sin adaptación' },
            { value: 2, text: 'Adaptaciones mínimas ocasionales' },
            { value: 3, text: 'Algunas adaptaciones según el contexto' },
            { value: 4, text: 'Adaptación estructurada por segmento/tipo de deal' },
            { value: 5, text: 'Personalización avanzada con múltiples playbooks' }
          ]
        }
      ]
    },
    {
      id: 'communication',
      name: 'Habilidades de Comunicación y Presentación',
      description: 'Capacidad de escucha activa, descubrimiento de necesidades y presentación',
      questions: [
        {
          id: 'c1',
          text: '¿Qué tan bien practican la escucha activa los miembros de tu equipo?',
          type: 'likert',
          options: [
            { value: 1, text: 'Hablan más de lo que escuchan' },
            { value: 2, text: 'Escuchan básicamente pero se enfocan en su agenda' },
            { value: 3, text: 'Equilibrio moderado entre hablar y escuchar' },
            { value: 4, text: 'Escucha activa con preguntas de seguimiento' },
            { value: 5, text: 'Maestría en escucha activa con técnicas avanzadas' }
          ]
        },
        {
          id: 'c2',
          text: '¿Qué tan efectivos son descubriendo las verdaderas necesidades del cliente?',
          type: 'likert',
          options: [
            { value: 1, text: 'Se enfocan en características del producto' },
            { value: 2, text: 'Preguntas básicas sobre necesidades obvias' },
            { value: 3, text: 'Descubrimiento moderado de necesidades expresadas' },
            { value: 4, text: 'Descubrimiento profundo incluyendo necesidades implícitas' },
            { value: 5, text: 'Descubrimiento estratégico de necesidades no reconocidas' }
          ]
        },
        {
          id: 'c3',
          text: '¿Qué tipos de preguntas utiliza principalmente tu equipo?',
          type: 'multiple',
          options: [
            { value: 1, text: 'Principalmente preguntas cerradas' },
            { value: 2, text: 'Mix básico de preguntas abiertas y cerradas' },
            { value: 3, text: 'Uso estructurado de preguntas abiertas' },
            { value: 4, text: 'Técnicas avanzadas (SPIN, etc.) implementadas' },
            { value: 5, text: 'Maestría en múltiples técnicas de questioning' }
          ]
        },
        {
          id: 'c4',
          text: '¿Qué tan efectivos son contando historias y casos de éxito?',
          type: 'likert',
          options: [
            { value: 1, text: 'No utilizan storytelling' },
            { value: 2, text: 'Historias básicas sin estructura' },
            { value: 3, text: 'Casos de éxito ocasionales' },
            { value: 4, text: 'Storytelling estructurado con impacto emocional' },
            { value: 5, text: 'Maestría en storytelling con biblioteca de historias segmentadas' }
          ]
        },
        {
          id: 'c5',
          text: '¿Cómo calificarías la calidad de las presentaciones de tu equipo?',
          type: 'likert',
          options: [
            { value: 1, text: 'Presentaciones genéricas sin personalización' },
            { value: 2, text: 'Personalización básica (logo y nombre de empresa)' },
            { value: 3, text: 'Presentaciones moderadamente personalizadas' },
            { value: 4, text: 'Presentaciones altamente personalizadas y relevantes' },
            { value: 5, text: 'Presentaciones estratégicas co-creadas con el cliente' }
          ]
        },
        {
          id: 'c6',
          text: '¿Qué tan bien comunican el valor de su solución?',
          type: 'likert',
          options: [
            { value: 1, text: 'Se enfocan en características técnicas' },
            { value: 2, text: 'Mencionan beneficios básicos' },
            { value: 3, text: 'Conectan características con beneficios' },
            { value: 4, text: 'Comunican valor específico para el cliente' },
            { value: 5, text: 'Articulan ROI y impacto estratégico claramente' }
          ]
        },
        {
          id: 'c7',
          text: '¿Qué tan bien adaptan su estilo de comunicación según el interlocutor?',
          type: 'likert',
          options: [
            { value: 1, text: 'Mismo estilo para todos' },
            { value: 2, text: 'Adaptaciones mínimas ocasionales' },
            { value: 3, text: 'Adaptación básica por rol (técnico vs ejecutivo)' },
            { value: 4, text: 'Adaptación estructurada por personalidad y estilo' },
            { value: 5, text: 'Maestría en adaptación con múltiples frameworks (DISC, etc.)' }
          ]
        },
        {
          id: 'c8',
          text: '¿Qué tan cómodos están presentando a grupos y manejando dinámicas complejas?',
          type: 'likert',
          options: [
            { value: 1, text: 'Prefieren reuniones uno-a-uno' },
            { value: 2, text: 'Presentan a grupos pero con dificultades' },
            { value: 3, text: 'Competencia básica en presentaciones grupales' },
            { value: 4, text: 'Habilidad sólida manejando grupos diversos' },
            { value: 5, text: 'Maestría en dinámicas grupales y facilitación' }
          ]
        },
        {
          id: 'c9',
          text: '¿Cómo calificarías la calidad de la comunicación escrita de tu equipo?',
          type: 'likert',
          options: [
            { value: 1, text: 'Comunicación básica con errores frecuentes' },
            { value: 2, text: 'Comunicación correcta pero genérica' },
            { value: 3, text: 'Comunicación clara y profesional' },
            { value: 4, text: 'Comunicación persuasiva y bien estructurada' },
            { value: 5, text: 'Comunicación estratégica con alto impacto' }
          ]
        },
        {
          id: 'c10',
          text: '¿Qué tan abiertos están a recibir feedback sobre sus habilidades de comunicación?',
          type: 'likert',
          options: [
            { value: 1, text: 'Resistentes al feedback' },
            { value: 2, text: 'Aceptan feedback pero no actúan' },
            { value: 3, text: 'Reciben feedback y hacen algunos cambios' },
            { value: 4, text: 'Buscan activamente feedback y mejoran' },
            { value: 5, text: 'Cultura de mejora continua con coaching regular' }
          ]
        }
      ]
    },
    {
      id: 'negotiation',
      name: 'Negociación y Cierre',
      description: 'Técnicas de negociación efectivas y capacidad de cierre',
      questions: [
        {
          id: 'n1',
          text: '¿Qué tan bien se preparan para las negociaciones?',
          type: 'likert',
          options: [
            { value: 1, text: 'Entran a negociar sin preparación específica' },
            { value: 2, text: 'Preparación básica conociendo precios y términos' },
            { value: 3, text: 'Preparación moderada con algunos escenarios' },
            { value: 4, text: 'Preparación estructurada con múltiples escenarios' },
            { value: 5, text: 'Preparación estratégica exhaustiva con plan A, B y C' }
          ]
        },
        {
          id: 'n2',
          text: '¿Qué técnicas de negociación domina tu equipo?',
          type: 'multiple',
          options: [
            { value: 1, text: 'Negociación intuitiva sin técnicas específicas' },
            { value: 2, text: 'Técnicas básicas de concesiones' },
            { value: 3, text: 'Algunas técnicas estructuradas (anclaje, etc.)' },
            { value: 4, text: 'Múltiples técnicas bien implementadas' },
            { value: 5, text: 'Maestría en negociación con enfoque win-win' }
          ]
        },
        {
          id: 'n3',
          text: '¿Qué tan efectivos son identificando a todos los decisores e influenciadores?',
          type: 'likert',
          options: [
            { value: 1, text: 'Se enfocan solo en el contacto principal' },
            { value: 2, text: 'Identifican al decisor obvio' },
            { value: 3, text: 'Mapean decisores básicos' },
            { value: 4, text: 'Mapeo completo de stakeholders' },
            { value: 5, text: 'Análisis político organizacional profundo' }
          ]
        },
        {
          id: 'n4',
          text: '¿Cómo manejan la presión durante negociaciones difíciles?',
          type: 'likert',
          options: [
            { value: 1, text: 'Se sienten incómodos y hacen concesiones rápidas' },
            { value: 2, text: 'Manejo básico pero inconsistente' },
            { value: 3, text: 'Mantienen compostura en la mayoría de situaciones' },
            { value: 4, text: 'Manejan presión efectivamente y mantienen posición' },
            { value: 5, text: 'Utilizan la presión estratégicamente a su favor' }
          ]
        },
        {
          id: 'n5',
          text: '¿Qué tan bien identifican el momento adecuado para cerrar?',
          type: 'likert',
          options: [
            { value: 1, text: 'Cierran demasiado temprano o demasiado tarde' },
            { value: 2, text: 'Timing básico con señales obvias' },
            { value: 3, text: 'Identifican señales de compra moderadamente' },
            { value: 4, text: 'Excelente timing basado en múltiples señales' },
            { value: 5, text: 'Maestría en crear y reconocer momentos de cierre' }
          ]
        },
        {
          id: 'n6',
          text: '¿Qué variedad de técnicas de cierre utiliza tu equipo?',
          type: 'likert',
          options: [
            { value: 1, text: 'Solo cierre directo básico' },
            { value: 2, text: '2-3 técnicas básicas' },
            { value: 3, text: 'Repertorio moderado de técnicas' },
            { value: 4, text: 'Amplio repertorio bien ejecutado' },
            { value: 5, text: 'Maestría en múltiples técnicas adaptadas al contexto' }
          ]
        },
        {
          id: 'n7',
          text: '¿Qué tan efectivos son manejando objeciones de precio?',
          type: 'likert',
          options: [
            { value: 1, text: 'Reducen precio inmediatamente' },
            { value: 2, text: 'Justifican precio básicamente' },
            { value: 3, text: 'Defienden precio con argumentos de valor' },
            { value: 4, text: 'Reframe la conversación hacia valor total' },
            { value: 5, text: 'Transforman objeciones de precio en oportunidades' }
          ]
        },
        {
          id: 'n8',
          text: '¿Qué tan bien crean urgencia legítima para cerrar?',
          type: 'likert',
          options: [
            { value: 1, text: 'No crean urgencia o usan tácticas obvias' },
            { value: 2, text: 'Urgencia básica con deadlines artificiales' },
            { value: 3, text: 'Urgencia moderada con razones válidas' },
            { value: 4, text: 'Urgencia estratégica basada en necesidades del cliente' },
            { value: 5, text: 'Maestría en crear urgencia natural y auténtica' }
          ]
        },
        {
          id: 'n9',
          text: '¿Qué tan bien documentan y confirman los acuerdos alcanzados?',
          type: 'likert',
          options: [
            { value: 1, text: 'Documentación mínima o verbal' },
            { value: 2, text: 'Documentación básica sin detalles' },
            { value: 3, text: 'Documentación adecuada de puntos principales' },
            { value: 4, text: 'Documentación completa y confirmación mutua' },
            { value: 5, text: 'Documentación estratégica que facilita implementación' }
          ]
        },
        {
          id: 'n10',
          text: '¿Realizan análisis de sus negociaciones para mejorar?',
          type: 'likert',
          options: [
            { value: 1, text: 'No analizan sus negociaciones' },
            { value: 2, text: 'Reflexión básica ocasional' },
            { value: 3, text: 'Análisis moderado de resultados' },
            { value: 4, text: 'Análisis estructurado con aprendizajes' },
            { value: 5, text: 'Análisis exhaustivo con mejora continua' }
          ]
        }
      ]
    },
    {
      id: 'crm',
      name: 'Gestión de Relaciones con Clientes (CRM)',
      description: 'Uso efectivo de herramientas CRM y gestión de relaciones',
      questions: [
        {
          id: 'crm1',
          text: '¿Qué tan consistentemente utiliza tu equipo el sistema CRM?',
          type: 'likert',
          options: [
            { value: 1, text: 'Uso mínimo o resistencia al CRM' },
            { value: 2, text: 'Uso básico solo para cumplir requisitos' },
            { value: 3, text: 'Uso regular pero inconsistente' },
            { value: 4, text: 'Uso consistente y proactivo' },
            { value: 5, text: 'Maestría en CRM como herramienta estratégica' }
          ]
        },
        {
          id: 'crm2',
          text: '¿Qué tan completa y actualizada está la información en el CRM?',
          type: 'likert',
          options: [
            { value: 1, text: 'Datos mínimos y desactualizados' },
            { value: 2, text: 'Información básica con algunos vacíos' },
            { value: 3, text: 'Datos moderadamente completos' },
            { value: 4, text: 'Información completa y actualizada regularmente' },
            { value: 5, text: 'Datos exhaustivos con insights y análisis' }
          ]
        },
        {
          id: 'crm3',
          text: '¿Qué tan bien registran todas las interacciones con clientes?',
          type: 'likert',
          options: [
            { value: 1, text: 'Registro mínimo de actividades' },
            { value: 2, text: 'Solo actividades principales' },
            { value: 3, text: 'Registro regular pero inconsistente' },
            { value: 4, text: 'Registro completo de todas las interacciones' },
            { value: 5, text: 'Registro detallado con contexto e insights' }
          ]
        },
        {
          id: 'crm4',
          text: '¿Qué nivel de automatización utilizan en su CRM?',
          type: 'multiple',
          options: [
            { value: 1, text: 'Sin automatización, todo manual' },
            { value: 2, text: 'Automatización básica (recordatorios)' },
            { value: 3, text: 'Automatización moderada (secuencias de email)' },
            { value: 4, text: 'Automatización avanzada (workflows complejos)' },
            { value: 5, text: 'Automatización inteligente con IA y triggers' }
          ]
        },
        {
          id: 'crm5',
          text: '¿Qué tan efectivamente utilizan los reportes y análisis del CRM?',
          type: 'likert',
          options: [
            { value: 1, text: 'No utilizan reportes' },
            { value: 2, text: 'Reportes básicos ocasionales' },
            { value: 3, text: 'Revisión regular de métricas básicas' },
            { value: 4, text: 'Análisis profundo con múltiples métricas' },
            { value: 5, text: 'Análisis predictivo y optimización basada en datos' }
          ]
        },
        {
          id: 'crm6',
          text: '¿Qué tan bien gestionan la relación después del cierre?',
          type: 'likert',
          options: [
            { value: 1, text: 'Mínimo contacto post-venta' },
            { value: 2, text: 'Contacto básico para resolver problemas' },
            { value: 3, text: 'Seguimiento regular de satisfacción' },
            { value: 4, text: 'Gestión proactiva de la relación' },
            { value: 5, text: 'Estrategia integral de customer success' }
          ]
        },
        {
          id: 'crm7',
          text: '¿Qué tan efectivos son identificando oportunidades de upsell/cross-sell?',
          type: 'likert',
          options: [
            { value: 1, text: 'No identifican oportunidades adicionales' },
            { value: 2, text: 'Identificación ocasional y reactiva' },
            { value: 3, text: 'Búsqueda básica de oportunidades' },
            { value: 4, text: 'Identificación proactiva y sistemática' },
            { value: 5, text: 'Estrategia sofisticada de expansión de cuentas' }
          ]
        },
        {
          id: 'crm8',
          text: '¿Cómo manejan las renovaciones de contratos/servicios?',
          type: 'likert',
          options: [
            { value: 1, text: 'Enfoque reactivo cerca del vencimiento' },
            { value: 2, text: 'Contacto básico antes del vencimiento' },
            { value: 3, text: 'Proceso estructurado de renovación' },
            { value: 4, text: 'Gestión proactiva con valor agregado' },
            { value: 5, text: 'Estrategia integral de retención y expansión' }
          ]
        },
        {
          id: 'crm9',
          text: '¿Qué tan efectiva es la colaboración entre ventas y customer success?',
          type: 'likert',
          options: [
            { value: 1, text: 'Sin colaboración o handoff deficiente' },
            { value: 2, text: 'Transferencia básica de información' },
            { value: 3, text: 'Colaboración ocasional en casos específicos' },
            { value: 4, text: 'Colaboración estructurada con procesos definidos' },
            { value: 5, text: 'Colaboración integrada con objetivos compartidos' }
          ]
        },
        {
          id: 'crm10',
          text: '¿Qué tan sistemáticamente miden la satisfacción del cliente?',
          type: 'likert',
          options: [
            { value: 1, text: 'No miden satisfacción sistemáticamente' },
            { value: 2, text: 'Medición ocasional e informal' },
            { value: 3, text: 'Encuestas básicas periódicas' },
            { value: 4, text: 'Sistema estructurado de medición (NPS, CSAT)' },
            { value: 5, text: 'Medición continua con análisis y acción' }
          ]
        }
      ]
    },
    {
      id: 'development',
      name: 'Desarrollo Personal y Profesional',
      description: 'Actitud hacia el aprendizaje continuo y gestión personal',
      questions: [
        {
          id: 'd1',
          text: '¿Qué tan proactivos son los miembros de tu equipo en su desarrollo profesional?',
          type: 'likert',
          options: [
            { value: 1, text: 'Resistentes al cambio y nuevo aprendizaje' },
            { value: 2, text: 'Aprendizaje solo cuando es obligatorio' },
            { value: 3, text: 'Interés moderado en desarrollo personal' },
            { value: 4, text: 'Buscan activamente oportunidades de aprendizaje' },
            { value: 5, text: 'Cultura de aprendizaje continuo y auto-desarrollo' }
          ]
        },
        {
          id: 'd2',
          text: '¿Qué tan efectivamente gestionan su tiempo y productividad?',
          type: 'likert',
          options: [
            { value: 1, text: 'Sin estructura ni planificación' },
            { value: 2, text: 'Planificación básica e inconsistente' },
            { value: 3, text: 'Gestión moderada del tiempo' },
            { value: 4, text: 'Excelente gestión con herramientas y técnicas' },
            { value: 5, text: 'Maestría en productividad con optimización continua' }
          ]
        },
        {
          id: 'd3',
          text: '¿Cómo manejan el rechazo y los "no" de los prospectos?',
          type: 'likert',
          options: [
            { value: 1, text: 'Se desmoralizan fácilmente' },
            { value: 2, text: 'Recuperación lenta del rechazo' },
            { value: 3, text: 'Manejo moderado de la frustración' },
            { value: 4, text: 'Resiliencia sólida y recuperación rápida' },
            { value: 5, text: 'Ven el rechazo como oportunidad de aprendizaje' }
          ]
        },
        {
          id: 'd4',
          text: '¿Qué tan efectivos son estableciendo y alcanzando objetivos personales?',
          type: 'likert',
          options: [
            { value: 1, text: 'Sin objetivos claros o planificación' },
            { value: 2, text: 'Objetivos básicos sin seguimiento' },
            { value: 3, text: 'Objetivos moderados con seguimiento ocasional' },
            { value: 4, text: 'Objetivos SMART con seguimiento regular' },
            { value: 5, text: 'Sistema sofisticado de objetivos con métricas y ajustes' }
          ]
        },
        {
          id: 'd5',
          text: '¿Qué tan activos son en construir su red profesional?',
          type: 'likert',
          options: [
            { value: 1, text: 'Networking mínimo o inexistente' },
            { value: 2, text: 'Networking ocasional en eventos' },
            { value: 3, text: 'Networking moderado con algunos contactos' },
            { value: 4, text: 'Networking activo y estratégico' },
            { value: 5, text: 'Maestría en networking con personal branding' }
          ]
        },
        {
          id: 'd6',
          text: '¿Qué tan bien se adaptan a cambios en procesos, herramientas o estrategias?',
          type: 'likert',
          options: [
            { value: 1, text: 'Resistentes al cambio' },
            { value: 2, text: 'Adaptación lenta y con dificultades' },
            { value: 3, text: 'Adaptación moderada con apoyo' },
            { value: 4, text: 'Adaptación rápida y efectiva' },
            { value: 5, text: 'Abrazan el cambio como oportunidad' }
          ]
        },
        {
          id: 'd7',
          text: '¿Qué tipo de mentalidad predomina en tu equipo?',
          type: 'multiple',
          options: [
            { value: 1, text: 'Mentalidad fija, evitan desafíos' },
            { value: 2, text: 'Mentalidad mixta con tendencia fija' },
            { value: 3, text: 'Mentalidad equilibrada' },
            { value: 4, text: 'Mentalidad de crecimiento predominante' },
            { value: 5, text: 'Mentalidad de crecimiento sólida, abrazan desafíos' }
          ]
        },
        {
          id: 'd8',
          text: '¿Qué tan conscientes son de sus fortalezas y áreas de mejora?',
          type: 'likert',
          options: [
            { value: 1, text: 'Poco autoconocimiento' },
            { value: 2, text: 'Conciencia básica de habilidades obvias' },
            { value: 3, text: 'Autoconocimiento moderado' },
            { value: 4, text: 'Buena conciencia de fortalezas y debilidades' },
            { value: 5, text: 'Autoconocimiento profundo con plan de desarrollo' }
          ]
        },
        {
          id: 'd9',
          text: '¿Qué tan activamente buscan feedback para mejorar?',
          type: 'likert',
          options: [
            { value: 1, text: 'Evitan o ignoran el feedback' },
            { value: 2, text: 'Reciben feedback solo cuando se les da' },
            { value: 3, text: 'Ocasionalmente piden feedback' },
            { value: 4, text: 'Buscan feedback regularmente' },
            { value: 5, text: 'Cultura de feedback continuo y mejora' }
          ]
        },
        {
          id: 'd10',
          text: '¿Qué tan bien mantienen un balance saludable entre trabajo y vida personal?',
          type: 'likert',
          options: [
            { value: 1, text: 'Desequilibrio significativo que afecta rendimiento' },
            { value: 2, text: 'Dificultades ocasionales con el balance' },
            { value: 3, text: 'Balance moderado con algunos desafíos' },
            { value: 4, text: 'Buen balance que sostiene el rendimiento' },
            { value: 5, text: 'Excelente balance que potencia el rendimiento' }
          ]
        }
      ]
    }
  ]
};

export const maturityLevels = {
  initial: { min: 60, max: 120, label: 'Inicial', color: '#ef4444', description: 'Equipo en desarrollo, necesita formación básica' },
  developing: { min: 121, max: 180, label: 'En Desarrollo', color: '#f59e0b', description: 'Equipo con fundamentos, requiere especialización' },
  competent: { min: 181, max: 240, label: 'Competente', color: '#10b981', description: 'Equipo sólido, oportunidades de optimización' },
  advanced: { min: 241, max: 300, label: 'Avanzado', color: '#3b82f6', description: 'Equipo de alto rendimiento, enfoque en innovación' }
};

export const getMaturityLevel = (score) => {
  if (score <= 120) return maturityLevels.initial;
  if (score <= 180) return maturityLevels.developing;
  if (score <= 240) return maturityLevels.competent;
  return maturityLevels.advanced;
};

export const getAreaMaturityLevel = (score) => {
  if (score <= 20) return { ...maturityLevels.initial, min: 10, max: 20 };
  if (score <= 30) return { ...maturityLevels.developing, min: 21, max: 30 };
  if (score <= 40) return { ...maturityLevels.competent, min: 31, max: 40 };
  return { ...maturityLevels.advanced, min: 41, max: 50 };
};

