const express = require("express");
const router = express.Router();

const { Reader, Book, Author } = require("../db");

router.get("/authors", async (req, res, next) => {
  try {
    res.send(await Author.findAll());
  } catch (er) {
    next(er);
  }
});

router.get("/authors/:id", async (req, res, next) => {
  try {
    res.send(
      await Book.findAll({
        where: {
          authorId: req.params.id,
        },
      })
    );
  } catch (er) {
    next(er);
  }
});

router.get("/books", async (req, res, next) => {
  try {
    res.send(
      await Book.findAll({
        include: { all: true },
      })
    );
  } catch (er) {
    next(er);
  }
});

router.get("/readers", async (req, res, next) => {
  try {
    res.send(
      await Reader.findAll({
        include: { all: true },
      })
    );
  } catch (er) {
    next(er);
  }
});

module.exports = router;
