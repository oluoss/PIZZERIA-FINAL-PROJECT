let signupBtn = document.getElementById("signupBtn");
        let signinBtn = document.getElementById("signinBtn");
        let title = document.getElementById("title");
        let surField = document.getElementById("surField");
        let addressField = document.getElementById("addressField");
        let countryField = document.getElementById("countryField");
        let ageField = document.getElementById("ageField");
        let cityField = document.getElementById("cityField");

        signinBtn.onclick=function() { 
            surField.style.maxHeight = "0";
            addressField.style.maxHeight = "0";
            countryField.style.maxHeight = "0";
            ageField.style.maxHeight = "0";
            cityField.style.maxHeight = "0";
            
            
            title.innerHTML = "Sign In";
            signupBtn.classList.remove("disable");
            signinBtn.classList.add("disable");

        }

        signupBtn.onclick=function() { 
           
            surField.style.maxHeight = "60px";
            addressField.style.maxHeight = "60px";
            countryField.style.maxHeight = "60px";
            ageField.style.maxHeight = "60px";
            cityField.style.maxHeight = "60px";
            title.innerHTML = "Registration";
            signupBtn.classList.add("disable");
            signinBtn.classList.remove("disable");
        }