let dsnhanvien = 
[
            ["Nguyen Tuan Khanh", 11, 10000, "giang vien"],
            ["Tran Minh Quang", 12, 15000, "tro giang"],
            ["Nguyen Van Anh", 13, 20000, "tro ly"]
]
while (true) {
let command = prompt("Mời bạn nhập chức năng cần thực hiện (Read, Create, Update, Delete) hoặc nhập -1 để thoát ");
if (command == "-1") {
    break;
}
if (command == "Read") {
    console.log(dsnhanvien)
}
else if (command == "Create") {
    let arrt = [];
    arrt[0] = prompt("Mời bạn nhập tên");
    arrt[1] = parseInt(prompt("Mời bạn nhập tuổi"));
    arrt[2] = parseInt(prompt("Mời bạn nhập mức lương"));
    arrt[3] = prompt("Mời bạn nhập chức vụ");
    dsnhanvien.push(arrt);
}
else if (command == "Update") {
    let stt = parseInt(prompt("Mời bạn nhập số thứ tự của nhân viên cần update"));
    dsnhanvien[stt][0] = prompt("Mời bạn nhập tên thay thế");
    dsnhanvien[stt][1] = parseInt(prompt("Mời bạn nhập tuổi thay thế"));
    dsnhanvien[stt][2] = parseInt(prompt("Mời bạn nhập mức lương thay thế"));
    dsnhanvien[stt][3] = prompt("Mời bạn nhập chức vụ thay thế");
}
else if (command == "Delete") {
    let stt = parseInt(prompt("Mời bạn nhập số thứ tự của nhân viên cần delete"));
    delete dsnhanvien[stt];
}
}