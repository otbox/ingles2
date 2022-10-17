//var i = 0;

//convert[0].addEventListener('click',function(){i = 0;console.log(i);button();})
//convert[1].addEventListener('click',function(){i = 1;console.log(i);button();})
//convert[2].addEventListener('click',function(){i = 2;console.log(i);button();})
//convert[3].addEventListener('click',function(){i = 3;console.log(i);button();})

var b = 0;
function button(i = 0) {
    const dialog = document.getElementsByClassName("dialog");
    const convert_text = document.getElementsByClassName("convert_text");
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continous = true;
    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result =>result[0])
        .map(result => result.transcript)
        convert_text[i].innerHTML = transcript;
    })

    recognition.onstart = function() {
        recording_text[i].innerHTML = "Speaking...";
    }

    recognition.onspeechend = function() {
        recording_text[i].innerHTML = "No Activity";
        result1();
    }

    recognition.onerror = function() {
        recording_text[i].innerHTML = "Try Again";
    }

    if (speech == true){
        recognition.start();
    }
    b = i;
}
function delay(milliSeconds){
    return new Promise(resolve => setTimeout(resolve,milliSeconds));
}

async function result1(){
    await delay(1000);
    const trasns = document.getElementsByClassName("convert_text");
    const dialog = document.getElementsByClassName("dialog");
    let element = document.getElementsByClassName("dialog");
    const d1 = trasns[b].textContent.toString().trim().toLowerCase();
    const d2 = dialog[b].textContent.toString().trim().toLowerCase();
    var d11 = d1.split(".").join("");
    var d12 = d11.split(",").join("");
    var d13 = d12.split("?").join("");
    var d21 = d2.split(".").join("");
    var d22 = d21.split(",").join("");
    var d23 = d22.split("?").join("");
   
    //console.log("Spoke: "+d13+ "\n Dialog:" +d23);
    if (d13 === d23){
        element[b].style.color = 'green';
        recording_text[b].innerHTML = "Correct";
    }else{
        element[b].style.color = 'red';
        recording_text[b].innerHTML = "Incorrect";
    }
}


































































var c = 0;
function something(){
    c++;
    if (c > 10){
        const input1 = prompt("Hello, who are you?");
        var input = input1.toString().replace("I'am ","").toLowerCase();
        console.log(input);
        switch (input){
            case "developer":
                console.log("Hello my master, how i help you?");
            break;

            case "teacher":
                const input1 = prompt("Hello teacher, it's a easter egg, this work worth 10?");
                switch (input1){
                    case "yes":
                        alert("You're welcome, teacher.");
                        break
                    case "no":
                        alert("Sorry Teacher, I'll make better on next.")
                        break
                    default:
                        alert("I not understand.")
                }
            break;    
            
            case "joão pelisari":
                alert("Hello president of the republic of Pellissari");
            break;
            case"pepino the short":
                alert("It's a joke, he died  in 768");
            break;    

            default:
                alert("Hello,"+ input.toString().replace("I'am ",""))
        }
    }
}