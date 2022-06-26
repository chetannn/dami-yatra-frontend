export default ({ app, redirect }) => {
  if(app.$auth.loggedIn) {
    if(app.$auth.user.type === 0) {
      return redirect('/app/customer')
    }
  }
}
