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
    // Add data variable here

    private static isInitialized : boolean = false;
    constructor()
    {
        if(!ServiceExample.isInitialized)
        {
             this.initializeExampleServices();
             ServiceExample.isInitialized = true;
        }
       
    }

    public initializeExampleServices() : void
    {
        let socket = SingletonSocketClient.instance();
        socket.emit('example_event', "Hello server");
    }

    // Create functions to retrieve data locally (these, updated by the server-side socket with 
    // the 'emit' function and the client-side socket with 'on' function)

    // create functions to update data in the database

}