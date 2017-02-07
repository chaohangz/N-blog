module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {
      req.flash('error', '未登录')
      return res.redirect('/signin')   // 重定向至登录页面
    }
    next()
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录')
      return res.redirect('back')    // 如果用户已登录，则跳转到之前页面
    }
    next()
  }
}