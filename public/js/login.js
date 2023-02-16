async function validation(event){
    event.preventDefault()
    const fname=document.querySelector('#fname').value.trim();
    const lname=document.querySelector('#lname').value.trim();

if(fname && lname){
    const validaionresult=await fetch('/data/login', {
        method:"POST",
        body:JSON.stringify({
            fname,lname
        }),
        
    headers: { "Content-Type": "application/json" }
    })
    if(validaionresult.ok){
        document.location.replace('/userdata');

    }
    else{
        res.redirect("/login");
    }
}


}
document.querySelector("#Submit").addEventListener("submit",validation)

