function SomaSimples () {
    return 3 + 4;
}

console.log(SomaSimples());

function SomaComParametros (n1, n2) {
    return n1 + n2;
}

console.log(SomaComParametros(4, 7)); 

//Função anônima ou Arrow Function
const Potencia = (n, e) => {
    console.log(`${n} elevado a ${e} é igual a ${Math.pow(n, e)}`); 
}

Potencia(2,3);


//Função que calcule a média do aluno e exiba o resultado
//Se a média do aluno for >= 6,00 = Aprovado
//Se a média do aluno for >= 4,00 || < 6 = Recuperação
//Se a média do aluno for < 4 = Repetiu

function Media (nota1, nota2, nota3, nota4) {
    result = (nota1 + nota2 + nota3 + nota4) / 4;
    if (result >= 6) {
        console.log(`A nota do aluno é igual a ${result} e ele está aprovado!`);
    }
    else if (result >= 4 || result > 6) {
        console.log(`A nota do aluno é igual a ${result} e ele está de recuperação!`);
    }
    else {
        console.log(`A nota do aluno é igual a ${result} e ele está reprovado. Melhore.`);
    }
}

Media (2,2,2,2);

/*
Versão do professor

const ResultadoMedia = (n1, n2) => {
    let media = (n1 + n2) / 4
    if (media < 4.00) {
        return 'Reprovado'
    }
    else if (media < 6.00) {
        return 'Recuperação'
    }
    else { 
        return 'Aprovado'
    }
}

console.log(ResultadoMedia(6.00, 4.00))
*/
// ==============================================================
/*

Versão ainda mais otimizada 

const ResultadoMediaII = (n1, n2) => {
    let media = (n1 + n2) / 4
    if (media >= 6.00) {
        return 'Aprovado'
    }
    else if (media >= 4.00) {
        return 'Recuperação'
    }
    else { 
        return 'Reprovado'
    }
}

console.log(ResultadoMediaII(6.00, 4.00))

*/

/*

Versão melhor para o mercado = DIMINUIR A LÓGICA AO MÁXIMO

const ResultadoMediaIII = (n1, n2) => {
    let media = (n1 + n2) / 4
    if (media < 4.00) {
        return 'REprovado'
    }
    if (media < 6.00) {
        return 'Recuperação'
    } 
        return 'Reprovado'
    
}

o mercado NÃO usa ELSE
o RETURN para o código depois de exibir seu resultado, então o else não é necessário pois o return ja é a opção alternativa aos if's

console.log(ResultadoMediaII(6.00, 4.00))

*/
