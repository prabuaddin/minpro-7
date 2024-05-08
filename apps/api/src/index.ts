import express, { Express, NextFunction, Request, Response } from 'express';
import router from './routers';
import cors from 'cors';

const app: Express = express();
app.use(cors())
const port = 8000;

app.use(router)
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "success"
  })
})


// CENTRALIZE ERROR
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500
  const statusMessage = err.message || 'Error'

  res.status(statusCode).send({
    error: true,
    message: statusMessage,
    data: null
  })
})

app.listen(port, () => {
  console.log(`⚡[server]: Server is running at http://localhost:${port}`)
})