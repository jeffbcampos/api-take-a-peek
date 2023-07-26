<p align="center">
  <img src="https://user-images.githubusercontent.com/60453269/220384874-f136b1f9-a852-4774-a600-7fab9d77e8a2.png" alt="Logo" width="300" height="200" />
</p>

<h1 align="center"> Api TachRate </h1>

<p align="center">
  <b> Todo  backend  da aplicação esta nesse repositorio </b></br>
  <sub> Uma documentação detalhada de toda a api do repositorio TechRate
  <sub>
</p>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Ideias">💡 Possíveis Melhorias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

<a id="Introdução"></a>
## 🧩 Introdução 

  ***⠀⠀⠀⠀Plataforma web voltada para reunir informações relevantes sobre empresas da área tech. A proposta é criar um portal onde funcionários possam repassar informações sobre empresas do setor que possam ser relevantes para possíveis candidatos. Dados como: Cultura da empresa, plano de carreira, stacks utilizadas, modelo de contratação(CLT X PJ) , remuneração e benefícios. A ideia é que pessoas buscando uma troca de empresa ou recolocação no mercado possam avaliar melhor suas escolhas na hora da candidatura.***

<br/>


<a id="Resultados"></a>
## 🚀 Resultados  
  > Todos os resultados foram alcançados com sucesso. De modo geral são esses os resultados de cada requisição. 

<br/>

## Back-end

<br/>

  
### 🎯 PEGAR TODOS OS DADOS DE UM USER ATRAVES DO ID 
  
### ```GET``` 
```URL
 http://localhost:3003/users/perfil
 
  {
    "authorization" : "aa670248-dbd3-402c-a824-c52646fc1196"
  }

```
  
```JSON
{
    "user": {
        "id": "62f7daf9-d523-4b2d-b0cd-94039c5c4082",
        "imgPerfil": "https://ovicio.com.br/wp-content/uploads/2020/09/20200916-d9ffbeb5e7862a243ce822bb89d12b66_750x750-555x555.jpg",
        "name": "Toshinori",
        "rgb": [
            57,
            82,
            65
        ]
    },
    "post": [
        {
            "img": "https://firebasestorage.googleapis.com/v0/b/rede-social-203d0.appspot.com/o/feed%2F1676760852632.webp?alt=media&token",
            "texto": "Outro",
            "rgb": [
                57,
                82,
                65
            ],
            "id": "322ea0a3-1657-4ad1-8f75-4a95a2832394",
            "date": "18/02/2023, 19:54:14",
            "idUserLike": null,
            "imgPerfil": "https://ovicio.com.br/wp-content/uploads/2020/09/20200916-d9ffbeb5e7862a243ce822bb89d12b66_750x750-555x555.jpg",
            "name": "Toshinori",
            "idUser": "62f7daf9-d523-4b2d-b0cd-94039c5c4082"
        },...
        }
```
  
<br /> 

### 🎯 REGISTRA UM USUÁRIO NO BANCO DE DADOS.
  
### ```POST``` 

```URL

http://localhost:3003/users/register

```
  
```JSON
{
    "name": "teste",
    "email": "teste@gmail.com",
    "password": "123456"
}

```

<br /> 

### 🎯 FAZ LOGIN
  
### ```POST``` 

```URL

http://localhost:3003/users/login

```
  
```JSON
{
    "email": "teste@gmail.com",
    "password": "123456"
}

```

<br /> 


### 🎯 PEGA TODOS OS POSTS
  
### ```GET``` 

```URL
http://localhost:3003/posts
```
  
```JSON
[
  {
    "id": "ed66e018-666f-40e9-a16f-510848491842",
    "date": "18/02/2023, 19:56:17",
    "img": "https://firebasestorage.googleapis.com/v0/b/rede-social-203d0.appspot.com/o/feed%2F1676760975303.jpg?alt=media&token",
    "idUser": "f27d54fd-2edb-4653-af60-bb311a00a5b3",
    "name": "Asui",
    "idUserLike": null,
    "rgb": [
      73,
      168,
      126
    ],
    "imgPerfil": "https://i.pinimg.com/originals/3a/2e/9a/3a2e9ab1fbf688f75f9227cc3c66951a.jpg",
    "texto": "E vai indo"
  },...
  ]

```

<br /> 

### 🎯 FAZ LOGIN
  
### ```POST``` 

```URL
http://localhost:3003/posts
```
  
```JSON
{
    "idUser": "f27d54fd-2edb-4653-af60-bb311a00a5b3",
    "texto": "olha eu kkkkk",
    "img": "Tem como mandar a imagem do pc ou mandar url da imagem, por padrão só tem como manda do pc"
}
```

<br />   

<a id="Dependências"></a>
## 🧪 Dependências
> Requisitos para rotar o codigo...

<br />   



## `📖 Scripts` 

```JSON
  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "dev": "tsnd --transpile-only --watch --respawn --ignore-watch node_modules src/server.ts",
    "test": "vitest --no-watch",
    "prepare": "husky install",
    "lint": "eslint"
  }
```
  

## `📖 Dependencies` 

```JSON
  "dependencies": {
    "@types/dotenv": "^8.2.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "vitest": "^0.29.7"
  }

```

<br /> 

## `📖 devDependencies` 


```JSON
  "devDependencies": {
    "@commitlint/cli": "^17.5.0",
    "@commitlint/config-conventional": "^17.4.4",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.17",
    "@types/node": "^18.15.9",
    "@typescript-eslint/eslint-plugin": "^5.56.0",
    "@typescript-eslint/parser": "^5.56.0",
    "eslint": "^8.36.0",
    "express": "^4.18.2",
    "husky": "^8.0.0",
    "lint-staged": "^13.2.0",
    "prettier": "^2.8.7",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.0.2"
  }

```


<a id="Ideias"></a>
## 💡 Possíveis Melhoras
> Possíveis melhorias no código e no projeto, caso queira voltar e melhorá lo.

<br />

  ### ***⠀⠀⠀⠀⭐ Acretido que todo projeto tem coisas que pode ser melhorado sendo assim aqui é uma area exclusiva para possiveis melhorias ou coisa que seria interessante ter no projeto, mas vai ficar para o futuro.***


<br /> 

- [ ] ***- Testa todo o código.*** 
- [ ] ***- Pesquisar o perfil com nome*** 
- [ ] ***- Criar funcionalides para notificações*** 
- [ ] ***- Criar funcionalides gostei***
- [ ] ***- Criar comentario em postagens***
- [ ] ***- Criar forma de compartilhar ou salvar post*** 
- [ ] ***- Adicionar amigos*** 
- [ ] ***- Ver post apenas de amigos***
- [ ] ***- Excluir Post***
- [ ] ***- Editar Post*** 


<br /> 

<a id="Creditos"></a>
## 🏆 Créditos


<br />

  ### ***⠀⠀⠀⠀⭐ Para todo projeto temos que dar creditos para os criadores então nada melhor do que finalizar com charme de ouro com os criadores/criador do projeto***

<br /> 

<div > 

| [<img src="https://user-images.githubusercontent.com/60453269/217899761-dc2d4e4b-3336-419d-9076-79304290aa0a.png" width=300><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | ***Hello 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Meu chama no linkedin 😁*** | [<img src="https://user-images.githubusercontent.com/60453269/217899761-dc2d4e4b-3336-419d-9076-79304290aa0a.png" width=300><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | ***Hello 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Meu chama no linkedin 😁*** | 

|---|---|---|---|


</div> 


# teste de numero gpt
