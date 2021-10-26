let s = prompt("Mời bạn nhập chuỗi");
s = s + ' ';
let t = s[0].toUpperCase();
let i = 0;
let n = s.length;
for (i = 1; i<n; i++) {
    if ((s[i]!==' ') && (s[i-1]==' ')) {
        t += s[i].toUpperCase();
    }
    else {
        t +=s[i].toLowerCase();
    }
}

console.log(t);
