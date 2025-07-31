import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Award, 
  AlertTriangle,
  Download,
  Calendar,
  Users
} from 'lucide-react';
import { assessmentData, getMaturityLevel, getAreaMaturityLevel } from '../data/questions';
import { generateRecommendations } from '../data/recommendations';

const ResultsReport = ({ results, userInfo, onRestart }) => {
  const { totalScore, areaScores, maxScore } = results;
  const totalMax = maxScore;
  const maturityLevel = getMaturityLevel(totalScore, totalMax);
  const recommendations = generateRecommendations(areaScores);

  // Preparar datos para el gráfico radar
  const radarData = assessmentData.areas.map(area => ({
    area: area.name.split(' ')[0], // Usar solo la primera palabra para el gráfico
    fullName: area.name,
    score: areaScores[area.id],
    maxScore: (area.questions.length * 5),
    percentage: (areaScores[area.id] / (area.questions.length * 5)) * 100
  }));

  // Preparar datos para el gráfico de barras
  const barData = assessmentData.areas.map(area => {
    const score = areaScores[area.id];
    const level = getAreaMaturityLevel(score, assessmentData.areas.find(a => a.id === area.id).questions.length * 5);
    return {
      name: area.name.split(' ')[0],
      fullName: area.name,
      score,
      maxScore: (area.questions.length * 5),
      level: level.label,
      color: level.color
    };
  });

  // Identificar fortalezas y oportunidades
  const sortedAreas = Object.entries(areaScores)
    .map(([areaId, score]) => {
      const area = assessmentData.areas.find(a => a.id === areaId);
      return { areaId, score, name: area.name };
    })
    .sort((a, b) => b.score - a.score);

  const strengths = sortedAreas.slice(0, 3);
  const opportunities = sortedAreas.slice(-3).reverse();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRÍTICA': return 'destructive';
      case 'ALTA': return 'destructive';
      case 'MEDIA': return 'secondary';
      case 'BAJA': return 'outline';
      default: return 'outline';
    }
  };

  const getScoreColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-blue-600';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header con información del usuario */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Diagnóstico de Madurez del Equipo de Ventas</CardTitle>
              <CardDescription className="mt-2">
                {userInfo?.company && `${userInfo.company} • `}
                {userInfo?.name && `${userInfo.name} • `}
                {new Date().toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </CardDescription>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Descargar Reporte</span>
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Resumen Ejecutivo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Puntuación Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-2" style={{ color: maturityLevel.color }}>
              {totalScore}/{maxScore}
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <Badge variant="secondary" style={{ backgroundColor: maturityLevel.color + '20', color: maturityLevel.color }}>
                {maturityLevel.label}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {maturityLevel.description}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span>Principales Fortalezas</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {strengths.map((strength, index) => (
              <div key={strength.areaId} className="flex justify-between items-center">
                <span className="text-sm">{strength.name.split(' ')[0]}</span>
                <span className={`font-medium ${getScoreColor(strength.score, 50)}`}>
                  {strength.score}/50
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Target className="w-5 h-5 text-orange-600" />
              <span>Oportunidades Clave</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {opportunities.map((opportunity, index) => (
              <div key={opportunity.areaId} className="flex justify-between items-center">
                <span className="text-sm">{opportunity.name.split(' ')[0]}</span>
                <span className={`font-medium ${getScoreColor(opportunity.score, 50)}`}>
                  {opportunity.score}/50
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico Radar */}
        <Card>
          <CardHeader>
            <CardTitle>Perfil de Madurez por Área</CardTitle>
            <CardDescription>
              Visualización general del nivel de tu equipo en cada área evaluada
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="area" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 50]} 
                  tick={{ fontSize: 10 }}
                  tickCount={6}
                />
                <Radar
                  name="Puntuación"
                  dataKey="score"
                  stroke={maturityLevel.color}
                  fill={maturityLevel.color}
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Barras */}
        <Card>
          <CardHeader>
            <CardTitle>Puntuación Detallada por Área</CardTitle>
            <CardDescription>
              Comparación directa del rendimiento en cada área
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis domain={[0, 50]} />
                <Tooltip 
                  formatter={(value, name, props) => [
                    `${value}/50 (${Math.round((value/50)*100)}%)`,
                    props.payload.fullName
                  ]}
                />
                <Bar 
                  dataKey="score" 
                  fill={maturityLevel.color}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Análisis Detallado por Área */}
      <Card>
        <CardHeader>
          <CardTitle>Análisis Detallado por Área</CardTitle>
          <CardDescription>
            Evaluación específica y nivel de madurez de cada área
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assessmentData.areas.map(area => {
              const score = areaScores[area.id];
              const level = getAreaMaturityLevel(score, assessmentData.areas.find(a => a.id === area.id).questions.length * 5);
              const percentage = (score / (area.questions.length * 5)) * 100;
              
              return (
                <div key={area.id} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{area.name}</h4>
                    <Badge 
                      variant="secondary" 
                      style={{ 
                        backgroundColor: level.color + '20', 
                        color: level.color 
                      }}
                    >
                      {level.label}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Puntuación</span>
                      <span className="font-medium">{score}/{assessmentData.areas.find(a => a.id === area.id).questions.length * 5}</span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recomendaciones Prioritarias */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <span>Plan de Acción Recomendado</span>
          </CardTitle>
          <CardDescription>
            Recomendaciones priorizadas basadas en tu evaluación
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Patrones Detectados */}
          {recommendations.patterns.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium text-sm text-orange-600">Patrones Identificados</h4>
              {recommendations.patterns.map((pattern, index) => (
                <div key={index} className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{pattern.type}</span>
                    <Badge variant={getPriorityColor(pattern.priority)}>
                      {pattern.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {pattern.description}
                  </p>
                  <p className="text-sm font-medium">
                    Recomendación: {pattern.recommendation}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Top 3 Recomendaciones */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Prioridades Inmediatas</h4>
            {recommendations.topPriorities.map((rec, index) => {
              const area = assessmentData.areas.find(a => a.id === rec.area);
              return (
                <div key={rec.area} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">{area.name}</h5>
                      <p className="text-sm text-muted-foreground">{rec.title}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <Badge variant={getPriorityColor(rec.priority)}>
                        {rec.priority}
                      </Badge>
                      <div className="text-xs text-muted-foreground">
                        {rec.timeline}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h6 className="text-sm font-medium">Acciones Recomendadas:</h6>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {rec.actions.slice(0, 3).map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Recurso: {rec.resources}
                    </span>
                    <Button variant="outline" size="sm">
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">¿Listo para llevar tu equipo al siguiente nivel?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nuestros expertos pueden ayudarte a implementar estas recomendaciones con programas 
              de formación personalizados para tu equipo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta Gratuita</span>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Ver Programas de Formación</span>
              </Button>
              <Button variant="ghost" size="lg" onClick={onRestart}>
                Realizar Nueva Evaluación
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsReport;

