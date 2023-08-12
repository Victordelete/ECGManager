import { Component, OnInit } from '@angular/core';

import { Paciente } from '../paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { NgForm } from '@angular/forms';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private pacienteService: PacienteService) { }

  paciente = {} as Paciente;

  savePacienteFunc(form: NgForm) {
    if (this.paciente.nome == '') {
      alert('Nome é obrigatório.');
    }
    else {
      this.pacienteService.savePaciente(this.paciente).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    form.resetForm();
  }
}
