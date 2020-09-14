export function getResolvedPromise(value) {
  return Promise.resolve(value);
}

export function test(value) {
  getResolvedPromise(value)
    .then(i => {
      if (i > 300) {
        throw new Error('Ошибка');
      }
    })
    .catch(i => console.log(i))
    .finally(() => console.log('This is Finally'));
}
