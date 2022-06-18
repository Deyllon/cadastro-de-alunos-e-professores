import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from '../models/pessoa';
import { maiorDeIdade } from './maiorDeIdadeValidator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cadastrarAlunoForm!: FormGroup;
  public cadastrarProfessorForm!: FormGroup;
  public professorForm: boolean = false;
  public alunoForm: boolean = true;
  @Output() alunoCadastrado = new EventEmitter<Pessoa>();
  @Output() professorCadastrado = new EventEmitter<Pessoa>();
  
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
    this.cadastrarProfessorForm = this.formBuilder.group({
      nome: ["",[Validators.required, Validators.minLength(4)]],
      idade: ["",[Validators.required, maiorDeIdade]],
      email: ["", [Validators.required, Validators.email]],
      curso: ["",[Validators.required,Validators.minLength(4)]]
    })
  }

  public ativarDesativarProfessorForm(): boolean{
    this.alunoForm = false
    this.professorForm = true
    return this.professorForm
  }
  public ativarDesativarAlunoForm(): boolean{
    this.professorForm = false
    this.alunoForm =true 
    return this.alunoForm
  }
  public cadastrarAluno(): void{
    if(this.cadastrarAlunoForm.valid){
      const novoAluno = this.cadastrarAlunoForm.getRawValue() as Pessoa
      this.alunoCadastrado.emit(novoAluno)
      this.limparCadastroAluno()
    }
  }
  private limparCadastroAluno(): void{
    this.cadastrarAlunoForm.reset();
  }
  public cadastrarProfessor(): void{
    if(this.cadastrarProfessorForm){
      const novoProfessor = this.cadastrarProfessorForm.getRawValue() as Pessoa
      this.professorCadastrado.emit(novoProfessor)
      this.limparCadastroProfessor()
    }
  }
  private limparCadastroProfessor(): void{
    this.cadastrarProfessorForm.reset()
  }
}
