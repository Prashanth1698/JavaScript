//conditional statement
//if-else

let weather = "hot";
if(weather == "hot"){
    console.log("weather is  hot");
}
else{
    console.log("weather is cold");
}

//if hour is between 12AM to 1PM -> Good Morning
//elseif hours between 1PM to 5PM -> Good Afternoon
//else hour is between 5PM to 12Am -> Good Evening

let hrs = new Date();
let hour = hrs.getHours();

if(hour >= 0 && hour <= 13){
    console.log("Good Morning");
}
else if(hour >= 13 && hour <=17){
    console.log("Good Afternoon");
}
else 
{
    console.log("Good Evening");
}
