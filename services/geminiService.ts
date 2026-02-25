import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

// System instruction to give the bot a persona
const SYSTEM_INSTRUCTION = `
Eres NexaBot, el asistente virtual inteligente de Nexatech (Colombia).
Tu objetivo es ayudar a clientes potenciales y actuales a entender cómo Nexatech optimiza empresas mediante tecnología.

Información sobre Nexatech:
- Servicios Principales: 
  1. Desarrollo de Software a la Medida (Software de gestión, ERPs, CRMs).
  2. Automatización de Procesos (Eliminación de tareas manuales).
  3. Dashboards y Analítica (Visualización de datos estratégicos).
  4. Consultoría en Transformación Digital (Modernización de empresas).
  5. Soporte y Evolución de Sistemas (Mantenimiento y soporte técnico).
- Tono: Profesional, ejecutivo, servicial y tecnológico.
- Ubicación: Cartagena, Colombia (Manga calle 25 Nº 23-90).
- Contacto: Motiva siempre a los usuarios a agendar una evaluación gratuita en la sección de contacto o escribiendo a proyectos@nexatech.com.co.
- Diferencial: Nexatech entiende la ingeniería y la operación, no solo el código. Proporcionan control inteligente para optimizar procesos.

Reglas:
1. Sé conciso pero informativo.
2. Si te preguntan precios, indica que se requiere un diagnóstico previo para dar un presupuesto exacto.
3. No menciones que eres una IA de Google; eres NexaBot, el asistente oficial de Nexatech.
`;

export const sendMessageToGemini = async (history: any[], message: string): Promise<string> => {
  if (!apiKey) {
    return "Lo siento, la configuración del chatbot no está completa (falta API Key).";
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Hubo un error al procesar tu solicitud. Por favor intenta nuevamente.";
  }
};
