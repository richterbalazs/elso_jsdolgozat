import { CSAPATOK } from "./adatok.js";

export function htmlOsszeAllit(lista) {
   let txt = "";
   for(let i = 0; i < lista.length; i++){
    txt += `Csapat név: ${lista[index].nev}, Liga: ${lista[index].liga}, Stadion: ${lista[index].stadion}`;
   }
   console.log(txt)
   return txt;
}   