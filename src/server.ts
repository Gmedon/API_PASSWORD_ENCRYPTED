import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import cors from 'cors';
import apiRoutes from './routes/api';

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint não encontrado.' });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if(err.status) {
        res.status(err.status)
    }else {
        res.status(400)
    }
    if(err.message) {
        res.json({error: err.message})
    }else {
        res.json({error: "Não autorizado"})
    }

}
server.use(errorHandler);

server.listen(4000);