// const audio = new Audio('caraudio.mp3');
// var resp = audio.play();
// omo, hunger dey wipe me sha, but no p
// if(resp != undefined){
//     resp.then(_ => {
//         //autoplay starts
//     }).catch(error => {
//         //shoe error
//     });
// }
// audio.loop()=true;

var audio = document.createElement("audio");
document.body.appendChild(audio);
audio.src="caraudio.mp3"


document.body.addEventListener("mousemove", function(){
    audio.play();
    audio.loop();
})
