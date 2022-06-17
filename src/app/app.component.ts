import { Component } from '@angular/core';
import {  Pessoa } from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-usuarios';
  alunos: Pessoa[] = [{nome: "Henrique", idade: 20, email: "Henrique@gmail.com", curso: "Ciências da computação"}] 
  professores: Pessoa[] = [{nome: "Danilo", idade: 40, email: "Danilo@gmail.com", curso: "Matematica"}]

  public cadastrarAluno($event):void{
    const aluno = {...$event}
    this.alunos.push(aluno)
  }
  public cadastrarProfessor($event): void{
    const professor = {...$event}
    this.professores.push(professor)
  }
}
