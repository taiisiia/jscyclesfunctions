/*1*/

function getString (text) {
    return text;
}

console.log(getString('Вы ввели ' + 'число'));

/* 2 */

function calcSum (num) {
    if (typeof num!=="number") {
        return null; 
    }
    if (isNaN (num)) {
        return null;
    }
    return num+5;
    }
    console.log (calcSum(7));

    /* 3 */

    function getSentence (str1, str2) {
        if (typeof str1!=="string" || typeof str2!=="string") {
            return null;
        }
       
        return str1 + str2;
    }
    console.log (getSentence('Lorem ' , 'ipsum'));


    /* 4 */

    function calcProduct (num1, num2) {
        if (typeof num1!=="number" || typeof num2!=="number") {
            return null; 
        }
        if (isNaN (num1) || isNaN (num2)) {
            return null;
        }
        return num1*num2;
    }
    console.log (calcProduct(2,5));

    /* 5 */

    function isDivisible (num3,num4) {
        if ((typeof num3=="number" || typeof num3=="string") && (typeof num4=="number" || typeof num4=="string")) 
            return num3%num4===0;
        }
        console.log (isDivisible('8',4))
       
   /* 6 */ 
    
    function calcPower (num5,num6) {
        if ((typeof num5=="number" || typeof num5=="string") && (typeof num6=="number" || typeof num6=="string"))
            return Math.pow (num5,num6);   
    }
    console.log (calcPower(5,'2'));

    /* 7 */

    function calcAreaPar (a,b,c) {
        return 2*(a*b+b*c+a*c);
    }

    console.log (calcAreaPar (3,4,5));

    

   