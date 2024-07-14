import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/pages/main/main.component';
import { PointComponent } from 'src/pages/point/point.component';
import { FoodPlaceComponent } from 'src/pages/food Place/foodPlace.component';
import { BibliotecaComponent } from 'src/pages/Biblioteca/Biblioteca.component';
import { SalaComponent } from 'src/pages/Sala/sala.component';


import { EnfermeriaComponent } from 'src/pages/Enfermeria/Enfermeria.component';
import { FinanzasComponent } from 'src/pages/Finanzas/Finanzas.component';
import { PuntoEstudiantilComponent } from 'src/pages/PuntoEstudiantil/PuntoEstudiantil.component';
import { Iframemenos1Component } from 'src/pages/iframe/iframemenos1/iframemenos1.component';
import { CalendarComponent } from 'src/pages/calendar/calendar.component';
import { PreguntasComponent } from 'src/pages/preguntas/preguntas.component';




const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },{
    path: 'calendario',
    component: CalendarComponent,
  },
  {
    path: 'piso-1',
    component: Iframemenos1Component,
  },
  {
    path: 'puntoInteres',
    component: PointComponent,
  },
  {
    path: 'localDeComida',
    component: FoodPlaceComponent,
  },
  {
    path: 'Biblioteca',
    component: BibliotecaComponent,

  },
  {
    path: 'Enfermeria',
    component: EnfermeriaComponent,
  },
  {
    path: 'Finanzas',
    component: FinanzasComponent,
  },
  {
    path: 'PuntoEstudiantil',
    component: PuntoEstudiantilComponent,
  },
  {
    path: 'Sala',
    component: SalaComponent,
  },
  {
    path: 'preguntas',
    component: PreguntasComponent
  }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
