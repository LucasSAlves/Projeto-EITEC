<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use App\Http\Requests\StoreProdutoRequest;
use App\Http\Requests\UpdateProdutoRequest;

class ProdutoController extends Controller
{
    protected $produtos;

    public function __construct(Produto $produto)
    {
        $this->produtos = $produto;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $produtos=$this->produtos->with('categoria')->get();
        return response()->json($produtos,200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProdutoRequest $request)
    {
        $request->validate($this->produtos->rules(),$this->produtos->feedback());
        $produtos = $this->produtos->create([
            'nomeProduto'=>$request->nomeProduto,
            'valorProduto'=>$request->valorProduto,
            'dataVencimento'=>$request->dataVencimento,
            'quantEstoque'=>$request->quantEstoque,
            'produtoPerecivel'=>$request->produtoPerecivel,
            'categoria_id'=>$request->categoria_id
        ]);
        return response()->json($produtos ,201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $produto=$this->produtos->with('categoria')->find($id);
        if ($produto === null) {
            return response()->json(['erro' => 'Recurso pesquisado não existe'],404);
        }   
        return response()->json($produto,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produto $produto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProdutoRequest $request, $id)
    {
        $produto=$this->produtos->find($id);
        if ($produto === null) {
            return response()->json(['erro' => 'Impossivel realizar a atualização. O recurso solicitado não existe.'],404);
        }   
        $request->validate($produto->rules(), $produto->feedback());
        $produto->update($request->all());
        return response()->json($produto,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $produto=$this->produtos->find($id);
        if ($produto === null) {
            return response()->json(['erro' => 'Impossivel realizar a exclusão. O recurso solicitado não existe.'],400);
        }    
        $produto->delete();  
        return response()->json(['msg'=>'Excluido com sucesso'],200);
    }
}
