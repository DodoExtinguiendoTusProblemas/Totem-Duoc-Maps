import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent {
  BuscarSala: string = '';
  salas: any[] = [];  // Arreglo para almacenar las salas obtenidas de la base de datos
  filtroSalas: any[] = []; // Salas filtradas

  errormsj: string = '';

  constructor(private router: Router, private dataService: DataService) {
    this.initializeItems();
  }

  // Método para obtener las salas de la base de datos
  ngOnInit(): void {
    this.dataService.getSala().subscribe((response) => {
      this.salas = response;  // Asigna las salas obtenidas a la variable 'salas'
      this.filtroSalas = [...this.salas];  // Inicializa las salas filtradas
    });
  }

  // Inicializa las salas (deberías obtenerlas desde el backend ahora)
  initializeItems() {
    this.filtroSalas = this.salas;  // Inicializa las salas con las obtenidas del servidor
  }

  // Método para filtrar las salas
  filterSalas(event: any) {
    const query = event.target.value.toLowerCase();

    this.filtroSalas = this.salas.filter(sala => sala.titulo.toLowerCase().includes(query)); // Filtra por título

    // Verifica si no hay resultados y muestra un mensaje de error
    if (this.filtroSalas.length === 0) {
      this.errormsj = "Sala no encontrada, Por favor revise su búsqueda";
    } else {
      this.errormsj = "";
    }
  }

  // Navegar a la sala seleccionada
  verSala(sala: string) {
    this.router.navigate(['/sala', sala.toLowerCase()]);
  }
}
