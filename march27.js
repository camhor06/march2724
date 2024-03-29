const imageContainer=document.getElementById('image-container');
const loader= document.getElementById('loader');

let photosArray = [];

const count=10;
const apiKey= 'sAiHsbw_HATuQHbajL1IwejIc1wMAeVehnxPxtNy_ZM';
//unsplash
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
//create elements for links and photos, add to dom.
function displayPhotos(){
  // run function for each object in photosArray
  photosArray.forEach((photo)=>{
    //create <a> to link to unsplash
    const item= document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    //create <img> for photo
    const img= document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    // put <img> inside <a>, then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//get photos from unsplash api
async function getPhotos(){
  try{
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
    

  }catch (error){

  }
}
getPhotos();