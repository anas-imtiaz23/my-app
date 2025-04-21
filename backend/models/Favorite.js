// const mongoose = require('mongoose');

// const FavoriteSchema = new mongoose.Schema({
//   userId: {
//     type: String,  // ✅ Change to String instead of ObjectId
//     required: true
//   },
//   wallpaperId: {
//     type: String,  // ✅ Change to String instead of ObjectId
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Favorite = mongoose.model('Favorite', FavoriteSchema);
// module.exports = Favorite;
const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  wallpaperId: {
    type: String,
    required: true
  },
  webformatURL: {  // Added to match frontend data
    type: String,
    required: true
  },
  largeImageURL: {  // Added to match frontend data
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add compound index to prevent duplicates
FavoriteSchema.index({ userId: 1, wallpaperId: 1 }, { unique: true });

const Favorite = mongoose.model('Favorite', FavoriteSchema);
module.exports = Favorite;