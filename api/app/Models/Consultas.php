<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Consultas extends Model
{
    protected $table = 'consultas';
    protected $primaryKey = 'id';
    public $timestamps = false; 
    protected $fillable = ['idmedico', 'idpaciente', 'data', 'horario_inicio', 'horario_fim', 'posicao', 'status'];
}
