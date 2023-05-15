var themSo = [];
//THem So
function themSoN() {
  var nhapSo = document.getElementById("nhapSo").value * 1;
  themSo.push(nhapSo);
  document.querySelector("#hienThi").innerHTML = themSo;
  console.log(themSo);
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
//tim so chan cuoi cung trong mang
// function soChanCuoiCung() {
// var chanCuoi = themSo[themSo.length-1];
// for(var i=1;i<=themSo.length;i++){
//     var timChanCuoi = themSo[themSo.length - i]
//     if((timChanCuoi%2) = 0 ){
//         chanCuoi = timChanCuoi;
//     }
// }
// document.querySelector("#hienThiSoChanCuoi").innerHTML = chanCuoi;
// }

//sap xep mang
function sapXep() {
  themSo.sort;
  document.writeln(themSo);
  document.querySelector("#sapXepMang").innerHTML = themSo;
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
