import { sequelize } from './config/database'; 
import express from 'express';
import AuthMiddleware from './middlewares/auth.middleware';
import { sequelizeSync, sequelizeAuth } from './utils/sequelize.utils';
import authRoutes from './routes/auth.router';
import apiRouter from './routes/main.routes';

const app = express();
const port = 3000;

sequelizeAuth(sequelize);
sequelizeSync(sequelize);

app.use(express.json());
app.use('/', authRoutes);
app.use('/', AuthMiddleware.authenticateToken, apiRouter)


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

// app.get('/test', async (req: any, res: any) => {
//   try {
//       const response = await axios.get('https://swapi.dev/api/people/1');
//       res.send(response.data);
//   } catch (error) {
//       console.error(error);
//       res.status(500).send('Error al recuperar datos de la API');
//   }
// });