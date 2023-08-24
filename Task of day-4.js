// Do the below programs in anonymous function ,IIFE and arrow functions;
// 1.Print odd numbers in an array 

  //  in anonymous funtion ; 
  
    var f =function(array){
                  for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                }
      f([1,2,3,4,5,6,7,8,9]) 

//    in   IIFE function        ; 
    
    (function(array){
             for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
             })([1,2,3,4,5,6,7,8,9])

  //  in arrow function         ; 
    
    oddNumbers = (array) => {
                   for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                        }
   oddNumbers([1,2,3,4,5,6,7,8,9]) 

//2.Convert all the strings to title caps in a string array

    // in anonymus function ; 
    
    
    var f = function (str) {
var str1 = str.toLowerCase().split(" ");
for (var i = 0; i < str1.length; i++) 
    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
const str2 = str1.join(" ");
console.log(str2);

}
f("IAM LEARNED LOT FROM GUVI");

    
  //  in IIFE ; https:
     
     (function (str) {
                    str = str.toLowerCase().split(' ');
                    for (var i = 0; i < str.length; i++) {
                      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
                    } 
                   const str1= str.join(' ');
                   console.log(str1)
                  })("IAM LEARNED LOT FROM GUVI")
    
  //  in arrow function ;
     
      titleCaps = (str) => {
                var  str1 = str.toLowerCase().split(' ');
                    for (var i = 0; i < str1.length; i++) 
                      str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1); 
                    
                    const str2 = str1.join(' ');
                    console.log(str2)
                  }   
     titleCaps('IAM LEARNED LOT FROM GUVI')    
     

//  3.sum of all numbers in array

     //  in anonymous funtion ; 
       
       
var f = function(array){
                  var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   console.log(sum) ;
                }
f([1,2,3,4]);

      // in IIFE function ;
       
       (function(array){
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++){
                     sum = sum + array[i];
                   }
                   console.log(sum);
             })([1,2,3,4,5])
     //  in arrow function ; 
       
       sum = (array)=>{
             var sum = 0;
                  for(var i = 0 ; i< array.length ; i++)
                     sum = sum + array[i];
                   
                   console.log(sum);
                   }
     sum([1,2,3]);

//4.Return all the prime numbers in an array

     //  in anonymous function ; 
       
       var f =  function(numArray){
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
f([1,2,3,4,5,6,7,8,9])  ; 


      // in IIFE function ;
       
       (function(numArray){
 numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);

})([1,2,3,4,5,6,7,8,9]) 
     //  in arrow function ;
       
          primeNumber = (numArray) => {
                      numArray = numArray.filter((number) => {
                        for (var i = 2; i <= Math.sqrt(number); i++) {
                          if (number % i === 0) return false;
                        }
                        return true;
                      });
                      console.log(numArray);
                  }
    primeNumber([1,2,3,4,5,6,7,8,9])   ; 
//5.Remove all the duplicates in an array

      //  in anonymous function ; 
        
        var f = function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                      }
f(['apple','apple','banana'])                      
                      
       // in IIFE function ; 
        
        (function(array){
                        let dup = [...new Set(array)];
                        console.log(dup);
                       })(['apple','apple','banana']) 
        