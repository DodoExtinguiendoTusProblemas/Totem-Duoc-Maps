import { Component } from "@angular/core";
@Component({
    selector: 'sala',
    templateUrl: './sala.component.html',
    styleUrls: ['./sala.component.css']
})
export class SalaComponent{
    BuscarSala: string = '';
    sala1: string[] = ['Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 4', 'Sala 6', 'Sala 7', 'Sala 8', 'Sala 9', 'Sala 10', 'Sala 11', 'Sala 12', 'Sala 13', 'Sala 14'];
    sala2: string[] = ['Lc 11', 'Sala 16', 'Sala 17', 'Sala 18', 'Sala 19', 'Sala 20', 'Sala 21', 'Sala 22', 'Sala 23', 'Sala 24', 'Sala 25', 'Sala 26', 'Sala 27', 'Sala 28'];
    filtroSala1: string[] = [];
    filtroSala2: string[] = [];
  
    constructor() {
      this.initializeItems();
    }
  
    initializeItems() {
      this.filtroSala1 = this.sala1; 
      this.filtroSala2 = this.sala2;
    }
  
    filterSalas(event: any) {
      const query = event.target.value.toLowerCase();
      this.filtroSala1 = this.sala1.filter(sala => sala.toLowerCase().includes(query));
      this.filtroSala1 = this.sala2.filter(sala => sala.toLowerCase().includes(query));
    }
}