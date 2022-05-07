import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import contactRoutes from "./contactRoutes.js"

import dotenv from 'dotenv'
dotenv.config()

import path, { dirname } from "path"
import { fileURLToPath } from 'url'

export default () => {
    const app = express()
    const corsOptions = { origin: process.env.FRONT_END }
    app.use(cors(corsOptions))

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    // add routes
    contactRoutes(app)

    // serve front end
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    app.use(express.static(path.join(__dirname, "./front/", "build")));

    app.get(["/", "/web", "/game", "/contact"], (req, res) => {
        res.sendFile(path.join(__dirname, "./front/", "build", "index.html"))
    })

    return app
}