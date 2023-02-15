//get all the main elements on the page
var page = document.querySelector(".page");
var pageHeader = document.querySelector(".page-header");
var studentList = document.querySelector(".student-list");
var eachStudent = document.querySelectorAll(".student-item");
var studentDetails = document.querySelector(".student-details");
var inputString = document.getElementById('inputSearch');

//Set the pages variable
var currentPage = 1;
var numPages = 0;
var studentsPerPage = 10;
var index;

//Recreate Search Element in Js
var searchBar = function createBar (searchString) {
    //Creating the three elements that make up the search bar
    var studentSearch = document.createElement("div");
    var input = document.createElement("input");
    var searchButton = document.createElement("button");
    var txtNode = document.createTextNode("Search");
    //Define the type of the entry
    input.type="text";
    //Set the attributes fro the different elements to make it easier to select them
    studentSearch.setAttribute("class", "student-search");
    input.setAttribute("id", "inputSearch");
    searchButton.setAttribute("id", "search-button");
    //Append all these elements to the page
    searchButton.appendChild(txtNode);
    studentSearch.appendChild(input);
    studentSearch.appendChild(searchButton);
    //Setting the placeholder for the searchButton
    input.placeholder = "Type name here..";

    //Return the main element which contains all the elements
    return studentSearch;
}

//Create static container for pagination in Js
var paginationFilter = function pageFilter (nbOfEntries) {
    //Create the static elements for the pagination
    var pagination = document.createElement('div');
    var ulList = document.createElement('ul');
    //Giving them attributes to select them easily
    pagination.setAttribute("class", "pagination");
    ulList.setAttribute("id", "pagelist");
    //Append the ulList to the main pagination div
    pagination.appendChild(ulList);
    //Return the main div that contains all the elements
    return pagination;
};

//Finding the number of students
var numberOfStudents = function () {
    var numberOfStudents = eachStudent.length;
    //Return the number of students
    return (numberOfStudents);
}

//Finding the number of pages
var numberOfPages = function () {
    //Divise the number of students by the number of students per pag
    var numberOfPages = parseInt(numberOfStudents() / studentsPerPage);
    //If there is a remaining to the above division then create an extra page
    if ( numberOfStudents() % studentsPerPage > 0 ){
        numPages += 1;
    }
    //Return the number of students
    return numberOfPages;
};

//Start by hiding all the students on the list
var hideAll = function () {
    for (var i = 0; i < numberOfStudents(); i++) {
        eachStudent[i].style.display = "none";
    }
};

//Then display only 10 intems per page
function showStudents (number) {
    for (var i = 0; i < studentsPerPage; i++) {
        index = number * studentsPerPage - studentsPerPage + i;
        eachStudent[index].style.display = "block";
    }
};

//Create the pagination links dynamically
function createPages () {

    for (var i = 0; i <= numberOfPages(); i++) {
        //Create the dynamic elements in the pagination
        var liList = document.createElement('li');
        var pageLink = document.createElement('a');
        //Set attributes to the pagination links & the li list
        pageLink.setAttribute("href", "#");
        pageLink.setAttribute("class", "link");
        liList.setAttribute("class", "pageLi");
        //Append the different elements to the static ulList
        var pagelist = document.getElementById("pagelist");
        pagelist.appendChild(liList);
        liList.appendChild(pageLink);
        //Create and appending the page numbers for the pagination
        var pageNumbers = document.createTextNode(i + 1);
        pageLink.appendChild(pageNumbers);

        pageLink.addEventListener("click", function(){
            var pageNumClicked = (this.innerHTML || this.innerText);
            changePage(pageNumClicked);
        }, false);
    }
    return i;
};

//Create the seach feature
var searchFunction = function searchFeature(searchString) {
    var eachStudentI;
    console.log("Is my search feature working?");
    //Get the value entered in the search box
    var inputString = document.getElementById('inputSearch');
    //Onkeyup we want to filter the content by the string entered in the search box dynamically
    inputString.onkeyup = function() {
        //toUpperCase to make it case insensitive
        var filter = inputString.value.toUpperCase();
        //loop through all the li's
        for (var i = 0; i < eachStudent.length; i++) {
            //Select the student name and retrieve the .innerText value
            var studentName = document.getElementsByTagName("h3");
            var studentInfo = studentName[i].innerText;

            //Display all the results where indexOf() does not return -1
            if (studentInfo.toUpperCase().indexOf(filter) != -1)  {
                eachStudent[i].style.display = 'list-item';
                //numberOfStudents = eachStudent[i]
                console.log(eachStudent);
            } else {
                eachStudent[i].style.display = 'none';
            }
        }
    }
}

//Global function to add all the elements onLoad of the page
function addElements() {

    pageHeader.appendChild(searchBar());
    page.appendChild(paginationFilter());

    var searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", searchFunction);
    //fadeIn();
    //noResults();
    hideAll()
    createPages();
    showStudents(1);
    searchFunction();
}
window.onload = addElements();