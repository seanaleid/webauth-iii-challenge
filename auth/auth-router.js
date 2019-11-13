const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const { validateUser } = require('../users/users-validation.js');
const { generateToken } = require('./generate-token.js');

// for endpoints beginning with /api/auth
router.post('/register', (req, res) => {
    let user = req.body;

    const validateResult = validateUser(user);

    if(validateResult.isSuccessful === true) {
        const hash = bcrypt.hashSync(user.password, 12);
        user.password = hash;

        Users.add(user)
            .then(saved => {
                res.status(201).json(saved);
            })
            .catch(error => {
                res.status(500).json(error)
            });
    } else {
        res.status(400).json({ message: 'Invalid information about the user, see errors for details', errors: validateResult})
    }
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user.username);
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials!' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

