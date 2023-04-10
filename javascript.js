let myH1= function(){document.querySelector("h1")

myH1.style.color="red";} 

let myBody=function(){ document.querySelector("body")
myBody.style.backgroundColor="green"}

let myLink=function() { document.querySelectorAll(" a");
for (let index = 0; index < myLink.length; index++) {
    myLink[index].style.color="yellow" 
}
};

let myFooter= function() { document.querySelector("footer")
myFooter.style.backgroundColor="red"}

let myImg=function(img) { document.querySelectorAll("img")
for (let index = 0; index < myImg.length; index++) {
    myImg[index].style.opacity=0   
}

}
let myPrice= function () {
    
  document.getElementsByClassName("price")

for (let index = 0; index < myPrice.length; index++) {
    myPrice[index].style.color="red"
}}

let myAdress= function() {
    document.querySelector("#indirizzo").innerText= "New York"
}



    

