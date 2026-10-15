Esse é um exercício que fiz para estudar React. 
É um accordion, algo bem comum em sites modernos. 

As tecnologias utilizadas são:

-React
-Typecript
-CSS

Como rodar esse projeto ? 

Baixe o projeto para sua máquina. 
Abra o terminal e rode o seguinte comando:

docker build -t meu-accordion .

Então, rode esse comando

docker run --name meu-accordion -p 8080:80 -d meu-accordion

Agora acesse no navegador:

http://localhost:8080 
