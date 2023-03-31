const Router = require('express')
const router = new Router()
const AchivmentsController = require('./achivmentsController')

//AchivmentsController
router.post('/savePaper', AchivmentsController.savePaper)
router.post('/saveMetal', AchivmentsController.saveMetal)
router.post('/savePlastic', AchivmentsController.savePlastic)
router.post('/saveGlass', AchivmentsController.saveGlass)

router.post('/getPaper', AchivmentsController.getPaper)
router.post('/getMetal', AchivmentsController.getMetal)
router.post('/getPlastic', AchivmentsController.getPlastic)
router.post('/getGlass', AchivmentsController.getGlass)

module.exports = router