"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const requestPromise_1 = require('./requestPromise');
const express = require("express");
function getArticle(subreddit) {
    return __awaiter(this, void 0, void 0, function* () {
        let configFile = yield requestPromise_1.readFile('config.json');
        let targetUrl = JSON.parse(configFile).targetUrl;
        console.log(`targetUrl: ${targetUrl}`);
        let result = yield requestPromise_1.httpRequest(`${targetUrl}/r/${subreddit}.json`);
        console.log(`result: `, result);
        return result;
    });
}
let app = express();
app.get('/r/aww.json', (req, res) => {
    getArticle('aww')
        .then(body => {
        console.error(`body: `, body);
        res.setHeader('Content-Type', 'application/json');
    })
        .catch(err => console.error(err));
});
const server = app.listen(8000, () => {
    console.log(`Server listening on port 8000`);
});
