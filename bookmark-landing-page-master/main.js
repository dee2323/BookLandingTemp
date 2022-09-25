const control = document.getElementsByClassName("control");

const image = document.getElementById("image");

const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");

control[0].onclick = function(){
    image.src = "images/illustration-features-tab-1.svg";
    heading.innerHTML = "Bookmark in one click";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
}

control[1].onclick = function(){
    image.src = "images/illustration-features-tab-2.svg";
    heading.innerHTML = "Intelligent search";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
}

control[2].onclick = function(){
    image.src = "images/illustration-features-tab-3.svg";
    heading.innerHTML = "Share your bookmarks";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
}

// Removes the active class list after clicking another controller
function remove(){
    for (a of control){
        a.classList.remove("active");
    }
}
