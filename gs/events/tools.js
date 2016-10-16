"use strict";

ui.dom.btnMagnet.onclick = ui.toggleMagnetism;

ui.dom.toolBtns.tool = {};
ui.dom.toolBtns.forEach( function( btn ) {
	ui.dom.toolBtns.tool[ btn.dataset.tool ] = btn;
	btn.onclick = ui.selectTool.bind( null, btn.dataset.tool );
} );
