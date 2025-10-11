import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request: Request) {
    try {

        const { message } = await request.json();
        if (!message) {
            return Response.json({ error: 'Message body is missing.' }, { status: 400 });
        }

        const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

        const result = await model.generateContent(message);
        const text = result.response.text();

        return Response.json({
            message: text,
            model: 'gemini-2.5-flash',
        });

    } catch (error) {
        console.error('Gemini API Error:', error.message);
        return Response.json(
            { error: 'Failed to generate response from AI model.' },
            { status: 500 }
        );
    }
}
