const { Router } = require('express');
const router = Router();

// middlewares
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// controllers
const getAll = require('../controllers/borrowing/getAll');
const getAllPending = require('../controllers/borrowing/getAllPending');
const addOne = require('../controllers/borrowing/addOne');
const editStatus = require('../controllers/borrowing/editStatus');

router.get('/', verifyToken, isAdmin, getAll);
router.get('/pending', verifyToken, isAdmin, getAllPending);
router.post('/:bookId', verifyToken, addOne);
router.patch('/:id', verifyToken, isAdmin, editStatus);

module.exports = router;
