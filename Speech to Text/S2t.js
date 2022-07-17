
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

recognition.lang = 'ar-sa';
recognition.onspeechend = () => {

    recognition.stop();
}

button_to_lang.addEventListener('click', () => {
    var langText = document.getElementById("lang1");
    if (recognition.lang == 'ar-sa') {
        recognition.lang = 'en-US';
        langText.innerHTML = 'English';
    }
    else {
        recognition.lang = 'ar-sa';
        langText.innerHTML = 'Arabic';
    }
})
button_to_start.addEventListener('click', () => {


    recognition.onresult = (result) => {

        box2.innerHTML = result.results[0][0].transcript;
    }
    recognition.start();
})