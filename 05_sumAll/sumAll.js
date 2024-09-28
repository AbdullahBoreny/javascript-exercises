const sumAll = function(num1,num2) {


if(num1 > num2) {
let temp = num1;
num1 = num2;
num2 = temp;
}


if(num1 <0 || num2 <0){
    return "ERROR";
}
else if(!Number.isInteger(num2 / num1)) {
    return "ERROR";
}

else if(typeof num1 =="string" || typeof num2 =="string"){
    return "ERROR";
}





let sum = 0;
for(let start = num1,end = num2; start <= num2 ; start++) {//loop from num1 to num2
  
    sum = sum + end;
      end = end -1;
}
return sum;
}; sumAll(1,4);

// Do not edit below this line
module.exports = sumAll;
