function makePromise(n)
{
  return new Promise(function(resolve,reject)
  {
    setTimeout(()=>{
        if(n%2==0)
    {
        resolve("Completed Successfully");
    }
    else{
        reject("Not Completed")
    }
  },5000);
    })
}

function successful(msg)
{
    let span=document.querySelector(".text")
    span.innerHTML=msg;
}
function failure(msg)
{
    let span=document.querySelector(".text")
    span.innerHTML=msg;
}
function doTask()
{let num=prompt("Enter a number");

    let p=makePromise(num);
    p.then(successful,failure);
}