import * as express from 'express';

export class Route
{
  public myHomeFct(req : express.Request, res: express.Response, next: express.NextFunction)
  {
    res.send(JSON.stringify('Bienvenue!'));
  }
  public init(router : express.Router)
  {
    //home page
    router.get('/', this.myHomeFct.bind(this.myHomeFct));
  }
}