import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI("AIzaSyD_xI_TNAXLeI2IloqvVnfIeDu7mNk0Cc8");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const getEventNameSuggestions = async (input) => {
  try {
    const prompt = `Generate 5 creative and relevant event names based on this input: "${input}". 
      Format the response as a simple comma-separated list of event names. 
      Make them sound professional and appropriate for college events.
      Keep each suggestion under 50 characters.`;

    const result = await model.generateContent(prompt);
    return result.response.text()
      .split(',')
      .map(s => s.trim())
      .filter(s => s.length > 0)
      .slice(0, 5);
  } catch (error) {
    console.error('Error getting AI suggestions:', error);
    return [];
  }
};

export default {
  getEventNameSuggestions
};