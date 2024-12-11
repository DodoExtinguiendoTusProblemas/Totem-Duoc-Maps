import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {

  mapas = [
    { "piso": "Piso-2", "link": "" },
    { "piso": "Piso-1", "link": "" },
    { "piso": "Piso1", "link": "" },
    { "piso": "Piso2", "link": "" },
    { "piso": "Piso3", "link": "https://tour.metareal.com/apps/player?asset=84dcbd8a-b536-4908-ad63-1fa3573a0855" },
    { "piso": "Piso4", "link": "" },
    { "piso": "Piso5", "link": "https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060" },
    { "piso": "Piso6", "link": "https://tour.metareal.com/apps/player?asset=dd20ba1d-d81f-4bd8-8b4a-1264c091bd1f" }
  ];

  mapaFiltrado: any[] = [];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const piso = params['piso'];
      //console.log('Piso recibido desde la URL:', piso);
      this.filtrarMapa(piso);
    });
  }

  filtrarMapa(piso: string) {
    if (!piso) {
      this.mapaFiltrado = this.mapas.filter(mapa => mapa.link && mapa.link !== "");
    } else {
      const pisoMinusculas = piso.toLowerCase();
      this.mapaFiltrado = this.mapas.filter(mapa => mapa.piso.toLowerCase() === pisoMinusculas && mapa.link && mapa.link !== "");
    }
    //console.log('Mapas filtrados:', this.mapaFiltrado);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
