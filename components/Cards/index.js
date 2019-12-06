// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        console.log("step 3");
        console.log(response.data);
        Object.values(response.data.articles).forEach(i_topics => {
            console.log(i_topics);
        i_topics.forEach(item => {
        cardCreator(item.headline, item.authorName, item.authorPhoto);


      });

        });
       });



// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//


    function cardCreator(i_headLine, i_author, i_image ){
        const card = document.createElement('div');
        const headLine = document.createElement('div');
        const author = document.createElement('div');
        const imgCont = document.createElement('div');
        const image = document.createElement('img');
        const nameSpan = document.createElement('span');

        card.classList.add('card');
        headLine.classList.add('headline');
        author.classList.add('author');
        imgCont.classList.add('img-container');

        headLine.innerText = i_headLine;
        nameSpan.innerText = "By " + i_author;
        image.src = i_image;
        
        
        card.appendChild(headLine);
        card.appendChild(author);
        author.appendChild(imgCont);
        imgCont.appendChild(image);
        author.appendChild(nameSpan);
        
        
        document.querySelector('.cards-container').appendChild(card);


    }
// Create a card for each of the articles and add the card to the DOM.
