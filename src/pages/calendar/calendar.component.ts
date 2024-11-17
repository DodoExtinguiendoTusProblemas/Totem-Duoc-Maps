import { Component} from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.css'],
})

export class CalendarComponent{
  events: { id: number, titulo: string; descripcion: string }[] = [
    {
      id: 1,
      titulo: '✍️✨ ¡Participa en el concurso de microficción "Short Stories"! 🌟🖋️',
      descripcion: '¿Te apasiona la escritura y quieres poner a prueba tu creatividad en inglés? ¡Esta es tu oportunidad!'
    },
  
    {
      id:2,
      titulo: '⚽ ¡Vive el deporte! Becas deportivas 2° Semestre 2024 🏅',
      descripcion: '¿Quieres vivir el deporte?'
    },

    {
      id:3,
      titulo: '¡Participa en el concurso para nombrar a nuestra nueva mascota! 🦅 ¡Te invitamos a ser parte!',
      descripcion: '¡Te invitamos a ser parte del emocionante proceso para darle nombre a nuestra nueva mascota! 🦅'
    },

    {
      id:4,
      titulo: '¡Cerramos el mes de la Ciberseguridad en Duoc UC! 🛡️💻',
      descripcion: 'Durante octubre vivimos la Ciberseguridad en Duoc UC y queremos agradecer a toda la comunidad por su participación y compromiso. '
    }
  ];

  constructor(private router: Router ) {}

  verDetalle(id: number) {
    this.router.navigate(['/evento', id]);
  } 
}