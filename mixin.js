/*global ig*/
ig.module(
	'plugins.clickable.mixin'
).defines(function () {
	'use strict';
	ig.MixinClickable = {
		oldClick: false,
		clickedInside: false,
		clickName: 'click',
		updateClickable: function () {
			var over = this.overClickable(),
				out = !over,
				pressed = (ig.input.state(this.clickName) === true),
				released = (ig.input.state(this.clickName) === false);
			
			if (pressed && !this.oldClick && over) {
				this.oldClick = true;
				this.pressed();
			} else if (released && this.oldClick && over) {
				this.oldClick = false;
				this.released();
			}
		},
		overClickable: function () {
			return ig.input.mouse.x + ig.game.screen.x > this.pos.x && ig.input.mouse.x + ig.game.screen.x < this.pos.x + this.size.x && ig.input.mouse.y + ig.game.screen.y > this.pos.y && ig.input.mouse.y + ig.game.screen.y < this.pos.y + this.size.y;
		}
	};
});