import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-consejero-carrera',
  templateUrl: './consejero-carrera.component.html',
  styleUrls: ['./consejero-carrera.component.css'],
})

export class ConsejeroCarreraComponent implements OnInit {
  consejeros = [
    {"escuela": "Construccion", "carrera":"Dibujo Modelamiento Arquitectonico y Estructural", "nombreConsejero": "Ignacio Muñoz", "correoConsejero" : "ignac.munozf@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Dibujo Modelamiento Arquitectonico y Estructural", "nombreConsejero": "Milenka Morales", "correoConsejero" : "mi.moralesl@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Dibujo Modelamiento Arquitectonico y Estructural", "nombreConsejero": "Ricardo Castillo", "correoConsejero" : "ri.castillos@duocuc.cl"},
    {"escuela": "TurismoHoteleria",  "carrera":"Ecoturismo", "nombreConsejero": "Melany Pinilla", "correoConsejero" : "me.pinilla@duocuc.cl"},
    {"escuela": "TurismoHoteleria",  "carrera":"Ecoturismo", "nombreConsejero": "Rodolfo Rivas", "correoConsejero" : "rodo.rivas@duocuc.cl"},
    {"escuela": "TurismoHoteleria",  "carrera":"Ecoturismo", "nombreConsejero": "Maria López", "correoConsejero" : "mari.lopezj@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Ingeniería en Prevención de Riesgos", "nombreConsejero": "Macarena Aguayo", "correoConsejero" : "maca.aguayo@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Ingeniería en Prevención de Riesgos", "nombreConsejero": "Cristobal Parraguéz", "correoConsejero" : "c.parraguezh@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Ingeniería en Prevención de Riesgos", "nombreConsejero": "Noemi Fica", "correoConsejero" : "no.fica@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Ingeniería en Construcción", "nombreConsejero": "Hernán Soto", "correoConsejero" : "hern.soto@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Ingeniería en Construcción", "nombreConsejero": "Eduardo Castro", "correoConsejero" : "edu.castrov@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Ingeniería en Construcción", "nombreConsejero": "Diego Ubilla", "correoConsejero" : "di.ubilla@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Técnico en Construcción", "nombreConsejero": "Jeickson Fuentes", "correoConsejero" : "jei.fuentes@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Técnico en Construcción", "nombreConsejero": "Isidora Díaz", "correoConsejero" : "isi.diazr@duocuc.cl"},
    {"escuela": "Construccion",  "carrera":"Técnico en Construcción", "nombreConsejero": "Francisca Riquelme", "correoConsejero" : "fr.riquelmes@duocuc.cl"},
    {"escuela": "TurismoHoteleria",  "carrera":"Turismo y Hotelería", "nombreConsejero": "Ross Jara", "correoConsejero" : "an.jaraq@duocuc.cl"},
    {"escuela": "TurismoHoteleria",  "carrera":"Turismo y Hotelería", "nombreConsejero": "Antonia Olguín", "correoConsejero" : "an.olguinm@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Ingeniería en Medio Ambiente", "nombreConsejero": "Javiera Ávalos", "correoConsejero" : "ja.avalos@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Ingeniería en Medio Ambiente", "nombreConsejero": "Luciano Astorga", "correoConsejero" : "luci.astorga@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Ingeniería en Medio Ambiente", "nombreConsejero": "Martina León", "correoConsejero" : "mar.leons@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Ingeniería Agrícola", "nombreConsejero": "Andrea Gajardo", "correoConsejero" : "and.gajardog@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Ingeniería Agrícola", "nombreConsejero": "David Díaz", "correoConsejero" : "daa.diazq@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Ingeniería Agrícola", "nombreConsejero": "Ra'a Manutomatoma", "correoConsejero" : "ra.manutomatoma@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico Agrícola", "nombreConsejero": "Javiera Falcón", "correoConsejero" : "ja.falcon@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico Agrícola", "nombreConsejero": "Elías Altamirano", "correoConsejero" : "eli.altamirano@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico Agrícola", "nombreConsejero": "Carol Medina", "correoConsejero" : "ca.medinas@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico Veterinario Pecuario", "nombreConsejero": "Fabián Zenteno", "correoConsejero" : "fab.zenteno@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico Veterinario Pecuario", "nombreConsejero": "Moira Olave", "correoConsejero" : "mo.olave@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Informática Biomédica", "nombreConsejero": "Luciano Atenas", "correoConsejero" : "lu.atenas@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Informática Biomédica", "nombreConsejero": "Mariana Palleres", "correoConsejero" : "m.palleres@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Informática Biomédica", "nombreConsejero": "Nicolás Quevedo", "correoConsejero" : "ni.quevedov@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Preparador Físico", "nombreConsejero": "Marcelo Espinoza", "correoConsejero" : "mar.espinozam@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Preparador Físico", "nombreConsejero": "Benjamín Martínez", "correoConsejero" : "benja.martinezm@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Preparador Físico", "nombreConsejero": "Constanza Soto", "correoConsejero" : "co.soton@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Enfermeria", "nombreConsejero": "Constanza Pedrotti", "correoConsejero" : "co.pedrotti@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Enfermeria", "nombreConsejero": "Nicolás Morales", "correoConsejero" : "ni.moralesr@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Enfermeria", "nombreConsejero": "Elizabeth Gutierrez", "correoConsejero" : "eli.gutierrez@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Laboratorio Clínico y Banco de Sangre", "nombreConsejero": "Catalina Pizarro", "correoConsejero" : "cat.pizarrot@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Laboratorio Clínico y Banco de Sangre", "nombreConsejero": "Maria Gamboa", "correoConsejero" : "ma.gamboap@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Laboratorio Clínico y Banco de Sangre", "nombreConsejero": "Alondra Marabolí", "correoConsejero" : "al.maraboli@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Odontología", "nombreConsejero": "Sarai Huerta", "correoConsejero" : "sa.huerta@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Odontología", "nombreConsejero": "Nicolás Cabello", "correoConsejero" : "nico.cabello@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Odontología", "nombreConsejero": "Loreto Bravo", "correoConsejero" : "lo.bravoo@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Química y Farmacia", "nombreConsejero": "Antonia Castillo", "correoConsejero" : "an.castilloq@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Química y Farmacia", "nombreConsejero": "Blanca Vidal", "correoConsejero" : "bl.vidal@duocuc.cl"},
    {"escuela": "Salud",  "carrera":"Técnico en Química y Farmacia", "nombreConsejero": "Maria Meneses", "correoConsejero" : "mar.menesesm@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Ingeniería en Informática", "nombreConsejero": "Paulo Rivas", "correoConsejero" : "pau.rivas@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Ingeniería en Informática", "nombreConsejero": "Diego Parra", "correoConsejero" : "di.parra@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Ingeniería en Informática", "nombreConsejero": "Millaray Rodríguez", "correoConsejero" : "mi.rodriguezz@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Ingeniería en Conectividad y Redes", "nombreConsejero": "Keyla Antinao", "correoConsejero" : "ke.antinao@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Ingeniería en Conectividad y Redes", "nombreConsejero": "Alvaro John", "correoConsejero" : "al.jhon@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Ingeniería en Conectividad y Redes", "nombreConsejero": "Natalia Medel", "correoConsejero" : "nat.medel@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Analista Programador Computacional", "nombreConsejero": "Fernanda Soto", "correoConsejero" : "fp.soto@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Analista Programador Computacional", "nombreConsejero": "Joaquín Torres", "correoConsejero" : "joa.torresn@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Analista Programador Computacional", "nombreConsejero": "Danae Curín", "correoConsejero" : "dana.curin@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Administración en Redes y Telecomunicaciones", "nombreConsejero": "Jennifer Aguilera", "correoConsejero" : "je.aguileraa@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Administración en Redes y Telecomunicaciones", "nombreConsejero": "Glenn Espinoza", "correoConsejero" : "gle.espinoza@duocuc.cl"},
    {"escuela": "InformaticaTelecomunicaciones",  "carrera":"Administración en Redes y Telecomunicaciones", "nombreConsejero": "Maximiliano Vega", "correoConsejero" : ""},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico en Electricidad y Automatización Industrial", "nombreConsejero": "David Urbina", "correoConsejero" : "dav.urbina@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico en Electricidad y Automatización Industrial", "nombreConsejero": "Matías Cerda", "correoConsejero" : "ma.cerdas@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico en Electricidad y Automatización Industrial", "nombreConsejero": "Emardo Hurtado", "correoConsejero" : "em.hurtado@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Ingeniería en Electricidad y Automatización Industrial", "nombreConsejero": "Carlos Zamudio", "correoConsejero" : "car.zamudio@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Ingeniería en Electricidad y Automatización Industrial", "nombreConsejero": "Juan Monares", "correoConsejero" : "ju.monares@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Ingeniería en Electricidad y Automatización Industrial", "nombreConsejero": "Rolando Gárate", "correoConsejero" : "rol.garate@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico en Maquinaria y Vehículos Pesados", "nombreConsejero": "Ariel Pardo", "correoConsejero" : "ari.pardo@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico en Maquinaria y Vehículos Pesados", "nombreConsejero": "Victor Galaz", "correoConsejero" : "vi.galaz@duocuc.cl"},
    {"escuela": "IngenieriaRecursosNaturales",  "carrera":"Técnico en Maquinaria y Vehículos Pesados", "nombreConsejero": "Branco Vera", "correoConsejero" : "br.verac@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Mención Finanzas", "nombreConsejero": "Isadora Zamorano", "correoConsejero" : "isa.zamorano@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Mención Finanzas", "nombreConsejero": "Angela Urra", "correoConsejero" : "ang.urra@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Mención Finanzas", "nombreConsejero": "Karina Pérez", "correoConsejero" : "kari.perezg@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Gestión Logística", "nombreConsejero": "Ian Villagrán", "correoConsejero" : "i.villagran@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Gestión Logística", "nombreConsejero": "Francisca González", "correoConsejero" : "franci.gonzalezr@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Gestión Logística", "nombreConsejero": "Britany Salinas", "correoConsejero" : "brit.salinas@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Marketing Digital", "nombreConsejero": "Cristian Medina", "correoConsejero" : "cr.medina@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Marketing Digital", "nombreConsejero": "Dennis Paredes", "correoConsejero" : "den.paredes@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Marketing Digital", "nombreConsejero": "Benjamín Durán", "correoConsejero" : "be.durant@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Gestión de Personas", "nombreConsejero": "Maria Paz", "correoConsejero" : "ma.espinozar@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Gestión de Personas", "nombreConsejero": "Darío González", "correoConsejero" : "dari.gonzalezp@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Ingeniería Gestión de Personas", "nombreConsejero": "Maricel Valenzuela", "correoConsejero" : "mar.valenzuelao@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Auditoría", "nombreConsejero": "Nicole Pinilla", "correoConsejero" : "n.pinilla@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Auditoría", "nombreConsejero": "Katherine Roca", "correoConsejero" : "ka.roca@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Auditoría", "nombreConsejero": "Martina Pinilla", "correoConsejero" : "mart.pinilla@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Técnico en Administración", "nombreConsejero": "Tamara Larach", "correoConsejero" : "ta.larach@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Técnico en Administración", "nombreConsejero": "Grisela Santis", "correoConsejero" : "gr.santis@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Contabilidad General Mención Legislación Tributaria", "nombreConsejero": "Priscila Reyes", "correoConsejero" : "pris.reyes@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Contabilidad General Mención Legislación Tributaria", "nombreConsejero": "Mario Díaz", "correoConsejero" : "mario.diaz@duocuc.cl"},
    {"escuela": "AdministracionNegocios",  "carrera":"Contabilidad General Mención Legislación Tributaria", "nombreConsejero": "Noemí Cumbicus", "correoConsejero" : "n.cumbicus@duocuc.cl"}
  ]

  consejerosFiltrados: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    feather.replace();
    this.route.params.subscribe(params => {
      const escuela = params['escuela'];
      this.filtrarConsejeros(escuela);
    });
  }

  filtrarConsejeros(escuela: string) {
    if (!escuela) {
      this.consejerosFiltrados = this.consejeros.slice();
    } else {
      this.consejerosFiltrados = this.consejeros.filter(consejero => 
        consejero.escuela.toLowerCase() === escuela.toLowerCase()
      );
    }

    this.consejerosFiltrados.sort((a, b) => {
      if (a.nombreConsejero < b.nombreConsejero) return -1;
      if (a.nombreConsejero > b.nombreConsejero) return 1;
      return 0;
    });
  }

  filtrarPorNombre(event: any) {
    const query = event.target.value.toLowerCase();
    
    if (!query) {
      this.consejerosFiltrados = this.consejeros.slice();
    } else {
      this.consejerosFiltrados = this.consejeros.filter(consejero =>{
        const nombreConsejero = consejero.nombreConsejero.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const carrera = consejero.carrera.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return nombreConsejero.includes(query) || carrera.includes(query);
      }
      );
    }
  }

}
