import { connectDatabase } from "./config/database.js";
import app from "./app.js";

const PORT = process.env.PORT || 4000;

connectDatabase();

app.listen(PORT, () => {
  console.log(`Server working fine at http://localhost:${PORT}`);
});
