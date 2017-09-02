import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SingletonSocketClient } from './services/socket-client';

import { ServiceExample} from './services/example.service'

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [ServiceExample],
    bootstrap: [AppComponent]
})
export class AppModule 
{ 
    constructor() 
    { 
        let socket = new SingletonSocketClient(); 
    }
}
