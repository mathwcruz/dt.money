import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

//criando um servidor "fake"
createServer({
  models: { //banco de dados
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Fone JBL',
          type: 'deposit',
          category: 'Desapego',
          amount: 170,
          createdAt: new Date('2021-03-13 10:20:00'),
        },
        {
          id: 2,
          title: 'Cerveja',
          type: 'withdraw',
          category: 'Bebida',
          amount: 27,
          createdAt: new Date('2021-03-15 11:45:00'),
        },
      ]
    })
  },

  routes() { //rotas
    this.namespace = 'api' //ao captar os dados da api pelo front, irá trazer dados a partir do namespace "api"

    this.get('/transactions', () => {
      return this.schema.all('transaction'); //retornando todas as transaçõs do banco de dados
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data); //cria no banco de dados uma nova transação
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
