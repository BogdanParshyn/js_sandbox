"use strict";

function postData(data) {
    fetch('https://api.jsonbin.io/b', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'secret-key': SECRET_KEY,
            'private': 'true',
        },
        body: JSON.stringify(data),
    });
    return postData();
}
"city":"Poltava"
"country_name":"Ukraine"


