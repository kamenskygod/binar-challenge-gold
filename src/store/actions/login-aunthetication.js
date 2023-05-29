export const TriggerFunction = (count) => {
  return {
    type: "COUNTER",
    payload: count,
  };
};
