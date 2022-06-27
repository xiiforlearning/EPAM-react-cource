import { mockedAuthorsList } from '../constants';

export function timeConvert(n) {
	let num = n;
	let hours = num / 60;
	let rhours = Math.floor(hours);
	let minutes = (hours - rhours) * 60;
	let rminutes = Math.round(minutes);
	return `${rhours} : ${rminutes} hours`;
}

export function dateConvert(date) {
	return date.split('/').join('.');
}

export function getAutors(autors) {
	let result = [];
	autors.forEach((autor) => {
		mockedAuthorsList.forEach((item) => {
			if (item.id === autor) {
				result.push(item.name);
			}
		});
	});
	return result;
}
