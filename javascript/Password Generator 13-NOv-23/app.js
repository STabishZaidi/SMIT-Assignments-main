// Random Password Generator ****
var main = document.getElementById("main")

function passwordgenerator() {

    var pass = "0123456789hequickbrownfoxjumpsoverthelazydog~!@#$%^&*()_+=THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG"
    // console.log (pass.length)
    var genPass = "";
    // console.log(randomV)
    for (var i = 0; i < pass.length; i++) {
        var randomV = Math.floor(Math.random() * 93)
        genPass += pass[randomV]
        // console.log(genPass)
        if (genPass.length >= 8 && genPass.length <= 10) {
            // console.log(genPass)
            main.innerHTML = `
        <p>${genPass}</p>`
        }
    }

}

function validatepassword() {


}




