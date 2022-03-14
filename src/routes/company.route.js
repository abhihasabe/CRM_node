const express = require('express');
const router = express.Router();

const companysController = require('../controllers/company.controller');

// get all company
router.get('/', companysController.getCompanysList);

// get company by ID
router.get('/:id',companysController.getCompanyByID);

// create new company
router.post('/', companysController.createNewCompany);

// update company
router.put('/:id', companysController.updateCompany);

// delete company
router.delete('/:id',companysController.deleteCompany);

module.exports = router;