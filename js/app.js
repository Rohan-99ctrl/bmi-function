const userName = document.querySelector('#nam');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const submitForm = document.querySelector('#submitForm');
const result = document.querySelector('#result');

let testNam = /^[A-Za-z\s]{1,30}$/;
userName.addEventListener('keyup', function(){

    if(testNam.test(userName.value) == true){
        userName.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        userName.style.border = '2px solid red';
    }

});


let testWeight = /^[0-9.]{1,}$/;
weight.addEventListener('keyup', function(){

    if(testWeight.test(weight.value) == true){
        weight.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        weight.style.border = '2px solid red';
    }

});


let testHeight = /^[0-9.]{1,}$/;
height.addEventListener('keyup', function(){

    if(testHeight.test(height.value) == true){
        height.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        height.style.border = '2px solid red';
    }

});





submitForm.addEventListener('submit', (event) => {

    event.preventDefault();

    let weightVal = weight.value;
    let heightVal = height.value;
    let bmiCal = weightVal / (heightVal * heightVal);

    if(weightVal == '' || heightVal == '' || userName.value == ''){

        result.innerHTML = '<h6 class="alert alert-danger mt-4">All fields are required!!!</h6>';

        setTimeout(function(){
            result.innerHTML = '';
        }, 3000);

    }else if(testNam.test(userName.value) == false || testWeight.test(weight.value) == false || testHeight.test(height.value) == false){

        result.innerHTML = '<h6 class="alert alert-danger mt-4">Please input valid!!!</h6>';

        setTimeout(function(){
            result.innerHTML = '';
        }, 3000);

    }else{

        if(bmiCal < 18.5){
            result.innerHTML = `
                <h6 id="underWeight" class="alert alert-success text-center mt-4"> 
                    Name : ${userName.value} <br>
                    Weight : ${weightVal} <br>
                    Height : ${heightVal} <br>
                    BMI Score : ${bmiCal.toFixed(2)} <br>
                    BMI Score : UNDERWEIGHT
                </h6>
            `;
        }else if(bmiCal >= 18.5 && bmiCal <= 24.9){
            result.innerHTML = `
                <h6 id="normal" class="alert alert-success text-center mt-4"> 
                    Name : ${userName.value} <br>
                    Weight : ${weightVal} <br>
                    Height : ${heightVal} <br>
                    BMI Score : ${bmiCal.toFixed(2)} <br>
                    BMI Score : NORMAL
                </h6>
            `;
        }else if(bmiCal >= 25 && bmiCal <= 29.9){
            result.innerHTML = `
                <h6 id="overWeight" class="alert alert-success text-center mt-4"> 
                    Name : ${userName.value} <br>
                    Weight : ${weightVal} <br>
                    Height : ${heightVal} <br>
                    BMI Score : ${bmiCal.toFixed(2)} <br>
                    BMI Score : OVERWEIGHT
                </h6>
            `;
        }else if(bmiCal >= 30 && bmiCal <= 34.9){
            result.innerHTML = `
                <h6 id="obse" class="alert alert-success text-center mt-4"> 
                    Name : ${userName.value} <br>
                    Weight : ${weightVal} <br>
                    Height : ${heightVal} <br>
                    BMI Score : ${bmiCal.toFixed(2)} <br>
                    BMI Score : OBESE
                </h6>
            `;
        }else if(bmiCal >= 35){
            result.innerHTML = `
                <h6 id="extremelyObse" class="alert alert-success text-center mt-4"> 
                    Name : ${userName.value} <br>
                    Weight : ${weightVal} <br>
                    Height : ${heightVal} <br>
                    BMI Score : ${bmiCal.toFixed(2)} <br>
                    BMI Score : EXTREMELY OBESE
                </h6>
            `;
        }

    }

    userName.value = '';
    weight.value = '';
    height.value = '';

});




