<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Acess extends Model
{
    protected $table = 'acess_token';
    protected $primaryKey = 'id';
    public $timestamps = false; 
    protected $fillable = ['id_usuario', 'token', 'validade']; 
}
