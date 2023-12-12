/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/Gruntfile.js to edit this template
 */


function storeUsername() {
    var usernameInput = document.getElementsByName('j_username')[0].value;
    localStorage.setItem('username', usernameInput);
    console.log(username);
}

function verifyUsername() {
    var form = document.getElementById('myForm');
        var useridValue = form.elements['myForm:userid'].value;
    var storedUsername = localStorage.getItem('username'); 
    console.log(storedUsername);
    if (useridValue === storedUsername) {

        return true;
    } else {
        alert('Username verification failed!');
        return false;
    }
}
