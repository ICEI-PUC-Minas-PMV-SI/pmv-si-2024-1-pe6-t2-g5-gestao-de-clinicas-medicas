<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;
use App\Models\Acess;
use Carbon\Carbon;

class Authenticate
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {   
        // verifica token valido e ativo nos cookies do usuario
        // $token = $request->header('token');
        
        //pegando token
        $token = $request->header('Authorization');
        $token = explode(" ", $token);
        $token = $token[1];


        $validade = Carbon::now()->subHours(3);
    
        $acesso = Acess::where('token', $token)
                       ->where('validade','>', $validade)
                       ->exists();

        if (!$acesso) {
            return response('Unauthorized.', 401);
        }

        //atualizar o token - significa que o usuario esta ativo no sistema
        $validade = Carbon::now()->addMinutes(30)->subHours(3);
        
        Acess::where('token', $token)->update(['validade' => $validade]);
        
        return $next($request);
    }
}
