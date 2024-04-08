<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;
    protected $fillable = ['nomeProduto', 'valorProduto', 'dataVencimento', 'quantEstoque', 'produtoPerecivel', 'categoria_id' ];

    public function rules()
{
    return [
        'nomeProduto' => 'required|unique:produtos,nomeProduto',
        'valorProduto' => 'required|numeric|min:0',
        'dataVencimento' => 'required|date',
        'quantEstoque' => 'required|integer|min:0',
        'produtoPerecivel' => 'required|boolean',
        'categoria_id' => 'required|exists:categorias,id',
    ];
}
 
    
    
    public function feedback(){
        return [
            'nomeProduto.required' => 'O campo nome do produto é obrigatório.',
            'nomeProduto.unique' => 'O nome do produto já está em uso.',
            'valorProduto.required' => 'O campo valor do produto é obrigatório.',
            'valorProduto.numeric' => 'O campo valor do produto deve ser numérico.',
            'dataVencimento.required' => 'O campo data de vencimento é obrigatório.',
            'dataVencimento.date' => 'O campo data de vencimento deve ser uma data válida.',
            'quantEstoque.required' => 'O campo quantidade em estoque é obrigatório.',
            'quantEstoque.integer' => 'O campo quantidade em estoque deve ser um número inteiro.',
            'produtoPerecivel.required' => 'O campo produto perecível é obrigatório.',
            'produtoPerecivel.boolean' => 'O campo produto perecível deve ser verdadeiro ou falso.',
            'categoria_id.required' => 'O campo categoria é obrigatório.',
            'categoria_id.exists' => 'A categoria selecionada não é válida.',
        ];
    }

    public function categoria(){
        return $this->belongsTo('App\Models\Categoria');
    }
    
}
