// tipos primitivos: boolean, number, string
let ligado : boolean = false;
let nome  : string = "Airton";
let idade : number = 24;
let altura : number = 1.77;

// Tipos Especiais: null ,undefined
let nulo : null = null;
let indefinido : undefined = undefined;

// Tipos abragentes: any, void
let retorno : void;
let retornoView : any = false; // Aceita qualquer coisa

// Objeto - sem previsibilidade
let produto : object = {
    descricao:"Mouse",
    preco:30,
    disponivel: true,
}

// Objeto tipado - com previsibilidade
type ProdutoLoja = {
    descricao: string;
    preco: number;
    disponivel: boolean;
}

let meuProduto: ProdutoLoja = {
    descricao: 'Teclado',
    preco: 59.86,
    disponivel: true,
}

/**
 * Arrays
 */
let numeros : number[]=[1,2,3];
// Array de número (todos os elementos devem ser do mesmo tipo)
let numeros2 : Array<number> = [1,2,3];