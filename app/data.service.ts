import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Esto asegura que el servicio esté disponible en toda la aplicación
})
export class DataService {
  private apiUrlPuntoInteres  = `https://9a7a-2800-150-117-5b-a5bb-5583-2074-9ac9.ngrok-free.app/punto_interes`;
  private apiUrlConsejeros  = `https://9a7a-2800-150-117-5b-a5bb-5583-2074-9ac9.ngrok-free.app/consejeros`;
  private apiUrlEventos  = `https://9a7a-2800-150-117-5b-a5bb-5583-2074-9ac9.ngrok-free.app/eventos`;
  private apiUrlEventoById  = `https://9a7a-2800-150-117-5b-a5bb-5583-2074-9ac9.ngrok-free.app/eventos`;
  private apiUrlPreguntas  = `https://9a7a-2800-150-117-5b-a5bb-5583-2074-9ac9.ngrok-free.app/preguntas_frecuentes`;
  private apiUrlSalas = `https://9a7a-2800-150-117-5b-a5bb-5583-2074-9ac9.ngrok-free.app/sala`;

  constructor(private http: HttpClient) { }

  // Método para obtener los puntos de interés
  getPuntosInteres(): Observable<any> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'false'
    });
    return this.http.get<any>(this.apiUrlPuntoInteres, {headers});
  }

  getConsejeros(): Observable<any> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });
    return this.http.get<any>(this.apiUrlConsejeros);  // Realiza la solicitud GET a la API
  }

  getEventos(): Observable<any> {
    return this.http.get<any>(this.apiUrlEventos);  // Realiza la solicitud GET a la API
  }

  getEventById(eventId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlEventoById}/${eventId}`);  // Petición GET para un evento específico
  }

  getPreguntas(): Observable<any> {
    return this.http.get<any>(this.apiUrlPreguntas);  // Realiza la solicitud GET a la API
  }

  getSala(): Observable<any> {
    return this.http.get<any>(this.apiUrlSalas);  // Realiza la solicitud GET a la API
  }
}
