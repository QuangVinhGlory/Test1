let day = parseInt(prompt("Mời bạn nhập ngày"));
let month = parseInt(prompt("Mời bạn nhập tháng"));
let year = parseInt(prompt("Mời bạn nhập năm"));
let check = 0;
if ((day<1) || (year < 0)) {
    check = 0;
}
else if (year % 4 == 0) {
    if  ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)){
        if (day<=31) {
            check = 1;
        }
    }
    else if (month == 2) {
        if (day<=29) {
            check = 1;
        }
    }
    else if (month > 12) {
        check = 0;
    }
    else {
        if (day<=30) {
            check = 1;
        }
    }
}
else {
    if  ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)){
        if (day<=31) {
            check = 1;
        }
    }
    else if (month == 2) {
        if (day<=28) {
            check = 1;
        }
    }
    else if (month > 12) {
        check = 0;
    }
    else {
        if (day<=30) {
            check = 1;
        }
    }
}
if (check == 0) {
    console.log("Ngày",day,"/",month,"/",year," là ngày KHÔNG hợp lệ");
}
else {
    console.log("Ngày",day,"/",month,"/",year," là ngày hợp lệ");
    day++;
    if (month == 2) {
        if (year % 4 == 0) {
            if (day > 29) {
                day = 1;
                month++;
            }             
        }
        else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    }
    else {
        if  ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)) {
            if (day > 31) {
                month++;
                day = 1;
            }
        }
        else {
            if (day > 30) {
                month++;
                day = 1;
            }
        }
    }
    if (month > 12) {
        month = 1;
        year++;
    }
    console.log("Ngày tiếp theo là: ",day,"/",month,"/",year);
}


