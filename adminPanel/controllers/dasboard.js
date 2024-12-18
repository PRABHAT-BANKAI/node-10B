module.exports.login =  (req, res) => {
  const cookieData = req.cookies["auth"];
  if (cookieData) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signIn");
}