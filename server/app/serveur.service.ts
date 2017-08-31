import * as express from 'express';

/*Classe des services relatives aux requetes scrabble*/
export class ServeurService
{
    public attribut: string;

    public index(req: express.Request, res: express.Response, next: express.NextFunction)
    {
        res.send("Homepage");
    }
}
