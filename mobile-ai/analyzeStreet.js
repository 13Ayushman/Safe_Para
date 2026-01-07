import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "./systemPrompt.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function analyzeStreetImage(imageBase64) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

  const result = await model.generateContent([
    { text: SYSTEM_PROMPT },
    {
      inlineData: {
        data: imageBase64,
        mimeType: "image/jpeg"
      }
    }
  ]);

  const rawText = result.response.text();
  return parseGeminiJSON(rawText);
}

// ---- JSON PARSER ---- (if only needed tho)
function parseGeminiJSON(text) {
  // Remove ```json ``` wrappers if Gemini adds them <DM>
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}
