const numbers =[50,34,67,25,14]

let largest=numbers[0]
for(const num of numbers){
    if(num>largest)
    {
        largest=num
    }
    
}
console.log(`Largest number from array is: ${largest}`);
