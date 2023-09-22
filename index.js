var xhr = new XMLHttpRequest();

//event handler function
function signUpSubmit(firstName, lastName, email, password, mobile) {
   // console.log(firstName.value);
    
    var data = {
        first_name : firstName.value,
        last_name : lastName.value,
        email : email.value,
        password : password.value,
        mobile : mobile.value
    }; //console.log(data);

    xhr.open('POST', 'http://localhost:8080/v1/signup');
    xhr.setRequestHeader('Context-Type', 'application/json;charset=UTF-8');
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = sendRequest;

}
function sendRequest(){
    console.log(xhr.readystate);
}