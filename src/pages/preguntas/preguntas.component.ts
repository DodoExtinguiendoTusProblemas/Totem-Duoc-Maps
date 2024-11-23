import { Component } from "@angular/core";

@Component({
  selector: 'preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent{

  preguntas = [
    {"pregunta": "¿Existe orientación de Carreras?", "respuesta": "Sí. Para obtener orientación, debes dirigirte directamente a la sede en la que se imparte la carrera de tu interés para solicitar información. También puedes hacerlo desde el teléfono de Admisión (+56) 227 120640 o vía WhatsApp ((+56) 9 581 42089).", "expanded": false},
    {"pregunta": "¿Puedo convalidar ramos para estudiar en Duoc UC?", "respuesta": "Sí, para convalidar debes haber cursado a lo menos un semestre en alguna institución y haber aprobado los ramos que deseas convalidar. Puedes realizar este proceso a partir de la primera semana de diciembre directamente en la sede.", "expanded": false},
    {"pregunta": "¿Cuál es la documentación requerida para la convalidación de ramos?", "respuesta": "Debes presentar los siguientes documentos para su revisión: Fotocopia de la cédula de Identidad por ambos lados. Concentración de notas original y timbrada por la Institución de Educación Superior correspondiente. Programas de estudio de la asignatura(s) que quieres convalidar, timbrada por la Institución de Educación Superior. Licencia de Educación Media (LEM) original.", "expanded": false},
    {"pregunta": "¿Qué hago si me matriculo y luego resulto ser beneficiario de la gratuidad?", "respuesta": "Si ya te matriculaste pagando y se te otorgó la gratuidad, se te devolverá tu matricula pagada dentro de un plazo de 30 días a contar de la publicación de resultados 2025.", "expanded": false},
    {"pregunta": "¿Puedo optar a la gratuidad si ya tengo un título técnico o profesional?", "respuesta": "Solo podrás acceder a la gratuidad si ya tienes un título técnico y te matriculas en una carrera profesional de la misma área de conocimiento. Si ya cuentas con un título profesional no podrás acceder a la gratuidad.", "expanded": false},
    {"pregunta": "¿La gratuidad cubre carreras vespertinas?", "respuesta": "Sí. La gratuidad cubre carreras diurnas y vespertinas, pero no cubre carreras semipresenciales y full online.", "expanded": false},
    {"pregunta": "¿Puedo estudiar con beca en Duoc UC?", "respuesta": "Sí. Para obtener becas estatales, debes postular a través del formulario FUAS. Para las Becas Duoc UC, debes postular de manera independiente", "expanded": false},
    //{"pregunta": "", "respuesta": ""}
  ]

  toggleInfo(item) {
    item.expanded = !item.expanded;
  }
}