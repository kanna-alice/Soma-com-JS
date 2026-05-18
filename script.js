var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var res = document.getElementById("res");
var imagem = document.getElementById("fofa");
function calcular(){
    var num1 = Number(n1.value);
    var num2 = Number(n2.value);
    var result = num1 + num2;
    res.textContent = `sua soma deu ${result}`;
    if (n1.value.length == "" || n2.value.length == ""){
        res.textContent = "preencha os campos para calcular";
        document.body.style.background = "#000000"
        imagem.src = "https://i.pinimg.com/736x/36/ae/69/36ae69fa3ccb66012b6f0a231312e7b2.jpg"
        return;
    }
    
    
    if(result > 10){
        res.textContent = `a soma entre ${num1} e ${num2} é ${result}`
        imagem.src = "https://i.pinimg.com/originals/32/a1/a6/32a1a6d07b669a4ddce4155093f14478.gif"
        document.body.style.background = "#01d0ff"
        
    }
    else if(result <= 10){
        res.textContent = `a soma entre ${num1} e ${num2} é ${result}` 
        imagem.src = "https://i.pinimg.com/736x/0a/76/c5/0a76c5d8263a38bea01bb1d19e8f4eeb.jpg"
        document.body.style.background = "#ff0000"
    }
    n1.value = "";
    n2.value = "";
    focus();
}
