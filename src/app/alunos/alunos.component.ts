import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  @Input() alunos : Aluno[] = []

  ngOnInit(): void {
  }

}
