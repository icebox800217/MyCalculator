var tempNum = -1;
var op;
// 數值類型
function numClick(num) {
    document.getElementById('result').innerHTML =
        document.getElementById('result').innerHTML + num;
}
// 符號類型
function operatorClick(str) {
    if (tempNum == -1) {
        // 記錄下來現在畫面上面是什麼數值
        tempNum = document.getElementById('result').innerHTML;
    } else {
        //運算
        count();
    }
    //紀錄運算符號
    op = str;
    // 清空畫面
    document.getElementById('result').innerHTML = " ";
    console.log(op);
    console.log(tempNum);
}
// 答案
function answer() {
    count();
    document.getElementById('result').innerHTML = tempNum;
    // 清空
    tempNum = -1;
    console.log(tempNum);
}

function cleanClick() {
    document.getElementById('result').innerHTML = " ";
    tempNum = -1;
}

function count() {
    switch (op) {
        // 計算
        case '+':
            tempNum = parseFloat(tempNum) + parseFloat(document.getElementById('result').innerHTML);
            break;
        case '-':
            tempNum = parseFloat(tempNum) - parseFloat(document.getElementById('result').innerHTML);
            break;
        case '*':
            tempNum = parseFloat(tempNum) * parseFloat(document.getElementById('result').innerHTML);
            break;
        case '/':
            tempNum = parseFloat(tempNum) / parseFloat(document.getElementById('result').innerHTML);
            break;
    }
}