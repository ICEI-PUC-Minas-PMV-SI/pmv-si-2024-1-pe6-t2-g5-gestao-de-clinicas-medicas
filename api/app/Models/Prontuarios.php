<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prontuarios extends Model
{
    protected $table = 'prontuarios';
    protected $primaryKey = 'id';
    public $timestamps = false; 
    protected $fillable = ['id_consulta', 'data_criacao', 'historico_medico', 'diagnostico', 'exames', 'prescricoes', 'tratamentos', 'observacoes', 'hash_medico'];
}
