const https = require('https');

const get = url => {
  const [hostname, ...path] = url.split('/')
  const url_path = '/' + path.join('/')

  return new Promise((resolve, reject) => {
    const options = {
      hostname: hostname,
      path: url_path,
      method: 'GET'
    }

    const req = https.request(options, res => {
      res.setEncoding('utf8')

      let body = ''
      res.on('data', data => {
        body += data
      })
    
      res.on('end', end_data => {
        const response = JSON.parse(body)
        resolve(response)
      })
    })

    req.on('error', errors => {
      reject(errors)
    })

    req.end()
  })
}

(async () => {
  const users = await get('jsonplaceholder.typicode.com/users')
  console.log('users:', users)
})()