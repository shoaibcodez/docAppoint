import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized login again",
      });
    }

    // decoding the token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    // after decoding we will get {id:user._id} in token_decode variable
    // we will add the id in req.body so that we can use that in controller function
    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
