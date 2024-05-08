import express from "express";
import bookRoutes from "./main/routes/bookRoutes";

const app = express();
app.use(express.json());
app.use(bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
