export default ({ app, redirect }) => {
  if(app.$auth.loggedIn) {
    if(app.$auth.user.type === 1) {
      return redirect('/app/vendor')
    }
    else if(app.$auth.user.type === 0) {
      return redirect('/app/customer')
    }
  }
}
