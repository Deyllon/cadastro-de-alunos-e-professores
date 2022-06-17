import { Component } from '@angular/core';
import { Aluno } from './models/aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-usuarios';
  alunos: Aluno[] = [{nome: "Henrique", idade: 20, email: "Henrique@gmail.com", curso: "Ciências da computação"}] 

  public cadastrarAluno($event):void{
    const aluno = {...$event}
    this.alunos.push(aluno)
  }
}
