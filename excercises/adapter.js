class OldApi {
  constructor() {
    this.operations = (url, opts, action) => {
      switch (action) {
        case 'get':
          console.log('old_api_get')
          return
        case 'post':
          console.log('old_api_post')
          return
        default:
          return
      }
    }
  }
}

class NewApi {
  constructor() {
    this.get = (url, {}) => {
      console.log('new_api_get')
    }
    this.post = (url, {}) => {
      console.log('new_api_post')
    }
  }
}

// class Adapter {
//   constructor() {
//     const new_api = new NewApi()
    
//     this.operations = (url, opts, action) => {
//       switch (action) {
//         case 'get':
//           new_api.get(url, opts)
//           return
//         case 'post':
//           new_api.post(url, opts)
//           return
//         default:
//           return
//       }
//     }
//   }
// }

class Adapter {
  constructor() {
    const new_api = new NewApi()
    
    this.operations = (url, opts, action) => {
      new_api[action](url, opts)
    }
  }
}

const old_api = new Adapter()
old_api.operations('url', {}, 'get')
old_api.operations('url', {}, 'post')
