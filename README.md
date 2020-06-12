<h1 align="center">
<br>
  <img src="logo.png" width="auto" height="40" alt="marvel-heroes-app">
<br>
<br>
Marvel Heroes App
</h1>

<p align="center">Aplicativo simples que lista personagens da Marvel e suas informações como biografia, níveis de habilidade e participações em filmes.</p>

<div>
  <img src="cover.png" alt="marvel-heroes-app">
</div>

<hr />

## Sobre o projeto

Aplicativo proposto como desafio pela <a href="https://umpontoseis.com/" target="_blank">umpontoseis</a> no site de desafios <a href="https://devchallenge.now.sh" target="_blank">DevChallenge</a> onde objetivo é desenvolver um app uque liste alguns personagens da Marvel e suas caracteristicas, tudo isso seguindo o design proposto proposto e utilizando os dados fornecidos.

## Desenvolvido utilizando

- ⚛️ **React native** — Aplicativo mobile
- ⚛️ **Expo** — Ferramenta de desenvolvimento
- 📱 **Expo linear gradient** — Efeito de gradient nas imagens
- 🖼 **React native expo image cache** — Cache das imagens
- 🎨 **React native shared element** — Efeito de transição entre as rotas
- 💅 **Styled components** — Estilização dos componentes

## 💻 Rodando a aplicação

Após fazer o clone do repositório e navegar até a pasta do mesmo entre na pasta mobile e em uma nova janela de terminal execute o comando ```npm install```.

Após concluir a instalação dos pacotes, deentro da pasta mobile renomeie o arquivo chamado ```.env-example``` para ```.env```, após isso abra o arquivo e troque o endereço 0.0.0.0 pelo endereço de IP do seu computador.

Abra um terminal dentro da pasta server e execute o comando ```npx json-server application.json --host SEU_ENDEREÇO_DE_IP -p 3333``` para iniciar o server, lembre-se de colocar o mesmo endereço de IP utilizado no arquivo .env da pasta mobile.

Após isso, no terminal da pasta mobile execute o comando ```expo start``` para iniciar o app e com seu smartphone escaneie o QR code que aparece no terminal utilizando o Expo, app que está disponivel na App store e na Play store.
