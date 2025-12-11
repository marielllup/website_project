if(document.getElementById('vinile1')!=null){
    const vinile1JS = new Image();
    vinile1JS.src="immagini/vinile1.JPG";
    const vinile1retro = new Image();
    vinile1retro.src="immagini/retro1.JPG";
document.getElementById('vinile1').addEventListener("mouseover",function(){document.getElementById('img1').src=vinile1retro.src})
document.getElementById('vinile1').addEventListener("mouseout",function(){document.getElementById('img1').src=vinile1JS.src})
}
if(document.getElementById('vinile1')==null){
document.getElementById('acquista1').addEventListener("click",function(){document.getElementById('totaleHTML').value=totale(),verifica()})
document.getElementById('acquista2').addEventListener("click",function(){document.getElementById('totaleHTML').value=totale(),verifica()})
document.getElementById('confermaOrdine').addEventListener("click",function(){window.alert('Gmrazie! Il tuo ordine è stato inviato')})
document.getElementById('fuoriprovincia').addEventListener("click",function(){spedizione=10;document.getElementById('totaleHTML').value=totale(),verifica()})
document.getElementById('provincia').addEventListener("click",function(){spedizione=0;document.getElementById('totaleHTML').value=totale(),verifica()})
}

