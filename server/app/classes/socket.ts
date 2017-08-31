import * as http from 'http';
import * as sock from 'socket.io';

export class Socket
{
    private socketServeur: any;

    // Création du serveur HTTP.
    public constructor(server: http.Server)
    {
        // Chargement de socket.io
        this.socketServeur = sock.listen(server);
        console.log("Socket initialisé");
        this.connection();
    }

    public connection(): void
    {
        this.socketServeur.sockets.on('connection', (socket: any) =>
        {
            // Faire des actions lorsque l'évèenement 'connection' est émis de la part du clien
            this.deconnection(socket);
        });
    }

    public deconnection(socket: any): void
    {
        socket.on('disconnect', () =>
        {
            // Faire les actions nécessaires lorsqu'un socket se déconnecte
            socket.leave();
        });
    }
}
