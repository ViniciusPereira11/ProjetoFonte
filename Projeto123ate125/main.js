function setup(){
    canvas = createCanvas(480, 320);
    canvas.position(windowWidth/2 + 240, 155);
    background("white");

    video = createCapture(VIDEO);
    video.size(480, 320);

    padeiro = ml5.poseNet(video, modelLoaded);
    padeiro.on("pose", gotPose);

}
function gotPose(r){
    if(r.length>0){
        pulsoXD = r[0].pose.rightWrist.x;
        pulsoXE = r[0].pose.leftWrist.x;
        tamanho = floor(pulsoXE - pulsoXD);
    }
}
function modelLoaded(){
    console.log("O padeiro está pronto para trabalhar!");
}
var pulsoXE = 0;
var pulsoXD = 0;
var tamanho = 10;
function draw(){
    background("white");
    document.getElementById("px").innerHTML = tamanho;
    textSize(tamanho);
    text(">:)", 100, 140);
   
}