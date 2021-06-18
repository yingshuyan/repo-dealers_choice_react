const { db, Author, Book, Reader } = require("../server/db");

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    const austen = await Author.create({ name: "Jane Austen" });
    const dums = await Author.create({ name: "Alexandre Dumas" });

    const lucy = await Reader.create({ name: "Lucy" });
    const moe = await Reader.create({ name: "Moe" });
    const deniz = await Reader.create({ name: "Deniz" });
    const silly = await Reader.create({ name: "Silly" });
    const meechi = await Reader.create({ name: "Meechi" });

    const emma = await Book.create({
      name: "Emma",
      bookUrl: "https://en.wikipedia.org/wiki/Emma_(novel)",
      authorId: 1,
      readerId: 2,
    });
    const pride = await Book.create({
      name: "Pride & Prejudice",
      bookUrl: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
      authorId: 1,
      readerId: 1,
    });
    const count = await Book.create({
      name: "The Count of Monte Cristo",
      bookUrl: "https://en.wikipedia.org/wiki/The_Count_of_Monte_Cristo",
      authorId: 2,
      readerId: 3,
    });
    const musketeers = await Book.create({
      name: "The Three Musketeers",
      bookUrl: "https://en.wikipedia.org/wiki/The_Three_Musketeers",
      authorId: 2,
      readerId: 1,
    });
  } catch (er) {
    console.log(er);
  }
};

syncAndSeed();
