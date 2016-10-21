import * as fs from 'fs'
import * as request from 'request'

export function httpRequest(uri: string) {
  return new Promise<string>((resolve, reject) => {
    let options = {
      uri,
      headers: {
        'User-Agent': 'Node Server 16.04'
      }
    }

    request(options, (error, response, body) => {
      if (error) {
        reject(error)
      } else if (response.statusCode !== 200) {
        reject(response.statusCode)
      } else {
        resolve(body)
      }
    })
  })
}

export function readFile(fileName: string) {
  console.log('readFile')
  return new Promise<string>((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (error, data) => {
      console.log(`data: `, data)
      error ? reject(error) : resolve(data)
    })
  })
}