const router = require("express").Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const { users } = require("../database");

require("dotenv").config();

//sign up
router.post(
  "/signup",
  [
    check("email", "Invalid email").isEmail(),
    check("password", "Password must be atleast 6 chars long").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const { email, password } = req.body;

    //Validate user input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    //Validate if user already exists
    let user = users.find((user) => {
      return user.email === email;
    });
    if (user) {
      return res.status(400).json({
        errors: [
          {
            email: user.email,
            msg: "User already exists",
          },
        ],
      });
    }
    //Hashing password before saving to database
    const salt = await bcrypt.genSalt(10);
    console.log("salt:", salt);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("hashed password:", hashedPassword);

    users.push({
      email,
      password: hashedPassword,
    });

    //excluding sensitive info in JWT
    const accessToken = await JWT.sign(
      { email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "2h",
      }
    );

    res.json({
      accessToken,
    });
  }
);

//Get all users
router.get("/users", (req, res) => {
  res.json(users);
});

//Login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //Validate email
  let user = users.find((user) => {
    return user.email === email;
  });

  if (!user) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid credentials",
        },
      ],
    });
  }

  //Compare hashed password with the user password
  let isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({
      errors: [
        {
          msg: "Email or password is invalid",
        },
      ],
    });
  }

  //Send JWT
  const accessToken = await JWT.sign(
    { email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "2h",
    }
  );
  res.json({
    accessToken,
  });
});

module.exports = router;
