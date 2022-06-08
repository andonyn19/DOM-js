const d = document,
  w = window

function narrador() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextArea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

  //console.log(speechMessage)

  let voices = [];

  d.addEventListener("DOMContentLoaded", e => {
    w.speechSynthesis.addEventListener("voiceschanged", e => {
      voices = w.speechSynthesis.getVoices();

      voices.forEach(voiceOption => {
        const $option = d.createElement("option");
        $option.value = voiceOption.name;
        $option.textContent = `${voiceOption.name} *** ${voiceOption.lang}`;

        $speechSelect.appendChild($option);
      })

    });
  });

  d.addEventListener("change", e => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(voice => voice.name === e.target.value);
    }
  })

  d.addEventListener("click", e => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextArea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  })
}

export default narrador;