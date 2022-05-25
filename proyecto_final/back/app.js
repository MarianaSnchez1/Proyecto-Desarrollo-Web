const { log } = require('console');
const express = require('express')
const bodyParser = require("body-parser");

const multer = require('multer');
const cors = require('cors');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const User = require('./modelos/user.model')

const path = require('path');

const app = express()
const { MongoClient } = require('mongodb');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var url = "mongodb://localhost:27017/proyecto1";

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage}).array('file');

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }

        return res.status(200).send(req.files)
    })
});

app.get('/', function (req, res) {
  res.send('El servidor esta corriendo..')
})

app.post('/api/registro', async (req, res) => {
    await mongoose.connect(url);
    console.log(req.body)
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
        })
        res.json({ status: 'ok' })
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

app.post('/api/login', async (req, res) => {
    await mongoose.connect(url);
    const user = await User.findOne({
        email: req.body.email,
    })

    if (!user) {
        return { status: 'error', error: 'Invalid login' }
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email,
            },
            'secret123'
        )

        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.get('/data', async function (req, res) {    //Para poder visualizar los datos con el url localhost:3000/data
    const client = new MongoClient(url);
    await client.connect();
    const collection = client.db().collection('proyecto1');

    const findResult = await collection.find({}).toArray();
    res.send(findResult);
     
})

app.post('/crear', async function (req, res) {

  const client = new MongoClient(url);
    await client.connect();
    const collection = client.db().collection('proyecto1');

    var recordatorio = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        status: 'pendiente'
    }

    res.send({message: "Se creo " + req.body.inmueble})

    collection.insertOne(recordatorio, function(err, res) {
        if (err) throw err;
        console.log("Se creo la cita exisotamente");
    });
})

app.get('/cambiar/:titulo' , async function (req, res) {
    const client = new MongoClient(url);
    await client.connect();
    const collection = client.db().collection('proyecto1');

    console.log(req.params)

    var myquery = { titulo: req.params.titulo };
    var newvalues = { $set: { status: "completada"} };

    res.send({message:"Se cambio: " + req.params.titulo})

    collection.updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
    });

})


MongoClient.connect(url, function(err, db) {

    if (err){ 
        throw err;
    }
    else{

        app.listen(5000);

        console.log("Hay conexión!");


        db.close();

    }
    
});
