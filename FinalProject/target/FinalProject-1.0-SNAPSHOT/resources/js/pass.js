/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/Gruntfile.js to edit this template
 */

//TODO learn javascript

function checkPassword(){
    alert("this should do a thing.");
    var username = document.getElementById('username').value;
    var password1 = document.getElementById('oldpassword').value;
    var password2 = document.getElementById('newpassword').value;
    var password3 = document.getElementById('confpassword').value;
    
    if (password2 !== password3){
        alert("passwords do not match.");
    }
    
}
function storeUsername() {
    var usernameInput = document.getElementsByName('j_username')[0].value;
    localStorage.setItem('username', usernameInput);
}

function verifyUsername() {
    var form = document.getElementById('myForm');
        var useridValue = form.elements['myForm:userid'].value;
    var storedUsername = localStorage.getItem('username'); 
    if (useridValue === storedUsername) {

        return true;
    } else {
        alert('Username verification failed!');
        return false;
    }
}

/*
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
    });
};
*/