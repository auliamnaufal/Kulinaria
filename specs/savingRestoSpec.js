const { default: LikeButtonInitiator } = require("../src/scripts/utils/like-button-presenter");

describe('Saving a Restaurant', () => {

	it('should show save button when the restaurant has not been saved', async () => {
		document.body.innerHTML = '<div id="likeButtonContainer"></div>';
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: 1,
			}
		})

		expect(document.querySelector('[aria-label="save this resto"]'))
			.toBeTruthy();
	})
})