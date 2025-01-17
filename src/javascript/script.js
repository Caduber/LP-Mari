var flagAparenteF = 0;
var flagAparenteJ = 0;
var flagAparenteT = 0;

function fechaFreud(){
    document.getElementById("card-freud").style.display = "none";
    flagAparenteF = 0;
}

function descreveFreud(){

    if(flagAparenteF == 0){
        flagAparenteF = 1;
        document.getElementById("card-freud").style.display = "block"; 
    }
    
    else if (flagAparenteF == 1) {
        fechaFreud();
    }
    
}


function fechaJung(){
    document.getElementById("card-jung").style.display = "none";
    flagAparenteJ = 0;
}

function descreveJung(){

    if(flagAparenteJ == 0){
        flagAparenteJ = 1;
        document.getElementById("card-jung").style.display = "block"; 
    }
    
    else if (flagAparenteJ == 1) {
        fechaJung();
    }
    
}


function fechaTcc(){
    document.getElementById("card-tcc").style.display = "none";
    flagAparenteT = 0;
}

function descreveTcc(){

    if(flagAparenteT == 0){
        flagAparenteT = 1;
        document.getElementById("card-tcc").style.display = "block"; 
    }
    
    else if (flagAparenteT == 1) {
        fechaTcc();
    }
    
}