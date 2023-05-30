import { postApi } from '../../config/services';

export const authentication = (state) => (dispatch) => {
  postApi('https://bootcamp-rent-cars.herokuapp.com/customer/auth/login', {
    ...state,
  })
    .then((result) => {
      console.log(result);
      dispatch({
        type: 'LOGGED_IN',
        payload: result,
      });
    })
    .catch((e) => {});
};
