// function add(...args)
// {
//     let sum=0;
//     for(let a of args)
//     {
//         sum+=a;
   
//     }
//     console.log(sum)
// }
//  add(2,3);
//  add(2,3,4);
//  add(2,3,4,5);


function displayResult(name,...args)
{

   let result=0;
   for(let a of args)
   {
      result+=a;
   
      
   
   }
   console.log(`Name is ${name}.. Result ${result}`);

}
displayResult("Sarita",20,30,40);
displayResult("Bhuwan",20,30,40);