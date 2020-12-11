import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const divcard = document.querySelector('.cards')

axios.get(`https://api.github.com/users/mcampbell34`)

.then(data => {
 const myCard = cardCreator(data);
 divcard.append(myCard)
 console.log(data)

})
.catch(err => console.log(err))



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/




//   STEP 5: Now that you have your own card getting added to the DOM, either
//     follow this link in your browser https://api.github.com/users/<Your github name>/followers,
//     manually find some other users' github handles, or use the list found at the
//     bottom of the page. Get at least 5 different Github usernames and add them as
//     Individual strings to the friendsArray below.

//     Using that array, iterate over it, requesting data for each user, creating a new card for each
//     user, and adding that card to the DOM.
// */

const users = ['tetondan','dustinmyers', 'justsml','luishrd','bigknell']
// Array from outside .pushEach object inside of it/// 

  users.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
       .then(({data}) => {
    const userCard = cardCreator(data);
})
       .catch(err => console.log(err))
})
// try a for loop
// Use for reach loop to create the array then create another forEacch to add to DOM and create card /// 

const getData = [cards, img,cardInfo,  myName, gitName ,location,profile, followers, following,bio,pageLink ]

  getData.forEach(item => {
  cards.append(cardCreator(item))
  divcard.append(userCard)
}


//   STEP 3: Create a function that accepts a single object as its only argument.
//     Using DOM methods and properties, create and return the following markup:

//     <div class="card">
//         <img src={image url of user} />
//        <div class="card-info">
//        <h3 class="name">{users name}</h3>
//         <p class="username">{users user name}</p>
//         <p>Location: {users location}</p>
//         <p>Profile:
//           <a href={address to users github page}>{address to users github page}</a>
//         </p>
//         <p>Followers: {users followers count}</p>
//         <p>Following: {users following count}</p>
//         <p>Bio: {users bio}</p>
//       </div>
//     </div>
// */

  function cardCreator(object) {

  const cards = document.createElement('div'); 
  const img = document.createElement('img');
  const cardInfo = document.createElement('div'); 
  const myName = document.createElement('h3');
  const gitName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const pageLink = document.createElement('a');


  cards.classList.add('card');
  cardInfo.classList.add('card-info');
  myName.classList.add('name');
  gitName.classList.add('username');

   img.src = `${object.data.avatar_url}`; 
   myName.textContent = `Name: ${object.data.name}`;
   gitName.textContent = `Username: ${object.data.login}`;
   location.textContent = `Location: ${object.data.location}`;
   profile.textContent = 'Profile:';
   pageLink.textContent = `Link: ${object.data.html_url}`;
   followers.textContent = `Followers: ${object.data.followers}`;
   following.textContent = `Following: ${object.data.following}`;
   bio.textContent = `Bio: ${object.data.bio}`;


   cards.append(img); 
   cards.append(myName);
   cardInfo.append(gitName);
   cardInfo.append(location);
   cardInfo.append(profile);
   cards.append(pageLink);
   cards.append(followers);
   cardInfo.append(following);
   cardInfo.append(bio); 

   return cards; 

}  


//
//   List of LS Instructors Github username's:
//     tetondan
//     dustinmyers
//     justsml
//     luishrd
//     bigknell
