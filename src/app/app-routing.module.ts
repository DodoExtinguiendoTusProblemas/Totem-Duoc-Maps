import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/pages/main/main.component';
import { SalaComponent } from 'src/pages/Sala/sala.component';


import { CalendarComponent } from 'src/pages/calendar/calendar.component';
import { PreguntasComponent } from 'src/pages/preguntas/preguntas.component';

import { EscuelasCarreraComponent } from 'src/pages/escuelas-carrera/escuelas-carrera.component';
import { ConsejeroCarreraComponent } from 'src/pages/consejero-carrera/consejero-carrera.component';
import { PuntoInteresComponent } from 'src/pages/punto-interes/punto-interes.component';
import { MapaComponent } from 'src/pages/mapa/mapa.component';

//salas
import { roomsComponent } from 'src/pages/rooms/rooms.component';

//Eventos
import { eventsComponent } from 'src/pages/EventsCard/events.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },{
    path: 'calendario',
    component: CalendarComponent,
  },
  {
    path: 'Sala',
    component: SalaComponent,
  },
  { path: 'sala/:id', 
     component: roomsComponent, 
  },
  {
    path: 'evento/:id',
    component: eventsComponent, 
  }, 
  {
    path: 'preguntas',
    component: PreguntasComponent
  },
  {
    path: 'escuelas-carrera',
    component: EscuelasCarreraComponent
  },
  {
    path: 'escuelas-carrera/:escuela',
    component: ConsejeroCarreraComponent
  },
  {
    path: 'punto-interes',
    component: PuntoInteresComponent
  },
  {
    path: 'mapa/:piso',
    component: MapaComponent
  }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
