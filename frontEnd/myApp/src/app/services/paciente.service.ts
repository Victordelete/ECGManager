import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Paciente } from '../paciente/paciente';
import { PacienteRead } from '../paciente/pacienteRead';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url = 'http://localhost:3000'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os pacientes
  getPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.url + '/listPaciente')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  //Obtem paciente por id
  getPacienteById(pk_paciente: any): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.url + '/getPaciente/' + pk_paciente )
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  //Obtem leitura do paciente
  getPacienteRead(pk_paciente: any): Observable<PacienteRead> {
    return this.httpClient.get<PacienteRead>(this.url + '/getPacienteRead/' + pk_paciente )
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // salva um paciente
  savePaciente(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(this.url + '/savePaciente', JSON.stringify(paciente), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);

    return throwError(errorMessage);
  };
}
