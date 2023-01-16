
/*
for(let i = 1; i<=110; i++){
    if(i%3 === 0 && i%5 === 0 && i%7 === 0){
        console.log("FizzBuzzBang");
    }
    else if(i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz");
    }
    else if(i%3 === 0 && i%7 === 0){
        console.log("FizzBang");
    }
    else if(i%5 === 0 && i%7 === 0){
        console.log("BuzzBang");
    }
    else if(i%3===0){
        console.log("Fizz");
    }
    else if(i%5===0){
        console.log("Buzz");
    }
    else if(i%7===0){
        console.log("Bang");
    }
    else{
console.log(i);
    }
}
*/
for(let i = 1; i<150; i++){
    console.log((i%3 ? "":"fizz" )+  (i % 5 ? '' : 'buzz') + (i % 7 ? '' : 'bang') + (i % 7 ? '' : 'boink')|| i);
}
