"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Airton";
let idade = 24;
let altura = 1.77;
// Tipos Especiais: null ,undefined
let nulo = null;
let indefinido = undefined;
// Tipos abragentes: any, void
let retorno;
let retornoView = false; // Aceita qualquer coisa
// Objeto - sem previsibilidade
let produto = {
    descricao: "Mouse",
    preco: 30,
    disponivel: true,
};
let meuProduto = {
    descricao: 'Teclado',
    preco: 59.86,
    disponivel: true,
};
/**
 * Arrays
 */
let numeros = [1, 2, 3];
// Array de número (todos os elementos devem ser do mesmo tipo)
let numeros2 = [1, 2, 3];
// Multi tipos
let infos = ["João", 1, "Maria", 3];
/**
 * Tuplas
 */
let boleto = ["Agua", 119.2, 2546225874931560];
/**
 * Arrays Métodos
 */
/**
 * Datas
 */
let anivessario = new Date("2022-12-01 05:00");
console.log(anivessario.toString());
/**
 * Funções
 */
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log("A soma é: " + soma);
/**
 * Funções Multi Tipos
 */
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone(1213123123));
console.log(CallToPhone("1213123123-2"));
/**
 * Funções Async
 */
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Airton";
    });
}
const bot1 = {
    id: 1,
    name: "Megamam1",
};
const bot2 = {
    id: 1,
    name: "Megamam2",
};
console.log(bot1);
console.log(bot2);
class Pessoas {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "Olá";
    }
}
const p = new Pessoas(1, "gustm");
console.log(p.sayHello);
