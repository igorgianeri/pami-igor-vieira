let cidades: string[] = ['São Paulo', 'Guarulhos', 'Rio de Janeiro', 'Belo Horizonte', 'Manaus'];

function listarCidades(cidades: string[]): void {
    cidades.forEach (cidade => {
        console.log(cidade);
    });
}

listarCidades(cidades);