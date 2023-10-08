export const quotes = [
  {
    name: '"Šťastný je ten, kdo najde radost ve své práci."',
    author: 'Albert Einstein',
  },

  {
    name: '"Život je krátký, a my bychom měli trávit čas tím, co nás naplňuje štěstím."',
    author: 'Unknow',
  },

  {
    name: '"Největší dobrodružství je objevovat sama sebe."',
    author: 'Ralph Waldo Emerson',
  },

  {
    name: '"Snaž se být změnou, kterou chceš vidět ve světě."',
    author: 'Mahátma Gándhí',
  },

  {
    name: '"Nikdy není pozdě stát se tím člověkem, kterým bys měl být."',
    author: 'George Eliot',
  },
];

export const renderQuotes = (index) => {
  const titleElm = document.querySelector('h1');
  const paragraphElm = document.querySelector('p');

  titleElm.innerHTML = quotes[index].name;
  paragraphElm.innerHTML = quotes[index].author;
};
