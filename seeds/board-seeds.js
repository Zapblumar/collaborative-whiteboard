const { User, Board } = require('../models');

const boarddata = [
  {
    user_id: 5,
    title: 'Far far away',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor.Aenean massa.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.Nullam dictum felis eu pede mollis pretium.Integer tincidunt.Cras dapibu',
    // board_content: insert JSON or string here
  },
  {
    user_id: 4,
    title: 'A wonderful serenity',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
    // board_content: insert JSON or string here
  },
  {
    user_id: 3,
    title: 'One morning, when Gregor Samsa woke from',
    description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was boBut I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bo',
    // board_content: insert JSON or string here
  },
  {
    user_id: 2,
    title: 'Nunc purus',
    description: 'Li lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplifica',
    // board_content: insert JSON or string here
  },
  {
    user_id: 1,
    title: 'Pellentesque eget nunc',
    description: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. E',
    // board_content: insert JSON or string here
  },
  {
    user_id: 5,
    title: 'The quick, brown fox jumps over a lazy',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Comma',
    // board_content: insert JSON or string here
  },
  {
    user_id: 1,
    title: 'In hac habitasse platea dictumst',
    description: 'A wonderful serenity has taken possession of my en'
    // board_content: insert JSON or string here
  },
  {
    user_id: 2,
    title: 'Morbi non quam nec dui luctus',
    description: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly.',
    // board_content: insert JSON or string here
  }
];

const seedBoards = () => Board.bulkCreate(boarddata);

module.exports = seedBoards;
