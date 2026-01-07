import fs from "fs";
import { analyzeStreetImage } from "./analyzeStreet.js";

// read test image
const imageBuffer = fs.readFileSync("sample.jpg");
const imageBase64 = imageBuffer.toString("base64");

(async () => {
  try {
    const result = await analyzeStreetImage(imageBase64);
    console.log("AI Analysis Result:");
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error("Error:", err);
  }
})();
