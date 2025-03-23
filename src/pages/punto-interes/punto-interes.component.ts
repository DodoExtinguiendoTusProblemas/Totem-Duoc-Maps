import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/data.service';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-punto-interes',
  templateUrl: './punto-interes.component.html',
  styleUrls: ['./punto-interes.component.css'],
})

export class PuntoInteresComponent implements  OnInit {

  // Esta es la lista completa de puntos de interés que se cargará del backend.
  puntosInteres: any[] = [];

  // Filtro que se usará para mostrar los elementos filtrados.
  filtroPuntoInteres: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPuntosInteres().subscribe(
      (response) => {
        console.log('Respuesta de la API:', response);  // Verifica los datos
        this.puntosInteres = response;
      },
      (error) => {
        console.error('Error al obtener los puntos de interés:', error);  // Muestra los errores
      }
    );
  }

  ngAfterViewInit() {
    feather.replace(); // Asegúrate de tener 'feather' configurado si lo necesitas.
  }


}