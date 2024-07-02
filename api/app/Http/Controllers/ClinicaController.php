<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Clinica;
use Illuminate\Support\Facades\Validator;

class ClinicaController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function cadastraClinica(Request $request)
    {
        // Valida os dados recebidos do request
        $dados = Validator::make($request->all(), [
            'razao_social' => 'required|string|max:255',
            'cnpj' => 'required|string|max:255',
            'logradouro' => 'required|string|max:255',
            'numero' => 'required|integer',
            'bairro' => 'required|string|max:255',
            'cidade' => 'required|string|max:255',
            'uf' => 'required|string|max:2',
            'telefone' => 'required|string|max:255'
        ]);

        // Verifica se a validação falhou
        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }

        // Cria uma nova clínica com os dados recebidos
        $clinica = new Clinica();
        $clinica->razao_social = $request->input('razao_social');
        $clinica->cnpj = $request->input('cnpj');
        $clinica->logradouro = $request->input('logradouro');
        $clinica->numero = $request->input('numero');
        $clinica->bairro = $request->input('bairro');
        $clinica->cidade = $request->input('cidade');
        $clinica->uf = $request->input('uf');
        $clinica->telefone = $request->input('telefone');

        // Salva a nova clínica no banco de dados
        $clinica->save();

        return response()->json(['message' => 'Clínica cadastrada com sucesso', 'data' => $clinica], 201);
    }

    public function atualizaClinica(Request $request, $id)
    {
        $dados = Validator::make($request->all(), [
            'razao_social' => 'required|string|max:255',
            'cnpj' => 'required|string|max:255',
            'logradouro' => 'required|string|max:255',
            'numero' => 'required|integer',
            'bairro' => 'required|string|max:255',
            'cidade' => 'required|string|max:255',
            'uf' => 'required|string|max:2',
            'telefone' => 'required|string|max:255'
        ]);

        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }

        $clinica = Clinica::find($id);

        if (!$clinica) {
            return response()->json(['message' => 'Clínica não encontrada'], 404);
        }

        $clinica->razao_social = $request->input('razao_social');
        $clinica->cnpj = $request->input('cnpj');
        $clinica->logradouro = $request->input('logradouro');
        $clinica->numero = $request->input('numero');
        $clinica->bairro = $request->input('bairro');
        $clinica->cidade = $request->input('cidade');
        $clinica->uf = $request->input('uf');
        $clinica->telefone = $request->input('telefone');

        $clinica->save();

        return response()->json(['message' => 'Clínica atualizada com sucesso', 'data' => $clinica], 200);
    }

    public function deletaClinica($id)
    {
        $clinica = Clinica::find($id);

        if (!$clinica) {
            return response()->json(['message' => 'Clínica não encontrada'], 404);
        }

        $clinica->delete();

        return response()->json(['message' => 'Clínica excluída com sucesso'], 200);
    }

    public function retornaClinicas()
    {
        $clinicas = Clinica::all();

        return response()->json(['data' => $clinicas], 200);
    }
}
