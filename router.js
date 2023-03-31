const Router = require('express')
const router = new Router()
const AchivmentsController = require('./achivmentsController')

//AchivmentsController
router.post('/save', AchivmentsController.saveAll)

router.post('/getPaper', AchivmentsController.getPaper)
router.post('/getMetal', AchivmentsController.getMetal)
router.post('/getPlastic', AchivmentsController.getPlastic)
router.post('/getGlass', AchivmentsController.getGlass)

router.post('/updatePaper', AchivmentsController.updatePaper)
router.post('/updateMetal', AchivmentsController.updateMetal)
router.post('/updatePlactic', AchivmentsController.updatePlastic)
router.post('/updateGlass', AchivmentsController.updateGlass)

module.exports = router