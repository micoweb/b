const cursor = document.querySelector("#cursor")

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
});

setInterval(function background2() {
    document.getElementById("petal1").src="sources/petal/2.gif";
    document.getElementById("petal2").src="sources/petal/2.gif";
    document.getElementById("petal3").src="sources/petal/2.gif";
    document.getElementById("petal4").src="sources/bigPetal/2.gif";
    document.getElementById("petal5").src="sources/petal/2.gif";
    document.getElementById("petal6").src="sources/petal/2.gif";
    document.getElementById("petal7").src="sources/petal/2.gif";
    document.getElementById("lightRound").src="sources/lightRound/2.gif";
    document.getElementById("lightRound2").src="sources/lightRound/2.gif";
},4050);

setInterval(function background3() {
    document.getElementById("petal1").src="sources/petal/3.gif";
    document.getElementById("petal2").src="sources/petal/3.gif";
    document.getElementById("petal3").src="sources/petal/3.gif";
    document.getElementById("petal4").src="sources/bigPetal/3.gif";
    document.getElementById("petal5").src="sources/petal/3.gif";
    document.getElementById("petal6").src="sources/petal/3.gif";
    document.getElementById("petal7").src="sources/petal/3.gif";
    document.getElementById("lightRound").src="sources/lightRound/3.gif";
    document.getElementById("lightRound2").src="sources/lightRound/3.gif";
},8100);

setInterval(function background4() {
    document.getElementById("petal1").src="sources/petal/4.gif";
    document.getElementById("petal2").src="sources/petal/4.gif";
    document.getElementById("petal3").src="sources/petal/4.gif";
    document.getElementById("petal4").src="sources/bigPetal/4.gif";
    document.getElementById("petal5").src="sources/petal/4.gif";
    document.getElementById("petal6").src="sources/petal/4.gif";
    document.getElementById("petal7").src="sources/petal/4.gif";
    document.getElementById("lightRound").src="sources/lightRound/4.gif";
    document.getElementById("lightRound2").src="sources/lightRound/4.gif";
},12150);

setInterval(function background5() {
    document.getElementById("petal1").src="sources/petal/5.gif";
    document.getElementById("petal2").src="sources/petal/5.gif";
    document.getElementById("petal3").src="sources/petal/5.gif";
    document.getElementById("petal4").src="sources/bigPetal/5.gif";
    document.getElementById("petal5").src="sources/petal/5.gif";
    document.getElementById("petal6").src="sources/petal/5.gif";
    document.getElementById("petal7").src="sources/petal/5.gif";
    document.getElementById("lightRound").src="sources/lightRound/5.gif";
    document.getElementById("lightRound2").src="sources/lightRound/5.gif";
},16200);

setInterval(function background6() {
    document.getElementById("petal1").src="sources/petal/6.gif";
    document.getElementById("petal2").src="sources/petal/6.gif";
    document.getElementById("petal3").src="sources/petal/6.gif";
    document.getElementById("petal4").src="sources/bigPetal/6.gif";
    document.getElementById("petal5").src="sources/petal/6.gif";
    document.getElementById("petal6").src="sources/petal/6.gif";
    document.getElementById("petal7").src="sources/petal/6.gif";
    document.getElementById("lightRound").src="sources/lightRound/6.gif";
    document.getElementById("lightRound2").src="sources/lightRound/6.gif";
},20250);

setInterval(function background7() {
    document.getElementById("petal1").src="sources/petal/7.gif";
    document.getElementById("petal2").src="sources/petal/7.gif";
    document.getElementById("petal3").src="sources/petal/7.gif";
    document.getElementById("petal4").src="sources/bigPetal/7.gif";
    document.getElementById("petal5").src="sources/petal/7.gif";
    document.getElementById("petal6").src="sources/petal/7.gif";
    document.getElementById("petal7").src="sources/petal/7.gif";
    document.getElementById("lightRound").src="sources/lightRound/7.gif";
    document.getElementById("lightRound2").src="sources/lightRound/7.gif";
},24300);

setInterval(function background1() {
    document.getElementById("petal1").src="sources/petal/1.gif";
    document.getElementById("petal2").src="sources/petal/1.gif";
    document.getElementById("petal3").src="sources/petal/1.gif";
    document.getElementById("petal4").src="sources/bigPetal/1.gif";
    document.getElementById("petal5").src="sources/petal/1.gif";
    document.getElementById("petal6").src="sources/petal/1.gif";
    document.getElementById("petal7").src="sources/petal/1.gif";
    document.getElementById("lightRound").src="sources/lightRound/1.gif";
    document.getElementById("lightRound2").src="sources/lightRound/1.gif";
},28350);


function closePopUp(){
    document.getElementById("fixedPopUp").style.display = "none"
}

function popUpPic1(){
    document.getElementById("fixedPopUp").style.display = "block"
    document.getElementById("popUpPic").src="sources/storyImages(whenPopup)/popUpPic (1).png";
}
function popUpPic2(){
    document.getElementById("fixedPopUp").style.display = "block"
    document.getElementById("popUpPic").src="sources/storyImages(whenPopup)/popUpPic (2).png";
}

function popUpPic3(){
    document.getElementById("fixedPopUp").style.display = "block"
    document.getElementById("popUpPic").src="sources/storyImages(whenPopup)/popUpPic (3).png";
}
function popUpPic4(){
    document.getElementById("fixedPopUp").style.display = "block"
    document.getElementById("popUpPic").src="sources/storyImages(whenPopup)/popUpPic (4).png";
}
function popUpPic5(){
    document.getElementById("fixedPopUp").style.display = "block"
    document.getElementById("popUpPic").src="sources/storyImages(whenPopup)/popUpPic (5).png";
}
function popUpPic6(){
    document.getElementById("fixedPopUp").style.display = "block"
    document.getElementById("popUpPic").src="sources/storyImages(whenPopup)/popUpPic (6).png";
}
function popUpPic7(){
    document.getElementById("fixedPopUp").style.display = "block"
    document.getElementById("popUpPic").src="sources/storyImages(whenPopup)/popUpPic (7).png";
}
function popUpPic8(){
    document.getElementById("fixedPopUp").style.display = "block"
    document.getElementById("popUpPic").src="sources/storyImages(whenPopup)/popUpPic (8).png";
}