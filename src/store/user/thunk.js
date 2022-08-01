import { logoutUser } from '../../services/http.service';
import { logoutUserInfo } from './actions';

export const logoutUserAction = () => {
	return async function (dispatch) {
		await logoutUser();
		dispatch(logoutUserInfo());
	};
};
