<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clinica extends Model
{
    protected $table = 'dados_clinica';
    protected $primaryKey = 'id';
    public $timestamps = false; 
    protected $fillable = ['razao_social', 'cnpj', 'logradouro', 'numero', 'bairro', 'cidade', 'uf', 'telefone'];
}
