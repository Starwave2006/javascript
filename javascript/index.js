function multiply(){
    var num1=document.getElementById("number1").value;
    var num2=document.getElementById("number2").value;
    document.getElementById("answer").innerHTML = num1 * num2;
    }
    function divide(){
        var num1=document.getElementById("number1").value;
        var num2=document.getElementById("number2").value;
        document.getElementById("answer").innerHTML = num1 / num2;
    
    if (num2==0){
        document.getElementById("answer").innerHTML = "Cannot divide by zero";}
    else{
        document.getElementById("answer").innerHTML = num1 / num2;
     }
    }
    function add() {
      var num1 = parseInt(document.getElementById("number1").value);
      var num2 = parseInt(document.getElementById("number2").value);
      var sumOfNumbers = num1 + num2;
      document.getElementById("answer").innerHTML = sumOfNumbers;
      }
    
    
    function subtract(){
        var num1=document.getElementById("number1").value;
        var num2=document.getElementById("number2").value;
        document.getElementById("answer").innerHTML = num1 - num2;}