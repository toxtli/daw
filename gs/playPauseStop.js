"use strict";

gs.playStop  = function() { ( gs.isPlaying ? gs.stop : gs.play )(); };
gs.playPause = function() { ( gs.composition.isPlaying ? gs.pause : gs.play )(); };

gs.play = function() {
	gs.file.stop();
	if ( !gs.composition.isPlaying && gs.composition.samples.length ) {
		gs.composition.play();
		waFwk.do.play();
		if ( gs.composition.isPlaying ) {
			gs.isPlaying = true;
			gs.isPaused = false;
		}
	}
};

gs.pause = function() {
	gs.file.stop();
	if ( gs.composition.isPlaying ) {
		gs.composition.pause();
		waFwk.do.pause();
		gs.isPlaying = false;
		gs.isPaused = true;
	}
};

gs.stop = function() {
	gs.file.stop();
	gs.compositionStop();
};

gs.compositionStop = function() {
	gs.composition.stop();
	waFwk.do.stop();
	gs.currentTime( 0 );
	gs.isPaused = gs.isPlaying = false;
};
