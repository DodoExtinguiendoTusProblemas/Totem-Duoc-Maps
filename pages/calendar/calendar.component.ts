import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';  // Importa el servicio de datos

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css'],
})
export class CalendarComponent {
  events: any[] = [];  // Lista de eventos
  descripcionParaMostrar: string = '';  // Pregunta para mostrar según el evento

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getEventos().subscribe((response) => {
      this.events = response;  // Almacena los eventos recuperados desde la base de datos
      // Después de cargar los datos, asignamos la pregunta para cada evento (puedes adaptarlo si es necesario)
      if (this.events.length > 0) {
        this.asignarPregunta(this.events[0]);  // Llamamos la asignación para el primer evento si existe
      }
    });
  }

  verDetalle(id: number) {
    // Busca el evento por ID
    const event = this.events.find(e => e.id === id);

    if (event) {
      // Asigna la pregunta según el título del evento
      this.asignarPregunta(event);  // Llama a la función de asignación de pregunta
      // Navega al detalle del evento pasando el ID
      this.router.navigate(['/evento', id]);
    }
  }

  asignarPregunta(event: any) {
    if (event) {
      if (event.titulo.toLowerCase().includes('pastoral')) {
        this.descripcionParaMostrar = "¿Te gustaría formar parte de esta comunidad de fe y esperanza?";
      } else if (event.titulo.toLowerCase().includes('becas')) {
        this.descripcionParaMostrar = "¿Estás listo para vivir el deporte y aprovechar esta oportunidad?";
      } else if (event.titulo.toLowerCase().includes('deporte')) {
        this.descripcionParaMostrar = "¿Quieres unirte a las becas deportivas y ser parte de esta experiencia?";
      } else if (event.titulo.toLowerCase().includes('concurso')) {
        this.descripcionParaMostrar = "¿Te animas a participar en este concurso?";
      } else {
        this.descripcionParaMostrar = "¿Estás listo para ser parte de este evento?";
      }
    }
  }
}
