window.onload = function() {
    // your JavaScript code goes here
    const texterror = document.querySelector(".error-text");
    const emailInput = document.querySelector("#email");
    const errorMessage = document.querySelector(".error");
    
    emailInput.addEventListener("input", function() {
      // check if email is in the correct format using a regex
        if (!emailInput.value.match(/^\S+@\S+\.\S+$/) && emailInput.value.trim() !== "") {
        // if email is not in correct format and input is not empty, show error message
        errorMessage.style.display = "block";
        emailInput.classList.add("error-border");
        texterror.style.display="block"
        } else {
        // if email is in correct format or input is empty, hide error message
        errorMessage.style.display = "none";
        emailInput.classList.remove("error-border");
        texterror.style.display="none";

        }
    });
    }

    