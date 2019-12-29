'use strict'

const textInput = document.querySelector("#input-text");
const numberInput=document.querySelector("#input-number"); 
const cancelBtn=document.querySelector("#btn-cancel");
const addBtn=document.querySelector("#btn-add");
const completeList=document.querySelector("#completelist");
const sumatotal=document.querySelector("#total");
const alertController=document.querySelector("ion-alert-controller");

let sumaVariable=0;


const clear= ()=>{
    textInput.value='';
    numberInput.value='';
};


addBtn.addEventListener('click',()=>{
    const resultText=textInput.value;
    const resultNumber=numberInput.value;
    if(resultText.trim().lenght<=0 || resultNumber<=0 || resultNumber.trim().lenght<=0){
        alertController.create({
            header:'Datos invalidos',
            message:'Ingresa un articulo y precio correcto',
            buttons:[
                'Ok'
            ]
        }).then(alertElement=>{
            alertElement.present();
        });
        return;
    }
    console.log(resultText,resultNumber);
    const newItem=document.createElement('ion-item');
    newItem.textContent=resultText+' : $'+resultNumber; 
    completeList.appendChild(newItem);
    sumaVariable+=+resultNumber;
    sumatotal.textContent=sumaVariable; 
    clear();
});

cancelBtn.addEventListener('click',clear);