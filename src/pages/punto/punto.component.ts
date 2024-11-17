import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-punto',
  templateUrl: './punto.component.html',
  styleUrls: ['./punto.component.css'],
})
export class PuntoComponent implements OnInit {

  puntos = [
    {"puntoInteres": "PuntoEstudiantil", "imagenPunto": "/assets/img/PuntoEstudiantil.webp", "nombrePunto": "Punto Estudiantil", "horarioPunto": "Lunes a viernes de 08:30 a 18:00 horas y sábados de 08:00 a 14:00 horas", "descripcionPunto": "Se encuentra ubicado en el primer piso, frente al patio central y a un lado del meson de atención"},
    {"puntoInteres": "Biblioteca", "imagenPunto": "/assets/img/Biblioteca.webp", "nombrePunto": "Biblioteca", "horarioPunto": "Lunes a viernes de 8:30 a 22:30 hrs y sábados de 09:00 a 15:30 hrs", "descripcionPunto": "Se encuentra ubicado en el primer piso a un costado del casino y al costado del patio central"},
    {"puntoInteres": "CITT", "imagenPunto": "/assets/img/CITT.webp", "nombrePunto": "CITT", "horarioPunto": "", "descripcionPunto": ""},
    {"puntoInteres": "Finanzas", "imagenPunto": "/assets/img/finanzas.webp", "nombrePunto": "Finanzas", "horarioPunto": "", "descripcionPunto": "Apoyo e informar sobre los distintos beneficios estudiantiles internos y externos los cuales permiten financiar tu carrera, se encuentra ubicado en el tercer piso, una forma de contacto es el correo el cual es: financiamiento_sanbenardo@duoc.cl"},
    {"puntoInteres": "Enfermeria", "imagenPunto": "/assets/img/Enfermeria.webp", "nombrePunto": "Enfermeria", "horarioPunto": "Lunes a viernes de 08:30 a 23:00 y sábados de 09:00 a 15:30", "descripcionPunto": "Se encuentra ubicado en el piso menos uno al frente de la capilla"},
    {"puntoInteres": "Casino", "imagenPunto": "", "nombrePunto": "Casino", "horarioPunto": "Lunes a viernes de 08:30 a 22:00", "descripcionPunto": ""},
    {"puntoInteres": "CentroAcademico", "imagenPunto": "", "nombrePunto": "Centro Académico", "horarioPunto": "Lunes a jueves de 09:00 a 21:00, viernes de 09:00 a 20:00 y sábados de 09:00 a 13:00", "descripcionPunto": ""},
  ]

  puntosFiltrados: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const punto = params['puntoInteres'];
      this.filtrarPunto(punto);
    });
  }

  filtrarPunto(puntoInteres: string) {
    if (!puntoInteres) {
      this.puntosFiltrados = this.puntos.slice();
    } else {
      this.puntosFiltrados = this.puntos.filter(punto => 
        punto.puntoInteres.toLowerCase() === puntoInteres.toLowerCase()
      );
    }
  }

}
