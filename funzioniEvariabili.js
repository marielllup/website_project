let spedizione=0
const prodotti = new Array();
	prodotti[0] = {nome: "vinile1",
                  prezzo: 10.00,
                  quanti: 0}; 
	prodotti[1] = {nome: "vinile2",
                  prezzo: 20.00,
                  quanti: 0}
 function totale() {
				  const totaleJS = prodotti[0].quanti * prodotti[0].prezzo +
				 prodotti[1].quanti * prodotti[1].prezzo + spedizione;
				 return totaleJS.toFixed(2);
					}


const serieImmagini = new Array(3);      
serieImmagini[0] = new Image();      
serieImmagini[0].src = "immagini/vinile1.jpg";
serieImmagini[0].alt = "vinile foto 1";
serieImmagini[1] = new Image();     
serieImmagini[1].src = "immagini/retro1.jpg";
serieImmagini[1].alt = "vinile foto 2";
serieImmagini[2] = new Image();      
serieImmagini[2].src = "immagini/dettagliov1.jpg";
serieImmagini[2].alt = "vinile foto 3";

let i = 0;      
let onOff = window.setInterval('cambiaSouRCe()',3000);      
function cambiaSouRCe() {   
i = (i+1);
if (i >= serieImmagini.length)i=0;
document.getElementById("banner1").src = 
serieImmagini[i].src;}

const serieImm2 = new Array(3);
serieImm2[0]= new Image();
serieImm2[0].src = "immagini/vinile2.jpg";
serieImm2[0].alt = "vinile 2 foto 1";
serieImm2[1] = new Image();     
serieImm2[1].src = "immagini/retro2.jpg";
serieImm2[1].alt = "vinile 2 foto 2";
serieImm2[2] = new Image();      
serieImm2[2].src = "immagini/dettagliov2.jpg";
serieImm2[2].alt = "vinile 2 foto 3";

let indice = 0;      
let interval2 = window.setInterval('cambiaImmagine()',3000);      
function cambiaImmagine() {   
indice = (indice+1);
if (indice >= serieImm2.length)indice=0;
document.getElementById("banner2").src = 
serieImm2[indice].src;}


const oggi = new Date();
function sconto(){
	const totaleJS = (prodotti[0].quanti * prodotti[0].prezzo +
				 prodotti[1].quanti * prodotti[1].prezzo + spedizione)/2;
				 return totaleJS.toFixed(2);
}
function verifica(){
	if(oggi.getDate()>=1 && oggi.getDate()<=31 && oggi.getMonth()==11)
	{document.getElementById('scontoHTML').addEventListener("click",function(){document.getElementById('totaleHTML').value=sconto()})}

}

