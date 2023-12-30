var btn = document.querySelector('button')
btn.addEventListener('click',get)
  
  function get() {
        var height = +document.querySelector('#Height').value;
        var weight = +document.querySelector('#weight').value;
        if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
            alert('Please fill all fields with valid numbers');
            return;
        }
        height = height / 100;
        var bmi = weight / (height * height);
        show(bmi);
    }

    const show=(bmi)=>{
        var result = document.querySelector('.result');
        var bmiStatus;
        if (bmi < 18.5) {
            bmiStatus = 'Underweight';
        } else if (bmi < 25) {
            bmiStatus = 'Normal';
        } else if (bmi < 30) {
            bmiStatus = 'Overweight';
        } else {
            bmiStatus = 'Obese';
        }
        result.innerHTML = `<div class=${bmiStatus}>Your BMI is ${bmi.toFixed(2)} and you are ${bmiStatus}.</div>`;

    }
