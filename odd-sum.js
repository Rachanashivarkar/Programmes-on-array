let numbers=[34,57,23,79,45,13]

let sum = 0
for (let i=0;i<numbers.length;i++)
{
    if(numbers[i] % 2 == 1)
    {
        sum+=numbers[i]
    }
}
console.log(`Addition of odd numbers: ${sum}`)