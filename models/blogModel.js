import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  catName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

export default mongoose.model('entry', blogSchema);
