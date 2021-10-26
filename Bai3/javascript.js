    let arr = [];
    let n = -1;
    while (true) {
        let x = prompt("Mời bạn nhập các phần tử của mảng");
        if (x==-1) {
            break;
        }
        arr.push(x);
        n++;
    }

    console.log(arr);

    let i = 0;
    while (i<=n) {
        for (let j=i-1; j>=0; j--) {
            if (arr[j] == arr[i]) {
                delete arr[i];
                break;
            }
        }
        i++;
    }

    console.log(arr);

