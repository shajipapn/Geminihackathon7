import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Replace with your actual key
const API_KEY = "AIzaSyB44-_rqP9cIaUlUFNKthvI-ih3Q8u4KZM"; 
const genAI = new GoogleGenerativeAI(API_KEY);

async function runChat() {
  try {
    // We force 'v1' because 'v1beta' is giving you 404 errors
    const model = genAI.getGenerativeModel(
      { model: "gemini-2.0-flash" },
      { apiVersion: "v1" }
    );

    const prompt = "Hello! Are you working?";

    console.log("⏳ Contacting Gemini...");
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("✅ Response:", text);

  } catch (error) {
    console.error("❌ Error Detail:");
    console.error(error.message);
  }
}

runChat();