let xhr;
function connect()
{
    xhr=new XMLHttpRequest();
    xhr.onreadystatechange= processRequest;
    xhr.open("GET","http://worldtimeapi.org/api/timezone/Asia/Kathmandu",true);
    xhr.send(null);
}

function processRequest()
{
    if(xhr.readyState===4 && xhr.status===200)
    {
       let str=xhr.responseText;
       let obj=JSON.parse(str);
       let today=new Date(obj.datetime)
       console.log(today);
       let span=document.querySelector(".datetime");
       span.innerHTML=today.toDateString()+","+today.toLocaleDateString();
    }
}