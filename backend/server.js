import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import productRoutes from "./routes/routes.js";
import "./config/config.js";

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FRONTEND
app.use(express.static(path.join(__dirname, "public")));

// ROTAS API
app.use("/api/produtos", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Servidor rodando em http://localhost:${PORT}`)
);
