let bot = document.querySelector("#botao");
bot.addEventListener("click", start);
function start(){

        let nasc = Number(document.getElementById("nasc").value);
        let inp = document.querySelector("input[name='sexo']:checked");
        let idade = 2019 - nasc;
        let img = document.querySelector("#imagem");
        let frase = document.getElementById("pree");

         if (inp.value == "masculino"){
             var num = 1;
        } else {
             var num = 2;
        }

        if (num == 1 & idade > 0 & idade < 5){ // só utiliza um &
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/M1_4.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma criança-menino com ${idade} anos.`;
        }
        else if(num == 1 & idade > 4 & idade < 9){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/M5_8.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos um menino com ${idade} anos.`;
        }
        else if(num == 1 & idade > 8 & idade < 13){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/M9_12.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos um pré-adolescente homem com ${idade} anos.`;
        }
        else if(num == 1 & idade > 12 & idade < 19){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/M13_18.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos um homem adolescente com ${idade} anos.`;
        }
        else if(num == 1 & idade > 18 & idade < 26){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/M19_25.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos um homem com ${idade} anos.`;
        }
        else if(num == 1 & idade > 25 & idade < 36){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/M26_35.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos um homem com ${idade} anos.`;
        }
        else if (num == 1 & idade > 35 & idade < 51){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/M36_50.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos um homem com ${idade} anos.`;
        }
        else if (num == 1 & idade > 50 & idade < 61){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/M51_60.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos um homem de meia idade com ${idade} anos.`;
        }
        else if (num == 1 & idade > 60 & idade < 100){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/M61_99.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos um idoso com ${idade} anos.`;
        }
        else if (num == 1 & idade > 99 & idade < 121){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/M100_120.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos um centenário com ${idade} anos. Parabéns!!`;
        }

        else if (num == 2 & idade > 0 & idade < 5){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/F1_4.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma criança-menina com ${idade} anos.`;
        }
        else if (num == 2 & idade > 4 & idade < 9){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/F5_8.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma menina com ${idade} anos.`;
        }
        else if (num == 2 & idade > 8 & idade < 13){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/F9_12.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma pré-adolescente mulher com ${idade} anos.`;
        }
        else if (num == 2 & idade > 12 & idade < 19){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/F13_18.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma mulher adolescente com ${idade} anos.`;
        }
        else if (num == 2 & idade > 18 & idade < 26){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/F19_25.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma mulher com ${idade} anos.`;
        }
        else if (num == 2 & idade > 25 & idade < 36){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/F26_35.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma mulher com ${idade} anos.`;
        }
        else if (num == 2 & idade > 35 & idade < 51){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/F36_50.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma mulher com ${idade} anos.`;
        }
        else if (num == 2 & idade > 50 & idade < 61){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/F51_60.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma mulher de meia idade com ${idade} anos.`;
        }
        else if (num == 2 & idade > 60 & idade < 100){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/F61_99.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma idosa com ${idade} anos.`;
        }
        else if (num == 2 & idade > 99 & idade < 121){
            img.style.width = "200px";
            img.style.height = "100%";
            img.src = "../imagens/F100_120.jpg";
            img.style.border = "1px solid gray";
            frase.innerHTML = `Detectamos uma centenária com ${idade} anos. Parabéns!!`;
        }
        else{
            alert("Erro coloque um ano válido");
        }
    }