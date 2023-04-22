function Solar(){
    document.getElementById("Solar").style.display = "none";
    document.getElementById("h1").style.display = "none";
    document.getElementById("SolarEclipse").style.display = "inline-block";
    document.getElementById("LunarEclipse").style.display = "none";
    document.getElementById("Lunar").style.display = "none";
    document.getElementById("Back").style.display = "inline-block";
}
function Lunar(){
    document.getElementById("Lunar").style.display = "none";
    document.getElementById("h1").style.display = "none";
    document.getElementById("LunarEclipse").style.display = "inline-block";
    document.getElementById("SolarEclipse").style.display = "none";
    document.getElementById("Solar").style.display = "none";
    document.getElementById("Back").style.display = "inline-block";
}
function Back(){
    document.getElementById("h1").style.display = "inline-block";
    document.getElementById("LunarEclipse").style.display = "none";
    document.getElementById("SolarEclipse").style.display = "none";
    document.getElementById("Lunar").style.display = "inline-block";
    document.getElementById("Solar").style.display = "inline-block";
}