var pass1 = "mkpooped";
function passcheck()

if (document.GetElmentbyId('pass1').value != pass1) {
    alert('Wrong Password, Try Again.');
    return false;
}
else (document.getelementbyid('pass1').value == pass1) {
    alert('Correct Password');
}

