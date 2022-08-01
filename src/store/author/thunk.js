import { STATUS_TEXT_CREATED } from '../../constants';
import { addAuthor } from '../../services/http.service';
import { createAuthorActionCreator } from './actions';

export const addAuthorAction = (newAuthor) => {
	return async function (dispatch) {
		const response = await addAuthor(newAuthor);
		if (
			response.data.successful &&
			response.statusText === STATUS_TEXT_CREATED
		) {
			dispatch(createAuthorActionCreator(response.data.result));
		}
	};
};
