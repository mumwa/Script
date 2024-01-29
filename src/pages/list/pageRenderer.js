function pageRenderer() {
  const a = 1 + 1;
  return new Promise(function (resolve, reject) {
    resolve(a);
    reject(new Error("Request is failed"));
  });
}
export default pageRenderer();
