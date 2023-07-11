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

// Multi tipos
let infos: (string | number)[] = ["João", 1, "Maria", 3];

/**
 * Tuplas
 */
let boleto: [string, number, number] = ["Agua", 119.2, 2546225874931560];

/**
 * Arrays Métodos
 */

/**
 * Datas
 */
let anivessario : Date = new Date("2022-12-01 05:00");
console.log(anivessario.toString());

/**
 * Funções
 */
function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(4, 7);

console.log("A soma é: " + soma);

/**
 * Funções Multi Tipos
 */
function CallToPhone(phone: number | string): number | string {
    return phone;
}

console.log(CallToPhone(1213123123));
console.log(CallToPhone("1213123123-2"));

/**
 * Funções Async
 */
async function getDatabase(id: number): Promise<string> {
    return "Airton";
}

/**
 * Interfaces
 */
type robot = {
    readonly id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
}

const bot1: robot = {
    id: 1,
    name: "Megamam1",
}
const bot2: robot2 = {
    id: 1,
    name: "Megamam2",
}
console.log(bot1);
console.log(bot2);

 class Pessoas implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number , name: string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return "Olá";
    }
 }
 const p = new Pessoas (1, "gustm");
 console.log(p.sayHello);

 /**
  * classe
  */
 class Character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    atack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
 }

 const p1 = new Character('Forte',10,98);
 console.log(p1);