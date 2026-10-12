
function showDetails() {
    let details = document.getElementById("details");
    let button = document.querySelector(".invite-button");

    if (details.style.display === "block") {
        details.style.display = "none";
        button.innerHTML = "✨ VIEW INVITATION DETAILS";
    } else {
        details.style.display = "block";
        button.innerHTML = "✦ HIDE DETAILS";
    }
}
