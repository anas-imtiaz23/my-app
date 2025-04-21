// // // const express = require('express');
// // // const { body, validationResult } = require('express-validator');
// // // const User = require('../models/User');
// // // const Favorite = require('../models/Favorite');
// // // const mongoose = require("mongoose"); // Add this line
// // // const ObjectId = mongoose.Types.ObjectId;
// // // const jwt = require('jsonwebtoken');
// // // const JWT_SECRET = 'anasisagood$boy'; // ✅ Fixed typo
// // // const bcrypt = require('bcryptjs');
// // // import fetchuser from '../Middleware/fetchuser';
// // // const router = express.Router();

// // // // @route   POST /api/signup
// // // // @desc    Register new user
// // // router.post(
// // //   '/signup',
// // //   [
// // //     body('name', 'Name is required').notEmpty(), // ✅ Changed 'check' to 'body'
// // //     body('email', 'Please enter a valid email').isEmail(),
// // //     body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
// // //   ],
// // //   async (req, res) => {
// // //     const errors = validationResult(req);
// // //     if (!errors.isEmpty()) {
// // //       return res.status(400).json({ errors: errors.array() });
// // //     }

// // //     const { name, email, password } = req.body;

// // //     try {
// // //       let user = await User.findOne({ email });
// // //       if (user) {
// // //         return res.status(400).json({ msg: 'User already exists' });
// // //       }

// // //       // Hash password
// // //       const salt = await bcrypt.genSalt(10);
// // //       const hashedPassword = await bcrypt.hash(password, salt);

// // //       // Create new user
// // //       user = new User({ name, email, password: hashedPassword });
// // //       await user.save();

// // //       res.status(201).json({ msg: 'User registered successfully' });
// // //     } catch (error) {
// // //       console.error(error.message);
// // //       res.status(500).send('Server Error');
// // //     }
// // //   }
// // // );

// // // // @route   POST /api/login
// // // // @desc    Login user
// // // router.post(
// // //   '/login',
// // //   [
// // //     body('email').isEmail().withMessage('The email is invalid'),
// // //     body('password').exists().withMessage('Password cannot be blank').isLength({ min: 6 }),
// // //   ],
// // //   async (req, res) => {
// // //     let success = false; // ✅ Fixed capitalization

// // //     // Validate input
// // //     const errors = validationResult(req);
// // //     if (!errors.isEmpty()) {
// // //       return res.status(422).json({ errors: errors.array() });
// // //     }

// // //     const { email, password } = req.body;

// // //     try {
// // //       let user = await User.findOne({ email });
// // //       if (!user) {
// // //         return res.status(400).json({ success, error: "Invalid email or password" });
// // //       }

// // //       const passwordCompare = await bcrypt.compare(password, user.password);
// // //       if (!passwordCompare) {
// // //         return res.status(400).json({ success, error: "Invalid email or password" });
// // //       }

// // //       const data = {
// // //         user: {
// // //           id: user.id,
// // //         },
// // //       };

// // //       const authtoken = jwt.sign(data, JWT_SECRET);
// // //       success = true;
// // //       res.json({ success, authtoken });
// // //     } catch (error) {
// // //       console.error(error.message);
// // //       res.status(500).send("Internal server error");
// // //     }
// // //   }
// // // );

// // // // Favorites routes
// // // router.post('/favorites', requireAuth, async (req, res) => {
// // //   try {
// // //     console.log('Received Data:', req.body);

// // //     let { userId, wallpaperId, webformatURL, largeImageURL } = req.body;

// // //     // Validate input
// // //     if (!userId || !wallpaperId || !webformatURL || !largeImageURL) {
// // //       return res.status(400).json({ message: 'Missing required fields' });
// // //     }

// // //     // Convert wallpaperId to ObjectId if necessary
// // //     if (!mongoose.Types.ObjectId.isValid(wallpaperId)) {
// // //       return res.status(400).saxsjson({ message: 'Invalid wallpaperId format' });
// // //     }

// // //     const newFavorite = new Favorite({
// // //       userId,
// // //       wallpaperId: new mongoose.Types.ObjectId(wallpaperId),
// // //       webformatURL,
// // //       largeImageURL
// // //     });

// // //     await newFavorite.save();
// // //     res.status(201).json(newFavorite); // Return the saved favorite object

// // //   } catch (error) {
// // //     console.error('Error adding favorite:', error);
// // //     res.status(500).json({ message: 'Internal Server Error', error: error.message });
// // //   }
// // // });

// // // router.delete('/favorites/:userId/:wallpaperId', requireAuth, async (req, res) => {
// // //   try {
// // //     const { userId, wallpaperId } = req.params;
    
// // //     if (!mongoose.Types.ObjectId.isValid(wallpaperId)) {
// // //       return res.status(400).json({ message: 'Invalid wallpaperId format' });
// // //     }

// // //     const result = await Favorite.deleteOne({ 
// // //       userId, 
// // //       wallpaperId: new mongoose.Types.ObjectId(wallpaperId) 
// // //     });

// // //     if (result.deletedCount === 0) {
// // //       return res.status(404).json({ message: 'Favorite not found' });
// // //     }

// // //     res.status(200).json({ message: 'Removed from favorites' });
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // });

// // // router.get('/favorites/:userId', requireAuth, async (req, res) => {
// // //   try {
// // //     const favorites = await Favorite.find({ userId: req.params.userId });
// // //     res.status(200).json(favorites);
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // });
  
// // // module.exports = router;

// // // const express = require('express');
// // // const { body, validationResult } = require('express-validator');
// // // const User = require('../models/User');
// // // const Favorite = require('../models/Favorite');
// // // const mongoose = require("mongoose");
// // // const jwt = require('jsonwebtoken');
// // // const bcrypt = require('bcryptjs');
// // // const fetchuser = require('../Middleware/fetchuser');

// // // const router = express.Router();
// // // const JWT_SECRET = 'anasisagood$boy';

// // // // @route   POST /api/signup
// // // // @desc    Register new user
// // // router.post(
// // //   '/signup',
// // //   [
// // //     body('name', 'Name is required').notEmpty(),
// // //     body('email', 'Please enter a valid email').isEmail(),
// // //     body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
// // //   ],
// // //   async (req, res) => {
// // //     const errors = validationResult(req);
// // //     if (!errors.isEmpty()) {
// // //       return res.status(400).json({ errors: errors.array() });
// // //     }

// // //     const { name, email, password } = req.body;

// // //     try {
// // //       let user = await User.findOne({ email });
// // //       if (user) {
// // //         return res.status(400).json({ msg: 'User already exists' });
// // //       }

// // //       const salt = await bcrypt.genSalt(10);
// // //       const hashedPassword = await bcrypt.hash(password, salt);

// // //       user = new User({ name, email, password: hashedPassword });
// // //       await user.save();

// // //       res.status(201).json({ msg: 'User registered successfully' });
// // //     } catch (error) {
// // //       console.error(error.message);
// // //       res.status(500).send('Server Error');
// // //     }
// // //   }
// // // );

// // // // @route   POST /api/login
// // // // @desc    Login user
// // // router.post(
// // //   '/login',
// // //   [
// // //     body('email', 'Enter a valid email').isEmail(),
// // //     body('password', 'Password cannot be blank').exists(),
// // //   ],
// // //   async (req, res) => {
// // //     let success = false;
// // //     const errors = validationResult(req);
// // //     if (!errors.isEmpty()) {
// // //       return res.status(422).json({ errors: errors.array() });
// // //     }

// // //     const { email, password } = req.body;

// // //     try {
// // //       let user = await User.findOne({ email });
// // //       if (!user) {
// // //         return res.status(400).json({ success, error: "Invalid email or password" });
// // //       }

// // //       const passwordCompare = await bcrypt.compare(password, user.password);
// // //       if (!passwordCompare) {
// // //         return res.status(400).json({ success, error: "Invalid email or password" });
// // //       }

// // //       const data = { user: { id: user.id } };
// // //       const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

// // //       success = true;
// // //       res.json({ success, authtoken });
// // //     } catch (error) {
// // //       console.error(error.message);
// // //       res.status(500).send("Internal Server Error");
// // //     }
// // //   }
// // // );

// // // // @route   POST /api/auth/favorites
// // // // @desc    Add a favorite wallpaper
// // // router.post('/favorites', fetchuser, async (req, res) => {
// // //   try {
// // //     const { wallpaperId, webformatURL, largeImageURL } = req.body;
// // //     const userId = req.user.id;

// // //     if (!wallpaperId || !webformatURL || !largeImageURL) {
// // //       return res.status(400).json({ message: 'Missing required fields' });
// // //     }

// // //     const newFavorite = new Favorite({
// // //       userId,
// // //       wallpaperId: new mongoose.Types.ObjectId(wallpaperId),
// // //       webformatURL,
// // //       largeImageURL,
// // //     });

// // //     await newFavorite.save();
// // //     res.status(201).json({ message: 'Favorite added', favorite: newFavorite });
// // //   } catch (error) {
// // //     console.error('Error adding favorite:', error);
// // //     res.status(500).json({ message: 'Internal Server Error' });
// // //   }
// // // });

// // // // @route   DELETE /api/auth/favorites/:wallpaperId
// // // // @desc    Remove a favorite wallpaper
// // // router.delete('/favorites/:wallpaperId', fetchuser, async (req, res) => {
// // //   try {
// // //     const userId = req.user.id;
// // //     const { wallpaperId } = req.params;

// // //     const result = await Favorite.deleteOne({ userId, wallpaperId });
// // //     if (result.deletedCount === 0) {
// // //       return res.status(404).json({ message: 'Favorite not found' });
// // //     }

// // //     res.status(200).json({ message: 'Removed from favorites' });
// // //   } catch (error) {
// // //     console.error('Error removing favorite:', error);
// // //     res.status(500).json({ message: 'Internal Server Error' });
// // //   }
// // // });

// // // // @route   GET /api/auth/favorites
// // // // @desc    Get all favorite wallpapers of a user
// // // router.get('/favorites', fetchuser, async (req, res) => {
// // //   try {
// // //     const userId = req.user.id;
// // //     const favorites = await Favorite.find({ userId });
// // //     res.status(200).json(favorites);
// // //   } catch (error) {
// // //     console.error('Error fetching favorites:', error);
// // //     res.status(500).json({ message: 'Internal Server Error' });
// // //   }
// // // });

// // // module.exports = router;
// // const express = require('express');
// // const { body, validationResult } = require('express-validator');
// // const User = require('../models/User');
// // const Favorite = require('../models/Favorite');
// // const mongoose = require("mongoose");
// // const jwt = require('jsonwebtoken');
// // const bcrypt = require('bcryptjs');
// // const fetchuser = require('../Middleware/fetchuser');

// // const router = express.Router();
// // const JWT_SECRET = 'anasisagood$boy';

// // // @route   POST /api/signup
// // // @desc    Register new user
// // router.post(
// //   '/signup',
// //   [
// //     body('name', 'Name is required').notEmpty(),
// //     body('email', 'Please enter a valid email').isEmail(),
// //     body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
// //   ],
// //   async (req, res) => {
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //       return res.status(400).json({ errors: errors.array() });
// //     }

// //     const { name, email, password } = req.body;

// //     try {
// //       let user = await User.findOne({ email });
// //       if (user) {
// //         return res.status(400).json({ msg: 'User already exists' });
// //       }

// //       const salt = await bcrypt.genSalt(10);
// //       const hashedPassword = await bcrypt.hash(password, salt);

// //       user = new User({ name, email, password: hashedPassword });
// //       await user.save();

// //       // Generate JWT token
// //       const data = { user: { id: user.id } };
// //       const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

// //       res.status(201).json({ msg: 'User registered successfully', authtoken });
// //     } catch (error) {
// //       console.error(error.message);
// //       res.status(500).send('Server Error');
// //     }
// //   }
// // );

// // // @route   POST /api/login
// // // @desc    Login user
// // router.post(
// //   '/login',
// //   [
// //     body('email', 'Enter a valid email').isEmail(),
// //     body('password', 'Password cannot be blank').exists(),
// //   ],
// //   async (req, res) => {
// //     let success = false;
// //     const errors = validationResult(req);
// //     if (!errors.isEmpty()) {
// //       return res.status(422).json({ errors: errors.array() });
// //     }

// //     const { email, password } = req.body;

// //     try {
// //       let user = await User.findOne({ email });
// //       if (!user) {
// //         return res.status(400).json({ success, error: "Invalid email or password" });
// //       }

// //       const passwordCompare = await bcrypt.compare(password, user.password);
// //       if (!passwordCompare) {
// //         return res.status(400).json({ success, error: "Invalid email or password" });
// //       }

// //       const data = { user: { id: user.id } };
// //       const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

// //       success = true;
// //       res.json({ success, authtoken });
// //     } catch (error) {
// //       console.error(error.message);
// //       res.status(500).send("Internal Server Error");
// //     }
// //   }
// // );

// // // @route   POST /api/auth/favorites
// // // @desc    Add a favorite wallpaper
// // router.post('/favorites', fetchuser, async (req, res) => {
// //   try {
// //     const { wallpaperId, webformatURL, largeImageURL } = req.body;
// //     const userId = req.user.id;

// //     if (!wallpaperId || !webformatURL || !largeImageURL) {
// //       return res.status(400).json({ message: 'Missing required fields' });
// //     }

// //     const newFavorite = new Favorite({
// //       userId,
// //       wallpaperId, // Keep as a string
// //       webformatURL,
// //       largeImageURL,
// //     });

// //     await newFavorite.save();
// //     res.status(201).json({ message: 'Favorite added', favorite: newFavorite });
// //   } catch (error) {
// //     console.error('Error adding favorite:', error);
// //     res.status(500).json({ message: 'Internal Server Error' });
// //   }
// // });

// // // @route   DELETE /api/auth/favorites/:wallpaperId
// // // @desc    Remove a favorite wallpaper
// // router.delete('/favorites/:wallpaperId', fetchuser, async (req, res) => {
// //   try {
// //     const userId = req.user.id;
// //     const { wallpaperId } = req.params;

// //     const result = await Favorite.deleteOne({ userId, wallpaperId });
// //     if (result.deletedCount === 0) {
// //       return res.status(404).json({ message: 'Favorite not found' });
// //     }

// //     res.status(200).json({ message: 'Removed from favorites' });
// //   } catch (error) {
// //     console.error('Error removing favorite:', error);
// //     res.status(500).json({ message: 'Internal Server Error' });
// //   }
// // });

// // // @route   GET /api/auth/favorites
// // // @desc    Get all favorite wallpapers of a user
// // router.get('/favorites', fetchuser, async (req, res) => {
// //   try {
// //     const userId = req.user.id;
// //     const favorites = await Favorite.find({ userId });
// //     res.status(200).json(favorites);
// //   } catch (error) {
// //     console.error('Error fetching favorites:', error);
// //     res.status(500).json({ message: 'Internal Server Error' });
// //   }
// // });

// // module.exports = router;
// const express = require('express');
// const { body, validationResult } = require('express-validator');
// const router = express.Router();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const fetchuser = require('../middleware/fetchuser');
// const User = require('../models/User');
// const Favorite = require('../models/Favorite');

// const JWT_SECRET = 'your-secret-key'; // Should be in environment variables
// router.post(
//   '/signup',
//   [
//     body('name', 'Name is required').notEmpty(),
//     body('email', 'Please enter a valid email').isEmail(),
//     body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { name, email, password } = req.body;

//     try {
//       let user = await User.findOne({ email });
//       if (user) {
//         return res.status(400).json({ msg: 'User already exists' });
//       }

//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);

//       user = new User({ name, email, password: hashedPassword });
//       await user.save();

//       // Generate JWT token
//       const data = { user: { id: user.id } };
//       const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

//       res.status(201).json({ msg: 'User registered successfully', authtoken });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

// // @route   POST /api/login
// // @desc    Login user
// router.post(
//   '/login',
//   [
//     body('email', 'Enter a valid email').isEmail(),
//     body('password', 'Password cannot be blank').exists(),
//   ],
//   async (req, res) => {
//     let success = false;
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.array() });
//     }

//     const { email, password } = req.body;

//     try {
//       let user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ success, error: "Invalid email or password" });
//       }

//       const passwordCompare = await bcrypt.compare(password, user.password);
//       if (!passwordCompare) {
//         return res.status(400).json({ success, error: "Invalid email or password" });
//       }

//       const data = { user: { id: user.id } };
//       const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

//       success = true;
//       res.json({ success, authtoken });
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   }
// );

// // Add favorite route with proper CORS headers
// router.post('/favorites', fetchuser, async (req, res) => {
//   try {
//     const { wallpaperId, webformatURL, largeImageURL } = req.body;
//     const userId = req.user.id;

//     if (!wallpaperId || !webformatURL || !largeImageURL) {
//       return res.status(400).json({ 
//         success: false,
//         message: 'Missing required fields' 
//       });
//     }

//     const newFavorite = new Favorite({
//       userId,
//       wallpaperId,
//       webformatURL,
//       largeImageURL,
//     });

//     await newFavorite.save();

//     // Set proper CORS headers
//     res
//       .header('Access-Control-Allow-Credentials', 'true')
//       .header('Access-Control-Allow-Origin')
//       .status(201)
//       .json({ 
//         success: true,
//         message: 'Favorite added', 
//         favorite: newFavorite 
//       });

//   } catch (error) {
//     console.error('Error adding favorite:', error);
//     res.status(500).json({ 
//       success: false,
//       message: 'Internal Server Error' 
//     });
//   }
// });

// // Get favorites route
// router.get('/favorites', fetchuser, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const favorites = await Favorite.find({ userId });

//     res
//       .header('Access-Control-Allow-Credentials', 'true')
//       .header('Access-Control-Allow-Origin')
//       .status(200)
//       .json({ 
//         success: true,
//         favorites 
//       });

//   } catch (error) {
//     console.error('Error fetching favorites:', error);
//     res.status(500).json({ 
//       success: false,
//       message: 'Internal Server Error' 
//     });
//   }
// });

// // Delete favorite route
// router.delete('/favorites/:wallpaperId', fetchuser, async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const { wallpaperId } = req.params;

//     const result = await Favorite.deleteOne({ userId, wallpaperId });
    
//     if (result.deletedCount === 0) {
//       return res.status(404).json({ 
//         success: false,
//         message: 'Favorite not found' 
//       });
//     }

//     res
//       .header('Access-Control-Allow-Credentials', 'true')
//       .header('Access-Control-Allow-Origin')
//       .status(200)
//       .json({ 
//         success: true,
//         message: 'Removed from favorites' 
//       });

//   } catch (error) {
//     console.error('Error removing favorite:', error);
//     res.status(500).json({ 
//       success: false,
//       message: 'Internal Server Error' 
//     });
//   }
// });

// module.exports = router;
const express = require('express');
const { body, validationResult } = require('express-validator');
const cors = require('cors'); // Import cors package
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchuser');
const User = require('../models/User');
const Favorite = require('../models/Favorite');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const JWT_SECRET = 'your-secret-key'; // Should be in environment variables

// CORS configuration
router.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

const app = express();

// Enable CORS middleware for all routes
// app.use(cors(corsOptions)); 

// @route   POST /api/signup
// @desc    Register user
router.post(
  '/signup',
  [
    body('name', 'Name is required').notEmpty(),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({ name, email, password: hashedPassword });
      await user.save();

      // Generate JWT token
      const data = { user: { id: user.id } };
      const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

      res.status(201).json({ msg: 'User registered successfully', authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   POST /api/login
// @desc    Login user
router.post(
  '/login',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success, error: "Invalid email or password" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ success, error: "Invalid email or password" });
      }

      const data = { user: { id: user.id } };
      const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Add favorite route with proper CORS headers
router.post('/favorites', async (req, res) => {
  try {
    const { wallpaperId, webformatURL, largeImageURL, userId } = req.body;

    // Check if already favorited
    const existing = await Favorite.findOne({
      user: userId,
      wallpaperId
    });

    if (existing) {
      return res.status(400).json({ msg: 'Wallpaper already in favorites' });
    }

    const favorite = new Favorite({
      user: userId,
      wallpaperId,
      webformatURL,
      largeImageURL
    });

    await favorite.save();
    res.json(favorite);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// Get favorites route
router.get('/favorites', async (req, res) => {
  try {
    const userId = req.query.userId;

    if (!userId) {
      return res.status(400).json({ msg: 'User ID is required' });
    }

    const favorites = await Favorite.find({ user: userId });
    res.json(favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// Delete favorite route
router.delete('/favorites/:wallpaperId', async (req, res) => {
  try {
    const { userId } = req.body; // or req.query if you're sending it via query params

    if (!userId) {
      return res.status(400).json({ msg: 'User ID is required' });
    }

    const favorite = await Favorite.findOneAndRemove({
      user: userId,
      wallpaperId: req.params.wallpaperId
    });

    if (!favorite) {
      return res.status(404).json({ msg: 'Favorite not found' });
    }

    res.json({ msg: 'Removed from favorites' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Store the uploaded images in the 'uploads' directory
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Create a unique name for the file (timestamp + original filename)
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

// Initialize Multer
const upload = multer({ storage });

// @route   POST /api/upload/image
// @desc    Upload an image manually
// @access  Public
router.post('/upload/image', upload.single('image'), (req, res) => {
  try {
    // If no file is uploaded
    if (!req.file) {
      return res.status(400).json({ msg: 'No image uploaded' });
    }

    // Create the URL to access the uploaded image
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.json({ msg: 'Image uploaded successfully', imageUrl });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
router.get('/images', (req, res) => {
  const directoryPath = path.join(__dirname, '../uploads');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan files');
    }

    const imageUrls = files.map(file => {
      return `${req.protocol}://${req.get('host')}/uploads/${file}`;
    });

    res.json(imageUrls);
  });
});
module.exports = router;

