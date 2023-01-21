search.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        console.log(search.value);

        var productsArr = JSON.parse(localStorage.getItem("productsArr"));
        if (productsArr == null) {
            productsArr = [];
        }

        var searchedProductsArr = productsArr.filter((element, index) => {
            if (search.value == element.type.toLowerCase()) {
                return true;
            }
            else {
                return false;
            }
        });

        if (searchedProductsArr.length > 0) {
            console.log(searchedProductsArr);
            localStorage.setItem("searchedProductsArr", JSON.stringify(searchedProductsArr));

            location.href = "./search.html";
        }
        else {
            location.href = "./index.html";
        }
    }
});




var showUserName = document.getElementById("showUserName");
var signOut = document.getElementById("signOut");
var getUserName = localStorage.getItem("loggedInUserName");

if (getUserName != null && showUserName != null) {
    console.log(getUserName == "")
    if (getUserName != null) {
        if(getUserName != "") {
            showUserName.innerText = "Hi, " + getUserName;
            signOut.innerText = "Sign Out";
        }
    }
}


if (signOut != null) {
    signOut.addEventListener("click", () => {
        localStorage.setItem("userLoggedIn", false);
        localStorage.setItem("loggedInUserName", "");
        location.href = "./index.html";
    });
}
        