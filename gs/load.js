"use strict";

gs.load = function( save ) {
	gs.bpm( save.bpm );
	save.files.forEach( gs.file.create );
	save.tracks.forEach( function( t ) {
		var id = t[ 0 ];

		while ( id >= ui.tracks.length ) {
			ui.newTrack();
		}
		ui.tracks[ id ].toggle( t[ 1 ] ).editName( t[ 2 ] );
	} );
	save.samples.forEach( function( s ) {
		//          0        1      2      3        4
		// s = [ trackId, fileId, when, offset, duration ]
		var smp = gs.sample.create( gs.files[ s[ 1 ] ] );

		smp.data.gsfile.samplesToSet.push( smp );
		gs.sample.inTrack( smp, s[ 0 ] );
		gs.sample.when( smp, s[ 2 ] / ui.BPMem );
		gs.sample.slip( smp, s[ 3 ] / ui.BPMem );
		gs.sample.duration( smp, s[ 4 ] / ui.BPMem );
		wa.composition.add( smp );
	} );
};
