

fetch('/data/api/getdata').then(res=>{
    
    return res.json();
}).then(res=>{
    console.log(res);
    const graph=document.getElementById('graph');

    let linegraph= new Chart(graph,{
        type:'line',
        data:{
            labels:["Day5","Day4","Day3","Day2","Day1"],
            datasets:[{
                label:"Sleep Graph",
                lineTension:0.5,
                // backgroundColor:"rgba(30, 39, 46,1.0)",
                backgroundColor:"rgba(47, 54, 64,1.0)", 
                // borderColor:"rgba(87, 75, 144,1.0)",
                borderColor:"rgba(225, 177, 44,1.0)",
               fill:false,
              
               // data:[1,8,6,2,1]
               data:res.map(e=>e.Sleepdurtion)
               
            }]
        }
    });

})
