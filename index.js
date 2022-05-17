const express = require('express');
const app = express();
const port = 5000;

const bodyParser = require('body-parser');
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true})); // url형식의 데이터를 분석해서 가져올 수 있게함
app.use(bodyParser.json()); // json형식의 데이터를 분석해서 가져올 수 있게함

const config = require('./config/key');

const mongoose = require('mongoose');
mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...')).catch(err => console.log(err))


app.get('/', (req, res) => res.send("Hello World"));

app.post('/register', (req, res) => {
    const user = new User(req.body)
    user.save((err, userInfo) => {
        if(err){
            return res.json({succees: false, err})
        }
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));