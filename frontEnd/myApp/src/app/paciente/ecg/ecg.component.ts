import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../paciente';
import { PacienteService } from 'src/app/services/paciente.service';

import { PacienteRead } from '../pacienteRead';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ecg',
  templateUrl: './ecg.component.html',
  styleUrls: ['./ecg.component.css']
})
export class EcgComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
              private pacienteService: PacienteService) { }

  chart: any = [];
  temp = 1;

  paciente = {} as Paciente;
  pacienteRead = {} as PacienteRead;

  id: any;
  private sub: any;

  pacienteReadData: Array<any> = [0,0,0,0,0];
  pacienteReadLabel: Array<any> = [0,0,0,0,0];

  ngOnInit() {

    this.createChart();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.pacienteService.getPacienteById(this.id).subscribe((paciente: Paciente) => {
        this.paciente = paciente;
        //console.log(this.paciente);
      });

      this.pacienteService.getPacienteRead(this.id).subscribe((pacienteRead: PacienteRead) => {
        this.pacienteRead = pacienteRead;
        //console.log(this.pacienteRead);
      });
    });

    setInterval(() => {

      this.pacienteService.getPacienteRead(this.id).subscribe((pacienteRead: PacienteRead) => {
        this.pacienteRead = pacienteRead;
        });

      this.pacienteReadData.push(this.pacienteRead.read1);
      this.pacienteReadData.push(this.pacienteRead.read2);
      this.pacienteReadData.push(this.pacienteRead.read3);
      this.pacienteReadData.push(this.pacienteRead.read4);
      this.pacienteReadData.push(this.pacienteRead.read5);

      this.pacienteReadLabel.push(this.temp);
      this.pacienteReadLabel.push(this.temp+1);
      this.pacienteReadLabel.push(this.temp+2);
      this.pacienteReadLabel.push(this.temp+3);
      this.pacienteReadLabel.push(this.temp+4);

      this.temp = this.temp+5;
      if(this.temp>=100){
        this.pacienteReadData.splice(0, 5);
        this.pacienteReadLabel.splice(0, 5);
      }
      this.chart.update();
    }, 2000);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  createChart() {

    this.chart = new Chart("canvas", {
      type: 'line',
      data: {
        labels: this.pacienteReadLabel,
        datasets: [
          {
            label: 'Ecg Paciente',
            data: this.pacienteReadData,
            borderWidth: 2,
          },
        ],
      },
      options: {
        aspectRatio: 3.0,
        responsive: true
      }

    });
  }
}
