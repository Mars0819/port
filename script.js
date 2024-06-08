
const translations = {
    en: {
        titleabout: "About Me",
        salam:"Hi i'm,",
        aboutp: "I am Umar, a recent graduate of the Computer Engineering program at Tanri Abeng University, with a keen aspiration to establish myself as a Software Engineer. Demonstrating adaptability and a profound sense of accountability, I am enthusiastic about harnessing and honing my skill set in the field of Software Engineering. Let's build something extraordinary together!",
    },
    id: {
        salam:"Hai Saya,",
        titleabout: "Tentang Saya",
        aboutp: "Saya adalah Umar, lulusan baru program Teknik Komputer di Universitas Tanri Abeng, dengan aspirasi kuat untuk menjadikan diri saya sebagai seorang Insinyur Perangkat Lunak. Dengan menunjukkan adaptabilitas dan rasa tanggung jawab yang mendalam, saya antusias untuk mengembangkan dan menyempurnakan keterampilan saya di bidang Rekayasa Perangkat Lunak. Mari kita bangun sesuatu yang luar biasa bersama-sama.",
    }
    
};
// pengubah bahasa
function switchLanguage(language) {
    document.getElementById('salam').textContent = translations[language].salam;
    document.getElementById('titleabout').textContent = translations[language].titleabout;
    document.getElementById('aboutp').textContent = translations[language].aboutp;
}
 // Event listener for language change
 document.getElementById('languageSelect').addEventListener('change', function() {
    const selectedLanguage = this.value;
    switchLanguage(selectedLanguage);
});

// Optional: Set default language based on browser's language
const userLang = navigator.language || navigator.userLanguage; 
if (userLang.startsWith('id')) {
    document.getElementById('languageSelect').value = 'id';
    switchLanguage('id');
}

// Event listener for language change
document.getElementById('languageSelect').addEventListener('change', function() {
    const selectedLanguage = this.value;
    switchLanguage(selectedLanguage);
});

// Optional: Set default language based on browser's language

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

//header transparent
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('visible');
        header.classList.remove('transparent');
    } else {
        header.classList.remove('visible');
        header.classList.add('transparent');
    }
});

// download cv
document.getElementById('downloadLink').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tindakan default tautan
    const link = document.createElement('a');
    link.href = 'UmarAlfaruqAbdulAziz(2).pdf';
    link.download = 'UmarAlfaruqAbdulAziz(2).pdf'; // Nama file yang diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// project
const portfolioItems = [
    {
        imgSrc: "project1.jpg",
        title: "Project game with website App",
        description: "I created this project to practice my skills."
    },
    {
        imgSrc: "project2.jpg",
        title: "Another Project",
        description: "Description of another project."
    },
    {
        imgSrc: "project2.jpg",
        title: "Another Project",
        description: "Description of another project."
    },
    {
        imgSrc: "project2.jpg",
        title: "Another Project",
        description: "Description of another project."
    },
    {
        imgSrc: "project2.jpg",
        title: "Another Project",
        description: "Description of another project."
    },
    // Tambahkan item portofolio lainnya sesuai kebutuhan
];

// Mendapatkan container portofolio
const portfolioContainer = document.getElementById("portfolio-container");

// Membuat elemen HTML untuk setiap item portofolio dan menambahkannya ke dalam container
portfolioItems.forEach(item => {
    const portfolioItem = document.createElement("div");
    portfolioItem.classList.add("portfolio-item");

    const image = document.createElement("img");
    image.src = item.imgSrc;
    image.alt = item.title;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("portfolio-buttons");

    const detailButton = document.createElement("a");
    detailButton.href = "#";
    detailButton.classList.add("btn-primary");
    detailButton.textContent = "Detail";

    const viewButton = document.createElement("a");
    viewButton.href = "#";
    viewButton.classList.add("btn-secondary");
    viewButton.textContent = "View";

    buttonsContainer.appendChild(detailButton);
    buttonsContainer.appendChild(viewButton);

    portfolioItem.appendChild(image);
    portfolioItem.appendChild(title);
    portfolioItem.appendChild(description);
    portfolioItem.appendChild(buttonsContainer);

    portfolioContainer.appendChild(portfolioItem);
});
// PENGalaman
