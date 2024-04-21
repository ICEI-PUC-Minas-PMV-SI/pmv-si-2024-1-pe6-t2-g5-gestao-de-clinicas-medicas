<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Acess;
use App\Models\Pacientes;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;


class PacientesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function retornaPacientes(Request $request, $id = null, $cpf = null)
    {
        $query = Pacientes::query();

        // Verifique qual parâmetro está presente na rota e adicione a condição à consulta
        if ($id) {
            $query->where('id', $id);
        } elseif ($cpf) {
            $query->where('cpf', $cpf);
        } else {
            // Se nenhum parâmetro for fornecido, retorne todos os pacientes
            $pacientes = Pacientes::all();
            return response()->json(['data' => $pacientes], 200);
        }

        // Execute a consulta e obtenha os resultados
        $pacientes = $query->get();

        if ($pacientes->isEmpty()) {
            return response()->json(['message' => 'Nenhum paciente encontrado'], 404);
        }

        return response()->json(['data' => $pacientes], 200);
    }

    public function excluiPaciente(Request $request, $id)
    {
        $paciente = Pacientes::find($id);

        if (!$paciente) {
            return response()->json(['message' => 'Paciente não encontrado'], 404);
        }

        $paciente->delete();

        return response()->json(['message' => 'Paciente excluído com sucesso'], 200);
    }

    public function atualizaPacientes(Request $request, $id)
    {
        $dados = Validator::make($request->all(), [
            'nome' => 'required|string|max:255',
            'data_nascimento' => 'required|date',
            'cpf' => 'required|string|max:11',
            'telefone' => 'required|string|max:20',
            'logradouro' => 'required|string|max:255',
            'numero' => 'required|string|max:10',
            'bairro' => 'required|string|max:255',
            'cidade' => 'required|string|max:255'
        ]);

        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }

        $paciente = Pacientes::find($id);

        if (!$paciente) {
            return response()->json(['message' => 'Paciente não encontrado'], 404);
        }

        $paciente->nome = $request->input('nome');
        $paciente->data_nascimento = $request->input('data_nascimento');
        $paciente->cpf = $request->input('cpf');
        $paciente->telefone = $request->input('telefone');
        $paciente->logradouro = $request->input('logradouro');
        $paciente->numero = $request->input('numero');
        $paciente->bairro = $request->input('bairro');
        $paciente->cidade = $request->input('cidade');

        $paciente->save();

        return response()->json(['message' => 'Paciente atualizado com sucesso', 'data' => $paciente], 200);
    }

    public function cadastraPacientes(Request $request)
    {
        $dados = Validator::make($request->all(), [
            'nome' => 'required|string|max:255',
            'data_nascimento' => 'required|date',
            'cpf' => 'required|string|max:14|unique:pacientes,cpf', // Garante que o CPF seja único na tabela pacientes
            'telefone' => 'required|string|max:20',
            'logradouro' => 'required|string|max:255',
            'numero' => 'required|string|max:10',
            'bairro' => 'required|string|max:255',
            'cidade' => 'required|string|max:255'
        ]);

        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }

        $paciente = new Pacientes();
        $paciente->nome = $request->input('nome');
        $paciente->data_nascimento = $request->input('data_nascimento');
        $paciente->cpf = $request->input('cpf');
        $paciente->telefone = $request->input('telefone');
        $paciente->logradouro = $request->input('logradouro');
        $paciente->numero = $request->input('numero');
        $paciente->bairro = $request->input('bairro');
        $paciente->cidade = $request->input('cidade');

        $paciente->save();

        return response()->json(['message' => 'Paciente cadastrado com sucesso', 'data' => $paciente], 201);
    }

}
