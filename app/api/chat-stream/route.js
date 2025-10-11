import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


export async function POST(request) {
    try {
        const { message } = await request.json();

        if (!message) {
            return new Response(JSON.stringify({ error: "Message body is missing." }), {
                status: 400,
            });
        }

        const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Use streaming version
        const streamResult = await model.generateContentStream(message);

        // Set up a ReadableStream for browser streaming
        const encoder = new TextEncoder();

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of streamResult.stream) {
                    const chunkText = chunk.text();
                    if (chunkText) {
                        controller.enqueue(encoder.encode(chunkText));
                    }
                }
                controller.close();
            },
        });

        // Return stream with proper headers
        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}