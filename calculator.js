window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById('loan-amount').value = 400000;
  document.getElementById('loan-years').value = 30;
  document.getElementById('loan-rate').value = 5;
  let values = getCurrentUIValues();
  let payment = calculateMonthlyPayment(values);
  updateMonthly(payment);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let payment = calculateMonthlyPayment(values);
  updateMonthly(payment);
}

// Given an object of values (a value has amount, years and rate),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
      console.log(values);
      let {amount: p, years: n , rate: i} = values;
      i = i/100;
      return `${Math.round(((p * (i/12))/(1-(1+(i/12))**(-12*n)))*100)/100}`
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
      document.getElementById('monthly-payment').innerText = monthly;
}
