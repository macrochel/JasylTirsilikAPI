const Paper = require('./models/Paper')
const Metal = require('./models/Metal')
const Plastic = require('./models/Plastic')
const Glass = require('./models/Glass')
const { validationResult } = require('express-validator')

class achivmentsController {

    async savePaper(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "error", errors})
            }
            const {hwid} = req.body;
            const candidate = await Paper.findOne({hwid})
            if (candidate) {
                return res.status(400).json({message: "exist"})
            }
            const achiv = new Paper({hwid})
            await achiv.save()
            return res.json({message: "saved"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'save error'})
        }
    }

    async saveMetal(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "error", errors})
            }
            const {hwid} = req.body;
            const candidate = await Metal.findOne({hwid})
            if (candidate) {
                return res.status(400).json({message: "exist"})
            }
            const achiv = new Metal({hwid})
            await achiv.save()
            return res.json({message: "saved"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'save error'})
        }
    }

    async savePlastic(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "error", errors})
            }
            const {hwid} = req.body;
            const candidate = await Plastic.findOne({hwid})
            if (candidate) {
                return res.status(400).json({message: "exist"})
            }
            const achiv = new Plastic({hwid})
            await achiv.save()
            return res.json({message: "saved"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'save error'})
        }
    }

    async saveGlass(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "error", errors})
            }
            const {hwid} = req.body;
            const candidate = await Glass.findOne({hwid})
            if (candidate) {
                return res.status(400).json({message: "exist"})
            }
            const achiv = new Glass({hwid})
            await achiv.save()
            return res.json({message: "saved"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'save error'})
        }
    }

    async getPaper(req, res) {
        try {
            const {hwid} = req.body 
            const achivments = await Paper.findOne({hwid})
            if (achivments) {
                return res.status(200).json({achivments})
            }

            else {
                return res.status(400).json({message: 'false'})
            }
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'false'})
        }
    }

    async getMetal(req, res) {
        try {
            const {hwid} = req.body 
            const achivments = await Metal.findOne({hwid})
            if (achivments) {
                return res.status(200).json({achivments})
            }

            else {
                return res.status(400).json({message: 'false'})
            }
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'false'})
        }
    }

    async getPlastic(req, res) {
        try {
            const {hwid} = req.body 
            const achivments = await Plastic.findOne({hwid})
            if (achivments) {
                return res.status(200).json({achivments})
            }

            else {
                return res.status(400).json({message: 'false'})
            }
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'false'})
        }
    }

    async getGlass(req, res) {
        try {
            const {hwid} = req.body 
            const achivments = await Glass.findOne({hwid})
            if (achivments) {
                return res.status(200).json({achivments})
            }

            else {
                return res.status(400).json({message: 'false'})
            }
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'false'})
        }
    }

    async updatePaper(req, res){
        try{
            const {hwid, count} = req.body
            const app = await Paper.updateOne({'hwid': hwid }, {$set: {'count': count} });
            res.json({message: `Updated`})
        } catch(e){
            console.log(e)
        }
    }

    async updateMetal(req, res){
        try{
            const {hwid, count} = req.body
            const app = await Metal.updateOne({'hwid': hwid }, {$set: {'count': count} });
            res.json({message: `Updated`})
        } catch(e){
            console.log(e)
        }
    }

    async updatePlastic(req, res){
        try{
            const {hwid, count} = req.body
            const app = await Plastic.updateOne({'hwid': hwid }, {$set: {'count': count} });
            res.json({message: `Updated`})
        } catch(e){
            console.log(e)
        }
    }

    async updateGlass(req, res){
        try{
            const {hwid, count} = req.body
            const app = await Glass.updateOne({'hwid': hwid }, {$set: {'count': count} });
            res.json({message: `Updated`})
        } catch(e){
            console.log(e)
        }
    }
}

module.exports = new achivmentsController()