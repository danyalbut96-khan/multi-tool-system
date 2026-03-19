# Multi-Tool SaaS Platform

This is a complete, production-ready Multi-Tool SaaS platform built with Next.js, Node.js, and Supabase.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- A Supabase Project ([supabase.com](https://supabase.com))

### 2. Backend Setup
1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env` and add your **Supabase Service Role Key** and **URL**.
4. `npm run dev` (Runs on port 5000)

### 3. Frontend Setup
1. `cd frontend`
2. `npm install`
3. Add your **Supabase Anon Key** and **URL** to your environment variables (or `.env.local`).
4. `npm run dev` (Runs on port 3000)

### 4. Database Setup
1. Go to your Supabase SQL Editor.
2. Paste and run the contents of `supabase/schema.sql`.

## 🛠️ Features
- **14+ Tools**: Image processing, PDF management, Dev utilities, and AI Lab.
- **Admin Dashboard**: Real-time usage tracking and user analytics.
- **Premium UI**: Responsive, high-performance design inspired by modern SaaS standards.
- **Secure Auth**: Integrated with Supabase Auth (Email & Google).
