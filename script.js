let myStickman = document.getElementById("stickman");
let $showlives = document.getElementById("mylives");
let $showword = document.getElementById("word");
let str = 'apple,banana,remember,forever,google,love,special,internet,youtube,family,together,octopus,information,friend,music';
let word = str.split(',');
let guess;
let guesses = [ ];
let counter = 0;
let lives = 10;
let context = myStickman.getContext('2d');
let drawArray = [ ];

const random_index = Math.floor(Math.random()*15);
// let $inword = document.createElement('p');
// $inword.className = 'inword';
// $inword.innerText = word[random_index];
// $showword.appendChild($inword);

let answer = word[random_index];
let $inword = document.createElement('p');
$inword.className = 'inword';
let string = [ ];
for(let i=0;i<answer.length;i++){
    string[i] = "__ ";
    $inword.innerText += string[i];
}
$showword.appendChild($inword);
// let check = 0;
// $inword.innerHTML = "";
// for(let i=0;i<answer.length;i++){
//     if(counter == 0 && check == 0){
//         $inword.innerHTML += "a";
//         check = 1;
//         continue;
//     }
//     $inword.innerHTML += "ㅡ";
// }
//console.log(answer);

function onClickAlphabet(event){
    //console.log(event.target.innerText);
    let num = [ ];
    let check = 0;
    guess = event.target.innerText;
    const alphabet = document.getElementById(guess);
    alphabet.style.backgroundColor = "blue";

    for(let i=0;i<answer.length;i++){
        for(let j=0;j<guesses.length;j++){
            // 중복 막기
            if(guesses[j] == guess){
                check = 2;
                break;
            }
        }
        if(check == 2){
            break;
        }
        if(answer[i] == guess){
            counter++;
            string[i] = guess + " ";
            guesses.push(guess);
            check = 1;
            // console.log(counter);
        }
    }

    if(check == 2){
        check = 1;
    }
    
    if(check == 1){
        $inword.innerHTML = "";
        for(let i=0;i<answer.length;i++){
        $inword.innerHTML += string[i];
        }
    }
    if(counter == answer.length){
        setTimeout(function(){
            alert("YOU WIN!");
            document.location.reload();
        }, 200);
    }
    else if(check == 0){
        lives--;
        if(lives == 0){
            $showlives.innerHTML = "GAME OVER!";
            setTimeout(function(){
                alert("GAME OVER!");
                document.location.reload();
            }, 100);
            
        }
        animate();
        $showlives.innerHTML = "목숨 : " + lives;
    }
}

function animate(){
    let drawMe = lives;
    drawArray[drawMe]();
}

function canvas(){
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
}

function head(){
    context.beginPath();
    context.arc(200, 45, 15, 0, Math.PI*2, true);
    context.stroke();
}

function draw($pathFromx, $pathFromy, $pathTox, $pathToy){
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

function frame1(){
    draw (100, 200, 300, 200);
}

function frame2(){
    draw (130, 200, 130, 20);
}

function frame3(){
    draw (130, 20, 200, 20);
}

function frame4(){
    draw (200, 20, 200, 30);
}

function torso(){
    draw (200, 60, 200, 120);
}

function rightArm(){
    draw (200, 75, 240, 80);
}

function leftArm(){
    draw (160, 80, 200, 75);
}

function rightLeg(){
    draw (200, 120, 230, 150);
}

function leftLeg(){
    draw (200, 120, 170, 150);
}

drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 

document.querySelector("#a").addEventListener("click", onClickAlphabet);
document.querySelector("#b").addEventListener("click", onClickAlphabet);
document.querySelector("#c").addEventListener("click", onClickAlphabet);
document.querySelector("#d").addEventListener("click", onClickAlphabet);
document.querySelector("#e").addEventListener("click", onClickAlphabet);
document.querySelector("#f").addEventListener("click", onClickAlphabet);
document.querySelector("#g").addEventListener("click", onClickAlphabet);
document.querySelector("#h").addEventListener("click", onClickAlphabet);
document.querySelector("#i").addEventListener("click", onClickAlphabet);
document.querySelector("#j").addEventListener("click", onClickAlphabet);
document.querySelector("#k").addEventListener("click", onClickAlphabet);
document.querySelector("#l").addEventListener("click", onClickAlphabet);
document.querySelector("#m").addEventListener("click", onClickAlphabet);
document.querySelector("#n").addEventListener("click", onClickAlphabet);
document.querySelector("#o").addEventListener("click", onClickAlphabet);
document.querySelector("#p").addEventListener("click", onClickAlphabet);
document.querySelector("#q").addEventListener("click", onClickAlphabet);
document.querySelector("#r").addEventListener("click", onClickAlphabet);
document.querySelector("#s").addEventListener("click", onClickAlphabet);
document.querySelector("#t").addEventListener("click", onClickAlphabet);
document.querySelector("#u").addEventListener("click", onClickAlphabet);
document.querySelector("#v").addEventListener("click", onClickAlphabet);
document.querySelector("#w").addEventListener("click", onClickAlphabet);
document.querySelector("#x").addEventListener("click", onClickAlphabet);
document.querySelector("#y").addEventListener("click", onClickAlphabet);
document.querySelector("#z").addEventListener("click", onClickAlphabet);



