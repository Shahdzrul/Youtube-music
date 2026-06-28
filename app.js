function renderVideo(id) {
document.getElementById("player").innerHTML =
`
<iframe
src="https://www.youtube.com/embed/${id}">
</iframe>
`;
}

renderVideo("dQw4w9WgXcQ");
