isNaN(NaN); //true
isNaN(10); //false
isNaN('10'); //false
isNaN('a'); //true
isNaN('10px'); //true
isNaN([]); //true
isNaN({}); //true

//Number.isNaN 사용을 권고해드립니다.
Number.isNaN(NaN); //true
Number.isNaN(10); //false
Number.isNaN('10'); //false
Number.isNaN('a'); //false
Number.isNaN('10px'); //false
Number.isNaN([]); //false
Number.isNaN({}); //false