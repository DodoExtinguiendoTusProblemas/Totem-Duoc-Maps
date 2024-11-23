import { Component, AfterViewInit } from '@angular/core';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-escuelas-carrera',
  templateUrl: './escuelas-carrera.component.html',
  styleUrls: ['./escuelas-carrera.component.css'],
})
export class EscuelasCarreraComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    feather.replace();
  }

  escuelas = [
    {"escuela": "AdministracionNegocios", "iconoEscuela": "bar-chart", "nombreEscuela": "Administración y Negocios"},
    // {"escuela": "Comunicacion", "iconoEscuela": "message-square", "nombreEscuela": "Comunicación"},
    {"escuela": "Construccion", "iconoEscuela": "box", "nombreEscuela": "Construcción"},
    // {"escuela": "Disenno", "iconoEscuela": "zap", "nombreEscuela": "Diseño"},
    // {"escuela": "Gastronomia", "iconoEscuela": "award", "nombreEscuela": "Gastronomía"},
    {"escuela": "InformaticaTelecomunicaciones", "iconoEscuela": "code", "nombreEscuela": "Informática y Telecomunicaciones"},
    {"escuela": "IngenieriaRecursosNaturales", "iconoEscuela": "sun", "nombreEscuela": "Ingeniería y Recursos Naturales"},
    {"escuela": "Salud", "iconoEscuela": "activity", "nombreEscuela": "Salud"},
    {"escuela": "TurismoHoteleria", "iconoEscuela": "map", "nombreEscuela": "Turismo y Hoteleria"}
  ]

  filtroEscuela = [];
  
  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.filtroEscuela = this.escuelas;
  }

  filtrarEscuela(event: any) {
    const query = event.target.value.toLowerCase();
    this.filtroEscuela = this.escuelas.filter(escuela => escuela.nombreEscuela.toLowerCase().includes(query));
  }
}
