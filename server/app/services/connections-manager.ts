import * as io from 'socket.io';
import { ExampleService } from './example.service';
import { ConnectionTracker } from '../database/connectionTracker.database';

/* This class manage all the connection to the socket. It gives rights to the connection, register connections, etc.*/
export class ConnectionManager
{
    private static connectionList : Array<SocketIO.Socket> = [];

    constructor(socketServer : SocketIO.Server)
    {
        let db = new ConnectionTracker();
        socketServer.on('connection', (socket : SocketIO.Socket) => 
        {
            //We add the socket in the list of connected socket
            ConnectionManager.connectionList.push(socket);
            console.log("A new connection has been established. Socket ID : '" + socket.id + "'\n" + ConnectionManager.connectionList.length  + " socket(s) are now connected.\n");
            
            //On connection, we register the date and the socket that has connect
            db.storeConnection({ 
                id : socket.id,
                date : new Date(),
                type : "connection" 
            });

            //On disconnection, we register the date and the socket that has disconnect
            socket.on('disconnect', () =>
            {
                //We ensure that the socket get disconnected and we
                //remove the socket of the list of connected socket
                socket.disconnect();                
                this.remove(socket);   
                db.storeConnection({ 
                    id : socket.id,
                    date : new Date(),
                    type : "deconnection" 
                });  
            });
            //We instanciate the services for the socket
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
                console.log("Socket '" + socket.id + "' has deconnected and has been removed from the list of connected socket.\n")
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