const nameElem = document.getElementById("name");
const emailElem = document.getElementById("email");
const subjectElem = document.getElementById("subject");
const nameErrorElem = document.getElementById("name-error");
const emailErrorElem = document.getElementById("email-error");
const subjectErrorElem = document.getElementById("subject-error");

const formElem = document.getElementById('form');
console.log(formElem);


formElem.addEventListener("submit", (event) => {

    const emailRegExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    //trim out spaces from the input data
    const namevalue = nameElem.value.trim();
    const emailvalue = emailElem.value.trim();
    const subjectvalue = subjectElem.value.trim();


    //validating the name
    if(namevalue === "" || namevalue == null){
        event.preventDefault();
        nameErrorElem.innerHTML = "your name is required";

    }

   if(!emailvalue.match(emailRegExp)){
      event.preventDefault()
      emailErrorElem.innerHTML ="Enter a valid email";
    }
    

    if(subjectvalue === "" || subjectvalue == null){
        event.preventDefault();
        subjectErrorElem.innerHTML = "subject cannot be empty";

    }

})
