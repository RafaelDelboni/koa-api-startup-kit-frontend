export default (values) => {
  if (!values.passwordConfirm) {
    return 'Required'
  }
  if (values.passwordConfirm !== values.password) {
    return 'Password does not match the confirm password'
  }
}
