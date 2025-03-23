import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service'; // Importa el servicio para obtener los datos
import * as feather from 'feather-icons';

@Component({
  selector: 'app-consejero-carrera',
  templateUrl: './consejero-carrera.component.html',
  styleUrls: ['./consejero-carrera.component.css'],
})
export class ConsejeroCarreraComponent implements OnInit, AfterViewInit {

  // Esta es la lista completa de consejeros que se cargará desde el backend.
  consejeros: any[] = [];

  // Filtro que se usará para mostrar los consejeros filtrados.
  consejerosFiltrados: any[] = [];

  constructor(private dataService: DataService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Llama al servicio para obtener los datos desde la API (backend).
    this.dataService.getConsejeros().subscribe((response) => {
      this.consejeros = response;  // Asigna la respuesta (consejeros) a la variable 'consejeros'
      this.initializeItems();  // Inicializa los consejeros filtrados
    });

    feather.replace();
    this.route.params.subscribe(params => {
      const escuela = params['nombre_completo'];
      this.filtrarPorNombre(escuela);
    });
  }

  ngAfterViewInit() {
    feather.replace(); // Asegúrate de tener 'feather' configurado si lo necesitas.
  }

  // Inicializa los elementos con la lista completa de consejeros.
  initializeItems() {
    this.consejerosFiltrados = [...this.consejeros]; // Copia la lista completa a consejerosFiltrados
  }

  // Filtra los consejeros por nombre o carrera
  filtrarPorNombre(event: any) {
    const query = event.target.value.toLowerCase();  // Convierte la búsqueda a minúsculas
  
    if (!query) {
      this.consejerosFiltrados = this.consejeros.slice();  // Si no hay búsqueda, muestra todos los consejeros
    } else {
      this.consejerosFiltrados = this.consejeros.filter(consejero => {
        const nombreConsejero = consejero.nombre_completo ? consejero.nombre_completo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
        const carrera = consejero.carrera?consejero.carrera.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
        return nombreConsejero.includes(query) || carrera.includes(query);  // Filtra por nombre o carrera
      });
    }
  }
}
