const express = require('express');
const axios = require('axios');
const User = require('./src/models/user.model.js');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = 3000;

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const uri = process.env.MONGODB_URI;

console.log(uri);

app.get('/data', async (req, res) => {
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



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // Create new users
        const user1 = new User({
            username: 'JohnDoe',
            email: 'john.doe@example.com',
            password: 'password1'
        });

        const user2 = new User({
            username: 'JaneSmith',
            email: 'jane.smith@example.com',
            password: 'password2'
        });

        const user3 = new User({
            username: 'BobJohnson',
            email: 'bob.johnson@example.com',
            password: 'password3'
        });

        
        try {
            // Save the users to the database
            await User.insertMany([user1, user2, user3]);
        } catch (error) {
            console.error("Failed to save users to the database:", error);
        }

    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);



