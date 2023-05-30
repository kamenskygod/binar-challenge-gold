export const sentUsers = ({ data }) => {
  return {
    type: 'USERS',
    payload: data,
  };
};
