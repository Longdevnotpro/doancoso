var contentapi = 'http://localhost:3000/content';

GetData(function (data) {
    render(data)
});

function start1() {
    GetData(function (data) {
        render(data);
    })
};

start1()

function GetData(callback) {
    fetch(contentapi)
        .then(function (res) {
            return res.json()
        })
        .then(callback)
}

function render(data) {
    var showpara = document.querySelector('.content-1')

    var htmls = data.map(function (value) {
        return `
        <div class="container-showpara">
        
            <div class="content-showpara">
                <span>${value.summarykey}</span>
                <ul>
                <li>Chương:${value.chuong}</li>
                <li>Khoản:${value.khoan}</li>
                <li>Mục:${value.muc}</li>
                <li>Điều:${value.dieu}</li>
                <li>Mức phạt trên:${value.priceabove}</li>
                <li>Mức phạt dưới:${value.pricebelow}</li>
                </ul>
            </div>
            <div class="content-function">
                <div class="function-box">
                <i class="fa-solid fa-arrows-to-circle" style="margin-left: 5%"></i>
                <button style="margin-right: 20%">Noi dung</button>
                </div>
                <div class="function-box">
                <i class="fa-solid fa-download"></i>
                <button style="margin-right: 20%">Download</button>
                </div>
                <div class="function-box">
                <i class="fa-solid fa-align-justify"></i>
                <button>Vb lien quan</button>
                </div>
            </div>
        </div>
        `

      
    })

    showpara.innerHTML = htmls.join('');
}