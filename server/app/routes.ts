import * as express from 'express';
import { ServeurService } from './serveur.service';

const serveurService = new ServeurService();

/*Classe contenant tous les routes relatives au Serveur*/
export class Route
{
    public init(router: express.Router)
    {
        //home page
        router.get('/', serveurService.index.bind(serveurService.index));
    }
}
