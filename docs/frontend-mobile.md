# Front-end Móvel

A versão mobile da aplicação será voltada exclusivamente para os pacientes, com o objetivo de fornecer uma experiência intuitiva e eficiente para simplificar o processo de agendamento de consultas médicas e a visualização de prontuários. 

Disponibilizando uma experiência de usuário agradável, visando melhorar a experiência geral do paciente, promovendo assim uma maior participação no cuidado da saúde e contribuindo para uma prestação de serviços médicos mais eficiente e personalizada. 

## Tecnologias Utilizadas
Para o desenvolvimento da referente aplicação, foram utilizadas as seguintes tecnologias:
- Figma 

- Lucidchart 

- React Native 

- Expo 

## Arquitetura

#### Interface do Usuário (UI): 

A UI é composta por diferentes componentes visuais, como telas, botões, campos de entrada e elementos de navegação; Responsável por apresentar informações ao usuário e capturar interações do mesmo, como toques, deslizes e entradas de texto. 

#### Lógica de Negócio (Business Logic): 

A lógica de negócio da aplicação móvel lida com a manipulação e processamento dos dados da aplicação; Incluindo a lógica para agendar consultas, visualizar prontuários médicos, autenticar usuários, validar entradas e interagir com o servidor. 

#### Serviços de Rede (Network Services): 

Os serviços de rede são responsáveis por realizar comunicação com o servidor backend da aplicação. Eles enviam solicitações para recuperar ou enviar dados, como agendar consultas, obter prontuários médicos e autenticar usuários. 

#### Armazenamento Local (Local Storage): 

O armazenamento local da aplicação é utilizado para manter dados temporários ou persistentes no dispositivo móvel. Isso pode incluir cache de dados, armazenamento de preferências do usuário e dados offline. 

## Modelagem da Aplicação

Para a Aplicação Mobile optou-se por focar em funcionalidades para os pacientes da clínica, possibilitando: 

1. Cadastro do usuário para acesso ao sistema; 
2. Cadastro de paciente 
3. Agendamento de consultas; 
4. Visualização de prontuário; 
5. Redefinição de senha. 

O Banco de dados será composto por 08 tabelas, sendo elas: paciente, medico, horarios, consultas, usuario, acess_token, prontuarios, clinica que possibilitam o armazenamento dos dados da aplicação. O fluxograma descreve a interação entre os processos da aplicação para atendimento aos pacientes da clínica.

****[Incluir imagem do fluxograma]****

## Projeto da Interface

O respectivo projeto de interface móvel visa estabelecer uma experiência intuitiva e eficiente para os pacientes. Desenvolvemos um design centrado no usuário, com foco na facilidade de uso, acessibilidade e eficiência. 

- Utilizamos cores nos tons de verde e cinza buscando transmitir uma sensação de calma e profissionalismo, com alguns destaques para informações e/ou ações importantes; 
- Optamos por ícones intuitivos que representem claramente as funcionalidades da aplicação; 
- Escolhemos uma fonte legível, tanto para títulos quanto para texto corrido, garantindo uma experiência de leitura confortável;
- Buscamos padronizar os layouts visando uma fácil compreensão de funcionalidades das páginas disponíveis;                               - O usuário conseguirá visualizar e editar tanto seus dados pessoais (nome, contato, endereço...) quanto dados de login (usuário e senha);                           
- Priorizamos uma navegação simples e intuitiva, com um menu fixo na tela inicial de fácil acesso;                                       
- Dispomos transições suaves entre telas para proporcionar uma experiência fluida; 
- Feedbacks visuais serão apresentados ao usuário após a realização de uma ação, como uma confirmação de que a consulta foi agendada com sucesso; 
- O design será responsivo e compatível com uma variedade de dispositivos móveis, desde smartphones até tablets, para garantir uma experiência consistente em todas as plataformas. 

### Wireframes
[Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.]

### Design Visual
Buscamos para o desenvolvimento da ConsulMed um estilo visual clean, moderno e acolhedor, elaborado para transmitir profissionalismo, organização e confiabilidade. 

#### Cores: 

- #007954 
- #FFFFFF 
- #282828 
- #BADDC0 60% 
- #F1F1F1 
- #505050 

#### Tipografia: 

Roboto Flex - Uma fonte sans-serif moderna e profissional, que oferece excelente legibilidade tanto em telas quanto em impressos. 

#### Ícones: 

Material Design Icons - Ícones simples, modernos e consistentes, que representam as funcionalidades do sistema de forma clara e intuitiva. 

#### Padronização das telas: 

- As telas do sistema seguirão um layout consistente, com elementos dispostos de forma organizada e intuitiva, facilitando a navegação dos usuários;
- A hierarquia visual será definida através do uso de cores, tamanhos de fonte e espaçamentos, guiando o olhar do usuário para os elementos mais importantes da tela;
- Módulos e componentes reutilizáveis serão utilizados para garantir a consistência da interface em todas as telas do sistema. 

### Layout Responsivo
Medidas padrão para SmartPhones: max-width: 768px; 

Medidas padrão para Tablet: min-width: 768px, max-width: 992px; 

Medidas padrão para Computadores e Televisores: min-width: 992px. 

### Interações do Usuário
[Descreva as interações do usuário na interface, como animações, transições entre páginas e outras interações.]

## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]

## Requisitos Funcionais

[Liste os principais requisitos funcionais da aplicação.]

## Requisitos Não Funcionais

[Liste os principais requisitos não funcionais da aplicação, como desempenho, segurança, escalabilidade, etc.]


## Considerações de Segurança

[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]

## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
