var dbcourse = 'http://localhost:3000/user';

function start() {
    GetUser(HandleRegister)
}
// function start() {
//     handleRegister()

// };

start();



function check(data) { // thieu details
    var option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    alert('Đăng kí thành công')
    fetch(dbcourse, option)
    window.location = 'login.html'
}


 
    


    function GetUser(callback) {
        fetch(dbcourse)
          .then(function (res) {
            return res.json();
          })
          .then(callback)
    }


function HandleRegister(data ) {
    var regis = document.querySelector('#register-btn');

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    regis.onclick = function () {

        var username = document.querySelector('input[name ="username"]').value;
        var email = document.querySelector('input[name ="email"]').value;
        var password = document.querySelector('input[name ="password"]').value;
        var repassword = document.querySelector('input[name ="repassword"]').value;

        var checkemail = data.some(value => value.email === email )

        if (username === '' || email === '' || password === '' || repassword === '') {
            alert('Vui lòng kiểm tra kĩ thông tin trước khi đăng kí');
        }
        else if (!validateEmail(email)) {
            alert('Email bạn nhập không đúng vui lòng nhập lại')
        }
        else if (password.length < 6) {
            alert('Vui lòng nhập password nhiều hơn 6 chữ cái')
        }
        else if (password !== repassword) {
            alert('Password không trùng nhau vui lòng nhập lại');
        }
        else if(checkemail){
            alert('mail da ton tai')
        }
        else {
            var form = {
                username: username,
                email: email,
                password: password,
                type: 1
            };
            
            check(form)
        };


    }
}




// function handleRegister() {

//     var regis = document.querySelector('#register-btn');

//     function validateEmail(email) {
//         var re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }

//     regis.onclick = function () {

//         var username = document.querySelector('input[name ="username"]').value;
//         var email = document.querySelector('input[name ="email"]').value;
//         var password = document.querySelector('input[name ="password"]').value;
//         var repassword = document.querySelector('input[name ="repassword"]').value;



//         if (username === '' || email === '' || password === '' || repassword === '') {
//             alert('Vui lòng kiểm tra kĩ thông tin trước khi đăng kí');
//         }
//         else if (!validateEmail(email)) {
//             alert('Email bạn nhập không đúng vui lòng nhập lại')
//         }
//         else if (password.length < 6) {
//             alert('Vui lòng nhập password nhiều hơn 6 chữ cái')
//         }
//         else if (password !== repassword) {
//             alert('Password không trùng nhau vui lòng nhập lại');
//         }
//         else {
//             var form = {
//                 username: username,
//                 email: email,
//                 password: password,
//                 type: 1
//             };
            
//             check(form)
//         };


//     }

// }

