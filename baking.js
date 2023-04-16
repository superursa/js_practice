const idleChatter = function () {
    document.getElementById("bearchef").src = 'images/idlebear.png';
};

const talkingBear = function () {
    document.getElementById("bearchef").src = 'images/talkingbear.png';
};

const happyBear = function () {
    document.getElementById("bearchef").src = "images/bearhappybounce.png";
}

const nowWeHaveBatter = function () {
    document.getElementById("bearspeak").innerHTML = "Now we have cake batter! Let's pour it in the pan.";
};

const letsBake = function () {
    document.getElementById("bearspeak").innerHTML = "This is looking great so far! Just gotta bake it up a notch!";
};

const cakeDone = function () {
    document.getElementById("bearspeak").innerHTML = "Tada!!! The cake is done! It looks delicious...I might have to just grab a little taste..."
}

setTimeout(idleChatter, 4000);



function press() {
    switch(document.getElementById("btn").innerHTML) {
        case "Mix!":
            mix();
            break;
        case "Pour!":
            pour();
            break;
        case "Bake!":
            bake();
            break;
        case "Again!":
            window.location.reload();
            break;
    }
}

function mix() {
    document.getElementById("btn").innerHTML = "Pour!";
    document.getElementById("lyric1").innerHTML = "You gotta do the cooking by the book!";
    document.getElementById("lyric2").innerHTML = "You know you can't be lazy!";
    document.getElementById("recipe").innerHTML = 'Delicious batter!';
    happyBear();
    document.getElementById("bearspeak").innerHTML = "Hooray! This is looking great already!";
    setTimeout(nowWeHaveBatter, 4000);
    setTimeout(talkingBear, 4000);
    setTimeout(idleChatter, 8000);

}

function pour() {
    document.getElementById("btn").innerHTML = "Bake!";
    document.getElementById("lyric1").innerHTML = "Never use a messy recipe!";
    document.getElementById("lyric2").innerHTML = "The cake will end up crazy!";
    document.getElementById("recipe").innerHTML = "All battered up and ready for baking!";
    happyBear();
    document.getElementById("bearspeak").innerHTML = "Wonderful! Great job!";
    setTimeout(letsBake, 4000);
    setTimeout(talkingBear, 4000);
    setTimeout(idleChatter, 8000);
}

function bake() {
    document.getElementById("btn").innerHTML = "Again!";
    document.getElementById("lyric1").innerHTML = "If you do the cooking by the book...";
    document.getElementById("lyric2").innerHTML = "Then you'll have a cake!"
    document.getElementById("recipe").innerHTML = "Hooray!! You made a delicious cake! Let's bake again sometime!";
    happyBear();
    document.getElementById("bearspeak").innerHTML = "Don't worry, this won't take long!"
    setTimeout(cakeDone, 4000);
    setTimeout(talkingBear, 4000);
    setTimeout(idleChatter, 8000);
}





