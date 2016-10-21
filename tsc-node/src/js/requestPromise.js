"use strict";
const fs = require('fs');
const request = require('request');
function httpRequest(uri) {
    return new Promise((resolve, reject) => {
        let options = {
            uri,
            headers: {
                'User-Agent': 'Node Server 16.04'
            }
        };
        request(options, (error, response, body) => {
            if (error) {
                reject(error);
            }
            else if (response.statusCode !== 200) {
                reject(response.statusCode);
            }
            else {
                resolve(body);
            }
        });
    });
}
exports.httpRequest = httpRequest;
function readFile(fileName) {
    console.log('readFile');
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (error, data) => {
            console.log(`data: `, data);
            error ? reject(error) : resolve(data);
        });
    });
}
exports.readFile = readFile;
