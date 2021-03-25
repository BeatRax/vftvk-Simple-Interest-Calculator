var principal = 0;
var interestRate = 0;
var timesCompounded = 0;
var termOfLoan = 0;
var amount = 0;
var d = new Date();
var n = d.getFullYear();


function simpleInterest() {
  event.preventDefault();
  var principal = parseFloat(document.getElementById("amount").value);
  var interestRate = parseFloat(document.getElementById("interestSimple").value);
  interestRate = interestRate / 100;
  var termOfLoan = parseFloat(document.getElementById("year").value);
  var simpleInt = principal * interestRate * termOfLoan;
  var amount = (principal + simpleInt).toFixed(2);
  if (principal == 0) {
    alert("Enter a numnber")
  } else {
    document.getElementById("output-01").innerHTML = "If you deposit " + principal;
    document.getElementById("output-02").innerHTML = "at an interest rate of " + (interestRate * 100).toPrecision(2) + "%";
    document.getElementById("output-03").innerHTML = "You will recieve an amount of " + simpleInt.toFixed(2);
    document.getElementById("output-04").innerHTML = "In the year " + (n + termOfLoan);
  }
  
}

