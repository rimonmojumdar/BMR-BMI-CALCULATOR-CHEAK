document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const bmrResultElement = document.getElementById('bmr-result');
    const bmiValueElement = document.getElementById('bmi-value');
    const healthStatusElement = document.getElementById('health-status');

   
    function getHealthStatus(bmi) {
       
        healthStatusElement.className = 'status-message';
        
        if (bmi < 18.5) {
            healthStatusElement.classList.add('underweight');
            return "আপনার ওজন কম। আপনার স্বাস্থ্যের উন্নতি প্রয়োজন।";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            healthStatusElement.classList.add('normal-weight');
            return "আপনার ওজন স্বাভাবিক। আপনি একদম ফিট আছেন!";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            healthStatusElement.classList.add('overweight');
            return "আপনার ওজন বেশি। স্বাস্থ্যের উন্নতি প্রয়োজন, সামান্য চেষ্টা দরকার।";
        } else { 
            healthStatusElement.classList.add('obese');
            return "আপনার ওবেসিটি আছে। স্বাস্থ্যের জন্য দ্রুত পদক্ষেপ নেওয়া প্রয়োজন।";
        }
    }

  
    function calculateBMR() {
       
        const age = parseInt(document.getElementById('age').value);
        const heightCm = parseFloat(document.getElementById('height').value); 
        const weight = parseFloat(document.getElementById('weight').value); 
        const genderElement = document.querySelector('input[name="gender"]:checked');

        
        if (isNaN(age) || isNaN(heightCm) || isNaN(weight) || age <= 0 || heightCm <= 0 || weight <= 0 || !genderElement) {
            bmrResultElement.textContent = 'N/A';
            bmiValueElement.textContent = 'N/A';
            healthStatusElement.textContent = '';
            healthStatusElement.className = 'status-message';
            return;
        }

        const gender = genderElement.value;
        let bmr = 0;

        
        if (gender === 'male') {
            bmr = (10 * weight) + (6.25 * heightCm) - (5 * age) + 5;
        } else if (gender === 'female') {
            bmr = (10 * weight) + (6.25 * heightCm) - (5 * age) - 161;
        }
        
        
        const heightM = heightCm / 100; 
        const bmi = weight / (heightM * heightM);

     
        
     
        const finalBMR = Math.round(bmr);
        bmrResultElement.textContent = finalBMR.toLocaleString('bn-BD');

       
        bmiValueElement.textContent = bmi.toFixed(1);
        
       
        const statusMessage = getHealthStatus(bmi);
        healthStatusElement.textContent = statusMessage;
    }

 
    calculateBtn.addEventListener('click', calculateBMR);
    
    
    calculateBMR();

});

document.addEventListener('DOMContentLoaded', function() {
    
    const calculateBtn = document.getElementById('calculate-btn');
    const bmrResultElement = document.getElementById('bmr-result');
    const bmiValueElement = document.getElementById('bmi-value');
    const healthStatusElement = document.getElementById('health-status');

    

    function calculateBMR() {
        
        const age = parseInt(document.getElementById('age').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const genderElement = document.querySelector('input[name="gender"]:checked');
        
        
        const heightFt = parseInt(document.getElementById('height-ft').value);
        const heightIn = parseInt(document.getElementById('height-in').value) || 0; // যদি ইঞ্চি খালি থাকে, ০ ধরবে


        

        const totalHeightInInches = (heightFt * 12) + heightIn;
        const heightCm = totalHeightInInches * 2.54; 
       
        if (isNaN(age) || isNaN(weight) || age <= 0 || weight <= 0 || !genderElement || isNaN(heightCm) || heightCm <= 0) {
            bmrResultElement.textContent = 'N/A';
            bmiValueElement.textContent = 'N/A';
            healthStatusElement.textContent = 'সব তথ্য পূরণ করুন';
            healthStatusElement.className = 'status-message';
            return;
        }

        const gender = genderElement.value;
        let bmr = 0;

        if (gender === 'male') {
            bmr = (10 * weight) + (6.25 * heightCm) - (5 * age) + 5;
        } else if (gender === 'female') {
            bmr = (10 * weight) + (6.25 * heightCm) - (5 * age) - 161;
        }
        
        const heightM = heightCm / 100; 
        const bmi = weight / (heightM * heightM);

  
        const finalBMR = Math.round(bmr);
        bmrResultElement.textContent = finalBMR.toLocaleString('bn-BD');
        bmiValueElement.textContent = bmi.toFixed(1);
        
        const statusMessage = getHealthStatus(bmi);
        healthStatusElement.textContent = statusMessage;
    }

 
    calculateBtn.addEventListener('click', calculateBMR);
    

    calculateBMR();
});
