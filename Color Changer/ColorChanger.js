let color = document.querySelectorAll(".color");

const body = document.body;


console.log(typeof(color));
color.forEach((divElement) => {
    divElement.addEventListener("mouseover", ()=>{
        const colorName = divElement.id;
        body.style.backgroundColor = colorName;

       
        console.log(`backgroung Color Changed to ${colorName}`);
    });
});