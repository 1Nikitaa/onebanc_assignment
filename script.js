fetch("https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2", {
    "method": "GET",
})
    .then(response => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("amount1").innerHTML = data.transactions[1].amount;
        document.getElementById("amount2").innerHTML = data.transactions[2].amount;
        document.getElementById("amount3").innerHTML = data.transactions[3].amount;
        document.getElementById("amount4").innerHTML = data.transactions[4].amount;


        var num = data.transactions[1].startDate;
        var n = num.toString();
        var res = n.slice(0, 10);
        document.getElementById("separator").innerHTML = res;

        var num1 = data.transactions[2].startDate;
        var n1 = num1.toString();
        var res1 = n1.slice(0, 10);
        document.getElementById("separator1").innerHTML = res1;

        var num2 = data.transactions[3].startDate;
        var n2 = num2.toString();
        var res2 = n2.slice(0, 10);
        document.getElementById("separator2").innerHTML = res2;

        var num3 = data.transactions[4].startDate;
        var n3 = num3.toString();
        var res3 = n3.slice(0, 10);
        document.getElementById("separator3").innerHTML = res3;




        var time1 = n.slice(11, 16);
        document.getElementById("time1").innerHTML = res + ',' + time1 + ' ' + 'PM';

        var time2 = n1.slice(11, 16);
        document.getElementById("time2").innerHTML = res1 + ',' + time2 + ' ' + 'PM';

        var time3 = n2.slice(11, 16);
        document.getElementById("time3").innerHTML = res2 + ',' + time3 + ' ' + 'PM';

        var time4 = n3.slice(11, 16);
        document.getElementById("time4").innerHTML = res3 + ',' + time4 + ' ' + 'PM';

    let obj= data.transactions[0];
              console.log(obj);  
              let row= document.createElement('tr');
              let id=  document.getElementById("1").innerHTML = data.transactions[0].id;
              let start_date= document.getElementById("2").innerHTML = data.transactions[0].startDate;
              let end_date= document.getElementById("3").innerHTML = data.transactions[0].endDate;
              let amount= document.getElementById("4").innerHTML = data.transactions[0].amount
              let direction= document.getElementById("5").innerHTML = data.transactions[0].direction;
              let status= document.getElementById("6").innerHTML = data.transactions[0].status;
              let type= document.getElementById("7").innerHTML = data.transactions[0].type;
              let description= document.getElementById("8").innerHTML = data.transactions[0].description;
              let vpayId= document.getElementById("9").innerHTML = data.transactions[0].customer.vPayId;
              let vpay= document.getElementById("10").innerHTML = data.transactions[0].customer.vPay;
           
              
            
              id.innerHTML=obj.id;
              start_date.innerHTML=obj.startDate;
              end_date.innerHTML=obj.endDate;
              amount.innerHTML=obj.amount;
              direction.innerHTML=obj.direction;
              status.innerHTML=obj.status;
              type.innerHTML=obj.type;
              description.innerHTML=obj.description;
              vpayId.innerHTML=obj.customer.vPayId;
              vpay.innerHTML=obj.customer.vPay;
              


              row.appendChild(id)
              row.appendChild(start_date)
              row.appendChild(end_date)
              row.appendChild(amount)
              row.appendChild(direction)
              row.appendChild(status)
              row.appendChild(type)
              row.appendChild(description)
              row.appendChild(vpayId)
              row.appendChild(vpay)
            
        
    });


document.querySelector(".detail1").style.visibility = "hidden";
document.querySelector(".detail2").style.visibility = "hidden";
document.querySelector(".detail3").style.visibility = "hidden";
document.querySelector(".detail4").style.visibility = "hidden";

function show1() {
    document.querySelector(".detail1").style.visibility = "visible";
    console.log("visible");
}

function close1() {
    document.querySelector(".detail1").style.visibility = "hidden";
    console.log("hidden");
}

function show2() {
    document.querySelector(".detail2").style.visibility = "visible";
    console.log("visible");
}

function close2() {
    document.querySelector(".detail2").style.visibility = "hidden";
    console.log("hidden");
}
function show3() {
    document.querySelector(".detail3").style.visibility = "visible";
    console.log("visible");
}

function close3() {
    document.querySelector(".detail3").style.visibility = "hidden";
    console.log("hidden");
}

function show4() {
    document.querySelector(".detail4").style.visibility = "visible";
    console.log("visible");
}

function close4() {
    document.querySelector(".detail4").style.visibility = "hidden";
    console.log("hidden");
}


function universalclose() {
    document.querySelector(".hide_details").style.visibility = "hidden";
    document.querySelector(".detail2").style.visibility = "hidden";
    document.querySelector(".detail3").style.visibility = "hidden";
    document.querySelector(".detail4").style.visibility = "hidden";
    console.log("hidden");
}
