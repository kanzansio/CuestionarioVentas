import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { assessmentData } from '../data/questions';

const AssessmentForm = ({ onComplete }) => {
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentArea = assessmentData.areas[currentAreaIndex];
  const currentQuestion = currentArea.questions[currentQuestionIndex];
  const totalQuestions = assessmentData.areas.reduce((sum, area) => sum + area.questions.length, 0);
  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const handleAnswer = (value) => {
    const questionId = currentQuestion.id;
    setAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value)
    }));
  };

  const goToNext = () => {
    if (currentQuestionIndex < currentArea.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentAreaIndex < assessmentData.areas.length - 1) {
      setCurrentAreaIndex(currentAreaIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Evaluación completada
      setIsCompleted(true);
      calculateResults();
    }
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentAreaIndex > 0) {
      setCurrentAreaIndex(currentAreaIndex - 1);
      setCurrentQuestionIndex(assessmentData.areas[currentAreaIndex - 1].questions.length - 1);
    }
  };

  const calculateResults = () => {
    const areaScores = {};
    let totalScore = 0;

    assessmentData.areas.forEach(area => {
      let areaScore = 0;
      area.questions.forEach(question => {
        areaScore += answers[question.id] || 0;
      });
      areaScores[area.id] = areaScore;
      totalScore += areaScore;
    });

    onComplete({
      totalScore,
      areaScores,
      answers,
      maxScore: totalQuestions * 5
    });
  };

  const isCurrentQuestionAnswered = answers[currentQuestion.id] !== undefined;
  const canGoNext = isCurrentQuestionAnswered;
  const canGoPrevious = currentAreaIndex > 0 || currentQuestionIndex > 0;

  if (isCompleted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">¡Evaluación Completada!</h2>
          <p className="text-muted-foreground">
            Procesando tus resultados...
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Progreso de la evaluación</span>
          <span>{answeredQuestions} de {totalQuestions} preguntas</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Area Header */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">
                Área {currentAreaIndex + 1} de {assessmentData.areas.length}: {currentArea.name}
              </CardTitle>
              <CardDescription className="mt-1">
                {currentArea.description}
              </CardDescription>
            </div>
            <div className="text-sm text-muted-foreground">
              Pregunta {currentQuestionIndex + 1} de {currentArea.questions.length}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl leading-relaxed">
            {currentQuestion.text}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup
            value={answers[currentQuestion.id]?.toString() || ''}
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                <RadioGroupItem 
                  value={option.value.toString()} 
                  id={`option-${option.value}`}
                  className="mt-1"
                />
                <Label 
                  htmlFor={`option-${option.value}`}
                  className="flex-1 text-sm leading-relaxed cursor-pointer"
                >
                  <span className="font-medium text-primary mr-2">
                    {option.value}.
                  </span>
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={goToPrevious}
          disabled={!canGoPrevious}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </Button>

        <Button
          onClick={goToNext}
          disabled={!canGoNext}
          className="flex items-center space-x-2"
        >
          <span>
            {currentAreaIndex === assessmentData.areas.length - 1 && 
             currentQuestionIndex === currentArea.questions.length - 1 
              ? 'Finalizar Evaluación' 
              : 'Siguiente'}
          </span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default AssessmentForm;

