import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';  // Importa el servicio

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class  eventsComponent  implements OnInit {
  event: any = {};  // Usamos un objeto para almacenar todos los datos del evento

  constructor(
        private route: ActivatedRoute, 
        private dataService: DataService
  ) {}

  ngOnInit(): void {
    // Obtener el parámetro 'id' de la URL
    const eventId = +this.route.snapshot.paramMap.get('id');  // Convierte a número

    // Llamar al servicio para obtener los datos del evento desde la base de datos
    if (eventId) {
      this.dataService.getEventById(eventId).subscribe((eventData) => {
        if (eventData) {
          this.event = eventData;  // Asignamos el evento obtenido desde la API
        }
      });
    }
  }
}
