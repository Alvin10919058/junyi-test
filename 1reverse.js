//第一部分 (A.) 請寫一個程式把裡面的字串反過來。

function reverseString(s) {

    var ansStr = "";        						//回傳的字串
    var tarAry = s.split(""); 					    //字串拆成陣列

    for(var i = tarAry.length-1 ; i >= 0 ; i--){
        ansStr = ansStr + tarAry[i];                //從後面串回字串
    }
    return ansStr;

};


//第二部分 (B.) 請寫一個程式把裡面的字串,每個單字本身做反轉,但是單字的順序不變。

function reverseSentence(s) {

    var ansStr = "";                                //回傳的字串
    var tarAry = s.split("");                       //字串拆成陣列

    for(var i = tarAry.length-1 ; i >= 0 ; i--){
        ansStr = ansStr + tarAry[i];                //從後面串回字串
    }
    return  ansStr.split(" ").reverse().join(" ");  //最後多一個步驟分割空白 反轉 再join

};





