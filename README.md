**Documentação do projeto Clima Inclusivo**

**Apresentação do projeto**

Esse projeto foi desenvolvido pela turma acelerado inclusiva com intuidto de criar aplicação Web que forneçe insformações climaticas acessiveis e uteis, considerando as necessidades dos usuarios afetados, por eventos climaticos e extremos como enchentes, aplicação foi desenvolvido por React e boas práticas

**Objetivo**

O objetivo do Clima Inclusivo é:

Fornecer informações meteorológicas em tempo real para a população, com foco especial em alertas de eventos extremos. Tornar os dados climáticos acessíveis, inclusive para pessoas com deficiência. Ajudar comunidades vulneráveis a se prepararem melhor para eventos climáticos severos, promovendo segurança e bem-estar. Ferramentas Utilizadas As principais ferramentas e tecnologias utilizadas no desenvolvimento do projeto são:


**Ferramentas Utilizadas**

React: Biblioteca JavaScript para construção da interface de usuário. Node.js: Para configuração do backend e gerenciamento de dependências. Git e GitHub: Controle de versão e hospedagem do código. API Meteorológica: Utilização de serviços como OpenWeatherMap ou outros para fornecimento de dados climáticos.

**Estrutura do projeto**

/clima-inclusivo

│

├── /src

│ ├── /components # Componentes reutilizáveis da interface

│ ├── /pages # Páginas principais da aplicação

│ ├── /services # Serviços para consumo de APIs

│ ├── /styles # Arquivos de estilização (CSS/Tailwind)

│ └── index.js # Arquivo principal de entrada da aplicação
│

├── /public # Recursos públicos como imagens e ícones

├── package.json # Dependências e scripts do projeto

└── README.md # Documentação inicial do projeto


**Guia de Instalação**

Node.js (versão 14 ou superior) instalado em sua máquina. Um gerenciador de pacotes como npm ou yarn.

Clonando o repositório:

git clone https://github.com/seu-usuario/clima-inclusivo.git cd clima-inclusivo Instalando dependências:

npm install Executando o projeto:

npm start Acesse o projeto no navegador em http://localhost:3000.

**Comando Essenciais GIT** 

- git clone (Link do projeto) 
- cd clima-inclusivo (acessa pasta do projeto)
- Criando uma nova branch
- git checkout -b nome-da-sua-branch
  Adicionando as alterações
- git add .
  Realizando o commit
- git commit -m "Descrição das alterações realizadas"
  Enviando as alterações para o repositório remoto
- git push origin nome-da-sua-branch
  Atualizando sua branch local
- git pull origin main
  Fluxo de trabalho
- git clone - Clonar o projeto.
- git checkout -b nome-da-sua-branch - Criar uma nova branch.
  Realizar alterações no código.
- git add . - Adicionar arquivos.
- git commit -m "Mensagem do commit" - Salvar alterações.
- git push origin nome-da-sua-branch - Enviar alterações.
- git pull origin main - Atualizar branch local.
  alerta( nome da branch é relacionado com o nome da tarefa )
  exemplo: CriarComponenteSobre 
  nome da branch : criar-componente-sobre


**Funcionalidades Principais**

Consulta de Informações Climáticas

Dados atualizados em tempo real sobre condições climáticas. Alertas de eventos climáticos extremos, como enchentes. Interface Acessível

Design responsivo para diferentes dispositivos. Compatibilidade com leitores de tela. Personalização

Configuração de notificações baseadas na localização do usuário. Histórico Climático

Visualização de dados passados para análise de tendências.


**Referencias**

1- [OpenWeatherMap] (https://openweathermap.org/) - link API do Projeito

2- [MDN Web Docs] - CSS (https://react.dev/) 

3- https://developer.mozilla.org/en-US/docs/Web/CSS

