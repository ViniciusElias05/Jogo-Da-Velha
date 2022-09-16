function horizontal(area) {
    if (area[0] == area[1] && area[1] == area[2]) {
        if(area[0] == "X" || area[0] == "O"){
        document.getElementById("area1").style.backgroundColor = "red";
        document.getElementById("area2").style.backgroundColor = "red";
        document.getElementById("area3").style.backgroundColor = "red";
    }
         SomeScore(area[0]);
    }  if (area[3] == area[4] && area[4] == area[5]) {
        if(area[3] == "X" || area[3] == "O"){
        document.getElementById("area4").style.backgroundColor = "red";
        document.getElementById("area5").style.backgroundColor = "red";
        document.getElementById("area6").style.backgroundColor = "red";
        }
        SomeScore(area[3]);
    } if (area[6] == area[7] && area[7] == area[8]) {
        if(area[6] == "X" || area[6] == "O"){
        document.getElementById("area7").style.backgroundColor = "red";
        document.getElementById("area8").style.backgroundColor = "red";
        document.getElementById("area9").style.backgroundColor = "red";
        }
        SomeScore(area[6]);
    }

}