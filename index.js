import { CSAPATOK } from "./adatok.js";

const labdarugoCsapatok =  [];

function letrehozKartyak(lista) {
    let txt = ``;
    for(let index = 0; index < lista.length; index++) {
        txt += `
            <div id="focicsapat1">
                <h3>Csapat neve:</h3>
                <p>${lista[index].nev}</p>
                <h3>Liga:</h3>
                <p>${lista[index].liga}</p>
                <h3>Stadion:</h3>
                <p id="elsocsapat">${lista[index].stadion}</p>
            </div>
            `;
        txt += ``   
    } 
    return txt;
}

const CSAPATFELSOROLAS = document.getElementById("feladat_1");
CSAPATFELSOROLAS.innerHTML = letrehozKartyak(CSAPATOK);
console.log(CSAPATOK);

function kivalaszt() {
  
    const kivalasztottELEM = document.querySelectorAll("#feladat_1")
      console.log(kivalasztottELEM)
      for (let index = 0; index < kivalasztottELEM.length; index++) {
          kivalasztottELEM[index].addEventListener("click", function(){
              console.log(kivalasztottELEM[index])
              kivalasztottELEMEK.innerHTML += `
              <p>${CSAPATOK[index].nev}</p>
              <p>${CSAPATOK[index].liga}</p>
              <p>${CSAPATOK[index].stadion}</p>
              `
          })
      }
     
  }
  const kivalasztottELEMEK = document.querySelectorAll("#feladat_1")[0]
  kivalaszt()