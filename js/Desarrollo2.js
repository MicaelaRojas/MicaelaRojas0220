function limpiar()
{
    document.getElementById("numero").value="";
    document.getElementById("cat").value=""; 
    document.getElementById("condicion").value="";    
}
function ver()
{
    let numero=parseFloat(document.getElementById('numero').value);
    let cat=document.getElementById('cat').value;
    let condicion=document.getElementById('condicion').value;
    let bonoHijos="";
    let bonoCond="";
    let sbruto=0;
    let bonoTotal=0;
    
    if(numero<=3){
        bonoHijos=numero*25
    }
    else if(numero>3){
        bonoHijos=75+((numero-3)*10)
    }
    document.curso.bonoHijos.value=bonoHijos;
    
    if(cat== "a" || cat== "A" ){
        sbruto=2350;
    }
    else if(cat  == "b" || cat== "B" ){
        sbruto=2000;
    }
    else if(cat  == "c" || cat== "C" ){
        sbruto=1800;
    }
    else if(cat == "d" || cat== "D" ){
        sbruto=1500;
    }
    document.curso.sbruto.value=sbruto;

    if(condicion== "contratado"){
        bonoCond=sbruto*0.10    
    }
    else if(condicion== "nombrado"){
        bonoCond=sbruto*0.15  
    }
    document.curso.bonoCond.value=bonoCond;
    
    bonoTotal= bonoHijos + bonoCond
    document.curso.bonoTotal.value=bonoTotal;   

}