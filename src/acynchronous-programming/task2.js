export function parseJSON(jsonStr, successCb, failureCb) {
  try {
    successCb(JSON.parse(jsonStr));
  } catch (e) {
    failureCb(e);
  }
}

export const successCb = result => {
  console.log(`Success parse!`);
  console.log(result);
};

export const failureCb = error => {
  console.log(`Failure parse!`);
  console.log(error);
};
