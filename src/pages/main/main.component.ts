import { Component } from "@angular/core";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
}) 
export class MainComponent{
        
    constructor(private inAppBrowser: InAppBrowser){}

    redirect() {
        this.inAppBrowser.create("https://tour-br.metareal.com/apps/player?asset=4b885b33-87cd-4a0f-8dc3-c1ca84f18653","_self", "location=no");
    }

    option = {
        slidesPerView: 1.5,
        centeredSlides: true,
        loop:true,
        spaceBetween: 0,
    }

}