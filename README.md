# Autenticação de Usuários com Node.js 

## Ferramentas
- **Framework**: Express
- **Autenticação**: JWT
- **Banco de Dados**: MongoDB
 
## Variáveis

Name | Value
------------ | -------------
PORT|3000
USER|
PASS|
SECRET|

## Estrutura

```
.
├── database                # Acesso de Dados
│   ├── controllers         # Gerenciador de Requisições
│   ├── models              # Modelos de Usuários
│   └── mongoConfig.js      # Inicialização do MongoDB
├── public                  # Arquivos Estáticos
├── routes                  
│   ├── middlewares         # Requisições de Middlewares
│   ├── auth.js             # Rotas
├── views                   # Implementação da View Engine
├── .env                    # Variáveis de Desenvolvimento
├── app.js                  # Ponto de Inicialização
├── package.json
└── README.md         
```
