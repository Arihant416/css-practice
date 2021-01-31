const cards = document.querySelectorAll('.card');
// console.log(cards);
cards.forEach((card) => {
	card.addEventListener('click', function () {
		dismantleAllActive();
		card.classList.add('active');
	});
});
const dismantleAllActive = () => {
	cards.forEach((card) => {
		card.classList.remove('active');
	});
};
