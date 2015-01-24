/*global ig*/
ig.module(
	'plugins.clickable.mixin'
).defines(function () {
	'use strict';
	ig.MixinClickable = {
		oldClicked: false,
		clickStartedInside: false,
		clickName: 'click',
		updateClickable: function () {
			var clicked = ig.input.state(this.clickName);
			if (!this.oldClicked && clicked && this.overClickable()) {
				this.clickStartedInside = true;
			}
			if (this.clickStartedInside && this.overClickable()) {
				if (clicked && !this.oldClicked) {
					this.clickPressed();
				} else if (clicked) {
					this.clickDown();
				} else if (this.oldClicked) {
					this.clickReleased();
				}
			}
			if (this.oldClicked && !clicked) {
				this.clickStartedInside = false;
			}
			this.oldClicked = clicked;
		},
		clickDown: function () {},
		clickPressed: function () {},
		clickReleased: function () {},
		overClickable: function () {
			return ig.input.mouse.x + ig.game.screen.x > this.pos.x && ig.input.mouse.x + ig.game.screen.x < this.pos.x + this.size.x && ig.input.mouse.y + ig.game.screen.y > this.pos.y && ig.input.mouse.y + ig.game.screen.y < this.pos.y + this.size.y;
		}
	};
});