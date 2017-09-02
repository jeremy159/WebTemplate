/*
* Socket is set as a Signleton pattern. It ensure that every services will read and write to the same socket connection.
* Just add the class to the services to use and add the proper 'emit' and 'on' function to read/write to the socket.
*
* WARNING : THIS CLASS SHOULD NOT BE MODIFIED !!
*/
import * as http from 'http';
import { ConnectionManager } from './connections-manager'
import * as io from 'socket.io';

export class SingletonSocketServer
{
    private static uniqueInstance : SocketIO.Server = undefined;

    constructor(server : http.Server)
    {
        //We maintain only one socket open by checking if it is already connected
        if(SingletonSocketServer.uniqueInstance === undefined) { 
            //Connect itself to the server
            SingletonSocketServer.uniqueInstance = io.listen(server);
            new ConnectionManager(SingletonSocketServer.uniqueInstance);
        }   
    }
  
    //Return the server-side sockey unique instance
    /*public static instance() : SocketIO.Server
    {
        return this.uniqueInstance;
    }*/
  
}