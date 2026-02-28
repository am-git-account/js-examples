const ID=["1", "2", "3", "4", "5", "6", "7", "8"];
role = ["admin","editor","viewer", "tester", "manager","tester","admin"];
email = ["j","b","c","d","e","f","g","h"]
let i=0
for (i=1;i<=8;i++)
{
 if(i%3==0)
    console.log(`User ${ID[i]}, ${role[i]},${email[i]} is inactive`)
else
    console.log(`User {ID[i]}, {role[i]},{email[i]} is active`)
}
