import * as io from 'socket.io';
import { ExampleService } from './example.service'

export class ConnectionManager
{
    private static connectionList : Array<SocketIO.Socket> = [];

    constructor(socketServer : SocketIO.Server)
    {
        socketServer.on('connection', (socket : SocketIO.Socket) => 
        {
            ConnectionManager.connectionList.push(socket);
            console.log("A new connection has been established. Socket ID : '" + socket.id + "'\n" + ConnectionManager.connectionList.length  + " socket(s) are now connected.\n");

            socket.on('disconnect', () =>
            {
                socket.disconnect();                
                this.remove(socket);     
            });
            this.instanciateServices(socket);
        });
    }

    //Remove the socket from the list of connected socket
    private remove(socket : SocketIO.Socket) : void
    {
        let connections = ConnectionManager.connectionList;
        for(let i = 0; i < connections.length ; i++)
        {
            if(connections[i] === socket)
            {
                connections[i] = connections[connections.length - 1];
                connections.pop();
                console.log("Socket '" + socket.id + "' has deconnected and has been removed from the list of connected socket")
            }
        }
    }

    //Instanciate services
    private instanciateServices(socketServer : SocketIO.Socket)
    {
        //############################################### ADD YOUR SERVICES DOWN HERE ############################################
        //..
        new ExampleService(socketServer);
    }

}