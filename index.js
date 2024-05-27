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

// Format Currency VND

const formatCurrencyVND = (number, locale = "vi-VN", currency = "VND") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(number);
};

// Format Currency USD

const formatCurrencyUSD = (number, locale = "en-US", currency = "USD") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(number);
};

// Bài 1

const tinhDiemKhuVuc = (khuVuc) => {
  switch (khuVuc) {
    case "A":
      return 2;
      break;
    case "B":
      return 1;
      break;
    case "C":
      return 0.5;
      break;
    default:
      alert("Vui lòng chọn khu vực");
  }
};

const tinhDiemDoiTuong = (doiTuong) => {
  switch (doiTuong) {
    case "1":
      return 2.5;
      break;
    case "2":
      return 1.5;
      break;
    case "3":
      return 1;
      break;
    default:
      alert("Vui lòng chọn đối tượng");
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
  ).innerHTML = `Họ tên khách hàng: ${hoTen}; Tiền điện: ${formatCurrencyVND(
    tongTienDien
  )}`;
};

// Bài 3

const kiemTraThueSuat = (thuNhapChiuThue) => {
  if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
    return 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    return 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    return 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    return 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    return 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    return 0.3;
  } else if (thuNhapChiuThue > 960000000) {
    return 0.35;
  }
};

document.getElementById("tinhTienThue").onclick = () => {
  let hoTen = document.getElementById("hoTenBai3").value;
  let tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
  let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  let thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  let thueSuat = kiemTraThueSuat(thuNhapChiuThue);
  let tienThue = thuNhapChiuThue * thueSuat;

  if (soNguoiPhuThuoc < 0) {
    alert("Số người phụ thuộc không hợp lệ! Vui lòng nhập lại");
  } else if (thuNhapChiuThue <= 0) {
    alert("Tổng thu nhập năm không hợp lệ! Vui lòng nhập lại");
  } else {
    document.querySelector(
      ".bai3"
    ).innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${formatCurrencyVND(
      tienThue
    )}`;
  }
};

// Bài 4

const toggleInput = () => {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  if (loaiKhachHang == "doanhNghiep") {
    document.getElementById("soKetNoi").style.display = "block";
  } else {
    document.getElementById("soKetNoi").style.display = "none";
  }
};

let phiXuLyHoaDon = 0;
let phiDichVuCoBan = 0;
let phiThueKenhCaoCap = 0;
const tinhTienCap = (loaiKhachHang) => {
  switch (loaiKhachHang) {
    case "nhaDan":
      phiXuLyHoaDon = 4.5;
      phiDichVuCoBan = 20.5;
      phiThueKenhCaoCap = 7.5;
      break;
    case "doanhNghiep":
      phiXuLyHoaDon = 15;
      phiDichVuCoBan = 75;
      phiThueKenhCaoCap = 50;
      break;
    default:
      alert("Vui lòng chọn loại khách hàng");
  }
};

document.getElementById("tinhTienCap").onclick = () => {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let maKhachHang = document.getElementById("maKhachHang").value;
  let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  tinhTienCap(loaiKhachHang);

  if (soKetNoi > 10) {
    phiDichVuCoBan += (soKetNoi - 10) * 5;
  }

  let tienCap =
    phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap * soKenhCaoCap;

  document.querySelector(
    ".bai4"
  ).innerHTML = `Mã khách hàng: ${maKhachHang}; Tiền cáp: ${formatCurrencyUSD(
    tienCap
  )}`;
};
