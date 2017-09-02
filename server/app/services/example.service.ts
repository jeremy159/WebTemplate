import * as io from 'socket.io';

export class ExampleService
{
    constructor(socket : SocketIO.Socket)
    {
        socket.on('example_event', (data : string) => { console.log("Socket ID " + socket.id + " is telling us : " + data); });
    }
}