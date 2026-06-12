// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
let num=userPassword.length;
if(num <6){
    return "Weak";
}else if(num >=6 && num <=10){
 return "Medium";
}else{ num >10
    return "Strong"
}
return num ;
}

console.log(checkPasswordStrength(userPassword));