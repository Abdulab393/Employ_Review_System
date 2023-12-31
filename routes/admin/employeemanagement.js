const express = require('express');
const router = express.Router();
const empMngController = require('../../controller/admin/employeeManagementController');

router.get('/viewAllEmployee',empMngController.demo);
router.get('/Update-emloyee-profile/:empid',empMngController.updateEmployeeProfile);
router.get('/ReviewView/:id',empMngController.AdminReviewView)
router.get('/deleteAnEmployee/:id',empMngController.deleteAnEmployee);

router.post('/update-form/:id',empMngController.updateEmpInfo_form);
router.post('/updateReview-form',empMngController.updateReviewForm);

module.exports = router;