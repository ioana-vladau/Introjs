/*when header is clicked, add a class*/
let myHeader = document.querySelector("#header");

myHeader.addEventListener('click', doSomething);


function doSomething() {
//    console.log("clicked");
//    myHeader.classList.add('awesome');
//    myHeader.classList.remove('awesome');
      myHeader.classList.toggle('awesome');
}




//let myP = document.querySelector("p");
//console.log(myP);
//
//myP.classList.add('awesome');
//
//myHeader.classList.add("highlight");
