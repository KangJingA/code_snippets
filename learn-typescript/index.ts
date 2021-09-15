// install @types/express
// import express instead
import express from 'express';
const app = express();

app.get('/', (_req,res) =>{
    res.send("server is working")
})
app.get('/ping', (_req, res) => {
  res.send('pong');
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});