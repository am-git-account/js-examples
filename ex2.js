testresult = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let p=0, f=0,s=0;
for (let i=0;i<testresult.length;i++){
    if (testresult[i] == "pass"){
    ++p;
    }
    else if (testresult[i] == "fail"){
    ++f;
    }
    else if (testresult[i] == "skip"){
    ++s;
    }
   
}

if(p==8)
    {console.log("ready for release")}
else if(f<=2)
    {console.log("review ")}
else
    {console.log("Block the release")}


