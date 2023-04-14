

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
    alert("Now we have cake batter! Let's pour it in the pan.");
}

function pour() {
    document.getElementById("btn").innerHTML = "Bake!";
    document.getElementById("lyric1").innerHTML = "Never use a messy recipe!";
    document.getElementById("lyric2").innerHTML = "The cake will end up crazy!";
    document.getElementById("recipe").innerHTML = "All battered up and ready for baking!";
    alert("Oh boy! Let's bake it in the oven!");
}

function bake() {
    document.getElementById("btn").innerHTML = "Again!";
    document.getElementById("lyric1").innerHTML = "If you do the cooking by the book...";
    document.getElementById("lyric2").innerHTML = "Then you'll have a cake!"
    document.getElementById("recipe").innerHTML = "Hooray!! You made a delicious cake! Let's bake again sometime!";
    alert('Ding! Cake is done!');
}





