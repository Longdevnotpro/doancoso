dbUser = 'http://localhost:3000/user'

function start() {
    GetUser(HandleHomeShow)
}

function GetUser(callback) {
    fetch(dbUser)
        .then(function (res) {
            return res.json();
        })
        .then(callback)
}

function HandleHomeShow(data) {
    var checktype = data.some(value => value.type === 1 || value.type === 2)

    var show = document.querySelector('.wrap')

    show.innerHTML = ` 
<div class="header">
    <div class="leftHeader">
      <a class="domain" href="">
        <span>LuatRung.vn</span>
      </a>
      <a class="headerItem" href="../html/home.html">Trang chủ</a>
      <a class="headerItem" href="../html/search-nav-bar.html">Tìm kiếm</a>
      <a class="headerItem" href="../html/new-para.html">Văn bản mới</a>
    </div>


    <div class="header-login">
      <li>
        <button class="user" onclick="myFunction()">
          <img src="../../asset/img/user.png" alt="" />
        </button>
        <div id="userList">
          <ul>
            <li><a href="./create-profile.html">Your account</a></li>
            <li><a href="./edit_remove.html">Admin</a></li>
            <li><a href="index.html">Logout</a></li>
          </ul>
        </div>
      </li>
    </div>
  </div>

  <div class="container">
    <!-- slide show  -->
    <div class="container-slide">
      <!-- <img src="" alt="" /> -->
    </div>

    <div class="container-content">
      <div class="content-1">
        <div class="container-showpara">
          <div class="content-showpara">
            <span>Nghị định này quy định về hành vi vi phạm, hình thức xử phạt,
              mức xử phạt, biện pháp khắc phục hậu quả đối với hành vi vi
              phạm hành chính; thẩm quyền xử phạt và thẩm quyền lập biên bản
              vi phạm hành chính trong lĩnh vực Lâm nghiệp.</span>
            <ul>
              <li>Chuong:1</li>
              <li>Khoan:1</li>
              <li>Muc:</li>
              <li>Dieu:1</li>
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

      </div>
      <div class="content-2">
        <span>ĐANG ĐƯỢC QUAN TÂM</span>
        <hr />
        <div class="content-2-slide">
          <img src="/asset/img/rung2.jpeg" alt="" />
          <span>Bảo tồn các vườn quốc gia phải đặt con người làm trung
            tâm</span>
        </div>

        <div class="content-2-slide">
          <img src="/asset/img/rung1.jpg" alt="" />
          <span>Phát triển nghề rừng bền vững là hạt nhân của tăng trưởng
            xanh</span>
        </div>

        <div class="content-2-slide">
          <img src="/asset/img/rung3.jpg" alt="" />
          <span>Ảnh hiếm về bộ lạc sống như thời nguyên thủy trong rừng
            Amazon</span>
        </div>

        <div class="content-2-slide">
          <img src="/asset/img/rung4.jpg" alt="" />
          <span>Chủ động đối phó với "giặc lửa"</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <footer>Designed by the group</footer>`

}

