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
Na figura abaixa mostra-se a organização do funcionamento dos compomentes do sistema em relação à API.

![Arquitetura da API]([URL da imagem](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/Arquitetura-API.png))


## Modelagem da Aplicação
O Diagrama de Entendidade Relacionamento, na figura abaixo, mostra a estrutura do banco de dados a ser utilizado pela API e pelo sistema ConsulMed.

![Diagrama Entidade Relacionamento ](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/diagrama_entidade_relacionamento.jpg)

## Fluxo de Dados

No diagrama abaixo pode-se verificar a estrutura simplificada do fluxo de entrada e saída de dados entre os usuários e o sistema. 

![Fluxo de dados](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g5-gestao-de-clinicas-medicas/blob/main/docs/img/fluxo_de_dados.jpg)

O fluxo de dados nas aplicações web e mobile será realizado com a entrada de dados através do login, o sistema fará a validação dos dados se estiver correto é liberado acesso ao sistema, se não será exibida mensagem de erro e solicitado login, caso o usuário não se lembre da senha haverá possibilidade de redefinição. Para primeiro acesso será necessário o cadastro de usuário anteriormente.  

Feito isso, de acordo com o tipo de usuário, serão disponibilizadas as funcionalidades para cadastros, alterações, pesquisas e exclusões de dados. Quando uma ação é realizada como o agendamento de uma consulta, os dados são enviados para o servidor, onde são processados e armazenados no banco de dados, que poderão ser acessados por outros usuários autorizados em tempo real, tanto na versão web quanto na versão mobile da aplicação. 

Para o fluxo de dados será utilizado a API, que processa a solicitação, acessa os recursos ou dados necessários e retorna uma resposta ao usuário, considerando a lógica do negócio. Ela atua como uma camada intermediária que gerencia o acesso aos dados e a lógica de negócios da aplicação, garantindo que as operações sejam executadas de forma eficiente e segura. 

## Requisitos Funcionais

[Liste os principais requisitos funcionais da aplicação.]


## Requisitos Não Funcionais

[Liste os principais requisitos não funcionais da aplicação, como desempenho, segurança, escalabilidade, etc.]

## Tecnologias Utilizadas

Para o desenvolvimento do projeto, até o momento utilizamos as seguintes tecnologias: 

* Swagger Hub --> Desenvolvimento e documentação dos endpoints da API; 

* Lumen --> Framework em PHP para desenvolvimento da API. 

* AWS --> Banco de dados 

* Figma --> Desenho da Arquitetura da API; 

* Lucichart -- > Desenho do Diagrama de Entidade Relacionamento; 


## API Endpoints

[Liste os principais endpoints da API, incluindo as operações disponíveis, os parâmetros esperados e as respostas retornadas.]

### Endpoint 1
- Método: GET
- URL: /endpoint1
- Parâmetros:
  - param1: [descrição]
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Error",
      "error": {
        ...
      }
    }
    ```


## Considerações de Segurança

Para acesso ao sistema e funcionalidades através das aplicações web e mobile será utilizada autenticação com usuário e senha, sendo que de acordo com o tipo de usuário haverá algumas restrições de acesso a dados e funcionalidades. 

## Implantação

Para a implantação da aplicação será utilizada uma Instância AWS com Sistema Operacional Linux versão 20.04, Banco de Dados AWS RDS; a API foi construída utilizando o framework Lumen com linguagem PHP. 

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

Para garantir o funcionamento adequado da API, faz-se importante a realização de testes para avaliar possíveis erros para correção, melhorias e o comportamento da API durante a troca de dados com o Banco de Dados. 

 

Para isso optou-se pela utilização dos testes abaixo: 

**Unidade** – para testar partes isoladas, nesse contexto avaliou-se a API; 

**Integridade** – para avaliar entre as partes, sendo nessa etapa o funcionamento da API integrado ao Back End da aplicação web; 

**Funcionalidade** - para chegar que as funcionalidades definidas no levantamento de requisitos estam funcionando corretamente. 

Foram elaborados os seguintes casos de teste para a API:  
 
**Caso de teste: 1**
**Resumo: Cadastrar Médico**
**Requisito: RF-001**
Prioridade: Alta 
Pré-condição: Estar logado no Sistema. 
Passos:  
1.Preencher com os dados do médico 
2.Salvar alterações 
Resultado Esperado: Exibir mensagem “Operação bem sucedida” 
Observações: Necessário preencher todos os dados do médico para efetuar cadastro, mensagem código 200 para cadastro efetuado, 400 Entrada inválida e 422 Exceção erro de validação 
Comentários: 

 

Caso de teste: 2 
Resumo: Excluir Paciente 
Requisito: RF-002 
Prioridade: Média    
Pré-condição: Estar logado no Sistema. 
Passos:  
Informar o id_paciente 
Selecionar paciente 
Confirmar exclusão dos dados do paciente 
Resultado Esperado: Exibir mensagem “Operação bem sucedida” 
Observações: código 200 para cadastro excluído, 400 Id fornecido inválido e 404 Paciente não encontrado 
Comentários: 

 

Caso de teste: 3 
Resumo: Alterar usuário 
Requisito: RF-003 
Prioridade: Média    
Pré-condição: o usuário deverá estar logada no Sistema. 
Passos:  
Informar o id do usuário 
Digitar nova senha 
Confirmar alteração 
Resultado Esperado: Exibir mensagem “Operação bem  sucedida” 
Observações:  Código 200 para alteração feita, 404 não encontrado, 422 Exceção da validação 
Comentários: 

 
Caso de teste: 4 
Resumo: Alterar Consulta 
Requisito: RF-004 
Prioridade: Média    
Pré-condição: a Recepcionista Estar logada no Sistema. 
Passos:  
Informar o id da consulta 
Verificar dados do paciente 
Verificar dados do médico 
Verificar data da consulta 
Confirmar alteração 
Resultado Esperado: Exibir mensagem “Operação bem sucedida” 
Observações: 
Comentários: 

 
Caso de teste: 5  
Excluir Prontuário 
Requisito: RF-005 
Prioridade: Média    
Pré-condição: O médico deverá estar logado no Sistema. 
Passos:  
Informar o  id do prontuário 
Verificar dados 
Confirmar exclusão 
Resultado Esperado: Exibir mensagem “Operação bem sucedida” 
Observações: Código 200 para Exclusão feita e 400 Valor informado inválido 
Comentários: 

 

Caso de teste:   6  
Excluir horário de consulta  
Requisito: RF-006 
Prioridade: Média    
Pré-condição: A Recepcionista deverá estar logada no Sistema. 
Passos:  
Informar id do horário  
Verificar dados 
Confirmar exclusão 
Resultado Esperado: Exibir mensagem “Operação bem sucedida” 
Observações: Código 200 para horário excluído e 400 para horário inválido 
Comentários: 

 

**Caso de teste:   7**
**Tempo de resposta cadastro de novo Paciente**
**Requisito : RNF-005** 
Prioridade: Média    
Pré-condição: A Recepcionista deverá estar logada no sistema 
Passos:  
Informar CPF do Paciente 
1.Verificar dados 
2.Preencher dados 
3.Salvar alteração 
4.Resultado Esperado: Exibir mensagem “Operação bem sucedida” 
Observações: Código 200 cadastro efetuado e 400 entrada inválida e 422 erro 
Comentários: 


# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
