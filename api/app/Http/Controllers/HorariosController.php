<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Horarios;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;


class HorariosController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function cadastraHorario(Request $request)
    {
        // Valida os dados recebidos do request
        $dados = Validator::make($request->all(), [
            'dia' => 'required|string|max:255',
            'horario_inicio' => 'required|date_format:H:i',
            'horario_fim' => 'required|date_format:H:i|after:horario_inicio',
            'idmedico' => 'required|integer'
        ]);
    
        // Verifica se a validação falhou
        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }
    
        // Cria um novo horário com os dados recebidos
        $horario = new Horarios();
        $horario->dia = $request->input('dia');
        $horario->horario_inicio = $request->input('horario_inicio');
        $horario->horario_fim = $request->input('horario_fim');
        $horario->idmedico = $request->input('idmedico');
    
        // Salva o novo horário no banco de dados
        $horario->save();
    
        return response()->json(['message' => 'Horário cadastrado com sucesso', 'data' => $horario], 201);
    }

    public function atualizaHorario(Request $request, $id)
    {
        $dados = Validator::make($request->all(), [
            'dia' => 'required|string|max:255',
            'horario_inicio' => 'required|date_format:H:i',
            'horario_fim' => 'required|date_format:H:i|after:horario_inicio',
            'idmedico' => 'required|integer'
        ]);

        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }


        $horario = Horarios::find($id);

        if (!$horario) {
            return response()->json(['message' => 'Horário não encontrado'], 404);
        }


        $horario->dia = $request->input('dia');
        $horario->horario_inicio = $request->input('horario_inicio');
        $horario->horario_fim = $request->input('horario_fim');
        $horario->idmedico = $request->input('idmedico');

        $horario->save();

        return response()->json(['message' => 'Horário atualizado com sucesso', 'data' => $horario], 200);
    }

    public function deletaHorario(Request $request, $id)
    {
        $horario = Horarios::find($id);

        if (!$horario) {
            return response()->json(['message' => 'Horário não encontrado'], 404);
        }

        $horario->delete();

        return response()->json(['message' => 'Horário excluído com sucesso'], 200);
    }
    public function retornaHorarios(Request $request)
    {
        $horarios = Horarios::all();

        return response()->json(['data' => $horarios], 200);
    }

}

