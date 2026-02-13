// switch statement , break is necessary if we forget break so if condition is true to uske bad sb chal jaengi

var day = "monday";

switch(day){
    case "monday":
        console.log("its monday");
        break;
    case "tuesday":
        console.log("its tuesday");
        break;
    case "wednesday":
        console.log("its tuesday");
        break;
    case "thursday":
        console.log("its thursday");
        break;
    default:
        console.log("its weekend");
}

var signal = "green";
// Using switch, print:

// "Stop" for red

// "Get Ready" for yellow

// "Go" for green

// Default: "Signal not recognized"
switch(signal){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
            console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Signal not recognized");
}