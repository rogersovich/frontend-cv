export default function ({ $axios, store, redirect, $swal }) {
  $axios.setBaseURL('https://backend-rogersovich-cv.herokuapp.com/api')

  $axios.onRequest((config) => {
    const user = store.state.user
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`
    } else {
      delete config.headers.Authorization
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      store.dispatch('user/removeToken')
      $swal('Session Expired', 'Your Token Invalid', 'error')
      return redirect('/')
    }
  })
}
