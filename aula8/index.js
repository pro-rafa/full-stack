/*rafael tem 30 anos, pesa 82kg, tem 1.76 de altura e seu IMC é de  
Rafael nasceu em 1994
*/ 

const nome = 'rafael'
const sobrenome = 'euzebio'
const idade = '30'
const peso = '82'
const alturaEmCm = '1.76'
let imc; //peso / (altura*altura)  ''
let anoNascimento;
const ano = '2024'

imc = peso/(alturaEmCm*alturaEmCm)

console.log(imc);

anoNascimento = ano-idade

console.log(anoNascimento);

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmCm} de altura, seu IMC é de ${imc} e nasceu em ${anoNascimento}.`);






