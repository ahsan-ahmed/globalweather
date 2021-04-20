'use strict';

export const baseUrl = '';

const queryString = obj => {
    return Object.entries(obj)
        .map(([key, val]) => `${key}=${val}`)
        .join('&');
};

export default class RestClient {
    /**
      GET API
      **/
    static async get(url, paramsObj) {
        return new Promise(function (resolve, reject) {
            fetch(`${url}?${queryString(paramsObj)}`, {
                method: 'GET',
                timeout: 5000,
                headers: {
                    //   'x-access-token': token,
                    // Accept: 'application/json',
                    // 'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(responseJson => {
                    resolve(responseJson);
                })
                .catch(error => {
                    console.log('get:' + error.message);
                    reject({
                        statusCode: 403,
                        message: 'Error! ' + error.message
                    });
                });
        });
    }

    /**
      POST API
      **/
    static async post(url, params) {
        return new Promise(function (resolve, reject) {
            //console.log(baseUrl + url, '===', params)
            fetch(baseUrl + url, {
                method: 'POST',
                timeout: 5000,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: params
            })
                .then(response => response.json())
                .then(responseJson => {
                    resolve(responseJson);
                })
                .catch(error => {
                    reject({
                        statusCode: 403,
                        message: 'Error! ' + error.message
                    });
                });
        });
    }

    /**
  POST with token API
  **/
    static async postWithToken(url, params) {
        return new Promise(function (resolve, reject) {
            fetch(baseUrl + url, {
                method: 'POST',
                timeout: 5000,
                headers: {
                    // 'x-access-token': token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: params
            })
                .then(response => response.json())
                .then(responseJson => {
                    resolve(responseJson);
                })
                .catch(error => {
                    reject({
                        statusCode: 403,
                        message: 'Error! ' + error.message
                    });
                });
        });
    }
}
