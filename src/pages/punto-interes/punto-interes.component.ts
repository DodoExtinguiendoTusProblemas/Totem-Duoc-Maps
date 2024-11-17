import { Component, AfterViewInit } from '@angular/core';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-punto-interes',
  templateUrl: './punto-interes.component.html',
  styleUrls: ['./punto-interes.component.css'],
})
export class PuntoInteresComponent implements AfterViewInit {

  ngAfterViewInit() {
    feather.replace();
  }

  puntosInteres = [
    {"puntoInteres": "Casino", "imagenPuntoInteres": "coffee", "nombrePuntoInteres": "Casino"},
    {"puntoInteres": "Biblioteca", "imagenPuntoInteres": "book-open", "nombrePuntoInteres": "Biblioteca"},
    {"puntoInteres": "Enfermeria", "imagenPuntoInteres": "heart", "nombrePuntoInteres": "Enfermeria"},
    {"puntoInteres": "PuntoEstudiantil", "imagenPuntoInteres": "users", "nombrePuntoInteres": "Punto Estudiantil"},
    {"puntoInteres": "CentroAcademico", "imagenPuntoInteres": "target", "nombrePuntoInteres": "Centro Académico"},
    {"puntoInteres": "CITT", "imagenPuntoInteres": "terminal", "nombrePuntoInteres": "CITT"},
    {"puntoInteres": "Gimnasio", "imagenPuntoInteres": "anchor", "nombrePuntoInteres": "Gimnasio"},
    {"puntoInteres": "Cancha", "imagenPuntoInteres": "dribbble", "nombrePuntoInteres": "Cancha"},
    {"puntoInteres": "Finanzas", "imagenPuntoInteres": "dollar-sign", "nombrePuntoInteres": "Finanzas"}
  ]

  filtroPuntoInteres = [];
  
  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.filtroPuntoInteres = this.puntosInteres;
  }

  filtrarPuntoInteres(event: any) {
    const query = event.target.value.toLowerCase();
    this.filtroPuntoInteres = this.puntosInteres.filter(puntoInteres => puntoInteres.nombrePuntoInteres.toLowerCase().includes(query));
  }

}
