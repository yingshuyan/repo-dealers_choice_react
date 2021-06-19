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
      description: `Emma, by Jane Austen, is a novel about youthful hubris and romantic misunderstandings. It is set in the fictional country village of Highbury and the surrounding estates of Hartfield, Randalls and Donwell Abbey, and involves the relationships among people from a small number of families.[2] The novel was first published in December 1815, with its title page listing a publication date of 1816. As in her other novels, Austen explores the concerns and difficulties of genteel women living in Georgian–Regency England. Emma is a comedy of manners, and depicts issues of marriage, sex, age, and social status.
      Before she began the novel, Austen wrote, "I am going to take a heroine whom no one but myself will much like."[3] In the first sentence, she introduces the title character as "Emma Woodhouse, handsome, clever, and rich, with a comfortable home and a happy disposition... and had lived nearly twenty-one years in the world with very little to distress or vex her."[4] Emma is spoiled, headstrong, and self-satisfied; she greatly overestimates her own matchmaking abilities; she is blind to the dangers of meddling in other people's lives; and her imagination and perceptions often lead her astray.
      Emma, written after Austen's move to Chawton, was her last novel to be published during her lifetime,[5] while Persuasion, the last novel Austen wrote, was published posthumously.
      This novel has been adapted for a number of films, television programmes, and stage plays. `,
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
      description: `The Three Musketeers (French: Les Trois Mousquetaires [le tʁwɑ muskətɛːʁ]) is a French historical adventure novel written in 1844 by French author Alexandre Dumas. It is in the swashbuckler genre, which has heroic, chivalrous swordsmen who fight for justice.
      Set between 1625 and 1628, it recounts the adventures of a young man named d'Artagnan (a character based on Charles de Batz-Castelmore d'Artagnan) after he leaves home to travel to Paris, hoping to join the Musketeers of the Guard. Although d'Artagnan is not able to join this elite corps immediately, he is befriended by three of the most formidable musketeers of the age – Athos, Porthos and Aramis, "the three musketeers", or “the three inseparables” – and becomes involved in affairs of state and at court.
      The Three Musketeers is primarily a historical and adventure novel. However, Dumas frequently portrays various injustices, abuses, and absurdities of the Ancien Régime, giving the novel an additional political significance at the time of its publication, a time when the debate in France between republicans and monarchists was still fierce. The story was first serialised from March to July 1844, during the July Monarchy, four years before the French Revolution of 1848 violently established the Second Republic.
      The story of d'Artagnan is continued in Twenty Years After and The Vicomte of Bragelonne: Ten Years Later.`,
    });
  } catch (er) {
    console.log(er);
  }
};

syncAndSeed();
