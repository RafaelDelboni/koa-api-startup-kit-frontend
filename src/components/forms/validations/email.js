export default (values) => {
  if (!values.email) {
    return 'Required'
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    return 'Invalid email address'
  }
}
