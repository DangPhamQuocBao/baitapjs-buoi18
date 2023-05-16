var themSo = [];
var mangSoThuc = [];
//THem So
function themSoN() {
  var nhapSo = document.getElementById("nhapSo").value * 1;
  themSo.push(nhapSo);
  document.querySelector("#hienThi").innerHTML = themSo;
  console.log(themSo);
  document.querySelector("#hienThiMang").innerHTML = themSo;
}
//Tong so duong trong manng
function tongSoDuong() {
  var tongCuaSoDuong = 0;
  for (var i = 0; i < themSo.length; i++) {
    if (themSo[i] > 0) {
      tongCuaSoDuong += themSo[i];
    }
  }
  document.querySelector("#hienTHiTongCuaSoDuongTrongMang").innerHTML =
    tongCuaSoDuong;
}

//dem So Duong Trong Mang
function demSoDuongTrongMang() {
  var demSoDuong = 0;
  for (var i = 0; i <= themSo.length; i++) {
    if (themSo[i] > 0) {
      demSoDuong++;
    }
  }
  document.querySelector("#hienThiDemSoDuong").innerHTML = demSoDuong;
}
//tim so nho nhat
function timSoNhoNhat() {
  var soNhoNhat = themSo[0];
  for (var i = 0; i <= themSo.length; i++) {
    var timSoNhoNhat = themSo[i];
    if (timSoNhoNhat < soNhoNhat) {
      soNhoNhat = timSoNhoNhat;
    }
  }
  document.querySelector("#hienThiSoNhoNhat").innerHTML = soNhoNhat;
}
//tim so duong nho nhat

function timSoDuongNhoNhat() {
  bienSoDuong = [];
  for (var x = 0; x < themSo.length; x++) {
    if (themSo[x] >= 0) {
      bienSoDuong.push(themSo[x]);
      console.log(bienSoDuong);
    }
  }
  var soDuongNhoNhat = bienSoDuong[0];
  for (var i = 0; i <= bienSoDuong.length; i++) {
    var timSoDuongNhoNhat = bienSoDuong[i];
    if (timSoDuongNhoNhat >= 0 && timSoDuongNhoNhat < soDuongNhoNhat) {
      soDuongNhoNhat = timSoDuongNhoNhat;
    }
  }
  document.querySelector("#hienThiSoDuongNhoNhat").innerHTML = soDuongNhoNhat;
}
// tim so chan cuoi cung trong mang
function soChanCuoiCung() {
  // var bienSoDuongMoi = [];
  // for (var x = 0; x <= themSo.length; x++) {
  //   if (themSo[x] >= 0) {
  //     bienSoDuongMoi.push(themSo[x]);
  //   }
  //   console.log(bienSoDuongMoi);
  // }
  // var chanCuoi = bienSoDuongMoi[-1];
  // for (var i = 1; i <= bienSoDuongMoi.length; i++) {
  //   var timChanCuoi = bienSoDuongMoi[bienSoDuongMoi.length - i];
  //   if (bienSoDuongMoi[bienSoDuongMoi.length - 1] >= 0) {
  //     chanCuoi = timChanCuoi = bienSoDuongMoi[bienSoDuongMoi.length - i];
  //     return timChanCuoi;
  //   } else if (bienSoDuongMoi[bienSoDuongMoi.length - i] < 0) {
  //     chanCuoi = timChanCuoi = bienSoDuongMoi[-1];
  //   }
  //   // var bienSoDuongMoi =themSo[themSo.length-1];
  // }
  var bienSoChanCuoi = -1;
  for (var i = themSo.length - 1; i >= 0; i--) {
    if (themSo[i] % 2 == 0) {
      bienSoChanCuoi = themSo[i];
      break;
    }
  }

  document.querySelector("#hienThiSoChanCuoi").innerHTML = bienSoChanCuoi;
}
//Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)

function doiViTri() {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;
  var hoanDoiViTri = themSo[viTri1 - 1];
  themSo[viTri1 - 1] = themSo[viTri2 - 1];
  themSo[viTri2 - 1] = hoanDoiViTri;
  document.querySelector("#hienThiViTri").innerHTML = themSo;
}
//sap xep mang
// function sapXep() {
//   themSo.sort();
//   document.querySelector("#sapXepMang").innerHTML = themSo;
// }
function sapXep() {
  themSo.sort(function sapXep(a, b) {
    a = +a;
    b = +b;
    return a - b;
  });
  document.querySelector("#sapXepMang").innerHTML = themSo;
}
//Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về -1.
// function timSoNguyenTo(themSo) {
//   for (var i = 0; i < themSo.length; i++) {
//     if (soNguyenTo(themSo[i])) {
//       return themSo[i];
//     }
//   }
//   return -1;
// }

// function soNguyenTo(number) {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// function findFirstPrime(themSo) {
//   for (let i = 0; i < themSo.length; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(themSo[i]); j++) {
//       if (themSo[i] % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       return themSo[i];
//       document.querySelector("#hienThiSoNguyenToDauTien").innerHTML = themSo[i];
//     }
//   }
//   return -1;
//   document.querySelector("#hienThiSoNguyenToDauTien").innerHTML = -1;
// }
function timSoNguyenTo() {
  var soNguyenTo = -1;
  for (var i = 0; i <= themSo.length - 1; i++) {
    if (themSo[i] > 1 && themSo[i] % 2 != 0) {
      soNguyenTo = themSo[i];
      break;
    }
  }
  document.querySelector("#hienThiSoNguyenToDauTien").innerHTML = soNguyenTo;
}

//them mang,tim xem trong mang nay co bao nhieu so nguyen
function themMang() {
  var themMangMoi = document.getElementById("themMangMoi").value * 1;
  mangSoThuc.push(themMangMoi);
  document.querySelector("#hienThiMangVuaTHem").innerHTML = mangSoThuc;
}
function demSoNguyen() {
  var demSoNguyenTrongMang = 0;
  for (var i = 0; i <= mangSoThuc.length; i++) {
    if (typeof mangSoThuc[i] == "number") {
      demSoNguyenTrongMang++;
    }
  }
  document.querySelector("#hienThiSoNguyen").innerHTML = demSoNguyenTrongMang;
}
//so sanh am duong
function soSanh() {
  var soDuong = 0;
  for (var i = 0; i <= themSo.length; i++) {
    if (themSo[i] > 0) {
      soDuong++;
      console.log(soDuong);
    }
  }
  var soAm = 0;
  for (var i = 0; i <= themSo.length; i++) {
    if (themSo[i] < 0) {
      soAm++;
      console.log(soAm);
    }
  }
  if (soDuong > soAm) {
    document.querySelector("#soSanhAmDuong").innerHTML = "so duong > so am";
  } else if (soDuong < soAm) {
    document.querySelector("#soSanhAmDuong").innerHTML = "so duong < so am";
  } else {
    document.querySelector("#soSanhAmDuong").innerHTML = "so duong = so am";
  }
}
