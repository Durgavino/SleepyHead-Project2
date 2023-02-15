

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