import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", employeeRoutes);

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});