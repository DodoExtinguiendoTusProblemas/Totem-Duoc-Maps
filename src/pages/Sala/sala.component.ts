import { Component } from "@angular/core";
import { Router } from '@angular/router';
@Component({
    selector: 'sala',
    templateUrl: './sala.component.html',
    styleUrls: ['./sala.component.css']
})
export class SalaComponent{
  BuscarSala: string;
  sala_1: string[] = ['SB-01', 'SB-02', 'SB-03', 'SB-04', 'SB-05', 'SB-16B', 'SB-19', 'SB-20', 'SB-21', 'SB-22', 'SB-23', 'SB-24', 'SB-25', 'SB-26','SB-28','SB-99','SB-99B','Administracion','Comunicación y Extension','Centro de Fotocopiado','Laboratorio de informatica'];
  sala1: string[] = ['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 4', 'Sala 6', 'Sala 7', 'Sala 8', 'Sala 9', 'Sala 10', 'Sala 11', 'Sala 12', 'Sala 13', 'Sala 14'];
  sala2: string[] = ['Lc 11', 'Sala 16', 'Sala 17', 'Sala 18', 'Sala 19', 'Sala 20', 'Sala 21', 'Sala 22', 'Sala 23', 'Sala 24', 'Sala 25', 'Sala 26', 'Sala 27', 'Sala 28'];
  sala3: string[] = [''];
  sala4: string[] = ['sala 401','Sala 402','Sala 403','Sala 404','Sala 405','Sala 406','Sala 407','Sala 408','Sala 409','Sala 410','Sala 411','Sala 412','Sala 413','Sala 414'];
  sala5: string[] = ['Sala 501','Sala 502','Sala 503','Sala 504','Sala 505','Sala 506','Sala 507','Sala 508','Sala 509','Sala 510','Sala 511'];
  sala6: string[] = ['Sala 601','Sala 602','Sala 603','Sala 604','Sala 605','Sala 606','Sala 607','Sala 608','Sala 609','Sala 610','Sala 611'];
  filtroSala_1: string[] = [];
  filtroSala1: string[] = [];
  filtroSala2: string[] = [];
  filtroSala3: string[] = [];
  filtroSala4: string[] = [];
  filtroSala5: string[] = [];
  filtroSala6: string[] = [];


  errormsj: string;
  
  constructor( private router: Router) {
    this.initializeItems();
  }
  
  initializeItems() {
    this.filtroSala_1 = this.sala_1;
    this.filtroSala1 = this.sala1; 
    this.filtroSala2 = this.sala2;
    this.filtroSala3 = this.sala3;
    this.filtroSala4 = this.sala4;
    this.filtroSala5 = this.sala5;
    this.filtroSala6 = this.sala6;
  }
  
  filterSalas(event: any) {
    const query = event.target.value.toLowerCase();
    //filtro piso _1
    this.filtroSala_1 = this.sala_1.filter(sala => sala.toLowerCase().includes(query));
    //filtro piso 1
    this.filtroSala1 = this.sala1.filter(sala => sala.toLowerCase().includes(query));
    //filtro piso 2
    this.filtroSala2 = this.sala2.filter(sala => sala.toLowerCase().includes(query));
    //filtro piso 3
    this.filtroSala3 = this.sala3.filter(sala => sala.toLowerCase().includes(query));
    //filtro piso 4
    this.filtroSala4 = this.sala4.filter(sala => sala.toLowerCase().includes(query));
    //filtro piso 5
    this.filtroSala5 = this.sala5.filter(sala => sala.toLowerCase().includes(query));
    //filtro piso 5
    this.filtroSala6 = this.sala6.filter(sala => sala.toLowerCase().includes(query));
  
    if(
      this.filtroSala_1.length === 0 && this.filtroSala1.length === 0 && 
      this.filtroSala2.length === 0 && this.filtroSala3.length === 0 && 
      this.filtroSala4.length === 0 && this.filtroSala5.length === 0 &&
      this.filtroSala6.length === 0 
    ){
        this.errormsj = "Sala no encontrada, Por favor revise su Búsqueda";
      }
    else{
      this.errormsj = "";
    }
  }

  //navega a la ruta la cual se hace click en el botón de busccar sala
  verSala(sala: string) {
    this.router.navigate(['/sala', sala.toLowerCase()]);
  }  
    
}