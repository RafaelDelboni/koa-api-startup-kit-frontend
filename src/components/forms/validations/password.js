export default (values) => {
  if (!values.password) {
    return 'Required'
  }
  if (values.password.length < 8) {
    return 'Must be at least 8 characters or more'
  }
}
