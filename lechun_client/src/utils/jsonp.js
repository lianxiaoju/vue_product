export default (url, query) => {
  
  const script = document.createElement('script');
  script.type = 'text/javascript';
  const cbFn = 'callback' + (+new Date());
  return new Promise((resolve, reject) => {
    window[cbFn] = (data) => {
      window.cbFn = null;
      resolve(data);
    }
    script.src = url + '?callback=' + cbFn;
    document.body.appendChild(script)
    script.onerror = function (error) {
      reject(error);
    }
  })
}