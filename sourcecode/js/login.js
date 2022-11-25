
dbUser = 'http://localhost:3000/user'

function login() {
  GetUser(HandleLogin)
}
function GetUser(callback) {
    fetch(dbUser)
      .then(function (res) {
        return res.json();
      })
      .then(callback)
}

function HandleLogin(data) {
  var email = document.querySelector('input[name ="email"]').value;
  var password = document.querySelector('input[name ="password"]').value;
  
  var checklogin = data.some(value => value.email === email && value.password === password)
  
 if(checklogin){
  window.location = 'home.html'
 }
 else{
  alert('Sai email hoặc password')
 }
 
}