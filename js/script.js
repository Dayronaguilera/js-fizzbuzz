var output = document.getElementById("result");

// scrivi un programma che stampi i numeri da 1 a 100!
for (var x = 1; x <= 100; x++) {
//    dove andra stampato? += per far ripetere il ciclo!
       
      if (x % 3 ===0) {
        document.write("</br> Fizz");
          
      } else if(x % 5 ===0) {
        document.write("</br> Buzz");

      } else if((x % 3 ===0) && (x % 5 ===0)){
        document.write("</br> FizzBuzz");

      } else{
        document.write("</br>" + x);

      }
}
