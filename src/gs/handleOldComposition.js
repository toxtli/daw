"use strict";

gs.handleOldComposition = cmp => {
	if ( !cmp.synths ) {
		const synthId = common.smallId();

		Object.values( cmp.patterns ).forEach( pat => pat.synth = synthId );
		cmp.synthOpened = synthId;
		cmp.synths = { [ synthId ]: {
			name: "synth",
			envelopes: {
				gain: {
					attack: { duration: .02, value: "" },
					release: { duration: .02, value: "" }
				},
				pan: {
					attack: { duration: .02, value: "" },
					release: { duration: .02, value: "" }
				}
			},
			oscillators: {
				[ common.smallId() ]: { type: "sine", detune: 0, pan: 0, gain: 1 }
			}
		} };
	}
	Object.values( cmp.tracks ).forEach( tr => {
		tr.name = tr.name || "";
		tr.toggle = typeof tr.toggle === "boolean" ? tr.toggle : true;
	} );
	Object.values( cmp.blocks ).forEach( blc => {
		blc.offset = blc.offset || 0;
		blc.selected = !!blc.selected;
		blc.durationEdited = !!blc.durationEdited;
	} );
	Object.values( cmp.keys ).forEach( keys => (
		Object.values( keys ).forEach( k => {
			k.selected = !!k.selected;
			delete k.durationEdited;
			if ( typeof k.key === "string" ) {
				k.key = gsuiKeys.keyStrToMidi( k.key );
			}
		} )
	) );
};
