document.querySelector("#btn").addEventListener("click", function(){
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    if (height === "" || isNaN(height)) {
        document.querySelector(".result").innerHTML = "PLEASE ENTER VALID INPUT"
        document.querySelector(".result").classList.add("danger");
    }
    else if(weight === "" || isNaN(weight)){
        document.querySelector(".result").innerText = "Enter a valid height in cm"
        document.querySelector(".result").classList.add("danger");
    }
    else{
        let bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            document.querySelector(".result").innerHTML =`<span style= "color:#B2E48D;">Underweight</span> <span>BMI:${bmi}</span>`;
            // document.querySelector("body").classList.add("white");
            document.querySelector("body").className= "green";

        }
        else if(bmi>18.6 && bmi<24.9){
            document.querySelector(".result").innerHTML =`<span style= "color:#ffffcc;">Normal weight</span> <span>BMI:${bmi}</span>`;
            // document.querySelector("body").classList.add("white");
            document.querySelector("body").className = "yellow";
        }
        else{
            document.querySelector(".result").innerHTML =`<span style= "color:#ff9999;">Obesity</span> <span>BMI:${bmi}</span>`;
            // document.querySelector("body").classList.add("white");
            document.querySelector("body").className = "red";
        }
    }
});