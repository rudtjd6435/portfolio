const cursorFollower = document.getElementById("cursorFollower");

document.onmousemove = (e) => {
    cursorFollower.style.left = e.pageX + "px";
    cursorFollower.style.top = e.pageY + "px";
}