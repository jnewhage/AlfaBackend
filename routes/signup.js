var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
const Data = require("../schema/Data");
const Data2 = require("../schema/Data2");
var Twitter = require('twitter');
const server = express();

var client = new Twitter({
    consumer_key: 'kJCHFwe6tK2mun5eHiZacFrlO',
    consumer_secret: '7aPQt2dayjANxGWblcJdrzrNEkHYfMY1UgVmM1XLLfJKzG228g',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAOWGOQEAAAAAJwCs06VN8gZH55quJSFxHY4u86U%3DA6rzoVv0VS7rIavStklsqknNoqADTth6jLRa8XBlyED0QsR39O'
});

const dbRoute =
    'mongodb+srv://dbUser:dbUserPassword@cluster0.fjsrn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useUnifiedTopology: true });
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let idAssign = 2;
let idAssign2 = 1;

let login = [
    { id: 1, email: "guest@gmail.com", password: "guest" }
    // { id: 2, brand: "Kia", model: "Stinger", year: 2020 },
    // { id: 3, brand: "Chevy", model: "SS", year: 2010 }
];

/* GET home page. */
router.get('/login/', function (req, res, next) {
    Data.find(function (err, data) {
        if (err) {
            return res.json({ success: false, errors: err });
        } else {
            return res.json({ success: true, info: data })
        }
    });
});


router.get('/change_password/', function (req, res, next) {
    Data.find(function (err, data) {
        if (err) {
            return res.json({ success: false, errors: err });
        } else {
            return res.json({ success: true, info: data })
        }
    });
});

router.get('/signup/', function (req, res, next) {
    Data.find(function (err, data) {
        if (err) {
            return res.json({ success: false, errors: err });
        } else {
            return res.json({ success: true, info: data })
        }
    });
});

//localhost:3001/dealership

router.post('/signup/', function (req, res, next) {
    // console.log("post")
    let newEmail = req.body.email;
    let newPassword = req.body.password;
    console.log({ id: idAssign, email: newEmail, password: newPassword });
    // dealership.push({ id: idAssign, year: newYear, brand: newBrand, model: newModel });

    let stuffToAdd = new Data();
    stuffToAdd.email = newEmail;
    stuffToAdd.password = newPassword;
    stuffToAdd.id = idAssign;

    stuffToAdd.save((err) => {
        console.log("save!")

        if (err) {
            console.log("err")

            return res.json({ success: false, error: err });
        } else {
            console.log("no err!")

            return res.json({ success: true })
        }
    })

    idAssign++;
})

router.delete('/checkout/', function (req, res, next) {
    let newDescription = req.body.description;
    let newPrice = req.body.price;
    //search in dealership for newYear, newModel, newBrand
    //OR search by ID
    //THEN delete entry
    Data2.findOneAndRemove({ description: req.body.description }, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true })
    })

})


router.put('/change_password/', function (req, res, next) {

    Data.findOneAndUpdate({ email: req.body.email }, { password: req.body.password }, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true })
    })
})


router.post('/electrical/', function (req, res, next) {

    let newDesc = req.body.description;
    let newPrice = req.body.price;

    console.log({ id: idAssign2, description: newDesc, price: newPrice });
    // dealership.push({ id: idAssign, year: newYear, brand: newBrand, model: newModel });

    let stuffToAdd = new Data2();
    stuffToAdd.description = newDesc;
    stuffToAdd.price = newPrice;
    stuffToAdd.id = idAssign2;

    stuffToAdd.save((err) => {
        console.log("save!")
        if (err) {
            console.log("err")
            return res.json({ success: false, error: err });
        } else {
            console.log("no err!")
            return res.json({ success: true })
        }
    })

    idAssign2 = idAssign2 + 1;
})

router.post('/engine/', function (req, res, next) {

    let newDesc = req.body.description;
    let newPrice = req.body.price;

    console.log({ id: idAssign2, description: newDesc, price: newPrice });
    // dealership.push({ id: idAssign, year: newYear, brand: newBrand, model: newModel });

    let stuffToAdd = new Data2();
    stuffToAdd.description = newDesc;
    stuffToAdd.price = newPrice;
    stuffToAdd.id = idAssign2;

    stuffToAdd.save((err) => {
        console.log("save!")
        if (err) {
            console.log("err")
            return res.json({ success: false, error: err });
        } else {
            console.log("no err!")
            return res.json({ success: true })
        }
    })

    idAssign2 = idAssign2 + 1;
})

router.post('/brakes/', function (req, res, next) {

    let newDesc = req.body.description;
    let newPrice = req.body.price;

    console.log({ id: idAssign2, description: newDesc, price: newPrice });
    // dealership.push({ id: idAssign, year: newYear, brand: newBrand, model: newModel });

    let stuffToAdd = new Data2();
    stuffToAdd.description = newDesc;
    stuffToAdd.price = newPrice;
    stuffToAdd.id = idAssign2;

    stuffToAdd.save((err) => {
        console.log("save!")
        if (err) {
            console.log("err")
            return res.json({ success: false, error: err });
        } else {
            console.log("no err!")
            return res.json({ success: true })
        }
    })

    idAssign2 = idAssign2 + 1;
})

router.get('/checkout/', function (req, res, next) {
    Data2.find(function (err, data) {
        if (err) {
            return res.json({ success: false, errors: err });
        } else {
            return res.json({ success: true, info: data })
        }
    });
});


router.get('/cart/', function (req, res, next) {
    Data2.find(function (err, data) {
        if (err) {
            return res.json({ success: false, errors: err });
        } else {
            return res.json({ success: true, info: data })
        }
    });
});

router.delete('/cart/', function (req, res, next) {
    let newDescription = req.body.description;
    let newPrice = req.body.price;
    //search in dealership for newYear, newModel, newBrand
    //OR search by ID
    //THEN delete entry

    Data2.findOneAndRemove({ description: req.body.description }, { price: req.body.price }, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true })
    })

})


router.get('/tweets/', function (request, res) {
    // var keyword = request.params.keyword;
    client.get('search/tweets', { q: "alfa repair", count: 5 }, function (error, data, response) {
        if (error) {
            console.log("Didn't work!")
        } else {
            // let statuses = data.statuses;
            for (let i = 0; i < 5; i++) {
                // res.send(statuses[i].text)
                if (error) {
                    return res.json({ success: false, error: err })
                } else {
                    // console.log(data)
                    return res.json({ success: true, info: data })
                }
            }
        }
    })
});

module.exports = router;