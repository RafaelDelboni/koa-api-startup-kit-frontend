export default (values) => {
  if (!values.username) {
    return 'Required'
  }
  if (values.username.length < 3) {
    return 'Must be at least 3 characters or more'
  } 
  if (values.username.length > 30) {
    return 'Must be 30 characters or less'
  }
}
