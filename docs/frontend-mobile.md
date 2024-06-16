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

O Banco de dados será composto por 08 tabelas, sendo elas: paciente, medico, horarios, consultas, usuario, acess_token, prontuarios, clinica que possibilitam o armazenamento dos dados da aplicação.

![Fluxograma](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/fluxograma1M.jpg)

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
- #F1F1F1 
- #505050
- #D1D1D1

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

1. Animações e transições: 

Objetivos: 

* Tornar a interface mais fluida e responsiva; 
* Ajudar os usuários a entender melhor as mudanças na interface; 
* Melhorar a experiência geral do usuário. 

2.Tipos de Animações: 

Transições de Página:

* Deslizamento (Slide): Transições suaves entre páginas, onde a nova página desliza para dentro enquanto a página atual desliza para fora. 

Animações de Elementos:

* Botões e Ícones: Efeitos de toque, o tamanho dos botões será levemente aumentado ao ser pressionado. 

* Campos de Formulário: Campos de formulários ao receber foco ou mostrar uma animação de erro se a validação falhar. 

3. Feedback Visual 

Objetivos: 

* Fornecer aos usuários uma indicação de que suas ações foram reconhecidas; 
* Melhorar a interação com a interface. 
* Exemplos de Feedback Visual: 

Botões: 

* Destaque (aumento) ao ser pressionado. 
* Pequenas animações de pulsação ao passar o mouse. 

Formulários: 

* Destaque ao redor dos campos ativos. 
* Mensagens de validação instantânea ao inserir dados incorretos. 

4. Animações de Carregamento 

Objetivos: 

* Informar os usuários que uma ação está em andamento. 
* Reduzir a percepção de tempo de espera. 

Exemplos de Animações de Carregamento: 

* Spinner: Um ícone de carregamento circular que gira enquanto dados estão sendo carregados. 

De forma geral, incorporar animações, transições suaves e interações responsivas na interface da aplicação melhora significativamente a experiência do usuário. Utilizando técnicas de CSS e JavaScript, é possível criar uma interface não apenas funcional, mas também agradável e intuitiva.

## Fluxo de Dados

O fluxo de dados consiste na troca de dados entre a Aplicação Mobile e os usuários, de modo permitir o agendamento de consultas e visualização de prontuários. 

Na figura abaixo, está descrita o fluxo de funcionalidades que o paciente poderá efetuar.

![Fluxo de dados](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/fluxograma3.jpg)

Registro/Login do Usuário: O usuário acessa o sistema e se registra usando informações pessoais básicas (e-mail e senha). Após o registro, ele pode fazer login no sistema. 

Página Principal: Após o login, o usuário é direcionado para a página principal, onde pode ver as opções da aplicação (consultas e prontuários). 

Consultas: Na respectiva tela, o usuário consegue visualizar e filtrar as consultas por médico, status ou data, também sendo possível o agendamento de uma nova consulta, onde irá fornecer detalhes como especialidade médica desejada, médico, data e hora preferenciais. Essas informações são enviadas ao servidor do sistema. Após o envio dos detalhes da consulta, o servidor verifica a disponibilidade do médico e confirma a marcação da consulta. O usuário recebe uma notificação confirmando o agendamento. 

Prontuários: O usuário pode acessar seus prontuários médicos anteriores, que são armazenados de forma segura no servidor. Ele pode visualizar informações como diagnósticos anteriores, prescrições médicas e resultados de exames. 

Notificações: O aplicativo pode enviar notificações para lembrar o usuário de suas consultas agendadas. 

## Requisitos Funcionais

|ID    | Descrição do Requisito                                                                | Prioridade |
|------|---------------------------------------------------------------------------------------|----|
|RF-001|Autenticar usuários |Alta|                                                           |RF-002|Gerenciar dados pessoais|Alta| 
|RF-003|Gerenciar consultas  |Alta|   
|RF-004|Visualizar prontuário médico |Alta|   
|RF-005|Redefinir senha | Média|   
|RF-006|Notificar sobre consultas | Baixa|   

## Requisitos Não Funcionais

|ID    | Descrição do Requisito                                                                | Prioridade |
|------|---------------------------------------------------------------------------------------|----|
|RNF-001|A interface do usuário deve ser intuitiva e fácil de usar, com navegação clara e design responsivo. | Alta|   
|RNF-002|Os usuários devem ter controle sobre seus dados pessoais, incluindo a capacidade de visualizar e editar informações. |Alta|   
|RNF-003|A aplicação deve processar requisições do usuário em no máximo 3s |Baixa|   

## Considerações de Segurança

Autenticação e autorização: 

* Autenticação: Utilizamos um método de autenticação criado pelos nossos desenvolvedores, no qual é enviado um token pelo usuário sempre que forem realizadas solicitações na API para evitar acesso indevido por usuários não autenticados à rotas sensíveis. Esse token é validado e possui tempo de expiração. 

* Senhas: Armazenamos senhas de forma segura usando técnicas de hashing para proteger contra ataques de força bruta. 

Proteção contra alguns ataques: 

* SQL Injection: Utilizamos consultas parametrizadas com ORM (Object-Relational Mapping) para evitar ataques de injeção de SQL. 

* Cross-Site Request Forgery (CSRF): Implementamos o uso de tokens em todas as requisições a serem feitas na API para prevenir esse tipo de ataque. 

* HTTPS: Utilizamos conexões HTTPS seguras para criptografar dados transmitidos entre o cliente e o servidor, evitando interceptações por atacantes. 

* Configuramos firewalls e filtros de tráfego para detectar e bloquear tráfego malicioso de origem desconhecida ou com padrões suspeitos no servidor. 

* XSS: Utilizamos framework que oferece proteção automática contra XSS, como AngularJS no front-end que conta com medidas de segurança embutidas para dificultar essas ações. 

## Implantação

1. Para a implantação da aplicação Mobile, foram realizadas as configurações necessárias e utilizados: 

2. Servidor com hospedagem na AWS; sistema operacional compatível com Apache, MySQL e Windows; 

3. Banco de dados desenvolvido em MySQL; 

4. API desenvolvida com PHP Lumen para intermediar o fluxo de dados entre o aplicativo e o Banco de dados; 

5. O software Expo para desenvolvimento da aplicação mobile, a ser disponibilizado em Loja de aplicativo; Sendo os códigos salvos no Github; 
 

## Testes

Foram elaborados os seguintes casos de teste para a aplicação mobile: 

**Caso de teste: 1** <br>
Resumo: Login de Paciente – Dados corretos <br>
Requisito: RF-001 <br>
Prioridade: Alta <br>
Pré-condição: Estar cadastrado no sistema, dados de login corretos <br>

Passos:  

1. Acessar o app; 
2. Preencher com os dados de email e senha; 
3. Clique no botão “Acessar”. 

Resultado Esperado: Exibir modal com a mensagem “Login realizado com sucesso !” e redirecionamento para Página Inicial. 

----

**Caso de teste: 2** <br>
Resumo: Login de Paciente – Dados incorretos <br>
Requisito: RF-001 <br>
Prioridade: Alta <br>
Pré-condição: Usuário sem cadastro <br>

1. Acessar o app ConsulMed; 
2. Preencher com os dados de email e senha; 
3. Clique no botão “Acessar”. 

Resultado Esperado: Exibir modal com a mensagem “ Dados incorretos. Tente novamente!”   

----

**Caso de teste: 3** <br>
Resumo: Login de Paciente – Usuário não cadastrado  <br>
Requisito: RF-001  <br>
Prioridade: Alta  <br>
Pré-condição: Usuário não cadastrado  <br>

Passos:  
1. Acessar o app ConsulMed; 
2. Preencher com os dados de email e senha; 
3. Clique no botão “Acessar”. 

Resultado Esperado: Exibir modal com a mensagem “Clique em cadastrar e preencha com seus dados” 

----
 
**Caso de teste: 4**  <br>
Resumo:  Gerenciar dados pessoais – Edição  <br>
Requisito: RF-002  <br>
Prioridade: Alta  <br>
Pré-condição: Usuário já cadastrado  <br>

Passos:
 
1. Acessar o app; 
2. Preencher com os dados de email e senha corretos; 
3. Clique no ícone de usuário “Dados Pessoais”. 
4. Abre uma modal com os dados cadastrados para edição; 
5. Clicar no botão “Editar” 
6. Digitar a alterações nos dados; 
7. Clicar no botão “Salvar” 
 
Resultado Esperado: Exibir modal com a mensagem “Dados Pessoais alterados!” e redirecionamento para Página Inicial 
 
----

**Caso de teste: 5**  <br>
Resumo:  Gerenciar dados pessoais - Cadastro  <br>
Requisito: RF-002  <br>
Prioridade: Alta  <br>
Pré-condição: Novo usuário/Primeiro acesso  <br>

Passos:  

1. Acessar o app; 
2. Clicar no texto “Primeiro acesso”; 
3. Preencher com os dados de email e senha; 
4. Clicar no botão “Salvar”, será redirecionado para Página de Login; 
5. Digitar email e senha corretos; 
6. Clicar no botão “Acessar” 
7. Abre uma modal com os dados de cadastro de paciente para edição; 
8. Clicar em “Editar”; 
9. Digitar dados para alteração; 
10. Clicar no botão “Salvar”; 
 
Resultado Esperado: Exibir modal com a mensagem “Dados Pessoais alterados!” e redirecionamento para Página Inicial 

-----

**Caso de teste: 6**  <br>
Resumo:  Gerenciar consultas  –  cadastro  <br>
Requisito: RF-003  <br>
Prioridade: Alta  <br>
Pré-condição: Cadastro no Sistema e Login  <br>

Passos:  
1. Acessar o app; 
2. Login; 
3. Página inicial clicar em consultas; 
4. Abrir Página de Consultas; 
5. Clicar no ícone “ + “ 
6. Abrir modal com nome e CPF do paciente, opção de escolha de especialidade médica, nome do Médico, data da consulta, horário de início; 
7. Clicar no botão “Salvar”. 

Resultado Esperado: Exibir modal com a mensagem “Consulta agendada” e redirecionamento para Página de Consultas. 

 -----

**Caso de teste: 7**  <br>
Resumo:  Gerenciar consultas  –  edição  <br>
Requisito: RF-003  <br>
Prioridade: Alta  <br>
Pré-condição: Cadastro no Sistema e Login  <br>

Passos:  
1. Acessar o app; 
2. Página inicial clicar em consultas; 
3. Abrir Página de Consultas; 
4. Na listagem de consultas, clicar no ícone do lápis, ao lado da consulta; 
5. Abrir modal com dados da consulta para edição; 
6. Clicar no botão “Salvar”; 

Resultado Esperado: Exibir modal com a mensagem “Consulta alterada agendada” e redirecionamento para Página de Consultas e alteração dos dados na listagem de consultas. 

-----

**Caso de teste: 8**  <br>
Resumo:  Gerenciar consultas  –  excluir  <br>
Requisito: RF-003  <br>
Prioridade: Alta   <br>
Pré-condição: Cadastro no Sistema e Login  <br>

Passos:  
1. Acessar o app; 
2. Login; 
3. Página inicial clicar em consultas; 
4. Abrir Página de Consultas; 
6. Na listagem de consultas, clicar no ícone da lixeira, ao lado da consulta; 
7. Abrir modal mostrando dados da consulta e solicitando a confirmação da exclusão da consulta; 
8. Clicar no botão “Excluir”; 
 
Resultado Esperado: Exibir modal com a mensagem “Consulta excluída” e redirecionamento para Página de Consultas e alteração dos dados na listagem de consultas. 

-----

**Caso de teste: 9**  <br>
Resumo:  Visualizar consultas  <br>
Requisito: RF-004  <br>
Prioridade: Alta  <br>
Pré-condição: Cadastro no Sistema e Login  <br>

Passos:  
1. Acessar o app; 
2. Login; 
3. Página inicial clicar em “Prontuário”; 
4. Abrir Página de prontuário; 
5. Na listagem de prontuário, clicar no ícone ao lado da consulta; 
6. Abrir modal mostrando dados do prontuário; 
7. Clicar no botão “x”; 

Resultado Esperado: Exibir modal com o prontuário selecionado e permitir fechar o modal do prontuário e retornar para página de prontuários. 

 -----------

**Caso de teste: 10**  <br>
Resumo: Login de Paciente – Esqueceu a senha  <br>
Requisito: RF-005  <br>
Prioridade: Média  <br>
Pré-condição: Usuário cadastrado  <br>

Passos:  
1. Acessar o app ConsulMed; 
2. Clique no texto “Esqueci minha senha” ; 
3. Preencha com o email; 
4. Clique no botão “Enviar”; 
5. Digite a nova senha; 
6. Repita a nova senha; 
7. Clique em “Redefinir” 
8.Clique no texto “Voltar para tela de login” 

Resultado Esperado: Exibir modal com a mensagem “Troca de senha efetuada com sucesso!”  

------

**Caso de teste: 11**  <br>
Resumo:  Notificação de  consultas   <br>
Requisito: RF-006  <br>
Prioridade: Baixa  <br>
Pré-condição: Cadastro no Sistema e Login  <br>

Passos:  
1.Acessar o app; 
2.Login; 
3. Página Inicial, ícone "sino" no canto superior direito com alteração na cor. 

Resultado Esperado: Exibir notificação de consulta caso tenha alguma agendada com as informações da mesma. 




# Referências

ALITA, Joyce (2023). Protótipos vs. Wireframes em projetos UX. Disponível em: https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/ Acesso em: 10 de maio de 2024. 

CASSIC (2023). Padrões de codificação. Disponível em: https://www.devmedia.com.br/padroes-de-codificacao/16529 Acesso em: 10 de maio de 2024. 

DINIZ, Bárbara (2023). Notação BPMN: como aplicar para modelar processos? Entenda etapas. Disponível em: https://www.sydle.com/br/blog/notacao-bpmn-5ef510823130175de40cc4c2/ Acesso em: 7 de maio de 2024. 

Redator Rock Content (2019). Wireframes: quais os tipos e as principais ferramentas de criação. Disponível em: https://rockcontent.com/br/blog/wireframes/ Acesso em: 13 de maio de 2024. 

RIBEIRO, Daniel (2019). Fluxograma online. Disponível em: https://www.techtudo.com.br/listas/2019/03/fluxograma-online-seis-sites-para-fazer-grafico-sem-instalar-nada.ghtml Acesso em: 7 de maio de 2024. 

RUGGIERIO, Ruggero (2016). Análise sobre a ISO 9126 – NBR 13596. Disponível em: https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/ Acesso em: 10 de maio de 2024. 

TADEU, Matheus (2019). Consumindo API REST com autenticação JWT no React Native. Disponível em: https://medium.com/reactbrasil/consumindo-api-rest-com-autentica%C3%A7%C3%A3o-jwt-no-react-native-eec62b852ff3 Acesso em: 10 de maio de 2024. 
