import { Component } from '@angular/core';
import { Paciente } from '../paciente';

import { PacienteService } from 'src/app/services/paciente.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  paciente = {} as Paciente;
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.getPacientes();
  }

  // Chama o serviço para obtém todos os pacientes
  getPacientes() {
    this.pacienteService.getPacientes().subscribe((pacientes: Paciente[]) => {
      this.pacientes = pacientes;
      //console.log(this.pacientes);
    });
  }

}
