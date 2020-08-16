/*function show(){
    let username=document.querySelector("#name").value;


    let newElement=document.querySelector("#namein").cloneNode(true);

    newElement.removeAttribute("id");
    newElement.style.visibility="visible";
    newElement.children[0].innerHTML=username;

    let nameouts=document.querySelector("#nameout");

    nameouts.insertBefore(newElement, nameouts.firstChild);
    document.querySelector("#name").value="";
    document.querySelector("#pass").value="";
    document.querySelector("#eml").value="";



};*/
function show(){
    let username=document.querySelector("#name").value;
    let password=document.querySelector("#pass").value;
    let email=document.querySelector("#eml").value;


    let newElement=document.querySelector("#namein").cloneNode(true);
    let newElement2=document.querySelector("#passin").cloneNode(true);
    let newElement3=document.querySelector("#emlin").cloneNode(true);

    newElement.removeAttribute("id");
    newElement2.removeAttribute("id");
    newElement3.removeAttribute("id");

    newElement.style.visibility="visible";
    newElement2.style.visibility="visible";
    newElement3.style.visibility="visible";

    newElement.children[0].innerHTML=username;
    newElement2.children[0].innerHTML=password;
    newElement3.children[0].innerHTML=email;

    let nameouts=document.querySelector("#nameout");

    nameouts.insertBefore(newElement, nameouts.firstChild);
    nameouts.insertBefore(newElement2, nameouts.firstChild);
    nameouts.insertBefore(newElement3, nameouts.firstChild);
    document.querySelector("#name").value="";
    document.querySelector("#pass").value="";
    document.querySelector("#eml").value="";

    
}