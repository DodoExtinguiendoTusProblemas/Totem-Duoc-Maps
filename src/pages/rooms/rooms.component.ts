import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router'; 

declare var pannellum: any;
@Component({
    selector: 'rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css']
})
export class roomsComponent{
    salaId: string;
    titulo: string; 
    tituloCard: string; 
    descripcion: string; 
    imageUrl: string;
    mapUrl: string;

    private InfoSala = {
        //pISO -1
        'sb-01': {
            titulo:'Sala SB-01',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el sector, a un costado de los casilleros. Junto al número de la sala, se encuentra un letrero verde de emergencias, el cual se puede apreciar claramente. De igual manera, se encuentra el área de ejercicio, donde se puede identificar por las áreas verdes y la mesa de ping-pong.',
            imageUrl: 'assets/img360/Piso -1/01.webp'
        },
        'sb-02': {
            titulo:'Sala SB-02',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado junto a una puerta de color rojo, donde se puede ver un cartel de "ESCUELA DE INGENIERÍA Y RECURSOS NATURALES" indicando el área a la que pertenece. También se pueden observar dos mesas de ping-pong como punto de referencia adicional. Otro detalle distintivo es que la puerta está decorada con calcomanías de figuras de animales.',
            imageUrl: 'assets/img360/Piso -1/02.webp'
        },
        'sb-03': {
            titulo:'Sala SB-03',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado junto a un letrero en la puerta que indica "Laboratorio". A la izquierda, hay dos mesas de ping-pong acompañadas de varias sillas. En el lugar se aprecian ventanales amplios que permiten ver el exterior.',
            imageUrl: 'assets/img360/Piso -1/03.webp'
        },
        'sb-04': {
            titulo:'Sala SB-04',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra justo enfrente de los ventanales que ofrecen una vista del patio central. Es fácilmente reconocible ya que está a la derecha de una puerta de color rojo.',
            imageUrl: 'assets/img360/Piso -1/04.webp'
        },
        'sb-05': {
            titulo:'Sala SB-05',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'se encuentra al lado de una puerta de color rojo, fácilmente reconocible. Está ubicada frente a los ventanales que ofrecen una vista del patio central. Justo antes de llegar a la sala, verás los ascensores a tu izquierda, lo que puede servir como un punto de referencia adicional.',
            imageUrl: 'assets/img360/Piso -1/05.webp'
        },
        'sb-16b': {
            titulo:'Sala SB-16B',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra a un costado de unos contenedores de reciclaje, junto a los cuales hay un mapa del piso en la pared. En el ventanal se aprecia claramente el letrero "ESCUELA DE SALUD", lo que puede servir como un punto de referencia adicional. Al lado de la sala, verás una serie de computadores.',
            imageUrl: 'assets/img360/Piso -1/016B.webp'
        },
        'sb-19': {
            titulo:'Sala SB-19',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el pasillo, junto a una puerta de color rojo. A un costado de la puerta, en la pared, se observa un letrero de seguridad de color verde.',
            imageUrl: 'assets/img360/Piso -1/019.webp'
        },
        'sb-20': {
            titulo:'Sala SB-20',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el pasillo, junto a una puerta de color amarillo. En la ventana se puede ver un letrero con el nombre de la sala: "Laboratorio Redes 1". A un costado de la puerta, en la pared, se observa un letrero de seguridad de color verde.',
            imageUrl: 'assets/img360/Piso -1/020.webp'
        },
        'sb-21': {
            titulo:'Sala SB-21',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el pasillo, junto a una puerta de color amarillo. En la ventana se puede ver un letrero con el nombre de la sala: "Laboratorio de Proyectos". A un costado de la puerta, en la pared, se observa un extintor.',
            imageUrl: 'assets/img360/Piso -1/021.webp'
        },
        'sb-22': {
            titulo:'Sala SB-22',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el pasillo, junto a una puerta de color amarillo. En la ventana se puede ver un letrero con el nombre de la sala: "Laboratorio Redes 2". A un costado de la puerta, en la pared, se observa un letrero de seguridad de color verde.',
            imageUrl: 'assets/img360/Piso -1/022.webp'
        },
        'sb-23': {
            titulo:'Sala SB-23',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el pasillo. En la ventana se puede ver un letrero con el nombre de la sala: "Laboratorio Telecomunicaciones". A un costado de la puerta, en la pared, se observa un letrero de seguridad de color verde.',
            imageUrl: 'assets/img360/Piso -1/023.webp'
        },
        'sb-24': {
            titulo:'Sala SB-24',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el pasillo, donde, a un costado de la puerta, en la pared, se observan los diferentes tipos de extintores. La sala está ubicada al lado derecho de la escalera, y en el techo se puede ver el letrero que indica el piso.',
            imageUrl: 'assets/img360/Piso -1/024.webp'
        },
        'sb-25': {
            titulo:'Sala SB-25',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala está ubicada al lado izquierdo de la escalera, cerca del área de descanso. También se encuentra en esa área un letrero que dice: "ESCUELA DE INFORMÁTICA Y TELECOMUNICACIONES".',
            imageUrl: 'assets/img360/Piso -1/025.webp'
        },
        'sb-26': {
            titulo:'Sala SB-26',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala está ubicada al final del pasillo, al lado izquierdo de la escalera, y frente a ella se encuentra el área de descanso. También hay un letrero que dice: "ESCUELA DE INFORMÁTICA Y TELECOMUNICACIONES".',
            imageUrl: 'assets/img360/Piso -1/026.webp'
        },
        'sb-28': {
            titulo:'Sala SB-28',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala está ubicada frente a la ventana donde se puede ver la escuela de Mecánica. Al costado, se encuentra un letrero verde de emergencia. En el techo, se puede apreciar un letrero de salida frente a la sala.',
            imageUrl: 'assets/img360/Piso -1/028.webp'
        },
        'sb-99': {
            titulo:'Sala SB-99',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el pasillo; a un costado, hay computadores de uso comunitario y, al frente, tres puntos de reciclaje. A un lado, se encuentra una puerta de color rojo. Este está muy cerca de la sala de la Escuela de Salud.',
            imageUrl: 'assets/img360/Piso -1/099.webp'
        },
        'sb-99b': {
            titulo:'Sala SB-99B',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala está ubicada junto a los computadores de uso comunitario y una impresora. Al frente, hay un tablero informativo. En la ventana, se aprecia un letrero que dice: "TÉCNICO EN ODONTOLOGÍA".',
            imageUrl: 'assets/img360/Piso -1/099B.webp'
        },
        'administración': {
            titulo:'Sala Administración',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Su ubicación está frente a los ascensores. En el costado izquierdo, se encuentra un dispensador de agua; en el costado derecho, se puede observar un extintor junto a la puerta y, en la pared, un cartel que dice: "ADMINISTRACIÓN".',
            imageUrl: 'assets/img360/Piso -1/admin.webp'
        },
        'comunicación y extensión': {
            titulo:'Sala comunicación y extensión',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Su ubicación está frente a los ascensores. En el costado derecho, se encuentran los computadores para su uso comunitario, y frente a estos, se pueden ver puntos de reciclaje. En la ventana, se muestra un letrero que dice: "ADMISIÓN COMUNICACIÓN Y EXTENSIÓN".',
            imageUrl: 'assets/img360/Piso -1/comunicacion_extension.webp'
        },
        'centro de fotocopiado': {
            titulo:'Sala Centro de Fotocopiado',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Su ubicación está frente a los ascensores. En el costado derecho, se encuentra un extintor, y junto a él, se puede ver un televisor con las instrucciones para fotocopiar. En las ventanas, se muestra un letrero que dice: "CENTRO DE FOTOCOPIADO".',
            imageUrl: 'assets/img360/Piso -1/img_print.webp'
        },
        'laboratorio de informática': {
            titulo:'Laboratorio de informática',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Su ubicación está al costado de la zona de ejercicio. En el techo, se puede apreciar que en un lado hay un letrero de color verde de salida. Se puede observar que en la ventana se tiene el cartel que dice: "INFORMÁTICA Y TELECOMUNICACIONES".',
            imageUrl: 'assets/img360/Piso -1/Sala Informatica.webp'
        },
        //Piso -2
        'centro tecnológico automotriz': {
            titulo:'Centro Tecnológico Automotriz',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Su ubicación está al costado de la zona de ejercicio. En el techo, se puede apreciar que en un lado hay un letrero de color verde de salida. Se puede observar que en la ventana se tiene el cartel que dice: "INFORMÁTICA Y TELECOMUNICACIONES".',
            imageUrl: 'assets/img360/Piso -2/mecanica-1.webp'
        },
        //Piso 4
        'sala 401': { 
            titulo:'Sala 401',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado frente a la zona de descanso, al lado de la escalera. En la pared, al costado, hay un extintor junto con varios puntos de reciclaje, y en el techo se puede ver un letrero que indica información del piso.',
            imageUrl: 'assets/img360/piso 4/401.webp'
        },
        'sala 402': { 
            titulo:'Sala 402',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado frente a la zona de descanso. En la pared, al costado, hay varios puntos de reciclaje y un letrero de seguridad de color verde. En el techo, se puede ver un letrero que indica información del piso',
            imageUrl: 'assets/img360/piso 4/402.webp'
        },
        'sala 403': { 
            titulo:'Sala 403',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado al costado izquierdo del letrero de color morado. También hay un letrero verde de seguridad y, junto a este, un letrero rojo con advertencias debajo.',
            imageUrl: 'assets/img360/piso 4/403.webp'
        },
        'sala 404': { 
            titulo:'Sala 404',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'En la pared, se encuentra un letrero de color morado. Muy cerca de la puerta, en el costado derecho, está ubicada la siguiente sala.',
            imageUrl: 'assets/img360/piso 4/405-4.webp'
        },
        'sala 405': { 
            titulo:'Sala 405',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra frente a los ascensores. En el techo, hay una televisión que muestra información importante de la sede. A los costados, se encuentra un dispensador de alcohol gel y la puerta de la siguiente sala.',
            imageUrl: 'assets/img360/piso 4/405-4.webp'
        },
        'sala 406': { 
            titulo:'Sala 406',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra frente a los ascensores. En la pared, al costado, hay dos extintores, y debajo de uno de ellos, un chaleco de seguridad. Junto a ellos, hay carteles indicando su ubicación.',
            imageUrl: 'assets/img360/piso 4/406.webp'
        },
        'sala 407': { 
            titulo:'Sala 407',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'En la pared, al costado, hay un basurero. En el techo, un cartel que indica el piso, y cerca, se puede observar un extintor junto con sus carteles de seguridad.',
            imageUrl: 'assets/img360/piso 4/407.webp'
        },
        'sala 408': {
            titulo:'Sala 408',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'En la pared, al costado, hay un dispensador de alcohol gel. En el techo, un cartel que indica el piso, y cerca, se puede observar un basurero.',
            imageUrl: 'assets/img360/piso 4/408.webp'
        },
        'sala 409': {
            titulo:'Sala 409',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'En la pared, al costado, hay un dispensador de alcohol gel, y en el techo se encuentra un cartel del piso.',
            imageUrl: 'assets/img360/piso 4/409.webp'
        },
        'sala 410': {
            titulo:'Sala 410',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la escalera. En la pared, al costado derecho, hay una palanca de emergencia para incendios, y más arriba se puede ver un parlante. En el mismo lado se encuentra también la puerta de la sala anterior.',
            imageUrl: 'assets/img360/piso 4/411.webp'
        },
        'sala 411': {
            titulo:'Sala 411',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la zona de descanso, donde en el pilar se pueden apreciar letreros de seguridad. En la pared, se puede encontrar un letrero de color rojo. En el costado izquierdo, se encuentra una palanca de incendio y la puerta a la otra sala.',
            imageUrl: 'assets/img360/piso 4/411.webp'
        },
        'sala 412': {
            titulo:'Sala 412',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la zona de descanso. En la pared, junto a la puerta, se puede encontrar un letrero de color verde.',
            imageUrl: 'assets/img360/piso 4/412.webp'
        },
        'sala 413': {
            titulo:'Sala 413',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'En la pared, junto a la puerta, hay un basurero; al otro costado, unos letreros de seguridad. También se puede ver un dispensador de gel antibacterial montado en la pared.',
            imageUrl: 'assets/img360/piso 4/413.webp'
        }, 
        'sala 414': {
            titulo:'Sala 414',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la escalera y al muro de escalada de la escuela de turismo. En la pared, junto a la puerta, hay un extintor; al otro costado, un letrero de seguridad de color verde, y también se puede observar un basurero.',
            imageUrl: 'assets/img360/piso 4/414.webp'
        }, 

        //Piso 5
        'sala 501': {
            titulo:'Sala 501',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra a un costado del baño de mujeres. En la pared, junto a la puerta, hay un extintor y, debajo de él, un chaleco de seguridad. Fuera de la sala, en las paredes, hay puntos de reciclaje, y frente a la sala, en el pilar de la escalera, se encuentra un letrero de seguridad.',
            imageUrl: 'assets/img360/Piso 5/501.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=133.96x1.76y-0.57z&rotation=3.39x183.51y0.00z',
        },
        'sala 502': {
            titulo:'Sala 502',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la zona de descanso. En la pared, junto a la puerta, hay un dispensador de agua. Fuera de la sala, en las paredes, hay puntos de reciclaje. En el techo, se encuentra un letrero del piso.',
            imageUrl: 'assets/img360/Piso 5/502.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=118.99x1.74y-0.56z&rotation=0.39x166.36y0.00z'
        },
        'sala 503': {
            titulo:'Sala 503',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la zona de descanso. En la pared, junto a la puerta, hay un dispensador de agua. Fuera de la sala, en las paredes, hay puntos de reciclaje. En el techo, se encuentra un letrero del piso.',
            imageUrl: 'assets/img360/Piso 5/503.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=108.34x1.80y-0.63z&rotation=-4.81x166.01y0.00z'
        },
        'sala 504': {
            titulo:'Sala 504',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a los ascensores. En la pared, cerca de la sala anterior, se pueden observar extintores junto a un desfibrilador.',
            imageUrl: 'assets/img360/Piso 5/504.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=91.68x1.72y-0.82z&rotation=-2.28x147.57y0.00z'
        },
        'sala 505': {
            titulo:'Sala 505',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra casi llegando a los ascensores. Fuera de la sala, en la pared, se encuentran extintores junto a un desfibrilador. Igualmente, se puede encontrar un basurero.',
            imageUrl: 'assets/img360/Piso 5/505.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=84.90x1.74y-0.14z&rotation=-2.28x147.57y0.00z'
        },
        'sala 506': {
            titulo:'Sala 506',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la zona de descanso. A un costado de esta zona, hay dos escaleras, y frente a una de ellas, hay un basurero.',
            imageUrl: 'assets/img360/Piso 5/506.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=60.18x1.72y-0.54z&rotation=2.49x181.89y0.00z'
        },
        'sala 507': {
            titulo:'Sala 507',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la escalera. A un costado, hay una palanca de incendio, y frente a esta está la zona de descanso.',
            imageUrl: 'assets/img360/Piso 5/507.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=60.18x1.72y-0.54z&rotation=2.49x181.89y0.00z'
        },
        'sala 508': {
            titulo:'Sala 508',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a los ventanales, que permiten ver hacia el exterior. A un costado de la puerta, hay un cartel de incendio junto con uno de seguridad.',
            imageUrl: 'assets/img360/Piso 5/508.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=44.98x1.74y-0.37z&rotation=1.09x159.16y0.00z'
        },
        'sala 509': {
            titulo:'Sala 509',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la zona de descanso. A un costado de la puerta, en la parte inferior, hay un cartel de red inerte, y en la parte superior se encuentra un letrero del piso.',
            imageUrl: 'assets/img360/Piso 5/509.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=39.61x1.67y-0.71z&rotation=-6.52x176.12y0.00z'
        },
        'sala 510': {
            titulo:'Sala 510',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra casi frente a la zona de descanso. A un costado de la puerta, en la parte inferior, hay dos carteles de advertencia, y al lado derecho de la puerta se encuentra un basurero.',
            imageUrl: 'assets/img360/Piso 5/510.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=18.36x1.66y-0.48z&rotation=2.80x169.59y0.00z'
        },
        'sala 511': {
            titulo:'Sala 511',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la zona de escalado, junto a la escalera. A un costado de la puerta, se encuentra un extintor, y junto a este se encuentra un letrero.',
            imageUrl: 'assets/img360/Piso 5/511.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=3d8b7462-3ce8-4407-ba80-830d82302060&position=11.96x1.73y-0.82z&rotation=-3.05x179.66y0.00z'
        },
        //Piso 6
        'sala 601': {
            titulo:'Sala 601',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra a un costado del baño. En la pared, hay varios puntos de reciclaje junto a un extintor, y en el techo se encuentra un letrero que indica el número del piso.',
            imageUrl: 'assets/img360/Piso 6/601.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=dd20ba1d-d81f-4bd8-8b4a-1264c091bd1f&position=182.44x1.72y0.52z&rotation=-0.47x171.19y0.00z'
        },
        'sala 602': {
            titulo:'Sala 602',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra junto a la sala anterior. En la pared, hay varios puntos de reciclaje. En el techo, se puede ver un letrero del piso.',
            imageUrl: 'assets/img360/Piso 6/601.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=dd20ba1d-d81f-4bd8-8b4a-1264c091bd1f&position=182.44x1.72y0.52z&rotation=-0.47x171.19y0.00z'
        },
        'sala 603': {
            titulo:'Sala 603',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Al costado inferior de la pared izquierda, se encuentran dos letreros de advertencia. En la pared, hay varios puntos de reciclaje.',
            imageUrl: 'assets/img360/Piso 6/603.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=dd20ba1d-d81f-4bd8-8b4a-1264c091bd1f&position=164.07x1.72y0.21z&rotation=-1.09x176.32y0.00z'
        },
        'sala 604': {
            titulo:'Sala 604',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado frente a los ascensores, donde se pueden ver diferentes carteles verdes de seguridad. En la pared, a un costado, hay un dispensador de alcohol gel.',
            imageUrl: 'assets/img360/Piso 6/604.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=dd20ba1d-d81f-4bd8-8b4a-1264c091bd1f&position=144.72x1.72y-0.04z&rotation=3.80x157.32y0.00z'
        },
        'sala 605': {
            titulo:'Sala 605',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado frente a las escaleras. Al costado derecho, se puede observar un extintor junto a un cartel, y cerca, en el techo, hay un letrero indicando el número del piso.',
            imageUrl: 'assets/img360/Piso 6/605.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=dd20ba1d-d81f-4bd8-8b4a-1264c091bd1f&position=123.90x1.72y-0.17z&rotation=3.02x168.08y0.00z'
        },
        'sala 606': {
            titulo:'Sala 606',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'En las paredes, hay un dispensador de alcohol gel. De igual forma, se puede encontrar una cámara de seguridad en la pared por el costado izquierdo.',
            imageUrl: 'assets/img360/Piso 6/606.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=dd20ba1d-d81f-4bd8-8b4a-1264c091bd1f&position=107.98x1.72y0.25z&rotation=-9.29x166.20y0.00z'
        },
        'sala 607': {
            titulo:'Sala 607',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'En las paredes, hay un dispensador de alcohol gel. También se puede encontrar un letrero con información relevante sobre la sede.',
            imageUrl: 'assets/img360/Piso 6/607.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=dd20ba1d-d81f-4bd8-8b4a-1264c091bd1f&position=90.60x1.72y-0.40z&rotation=-2.05x167.47y0.00z'
        },
        'sala 608': {
            titulo:'Sala 608',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'En los costados, se encuentra un letrero de seguridad de color verde; también, arriba de este, hay un parlante. En la pared del costado, se puede apreciar un letrero con información relevante de la sede.',
            imageUrl: 'assets/img360/Piso 6/608.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=dd20ba1d-d81f-4bd8-8b4a-1264c091bd1f&position=72.89x1.72y-1.21z&rotation=-4.74x169.61y0.00z'
        },
        'sala 609': {
            titulo:'Sala 609',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'En los costados se encuentra un letrero de seguridad de color verde; también, arriba de este, hay un parlante. En la pared del costado, se puede apreciar un letrero con información relevante de la sede.',
            imageUrl: 'assets/img360/Piso 6/609.webp',
            mapUrl: 'https://tour.metareal.com/apps/player?asset=dd20ba1d-d81f-4bd8-8b4a-1264c091bd1f&position=53.66x1.72y-1.25z&rotation=2.41x175.66y0.00z'
        },
        
    }

    constructor(private route: ActivatedRoute) {} 

    ngOnInit() { 
        this.salaId = this.route.snapshot.paramMap.get('id'); 
        const InfoSala = this.InfoSala[this.salaId.toLowerCase()]; 
        this.titulo = InfoSala.titulo;
        this.tituloCard = InfoSala.tituloCard; 
        this.descripcion = InfoSala.descripcion; 
        this.imageUrl = InfoSala.imageUrl;
        this.mapUrl = InfoSala.mapUrl;
        this.loadPanorama();
    }
 
    loadPanorama() {
        pannellum.viewer('panorama', {
            type: 'equirectangular',
            panorama: this.imageUrl, // Ruta de tu imagen 360
            compass: true,
            autoLoad: true
        });
    }

}