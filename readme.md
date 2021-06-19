backend-->

    install
        npm init---> package.json
        npm i sequelize && express && pg && nodemon


    folder and files
        .ignore---> node_module

        bin:
            seed.js=> model.create({})
        server:
            db:
                db.js :
                    1. process.env.DATABASE_URL || "postgress://locolhost:5432/dealers-choice-react"
                individual module .js :
                    1. db.define(), then module.exports = moduleName
                    2. virtual field
                    3. model metod

                index.js:
                    1. require all the modules here also db. add associations here
                    2. self-associated relationship



            api:
                index.js

            index.js:
                1. middleware: app.use(express.statics(__dirname, "..", "public"))----> this is for any subconsequential request from the browser like src file in the <script />
                2. middlesware: app.use("/api/authors",require"./db")
                3. middleware: app.get("/",res.send(absolute path with main html)). need absolute path when using res.sendFile
                4.
                5.

            main.js:
                1. add "start":"nodemon server/main.js" to package.json
                2. require("express")--> app.listen(port, ()=> { console.log(`listening to port`)})

frontend-->

    install
        npm install react react-dom
        npm install --save-dev webpack && npm install --save-dev webpack-cli
        package.json: "buil": "webpack --watch" : watch for file changes
        npm install babel-loader @babel/core @babel/preset-react  --save-dev
        npm install axios

    folder and files
        webpack.config.js
            1. entry:index.js from client folder
            2. output: {path:__dirname,filename: "bundle.js"}
            3. module: {
                    rules: [
                            {test: /jsx?$/,
                            exclude: /node_modules/,
                            loader: "babel-loader",
                            options: {
                            presets: ["@babel/preset-react"],
                                    },
                            },
                                ],
                                    },
        client:
            1. index.js: reactDOM.render(main component, root element)
            2. main.js:
                1. is for <Main /> which is a class conponent
                2. use import react/axios from than require
                **3. react design process:
                    1.
            3. index.html: add <script src= "bundle" defer></script> the end of <head>

        public:
            1. bundle.js (created by webpack)
            2. stylesheet.js
