import { Component } from "@angular/core";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
}) 
export class MainComponent{

    option = {
        slidesPerView: 1.5,
        centeredSlides: true,
        loop:true,
        spaceBetween: 0,
    }
}