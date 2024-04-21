<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Acess;
use App\Models\Consultas;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;


class PacientesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function cadastraConsulta(Request $request)
    {
       
        $dados = Validator::make($request->all(), [
            'idmedico' => 'required|integer',
            'idpaciente' => 'required|integer',
            'data' => 'required|date',
            'horario_inicio' => 'required|date_format:H:i',
            'horario_fim' => 'required|date_format:H:i|after:horario_inicio',
            'posicao' => 'required|string|max:255',
            'status' => 'required|string|max:255'
        ]);
        
        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }

        $consulta = new Consultas();
        $consulta->idmedico = $request->input('idmedico');
        $consulta->idpaciente = $request->input('idpaciente');
        $consulta->data = $request->input('data');
        $consulta->horario_inicio = $request->input('horario_inicio');
        $consulta->horario_fim = $request->input('horario_fim');
        $consulta->posicao = $request->input('posicao');
        $consulta->status = $request->input('status');

        $consulta->save();

        return response()->json(['message' => 'Consulta cadastrada com sucesso', 'data' => $consulta], 201);
    }

    public function atualizaConsulta(Request $request, $id)
    {
        // Valida os dados recebidos do request
        $dados = Validator::make($request->all(), [
            'idmedico' => 'required|integer',
            'idpaciente' => 'required|integer',
            'data' => 'required|date',
            'horario_inicio' => 'required|date_format:H:i',
            'horario_fim' => 'required|date_format:H:i|after:horario_inicio',
            'posicao' => 'required|string|max:255',
            'status' => 'required|string|max:255'
        ]);

        // Verifica se a validação falhou
        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }

        // Encontra a consulta pelo ID
        $consulta = Consultas::find($id);

        // Verifica se a consulta foi encontrada
        if (!$consulta) {
            return response()->json(['message' => 'Consulta não encontrada'], 404);
        }

        // Atualiza os dados da consulta
        $consulta->idmedico = $request->input('idmedico');
        $consulta->idpaciente = $request->input('idpaciente');
        $consulta->data = $request->input('data');
        $consulta->horario_inicio = $request->input('horario_inicio');
        $consulta->horario_fim = $request->input('horario_fim');
        $consulta->posicao = $request->input('posicao');
        $consulta->status = $request->input('status');

        // Salva as alterações no banco de dados
        $consulta->save();

        return response()->json(['message' => 'Consulta atualizada com sucesso', 'data' => $consulta], 200);
    }

    public function excluiConsulta(Request $request, $id)
    {
        // Encontra a consulta pelo ID
        $consulta = Consultas::find($id);

        // Verifica se a consulta foi encontrada
        if (!$consulta) {
            return response()->json(['message' => 'Consulta não encontrada'], 404);
        }

        // Deleta a consulta
        $consulta->delete();

        return response()->json(['message' => 'Consulta excluída com sucesso'], 200);
    }
    public function retornaConsultas(Request $request, $id = null, $idmedico = null, $idpaciente = null, $data = null)
    {
        $query = Consultas::query();

        // Verifique qual parâmetro está presente na rota e adicione a condição à consulta
        if ($id) {
            $query->where('id', $id);
        } elseif ($idmedico) {
            $query->where('idmedico', $idmedico);
        } elseif ($idpaciente) {
            $query->where('idpaciente', $idpaciente);
        } elseif ($data) {
            $query->whereDate('data', $data);
        } else {
            // Se nenhum parâmetro for fornecido, retorne todas as consultas
            $consultas = Consultas::all();
            return response()->json(['data' => $consultas], 200);
        }

        // Execute a consulta e obtenha os resultados
        $consultas = $query->get();

        if ($consultas->isEmpty()) {
            return response()->json(['message' => 'Nenhuma consulta encontrada'], 404);
        }

        return response()->json(['data' => $consultas], 200);
    }


}
