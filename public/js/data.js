

function getdata(){


fetch('/data/getdata').then(res=>{
    console.log(res);
    // html="";
    // for(i=0;i<res.rows.length;i++){
    //     html+=`<td>${res.rows[i].BedTime}</td>`
    // }
    // document.getElementById("sleepdata").innerHTML=html
})

}
getdata();


const registerform=document.querySelector("#register");
registerform.addEventListener("submit",function(e){
    e.preventDefault()
   
const fname=document.querySelector("#fname");
const lname=document.querySelector('#lname');
const cpass=document.querySelector('#cpass');
console.log(fname,lname,cpass);
fetch('/data/register',{
    method:"POST",
    body:JSON.stringify({
        fname:fname.value,
        lname:lname.value,
        cpass:cpass.value,


    }),
    headers: { "Content-Type": "application/json" }

}).then(res=>{
document.location.replace("/login");
}).catch(err => console.log(err))

})
