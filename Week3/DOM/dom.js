

let bookId = ['les_miserables',
    'quotations_to_make_you_think',
    'the_history_of_a_crime',
    'stand_and_deliver',
    'simple_rules_for_effective_communication',
    'happiness_at_work',
    'silence',
    'business_correspondence',
    'searching_for_truth'
];   



let bookInfo = {
    les_miserables: { id: 'les_miserables',  Img: 'https://s.s-bol.com/imgbase0/imagebase3/large/FC/8/5/5/5/9200000009735558.jpg', title: 'Les Miserables', language: 'French', author: 'Victor Hugo', date: '1985'},
    quotations_to_make_you_think: { id: 'quotations_to_make_you_think',Img: 'https://images.gr-assets.com/books/1396951704l/21614291.jpg',title: '100 quotations to make you think',language: 'English',author: 'Wolfgang Riebe',date: '2010'},
    the_history_of_a_crime: { id: 'the_history_of_a_crime', Img: 'https://pictures.abebooks.com/isbn/9781595690203-us-300.jpg', title: 'the history of crime ', language: 'English', author: 'Victor Hugo', date: '1960' },
    stand_and_deliver: { id: 'stand_and_deliver', Img: 'https://images-na.ssl-images-amazon.com/images/I/715waupuUYL.jpg', title: 'Stand And Deliver', language: 'English', author: 'Dale Carnegie', date: '2009' },
    simple_rules_for_effective_communication: { id: 'simple_rules_for_effective_communication', Img: 'https://dwtr67e3ikfml.cloudfront.net/bookCovers/1ac15eaea66523bbe9bc3ccd1aa592b344e92189', title: 'Simple Rules For Effective Communication', language: 'English', author: 'Jennifer Mosher', date: '2010' },
    happiness_at_work: { id: 'happiness_at_work', Img: 'https://images-na.ssl-images-amazon.com/images/I/41JJbroUdxL._SX337_BO1,204,203,200_.jpg', title: 'Happiness At Work', language: 'English', author: 'Srikumar Rao', date: '2010' },
    silence: { id: 'silence', Img: 'https://images-na.ssl-images-amazon.com/images/I/51PgR6CjA4L.jpg', title: 'Silence', language: 'English', author: 'Natasha Preston', date: '2012' },
    business_correspondence: { id: 'business_correspondence', Img: 'http://manybooks.net/automatic_covers/a/anon/anonetext05buscr10.jpg', title: 'Business Correspondence', language: 'English', author: 'Anonymous', date: '2009' },
    searching_for_truth: { id: 'searching_for_truth', Img: 'https://images.gr-assets.com/books/1436991575l/25916314.jpg', title: 'Searching For Truth', language: 'English', author: 'John Moore', date: '2011' }
};




 function makeIdFromTitle() {
     let ul = document.createElement('ul');
for (let i = 0; i < bookId.length; i++) {
         let id = bookId[i];
         let li = document.createElement('li');
         li.setAttribute('id', id);
         ul.appendChild(li);
     }
     console.log(ul);
      document.body.appendChild(ul);
 }
makeIdFromTitle();
 



function giveMeUl() {

    let ul = document.createElement('ul');

    ul.setAttribute('id', "listOfBook");



    for (let i = 0; i < bookId.length; i++) {

        const id = bookId[i];

        const title = bookInfo[id].title;

        const language = bookInfo[id].language;

        const author = bookInfo[id].author;
        const date = bookInfo[id].date;

        // HTML elements

        const li = document.createElement('li');

        const h1 = document.createElement('h1');

        const h3 = document.createElement('h3');

        let Img = document.createElement('Img');

        const p = document.createElement('p');

        const span = document.createElement('span');
        

        h1.innerHTML = title;

        p.innerHTML = 'language: ' + language;

        span.innerHTML = "by :" + author;

        h3.innerHTML = date;

        
        
        

        

        //ID inside  li

        li.setAttribute('id', id);

        li.setAttribute('class', 'bookItem');

        // inject them inside `ul`

        li.appendChild(h1);

        // create img

        for (let key of Object.keys(bookInfo[id]. Img)) {

            let valueOfKeys = bookInfo[id]. Img[key];

            //console.log(valueOfKeys);

            //console.log(key);

            if (id == key) {

                Img.src = valueOfKeys;

                Img.alt = key;

            }

        }

        ul.appendChild(li);

        li.appendChild(Img);

        li.appendChild(p);

        li.appendChild(span);
        li.appendChild(h3);

    }

    // Open console

    console.log(ul);

    document.body.appendChild(ul);



}

giveMeUl();



