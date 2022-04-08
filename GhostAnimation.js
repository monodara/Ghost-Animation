const svgNS = "http://www.w3.org/2000/svg";

//get the button for displaying source code;
//bond a function to display source code;
//display the SVG as XML to the display box;
var sourceCodeButton = document.getElementById('sourceCode');
sourceCodeButton.addEventListener("click",displayToggler);
var display = 'svg';
var ghost = document.getElementById('ghostSVG');
function displayToggler(){
  if(display === 'svg'){
    displaySourceCode();
    display = 'source';
  }else{
    displaySVG();
    display = 'svg';
  }
}
function displaySourceCode() {
  console.log("displaySourceCode")
  var displayBox = document.getElementById('ghostContainer');
  // var svgCode = document.getElementById('ghostContainer');
  displayBox.textContent = displayBox.innerHTML;
}
function displaySVG(){
  console.log("displaySVG")
  var displayBox = document.getElementById('ghostContainer');
  displayBox.textContent = '';
  displayBox.appendChild(ghost);
}


//save (download) the SVG content from the display box
//reference:https://www.demo2s.com/javascript/javascript-svg-download-and-svg-element-as-an-svg-file.html
//get the save button
var saveButton = document.getElementById('save');
saveButton.addEventListener("click",saveSVG);
function saveSVG() {
  var svg = document.getElementById('ghostContainer');
  var base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
  const a = document.createElement('a');
  const e = new MouseEvent('click');
  a.download = 'cuteGhost.svg';
  a.href = 'data:image/svg+xml;base64,' + base64doc;
  a.dispatchEvent(e);
}

//random animation
var randomButton = document.getElementById('random');
randomButton.addEventListener("click",randomAnimation);
function randomAnimation() {
  var i = Math.floor(Math.random() * 7);
  switch(i){
    case 0: toQuiver();break;
    case 1: toHaunt();break;
    case 2: toHide();break;
    case 3: toScare();break;
    case 4: toWink();break;
    case 5: toBeDizzy();break;
    case 5: toDressUp();break;
  }
}


//get the "scare" button;
//open the mouth (set the ellipse-ry bigger)
var scareButton = document.getElementById('scare');
scareButton.addEventListener("click",toScare);
function toScare() {
  var mouthEllipse = document.getElementById('mouthEllipse');
  var scareAnimation = document.createElementNS(svgNS,'animate');
  scareAnimation.setAttributeNS(null,'attributeName', 'ry');
  scareAnimation.setAttributeNS(null,'from', '1');
  scareAnimation.setAttributeNS(null,'to', '7');
  scareAnimation.setAttributeNS(null,'dur', '1s');
  scareAnimation.setAttributeNS(null,'fill', 'freeze');
  mouthEllipse.appendChild(scareAnimation);
  scareAnimation.beginElement();  
}
//get the "haunt" button;
//move and zoom out/in
var hauntButton = document.getElementById('haunt');
hauntButton.addEventListener("click",toHaunt);
function toHaunt() {
  setInterval(()=>{
    var ghost = document.getElementById('ghost');
    var randomScale = 1 - Math.floor(Math.random() * 9)/10;
    var randomRotate = 20-Math.floor(Math.random() * 40);
    var randomTransX = Math.floor(Math.random() * 50);
    var randomTransY = Math.floor(Math.random() * 50);
    var transform = 'rotate(' + randomRotate + '), translate(' + randomTransX + "," + randomTransY + '), scale (' + randomScale + ')';  
    ghost.setAttribute('transform', transform); 
  },1500);
  
}
//get the "haunt" button;
//move and zoom out/in
var quiverButton = document.getElementById('quiver');
quiverButton.addEventListener("click",toQuiver);
var isQuivering = false;
function toQuiver() {
  setInterval(quiver,100);
}
function quiver(){
  var body = document.getElementById('body');
  var quiverAnimation = document.createElementNS(svgNS,'animateTransform');
  var random = Math.floor(Math.random() * 3);
  quiverAnimation.setAttributeNS(null,'attributeName', 'transform');
  quiverAnimation.setAttributeNS(null,'attributeType', 'XML');
  quiverAnimation.setAttributeNS(null,'type', 'translate');
  quiverAnimation.setAttributeNS(null,'from', '-2 2');
  quiverAnimation.setAttributeNS(null,'to', random);
  quiverAnimation.setAttributeNS(null,'dur', '100ms');
  body.appendChild(quiverAnimation);
  quiverAnimation.beginElement();  
  var eyes = document.getElementById('eyes');
  var quiverAnimationEyes = document.createElementNS(svgNS,'animateTransform');
  var randomEye =Math.random();
  quiverAnimationEyes.setAttributeNS(null,'attributeName', 'transform');
  quiverAnimationEyes.setAttributeNS(null,'attributeType', 'XML');
  quiverAnimationEyes.setAttributeNS(null,'type', 'translate');
  quiverAnimationEyes.setAttributeNS(null,'from', '-1 0');
  quiverAnimationEyes.setAttributeNS(null,'to', randomEye);
  quiverAnimationEyes.setAttributeNS(null,'dur', '100ms');
  eyes.appendChild(quiverAnimationEyes);
  quiverAnimationEyes.beginElement();  
  var mouth = document.getElementById('mouthEllipse');
  var quiverAnimationMouth = document.createElementNS(svgNS,'animateTransform');
  var randomMouth =Math.random();
  quiverAnimationMouth.setAttributeNS(null,'attributeName', 'transform');
  quiverAnimationMouth.setAttributeNS(null,'attributeType', 'XML');
  quiverAnimationMouth.setAttributeNS(null,'type', 'translate');
  quiverAnimationMouth.setAttributeNS(null,'from', '-1 0');
  quiverAnimationMouth.setAttributeNS(null,'to', randomMouth);
  quiverAnimationMouth.setAttributeNS(null,'dur', '100ms');
  mouth.appendChild(quiverAnimationMouth);
  quiverAnimationMouth.beginElement();  

}
//get the "dizzy" button;
//pupils move following the path
var dizzyButton = document.getElementById('dizzy');
dizzyButton.addEventListener("click",toBeDizzy);
function toBeDizzy() {
  var pupilLeft = document.getElementById('eye-l-pupil');
  var pupilRight = document.getElementById('eye-r-pupil');
  var dizzyAnimationLeft = document.createElementNS(svgNS,'animateMotion');
  dizzyAnimationLeft.setAttributeNS(null,'path', 'M 0 0 A 1 1 0 0 0 1 -5 A 1 1 0 0 0 0 0');
  dizzyAnimationLeft.setAttributeNS(null,'dur', '1s');
  dizzyAnimationLeft.setAttributeNS(null,'repeatCount', 'indefinite');
  pupilLeft.appendChild(dizzyAnimationLeft);
  dizzyAnimationLeft.beginElement(); 
  var dizzyAnimationRight = document.createElementNS(svgNS,'animateMotion');
  dizzyAnimationRight.setAttributeNS(null,'path', 'M 0 0 Q -2 0 -2 -2 Q -2 -5 0 -5 Q 2 -5 2 -2 Q 2 0 0 0');
  dizzyAnimationRight.setAttributeNS(null,'dur', '1s');
  dizzyAnimationRight.setAttributeNS(null,'repeatCount', 'indefinite');
  dizzyAnimationRight.setAttributeNS(null,'begin', '0.4s');
  pupilRight.appendChild(dizzyAnimationRight);
  dizzyAnimationRight.beginElement(); 
}
//get the "wink" button;
//pupils move following the path
var winkButton = document.getElementById('wink');
winkButton.addEventListener("click",toWink);
function toWink() {
  var eyeLeft = document.getElementById('eye-l-ball');
  var eyeRight = document.getElementById('eye-r-ball');
  var winkAnimation = document.createElementNS(svgNS,'animate');
  winkAnimation.setAttributeNS(null,'attributeName', 'ry');
  winkAnimation.setAttributeNS(null,'from', '4');
  winkAnimation.setAttributeNS(null,'to', '0');
  winkAnimation.setAttributeNS(null,'dur', '0.1s');
  var random = Math.floor(Math.random() * 2);
  if(random == 0){
    eyeLeft.appendChild(winkAnimation);
  }else{
    eyeRight.appendChild(winkAnimation);
  }
  winkAnimation.beginElement(); 
  
}
//get the "hide" button;
//rotate the ghost to hide some part of it
var hideButton = document.getElementById('hide');
hideButton.addEventListener("click",toHide);
function toHide() {
  var ghost = document.getElementById('ghost');
  ghost.setAttribute('transform', 'rotate(40), translate(0,0), scale (0.8)');  
}
//get the "dress" button;
//rotate the ghost to hide some part of it
var dressButton = document.getElementById('dress');
dressButton.addEventListener("click",toDressUp);
function toDressUp() {
  var body = document.getElementById('body');
  body.setAttribute('d', 'M 53 111 Q 40 142 27 111 Q 24 125.84 22 99 Q 14.4 111.32 14.4 96.8 Q 4.8 101.64 6 119 Q 2 26 19.2 38.72 Q 24 0 43.2 0 Q 62.4 0 67.2 38.72 Q 79 26 84 115 Q 81.6 101.64 72 96.8 Q 72 111.32 66 100 Q 64 127 53 112'); 
  body.setAttribute('style', 'fill:lightgray');
}