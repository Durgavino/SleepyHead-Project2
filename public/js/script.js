const graph=document.getElementById('graph');

let linegraph= new Chart(graph,{
    type:'line',
    data:{
        labels:["Day1","Day2","Day3","Day4","Day5"],
        datasets:[{
            label:"Sleep Graph",
            lineTension:0.5,
            backgroundColor:"rgba(30, 39, 46,1.0)",
            borderColor:"rgba(87, 75, 144,1.0)",
           // fill:false,
            // backgroundColor:"rgba(0,0,255,1.0)",
            // borderColor:"rgba(0,0,255,0.1)",
            data:[1,8,6,2,1]
            // data:["1h","2h","3h","4h","5h","6h","7h","8h"]
        }]
    }
});

