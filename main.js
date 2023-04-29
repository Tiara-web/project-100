var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function(event) { console.log(event); Content = event.results[0][0].transcript.toLowerCase(); console.log(Content); if (Content == "selfie") { speak(); } }

camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function speak() {


    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
{
    img_id="selfie1";
    take_snapshot();
    speak_data= "Taking your selfie in the next 10 seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


},5000);
}


Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function take_snapshot() {
    
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id= "selfie_image" src=' + data_uri + '>';

    });
}
function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

