var xhr = new XMLHttpRequest();

function login(email, password) {

    var code = window.btoa(email.value + ":" + password.value);//encode to a base 64 string
                    //window.atob();
    xhr.open('POST', "http://localhost:8080/api/v1/auth/login");
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.setRequestHeader('Authorization', "Basic" + code);
    xhr.send();
    xhr.onreadystatechange = sendRequest;
}

    function sendRequest() {
        console.log(xhr.readyState);
    }