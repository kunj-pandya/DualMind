# DualMind AI — Gemini + Next.js Chat App

A modern conversational AI web app built with **Next.js 14**, **Tailwind CSS**, and **Google’s Gemini API** (`@google/generative-ai`).  
It supports **normal chat** and **real-time streaming chat**, showing how you can connect a React frontend with the Gemini API backend.

---

## Features

- Interactive chat UI (Ask anything)
- Streaming chat (real-time typing effect)
- Non-stream chat (full response)

## Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | Next.js (React + App Router) |
| Styling | Tailwind CSS |
| Backend API | Next.js API Routes |
| AI Engine | Google Gemini API (`@google/generative-ai`) |
| Language | TypeScript / JavaScript |
| Runtime | Node.js |

---

## Folder Structure

dual-mind-ai/
│
├── app/
│ ├── api/
│ │ ├── chat/route.js # Non-stream API route
│ │ └── chat-stream/route.js # Stream API route
│ │
│ ├── page.jsx # Main frontend page
│ └── layout.jsx # Root layout
│
├── public/ # Static assets
├── .env.local # Gemini API key (not committed)
├── package.json
└── README.md
