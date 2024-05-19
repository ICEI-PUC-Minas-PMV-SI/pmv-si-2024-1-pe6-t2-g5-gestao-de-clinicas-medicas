# Front-end Web

O projeto consiste em uma aplicação web para gestão de consultas médicas em clínicas, focada em otimizar o agendamento, registro de prontuários e comunicação entre pacientes e profissionais de saúde. Seu objetivo principal é melhorar a eficiência operacional e proporcionar uma experiência satisfatória para todos os usuários envolvidos, visando aprimorar a qualidade dos serviços de saúde oferecidos.

## Tecnologias Utilizadas

### Tecnologias: 
* API -  Lumen (PHP)  
* WEB - Angular (Java), Typescript, Bootstrap 

### Bibliotecas: 
* Angular Material 

### Ferramentas: 
* Figma 
* VS CODE 
* Expo 
* Github 
* AWS
* DrawSQL 
* Workbench 
* Amazon RDS 
* Altair Autentique (Requisições Online)
  
## Arquitetura

A arquitetura da aplicação web segue o padrão de arquitetura cliente-servidor. No cliente, o front-end é desenvolvido em Angular, utilizando TypeScript e Bootstrap para a criação de componentes de interface de usuário. O front-end interage com o servidor por meio de requisições HTTP para acessar e manipular dados do back-end.

O servidor, implementado com Lumen em PHP, oferece uma API RESTful para comunicação entre o front-end e o banco de dados. Ele gerencia as requisições dos clientes, processa operações solicitadas e retorna os dados correspondentes. O servidor se comunica com o banco de dados MySQL para recuperar e armazenar informações sobre consultas, pacientes, médicos e outras entidades.

## Projeto da Interface Web

O projeto foi desenvolvido com foco na usabilidade, eficiência e experiência do usuário. O design visual da aplicação é limpo, moderno e profissional, com uma paleta de cores predominantemente verde e branco, proporcionando uma sensação de tranquilidade associada ao ambiente médico. O contraste com preto e cinza é usado para destacar informações importantes e elementos de navegação. As páginas da aplicação foram organizadas de forma lógica e intuitiva, facilitando a navegação e o acesso às funcionalidades principais. 

Página de Login - Permite que os usuários façam login na aplicação utilizando suas credenciais. Página Principal - Apresenta um resumo das próximas consultas agendadas e fornece acesso rápido às funcionalidades mais utilizadas.
Página de Agendamento de Consultas - Permite que os usuários agendem novas consultas selecionando o médico, dados e horários desejados.
Página de Perfil do Paciente - Exibe informações fornecidas sobre o paciente, como histórico médico, consultas agendadas e medicamentos prescritos.
Página de Registro de Prontuários - Permite que os profissionais de saúde registrem informações fornecidas sobre o atendimento e tratamento de um paciente.
Página de Relatórios e Estatísticas - Apresenta relatórios dos dados gerenciais da clinica.

## Wireframes

![Login](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/login.png)

![Home](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/inicioadm.png)

![Dashboards](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/dashboards.png)

![Clínica](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/clinica.png)

![Usuários](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/usuarios.png)

![Médicos](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/medicos.png)

![Pacientes](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/pacientes.png)

![Consunltas](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/consultas.png)

![Prontuários adm](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/prontuariosadm.png)

![Relatórios](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/relatorios.png)


## Design Visual

![Design](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/estilo.png)

Buscamos para o desenvolvimento da ConsulMed um estilo visual clean, moderno e acolhedor, elaborado para transmitir profissionalismo, organização e confiabilidade. 

### Cores:
* #007954
* #FFFFFF
* #282828

* #BADDC0 60%
* #FFD6D6 60%
* #F1F1F1
* #505050


### Tipografia:

Roboto Flex - Uma fonte sans-serif moderna e profissional, que oferece excelente legibilidade tanto em telas quanto em impressos.

### Ícones:

Material Design Icons - Ícones simples, modernos e consistentes, que representam as funcionalidades do sistema de forma clara e intuitiva. 

### Padronização das telas: 

Layout: As telas do sistema seguirão um layout consistente, com elementos dispostos de forma organizada e intuitiva, facilitando a navegação dos usuários.

Hierarquia visual: A hierarquia visual será definida através do uso de cores, tamanhos de fonte e espaçamentos, guiando o olhar do usuário para os elementos mais importantes da tela.

Elementos reutilizáveis: Módulos e componentes reutilizáveis serão utilizados para garantir a consistência da interface em todas as telas do sistema. 

### Layout Responsivo

Médidas padrão para SmartPhones: max-width: 768px

Médidas padrão para Tablet: min-width: 768px, max-width: 992px

Médidas padrão para Computadores e Televisores: min-width: 992px
  
## Implantação

Para implantar a aplicação em um ambiente de produção, é necessário:

Requisitos de Hardware e Software:
Hardware:
* Um servidor com capacidade adequada de processamento e memória. Um provedor de nuvem que ofereça escalabilidade.

Software:
* Sistema operacional compatível, como Linux , Ubuntu, CentOS, etc.
* Servidor web, como Nginx ou Apache, para servir o frontend.
* Banco de dados MySQL preferencialmente em um servidor separado para melhor desempenho.

Plataforma de Hospedagem:
Provedor de Nuvem:
* AWS (Amazon Web Services), Google Cloud Platform, Microsoft Azure oferecem opções de hospedagem flexíveis e escaláveis.
  
Configuração do Ambiente de Implantação:
Instalação de Dependências:

* No servidor, instale o PHP e as bibliotecas necessárias para executar o backend Lumen.
* Instale o servidor web (Nginx ou Apache) e configure-o para servir os arquivos estáticos do frontend.
  
Variáveis de Ambiente:

* Configure as variáveis de ambiente necessárias, como chaves de API, configurações de banco de dados, etc.
* Utilize arquivos de configuração separados para ambientes de desenvolvimento e produção.

Deploy da Aplicação:
Obtenha o Código:

* Clone o repositório da aplicação do GitHub para o servidor.

Compilação e Build do Frontend:

* No ambiente de desenvolvimento, o Angular CLI é usado para compilar o código TypeScript em JavaScript. Isso geralmente é feito usando o comando ng build --prod. Os arquivos estáticos gerados devem ser servidos pelo servidor web.

Configuração do Banco de Dados:

* Configure o banco de dados MySQL, criando o esquema e as tabelas necessárias.

Configuração do Servidor Web:

* Configure o servidor web (Nginx ou Apache) para rotear as solicitações para o backend Flask e servir os arquivos estáticos do frontend.

## Testes

Foi utilizado o E2E como tipo de teste para a aplicação. 

### Requisitos Funcionais:

|ID    | Descrição do Requisito                                                                | Prioridade | Condição |
|------|---------------------------------------------------------------------------------------|----|-------------------------------|
|RF-001| Web - Login usuários                                                                  | ALTA | Concluído |
|RF-002| Web - Logout usuários                                                                 | ALTA | Concluído |
|RF-003| Web - Cadastrar/Consultar/Alterar dados da clínica/consultórios                       | ALTA | Parcialmente Concluído |
|RF-004| Web - Cadastrar/Alterar/ Excluir dados de funcionários usuários                       | ALTA | Parcialmente Concluído |
|RF-005| Web - Cadastrar/Consultar/Alterar/ Excluir dados de especialidades médicas            | ALTA | Parcialmente Concluído |
|RF-006| Web - Cadastrar/Consultar/Alterar/ Excluir dados de pacientes                         | ALTA | Parcialmente Concluído |
|RF-007| Web - Cadastrar/Consultar/Alterar/ Excluir dados de agenda dos médicos                | ALTA | Parcialmente Concluído |
|RF-008| Web - Cadastrar/Consultar/Alterar/ Excluir dados de agenda dos pacientes              | ALTA | Parcialmente Concluído |
|RF-009| Web - Cadastrar/Consultar/Alterar/ Excluir dados de agenda dos consultórios           | ALTA | Parcialmente Concluído |
|RF-010| Web - Cadastrar/Consultar/Alterar/ Excluir prontuário médico                          | ALTA | Parcialmente Concluído |
|RF-011| Web - Visualização de consulta agendadas para pacientes                               | MÉDIA | Parcialmente Concluído |
|RF-012|      Web – Trocar senha                                                               | MÉDIA | Pendente |
|RF-013| Web - Visualização da agenda do médico                                                | BAIXA| Pendente |

### Requisitos não Funcionais

|ID     | Descrição do Requisito                                            |Prioridade | Condição |
|-------|-------------------------------------------------------------------|------|-----------------|
|RNF-001| A aplicação deve ter boa usabilidade                              | ALTA | Concluído |
|RNF-002| A aplicação deve ser multiplataforma                              | ALTA | Parcialmente Concluído |
|RNF-003| A aplicação deve ter confiabilidade                               | MÉDIA | Concluído |
|RNF-004| A aplicação deve ser responsiva para rodar em dispositivos móveis | BAIXA | Concluído |
|RNF-005| A aplicação deve processar requisições do usuário em no máximo 3s | BAIXA | Concluído |

### Teste de carga da aplicação 

Ferramentas utilizadas: 

* Apache JMeter
![Captura de tela 2024-05-19 174602](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/8398a352-a791-45d4-b73d-fd9e9ea7ff76)

