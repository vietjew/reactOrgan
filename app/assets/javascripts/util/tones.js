var Tones = window.Tones = {
  "C4": 261.6,
  "C#4": 277.2,
  "D4": 293.7,
  "Eb4": 311.1,
  "E4": 329.6,
  "F4": 349.2,
  "F#4": 370.0,
  "G4": 392.0,
  "G#4": 415.3,
  "A4": 440,
  "Bb4": 466.2,
  "B4": 493.9,
  "C5": 523.3,
  "C#5": 554.4,
  "D5": 587.3,
  "Eb5": 622.3,
  "E5": 659.3,
  "F5": 698.5,
  "F#5": 740.0,
  "G5": 784.0,
  "G#5": 830.6,
  "A5": 880.0,
  "Bb5": 932.3,
  "B5": 987.8,
  "C6": 1047,
  "C#6": 1109,
  "D6": 1175,
  "Eb6": 1245,
  "E6": 1319,
  "F6": 1397
}

var Notes = window.Notes = {};
Object.keys(Tones).forEach(function(toneName){
  var note = new Note(Tones[toneName]);
  Notes[toneName] = note;
})
