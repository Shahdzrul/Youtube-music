const videos = [
{
title: "Video Pertama",
file: "video1.mp4"
},
{
title: "Video Kedua",
file: "video2.mp4"
},
{
title: "Video Ketiga",
file: "video3.mp4"
}
];

const list = document.getElementById("list");
const player = document.getElementById("video");
const title = document.getElementById("title");

videos.forEach(v => {
const card = document.createElement("div");

card.className = "card";
card.innerText = v.title;

card.onclick = () => {
player.src = v.file;
title.innerText = v.title;

player.play();
};

list.appendChild(card);
});
