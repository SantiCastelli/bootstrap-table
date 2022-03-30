
let url = "https://disease.sh/v3/covid-19/countries/Spain,Italy,japan"

let form = document.forms["country-form"].elements["send"];

form.addEventListener("click", function(e){
 e.preventDefault();
 let valor = document.forms["country-form"].elements["country"].value;
console.log(valor);

url = url+","+valor

$("#table").bootstrapTable('refresh', {
    url: `${url}`
  })
});


function customDate(value){
    let date = new Date(value);
    return date.toLocaleDateString()
}

function cellStyle(value){  
    
    if (value > 100000){
        return {
            css : {
                background: "yellow"
            }
        }
    }
    return {
        css : {
            background: "green"
        }
    }
    
}