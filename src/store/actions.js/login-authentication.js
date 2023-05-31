import { fetchApi, postApi } from '../../config/services';

export const sentUsers = () => {
  return (dispatch) =>
    fetchApi('https://bootcamp-rent-cars.herokuapp.com/customer/v2/car')
      .then(({ data }) => {
        dispatch({
          type: 'USERS',
          payload: data.cars,
        });
      })
      .catch((e) => {});
};

export const postUserList = (state) => {
  return (dispatch) =>
    postApi('https://reqres.in/api/users', { ...state }).then((result) => {
      dispatch({
        type: 'USER_SUCCESS_CREATED',
        payload: {
          message: 'Member baru berhasil dibuat',
        },
      });
    });
};
