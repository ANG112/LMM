export interface Cuestionario {
  id:string,
  pregunta: string,
  respuesta1: string,
  respuesta2:string,
  respuesta3:string,
  respuesta4:string,
  solucion: string
}


export const PREGUNTAS_QUIZ = [
    {
    id: 'q1',
    pregunta: '¿Cuál es la capital de Francia?',
    respuesta1: 'Londres',
    respuesta2: 'Berlín',
    respuesta3: 'París',
    respuesta4: 'Roma',
    solucion: 'París',
  },
  {
    id: 'q2',
    pregunta: '¿Qué planeta es conocido como el Planeta Rojo?',
    respuesta1: 'Júpiter',
    respuesta2: 'Marte',
    respuesta3: 'Venus',
    respuesta4: 'Saturno',
    solucion: 'Marte',
  },
  {
    id: 'q3',
    pregunta: '¿Cuál es el río más largo del mundo?',
    respuesta1: 'Amazonas',
    respuesta2: 'Nilo',
    respuesta3: 'Misisipi',
    respuesta4: 'Yangtsé',
    solucion: 'Nilo', 
  },
  {
    id: 'q4',
    pregunta: '¿Quién pintó la Mona Lisa?',
    respuesta1: 'Vincent van Gogh',
    respuesta2: 'Pablo Picasso',
    respuesta3: 'Leonardo da Vinci',
    respuesta4: 'Claude Monet',
    solucion: 'Leonardo da Vinci',
  },
  {
    id: 'q5',
    pregunta: '¿Cuál es el animal terrestre más rápido?',
    respuesta1: 'León',
    respuesta2: 'Tigre',
    respuesta3: 'Guepardo',
    respuesta4: 'Halcón Peregrino', 
    solucion: 'Guepardo',
  },
];