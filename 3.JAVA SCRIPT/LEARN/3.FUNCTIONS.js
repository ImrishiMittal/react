console.log("HELLO,this is functions code");
function nice(name){
    console.log("HI MY NAME IS "+name);
    console.log("HI MY NAME IS "+name);
    console.log("HI MY NAME IS "+name);
    console.log("HI MY NAME IS "+name);
}
var result_name = nice("rishi");

let obj = {
    nam : "RISHI",
    role :"JAVA",
    com : "amz"
}

function add(sum,sum1,sum2 = 4){
    console.log(sum,sum1,sum2);
    return sum+sum1+sum2;
}
var addition = add(5,4);
var addition1 = add(10,4);
var addition2 = add(51,4);
var addition3 = add(55,4);
console.log("THE SUM OF THE NUMBERS ARE "+addition);
console.log("THE SUM OF THE NUMBERS ARE "+addition1);
console.log("THE SUM OF THE NUMBERS ARE "+addition2);
console.log("THE SUM OF THE NUMBERS ARE "+addition3);

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);