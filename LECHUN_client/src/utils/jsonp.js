const jsonp = (
    url = "",
    data = {}
) => {
    return new Promise((resolve, reject) => {
        try {
            const script = document.createElement('script');
            const fnName = `a${((+new Date()))}`;
            window[fnName] = function (data) {
                resolve(res)
            }

            script.src = `${url}'?callback=${fnName}`;
            document.body.appendChild(script);
        }catch(e){
            reject(e)
        }
     
    })

}

export default jsonp