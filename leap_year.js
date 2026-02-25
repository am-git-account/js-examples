let year1 =2200

if ( year1 % 100 !=0 ){
    if (year1 % 4 ==0 && year1 % 400 ==0){
        console.log("${year1} is a leap year");}
    else 
        {console.log({year1}, " is not a leap year");}
}
else{
    console.log({year1}, " is not a leap year");
}
