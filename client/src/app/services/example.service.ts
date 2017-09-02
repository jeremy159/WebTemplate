/*
* This service import the Singleton socket instance and do the proper 'on' and 'emit' on it.
* Hence, this service will be injected in a component that will use some of its functions to 
* read/write data from/to server.
*/

import { Injectable } from '@angular/core';
import { SingletonSocketClient } from './socket-client'

@Injectable()
export class ServiceExample
{
    constructor()
    {
        console.log("Service example OK !")
        this.initializeExampleServices();
    }

    public initializeExampleServices() : void
    {
        SingletonSocketClient.instance().emit('example_event', "Hello");
    }

}