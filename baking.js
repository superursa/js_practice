let bearChef;
let button;

const documentLoaded = function () {
  bearChef = document.getElementById("bearchef");
  button = document.getElementById("btn");
};

const disableButton = function () {
  button.disabled = true;
};

const enableButton = function () {
  button.disabled = false;
};

const idleChatter = function () {
  document.getElementById("bearchef").src = "images/idlebear.png";
};

const talkingBear = function () {
  document.getElementById("bearchef").src = "images/talkingbear.png";
};

const happyBear = function () {
  document.getElementById("bearchef").src = "images/bearhappybounce.png";
};

const nowWeHaveBatter = function () {
  document.getElementById("bearspeak").innerHTML =
    "Now we have cake batter!<br><br>Let's pour it in the pan.<br><br>Maybe we can lick the beaters...";
};

const letsBake = function () {
  document.getElementById("bearspeak").innerHTML =
    "This is looking great so far! Just gotta bake it up a notch!<br><br>Haha, see what I did there? Baking pun.<br><br>You know, when I'm not baking, I practice comedy.<br><br>Been practicing for a long time.";
};

const cakeDone = function () {
  document.getElementById("bearspeak").innerHTML =
    "Tada!!!<br><br>It looks delicious...<br><br>I might have to just grab a little taste...<br><br>Great job, bestie!";
  document.getElementById("animatic").src = "images/cakeout.png";
};

setTimeout(idleChatter, 6000);
setTimeout(enableButton, 6000);

const cakeLoop = function () {
  document.getElementById("animatic").src = "images/cakeloop.png";
};

function press() {
  switch (document.getElementById("btn").innerHTML) {
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
  document.getElementById("animatic").src = "images/mixing.png";
  disableButton();
  document.getElementById("btn").innerHTML = "Pour!";
  happyBear();
  document.getElementById("bearspeak").innerHTML =
    "Hooray! This is looking great already!<br><br>But the CDC says we can't eat it just yet.<br><br>Boo, safety.";
  setTimeout(nowWeHaveBatter, 6000);
  setTimeout(talkingBear, 6000);
  setTimeout(idleChatter, 10000);
  setTimeout(enableButton, 10000);
}

function pour() {
  disableButton();
  document.getElementById("animatic").src = "images/pouring.png";
  document.getElementById("btn").innerHTML = "Bake!";
  happyBear();
  document.getElementById("bearspeak").innerHTML =
    "Wonderful! Great job!<br><br>When I pour it, it always gets everywhere.<br><br>Wish I had opposable thumbs like you.<br><br>Who's your thumb guy?";
  setTimeout(letsBake, 6000);
  setTimeout(talkingBear, 6000);
  setTimeout(idleChatter, 12000);
  setTimeout(enableButton, 12000);
}

function bake() {
  disableButton();
  document.getElementById("animatic").src = "images/baking.png";
  document.getElementById("btn").innerHTML = "Again!";
  happyBear();
  document.getElementById("bearspeak").innerHTML =
    "Don't worry, this won't take long!<br><br>I used a small business loan to buy super fast, top of the line ovens!<br><br>I am in immense financial debt!<br><br>But at least I have cake! Haha!";
  setTimeout(cakeDone, 6000);
  setTimeout(talkingBear, 6000);
  setTimeout(idleChatter, 10000);
  setTimeout(cakeLoop, 9000);
  setTimeout(enableButton, 10000);
}

addEventListener("DOMContentLoaded", documentLoaded);
