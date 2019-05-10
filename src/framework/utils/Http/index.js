class Http {
    get(url) {
        return sendRequest('get',url)
    }
}


const sendRequest = (method,url) => {
    return fetch(url,{
        method:method
    })
        .then(res=>res.json())
};

const http = new Http();

export {http}
