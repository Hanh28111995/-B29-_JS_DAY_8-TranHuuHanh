
//////////////////////////////////////////////////////////////////////////////////////////
var sum_1 = 0; positive_numb = 0;
var NewArray = '';
function TextToNum(Text) {
    return parseInt(Text);
}
function TextToNum2(Text) {
    return parseFloat(Text);
}
document.getElementById("input_String").addEventListener("keyup", function () {
    var num_string = (document.getElementById("input_String").value) || 0;
    if (num_string != 0) {
        var clear_string = num_string.split(' ').join('');
        var stringToArr = clear_string.split(";");
        NewArray = stringToArr.map(TextToNum);
    }
});
document.getElementById("input_String_2").addEventListener("keyup", function () {
    var num_string_2 = (document.getElementById("input_String_2").value) || 0;
    if (num_string_2 != 0) {
        var clear_string_2 = num_string_2.split(' ').join('');
        var stringToArr_2 = clear_string_2.split(";");
        NewArray_2 = stringToArr_2.map(TextToNum2);
    }
});
document.getElementById("btn1").onclick = function () {
    var print_NewArray = "";
    NewArray.forEach(function (ele, i) {
        print_NewArray += " [" + NewArray[i] + "] ";
    });
    document.getElementById("yn").innerHTML = print_NewArray;
}
document.getElementById("btn10").onclick = function () {
    var print_NewArray_2 = "";
    NewArray_2.forEach(function (ele, i) {
        print_NewArray_2 += " [" + NewArray_2[i] + "] ";
    });
    document.getElementById("yn2").innerHTML = print_NewArray_2;
}

// 1 - tổng các số dương trong mảng
document.getElementById("btn2").onclick = function () {
    for (var i = 0; i < NewArray.length; i++) {
        if (NewArray[i] > 0) { sum_1 += NewArray[i]; }
    }
    document.getElementById("yn").innerHTML = sum_1;
}

// 2 - Đếm có bao nhiêu số dương trong mảng
document.getElementById("btn3").onclick = function () {
    var positive_numb = 0;
    for (var i = 0; i < NewArray.length; i++) {
        if (NewArray[i] > 0) { positive_numb++; }
    }
    document.getElementById("yn").innerHTML = positive_numb;
}

// 3 - Tìm số nhỏ nhất 
document.getElementById("btn4").onclick = function () {
    var Min_numb1 = NewArray[0];
    for (var i = 0; i < NewArray.length; i++) {
        if (NewArray[i] <= Min_numb1) { Min_numb1 = NewArray[i]; }
    }
    document.getElementById("yn").innerHTML = Min_numb1;
}

// 4 - Tìm số dương nhỏ nhất trong mảng 
document.getElementById("btn5").onclick = function () {
    var Min_numb2 = 0;
    for (var i = 0; i < NewArray.length; i++) {
        if (NewArray[i] > 0) { Min_numb2 = NewArray[i]; break }
    }
    for (var i = 0; i < NewArray.length; i++) {
        {
            if ((NewArray[i] > 0) && (NewArray[i] <= Min_numb2)) {
                Min_numb2 = NewArray[i];
            }
        }
        document.getElementById("yn").innerHTML = Min_numb2;
    }
}

// 5 - Tìm số chẵn cuối cùng trong mảng
document.getElementById("btn6").onclick = function () {
    var last_num = -1;
    NewArray.forEach(function (ele, index) {
        if ((ele % 2) == 0) { last_num = ele; }
    });
    document.getElementById("yn").innerHTML = last_num;
}

// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí 
document.getElementById("btn7").onclick = function () {
    lc1 = parseInt(document.getElementById("locate1").value) - 1;
    lc2 = parseInt(document.getElementById("locate2").value) - 1;
    if (((lc1 >= 0) && (lc1 < NewArray.length)) && ((lc2 >= 0) && (lc2 < NewArray.length))) {
        var a = NewArray[lc1];
        var b = NewArray[lc2];
        NewArray[lc1] = b;
        NewArray[lc2] = a;
        var print_NewArray = "";
        NewArray.forEach(function (ele, i) {
            print_NewArray += " [" + NewArray[i] + "] "
        });
        document.getElementById("yn").innerHTML = print_NewArray;
    }
    else {
        document.getElementById("yn").innerHTML = " Nhập lại vị trí"
    }
}

// 7. Sắp xếp mảng theo thứ tự tăng dần 
document.getElementById("btn8").onclick = function () {
    var sort_array1 = NewArray;
    for ( var n = 0; n <sort_array1.length; n++)
    {
        for ( var j = 0; j < (sort_array1.length)-n-1; j++)
        {
            if (sort_array1[j] > sort_array1[j+1])
            {
                var a = sort_array1[j] ;
                sort_array1[j] = sort_array1[j+1];
                sort_array1[j+1] = a ;               
            }
        }
    }
    var print_NewArray = "";
    sort_array1.forEach(function (ele, i) {
        print_NewArray += " [" + sort_array1[i] + "] ";
    });
    document.getElementById("yn").innerHTML = print_NewArray;

}

// 8. Tìm số nguyên tố đầu tiên trong mảng.
document.getElementById("btn9").onclick = function () {
    var so_nguyen_to = -1 ;
    var count = 0;
    for ( var i = 0; i < NewArray.length; i++)
    {
        count = 0;
        for (var e = 1; e <= NewArray[i]; e++)
        {
            if( (NewArray[i] % e) == 0 ) { count++; }
        }
        if ( count == 2 )
        {
            so_nguyen_to = NewArray[i];
            break;
        }
    }
    document.getElementById("yn").innerHTML = so_nguyen_to  ;
}
// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
document.getElementById("btn11").onclick = function () {
    var check_int = 0;
    NewArray_2.forEach(function (ele, i) {
        if (NewArray_2[i] == parseInt(NewArray_2[i])) { check_int++; }
    });
    document.getElementById("yn2").innerHTML = check_int;
}

// 10. So sánh số lượng số dương và số lượng số âm
document.getElementById("btn12").onclick = function () {
    var check_am = 0;
    var check_duong = 0;
    NewArray_2.forEach(function (ele, i) {
        if (NewArray_2[i] > 0) { check_duong++; }
        if (NewArray_2[i] < 0) { check_am++; }
    });
    if (check_am == check_duong) {document.getElementById("yn2").innerHTML = "Số lượng số âm = số lượng số dương";}
    if (check_am > check_duong)  {document.getElementById("yn2").innerHTML = "Số lượng số âm nhiều hơn ";}
    if (check_am < check_duong)  {document.getElementById("yn2").innerHTML = "Số lượng số dương nhiều hơn ";}
}






