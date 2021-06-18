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
                1.
                2. middleswares: app.use("/api/authors",require"./db")
                3.

            main.js:
                1. add "start":"nodemon server/main.js" to package.json
                2. require("express")--> app.listen(port, ()=> { console.log(`listening to port`)})

frontend-->

    install
        npm i webpack && webpack-cli
        npm i sequelize && express && pg && nodemon
