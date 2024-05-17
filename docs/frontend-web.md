# Front-end Web

O projeto consiste em uma aplicação web para gestão de consultas médicas em clínicas, focada em otimizar o agendamento, registro de prontuários e comunicação entre pacientes e profissionais de saúde. Seu objetivo principal é melhorar a eficiência operacional e proporcionar uma experiência satisfatória para todos os usuários envolvidos, visando aprimorar a qualidade dos serviços de saúde oferecidos.

## Tecnologias Utilizadas

### Tecnologias: 
* API -  Flask (Python)  
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

O servidor, implementado com Flask em Python, oferece uma API RESTful para comunicação entre o front-end e o banco de dados. Ele gerencia as requisições dos clientes, processa operações solicitadas e retorna os dados correspondentes. O servidor se comunica com o banco de dados MySQL para recuperar e armazenar informações sobre consultas, pacientes, médicos e outras entidades.

## Projeto da Interface Web

O projeto foi desenvolvido com foco na usabilidade, eficiência e experiência do usuário. O design visual da aplicação é limpo, moderno e profissional, com uma paleta de cores predominantemente verde e branco, proporcionando uma sensação de tranquilidade associada ao ambiente médico. O contraste com preto e cinza é usado para destacar informações importantes e elementos de navegação. Layout das Páginas As páginas da aplicação foram organizadas de forma lógica e intuitiva, facilitando a navegação e o acesso às funcionalidades principais. 

Página de Login - Permite que os usuários façam login na aplicação utilizando suas credenciais. Página Principal - Apresenta um resumo das próximas consultas agendadas e fornece acesso rápido às funcionalidades mais utilizadas.
Página de Agendamento de Consultas - Permite que os usuários agendem novas consultas selecionando o médico, dados e horários desejados.
Página de Perfil do Paciente - Exibe informações fornecidas sobre o paciente, como histórico médico, consultas agendadas e medicamentos prescritos.
Página de Registro de Prontuários - Permite que os profissionais de saúde registrem informações fornecidas sobre o atendimento e tratamento de um paciente.
Página de Relatórios e Estatísticas - Apresenta relatórios dos dados gerenciais das clinicas.

## Wireframes

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/4354172c-aed1-406d-a411-8c88ee56aa9d)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/4bd9e388-26fa-411e-b55b-a37efb583945)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/410bc885-d6fb-4b5c-85da-40e1f14f72ba)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/240977f8-3a2f-439d-a004-c3947966db05)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/41b061cb-89b3-4247-80cc-29d55eb0cc8b)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/8a477da0-7054-465f-b5ea-d873773c7dad)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/de65311a-8032-403e-ac47-c341a8dec8c9)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/ec6139c0-9297-4fbb-b836-9f22349ca2cc)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/6aef3a69-f840-454c-a5b1-b4ddf3012dbe)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/assets/80932176/76ae47ae-4a72-4099-9d2f-ac35c47c9000)

## Design Visual

### Colors:
* #007954
* #FFFFFF
* #000000
* #00815A
* #666666
* #F1F1F1
* #505050
* #282828
* #BADDC0 60%
* #FFD6D6 60%

### Font:
* Roboto Flex

### Icons:
* notification
* perfil
* bar-chart-line-fill 1
* hospital-fill 1
* clipboard2-check-fill 1
* file-earmark-text-fill 1
* people-fill 1
* person-vcard 1
* person-fill-add 1
* arrow-left-circle 1
* pencil-fill 1
* trash3-fill 1
* search 1
* calendar 2
* caret-down-fill 1
* eye 1

### Layout Responsivo

* Médidas padrão para SmartPhones: max-width: 768px
* Médidas padrão para Tablet: min-width: 768px, max-width: 992px
* Médidas padrão para Computadores e Televisores: min-width: 992px
  
## Implantação

Para implantar a aplicação em um ambiente de produção, é necessário:

Requisitos de Hardware e Software:
Hardware:
* Um servidor com capacidade adequada de processamento e memória. Um provedor de nuvem que ofereça escalabilidade.

Software:
* Sistema operacional compatível, como Linux (por exemplo, Ubuntu, CentOS).
* Servidor web, como Nginx ou Apache, para servir o frontend.
* Banco de dados MySQL preferencialmente em um servidor separado para melhor desempenho.

Plataforma de Hospedagem:
Provedor de Nuvem:
* AWS (Amazon Web Services), Google Cloud Platform, Microsoft Azure oferecem opções de hospedagem flexíveis e escaláveis.
  
Configuração do Ambiente de Implantação:
Instalação de Dependências:

* No servidor, instale o Python e as bibliotecas necessárias para executar o backend Flask.
* Instale o servidor web (Nginx ou Apache) e configure-o para servir os arquivos estáticos do frontend.
  
Variáveis de Ambiente:

* Configure as variáveis de ambiente necessárias, como chaves de API, configurações de banco de dados, etc.
* Utilize arquivos de configuração separados para ambientes de desenvolvimento e produção.

Deploy da Aplicação:
Obtenha o Código:

* Clone o repositório da aplicação do GitHub para o servidor.

Instalação de Dependências Python:
* Utilize o gerenciador de pacotes Python (pip) para instalar as dependências listadas no arquivo requirements.txt do backend.
  
Compilação e Build do Frontend:

* No ambiente de desenvolvimento, o Angular CLI é usado para compilar o código TypeScript em JavaScript. Isso geralmente é feito usando o comando ng build --prod. Os arquivos estáticos gerados devem ser servidos pelo servidor web.

Configuração do Banco de Dados:

* Configure o banco de dados MySQL, criando o esquema e as tabelas necessárias.

Configuração do Servidor Web:

* Configure o servidor web (Nginx ou Apache) para rotear as solicitações para o backend Flask e servir os arquivos estáticos do frontend.
