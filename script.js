function frutas(){
    let carrodafruta = [`Uva`, `Laranja`, `Maçã`, `Tangerina`, `Carambola`];
    console.log(`Temos:`);
    for (let i=0; i < carrodafruta.length; i++)
    {
        console.log(carrodafruta[i])
    }
}

function notas(){
    let notas = [5.5, 7.2, 8.3, 6.0, 9.1];
    let redondo = notas.map(n => Math.round(n));
    console.log(notas);
    console.log(redondo);
}

function pares(){
    let nums = [3, 8, 15, 22, 5, 10];
    let pares = nums.filter(nums => nums % 2 ===0);
    console.log(nums);
    console.log(pares);
}

function fruta(){
    let frutas = [`Uva`, `Maçã`, `Banana`, `Laranja`];
    console.log(frutas);
    frutas.sort();
    console.log(frutas)
}

function soma(){
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let soma = nums.reduce((acc, val) => acc + val, 0);
    console.log(nums)
    console.log(soma)
}


let emojis = Array.from("🚲🐶🍕🎧😂🌈⚽🚀🐱🏖🎲📚🦄💡😈👿👹👺💀👻👽🤖🎃😺😸🎨😀🎂🌍📷🎵🍔🏀🎮🐸✈🎁⛵🤖🧩📱🐧");
const span = document.querySelector("#emojiSpan");
function sorteia() {
for (let i = emojis.length - 1; i > 0; i--){
       const j = Math.floor(Math.random() * (i + 1));
    let aux = emojis[i];
    emojis[i] = emojis[j];
    emojis[j] = aux;
    }
let sorteados = emojis.slice(0,5).join(" - ");
    span.innerHTML = `<b>${sorteados}</b>`;
}
