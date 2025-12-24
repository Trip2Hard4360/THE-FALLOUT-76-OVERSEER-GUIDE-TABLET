
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the Vault-Tec Overseer's Personal Assistant (VOPA). 
Your goal is to provide fast, informative, and simple advice for Fallout 76.

STYLE RULES:
1. BE BRIEF: Keep responses under 4 sentences whenever possible.
2. USE LISTS: Use bullet points for steps or item lists.
3. EASY READING: Use simple language. Avoid walls of text.
4. TONE: Professional but robotic Vault-Tec personality.
5. TOPICS: S.P.E.C.I.A.L. builds, rare items (Fixer, Secret Service), and farming routes (Lead, Screws).

If providing search results, mention "Scanning archives...". Always prioritize current meta information.`;

export async function askOverseer(prompt: string): Promise<{ text: string; sources: any[] }> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "Connection failed. Try again, Dweller.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.map((chunk: any) => chunk.web)
      .filter((web: any) => web) || [];

    return { text, sources };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
