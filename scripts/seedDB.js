const mongoose = require("mongoose");
const db = require("../models");

// Insert example book data for testing

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "The Hunger Games",
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: ["J. K. Rowling"],
    description: "For twelve long years, the dread fortress of Azkaban held an infamous prisoner named Sirius Black. Convicted of killing thirteen people with a single curse, he was said to be the heir apparent to the Dark Lord, Voldemort. Now he has escaped, leaving only two clues as to where he might be headed: Harry Potter's defeat of You-Know-Who was Black's downfall as well. And the Azkaban guards heard Black muttering in his sleep, He's at Hogwarts . . . he's at Hogwarts. Harry Potter isn't safe, not even within the walls of his magical school, surrounded by his friends. Because on top of it all, there may well be a traitor in their midst.",
    image: "https://books.google.com/books/content?id=swJWQ5qq804C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70DmikZRgmqAK-1eeN4T05-vDu05ydw7lGwheO2_MyGao9ep_6ZKt5Up8RbZ-Ikv_quiTpZ0UUck3czXN_-kToEGR_UclCEJ4p-SQ6S1pBB4ee78fek6hDF9p9hwdV6Lvrj2n3R",
    link: "https://books.google.com/books?id=swJWQ5qq804C&dq=title:harry+potter+prisoners&hl=en&sa=X&ved=0ahUKEwj1k7Oo7K_jAhXIiVQKHWDfAy8Q6AEIKjAA"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
