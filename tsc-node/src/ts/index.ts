import {httpRequest, readFile} from './requestPromise'

import * as express from "express"

async function getArticle(subreddit: string) {
  let configFile = await readFile('config.json')
  let targetUrl = JSON.parse(configFile).targetUrl
  console.log(`targetUrl: ${targetUrl}`)
  let result = await httpRequest(`${targetUrl}/r/${subreddit}.json`)
  console.log(`result: `, result)
  return result
}

let app = express()

app.get('/r/aww.json', (req: any, res: any) => {
  getArticle('aww')
  .then(body => {
    console.error(`body: `,body)
    res.setHeader('Content-Type', 'application/json')
  })
  .catch(err => console.error(err))
})

const server = app.listen(8000, () => {
  console.log(`Server listening on port 8000`)
})
