<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;


class UsuariosController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function excluiUsuario(Request $request, $id)
     {
         $usuario = User::find($id);
     
         if (!$usuario) {
             return response()->json(['message' => 'Usuário não encontrado'], 404);
         }
     
         $usuario->delete();
     
         return response()->json(['message' => 'Usuário excluído com sucesso'], 200);
     }
     public function cadastraUsuario(Request $request)
    {
       
        $dados = Validator::make($request->all(), [
            'email' => 'required|email|unique:usuarios,email',
            'tipo' => 'required|in:funcionario,medico,paciente',
        ]);

  
        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }

        $usuario = new User();
        $usuario->email = $request->input('email');
        $usuario->tipo = $request->input('tipo');
        
       //gerando senha
        $usuario->senha = hash_hmac('sha1', Carbon::now(), env('hmac'));


        // Salva o novo usuário no banco de dados
        $usuario->save();

        // Retorna os dados do novo usuário (sem a senha) como resposta
        $usuario->makeHidden(['senha']);
        
        return response()->json(['message' => 'Usuário cadastrado com sucesso', 'data' => $usuario], 201);
    }

    public function atualizaUsuario(Request $request, $id)
    {
        $dados = Validator::make($request->all(), [
            'email' => 'email|unique:usuarios,email,' . $id,
            'tipo' => 'in:funcionario,paciente,medico', 
        ]);
    
        if ($dados->fails()) {
            return response()->json(['errors' => $dados->errors()], 400);
        }
    
        // Encontra o usuário pelo ID
        $usuario = User::find($id);
    
        // Verifica se o usuário foi encontrado
        if (!$usuario) {
            return response()->json(['message' => 'Usuário não encontrado'], 404);
        }
    
        $usuario->email = $request->input('email', $usuario->email);
        $usuario->tipo = $request->input('tipo', $usuario->tipo);
    
        $usuario->save();
    
        $usuario->makeHidden(['senha']);
    
        return response()->json(['message' => 'Usuário atualizado com sucesso', 'data' => $usuario], 200);
    }
    
    public function retornaUsuarios(Request $request, $id = null)
    {
        $query = User::query();

        if ($id) {
            $query->where('id', $id);
        }  else {
           
            $usuarios = User::all();
            return response()->json(['data' => $usuarios], 200);
        }

        $usuarios = $query->get();
    
        if ($usuarios->isEmpty()) {
            return response()->json(['message' => 'Nenhum usuario encontrado'], 404);
        }
    
        return response()->json(['data' => $usuarios], 200);
    }
}

