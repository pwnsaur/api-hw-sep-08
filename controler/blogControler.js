import blogModel from '../models/blogModel.js';

export const createEntry = async (req, res) => {
  try {
    const newUser = new blogModel(req.body);
    await newUser.save();
    res.status(201).send('New user is created');
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
};

export const getAllEntries = async (req, res) => {
  try {
    const users = await blogModel.find({});
    res.status(202).json(users);
  } catch (error) {
    throw error;
  }
};

export const getEntryById = async (req, res) => {
  try {
    const user = await blogModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    throw error;
  }
};

export const deleteEntryById = async (req, res) => {
  try {
    await blogModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`User is deleted`);
  } catch (error) {
    throw error;
  }
};

export const deleteEntiesByCatName = async (req, res) => {
  try {
    await blogModel.deleteMany({ catName: req.body.catName });
    res.status(200).send(`entries deleted`);
  } catch (error) {
    throw error;
  }
};

export const updateEntry = async (req, res) => {
  try {
    const updateUser = await blogModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    throw error;
  }
};
