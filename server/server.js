import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react';
import { renderToString } from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom/server";

import App from '../src/App'

const app = express();
const PORT =8000;



app.use(express.static(
    path.resolve(__dirname, '..','build')
))

app.get('*',(req, res, next)=>{
    console.log(req.url);
    fs.readFile(path.resolve('./build/index.html'), 'utf-8',(err,data)=>{
        if(err) {
            console.log(err);
            return res
                .status(500)
                .send('error getting public index.html');
        }

        console.log("replacing")
        const html = data.replace(
            '<div id="root"></div>',
            `<div id="root"> ${renderToString(
                <Router location={req.url}>
                    <App/>
                </Router>
            )} </div>`
        )
        return res.status(200).send(html);
    })
})

app.listen(PORT, ()=>{
    console.log(`App launched on ${PORT}`);
})