<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Http\Requests\StoreCategoriaRequest;
use App\Http\Requests\UpdateCategoriaRequest;
use App\Models\Produto;

class CategoriaController extends Controller
{
    protected $categorias;

    public function __construct(Categoria $categoria)
    {
        $this->categorias = $categoria;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categoria=$this->categorias->with('produto')->get();
        return response()->json($categoria,200);
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
    public function store(StoreCategoriaRequest $request)
    {
        $request->validate($this->categorias->rules(),$this->categorias->feedback());
        $categoria = $this->categorias->create($request->all());
        return response()->json($categoria ,201);
    }

    /**
     * Display the specified resource.
     * 
     * @param interger
     */
    public function show($id)
    {
        $categoria=$this->categorias->with('produto')->find($id);
        if ($categoria === null) {
            return response()->json(['erro' => 'Recurso pesquisado não existe'],404);
        }   
        return response()->json($categoria,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categoria $categoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoriaRequest $request, $id)
    {
        $categoria=$this->categorias->find($id);
        if ($categoria === null) {
            return response()->json(['erro' => 'Impossivel realizar a atualização. O recurso solicitado não existe.'],404);
        }   
        $request->validate($categoria->rules(), $categoria->feedback());
        $categoria->update($request->all());
        return response()->json($categoria,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $categoria=$this->categorias->find($id);
        if ($categoria === null) {
            return response()->json(['erro' => 'Impossivel realizar a exclusão. O recurso solicitado não existe.'],400);
        }    
        $categoria->delete();  
        return response()->json(['msg'=>'Excluido com sucesso'],200);
    }
}
