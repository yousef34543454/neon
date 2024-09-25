let age=prompt("say your age")
if(age==="20"){
    document.querySelector("div#root").innerHTML+=`<h2>welcom my brother</h2>`
}
 let email=prompt("say your email")
if (email==="safari@gmail.com")
{ document.querySelector("div#root").innerHTML+=`<h2>your email is true</h2>`}
for( x=+2; x<5 ; x++){
    document.querySelector("div#root").innerHTML+=`<h2>hi</h2>`}


    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case  6:
          day = "Saturday";
      }
      document.getElementById("demo").innerHTML = "Today is " + day;