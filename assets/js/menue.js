function  productInfo(){ 

        var info;
        var total=0;
        var coffe_type={"Turkish coffee":3,"American coffee":5,"Iced latte":7,"turkish coffee":3,"american coffee":5,"iced latte":7};
        var imge=["assets/img/coffe1.jpeg","assets/img/coffe2.jpeg","assets/img/coffe3.webp","assets/img/coffe1.jpeg","assets/img/coffe2.jpeg","assets/img/coffe3.webp"]
        
        let images = document.querySelectorAll('img');          
        // Loop through all img elements and update their src attribute
        var i=0;
        images.forEach((img, index) => {

            img.src =imge[i] ; // Set the new image source
            i++
        });
        const cardTitles = document.querySelectorAll('.card-title');
            // Loop through each element and set the text content
            cardTitles.forEach((element, index) => {
                // Example: Set text content to 'Title ' followed by the index number
                element.textContent = Object.keys(coffe_type)[index];
            });
            const btn = document.querySelectorAll('.btn');
            // Loop through each element and set the text content
            btn.forEach((element, index) => {
                // Example: Set text content to 'Title ' followed by the index number
                element.textContent =coffe_type[Object.keys(coffe_type)[index]]+"$";
            });
    
}

window.onload = function() {
    productInfo();
};