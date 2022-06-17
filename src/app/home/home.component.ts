import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Aluno } from '../models/aluno';
import { maiorDeIdade } from './maiorDeIdadeValidator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cadastrarAlunoForm!: FormGroup;
  public professorForm: boolean = false;
  public alunoForm: boolean = false;
  @Output() alunoCadastrado = new EventEmitter<Aluno>();
  
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.cadastrarAlunoForm = this.formBuilder.group(
      {
      nome: ["",[Validators.required, Validators.minLength(4)]],
      idade: ["",[Validators.required, maiorDeIdade]],
      email: ["", [Validators.required, Validators.email]],
      curso: ["",[Validators.required,Validators.minLength(4)]]
      }
    )
  }

  public ativarDesativarProfessorForm(): boolean{
    if (this.professorForm === false){
      this.professorForm = true;
      return this.professorForm;
    }
    this.professorForm = false;
    return this.professorForm;
  }
  public ativarDesativarAlunoForm(): boolean{
    if (this.alunoForm === false){
      this.alunoForm = true;
      return this.alunoForm
    }
    this.alunoForm = false;
    return this.alunoForm;
  }
  public cadastrarAluno(): void{
    if(this.cadastrarAlunoForm.valid){
      const novoAluno = this.cadastrarAlunoForm.getRawValue() as Aluno
      this.alunoCadastrado.emit(novoAluno)
      this.limparCadastroAluno()
    }
  }
  private limparCadastroAluno(): void{
    this.cadastrarAlunoForm.reset();
  }
}
