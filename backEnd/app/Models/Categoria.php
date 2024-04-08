<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $fillable = ['nome'];

    public function rules(){
        return [
            'nome'=>'required|unique:categorias,nome'];
    }

    public function feedback(){
        return [
            'required'=>response()->json('O campo :attribute é obrigatório', 400),
            'nome.unique'=>response()->json('O nome ja existe', 400)
        ];
    }

    public function produto(){
        return $this->hasMany('App\Models\Produto');
    }
}
