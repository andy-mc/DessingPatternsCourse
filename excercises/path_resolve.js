const {resolve} = require('path')


console.log('>>>>', resolve('foo', 'bar', 'baz'))
// console.log('>>>>', resolve('foo/bar', './baz'))
// console.log('>>>>', resolve('/foo/bar', './baz'))
// console.log('>>>>', resolve('/foo/bar', './baz'))
// console.log('>>>>', resolve('/foo/bar', './baz'))
// // Returns: '/foo/bar/baz'

// resolve('/foo/bar', '/tmp/file/');
// // Returns: '/tmp/file'

// resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// // If the current working directory is /home/myself/node,
// // this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'