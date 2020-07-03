function ver()
{
    let nota=parseFloat(document.getElementById('nota').value);
    let categoria="";
    if(nota>=17){
        categoria="La categoría es A"
    }
    else if(nota>=14){
        categoria="La categoría es B"
    }
    else if (nota>=12){
        categoria="La categoría es C"
    }
    else{
        categoria="La categoría es D"
    }
    document.curso.categoria.value=categoria;
}
function limpiar()
{
    document.getElementById("nota").value="";
   
}
