require('es6-promise').polyfill();
require('isomorphic-fetch');
import { URL_API_ACCOUNT_INFO } from '../constant/apiurl';
import ERROR from '../constant/error';

var user;
var defaultAccountInfo = {
    id: 0,
    nick: '',
    phone: '',
    level: 0,
    profit: 0,
    createTime: ''
}
export function getUser() {
    return user;
}

function initUser(account) {
    user = Object.assign(defaultAccountInfo, account);
}

export function fetchUser() {
    let jsonHeader = new Headers();
    jsonHeader.append('Content-type', 'application/json');
    let init = {
        method: 'GET',
        headers: jsonHeader
    }
    return fetch(URL_API_ACCOUNT_INFO, init)
        .then((response) => response.json())
        .then(json => {
            console.log(json)
            if (json.result === 0) {
                initUser(json.account);
            } else {
                throw new Error(ERROR[json.result] || 'Unknow error code: ' + json.result);
            }
        })
        .catch(function(error) {
            console.log(error);
        })
}
