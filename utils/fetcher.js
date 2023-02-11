export function secureFetch(url, params) {
  return new Promise((resolve, reject) => {
    fetch(url, {...params, ...{headers:{ 'Content-type': 'application/json; charset=UTF-8', 'x-access-token': localStorage.getItem('token')}}}).then(response => {
      // response only can be ok in range of 2XX
      if (response.ok) {
        // you can call response.json() here too if you want to return json
        resolve(response);
      } else {

        if (response.status === 523) {
          // eslint-disable-next-line no-restricted-globals
          location.href = '/login';
        }
        reject(response);
      }
    })
      .catch(error => {
        //it will be invoked mostly for network errors
        //do what ever you want to do with error here
        console.log(error);
        reject(error);
      });

  });
}