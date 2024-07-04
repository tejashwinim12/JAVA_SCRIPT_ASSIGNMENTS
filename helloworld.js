 var numbers=['1','2','3','4','5'];
 numbers.push('7');
 console.log(numbers);
 numbers.splice(1,3);
 console.log(numbers);

 var nos=['1','2','3','4','5','7'];
 var somearray = nos.splice(1,3);
 console.log(nos);
 console.log(somearray); 

 var nos=['1','2','3','4','5','7'];
 var somearray = nos.slice(1,3);
 console.log(nos);
 console.log(somearray); 
 