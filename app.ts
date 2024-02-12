import userRoutes from './src/routes/user.router';
import { sequelize, test } from './src/config/database'; 

import express from 'express';
import axios from 'axios';


const app = express();
const port = 3000;

console.log('El servidor esta inciando....................');

test();

sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos establecida'))
  .catch((error: any) => console.error('No se pudo conectar a la base de datos:', error));

sequelize.sync().then(() => {
    console.log('Conexión a la base de datos establecida y modelos sincronizados');
  }).catch((error) => {
    console.error('No se pudo establecer conexión con la base de datos:', error);
  });

app.use(express.json());
app.use('/api', userRoutes);


//test de conexion a la base de datos


app.get('/data', async (req: any, res: any) => {
    try {
        const response = await axios.get('https://swapi.dev/api/people/1');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al recuperar datos de la API');
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

//test conection to data base mysql
// import { sequelize } from './src/config/database';
// sequelize.authenticate()
//   .then(() => console.log('Conexión a la base de datos establecida'))




// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// mongooseApp.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Conexión a MongoDB establecida"))
//   .catch((err: any) => console.error("No se pudo conectar a MongoDB", err));

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");

//         // Create new users
//         const user1 = new UserModel({
//             username: 'JohnDoe',
//             email: 'john.doe@example.com',
//             password: 'password1'
//         });

//         const user2 = new UserModel({
//             username: 'JaneSmith',
//             email: 'jane.smith@example.com',
//             password: 'password2'
//         });

//         const user3 = new UserModel({
//             username: 'BobJohnson',
//             email: 'bob.johnson@example.com',
//             password: 'password3'
//         });

        
//         try {
//             console.log("Saving users to the database...");
            
//             // Save the users to the database
//             await UserModel.insertMany([user1, user2, user3]);
//         } catch (error) {
//             console.error("Failed to save users to the database:", error);
//         }

//     } catch (error) {
//         console.error("Failed to connect to MongoDB:", error);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

// const dbUser = process.env.DB_USER;
// const dbPass = process.env.DB_PASS;
// const dbName = process.env.DB_NAME;
// const uri = process.env.MONGODB_URI;

// console.log(uri);

// app.get('/data', async (req: any, res: any) => {
//     try {
//         const response = await axios.get('https://swapi.dev/api/people/1');
//         res.send(response.data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error al recuperar datos de la API');
//     }
// });

