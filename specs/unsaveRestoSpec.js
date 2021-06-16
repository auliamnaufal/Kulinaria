const { default: FavoriteRestoIdb } = require("../src/scripts/data/favoriteResto-idb");
const { default: LikeButtonInitiator } = require("../src/scripts/utils/like-button-presenter");

const addSaveButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
}

describe('unsaving a restaurant', () => {
	beforeEach(async () => {
		addSaveButtonContainer();
		await FavoriteRestoIdb.putResto({ id: 1 })
	})

	afterEach(async () => {
		await FavoriteRestoIdb.deleteResto(1)
	})

	it('should show saved button when the restaurant has been saved', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: 1,
			}
		})

		expect(document.querySelector('[aria-label="unsave this resto"]'))
			.toBeTruthy();
	})

	it('should not show save button when the restaurant has not saved', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: 1,
			}
		})

		expect(document.querySelector('[aria-label="save this resto"]'))
			.toBeFalsy();	
	})

	it('should be able to remove saved restaurant from the list', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: 1,
			}
		})
	
		document.querySelector('[aria-label="unsave this resto"]').dispatchEvent(new Event('click'));


		expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
	})

	it('should not throw error if the unliked movie is not in the list', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: 1,
			},
		});

		await FavoriteRestoIdb.deleteResto(1);

		document.querySelector('[aria-label="unsave this resto"]').dispatchEvent(new Event('click'));

		expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
	})
})