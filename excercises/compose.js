import {pipe, filter_users, firstElement, get_full_name, print_user} from './compose_utils.js'

const users = [
  {name: 'andy', surname: 'muñoz', age: 33},
  {name: 'estefano', surname: 'muñoz', age: 11}
]

const firstChild = (users, filter_fn) => pipe(
    filter_users(filter_fn),
    firstElement,
    get_full_name,
    trace('debug>>>'),
    print_user
  )(users)

  
console.log('firstChild(users):', firstChild(users, user => user.age < 12))
console.log('firstChild(users):', firstChild(users, user => user.name === 'andy'))
