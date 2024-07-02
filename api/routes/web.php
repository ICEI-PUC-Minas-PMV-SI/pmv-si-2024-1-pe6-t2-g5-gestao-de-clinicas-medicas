<?php

/** @var \Laravel\Lumen\Routing\Router $router */


$router->post('/login', 'loginController@login');

$router->post('/register', 'loginController@register');


$router->group(['middleware' => ['auth']], function () use ($router) {

    $router->group(['prefix' => 'medicos'], function () use ($router){
        $router->get('/', 'MedicosController@retornaMedicos');
        $router->get('/id/{id}', 'MedicosController@retornaMedicos');
        $router->get('/nome/{nome}', 'MedicosController@retornaMedicos');
        $router->get('/especialidade/{especialidade}', 'MedicosController@retornaMedicos');
        $router->get('/crm/{crm}', 'MedicosController@retornaMedicos');
        $router->delete('/{id}', 'MedicosController@excluirMedico');    
        $router->put('/{id}', 'MedicosController@atualizaMedicos');
        $router->post('/', 'MedicosController@cadastraMedicos');
    });

    $router->group(['prefix' => 'pacientes'], function () use ($router){
        $router->post('/', 'PacientesController@cadastraPacientes');
        $router->put('/{id}', 'PacientesController@atualizaPacientes');
        $router->delete('/{id}', 'PacientesController@excluiPaciente');
        $router->get('/id/{id}', 'PacientesController@retornaPacientes');
        $router->get('/cpf/{cpf}', 'PacientesController@retornaPacientes');
        $router->get('/', 'PacientesController@retornaPacientes');
    });

    $router->group(['prefix' => 'consultas'], function () use ($router){
        $router->post('/', 'ConsultasController@cadastraConsulta');
        $router->put('/{id}', 'ConsultasController@atualizaConsulta');
        $router->delete('/{id}', 'ConsultasController@excluiConsulta');
        $router->get('/', 'ConsultasController@retornaConsultas');
        $router->get('/id/{id}', 'ConsultasController@retornaConsultas');
        $router->get('/medico/{idmedico}', 'ConsultasController@retornaConsultas');
        $router->get('/paciente/{idpaciente}', 'ConsultasController@retornaConsultas');
        $router->get('/data/{data}', 'ConsultasController@retornaConsultas');
    });

    $router->group(['prefix' => 'horarios'], function () use ($router) {
        $router->post('/', 'HorariosController@cadastraHorario');
        $router->put('/{id}', 'HorariosController@atualizaHorario');
        $router->get('/', 'HorariosController@retornaHorarios'); 
        $router->get('/{id}', 'HorariosController@retornaHorarios'); 
        $router->delete('/{id}', 'HorariosController@deletaHorario');
    });

    $router->group(['prefix' => 'prontuarios'], function () use ($router){
        $router->post('/', 'ProntuariosController@cadastraProntuarios');
        $router->put('/', 'ProntuariosController@atualizaProntuario');
        $router->get('/', 'ProntuariosController@retornaProntuarios');
        $router->get('/id/{id}', 'ProntuariosController@retornaProntuarios');
        $router->delete('/{id}', 'ProntuariosController@excluiProntuario');
        $router->get('/medico/{idmedico}', 'ProntuariosController@retornaProntuarios');
        $router->get('/paciente/{idpaciente}', 'ProntuariosController@retornaProntuarios');
    });
    
    $router->group(['prefix' => 'usuarios'], function () use ($router){   
        $router->put('/', 'UsuariosController@atualizaUsuario');
        $router->post('/', 'UsuariosController@cadastraUsuario');
        $router->get('/id/{id}', 'UsuariosController@retornaUsuarios');
        $router->delete('/{id}', 'UsuariosController@excluiUsuario');
        $router->get('/', 'UsuariosController@retornaUsuarios');
    });
    $router->group(['prefix' => 'clinica'], function () use ($router){
        $router->post('/', 'ClinicaController@cadastraClinica');
        $router->put('/{id}', 'ClinicaController@atualizaClinica');
        $router->get('/', 'ClinicaController@retornaClinicas');
        $router->delete('/{id}', 'ClinicaController@deletaClinica');
    });

});