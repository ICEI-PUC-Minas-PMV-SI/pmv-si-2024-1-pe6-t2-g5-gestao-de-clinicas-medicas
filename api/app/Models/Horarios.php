<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Horarios extends Model
{
    protected $table = 'horarios';
    protected $primaryKey = 'id';
    public $timestamps = false; 
    protected $fillable = ['dia', 'horario_inicio', 'horario_fim', 'idmedico','disponivel'];
}
