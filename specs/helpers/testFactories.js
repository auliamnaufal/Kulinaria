import LikeButtonInitiator from "../../src/scripts/utils/like-button-presenter";

 
const createLikeButtonPresenterWithMovie = async (resto) => {
	await LikeButtonInitiator.init({
		likeButtonContainer: document.querySelector('#likeButtonContainer'),
		resto,
	})
};
 
export { createLikeButtonPresenterWithMovie };