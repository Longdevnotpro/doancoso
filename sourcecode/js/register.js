var dbcourse = 'http://localhost:3000/user';

function start() {
    handleRegister()
};

function register(data) {
    var option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(dbcourse, option)


}

function getdb(callback) {
    fetch(dbapi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function checkemail(params) {
    fetch(dbcourse)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            return data;
        })

         
}

function handleRegister() {

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
        else {
            var form = {
                username: username,
                email: email,
                password: password,
                type: 1,
            };

            checkemail(form);


        }


    };


}
start();

