import { Component, signal, computed} from '@angular/core';
import { Cuestionario, PREGUNTAS_QUIZ } from './preguntas';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  
  readonly preguntas = PREGUNTAS_QUIZ;

  private indicePregunta = signal(0);
  puntuacion = signal(0);
  mensajeResultado = signal <string | null>(null);
  quizTerminado = signal(false);


preguntaActual = computed(() => {
    if (this.quizTerminado() || this.indicePregunta() >= this.preguntas.length) {
      return null;
    }
    return this.preguntas[this.indicePregunta()];
  });

  constructor() {
    console.log('Cuestionario disponible')
  }

  responder(respuestaSeleccionada: string){
    const currentQuestion = this.preguntaActual();
    if (!currentQuestion) {
        console.warn('Intentando responder sin una pregunta actual.'); // O un manejo de error más formal
        return;
    } 
    if (respuestaSeleccionada === currentQuestion.solucion) {
      this.puntuacion.update(score => score +1);
      this.mensajeResultado.set('¡Correcto!');
    } else {
      this.mensajeResultado.set(`Incorrecto. La respuesta correcta era: ${currentQuestion.solucion}`)
    }

  }
 
siguientePregunta() {
    this.mensajeResultado.set(null); 

    
    const proximoIndice = this.indicePregunta() + 1;
    
    if (proximoIndice < this.preguntas.length) {
      this.indicePregunta.set(proximoIndice); 
      console.log(`Avanzando a la pregunta con índice: ${proximoIndice}`);
    } else {
      
      this.quizTerminado.set(true); 
      console.log('¡Quiz Terminado! Puntuación final:', this.puntuacion());
    }
  }

reiniciarQuiz() {
  this.indicePregunta.set(0),
  this.puntuacion.set(0),
  this.mensajeResultado.set(null),
  this.quizTerminado.set(false)
}
  
}
