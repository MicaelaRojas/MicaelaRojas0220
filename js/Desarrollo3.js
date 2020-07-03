function limpiar()
{
    document.getElementById("impTotalVendido").value="";
    document.getElementById("hijos").value="";  
}
function calcular()
{
    let impTotalVendido=parseFloat(document.getElementById('impTotalVendido').value);
    let hijos=parseFloat(document.getElementById('hijos').value);
    let comision=0;
    let bonificacion=0;
    let sbruto=0;
    let sdescuento=0;
    let sneto=0;

    comision =0.075 * impTotalVendido;
    document.curso.comision.value=comision;

    bonificacion = 50 * hijos;
    document.curso.bonificacion.value=bonificacion;
    
    sbruto = 600 + comision + bonificacion;
    document.curso.sbruto.value=sbruto;

    sdescuento = 0.11 * sbruto;
    document.curso.sdescuento.value=sdescuento;

    sneto = sbruto - sdescuento;
    document.curso.sneto.value=sneto;   
}