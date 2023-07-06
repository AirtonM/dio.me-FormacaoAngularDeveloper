"use strict";
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
