import { Component } from "@angular/core";
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent{
  // Esta es la lista completa de puntos de interés que se cargará del backend.
  preguntas: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Llama al servicio para obtener los datos desde la API (backend).
    this.dataService.getPreguntas().subscribe((response) => {
      this.preguntas = response.map(item => ({
        ...item,
        expanded: false  // Inicializa expanded en false
      }));
    });
  }

  toggleInfo(item) {
    item.expanded = !item.expanded;
  }
}