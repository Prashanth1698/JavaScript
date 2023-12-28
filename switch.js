//switch case
/* switch(condition){
    case "1" : 
    console.log(result);
    case "2" : 
    console.log(result);
    default:
        console.log("No result found");
} */
 

let grade = "";

switch(grade){
    case "O":
        console.log("Super");
        break;
    case "A":
        console.log("Excellent");
        break
    case "B":
        console.log("Satisfaction");
        break;
    default:
        console.log("No result found");
} 

// Mobile buying suggestion
//if given saving amount is > 10k buy iphone mobile
// else if given amount is > 5k && < 10K buy basic mobile 
// else print "you cant affora mobile phone now!"

let savings = 15000;
switch(savings){
    case savings > 5000 && savings <= 10000:
    console.log("buy mid range smartphone");
    break;
    case savings > 10000:
        console.log("buy a iphone");
        break;
    default:
        console.log("better luck next time");
}
