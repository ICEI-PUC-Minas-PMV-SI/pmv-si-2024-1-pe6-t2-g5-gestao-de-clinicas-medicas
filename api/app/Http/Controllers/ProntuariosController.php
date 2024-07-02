<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Acess;
use App\Models\Prontuarios;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;


class ProntuariosController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function cadastraProntuarios(Request $request)
    {
        $dados = Validator::make($request->all(), [
            'id_consulta' => 'required|integer',
            'data_criacao' => 'required|date',
            'historico_medico' => 'required|string',
            'diagnostico' => 'required|string',
            'exames' => 'nullable|string',
            'prescricoes' => 'nullable|string',
            'tratamentos' => 'nullable|string',
            'observacoes' => 'nullable|string',
            'hash_medico' => 'required|string|max:255'
        ]);
    
        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }
    
        $prontuario = new Prontuarios();
        $prontuario->id_consulta = $request->input('id_consulta');
        $prontuario->data_criacao = $request->input('data_criacao');
        $prontuario->historico_medico = $request->input('historico_medico');
        $prontuario->diagnostico = $request->input('diagnostico');
        $prontuario->exames = $request->input('exames');
        $prontuario->prescricoes = $request->input('prescricoes');
        $prontuario->tratamentos = $request->input('tratamentos');
        $prontuario->observacoes = $request->input('observacoes');
        $prontuario->hash_medico = $request->input('hash_medico');
    
        $prontuario->save();
    
        return response()->json(['message' => 'Prontuário cadastrado com sucesso', 'data' => $prontuario], 201);
    }
    public function excluiProntuario(Request $request, $id)
    {
        $prontuario = Prontuarios::find($id);

        if (!$prontuario) {
            return response()->json(['message' => 'Prontuário não encontrado'], 404);
        }

        $prontuario->delete();

        return response()->json(['message' => 'Prontuário excluído com sucesso'], 200);
    }
    public function atualizaProntuario(Request $request, $id)
    {   
        $hash_medico = hash_hmac('sha1', json_encode($request->all()), env('APP_KEY'));

        $dados = Validator::make($request->all(), [
            'id_consulta' => 'required|integer',
            'data_criacao' => 'required|date',
            'historico_medico' => 'required|string',
            'diagnostico' => 'required|string',
            'exames' => 'nullable|string',
            'prescricoes' => 'nullable|string',
            'tratamentos' => 'nullable|string',
            'observacoes' => 'nullable|string'
        ]);

        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }

        $prontuario = Prontuarios::find($id);

        if (!$prontuario) {
            return response()->json(['message' => 'Prontuário não encontrado'], 404);
        }

        $prontuario->id_consulta = $request->input('id_consulta');
        $prontuario->data_criacao = $request->input('data_criacao');
        $prontuario->historico_medico = $request->input('historico_medico');
        $prontuario->diagnostico = $request->input('diagnostico');
        $prontuario->exames = $request->input('exames');
        $prontuario->prescricoes = $request->input('prescricoes');
        $prontuario->tratamentos = $request->input('tratamentos');
        $prontuario->observacoes = $request->input('observacoes');
        $prontuario->hash_medico = $hash_medico;

        $prontuario->save();

        return response()->json(['message' => 'Prontuário atualizado com sucesso', 'data' => $prontuario], 200);
    }
    public function retornaProntuarios(Request $request, $id = null, $idmedico = null, $idpaciente = null)
    {
        $query = Prontuarios::query();

        if ($id) {
            $query->where('prontuarios.id', $id)
            ->join('consultas', 'prontuarios.id_consulta', '=', 'consultas.id')
            ->join('medicos', 'consultas.idmedico', '=', 'medicos.id')
            ->join('pacientes', 'consultas.idpaciente', '=', 'pacientes.id')
            ->select(
                'prontuarios.*',
                'consultas.*',
                'medicos.*',
                'pacientes.*',
                'medicos.nome as nome_medico'
            );
        }

        if ($idmedico) {
            $query->where('idmedico', $idmedico)
                  ->join('consultas', 'prontuarios.id_consulta', '=', 'consultas.id')
                  ->join('medicos', 'consultas.idmedico', '=', 'medicos.id')
                  ->join('pacientes', 'consultas.idpaciente', '=', 'pacientes.id')
                  ->select(
                    'prontuarios.*',
                    'consultas.*',
                    'medicos.*',
                    'pacientes.*',
                    'medicos.nome as nome_medico'
                );
        }

        if ($idpaciente) {
            $query->where('idpaciente', $idpaciente)
                  ->join('consultas', 'prontuarios.id_consulta', '=', 'consultas.id')
                  ->join('medicos', 'consultas.idmedico', '=', 'medicos.id')
                  ->join('pacientes', 'consultas.idpaciente', '=', 'pacientes.id')
                  ->select(
                    'prontuarios.*',
                    'consultas.*',
                    'medicos.*',
                    'pacientes.*',
                    'medicos.nome as nome_medico'
                    );
        }

        $query = Prontuarios::join('consultas', 'prontuarios.id_consulta', '=', 'consultas.id')
                ->join('medicos', 'consultas.idmedico', '=', 'medicos.id')
                ->join('pacientes', 'consultas.idpaciente', '=', 'pacientes.id')
                ->select(
                    'prontuarios.*',
                    'consultas.*',
                    'medicos.*',
                    'pacientes.*',
                    'medicos.nome as nome_medico'
                );
    $prontuarios = $query->get();

        if ($prontuarios->isEmpty()) {
            return response()->json(['message' => 'Nenhum prontuário encontrado'], 404);
        }

        return response()->json(['data' => $prontuarios], 200);
    }


}
