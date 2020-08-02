//Generate Pin
function getPin() {
    document.getElementById("generatePin").value = Math.floor(1000 + Math.random() * 9000);
}
//Input Number

function inputValue(number){
    const currentNumber = document.getElementById("pinValue").value;
    document.getElementById("pinValue").value = currentNumber + number;
}

function clearAll(){
    document.getElementById("pinValue").value = " " ;
}

function deleteValue(){
    const presentNumber = document.getElementById("pinValue").value;
    if(presentNumber != ""){
        document.getElementById("pinValue").value = presentNumber.slice(0, -1);
    }
}

//pin Match
function submit(){
    const generatePin = document.getElementById("generatePin").value;
    const pinValue = document.getElementById("pinValue").value;
    if(generatePin == pinValue){
        document.getElementById("notMatched").style.display = "none";
        document.getElementById("matched").style.display = "block";
        
        
    }else {
        //notify("notifyUnmatched");
        document.getElementById("matched").style.display = "none";
        document.getElementById("notMatched").style.display = "block";
       
        

    }
}

//notify
