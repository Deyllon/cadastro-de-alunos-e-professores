import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  @Input() professores: Pessoa[] = []

  ngOnInit(): void {
  }

}
