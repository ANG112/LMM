import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuizComponent } from './views/quiz/quiz.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'quiz', component: QuizComponent}
];
