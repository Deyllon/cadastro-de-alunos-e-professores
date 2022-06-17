import { Component, Input, OnInit } from '@angular/core';
import {  Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  @Input() alunos : Pessoa[] = []

  ngOnInit(): void {
  }

}
