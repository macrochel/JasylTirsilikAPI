const Paper = require('./models/Paper')
const Metal = require('./models/Metal')
const Plastic = require('./models/Plastic')
const Glass = require('./models/Glass')
const { validationResult } = require('express-validator')
const { response } = require('express')

class achivmentsController {

    async savePaper(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.json({message: "error", errors})
            }
            const {hwid} = req.body;
            const candidate = await Paper.findOne({hwid})
            if (candidate) {
                return ResizeObserver.json({message: "exist"})
            }
            const achiv = new Paper({hwid})
            await achiv.save()
            return res.json({message: "saved"})
        } catch (e) {
            res.json({message: 'save error'})
        }
    }

    async saveMetal(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.json({message: "error", errors})
            }
            const {hwid} = req.body;
            const candidate = await Metal.findOne({hwid})
            if (candidate) {
                return ResizeObserver.json({message: "exist"})
            }
            const achiv = new Metal({hwid})
            await achiv.save()
            return res.json({message: "saved"})
        } catch (e) {
            res.json({message: 'save error'})
        }
    }

    async savePlastic(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return response.json({message: "error", errors})
            }
            const {hwid} = req.body;
            const candidate = await Plastic.findOne({hwid})
            if (candidate) {
                return res.json({message: "exist"})
            }
            const achiv = new Plastic({hwid})
            await achiv.save()
            return res.json({message: "saved"})
        } catch (e) {
            res.json({message: 'save error'})
        }
    }

    async saveGlass(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.json({message: "error", errors})
            }
            const {hwid} = req.body;
            const candidate = await Glass.findOne({hwid})
            if (candidate) {
                return res.json({message: "exist"})
            }
            const achiv = new Glass({hwid})
            await achiv.save()
            return res.json({message: "saved"})
        } catch (e) {
            res.json({message: 'save error'})
        }
    }

    async getPaper(req, res) {
        try {
            const {hwid} = req.body 
            const achivments = await Paper.findOne({hwid})
            if (achivments) {
                return res.json({achivments})
            }

            else {
                return res.json({message: 'false'})
            }
        } catch (e) {
            res.json({message: 'false'})
        }
    }

    async getMetal(req, res) {
        try {
            const {hwid} = req.body 
            const achivments = await Metal.findOne({hwid})
            if (achivments) {
                return res.json({achivments})
            }

            else {
                return resizeTo.json({message: 'false'})
            }
        } catch (e) {
            res.json({message: 'false'})
        }
    }

    async getPlastic(req, res) {
        try {
            const {hwid} = req.body 
            const achivments = await Plastic.findOne({hwid})
            if (achivments) {
                return res.json({achivments})
            }

            else {
                return res.json({message: 'false'})
            }
        } catch (e) {
            res.json({message: 'false'})
        }
    }

    async getGlass(req, res) {
        try {
            const {hwid} = req.body 
            const achivments = await Glass.findOne({hwid})
            if (achivments) {
                return res.json({achivments})
            }

            else {
                return res.json({message: 'false'})
            }
        } catch (e) {
            res.json({message: 'false'})
        }
    }

    async updatePaper(req, res){
        try{
            const {hwid, count} = req.body
            const app = await Paper.updateOne({'hwid': hwid }, {$set: {'count': count} });
            res.json({message: `Updated`})
        } catch(e){
            res.json({message: 'update error'})
        }
    }

    async updateMetal(req, res){
        try{
            const {hwid, count} = req.body
            const app = await Metal.updateOne({'hwid': hwid }, {$set: {'count': count} });
            res.json({message: `Updated`})
        } catch(e){
            res.json({message: 'update error'})
        }
    }

    async updatePlastic(req, res){
        try{
            const {hwid, count} = req.body
            const app = await Plastic.updateOne({'hwid': hwid }, {$set: {'count': count} });
            res.json({message: `Updated`})
        } catch(e){
            res.json({message: 'update error'})
        }
    }

    async updateGlass(req, res){
        try{
            const {hwid, count} = req.body
            const app = await Glass.updateOne({'hwid': hwid }, {$set: {'count': count} });
            res.json({message: `Updated`})
        } catch(e){
            res.json({message: 'update error'})
        }
    }
}

module.exports = new achivmentsController()