
// try {
//     const valor = 10 / 0;
//     console.log("Valor:", valor);
// }
// catch (erro) {
//     console.error("ocorreu um erro:", erro.message);
// }
// finally {
//     console.log("Este codigo é executado independentemente de exceções");
// }




// try {
//     let nome = document.getElementById("nome").value
// }
// catch (e) {
//     alert("algo deu errado " + e.message)
// }




// function dividir (a,b) {
//     if (b === 0){
//         throw "Divisão por zero não é permitida."
//     }
//     return a / b;

// }

// try {
//     const resultado = dividir(10, 0);
//     console.log("Resultado:", resultado);
// }
// catch (erro) {
//     console.error("Ocorreu um erro:", erro);
// }


// function validarIdade(idade) {
// if (typeof idade !== 'number' || idade < 0) {
//     throw "A idade deve ser um número positivo.";
// }
// if (idade < 18) {
//     throw "você é menor de idade e não pode acessar este conteúdo.";
// }
// console.log("Acesso permitido. Bem-vindo!")
// }

// try {
//     validarIdade(15);
// }
// catch (erro) {
//     console.error("Ocorreu um erro:", erro);
// }