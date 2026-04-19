// https://developer.mozilla.org/es/docs/Glossary/JSON
// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON

let jsonData;
let jsonSearch = document.getElementById("searching");
function login(){

    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if(user == "" || password == ""){
        alert("Please, fill in the blanks");
    }else if(user == "admin" && password == "admin"){
        alert("Welcome, admin");
        jsonSearch.textContent = "Searching . . .";
        obtainData(); 
    }else{
        alert("Incorrect username or password");
    }
}

function obtainData(){
    
    let resultSearch = document.getElementById("jsonExtraer");   
    resultSearch.innerHTML = "";

    fetch('resumen.json')
    .then(res => res.json())
    .then((output) => {
        jsonData = output;

        for(let dato in jsonData){
            let listData = document.createElement("li");

            if(dato == "saldo"){
                let saldoTexto = "";

                for(let i = 0; i < jsonData[dato].length; i++){
                    saldoTexto += `${jsonData[dato][i].moneda}: ${jsonData[dato][i].monto}`;

                    if(i < jsonData[dato].length - 1){
                        saldoTexto += " | ";
                    }
                }

                listData.textContent = `${dato}: ${saldoTexto}`;
            }else{
                listData.textContent = `${dato}: ${jsonData[dato]}`;
            }

            resultSearch.appendChild(listData);
        }
    })
    .catch(function(error){
        alert("Hubo un error: "+error);
    })
}
