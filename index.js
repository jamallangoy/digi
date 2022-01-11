const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dal = require("./dal")

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())

const refreshTokens = []
const accessTokenSecret = 'ThankYouMITXProIGenuinelyAppreciateEverything';
const refreshTokenSecret = 'CongratulationsToTheClassOfJanuary2022';

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => { return u.email === email && u.password === password});

    if (user) {
        const accessToken = jwt.sign({ name: user.email }, accessTokenSecret, {expiresIn: '10m'})
        const refreshToken = jwt.sign({ name: user.email }, refreshTokenSecret)

        refreshTokens.push(refreshToken);

        res.json({
            accessToken,
            refreshToken,
        });
    } else {
        res.send('Username or password is incorrect')
    }
})

app.get('/account/create/:name/:email/:password', (req, res) => {
        dal.create(req.params.name, req.params.email, req.params.password)
            .then((user)=> {
                console.log(user)
                res.send(user)
            })
            .catch(err => console.log(err)
            )
})

// login user 
app.get('/account/login/:email/:password', function (req, res) {

    dal.login(req.params.email, req.params.password)
        .then((user) => {
            console.log(user)
            // if user exists, check password
            if(user.length > 0){
                if (user[0].password === req.params.password){
                    res.send(user[0]);
                }
                else{
                    res.send('Login failed: wrong password');
                }
            }
            else{
                res.send('Login failed: user not found');
            }
    })
    .catch(err => console.log(err))
    
});

app.get('/account/update/:email/:amount', function (req, res) {

    var amount = Number(req.params.amount);

    dal.update(req.params.email, amount)
        .then((response) => {
            console.log(response);
            res.send(response);
    })
    .catch(err => console.log(err))   
});


app.get('/account/all', (req, res) => {
   dal.all()
        .then((docs) => {
            console.log(docs)
            res.send(docs)
        })
        .catch(err => res.send(err))
})

app.get('/account/balance', (req, res) => {
    dal.currentUser()
         .then((docs) => {
             console.log(docs)
             res.send(docs)
         })
         .catch(err => res.send(err))
 })

const port = 3000
app.listen(port, (req, res)=>{
    console.log(`Server is Up and Running on ${port}`)
})