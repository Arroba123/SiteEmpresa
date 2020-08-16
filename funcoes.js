var todos = new Array;
// 0 = nome, 1 = salBruto, 2 = salLiquido, 3 = imposto

function calcular() {
    let nome = document.getElementById("fname");
    let valor = document.getElementById("fvalor");
    let horas = document.getElementById("fquant");
    let fsalb = document.getElementById("fsalb");
    let fsall = document.getElementById("fsall");
    let salBruto = valor.value * horas.value;
    let salLiquido = 0;
    if(salBruto>=22847.77) {  
        salLiquido = salBruto;
        todos[3] = "Isento";
    }
    if(salBruto>=22847.77 && salBruto<33919.91){
        salLiquido = salBruto - 1713.58;
        todos[3] = "7,5%";
    }
    if(salBruto>=33919.91 && salBruto<45012.61) {
        salLiquido = salBruto - 4257.57;
        todos[3] = "15%";
    }
    if(salBruto>=45012.61 && salBruto<55976.17) {
        salLiquido = salBruto - 7633.51;
        todos[3] = "22,5%";
    }      
    if(salBruto>=55976.16) {
        salLiquido = salBruto - 10432.32;
        todos[3] = "27,5%";
    }
    todos[0] = nome.value;
    todos[1] = salBruto;
    todos[2] = salLiquido;
    fsalb.value = salBruto;
    fsall.value = salLiquido;
    alert(todos);
}

function mostrar() {
    alert(todos);
}

function limar() {
    let nome = document.getElementById("fname").value = "";
    let valor = document.getElementById("fvalor").value = "";
    let horas = document.getElementById("fquant").value = "";
    let fsalb = document.getElementById("fsalb").value = "";
    let fsall = document.getElementById("fsall").value = "";
}