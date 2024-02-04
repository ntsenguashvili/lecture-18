//task 1
document.getElementById("registrationForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const elements = document.forms.registrationForm;
    console.log(elements)
    try {
        if (elements["firstName"].value.length < 6) {
            document.getElementById("pFirstName").innerHTML = "Min 6 Symbols"
        } else {
            document.getElementById("pFirstName").innerHTML = ""

        }
        if (elements["lastName"].value.length < 6) {
            document.getElementById("pLastName").innerHTML = "Min 6 Symbols"
        } else {
            document.getElementById("pLastName").innerHTML = ""
        }

        //email
        if (!validateEmail(elements["email"].value)) {
            document.getElementById("pEmail").innerHTML = "Bad Email"
        } else {
            document.getElementById("pEmail").innerHTML = ""
        }

        if (elements["password"].value.length < 6) {
            document.getElementById("pPassword").innerHTML = "Min 6 Symbols"
        } else {
            document.getElementById("pPassword").innerHTML = ""
        }
        if (elements["confirm"].value !== elements["password"].value) {
            document.getElementById("pConfirm").innerHTML = "password should match"
        } else {
            document.getElementById("pConfirm").innerHTML = ""
        }
        if (elements["description"].value.length > 100) {
            document.getElementById("pDescription").innerHTML = "Max 100 Symbols"
        } else {
            document.getElementById("pDescription").innerHTML = ""
        }
    } catch (error) {
    console.log(error);
}
return false;
});

//function for email validation
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  //task 2
let inputArray=[]
const addNewItem=()=>{
    
}
