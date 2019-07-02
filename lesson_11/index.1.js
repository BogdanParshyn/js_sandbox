"use strict";

const SECRET_KEY = '$2a$10$ZeHqsLaNHm201agXQsRxReYR8HLgomF2JmWS9mtGQUfC/B26DJbt.';

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

/*
postData({ lesson_11:true, mood: 'Perfect'})
    .then(res => console.log(res))
    .catch(err => console.log(err))
*/
window.postData = postData;
    function getData(data) {
        fetch('https://api.jsonbin.io/b/${id}/latest', {
            method: 'GET',
            headers: {   
                'secret-key': SECRET_KEY,  
            },
            
        })
        .then(response => response.json())
    }

    window.getData = getData;

    getData('5d0d12c1c2b91c1106213fae')
        .then(res => console.log(res));
    
// =================================================================================

function updatetData(id, data) {
    fetch('https://api.jsonbin.io/b/${id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'secret-key': SECRET_KEY,
            
        },
        body: JSON.stringify(data),
    });
    
}

window.updatetData = updatetData;

// =================================================================================

function deleteData(id, data) {
    fetch('https://api.jsonbin.io/b/${id}', {
        method: 'DELETE',
        headers: {
            
            'secret-key': SECRET_KEY,
            
        },
        body: JSON.stringify(data),
    });
    
}

function getData(id) {
    return fetch('https://api.jsonbin.io/b/${id}'
    method: 'GET',
    headers: {
        
        'secret-key': SECRET_KEY,
        
    },
    
});

window.deleteData = deleteData;