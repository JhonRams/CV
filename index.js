/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function aleatorio(){
    return  parseInt(Math.random()* (200-50)+50);
}
function animar(e){
    var r=aleatorio();
    var g=aleatorio();
    var b=aleatorio();
    e.style.background="rgba("+r+","+g+","+b+",1)";
    
}

