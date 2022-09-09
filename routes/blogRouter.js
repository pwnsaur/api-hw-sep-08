import express from 'express';
import {
  createEntry,
  getAllEntries,
  getEntryById,
  deleteEntryById,
  updateEntry,
  deleteEntiesByCatName,
} from '../controler/blogControler.js';

const router = express.Router();

router.post('/create', createEntry);
router.get('/get', getAllEntries);
router.get('/get/:id', getEntryById);
router.put('/update/:id', updateEntry);
router.delete('/delete/:id', deleteEntryById);
router.delete('/delete', deleteEntiesByCatName);

export default router;
