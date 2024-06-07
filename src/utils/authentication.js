// Route authentication using a bearer token.

function authentication(req, res, next) {
  if (!req.headers.bearer || req.headers.bearer != process.env.BEARER_TOKEN) {
    res.status(401).json({
      message: "Unauthorized! You have no token to perform this operation",
    });
    return;
  }
  next();
}

module.exports = authentication;
