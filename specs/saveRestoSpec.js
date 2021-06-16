const { default: FavoriteRestoIdb } = require("../src/scripts/data/favoriteResto-idb");
const { default: LikeButtonInitiator } = require("../src/scripts/utils/like-button-presenter");

const addSaveButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Saving a Restaurant', () => {
	beforeEach(async () => {
    addSaveButtonContainer();
  });

	it('should show save button when the restaurant has not been saved', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: 1,
			}
		})

		expect(document.querySelector('[aria-label="save this resto"]'))
			.toBeTruthy();
	})

	it('should not show saved button when the restaurant has not been saved', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: 1,
			}
		})

		expect(document.querySelector('[aria-label="unsave this resto"]'))
			.toBeFalsy();	
	})

	it('should be able to save a restaurant', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: 1,
			}
		})

		document.querySelector('#likeButton').dispatchEvent(new Event('click'))
		const resto = await FavoriteRestoIdb.getResto(1)

		expect(resto).toEqual({ id: 1 })

		FavoriteRestoIdb.deleteResto(1)
	})

	it('should not save a restaurant again when its already saved', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {
				id: 1,
			}
		})

		await FavoriteRestoIdb.putResto({ id: 1 })
		document.querySelector('#likeButton').dispatchEvent(new Event('click'))

		expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }])
		
		FavoriteRestoIdb.deleteResto(1)
	})
	
	xit('should not add a movie when it has no id', async () => {
		await LikeButtonInitiator.init({
			likeButtonContainer: document.querySelector('#likeButtonContainer'),
			resto: {}
		})

		document.querySelector('#likeButton').dispatchEvent(new Event('click'))

		expect (await FavoriteRestoIdb.getAllResto()).toEqual([])
	})
	
})