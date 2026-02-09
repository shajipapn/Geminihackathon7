import { GoogleGenerativeAI } from "@google/generative-ai";

// 🗝️ 1. YOUR API KEY
const API_KEY = "AIzaSyB44-_rqP9cIaUlUFNKthvI-ih3Q8u4KZM"; 

// 🚀 2. THE 2026 MODEL (Gemini 1.5 is dead, use Gemini 3)
const MODEL_NAME = "gemini-2.5-flash";

async function start() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // We force 'v1' to ensure we hit the stable 2026 production servers
    const model = genAI.getGenerativeModel(
        { model: MODEL_NAME },
        { apiVersion: 'v1' } 
    );

    try {
        console.log(`⏳ Requesting ${MODEL_NAME}...`);
        
        const result = await model.generateContent("Say 'System Online' if you can hear me.");
        const response = await result.response;
        const text = response.text();

        console.log("----------------------------");
        console.log("✅ RESPONSE:", text);
        console.log("----------------------------");
    } catch (err) {
        console.error("❌ ERROR FOUND:");
        console.error(err.message);
    }
}

start();
