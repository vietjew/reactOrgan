KeyStore.setMaxListeners(100);

window.addEventListener('keydown', function(event){
  event.preventDefault();
  var key = event.keyCode;
  KeyActions.keyPressed(key);
  console.log(key + " pressed");
});

window.addEventListener('keyup', function(event){
  event.preventDefault();
  var key = event.keyCode;
  KeyActions.keyReleased(key);
  console.log(key + " released");
});
