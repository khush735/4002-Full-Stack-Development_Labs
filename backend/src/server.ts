import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import employeeRoutes from "./routes/employeeRoutes";
import roleRoutes from "./routes/roleRoutes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Clerk authentication middleware
app.use(clerkMiddleware());

app.use("/api", employeeRoutes);
app.use("/api", roleRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
  console.log(`Departments endpoint: http://localhost:${PORT}/api/departments`);
  console.log(`Roles endpoint: http://localhost:${PORT}/api/roles`);
});