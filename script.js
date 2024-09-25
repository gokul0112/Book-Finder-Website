// Click handler for search button
const captureSearchValue = () => {
  const name = document.getElementById('search-bar').value;
  return name;
};

// Filter books based on search input
const filterBooks = (searchValue, arrayofobjs) => {
  const filteredBooks =  flattenObjectValuesIntoArray(arrayofobjs);
  const arryofObjs = [];
  for (let i = 0;i<filteredBooks.length;i++){
      for(let j=0;j<filteredBooks[i].length;j++){
          if(filteredBooks[i][j] === searchValue){
              arryofObjs.push(arrayofobjs[i]);
          }
      }
  }
  return arryofObjs;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (listofobjs) => {
  const resultingDivs = [];
  for(let k = 0;k < listofobjs.length;k++){
      resultingDivs.push(structureBookAsHtml(listofobjs[k]));
  }
  return resultingDivs;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (objs) => {
  const searchValue = captureSearchValue();
  const listofobjs = filterBooks(searchValue,objs);
  const resultingVals = structureBooksAsHtml(listofobjs);
  renderBooksToDom(resultingVals);
};

// Grab search button from the DOM
var searchBtn = document.getElementById('search-btn');

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { 
  searchBtnClickHandler(books);
});

