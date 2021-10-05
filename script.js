
let email = "Shoot me an email at: svc281@nyu.edu"
let emailButton;
let heading1;
let heading2;

emailButton = document.getElementById("email-button")
emailButton.addEventListener("click", function(){
    alert(email);
});

heading1 = document.getElementById("name")
heading1.addEventListener("mouseover", function(){
    this.style.textDecoration='none';
})

heading1.addEventListener("mouseout", function(){
    this.style.textDecoration='underline';
    this.style.textDecorationColor='hotpink'; 
})

heading2 = document.getElementById("about")
heading2.addEventListener("mouseover", function(){
    this.style.textDecoration='none';
})

heading2.addEventListener("mouseout", function(){
    this.style.textDecoration='underline';
    this.style.textDecorationColor='hotpink'; 
})

window.onload = chooseVideo;

var video = new Array("https://player.vimeo.com/video/416711680?h=c1299e4fa7",
                        "https://player.vimeo.com/video/546766742?h=296b449c6a",
                         "https://player.vimeo.com/video/435197746?h=5871bea6fc");

const name = new Array("Resistance/Compliance", "mil novecientos setenta y siete", "LAS QUE NO IBAN A SALIR");

const description = new Array("Resistance/Compliance investigates the ways in which male dominance is both aggressive and subtle yet explicit and subliminal. The embodied research of this work asks, could the resistance of women and non-binary people be considered compliance simultaneously? The themes throughout the piece merge classical and hip-hop music, as well as their dance forms as a waltz of dominance. The information is emphatic and brazenly displays itself to the viewer.",
"DESCRIPTION FOR 1977",
"LAS QUE NO IBAN A SALIR is a Video Art Installation that visually represents the vibe of Bad Bunny’s latest album. The performance is a combination of pre-edited video and live VJing, while projection-mapped onto a sculpture. 2020 has given me the space to explore my love for projected video art and projection mapping (and essentially Bad Bunny’s music)."
)

function chooseVideo(){
    var randomNum = Math.floor(Math.random() * video.length);
    document.getElementById("vid").src = video[randomNum];
    document.getElementById("vidName").innerText = name[randomNum];
    document.getElementById("vidDescription").innerText = description[randomNum];

}