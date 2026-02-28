let count = 5;

function func(){
    let num=0;
    num=Math.random()
    if (num>0.6){
    return 1}
    else return 0
}

let i=0,retval;
do 
{
retval=func();
if(retval == 1)
    console.log("Success")
else 
    console.log("Failure")
++i
}while(i<5)
