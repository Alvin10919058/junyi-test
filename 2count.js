
//第二部分 請寫一個程式,Input 是一個數字,Output 是從 1 到這個數字,扣除掉所有 3 的倍數以及 5 的倍數,但是需要保留同時是 3 和 5 的倍數的總數字數。

function count(int) {
    
       var count3=int/3;  					
       var count5=int/5;
       var count15=int/gcd(3.5);
  
       var result=int-count3-count5+2*count15;  //輸入數字減掉3跟5的倍數，再加回公倍數
    
    return result;

};

function gcd(a,b){
		var minNum = Math.min(a,b),maxNum = Math.max(a,b),i=Math.floor(maxNum/minNum),vper=0;
		if(a ===0 || b===0){
			return maxNum;
		}

		for(;i<=maxNum;i++){
			vper = minNum * i;
			if(vper % maxNum === 0){
				return vper;
				break;
			}
		}
	}




