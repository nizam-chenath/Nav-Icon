var fline = document.getElementsByClassName("fline");
var sline = document.getElementsByClassName("sline");
var tline = document.getElementsByClassName("tline");


function clicked(){
    document.getElementById("fline").style.transform = " translateY(20px) rotate(-45deg)";
    document.getElementById("tline").style.transform = " translateY(-20px) rotate(45deg)";
    document.getElementById("sline").style.display = "none";

    console.log('hellooo');
}
