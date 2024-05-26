// Function handleTabSwitch

const tabButtons = document.querySelectorAll(".nav-link");
const handleTabSwitch = (event) => {
  tabButtons.forEach((nav) => {
    // Đặt lại icon mặc định
    let icon = nav.querySelector("span");
    icon.innerHTML = "📒";
  });
  // Đặt icon active
  event.target.querySelector("span").innerHTML = "📖";
};

tabButtons.forEach((nav) => {
  nav.onclick = handleTabSwitch;
});

// Đảm bảo tab đầu tiên được active khi tải trang
document.querySelector(".nav-link.active").click();

// Bài 1

const tinhDiemKhuVuc = (khuVuc) => {
  switch (khuVuc) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
};

const tinhDiemDoiTuong = (doiTuong) => {
  switch (doiTuong) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    default:
      return 0;
  }
};

document.getElementById("tinhKetQua").onclick = () => {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let diemMonThuNhat = document.getElementById("diemMonThuNhat").value * 1;
  let diemMonThuHai = document.getElementById("diemMonThuHai").value * 1;
  let diemMonThuBa = document.getElementById("diemMonThuBa").value * 1;
  let khuVuc = document.getElementById("chonKhuVuc").value;
  let doiTuong = document.getElementById("chonDoiTuong").value;
  let diemKhuVuc = tinhDiemKhuVuc(khuVuc);
  let diemDoiTuong = tinhDiemDoiTuong(doiTuong);
  let diemTong =
    diemMonThuNhat + diemMonThuHai + diemMonThuBa + diemKhuVuc + diemDoiTuong;
  let thePBai1 = document.querySelector(".bai1");

  if (diemMonThuNhat <= 0 || diemMonThuHai <= 0 || diemMonThuBa <= 0) {
    thePBai1.innerHTML = `Bạn đã rớt. Do bạn có điểm nhỏ hơn hoặc bằng 0`;
  } else if (diemTong >= diemChuan) {
    thePBai1.innerHTML = `Chúc mừng bạn đã đậu. Tổng điểm: ${diemTong}`;
  } else {
    thePBai1.innerHTML = `Bạn đã rớt. Tổng điểm: ${diemTong}`;
  }
};

// Bài 2

const kiemTraGiaTienDien50KwDau = (soKw) => 500;
const kiemTraGiaTienDien51Den100Kw = (soKw) => 650;
const kiemTraGiaTienDien101Den200Kw = (soKw) => 850;
const kiemTraGiaTienDien201Den350Kw = (soKw) => 1100;
const kiemTraGiaTienDien351KwTroLen = (soKw) => 1300;

document.getElementById("tinhTienDien").onclick = () => {
  let hoTen = document.getElementById("hoTenBai2").value;
  let soKw = document.getElementById("soKw").value * 1;
  let giaTienDien50KwDau = kiemTraGiaTienDien50KwDau(soKw);
  let giaTienDien51Den100Kw = kiemTraGiaTienDien51Den100Kw(soKw);
  let giaTienDien101Den200Kw = kiemTraGiaTienDien101Den200Kw(soKw);
  let giaTienDien201Den350Kw = kiemTraGiaTienDien201Den350Kw(soKw);
  let giaTienDien351KwTroLen = kiemTraGiaTienDien351KwTroLen(soKw);
  let tongTienDien = 0;

  if (soKw <= 0) {
    alert("Số kW không hợp lệ! Vui lòng nhập lại");
  } else if (soKw > 0 && soKw <= 50) {
    tongTienDien = giaTienDien50KwDau * soKw;
  } else if (soKw > 50 && soKw <= 100) {
    tongTienDien =
      giaTienDien50KwDau * 50 + giaTienDien51Den100Kw * (soKw - 50);
  } else if (soKw > 100 && soKw <= 200) {
    tongTienDien =
      giaTienDien50KwDau * 50 +
      giaTienDien51Den100Kw * 50 +
      giaTienDien101Den200Kw * (soKw - 100);
  } else if (soKw > 200 && soKw <= 350) {
    tongTienDien =
      giaTienDien50KwDau * 50 +
      giaTienDien51Den100Kw * 50 +
      giaTienDien101Den200Kw * 100 +
      giaTienDien201Den350Kw * (soKw - 200);
  } else if (soKw > 350) {
    tongTienDien =
      giaTienDien50KwDau * 50 +
      giaTienDien51Den100Kw * 50 +
      giaTienDien101Den200Kw * 100 +
      giaTienDien201Den350Kw * 150 +
      giaTienDien351KwTroLen * (soKw - 350);
  }

  document.querySelector(
    ".bai2"
  ).innerHTML = `Họ tên khách hàng: ${hoTen}; Tiền điện: ${tongTienDien.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
};
