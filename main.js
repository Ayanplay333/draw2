function setup(){
    canvas = createCanvas(280,280,);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth = window.speechSynthesis;
}
function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}
function draw(){
    strokeWeight(13);
    stroke('red');
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function classifycanvas(){
    classifier.classify(canvas,gotResult);
}
function Clearcanvas(){
    background('white');
}
function gotResult(error,results){
if(error){
    console.error(error);

}
else{
    console.log(results);
    document.getElementById('label').innerHTML =  results[0].label;
    document.getElementById('accuracy').innerHTML = Math.round(results[0].confidence * 100) + '%';
    var utterthis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterthis);
}
}