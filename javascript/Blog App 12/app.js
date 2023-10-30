

function registerForm() {
    event.preventDefault();
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var emailRegx = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"

    var phoneNumber = document.getElementById('phoneNumber');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('cpassword');

    if (name.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'name should not be empty...',
        })
    }
    // else if (!emailRegx.test(email.value)) {
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Email should not be empty...',
    //         text: 'Something went wrong!',
    //     })
    // }
    else if (phoneNumber.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Email should not be empty...',
            text: 'Something went wrong!',
        })
    }
    else if (password.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'Email should not be empty...',
            text: 'Something went wrong!',
        })
    }
    // confirmPassword.value === "" && 
    else if (confirmPassword.value !== password.value) {
        Swal.fire({
            icon: 'error',
            title: 'Password should  be same / not empty',
            text: 'Something went wrong!',
        })
    }
    else {
        Swal.fire({
            icon: 'success',
            title: `${name.value} succesfully registred`,
            showConfirmButton: false,
            timer: 1500
        })

        var userData = {
            name: name.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
        }
        localStorage.setItem("userData", JSON.stringify(userData));
        setTimeout(() => {
            window.location.href = "./dashboard.html"
        }, 2000)
    }


    // var userData = {
    //     name: name.value,
    //     email: email.value,
    //     phoneNumber: phoneNumber.value,
    //     password: password.value,
    //     confirmPassword: confirmPassword.value,
    // }
    // localStorage.setItem("userData", JSON.stringify(userData));
    // var getUserData = JSON.parse(localStorage.getItem("userData"))
    // console.log(getUserData)
}


function getData() {
    var getUserData = document.querySelector('#getData');
    var getUserDataFromLocalStorage = JSON.parse(localStorage.getItem("userData"))
    // getUserData.innerHTML = `
    // <ul>
    // <li>Name : ${getUserDataFromLocalStorage.name}</li>
    // <li>Email : ${getUserDataFromLocalStorage.email} </li>
    // <li>Phone Number : ${getUserDataFromLocalStorage.phoneNumber} </li>
    // </ul>`
}

getData();


function redirection() {
    window.location.href = "/index.html"
}
function logOut() {
    setTimeout(redirection, 2000)
}

function login() {
    event.preventDefault();
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var loginData = JSON.parse(localStorage.getItem("userData"));
    if (!loginData) {
        Swal.fire({
            icon: 'error',
            title: 'User not found',
        })
        setTimeout(() => {
            window.location.href = "./index.html"
        }, 2000)
    }
    if (loginData.email !== email.value) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
        })
    }
    else if (loginData.password !== password.value) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Password',
        })
    }
    else {
        Swal.fire({
            icon: 'success',
            title: `${loginData.name} succesfully Login`,
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(() => {
            window.location.href = "./dashboard.html"
        }, 2000)

    }
}