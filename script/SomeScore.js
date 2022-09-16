function SomeScore(area){
    if(area == "X" ){
        var media;
        media = Number(document.getElementById("score-X").innerHTML) 
        document.getElementById("score-X").innerHTML=media+1;
    }else if(area =="O"){
        var media;
        media = Number(document.getElementById("score-O").innerHTML)
        document.getElementById("score-O").innerHTML=media+1;
    }
}
