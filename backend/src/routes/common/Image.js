var express = require('express')
var router = express.Router()
const multer = require("multer");
const tfnode = require("@tensorflow/tfjs-node");
const cocoSsd = require("@tensorflow-models/coco-ssd");
const fs = require("fs");
const translate=require('translate')
const { promisify } = require('util')


const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/uploads");
  },
  filename: (req, file, callBack) => {
    callBack(null, `${Date.now()}_${file.originalname}`);
  },
});
const unlinkAsync = promisify(fs.unlink)

const upload = multer({ storage: storage });
router.post("/search", upload.single("file"), async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  let re=await objectDetection(req.file.path);
  //Remove file after use
  let text=''
  re.forEach((element) => {
    text=element.class
  });
  await unlinkAsync(req.file.path)

  return res.status(200).json({ success: true, key: text });
});
const readImage = (path) => {
  const imageBuffer = fs.readFileSync(path);
  const tfimage = tfnode.node.decodeImage(imageBuffer);
  return tfimage;
};
const objectDetection = async (path) => {
  const image = readImage(path);

  const model = await cocoSsd.load();
  const predictions = await model.detect(image);
  return predictions;
};


module.exports = router;

