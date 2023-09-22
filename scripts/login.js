var xhr = new XMLHttpRequest();

function login(email, password) {

    var code = window.btoa(email.value + ":" + password.value);//encode to a base 64 string
                    //window.atob();
    xhr.open('POST', 'http://localhost:8080/api/v1/auth/login');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.setRequestHeader('Authorization', 'Basic' + code);
    xhr.send();
    xhr.onreadystatechange = sendRequest;
}

    function sendRequest() {
        //console.log(xhr.readyState);
        if(xhr.readyState === 4) {
            sessionStorage.setItem('user-detail', xhr.responseText);
            sessionStorage.setItem('access-token', xhr.getResponseHeader('access-token'));
            
            window.location.href = "./home.html";
        }
    }

    /**
     *In this code snippet, the function login sends the data from 
     the front end to the back end through XMLHttpRequest.
     * The sendRequest function is called by xhr.onreadystatechange 
     when there is a change in the readyState of the xhr object.
     */
    // 