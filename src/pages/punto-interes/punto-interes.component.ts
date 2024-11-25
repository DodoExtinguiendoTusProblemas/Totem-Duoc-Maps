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
    {"puntoInteres": "Casino", "imagenPuntoInteres": "coffee", "nombrePuntoInteres": "Casino", "imagenPunto": "", "horarioPunto": "Lunes a viernes de 08:30 a 22:00", "descripcionPunto": "Se encuentra ubicado en el primer piso en el patio central"},
    {"puntoInteres": "Biblioteca", "imagenPuntoInteres": "book-open", "nombrePuntoInteres": "Biblioteca", "imagenPunto": "/assets/img/Biblioteca.webp", "horarioPunto": "Lunes a viernes de 8:30 a 22:30 hrs y sábados de 09:00 a 15:30 hrs", "descripcionPunto": "Se encuentra ubicado en el primer piso a un costado del casino y al costado del patio central"},
    {"puntoInteres": "Enfermeria", "imagenPuntoInteres": "heart", "nombrePuntoInteres": "Enfermeria", "imagenPunto": "/assets/img/Enfermeria.webp", "horarioPunto": "Lunes a viernes de 08:30 a 23:00 y sábados de 09:00 a 15:30", "descripcionPunto": "Se encuentra ubicado en el piso menos uno al frente de la capilla"},
    {"puntoInteres": "PuntoEstudiantil", "imagenPuntoInteres": "users", "nombrePuntoInteres": "Punto Estudiantil", "imagenPunto": "/assets/img/PuntoEstudiantil.webp", "horarioPunto": "Lunes a viernes de 08:30 a 18:00 horas y sábados de 08:00 a 14:00 horas", "descripcionPunto": "Se encuentra ubicado en el primer piso, frente al patio central y a un lado del meson de atención"},
    {"puntoInteres": "CentroAcademico", "imagenPuntoInteres": "target", "nombrePuntoInteres": "Centro Académico", "imagenPunto": "", "horarioPunto": "Lunes a jueves de 09:00 a 21:00, viernes de 09:00 a 20:00 y sábados de 09:00 a 13:00", "descripcionPunto": "Se encuentra ubicado en el tercer piso"},
    {"puntoInteres": "CITT", "imagenPuntoInteres": "terminal", "nombrePuntoInteres": "CITT", "imagenPunto": "/assets/img/CITT.webp", "horarioPunto": "", "descripcionPunto": "Se encuentra ubicado en el primer piso en frente de los ascensores"},
    {"puntoInteres": "Gimnasio", "imagenPuntoInteres": "anchor", "nombrePuntoInteres": "Gimnasio", "imagenPunto": "", "horarioPunto": "", "descripcionPunto": "Se encuentra ubicado en el tercer piso en la parte izquierda de la sede"},
    {"puntoInteres": "Cancha", "imagenPuntoInteres": "dribbble", "nombrePuntoInteres": "Cancha", "imagenPunto": "", "horarioPunto": "", "descripcionPunto": "Se encuentra ubicado en el segundo piso"},
    {"puntoInteres": "Finanzas", "imagenPuntoInteres": "dollar-sign", "nombrePuntoInteres": "Finanzas", "imagenPunto": "/assets/img/finanzas.webp", "horarioPunto": "", "descripcionPunto": "Se encuentra ubicado en el tercer piso, una forma de contacto es el correo el cual es: financiamiento_sanbenardo@duoc.cl"}
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
