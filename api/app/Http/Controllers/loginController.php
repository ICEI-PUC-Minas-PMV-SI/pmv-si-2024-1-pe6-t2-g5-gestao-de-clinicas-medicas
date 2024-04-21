<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Models\Acess;
use Carbon\Carbon;
use Symfony\Component\HttpFoundation\Cookie;

class loginController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Request $request )
    {
        //
    }

    public function login(Request $request){
        $email = $request->input('email');
        $password = hash_hmac('sha256', $request->input('password'), env('hmac'));
        
        $user = User::where('email', $email)->first();
    
        if ($user && $user->senha === $password) {

            //gerar token para envio ao cliente
            $token = hash_hmac('sha1', $user.Carbon::now(), env('hmac'));

            //insere token na tabela de acessos
            $acess = new Acess();
            $acess->token = $token;
            $acess->validade = Carbon::now()->addMinutes(30)->subHours(3);
            $acess->token = $token;
            $acess->id_usuario = $user->id;
            $acess->save();

            $response = new Response(['message' => 'email autenticado'], 200);
          
            $cookie = new Cookie('token', $token, $minutes = 0, $path = '/', $domain = null, $secure = true, $httpOnly = true);

            $response->withCookie($cookie);

            return $response;

        } else {

            return response()->json(['message' => 'Credenciais inválidas'], 401);

        }
    }

    public function register(Request $request){

        $email = $request->input('user');

        $senha = hash_hmac('sha256', $request->input('password'), env('hmac'));
        
        $tipo = $request->input('tipo');


        $user = new User();

        $user->email = $email;
        if(!$tipo || !$senha || !$email){
            return response()->json(['message' => 'Dados incompletos. Certifique-se de enviar email, senha e tipo.'], 400);
        }

        $user->senha = $senha;

        $user->tipo = $tipo;

        try {

            $user->save();
            return response()->json(['message' => 'Usuário cadastrado com sucesso'], 201);

        } catch (\Throwable $th) {

            return response()->json(['message' => 'Usuário nao cadastrado. Verifique os dados e tente novamente.'], 400);

        }

    }

}
