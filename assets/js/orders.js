function getInfo(event){ 
    event.preventDefault();
    var info;
    var total=0;
    var coffe_type={"Turkish coffee $3":3,"American coffee $5":5,"Iced latte $7":7};
    var extras={"Extra coffee $1.50":1.5,"Whipped cream $2":2,"Caramel $3":3};
    var sizes={"Small $1.50":1.5,"Medium $2.50":2.5,"Large $3.50":3.5};
    var form = document.forms["myForm"];
    console.log(form["CoffeeType"].value);
    info="Name is : "+form["cus_nam"].value+"<br>";
    info+=form["CoffeeType"].value;
    info+="<br>";
    total+=coffe_type[form["CoffeeType"].value];
    const checkboxes = form.querySelectorAll('input[name="extras"]:checked');
    checkboxes.forEach(function(checkbox){
      info+=checkbox.value+"<br>";
      total+=extras[checkbox.value];       
      }
    );
    $("#information").hide();
    const size = document.getElementById("coffee-size");
    const quantity = document.getElementById("numberDropdown");
    info+=size.value+"<b>";
    total+=sizes[size.value];
    total*=parseInt(quantity.value);
    var ele=document.getElementById("information");
    ele.innerHTML=info+"<br>"+"total price :" +total;
    ele.style.backgroundColor="pink";
    ele.style.color="black";
    $("#information").slideDown("slow");
  }


  function CreateDropdown(){
    const dropdown = document.getElementById('numberDropdown');
    for (let i = 1; i <= 10; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.text = i;
      dropdown.appendChild(option);
    }
  }
  window.onload = function() {
    CreateDropdown();
};