export const router = {
  // получение текущего url
  getUrl() {
    return window.location.hash.slice(1);
  },
};
