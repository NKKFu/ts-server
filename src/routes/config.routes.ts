import { Request, Response, Router } from 'express';

const routes = Router();

interface configInteface {
    data: String
}

const configsList: configInteface[] = [];

routes.post('/config', (request: Request, response: Response) => {
    const requestData = request.body;

    configsList.push({
        data: requestData['data']
    });

    response.status(200).send();
});

routes.get('/config', (request: Request, response: Response) => {
    response.send(configsList);
});

export default routes;