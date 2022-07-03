export function timeConvert(num) {
	const hours = num / 60;
	const fullHours = Math.floor(hours);
	const minutes = Math.round((hours - fullHours) * 60);
	return `${fullHours} : ${minutes} hours`;
}

export function dateConvert(date) {
	return date.split('/').join('.');
}

export function getAutors(autors, allAuthors) {
	if (allAuthors) {
		return autors.map((autor) => {
			return allAuthors.find((item) => item.id === autor.name);
		});
	}
}
