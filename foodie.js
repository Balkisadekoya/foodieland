const heroSectionData = [
    {
        imgPath: "url('./images/Mask\ Group.png')",
        contentText: "Spicy delicious chicken wings",
        profileImg: "url('./images/Ellipse 2.png')",
        profileText: "John Smith",
        date: "15th March 2024",
        food: "Chicken",
    },

    {
        imgPath: "url('./images/image 26.png')",
        contentText: "Fried Rice",
        profileImg: "url('./images/Ellipse 23.png')",
        profileText: "Anita Karis",
        date: "17th May 2024",
        food: "Fried Rice",
    },
    {
        imgPath: "url('./images/Rectangledesert.png')",
        contentText: "Grilled Beef",
        profileImg: "url('./images/Ellipse 7.png')",
        profileText: "James Tom",
        date: "22nd July 2024",
        food: "Beef",


    }

]
//grab the html element
const imgElem = document.getElementById("pics");
const contentElem = document.querySelector(".content");
const profileImgElem = document.getElementById("image");
const profileTextElem = document.getElementById("name");
const dateElem = document.getElementById("date");
const foodElem = document.getElementById("food")

//set the initial position to 0
let index = 0;

function updateContainerElem() {
    //destrUct the heroData
    const {imgPath, contentText, profileImg, profileText, date, food } = heroSectionData[index];
    imgElem.style.backgroundImage = imgPath;
    contentElem.innerText = contentText;
    profileImgElem.scr = profileImg;
    profileTextElem.innerText =  profileText;
    dateElem.innerText = date;
    foodElem.innerText = food;
    
    index++;

    if(index === heroSectionData.length){
        index = 0;
    }

    setTimeout(() => {
        updateContainerElem()
    }, 3000)
}

updateContainerElem();