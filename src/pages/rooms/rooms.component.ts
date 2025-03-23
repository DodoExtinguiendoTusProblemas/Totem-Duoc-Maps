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
    mostrarBoton?: boolean;

    private InfoSala = {
        //pISO -1
        'sb-01': {
            titulo:'Sala SB-01',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el sector, a un costado de los casilleros. Junto al número de la sala, se encuentra un letrero verde de emergencias, el cual se puede apreciar claramente. De igual manera, se encuentra el área de ejercicio, donde se puede identificar por las áreas verdes y la mesa de ping-pong.',
            imageUrl: /*'assets/img360/Piso -1/01.webp' */ 'file:///C:/Users/ACER/Desktop/Dodo/Pruebas/Totem-Duoc-Maps-main/src/assets/img360/Piso%20-1/Sala%20Informatica.webp'
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
            imageUrl: 'assets/img360/Piso -1/admin.webp',
            mostrarBoton: true
        },
        'comunicación y extensión': {
            titulo:'Sala comunicación y extensión',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Su ubicación está frente a los ascensores. En el costado derecho, se encuentran los computadores para su uso comunitario, y frente a estos, se pueden ver puntos de reciclaje. En la ventana, se muestra un letrero que dice: "ADMISIÓN COMUNICACIÓN Y EXTENSIÓN".',
            imageUrl: 'assets/img360/Piso -1/comunicacion_extension.webp',
            mostrarBoton: true
        },
        'centro de fotocopiado': {
            titulo:'Sala Centro de Fotocopiado',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Su ubicación está frente a los ascensores. En el costado derecho, se encuentra un extintor, y junto a él, se puede ver un televisor con las instrucciones para fotocopiar. En las ventanas, se muestra un letrero que dice: "CENTRO DE FOTOCOPIADO".',
            imageUrl: 'assets/img360/Piso -1/img_print.webp',
            mostrarBoton: true
        },
        'laboratorio de informática': {
            titulo:'Laboratorio de informática',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Su ubicación está al costado de la zona de ejercicio. En el techo, se puede apreciar que en un lado hay un letrero de color verde de salida. Se puede observar que en la ventana se tiene el cartel que dice: "INFORMÁTICA Y TELECOMUNICACIONES".',
            imageUrl: 'assets/img360/Piso -1/Sala Informatica.webp',
            mostrarBoton: true
        },
        //Piso -2 FALTA ESTEEEEE
        'sb-001': {
            titulo:'Sala SB-001',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. Al costado hay letreros de emergencia junto con un cartel que dice "Patio Construcción". También se puede apreciar un letrero verde de salida de emergencia, y, a un lado de la entrada, se encuentran extintores con sus respectivos carteles',
            imageUrl: 'assets/img360/Piso -2/001-mecanica.webp'
        },
        'sb-002': {
            titulo:'Sala SB-002',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta hay un letrero con normas de seguridad y otro letrero celeste que dice: "Use calzado de seguridad". En la pared, se encuentra un panel de anuncios de la sede, y a un costado de este, una ventana donde se entregan los materiales de la carrera de Construcción.',
            imageUrl: 'assets/img360/Piso -2/002-001.webp'
        },
        'sb-003': {
            titulo:'Sala SB-003',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta hay un letrero con normas de seguridad, y a un costado, un extintor con su respectivo cartel. En la ventana, se indica que esta sala pertenece a la Escuela de Construcción.',
            imageUrl: 'assets/img360/Piso -2/003.webp'
        },
        'sb-004': {
            titulo:'Sala SB-004',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta hay un letrero con normas de seguridad. Frente a ella, hay una zona de estudio, y a un costado, un extintor.',
            imageUrl: 'assets/img360/Piso -2/004.webp'
        },
        'sb-005': {
            titulo:'Sala SB-005',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta hay un letrero con normas de seguridad. Bajo este se encuentra un extintor.',
            imageUrl: 'assets/img360/Piso -2/004.webp'
        },
        'sb-006': {
            titulo:'Sala SB-006',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta hay un letrero con normas de seguridad. A un costado, se puede ver un extintor con su señalética y un chaleco debajo de este. En la pared, hay puntos de reciclaje. El lugar está cerca de los ascensores y de una zona de estudio.',
            imageUrl: 'assets/img360/Piso -2/006.webp'
        },
        'sb-007': {
            titulo:'Sala SB-007',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la pared, junto a la ventana, hay una indicación que señala que pertenece a la Escuela de Turismo. Además, el área está equipada con señalética de emergencia y otros elementos que identifican su función.',
            imageUrl: 'assets/img360/Piso -2/007.webp'
        },
        'pañol electricidad': {
            titulo:'Pañol Electricidad',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta, hay un letrero amarillo que dice: "Área restringida". A un costado, se encuentra la bodega de Turismo. En la ventana, se indica que pertenece a la Escuela de Electricidad.',
            imageUrl: 'assets/img360/Piso -2/0017-A-0017-B-0018-2.webp'
        },
        'sb-0010': {
            titulo:'Sala SB-0010',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta se encuentra un letrero verde de seguridad, .', //FALTA DESCRIPCIÓN
            imageUrl: 'assets/img360/Piso -2/0017-A-0017-B-0018-4.webp'
        },
        'sb-0018': {
            titulo:'Sala SB-0018',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta, hay un letrero verde de seguridad acompañado de otros letreros. Fuera de la sala, se encuentra una mesa junto a un ventilador.', 
            imageUrl: 'assets/img360/Piso -2/0017-A-0017-B-0018.webp'
        },
        'sb-0011': {
            titulo:'Sala SB-0011',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta, hay un letrero verde de seguridad. Al costado, se encuentra un extintor acompañado de un letrero rojo. Fuera de la sala, hay una mesa.', 
            imageUrl: 'assets/img360/Piso -2/0017-A-0017-B.webp'
        },
        'sb-0017a': {
            titulo:'Sala SB-0017A',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta, hay un letrero verde de seguridad. Frente a la puerta, se encuentra un extintor junto a su cartel. En la ventana, se puede apreciar un letrero que dice: "Laboratorio de PLC y Laboratorios Industriales".', 
            imageUrl: 'assets/img360/Piso -2/0017-A.webp'
        },
        'sb-0017b': {
            titulo:'Sala SB-0017B',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta, hay un letrero verde de seguridad, junto a otro letrero que dice: "Prohibido ingresar alimentos". Frente a la puerta, se encuentra un extintor acompañado de su cartel de seguridad.', 
            imageUrl: 'assets/img360/Piso -2/0017-A-0017-B.webp'
        },
        'sb-012': {
            titulo:'Sala SB-012',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta, hay un letrero verde de seguridad. En la ventana, se puede apreciar un sticker informativo que indica que la sala es de "Robótica".', 
            imageUrl: 'assets/img360/Piso -2/0019-0.webp'
        },
        'sb-0014': { // Revisar bien las salas de este punto
            titulo:'Sala SB-0014',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta, hay un letrero verde de seguridad. En la ventana frontal, se puede apreciar un sticker informativo que indica que la sala pertenece a "Técnico en Electricidad y Automatización Industrial".', 
            imageUrl: 'assets/img360/Piso -2/0017-A-0017-B.webp'
        },
        'sb-0023': {
            titulo:'Sala SB-0023',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En el costado, hay un punto con extintores acompañado de su cartel de seguridad. Al frente, se encuentra un punto de descanso, donde se puede apreciar un letrero que refleja el nombre de la "Escuela de Ingeniería y Recursos Naturales".', 
            imageUrl: 'assets/img360/Piso -2/0019-0023-1.webp'
        },
        'sb-0022b': {
            titulo:'Sala SB-0022B',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En el costado, hay un cartel verde que indica la vía de evacuación. Al frente, se encuentra una zona de descanso.', 
            imageUrl: 'assets/img360/Piso -2/0019-0023-0022-B.webp'
        },
        'sb-0019': {
            titulo:'Sala SB-0019',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta, hay un letrero verde de seguridad. En la ventana frontal, se puede apreciar un sticker informativo que indica que la sala pertenece a la Escuela de Ingeniería y Recursos Naturales. Al frente, se encuentran casilleros y, cerca, una zona de descanso.', 
            imageUrl: 'assets/img360/Piso -2/0019.webp'
        },
        'sb-0020': {
            titulo:'Sala SB-0020',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra en el piso -2. En la puerta, hay un letrero verde de seguridad. En la ventana frontal, se puede apreciar un sticker informativo que indica que la sala pertenece a la Escuela de Ingeniería y Recursos Naturales. Al frente, se encuentran casilleros y, cerca, una zona de descanso.', 
            imageUrl: 'assets/img360/Piso -2/0019.webp'
        },
        'centro tecnológico automotriz': {
            titulo:'Centro Tecnológico Automotriz',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Su ubicación está al costado de la zona de ejercicio. En el techo, se puede apreciar que en un lado hay un letrero de color verde de salida. Se puede observar que en la ventana se tiene el cartel que dice: "INFORMÁTICA Y TELECOMUNICACIONES".',
            imageUrl: 'assets/img360/Piso -2/mecanica-1.webp'
        },
        //Piso 1
        'capilla': {
            titulo:'Capilla',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el primer piso, a un costado de la entrada. A un lado, está el baño de Administración, y frente a este se encuentra una escalera.',
            imageUrl: 'assets/img360/Piso 1/capilla.webp',
            mostrarBoton: true
        },
        'citt': {
            titulo:'CITT',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el primer piso, frente a los ascensores. Frente a la puerta de acceso, se encuentra la entrada a la capilla.',
            imageUrl: 'assets/img360/Piso 1/citt.webp',
            mostrarBoton: true
        },
        'punto estudiantil': {
            titulo:'Punto Estudiantil',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el primer piso, a un costado de la puerta de entrada. Frente a la puerta de acceso, se pueden encontrar vitrinas con trofeos en ellas. A un costado, se encuentra una escalera.',
            imageUrl: 'assets/img360/Piso 1/punto estudiantil.webp',
            mostrarBoton: true
        },
        'biblioteca': {
            titulo:'Biblioteca',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el primer piso. Frente, se pueden encontrar lugares de descanso. A un costado de estos, se encuentra una máquina dispensadora de bebidas.',
            imageUrl: 'assets/img360/Piso 1/biblioteca.webp',
            mostrarBoton: true
        },
        'casino': {
            titulo:'Casino',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el primer piso. frente al acceso se encuentra el patio central y un lugar para comer fuera, al costado se encuentra un kiosco de comida vegana.',
            imageUrl: 'assets/img360/Piso 1/casino.webp',
            mostrarBoton: true
        },
        'coordinación docente': {
            titulo:'Coordinación Docente',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el primer piso. Se encuentra casi a un costado de la puerta que da hacia la salida al patio central. En la pared a un costado, se puede encontrar un punto de reciclaje.',
            imageUrl: 'assets/img360/Piso 1/coordinacion-docente.webp',
            mostrarBoton: true
        },
        //Piso 2
        'lc-08': {
            titulo:'LC-08',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. A un costado de la puerta de entrada se encuentra un punto de reciclaje y una zona donde se pueden utilizar computadores. En el techo, se encuentra un letrero con la información del piso.',
            imageUrl: 'assets/img360/Piso 2/lc-08.webp'
        },
        'lc-09': {
            titulo:'LC-09',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. Se encuentra frente a los ascensores. En la pared, a un costado de la puerta de acceso, se encuentran distintos puntos de reciclaje. Seguido, se encuentra una zona de descanso.',
            imageUrl: 'assets/img360/Piso 2/lc-09.webp'
        },
        'lc-10': {
            titulo:'LC-10',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. En la pared junto a la entrada, se encuentra un basurero. En el costado, en la pared, se encuentra un letrero un poco mas allá se encuentra un extintor.',
            imageUrl: 'assets/img360/Piso 2/lc-10.webp'
        },
        'lc-11': {
            titulo:'LC-11',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. A un lado de la entrada, se puede apreciar un letrero. En la pared, se encuentra un cartel informativo de la sede. De igual forma, se encuentra frente a la escalera y una zona de descanso.',
            imageUrl: 'assets/img360/Piso 2/lc-11.webp'
        },
        'lc-12': {
            titulo:'LC-12',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. Frente, se encuentra una escalera y la zona de descanso. En la pared, se pueden apreciar distintos carteles.',
            imageUrl: 'assets/img360/Piso 2/lc-12.webp'
        },
        'lc-13': {
            titulo:'LC-13',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. En la pared, a un costado, se encuentra un letrero. En la pared, se encuentra un letrero de "Red Inerte".',
            imageUrl: 'assets/img360/Piso 2/lc-13.webp'
        },
        'lc-14': {
            titulo:'LC-14',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. En el costado, junto a la puerta, se pueden encontrar letreros de energía, y más al costado, un extintor. De igual forma, se encuentra acasi llegando al kiosco. En las paredes, hay un letrero de "Vía de evacuación" junto a otros letreros.',
            imageUrl: 'assets/img360/Piso 2/lc-14.webp'
        },
        'lc-15': {
            titulo:'LC-15',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. Está frente al kiosco y las mesas del mismo. En la pared, al costado de la puerta, se encuentra un letrero.',
            imageUrl: 'assets/img360/Piso 2/lc-15.webp'
        },
        'lc-16': {
            titulo:'LC-16',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. En el costado, a un lado de la puerta, se puede apreciar una palanca contra incendios. Está casi llegando a la escalera. En el costado, en la pared, se puede encontrar un extintor junto a unos letreros.',
            imageUrl: 'assets/img360/Piso 2/lc-16.webp'
        },
        'sala portafolio': {
            titulo:'Sala De Portafolio',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. En un costado, se encuentra un ascensor. En el techo, se puede ver un letrero con la información del piso.',
            imageUrl: 'assets/img360/Piso 2/sala de portafolio.webp',
            mostrarBoton: true
        },
        'sp-07': {
            titulo:'SP-07',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. En las paredes, se encuentra un panel de información, al igual que un basurero.',
            imageUrl: 'assets/img360/Piso 2/sp-07.webp'
        },
        'sp-08': {
            titulo:'SP-08',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. En el costado de la puerta, se encuentra un extintor junto a un cartel que lo señala. De igual forma, arriba de este, se encuentra un parlante.',
            imageUrl: 'assets/img360/Piso 2/sp-08.webp'
        },
        'sp-09': {
            titulo:'SP-09',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. En el costado, a un lado de la puerta, se puede ver un letrero con información junto con un letrero verde de "salida de emergencia" de igual forma en el echo se puede apreciar un letrero con la info.',
            imageUrl: 'assets/img360/Piso 2/sp-09.webp'
        },
        'sp-10': {
            titulo:'SP-10',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. En un costado, se puede apreciar un basurero. En el techo, se encuentra una cámara de seguridad junto con internet.',
            imageUrl: 'assets/img360/Piso 2/sp-10.webp'
        },
        'sp-11': {
            titulo:'SP-11',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el segundo piso. A un costado, al lado de la puerta, se encuentran extintores junto a un desfibrilador "D.E.A.".',
            imageUrl: 'assets/img360/Piso 2/sp-11.webp'
        },
        //Piso 3
        'sp-1': {
            titulo:'SP-1',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el tercer piso, .',
            imageUrl: 'assets/img360/Piso 3/sp-1.webp'
        },
        'sp-2': {
            titulo:'SP-2',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el tercer piso, donde, en el costado, hay un panel de anuncios junto a un letrero verde de emergencia. Además, en el techo se puede observar un letrero que indica las salas',
            imageUrl: 'assets/img360/Piso 3/sp-2.webp'
        },
        'sp-3': {
            titulo:'SP-3',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Se encuentra ubicado en el tercer piso. Al costado, junto a la puerta, hay un extintor con su respectivo letrero, y en la pared se encuentra un basurero. Además, en el techo, se puede observar un cartel cercano que indica las salas.',
            imageUrl: 'assets/img360/Piso 3/sp-3.webp'
        },
        'sp-4': {
            titulo:'SP-4',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Está ubicado en el tercer piso, donde, al costado, se encuentra un panel de anuncios acompañado de un cartel de emergencias de color verde.',
            imageUrl: 'assets/img360/Piso 3/sp-4.webp'
        },
        'sp-5': {
            titulo:'SP-5',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Está ubicado en el tercer piso, en la pared lateral, donde hay un basurero de color negro.',
            imageUrl: 'assets/img360/Piso 3/sp-5.webp'
        },
        'sp-6': {
            titulo:'SP-6',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Está ubicado en el tercer piso. En el costado, se encuentran extintores junto a sus letreros de emergencia, y cerca del techo hay un cartel que indica las salas. Además, en el costado, hay un sillón para descansar.',
            imageUrl: 'assets/img360/Piso 3/sp-6.webp'
        },
        'lc-01': {
            titulo:'LC-01',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Está ubicado en el tercer piso. En los costados de la pared, se encuentran dos puntos de reciclaje junto a un extintor con su respectivo cartel.',
            imageUrl: 'assets/img360/Piso 3/lc-01.webp'
        },
        'lc-02': {
            titulo:'LC-02',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Está ubicado en el tercer piso. En la pared de un costado, se encuentran varios puntos de reciclaje, mientras que en el costado derecho hay un cartel de seguridad de color verde',
            imageUrl: 'assets/img360/Piso 3/lc-02.webp'
        },
        'lc-03': {
            titulo:'LC-03',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'Está ubicado en el tercer piso, a un costado de "Cetecom". En la pared, se encuentra un tablero de anuncios.',
            imageUrl: 'assets/img360/Piso 3/lc-03.webp'
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
            imageUrl: 'assets/img360/Piso 5/501.webp'
        },
        'sala 502': {
            titulo:'Sala 502',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la zona de descanso. En la pared, junto a la puerta, hay un dispensador de agua. Fuera de la sala, en las paredes, hay puntos de reciclaje. En el techo, se encuentra un letrero del piso.',
            imageUrl: 'assets/img360/Piso 5/502.webp'
        },
        'sala 503': {
            titulo:'Sala 503',
            tituloCard: '¿Cómo Llegar?',
            descripcion: 'La sala se encuentra frente a la zona de descanso. En la pared, junto a la puerta, hay un dispensador de agua. Fuera de la sala, en las paredes, hay puntos de reciclaje. En el techo, se encuentra un letrero del piso.',
            imageUrl: 'assets/img360/Piso 5/503.webp'
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

    constructor(private route: ActivatedRoute ) {} 
    
    ngOnInit() { 
        this.salaId = this.route.snapshot.paramMap.get('id'); 
        const InfoSala = this.InfoSala[this.salaId.toLowerCase()]; 
        this.titulo = InfoSala.titulo;
        this.tituloCard = InfoSala.tituloCard; 
        this.descripcion = InfoSala.descripcion; 
        this.imageUrl = InfoSala.imageUrl;
        this.mapUrl = InfoSala.mapUrl;
        this.mostrarBoton = InfoSala.mostrarBoton;
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