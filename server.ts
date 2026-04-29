import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, service, budget, message } = req.body;
    
    console.log("New Contact Submission:", { name, email, phone, service, budget, message });
    
    // In a real app, you'd use a service like SendGrid, Mailgun, or AWS SES here.
    // For this demo, we simulate success.
    
    res.json({ 
      success: true, 
      message: "Your message has been sent successfully. We will get back to you soon!" 
    });
  });

  app.post("/api/verify-email", (req, res) => {
    const { email } = req.body;
    console.log("Sending verification code to:", email);
    // Mock verification code
    res.json({ success: true, code: "123456" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
