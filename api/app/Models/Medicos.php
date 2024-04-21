<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Medicos extends Model
{
    protected $table = 'medicos';
    protected $primaryKey = 'id';
    public $timestamps = false; 
    protected $fillable = ['nome', 'especialidade', 'crm']; // Campos que podem ser preenchidos em massa
}
