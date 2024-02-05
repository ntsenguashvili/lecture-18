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
    let value = document.getElementById('inputText').value
    inputArray.push(value);

    let list = document.getElementById('inputList')
    list.innerHTML = ""
    inputArray.forEach(element => {
        let item = document.createElement("li")
        item.innerHTML = element
        list.appendChild(item)
    });
}


//task3 
let obects = [
    {firstName: "a1", lastName: "b1", age: 12 , job: "j1"},
    {firstName: "a2", lastName: "b2", age: 22, job: "j2"},
    {firstName: "a3", lastName: "b3", age: 32, job: "j3"},
    {firstName: "a4", lastName: "b4", age: 44, job: "j4"},
]

function listAdults(){ 
    let filtered = obects.filter( (item) => item.age > 18)
    let filterUl = document.getElementById("filteredUl")
    filterUl.innerHTML="";
    filtered.forEach(element => {
        let item = document.createElement("li")
        item.innerHTML = `${element.firstName} ${element.lastName} - ${element.job}`
        filterUl.append(item)
    })
}