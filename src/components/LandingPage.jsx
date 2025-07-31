import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  Users, 
  Clock, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const LandingPage = ({ onStart }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    teamSize: '',
    industry: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'La empresa es requerida';
    }
    
    if (!formData.position) {
      newErrors.position = 'El cargo es requerido';
    }
    
    if (!formData.teamSize) {
      newErrors.teamSize = 'El tamaño del equipo es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onStart(formData);
    }
  };

  const benefits = [
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Diagnóstico Objetivo",
      description: "Evaluación basada en mejores prácticas de la industria"
    },
    {
      icon: <Target className="w-6 h-6 text-green-600" />,
      title: "Recomendaciones Accionables",
      description: "Plan de acción específico para tu equipo"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      title: "Benchmarking",
      description: "Compara tu equipo con estándares de la industria"
    },
    {
      icon: <Award className="w-6 h-6 text-orange-600" />,
      title: "Reporte Profesional",
      description: "Documento completo listo para compartir"
    }
  ];

  const features = [
    "60 preguntas especializadas en 6 áreas clave",
    "Análisis de patrones y gaps específicos",
    "Recomendaciones priorizadas por impacto",
    "Gráficos visuales y métricas comparativas",
    "Plan de desarrollo personalizado",
    "Recursos de formación recomendados"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-6">
          <img src="https://iven.academy/wp-content/uploads/2023/03/Asset-3-2.svg" alt="IVen Academy" className="h-12" />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué tan preparada está tu <span className="text-blue-600">área de ventas</span> para aprovechar la <span className="text-blue-600">IA</span>?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Evalúa la adopción de IA en tu proceso comercial y recibe un plan de acción personalizado (30/60/90 días) para mejorar prospección, calificación, propuestas y cierre.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>8-12 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Para líderes comerciales</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Reporte profesional</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulario */}
          <Card className="w-full max-w-md mx-auto lg:mx-0">
            <CardHeader>
              <CardTitle className="text-2xl">Comenzar Evaluación</CardTitle>
              <CardDescription>
                Completa tus datos y obtén un diagnóstico de adopción de IA con recomendaciones por área
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Tu nombre"
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email corporativo *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="tu.email@empresa.com"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Nombre de tu empresa"
                    className={errors.company ? 'border-red-500' : ''}
                  />
                  {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Cargo *</Label>
                  <Select 
                    value={formData.position} 
                    onValueChange={(value) => handleInputChange('position', value)}
                  >
                    <SelectTrigger className={errors.position ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Selecciona tu cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="director-comercial">Director Comercial</SelectItem>
                      <SelectItem value="gerente-ventas">Gerente de Ventas</SelectItem>
                      <SelectItem value="vp-ventas">VP de Ventas</SelectItem>
                      <SelectItem value="gerente-rrhh">Gerente de RR.HH.</SelectItem>
                      <SelectItem value="director-talento">Director de Talento</SelectItem>
                      <SelectItem value="ceo">CEO/Fundador</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.position && <p className="text-sm text-red-500">{errors.position}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamSize">Tamaño del equipo de ventas *</Label>
                  <Select 
                    value={formData.teamSize} 
                    onValueChange={(value) => handleInputChange('teamSize', value)}
                  >
                    <SelectTrigger className={errors.teamSize ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Número de vendedores" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 personas</SelectItem>
                      <SelectItem value="6-15">6-15 personas</SelectItem>
                      <SelectItem value="16-30">16-30 personas</SelectItem>
                      <SelectItem value="31-50">31-50 personas</SelectItem>
                      <SelectItem value="50+">Más de 50 personas</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.teamSize && <p className="text-sm text-red-500">{errors.teamSize}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industria (opcional)</Label>
                  <Select 
                    value={formData.industry} 
                    onValueChange={(value) => handleInputChange('industry', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu industria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tecnologia">Tecnología</SelectItem>
                      <SelectItem value="servicios-financieros">Servicios Financieros</SelectItem>
                      <SelectItem value="manufactura">Manufactura</SelectItem>
                      <SelectItem value="servicios-profesionales">Servicios Profesionales</SelectItem>
                      <SelectItem value="salud">Salud</SelectItem>
                      <SelectItem value="educacion">Educación</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <span>Comenzar Evaluación</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al continuar, aceptas recibir el reporte por email y comunicaciones relevantes.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Beneficios */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                ¿Qué obtienes con esta evaluación?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border">
                    {benefit.icon}
                    <div>
                      <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Incluye análisis de:
              </h3>
              <div className="space-y-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">
                💡 Basado en +200 evaluaciones
              </h3>
              <p className="text-blue-800 text-sm">
                Nuestra metodología ha sido validada con equipos de ventas de diferentes 
                industrias y tamaños, proporcionando insights precisos y accionables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

