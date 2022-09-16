
function vertical(area) {
    if (area[0] == area[3] && area[3] == area[6]) {
        if(area[0] == "X" || area[0] == "O"){
        document.getElementById("area1").style.backgroundColor = "red";
        document.getElementById("area4").style.backgroundColor = "red";
        document.getElementById("area7").style.backgroundColor = "red";
    }
    SomeScore(area[0]);
    
    } 
    if (area[1] == area[4] && area[4] == area[7]) {
        if(area[1] == "X" || area[1] == "O"){
        document.getElementById("area2").style.backgroundColor = "red";
        document.getElementById("area5").style.backgroundColor = "red";
        document.getElementById("area8").style.backgroundColor = "red";
        }
        SomeScore(area[1]);
    } if (area[2] == area[5] && area[5] == area[8]) {
        if(area[2] == "X" || area[2] == "O"){
        document.getElementById("area3").style.backgroundColor = "red";
        document.getElementById("area6").style.backgroundColor = "red";
        document.getElementById("area9").style.backgroundColor = "red";
        }
        SomeScore(area[2]);
    }
}
