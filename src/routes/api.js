const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/appController');
const payCtrl = require('../controllers/paymentController');
const auth = require('../middleware/auth');

router.get('/analytics', auth, ctrl.getAnalytics);
router.post('/payment/qris', auth, payCtrl.createQris);
router.post('/payment/va', auth, payCtrl.createVa);
router.post('/payment/webhook', payCtrl.handleWebhook);

router.get('/surat_cinta', auth, ctrl.getAllSurat_Cinta);
router.post('/surat_cinta', auth, ctrl.createSurat_Cinta);
router.delete('/surat_cinta/:id', auth, ctrl.deleteSurat_Cinta);
router.get('/kenangan', auth, ctrl.getAllKenangan);
router.post('/kenangan', auth, ctrl.createKenangan);
router.delete('/kenangan/:id', auth, ctrl.deleteKenangan);
router.get('/janji', auth, ctrl.getAllJanji);
router.post('/janji', auth, ctrl.createJanji);
router.delete('/janji/:id', auth, ctrl.deleteJanji);

module.exports = router;