Object.prototype.trace = text => input => {
  console.log(text, input)
  return input
}

export const pipe = (...fns_array) => users => {
  return fns_array.reduce((compose_input, fn) => {
    return fn(compose_input)
  }, users)
}

export const firstElement = array => array[0] || []

export const get_full_name = user => ({
  full_name: `${user.name} ${user.surname}`,
  age: user.age
})

export const print_user = user => `${user.full_name} tiene ${user.age} año(s)`

export const filter_users = filter_fn => users => users.filter(filter_fn) 
