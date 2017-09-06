/*
* Socket is set as a Signleton pattern. It ensure that every services will read and write to the same socket connection.
* Just add the class to the services to use and add the proper 'emit' and 'on' function to read/write to the socket.
*
* WARNING : THIS CLASS SHOULD NOT BE MODIFIED EXCEPT FOR THE URL!!
*/
import * as io from 'socket.io-client';

export class SingletonSocketClient
{
    //Add the URL to communicate with
    private readonly URL = "http://localhost:3002/";
    private static uniqueInstance : io.SocketIOClient.Socket = undefined;
   
    constructor()
    {
        //We maintain only one socket open by checking if it is already connected
        if(SingletonSocketClient.uniqueInstance === undefined) { 
            //Connect itself to the actual URL
            SingletonSocketClient.uniqueInstance = io.connect(this.URL);
        }   
    }

    public static instance() : io.SocketIOClient.Socket
    {
        return this.uniqueInstance;
    }    
}