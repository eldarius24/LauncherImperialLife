// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
document.getElementById("btnClose").textContent = "TEST"

console.log("on rentre dans le renderer;js");
document.getElementById('#btnClose').addEventListener('click', () => {
    console.log("ça clique");
    app.quit()
  })