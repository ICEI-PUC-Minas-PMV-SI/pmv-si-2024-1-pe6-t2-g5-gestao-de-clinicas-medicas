<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Acess;
use App\Models\Medicos;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;


class MedicosController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function retornaMedicos(Request $request, $id = null, $especialidade = null, $crm = null, $nome = null)
    {
        $query = Medicos::query();
    
        // Verifica qual parâmetro está presente na rota
        if ($id) {
            $query->where('id', $id);
        } elseif ($especialidade) {
            $query->where('especialidade', $especialidade);
        } elseif ($crm) {
            $query->where('crm', $crm);
        } elseif ($nome) {
            $query->where('nome', 'like', '%' . $nome . '%');
        } else {
            // Se nenhum parâmetro for fornecido, retorne todos os médicos
            $medicos = Medicos::all();
            return response()->json(['data' => $medicos], 200);
        }
    
        $medicos = $query->get();
    
        if ($medicos->isEmpty()) {
            return response()->json(['message' => 'Nenhum médico encontrado'], 404);
        }
    
        return response()->json(['data' => $medicos], 200);
    }

    public function atualizaMedicos(Request $request, $id)
    {
        
        $dados = Validator::make($request->all(), [
            'nome' => 'required|string|max:255',
            'especialidade' => 'required|string|max:255',
            'crm' => 'required|string|max:255'
        ]);
        if ($dados->fails()) {
            
            return response()->json(['errors' => $dados->errors()], 400);
        }
        $medico = Medicos::find($id);

        if (!$medico) {
            return response()->json(['message' => 'Médico não encontrado'], 404);
        }

        $medico->nome = $request->input('nome');
        $medico->especialidade = $request->input('especialidade');
        $medico->crm = $request->input('crm');
       

        $medico->save();

        return response()->json(['message' => 'Médico atualizado com sucesso', 'data' => $medico], 200);
    }

    public function cadastraMedicos(Request $request)
    {

        $dados = Validator::make($request->all(), [
            'nome' => 'required|string|max:255',
            'especialidade' => 'required|string|max:255',
            'crm' => 'required|string|max:255'
        ]);
        if ($dados->fails()) {
            
            return response()->json(['errors' => $dados->errors()], 400);
        }

        $medico = new Medicos();
        $medico->nome = $request->input('nome');
        $medico->especialidade = $request->input('especialidade');
        $medico->crm = $request->input('crm');

        $medico->save();

        return response()->json(['message' => 'Médico cadastrado com sucesso', 'data' => $medico], 201);
    }

    public function excluirMedico(Request $request, $id)
    {
        $medico = Medicos::find($id);

        if (!$medico) {
            return response()->json(['message' => 'Médico não encontrado'], 404);
        }

        $medico->delete();

        return response()->json(['message' => 'Médico excluído com sucesso'], 200);
    }

}
