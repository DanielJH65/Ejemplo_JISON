import express, { json } from "express";
import { interpreterRouter } from "./routes/interpreter";
import { corsMiddleware } from "./middlewares/cors";

const app = express();
app.disable("x-powered-by");
app.use(corsMiddleware());
app.use(json());

app.use("/interpreter", interpreterRouter);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.info(`Servidor escuchando en el puerto ${PORT}`);
});
