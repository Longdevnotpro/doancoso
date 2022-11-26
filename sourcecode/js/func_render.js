var contentapi = 'http://localhost:3000/content'

function start2() {
    GetData(function (data) {
        render(data)
    });
    HandleAdd()
}

start2();

function GetData(callback) {
    fetch(contentapi)
        .then(function (res) {
            return res.json()
        })
        .then(callback)
}

function render(data) {
    var showpara = document.querySelector('#content-1')

    var htmls = data.map(function (value) {
        return `
        <div class="container-showpara">
            
            <div class="content-showpara">
            <span>${value.summarykey}
            </span>
            <ul>
            <li>Chương: ${value.chuong}</li>
            <li>Mục: ${value.muc}</li>
            <li>Điều: ${value.dieu}</li>
            <li>Khoản: ${value.khoan}</li>
            <li>Mức phạt trên: ${value.priceabove}</li>
            <li>Mức phạt dưới: ${value.pricebelow}</li>
            </ul>
        </div>
        <div class="content-function edit-delete">
            
            <div class="function-box">
            <i class="fa-solid fa-pen-to-square"></i>
                <button>Chỉnh Sửa</button>
            </div>
            <div class="function-box">
            <i class="fa-solid fa-trash"></i>
            <button>Xóa</button>
            </div>
        </div>
        </div>
        `
    })

    showpara.innerHTML = htmls.join('');

}

function HandleAdd() {
    var addbtn = document.querySelector('#btn-add');

    addbtn.onclick = function () {
        var summary = document.querySelector('input[name="summaryKey"]').value;
        var chuong = document.querySelector('input[name="chuong"]').value;
        var dieu = document.querySelector('input[name="dieu"]').value;
        var muc = document.querySelector('input[name="muc"]').value;
        var khoan = document.querySelector('input[name="khoan"]').value;
        var priceabove = document.querySelector('input[name="priceabove"]').value;
        var pricebelow = document.querySelector('input[name="pricebelow"]').value;
        console.log(dieu);
    }

}