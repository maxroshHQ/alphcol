// Function to show content after 5 seconds
window.onload = function() {
    setTimeout(function() {
        document.body.classList.add('loaded'); // Hide the loader
    }, 5000); // 5 seconds delay
};

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};


document.getElementById("download-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    // Create a temporary link element for downloading the PDF
    var link = document.createElement("a");
    link.href = "whitepaper.pdf"; // Update with the actual path to your PDF
    link.download = "whitepaper.pdf"; // File name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up the temporary element
});

document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

document.getElementById("trending-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior

    // Create a temporary link element for downloading the PDF
    var link = document.createElement("a");
    link.href = "whitepaper.pdf"; // Update with the actual path to your PDF
    link.download = "whitepaper.pdf"; // File name for the download
    document.body.appendChild(link);

    // Trigger the click event on the link to start the download
    link.click();

    // Clean up the temporary element after the click
    document.body.removeChild(link);
});
