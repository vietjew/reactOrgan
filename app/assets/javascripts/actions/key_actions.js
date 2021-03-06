KeyActions = {
  keyPressed: function(key) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_PRESSED,
      key: key
    });
  },
  keyReleased: function(key) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_RELEASED,
      key: key
    });
  },
  setOctave: function(octave) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.SET_OCTAVE,
      octave: octave
    });
  }
}
