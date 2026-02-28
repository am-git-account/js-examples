frequency =["always", "often", "rarely"]

impact =["blocker", "major", "minor"]
for (let i=0;i<3;i++)
if(frequency[i]=="always" && impact[0]=="blocker")
    console.log("P0")
else if (frequency[i]=="often" && impact[0]=="blocker")
    console.log("P1")
else 
    (frequency[i]=="rarely" && impact[0]=="blocker")
    console.log("P2")
