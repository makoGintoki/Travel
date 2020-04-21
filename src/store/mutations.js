export default {
  changeCity: function (state, v) {
    state.city = v
    try {
      localStorage.city = v
    } catch (e) {}
  }
}
