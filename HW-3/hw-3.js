
/**************************************************/
// PROBLEM 1 - "typeof Data Values"

//Number Type
console.log(typeof 42);
//String type
var languages = {
        english: "Hello",
        french: "Bonjour",
        notALanguage: 4,
        spanish: "Hola"
    };
for(var hello in languages){
    var value = languages[hello];
    if (typeof value === "string"){
    console.log(value);
    }
}
//Boolean Type
var a = Boolean('Radical');
console.log(a);
console.log(typeof(a));
/**************************************************/
// PROBLEM 2 - Using Loops to Create Pyramids
var pyramid = "pyramid";
  for (var i = 0; i < 50; i++) {
  pyramid = pyramid + "pyramid";
console.log(pyramid);
}/**************************************************/
// PROBLEM 3 - FizzBuzz
function fizzBuzz(){
    for(var i=1; i<=100; i++){
        if(i % 3 ===0 && i % 5 ===0){
            console.log(i+' fizzBuzz');
        } else if(i % 3 ===0){
            console.log(i+' fizz');
        } else if(i % 5 ===0){
            console.log(i+' buzz');
        } else {
            console.log(i);
        }
    }
}fizzBuzz();
