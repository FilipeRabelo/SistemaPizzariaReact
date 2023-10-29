// ROTAS DA APLICAÇÂO

// criando uma rota para a api
// qndo alguem chamar essa requisição

import {Router, Request, Response} from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {       // funcao calback
    // return res.json({ nome: "Pizzaria Forno de Xangô"})              // vai retornar um objeto json

    throw new Error("Erro ao fazer requisição")
})

export { router };