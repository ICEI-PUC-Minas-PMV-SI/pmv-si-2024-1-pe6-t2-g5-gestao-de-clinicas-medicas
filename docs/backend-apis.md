# APIs e Web Services

O projeto consiste no desenvolvimento de um sistema web para o gerenciamento de pequenas clínicas médicas, visando facilitar desde o momento do agendamento de consultas até o preenchimento do prontuário médico eletrônico (por parte do médico); a aplicação mobile será voltada para os pacientes, possibilitando o agendamento de consultas e acompanhamento de prontuários pelo celular visando maior facilidade e conforto aos mesmos; e a utilização da API para a interação e o compartilhamento de dados e funcionalidades. 

## Objetivos da API

* Possibilitar a troca de informações e funcionalidades entre as aplicações Web, Mobile com o Banco de Dados para o gerenciamento de consultas médicas; 
* Utilização por usuários que podem ser médicos, pacientes e recepcionistas; 
* Usuários (médicos, pacientes e recepcionista) - permitir cadastro, alteração, exclusão de dados para utilização e acesso aos sistemas; 
* Médicos - permitir cadastro, alteração, exclusão, pesquisa e visualização de dados dos prontuários eletrônicos dos pacientes; 
* Pacientes – permitir cadastro, alteração, exclusão de dados no sistema e visualização de dados de prontuário eletrônico; 
* Recepcionista – permitir o gerenciamento de consultas médicas, através do cadastro, alteração, exclusão, listagem geral e pesquisa de dados de pacientes, médicos, especialidades médicas, horários e consultas médicas. 

## Arquitetura
#### Componentes Principais:
-	Controladores (Controllers): Responsáveis por receber as requisições HTTP, processar os dados e retornar as respostas adequadas.
-	Rotas (Routes): Definem os endpoints da API e mapeiam as requisições HTTP para os controladores correspondentes.
-	Modelos (Models): Representam a estrutura de dados da aplicação e interagem com o banco de dados.
####	Interações entre os Componentes:
-	As requisições HTTP dos clientes são roteadas para os controladores pelas rotas da API.
-	Os controladores processam as requisições, acessam os modelos para interação com o banco de dados (CRUD operations) e retornam as respostas HTTP adequadas aos clientes.

Na figura abaixa mostra-se a organização do funcionamento dos compomentes do sistema em relação à API.

![Arquitetura da API](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/Arquitetura-API.png)


## Modelagem da Aplicação
#### Entidades Principais:
-	Usuarios: Armazena informações dos usuários, como nome, e-mail, senha (criptografada), tipo de usuario, etc.
-	Consultas:Armazenam informações das consultas, como data, paciente,medico,horarios,status e posicao na fila de espera, senha (criptografada), tipo de usuario, etc.
-	Horarios: Armazena os horarios disponiveis para agendamento de consultas dos médicos;
-	Medicos: Armazena os principais dados dos médicos, como nome, especialidades, crm.
-	Pacientes: Armazena os principais dados dos pacientes, como nome, cpf, data de nascimento, telefone, endereço.
-	Prontuarios: Armazena informações sobre levantadas pelo médico em relação ao seu paciente, como diagnostico, exames, prescricoes histórico, tratamentos, observações.
-	acess_token: Registra as sessões dos usuários logados e controle de acesso.

O Diagrama de Entendidade Relacionamento na figura abaixo, mostra a estrutura do banco de dados a ser utilizado pela API e pelo sistema ConsulMed.

![Diagrama Entidade Relacionamento ](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/diagrama_entidade_relacionamento.jpg)

## Fluxo de Dados

No diagrama abaixo pode-se verificar a estrutura simplificada do fluxo de entrada e saída de dados entre os usuários e o sistema. 

![Fluxo de dados](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/fluxo_de_dados.jpg)

O fluxo de dados nas aplicações web e mobile será realizado com a entrada de dados através do login, o sistema fará a validação dos dados se estiver correto é liberado acesso ao sistema, se não será exibida mensagem de erro e solicitado login, caso o usuário não se lembre da senha haverá possibilidade de redefinição. Para primeiro acesso será necessário o cadastro de usuário anteriormente.  

Feito isso, de acordo com o tipo de usuário, serão disponibilizadas as funcionalidades para cadastros, alterações, pesquisas e exclusões de dados. Quando uma ação é realizada como o agendamento de uma consulta, os dados são enviados para o servidor, onde são processados e armazenados no banco de dados, que poderão ser acessados por outros usuários autorizados em tempo real, tanto na versão web quanto na versão mobile da aplicação. 

Para o fluxo de dados será utilizado a API, que processa a solicitação, acessa os recursos ou dados necessários e retorna uma resposta ao usuário, considerando a lógica do negócio. Ela atua como uma camada intermediária que gerencia o acesso aos dados e a lógica de negócios da aplicação, garantindo que as operações sejam executadas de forma eficiente e segura. 

## Requisitos Funcionais


|ID     | Descrição do Requisito                                                |Prioridade |
|-------|---------------------------------------------------------------------------|------|
|RF-001|  Cadastrar dados de médico;<br>Alterar dados de médico; <br> Excluir médico;<br>Listar todos os médicos;<br>Pesquisar dados de médicos por id, nome, CRM e id de especialidade médica. <br>                        | ALTA | 
|RF-002| Cadastrar dados de paciente; <br>Alterar dados de paciente; <br>Excluir paciente; <br> Listar todos os pacientes; <br>  Pesquisar dados de paciente por id e CPF <br>                              | ALTA |
|RF-003| Cadastrar dados de usuários; <br>Alterar dados de usuários; <br>Excluir usuários; <br>  Listar todos de usuários; <br> Pesquisar dados de usuários por id e CPF <br>                            | ALTA | 
|RF-004| Cadastrar dados de consultas médicas; <br>Alterar dados de consultas médicas;<br> Listar todas as consultas médicas; <br> Excluir consulta médica; <br> Pesquisar dados de consultas médicas por id_consulta e por id_médico, id_paciente e por data <br>  | ALTA | 
|RF-005|Cadastrar dados de prontuários eletrônicos; <br> Alterar dados de prontuários eletrônicos; <br> Listar todos os prontuários eletrônicos; <br>Excluir prontuário eletrônico; <br> Pesquisar dados de prontuário eletrônico por  id_médico,  id_paciente; <br>  | ALTA |
|RF-006| Cadastrar dados de prontuários eletrônicos; <br> Alterar dados de prontuários eletrônicos; <br> Listar todos os prontuários eletrônicos; <br> Excluir prontuário eletrônico; <br> Pesquisar dados de prontuário eletrônico por  id_médico,  id_paciente; <br>  | ALTA | 

## Requisitos Não Funcionais

|ID     | Descrição do Requisito                                            |Prioridade |
|-------|-------------------------------------------------------------------|------|
|RNF-001| A aplicação deve ter boa usabilidade                              | ALTA | 
|RNF-002| A aplicação deve ser multiplataforma                              | ALTA |
|RNF-003| A aplicação deve ter confiabilidade                               |ALTA | 
|RNF-004| A aplicação deve ser responsiva para rodar em dispositivos móveis | BAIXA | 
|RNF-005| A aplicação deve processar requisições do usuário em no máximo 3s | BAIXA | 


## Tecnologias Utilizadas

Para o desenvolvimento do projeto, até o momento utilizamos as seguintes tecnologias: 

* Swagger Hub --> Desenvolvimento e documentação dos endpoints da API; 
* Lumen PHP Framework --> Utilizado para desenvolver a API de forma leve e eficiente;
* Banco de Dados MySQL --> Para armazenar e gerenciar os dados da aplicação;
* Eloquent ORM (Object-Relational Mapping) --> Utilizado para mapear os modelos da aplicação com as tabelas do banco de dados, simplificando operações CRUD;
* Insomnia --> Ferramenta utilizada para testar e a APIs durante o desenvolvimento;
* Figma --> Desenho da Arquitetura da API; 
* Lucichart -- > Desenho do Diagrama de Entidade Relacionamento.


## API Endpoints

### Endpoint: Cadastra um novo médico
- Método : POST
- URL: /medicos/{id}
- Parâmetros: sem parâmetros
- Corpo da requisição:
  ```
    {
        "nome": "Carlos Roberto Bittencourt",
        "especialidade": "CARDIOLOGIA",
        "crm": "7845",
    }
  ```

- Resposta:
    - Sucesso (201):
  ```
    {
        "code": 201,
        "message": "Médico cadastrado com sucesso",
        "data": {
            "id": 1,
            "nome": "Carlos Roberto Bittencourt",
            "especialidade": "CARDIOLOGIA",
            "crm": "7845",}
    }
    ```
    - Erro (400):
  ```
    {
        "code": 400,
        "message": "Médico não cadastrado",
    }
  ```

### Endpoint: Atualiza um médico
- Método : PUT
- URL: /medicos/{id}
- Parâmetros: sem parâmetros
- Corpo da requisição:
  ```
    {
        "id": 1,
        "nome": "Carlos Roberto Bittencourt",
        "especialidade": "CARDIOLOGIA",
        "crm": "7845",
    }
  ```
- Resposta:
    - Sucesso (200):
   ```
    {
        "code": 200,
        "message": "Médico atualizado com sucesso",
        "data": {
            "id": 1,
            "nome": "Carlos Roberto Bittencourt",
            "especialidade": "CARDIOLOGIA",
            "crm": "7845",}
    }
     ```
    - Erro (404):
   ```
    {
        "code": 404,
        "message": "Médico não encontrado",
    }
   ```

### Endpoint: Busca todos os médicos
- Método : GET
- URL: /medicos
- Parâmetros: sem parâmetros
- Resposta:
    - Sucesso (200)
   ```
    {
        "code": 200,
        "message": "Médico encontrado",
        "data": {
            "id": 1,
            "nome": "Carlos Roberto Bittencourt",
            "especialidade": "CARDIOLOGIA",
            "crm": "7845",}
    }
    ```
    - Erro (404):
   ```
    {
        "code": 404,
        "message": "Nenhum médico encontrado",
    }
   ```

### Endpoint: Exclui um médico
- Método : DELETE
- URL: /medicos/{id}
- Parâmetros: id: {id}
- Resposta:
    - Sucesso (200)
     ```
    {
        "code": 200,
        "message": "Médico excluído com sucesso",
        "data": {
            "id": 1,
            "nome": "Carlos Roberto Bittencourt",
            "especialidade": "CARDIOLOGIA",
            "crm": "7845",}
    }
     ```

    - Erro (404):
  ```
    {
        "code": 404,
        "message": "Médico não encontrado",
    }
  ```     

 ### Endpoint: Cadastra um novo usuário
- Método : POST
- URL: /usuarios
- Parâmetros: sem parâmetros
- Corpo da requisição:
  ```
    {
        "email": "jaquelinelpereira@consulmed.com",
        "tipo": "FUNCIONARIA",
        "senha": "1234",
    }
  ```
- Resposta:
    - Sucesso (201):
   ```
    {
        "code": 201,
        "message": "Usuário cadastrado com sucesso",
        "data": {
            "id": 1,
            "email": "jaquelinelpereira@consulmed.com",
            "tipo": "FUNCIONARIA",
            "senha": "1234",}
    }
   ```
    - Erro (400):
  ```
    {
        "code": 400,
        "message": "Usuário não cadastrado",
    }
  ```

### Endpoint: Atualiza usuário
- Método : PUT
- URL: /usuarios
- Parâmetros: sem parâmetros
- Corpo da requisição:
  ```
    {
        "id": 1,
        "email": "jaquelinelpereira@consulmed.com",
        "tipo": "FUNCIONARIA",
        "senha": "1234",
    }
    ```
- Resposta:
    - Sucesso (200):
    ```
    {
        "code": 200,
        "message": "Usuário atualizado com sucesso",
        "data": {
            "id": 1,
            "email": "jaquelinelpereira@consulmed.com",
            "tipo": "FUNCIONARIA",
            "senha": "1234",}
    }
    ```
    - Erro (404):
    ```
    {
        "code": 404,
        "message": "Usuário não encontrado",
    }
   ```
### Endpoint: Busca todos os usuários
- Método : GET
- URL: /usuarios
- Parâmetros: sem parâmetros
- Resposta:
    - Sucesso (200)
   ```
    {
        "code": 200,
        "message": "Usuário encontrado",
        "data": {
            "id": 1,
            "email": "jaquelinelpereira@consulmed.com",
            "tipo": "FUNCIONARIA",
            "senha": "1234",}
    }
   ```
    - Erro (404):
   ```
    {
        "code": 404,
        "message": "Nenhum usuário encontrado",
    }
   ```

### Endpoint: Exclui um usuário
- Método : DELETE
- URL: /usuarios/{id}
- Parâmetros: id: {id}
- Resposta:
    - Sucesso (200)
    ```
    {
        "code": 200,
        "message": "Usuário excluído com sucesso",
        "data": {
            "id": 1,
            "email": "jaquelinelpereira@consulmed.com",
            "tipo": "FUNCIONARIA",
            "senha": "1234",}
    }
     ```
    - Erro (404):
  ```
    {
        "code": 404,
        "message": "Usuário não encontrado",
    }
  ```

 ### Endpoint: Cadastra novo paciente
   - Método: POST
   - URL: pacientes/
   - Parâmetros: sem parâmetros
   - Corpo da requisição:
  ```
   {
        "id": 1,
        "nome": "Marcelo Fernando da Silva",
        "data_nascimento": ,
        "cpf": "10000000000",
        "telefone": "31990000000",
        "logradouro": "Rua Paulo de Oliveira Santos",
        "numero": 554,
        "bairro": "Tirol (Barreiro)",
        "cidade": "Belo Horizonte"
    }
  ```
   - Resposta: 
        - Sucesso (201):
       ```
     {
        "code": 201,
        "message": "Paciente cadastrado com sucesso",
        "data": {
            "id": 1,
            "nome": "Marcelo Fernando da Silva",
            "data_nascimento": ,
            "cpf": "10000000000",
            "telefone": "31990000000",
            "logradouro": "Rua Paulo de Oliveira Santos",
            "numero": 554,
            "bairro": "Tirol (Barreiro)",
            "cidade": "Belo Horizonte-MG"}
       }
       ```
     - Erro (400):
     ```
     {
        "code": 400,
        "message": "Inválido"
     }
       ```

  ### Endpoint: Atualiza um paciente
   - Método: PUT
   - URL: pacientes/{id}
   - Parâmetros: sem parâmetros
   - Corpo da requisição:
     ```
     {
        "id": 1,
        "nome": "Marcelo Fernando da Silva",
        "data_nascimento": ,
        "cpf": "10000000000",
        "telefone": "31990000000",
        "logradouro": "Rua Paulo de Oliveira Santos",
        "numero": 554,
        "bairro": "Tirol (Barreiro)",
        "cidade": "Belo Horizonte"
     }
   
   - Resposta: 
        - Sucesso (200):
     ```
       {
        "code": 200,
        "message": "Paciente atualizado com sucesso",
        "data": {
            "id": 1,
            "nome": "Marcelo Fernando da Silva",
            "data_nascimento": ,
            "cpf": "10000000000",
            "telefone": "31999000000",
            "logradouro": "Rua Paulo de Oliveira Santos",
            "numero": 212,
            "bairro": "Tirol (Barreiro)",
            "cidade": "Belo Horizonte-MG"}
        }
      ```

        - Erro (400):
            ```
            {
             "code": 400,
             "message": "Paciente inválido"
            }
            ```
        - Erro (404):
            ```
            {
             "code": 404,
             "message": "Paciente não encontrado"
            }
            ```

### Endpoint: Busca todos os pacientes
   - Método: GET
   - URL: pacientes/pacientes
   - Parâmetros: sem parâmetros
   - Resposta:
     - Sucesso (200):
   ```
      {
      "code": 200,
        "message": "Paciente encontrado",
        "data": {
            "id": 1,
            "nome": "Marcelo Fernando da Silva",
            "data_nascimento": ,
            "cpf": "10000000000",
            "telefone": "31999000000",
            "logradouro": "Rua Paulo de Oliveira Santos",
            "numero": 212,
            "bairro": "Tirol (Barreiro)",
            "cidade": "Belo Horizonte-MG"}
       }
   ```
   - Erro (404):
      ```
        {
        "code": 404,
        "message": "Nenhum paciente encontrado",
        }
        ```

### Endpoint: Exclui um paciente
   - Método: DELETE
   - URL: pacientes/{id}
   - Parâmetros: id: {id} 
   - Resposta: 
        - Sucesso (200):
     ```
     {
        "code": 200,
        "message": "Paciente excluido com sucesso",
     }
     ```
        - Erro (404):
       ```
       {
        "code": 404,
        "message": "Paciente não encontrado",
       }
       ```
### Endpoint: Cadastra novo horário
   - Método: POST
   - URL: horarios/
   - Parâmetros: sem parâmetros
   - Corpo da requisição:
      ```
        {
        "dia": "SEGUNDA",
        "horario_inicio": "2024-04-21T15:03:39.395Z",
        "horario_fim": "2024-04-21T15:03:39.395Z",
        "id_medico": 1,
        } 
       ```
   - Resposta: 
        - Sucesso (201):
        ```
         {
         "code": 201,
         "message": "Horário cadastrado com sucesso",
         "data": {
             "dia": "SEGUNDA",
             "horario_inicio": "2024-04-21T15:03:39.395Z",
             "horario_fim": "2024-04-21T15:03:39.395Z",
             "id_medico": 1,}
            }
        ```
        - Erro (400):
     ```
        {
        "code": 400,
        "message": "Inválido",
         }
     ```

### Endpoint: Atualiza horário
   - Método: PUT
   - URL: horarios/{id}
   - Parâmetros: sem parâmetros
   - Corpo da requisição:
     ```
     {
        "dia": "SEGUNDA",
        "horario_inicio": "2024-04-21T15:03:39.395Z",
        "horario_fim": "2024-04-21T15:03:39.395Z",
        "id_medico": 1,
     }
     ```
   - Resposta: 
        - Sucesso (200):
       ```
        {
        "code": 200,
        "message": "Horário atualizado com sucesso",
        "data": {
            "dia": "SEGUNDA",
            "horario_inicio": "2024-04-21T15:03:39.395Z",
            "horario_fim": "2024-04-21T15:03:39.395Z",
            "id_medico": 1,}
         }
       ```
        - Erro (400):
     ```
          {
        "code": 400,
        "message": "Inválido",
          }
     ``` 
        - Erro (404):
        ```
          {
        "code": 404,
        "message": "Horário não encontrado"
           }
        ```

### Endpoint: Busca horários
   - Método: GET
   - URL: horarios/
   - Parâmetros: sem parâmetros 
   - Resposta: 
        - Sucesso (200):
        ```
       {
          "code": 200,
          "message": "Horário encontrado",
          "data": {
              "dia": "SEGUNDA",
              "horario_inicio": "2024-04-21T15:03:39.395Z",
              "horario_fim": "2024-04-21T15:03:39.395Z",
              "id_medico": 1,}
        }
        ```
        - Erro (404):
        ```
          {
        "code": 404,
        "message": "Horário não encontrado"
           }
        ```
### Endpoint: Exclui horário
   - Método: DELETE
   - URL: horarios/{id}
   - Parâmetros: id: {id}
   - Resposta: 
        - Sucesso (200):
        ```
        {
        "code": 200,
        "message": "Horário excluído com sucesso",
        }
        ```
       - Erro (404):
        ```
         {
        "code": 404,
        "message": "Horário não encontrado",
        }
        ```

### Endpoint: Cadastra uma nova consulta
- Método : POST
- URL: /consultas
- Parâmetros: sem parâmetros
- Corpo da requisição:
  ```
  {
    "medico": {
        "nome": "Carlos Roberto Bittencourt",
        "especialidade": "CARDIOLOGIA",
        "crm": "7845",
    },
    "paciente": {
        "nome": "Sandra da Silva Fonseca",
        "data_nascimento": "01/01/1982",
        "cpf": "98234476092",
        "telefone": "31988742130",
        "logradouro": "Rua X",
        "numero": 10,
        "bairro": "Centro",
        "cidade": "Belo Horizonte",
        "uf": "MG"
    },
    "dia": "2024-04-21",
    "horario_inicio": "2024-04-21T16:33:01.920Z",
    "horario_fim": "2024-04-21T16:33:01.920Z",
    "posicao": 1,
    "status": "CONCLUIDO",
   }
    ```

- Resposta:
    - Sucesso (201):
     ```
    {
    "code": 201;
    "message": "Consulta cadastrada com sucesso",
    "data": {
        "medico": {
            "nome": "Carlos Roberto Bittencourt",
            "especialidade": "CARDIOLOGIA",
            "crm": "7845"},
        "paciente": {
            "nome": "Sandra da Silva Fonseca",
            "data_nascimento": "01/01/1982",
            "cpf": "98234476092",
            "telefone": "31988742130",
            "logradouro": "Rua X",
            "numero": 10,
            "bairro": "Centro",
            "cidade": "Belo Horizonte",
            "uf": "MG"},
        "dia": "2024-04-21",
        "horario_inicio": "2024-04-21T16:33:01.920Z",
        "horario_fim": "2024-04-21T16:33:01.920Z",
        "posicao": 1,
        "status": "CONCLUIDO",
    }
  ```
    - Erro (400):
      ```
       {
       "code": 400,
       "message": "Consulta não encontrada",
      }
      ```

### Endpoint: Atualiza consulta
- Método : PUT
- URL: /consultas/{id}
- Parâmetros: sem parâmetros
- Corpo da requisição:
 ```
  {
    "medico": {
        "nome": "Carlos Roberto Bittencourt",
        "especialidade": "CARDIOLOGIA",
        "crm": "7845",
    },
    "paciente": {
        "nome": "Sandra da Silva Fonseca",
        "data_nascimento": "01/01/1982",
        "cpf": "98234476092",
        "telefone": "31988742130",
        "logradouro": "Rua X",
        "numero": 10,
        "bairro": "Centro",
        "cidade": "Belo Horizonte",
        "uf": "MG"
    },
    "dia": "2024-04-21",
    "horario_inicio": "2024-04-21T16:33:01.920Z",
    "horario_fim": "2024-04-21T16:33:01.920Z",
    "posicao": 1,
    "status": "CONCLUIDO",
   }
 ```
   - Resposta:
     - Sucesso (200):
     ```
          {
          "code": 200,
          "message": "Consulta atualizada com sucesso",
          "data": {
              "medico": {
                  "nome": "Carlos Roberto Bittencourt",
                  "especialidade": "CARDIOLOGIA",
                  "crm": "7845",
              },
              "paciente": {
                  "nome": "Sandra da Silva Fonseca",
                  "data_nascimento": "01/01/1982",
                  "cpf": "98234476092",
                  "telefone": "31988742130",
                  "logradouro": "Rua X",
                  "numero": 10,
                  "bairro": "Centro",
                  "cidade": "Belo Horizonte",
                  "uf": "MG"
              },
              "dia": "2024-04-21",
              "horario_inicio": "2024-04-21T16:33:01.920Z",
              "horario_fim": "2024-04-21T16:33:01.920Z",
              "posicao": 1,
              "status": "CONCLUIDO",
             }
            }
      ```
     - Erro (404):
      ```
       {
       "code": 404,
       "message": "Consulta não encontrada",
      }
      ```

### Endpoint: Busca todas as consultas
- Método : GET
- URL: /consultas
- Parâmetros: sem parâmetros
- Resposta:
    - Sucesso (200)
     ```
    {
    "code": 200,
    "message": "Consulta encontrada",
    "data": {
        "medico": {
            "nome": "Carlos Roberto Bittencourt",
            "especialidade": "CARDIOLOGIA",
            "crm": "7845",
        },
        "paciente": {
            "nome": "Sandra da Silva Fonseca",
            "data_nascimento": "01/01/1982",
            "cpf": "98234476092",
            "telefone": "31988742130",
            "logradouro": "Rua X",
            "numero": 10,
            "bairro": "Centro",
            "cidade": "Belo Horizonte",
            "uf": "MG"
        },
        "dia": "2024-04-21",
        "horario_inicio": "2024-04-21T16:33:01.920Z",
        "horario_fim": "2024-04-21T16:33:01.920Z",
        "posicao": 1,
        "status": "CONCLUIDO",
    }
  }
   ```
    - Erro (404):
     ```
    - {
    "code": 404,
    "message": "Nenhuma consulta encontrada",
      }
      ```

### Endpoint: Exclui uma consulta
- Método : DELETE
- URL: /consultas/{id}
- Parâmetros: id: {id}
- Resposta:
    - Sucesso (200)
     ```
    {
    "code": 200,
    "message": "Consulta excluída com sucesso",
    "data": {
        "medico": {
            "nome": "Carlos Roberto Bittencourt",
            "especialidade": "CARDIOLOGIA",
            "crm": "7845",
        },
        "paciente": {
            "nome": "Sandra da Silva Fonseca",
            "data_nascimento": "01/01/1982",
            "cpf": "98234476092",
            "telefone": "31988742130",
            "logradouro": "Rua X",
            "numero": 10,
            "bairro": "Centro",
            "cidade": "Belo Horizonte",
            "uf": "MG"
        },
        "dia": "2024-04-21",
        "horario_inicio": "2024-04-21T16:33:01.920Z",
        "horario_fim": "2024-04-21T16:33:01.920Z",
        "posicao": 1,
        "status": "CONCLUIDO",
    }
   }
   ```
    - Erro (404):
      ```
      {
      "code": 404,
      "message": "Consulta não encontrada",
       }
      ```
        
### Endpoint: Cadastra prontuário
  - Método: POST
  - URL: prontuarios/
  - Parâmetros: sem parâmetros 
  - Corpo da requisição:
      ```
      {
      "id_consulta": 1,
      "data_criacao": "2024-04-21T17:00:57.128Z",
      "diagnostico": "diagnostico",
      "exames": "exames",
      "prescricoes": "pescrições",
      "tratamentos": "tratamentos",
      "observacoes": "observações",
      "hash_medico": "string",
      }
      ```
  - Resposta: 
    - Sucesso (201):
      ```
       {
        "code": 201,
        "message": "Prontuário cadastrado com sucesso",
        "data": {
        "id_consulta": 1,
        "data_criacao": "2024-04-21T17:00:57.128Z",
        "diagnostico": "diagnostico",
        "exames": "exames",
        "prescricoes": "pescrições",
        "tratamentos": "tratamentos",
        "observacoes": "observações",
        "hash_medico": "string",
        }
        ```
    - Erro (400):
        ```
        {
         "code": 400,
         "message": "Prontuário não cadastrado",
         }

### Endpoint: Atualiza prontuário
  - Método: PUT
  - URL: prontuarios/
  - Parâmetros: sem parâmetros 
  - Corpo da requisição:
   ```
     {
      "id_consulta": 1,
      "data_criacao": "2024-04-21T17:00:57.128Z",
      "diagnostico": "diagnostico",
      "exames": "exames",
      "prescricoes": "pescrições",
      "tratamentos": "tratamentos",
      "observacoes": "observações",
      "hash_medico": "string",
       }
 ```
   - Resposta: 
        - Sucesso (201):
     ```
     {
      "code": 201,
      "message": "Prontuário cadastrado com sucesso",
      "data": {
         "id_consulta": 1,
         "data_criacao": "2024-04-21T17:00:57.128Z",
         "diagnostico": "diagnostico",
         "exames": "exames",
         "prescricoes": "pescrições",
         "tratamentos": "tratamentos",
         "observacoes": "observações",
         "hash_medico": "string",
           }
      }
       ```
        - Erro (400):
     ```
          {
            "code": 400,
            "message": "Inválido",
           }
     ```
  
       - Erro (404):
     ```
          {
         "code": 404,
         "message": "Prontuário não encontrado",
           }
     ```
         
 ### Endpoint: Busca todos prontuários
  - Método: GET
  - URL: prontuarios/{id}
  - Parâmetros: sem parâmetros 
    - Resposta: 
      -Sucesso (200):
      ```
        {
       "code": 200,
       "message": "Lista de prontuários",
       "data": {
        "id_consulta": 1,
        "data_criacao": "2024-04-21T17:00:57.128Z",
        "diagnostico": "diagnostico",
        "exames": "exames",
        "prescricoes": "pescrições",
        "tratamentos": "tratamentos",
        "observacoes": "observações",
        "hash_medico": "string",
       }
      }
       ```
       - Erro (404):
       ```
       {
       "code": 404,
       "message": "Nenhum prontuário encontrado",
       }
       ```

### Endpoint: Exclui prontuário
- Método: DELETE
- URL: prontuarios/{id}
- Parâmetros: sem parâmetros 
   - Corpo da requisição:
   ```
   - {
    "id_consulta": 1,
    "data_criacao": "2024-04-21T17:00:57.128Z",
    "diagnostico": "iagnostico",
    "exames": "exames",
    "prescricoes": "pescrições",
    "tratamentos": "tratamentos",
    "observacoes": "observações",
    "hash_medico": "string",
     }
  ```
  - Resposta: 
    - Sucesso (200):
  ```
    {
    "code": 200,
    "message": "Prontuário excluído com sucesso",
    "data": {
        "id_consulta": 1,
        "data_criacao": "2024-04-21T17:00:57.128Z",
        "diagnostico": "diagnostico",
        "exames": "exames",
        "prescricoes": "pescrições",
        "tratamentos": "tratamentos",
        "observacoes": "observações",
        "hash_medico": "string",
      }
     }
   ```
    - Erro (404):
    ```
    - {
    "code": 404,
    "message": "Prontuário não encontrado",
     }
    ```

## Considerações de Segurança

### Autenticação e Autorização: 
- Autenticação: Utilizamos um método de autenticação criado pelos nossos desenvolvedores, no qual é enviado um token pelo usuário sempre que forem realizadas solicitações na API para evitar acesso indevido por usuários não autenticados à rotas sensíveis. Esse token é validado e possui tempo de expiração. 
- Senhas: Armazenamos senhas de forma segura usando técnicas de hashing para proteger contra ataques de força bruta. 

### Proteção contra alguns ataques: 
- SQL Injection: Utilizamos consultas parametrizadas com ORM (Object-Relational Mapping) para evitar ataques de injeção de SQL. 
- Cross-Site Request Forgery (CSRF): Implementamos o uso de tokens em todas as requisições a serem feitas na API para prevenir esse tipo de ataque. 
- HTTPS: Utilizamos conexões HTTPS seguras para criptografar dados transmitidos entre o cliente e o servidor, evitando interceptações por atacantes. 
- Configuramos firewalls e filtros de tráfego para detectar e bloquear tráfego malicioso de origem desconhecida ou com padrões suspeitos no servidor. 
- XSS: Utilizamos framework que oferece proteção automática contra XSS, como AngularJS no front-end que conta com medidas de segurança embutidas para dificultar essas ações. 

## Implantação

### Requisitos de Hardware:
-	Servidor Web: Ainda não definido.
-	Armazenamento: Ainda não definido.
-	Memória RAM: 16GB de RAM para lidar com as operações da aplicação.
-	Processador: Ainda não definido.
  
### Requisitos de Software:
-	Sistema Operacional: Um sistema operacional Linux.
-	Servidor Web: Servidor web Apache.
-	PHP 7.4 ou maior.
-	Banco de Dados: MySQL.
-	Ambiente de Desenvolvimento vs. Produção: No ambiente de produção, é necessário configurar o PHP e o servidor web de forma otimizada para segurança, desempenho e escalabilidade.


## Testes

Para garantir o funcionamento adequado da API, faz-se importante a realização de testes para avaliar possíveis erros para correção, melhorias e o comportamento da API durante a troca de dados com o Banco de Dados. Para isso optou-se pela utilização dos testes abaixo: 
### Testes Unitários:
-	Testamos individualmente os métodos dos controladores, modelos e outras funções da aplicação para garantir seu correto funcionamento.
### Testes de Integração:
-	Testamos a integração entre os diferentes componentes da aplicação, como rotas, controladores e modelos.
-	Garantimos que as requisições HTTP sejam tratadas corretamente e que os dados sejam persistidos no banco de dados conforme o esperado.
-	Ferramentas: Insomnia para testes de integração de API.
### Testes de Segurança:
-	Realizamos testes de segurança para identificar vulnerabilidades como injeção de SQL e CSRF na API.

Foram elaborados os seguintes casos de teste para a API:  
 
**Caso de teste: 1** <br>
Resumo: Cadastrar Médico <br>
Requisito: RF-001 <br>
Prioridade: Alta <br>
Pré-condição: Estar logado no Sistema.<br>
Passos:
1. Preencher com os dados do médico <br>
2. Salvar alterações <br>

Resultado Esperado: Exibir mensagem “Operação bem sucedida” <br>
Observações: Necessário preencher todos os dados do médico para efetuar cadastro, mensagem código 200 para cadastro efetuado, 400 Entrada inválida e 422 Exceção erro de validação <br>
Comentários: <br><br>

**Caso de teste: 2** <br>
Resumo: Excluir Paciente <br>
Requisito: RF-002 <br>
Prioridade: Média   <br> 
Pré-condição: Estar logado no Sistema. <br>
Passos:  
1. Informar o id_paciente 
2. Selecionar paciente 
3. Confirmar exclusão dos dados do paciente 

Resultado Esperado: Exibir mensagem “Operação bem sucedida” 
Observações: código 200 para cadastro excluído, 400 Id fornecido inválido e 404 Paciente não encontrado 
Comentários:<br><br> 

**Caso de teste: 3** <br>
Resumo: Alterar usuário <br>
Requisito: RF-003 <br>
Prioridade: Média   <br> 
Pré-condição: o usuário deverá estar logada no Sistema. <br>
Passos: 
1. Informar o id do usuário <br>
2. Digitar nova senha <br>
3. Confirmar alteração 

Resultado Esperado: Exibir mensagem “Operação bem  sucedida” <br>
Observações:  Código 200 para alteração feita, 404 não encontrado, 422 Exceção da validação <br>
Comentários: <br><br>
 
**Caso de teste: 4** <br>
Resumo: Alterar Consulta <br>
Requisito: RF-004 <br>
Prioridade: Média    <br>
Pré-condição: a Recepcionista Estar logada no Sistema. <br>
Passos: 
1. Informar o id da consulta <br>
2. Verificar dados do paciente <br>
3. Verificar dados do médico <br>
4. Verificar data da consulta <br>
5. Confirmar alteração

Resultado Esperado: Exibir mensagem “Operação bem sucedida” <br>
Observações: <br>
Comentários: <br><br>
 
**Caso de teste: 5**  <br>
Excluir Prontuário <br>
Requisito: RF-005 <br>
Prioridade: Média    <br>
Pré-condição: O médico deverá estar logado no Sistema. <br>
Passos:  
1. Informar o  id do prontuário <br>
2. Verificar dados <br>
3. Confirmar exclusão
  
Resultado Esperado: Exibir mensagem “Operação bem sucedida” <br>
Observações: Código 200 para Exclusão feita e 400 Valor informado inválido <br>
Comentários: <br><br>
 
**Caso de teste:   6**  <br>
Excluir horário de consulta  <br>
Requisito: RF-006 <br>
Prioridade: Média    <br>
Pré-condição: A Recepcionista deverá estar logada no Sistema. <br>
Passos:  
1. Informar id do horário  <br>
2. Verificar dados <br>
3. Confirmar exclusão
   
Resultado Esperado: Exibir mensagem “Operação bem sucedida” <br>
Observações: Código 200 para horário excluído e 400 para horário inválido <br>
Comentários: <br><br>
 

**Caso de teste:   7** <br>
Tempo de resposta cadastro de novo Paciente <br>
Requisito : RNF-005 <br>
Prioridade: Média    <br>
Pré-condição: A Recepcionista deverá estar logada no sistema <br>
Passos:  <br>
1. Informar CPF do Paciente <br>
2. Verificar dados <br>
3. Preencher dados <br>
4. Salvar alteração

Resultado Esperado: Exibir mensagem “Operação bem sucedida” <br>
Observações: Código 200 cadastro efetuado e 400 entrada inválida e 422 erro <br>
Comentários: <br><br>

# Referências

https://miro.com/pt/diagrama/o-que-e-diagrama-fluxo-dados/ 

https://www.lucidchart.com/blog/pt/diagrama-de-fluxo-de-dados-tutorial 

https://pt.wikipedia.org/wiki/Diagrama_de_fluxo_de_dados 

https://app.creately.com/d/create?templateId=injsddx94 

https://awari.com.br/estrategias-de-teste-de-software-abordagens-e-taticas-em-testes-de-software/?utm_source=blog&utm_campaign=projeto+blog&utm_medium=Estrat%C3%A9gias%20de%20Teste%20de%20Software:%20Abordagens%20e%20T%C3%A1ticas%20em%20Testes%20de%20Software&utm_content=data+science 

https://testingcompany.com.br/blog/casos-de-teste-entenda-a-importancia-e-porque-sao-fundamentais-para-a-area-de-qa 

https://www.flaticon.com/br/
