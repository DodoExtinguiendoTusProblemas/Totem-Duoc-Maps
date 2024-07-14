import { Component } from "@angular/core";
import { ActionSheetController } from '@ionic/angular';
@Component({
    selector: 'preguntas',
    templateUrl: './preguntas.component.html',
    styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent{
    constructor(public actionSheetCtrl: ActionSheetController) {}
    async presentActionSheet() {
        const actionSheet = await this.actionSheetCtrl.create({
          header: 'pregunta frecuente 🤔',
          buttons: [
            {
              text: 'Te contamos que las ceremonias de titulaciones se encuentran a cargo del Área de Extensión de tu sede.',
            },
            {
              text: 'Cancel',
              icon: 'close',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              },
            },
          ],
        });
        await actionSheet.present();
    }
}