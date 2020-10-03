const wfm = {
  // реализует асинхрон задержку
  delay(ms) {
    return new Promise(res => setTimeout(() => res(), ms));
  },

  // проверяет существует или нет определ обеъкт
  isUndefined(object) {
    return typeof object === 'undefined';
  },
};

export { wfm };
