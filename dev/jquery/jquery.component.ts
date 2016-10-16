import { Component, OnInit, ElementRef } from 'angular2/core';
declare var jQuery: any;

@Component({
	selector: 'jquery',
	template : `
		<h1>jQuery</h1>
		<button>Test Click</button>
		<p class="text" style="display: none">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
	`,
})

export class JqueryComponent implements OnInit {
	constructor(private _rlRef: ElementRef) {}

	ngOnInit() {
		jQuery(this._rlRef.nativeElement).find('button').click(function() {
			console.log("Because I'm Happy :)");
			var textBox = jQuery('.text');
			console.log(textBox.is(":hidden"));
			
			if(textBox.is(":hidden")) {
				textBox.slideDown("slow");
			} else {
				textBox.hide("slow");
			}
		});
	}
}	