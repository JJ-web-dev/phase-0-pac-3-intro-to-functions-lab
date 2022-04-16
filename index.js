function shout(string) {
    return string.toUpperCase();
}

shout("Hello");

function whisper(string) {
    return string.toLowerCase();
}

whisper("hello");

function logShout(string) {
    console.log(string.toUpperCase());
        
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === "hello") {
        return "I can\'t hear you!"; 
    } else if (string === "HELLO") {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
 
}