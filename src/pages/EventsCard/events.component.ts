import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router'; 


declare var pannellum: any;
@Component({
    selector: 'events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class eventsComponent{
    eventId: number;
    titulo: string;
    descripcion: string;
    importTitle: string;
    ImportInf: string;
    List1: string;
    List2:string;
    imgEvent: string;

    private infoEventTemplate = {
        1:{
            titulo:'✍️✨ ¡Participa en el concurso de microficción "Short Stories"! 🌟🖋️',
            descripcion: ' El Programa Transversal de Inglés te invita a participar en el concurso de creación literaria “Short Stories”, donde podrás demostrar tus habilidades comunicativas y artísticas escribiendo una microhistoria, que contenga entre 200 y 300 palabras, de Fantasía o Ciencia Ficción o Horror o Suspenso. Este concurso te permitirá desplegar todo tu potencial en inglés, creando una narrativa breve y poderosa.',
            importTitle: '¿Cómo participar?',
            ImportInf:  'El concurso tiene dos categorías: Horror o Suspenso Fantasía o Ciencia Ficción Y se desarrollará en dos etapas:',
            List1:'1. Etapa local: Cada sede seleccionará un cuento ganador por categoría.',
            List2:'2. Etapa final: Los cuentos ganadores de cada sede competirán en una gran final nacional, donde se premiará un cuento por cada categoría.',
            imgEvent: 'assets/imgEvent/concurso_Ingles.webp'
        },
        2:{
            titulo:'⚽ ¡Vive el deporte! Becas deportivas 2° Semestre 2024 🏅',
            descripcion: '¡Postula a las Becas Deportivas de este 2° Semestre Si eres estudiante y deportista perteneciente a alguna federación deportiva del COCH',
            importTitle: 'Importante:',
            ImportInf:  'te invitamos a postular para obtener un 20% de descuento en el arancel. El plazo es hasta el 31 de octubre para postular a las Becas Deportivas.',
            imgEvent: 'assets/imgEvent/BecaDeportiva.webp'
        },
        3:{
            titulo:'¡Participa en el concurso para nombrar a nuestra nueva mascota! 🦅 ¡Te invitamos a ser parte!',
            descripcion: 'Nuestra Águila, que representa los valores de cercanía, liderazgo y futuro, necesita un nombre que lo identifique. Te invitamos a participar en el concurso.',
            importTitle: 'Participa:',
            ImportInf: 'completa tu propuesta antes del miércoles 30 de octubre.',
            imgEvent: 'assets/imgEvent/Mascota.webp'
        },
        4:{
            titulo:'¡Cerramos el mes de la Ciberseguridad en Duoc UC! 🛡️💻',
            descripcion: 'Durante octubre vivimos la Ciberseguridad en Duoc UC y queremos agradecer a toda la comunidad por su participación y compromiso. Es clave que sigamos unidos promoviendo una cultura de ciberseguridad sólida y consciente, por eso destacamos el papel fundamental que cada uno de nosotros cumple en la protección de nuestras herramientas y entornos digitales. La ciberseguridad es responsabilidad de todos. Cada acción que tomamos, desde proteger nuestras contraseñas hasta reconocer intentos de phishing, contribuye al fortalecimiento de nuestra seguridad colectiva.',
            ImportInf: '¡Sigamos aprendiendo, compartiendo y participando para enfrentar juntos los desafíos del mundo digital!',
            imgEvent: 'assets/imgEvent/MesCiberSeguridad.webp'
        },
    }
    
    constructor(private route: ActivatedRoute) {} 
    
    ngOnInit(): void { 
        this.eventId = +this.route.snapshot.paramMap.get('id');
        const eventData = this.infoEventTemplate[this.eventId];
        if (eventData) {
            this.titulo = eventData.titulo;
            this.descripcion = eventData.descripcion;
            this.importTitle = eventData.importTitle;
            this.ImportInf = eventData.ImportInf;
            this.List1 = eventData.List1;
            this.List2 = eventData.List2;
            this.imgEvent = eventData.imgEvent;
        }
        
    }

    
}