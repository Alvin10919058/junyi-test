var reverseString = function(s) {
    var result = "";        //回傳的字串
    var ary = s.split("");  //字串拆成陣列

    for(var i = ary.length-1 ; i >= 0 ; i--){
        result = result + ary[i];  //從後面串回字串
    }
    return result;
};