isPresent=true;
isDisplayed=true;
isEnabled=true;

if (isPresent ===true && isDisplayed === true && isEnabled === true){
    console.log("READY -All TRUE")
}
else if(isPresent ===true && isDisplayed === true && isEnabled === false){
    console.log("HIDDEN -present but not displayed")
}
else if(isPresent === false)
    {console.log("CRITICAL")}

else if(isDisplayed==false && isEnabled === false){console.log("WARNING")}

else
    console.log("NOT FOUND")
