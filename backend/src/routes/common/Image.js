var express = require("express");
var router = express.Router();
const multer = require("multer");
const tfnode = require("@tensorflow/tfjs-node");
const cocoSsd = require("@tensorflow-models/coco-ssd");
const fs = require("fs");
const { promisify } = require("util");
let cocoModel = [
  {
    key: "cat",
    value: "mèo",
  },
  {
    key: "dog",
    value: "chó",
  },
  {
    key: "car",
    value: "xe hơi",
  },
  {
    key: "bicycle",
    value: "xe đạp",
  },
  {
    key: "motorcycle",
    value: "xe máy",
  },
  {
    key: "person",
    value: "người",
  },
  {
    key: "chair",
    value: "ghế",
  },
  {
    key: "dining table",
    value: "bàn ăn",
  },
  {
    key: "cup",
    value: "cốc",
  },
  {
    key: "bottle",
    value: "chai",
  },
  {
    key: "cell phone",
    value: "điện thoại",
  },
  {
    key: "microwave",
    value: "lò vi sóng",
  },
  {
    key: "oven",
    value: "lò nướng",
  },
  {
    key:"clock",
    value:"đồng hồ"
  },{
    key:"dog",
    value:"chó"
  },
  {
    key:"laptop",
    value:"laptop"
  },
  {
    key:'remote',
    value:'remote'
  },{
    key:"refrigerator",
    value:"tủ lạnh"
  }
  ,{
    key:"tv",
    value:"tivi"
  }
]
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/uploads");
  },
  filename: (req, file, callBack) => {
    callBack(null, `${Date.now()}_${file.originalname}`);
  },
});
const unlinkAsync = promisify(fs.unlink);

const upload = multer({ storage: storage });
router.post("/search", upload.single("file"), async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let re = await objectDetection(req.file.path);
  //Remove file after use
  let text = "";
  re.forEach((element) => {
    text = element.class;
  });
  await unlinkAsync(req.file.path);
  console.log(text);
  text = cocoModel.find((item) => item.key === text)?.value;
  if (text !== undefined) {
    return res.status(200).json({ success: true, key: text});
  }
  else{
    return res.status(400).json({ success: false });
  }
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
