// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(response => {
  console.log(response.data);
  response.data.topics.forEach(item => {
    const newTab = tabStuff(item);
    document.querySelector('.topics').appendChild(newTab);
  });

})
.catch ( error => {
    console.log('Error:', error);
})
//  The tab component should look like this:
//    <div class="tab">topic here</div>
function tabStuff(item){

 const tabDiv = document.createElement('div');

 tabDiv.classList.add('tab');

 tabDiv.innerText = item;
 return tabDiv;
}