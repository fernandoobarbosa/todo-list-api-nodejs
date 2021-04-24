# Meu Projeto

## Descrição
Este é meu projeto para estudo de nodejs

## Pré-Requisitos
- NodeJS 

## Executando o projeto
- Clone o repositório
- Acesse a pasta raiz e execute o seguinte comando:
```
  npm install
  npm start
```

## Rotas Disponíveis


### Autenticação
*POST /authentication* - Retorna o token de autenticação do usuário 
---
#### Parâmetros: 
| Nome            | Local  | Descrição           | Exemplo              | 
|-----------------|--------|---------------------|----------------------|
| login           | body   | login do usuário    | "meulogin"           |
| password        | body   | senha do usuário    | "minhasenha123"      |


#### Retornos:
| Status | Descrição             | Body                                     |
|--------|-----------------------|------------------------------------------|
| 200    | Login  válido         | objeto com o token de autorização        |
| 401    | Login  inválido       | objeto descrevendo o erro                |

---

### Criar novo usuário
*POST /user* - Cria um novo usuário 
---
#### Parâmetros: 
| Key            | Local    | Descrição         | Value                     | 
|----------------|-------   |-------------------|---------------------------|
| Content-Type   | headers  | aplicacao json    | application/json          |
| x-access-token | headers  | token de acesso   | token retornado no login  |


#### :
| Status | Descrição             | Body                                     |
|--------|-----------------------|------------------------------------------|
| 201    | usuario criado        | objeto com o usuario criado              |
| 401    | erro na criação       | objeto descrevendo o erro na criação     |

---

### Usuários
*GET /users* - Retorna todos os usuários
---
#### Parâmetros: 
| Key            | Local    | Descrição         | Value                     | 
|----------------|-------   |-------------------|---------------------------|
| Content-Type   | headers  | aplicacao json    | application/json          |
| x-access-token | headers  | token de acesso   | token retornado no login  |


#### Retornos:
| Status | Descrição                  | Body                                     |
|--------|----------------------------|------------------------------------------|
| 200    | usuários                   | objeto com os usuários                   |
| 400    | erro para obter transação  | objeto descrevendo o erro                |

---



# nodejs-project
