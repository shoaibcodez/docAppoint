import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname); // (error-null, filename-file.originalName)
  },
});

const upload = multer({ storage });

export default upload;
