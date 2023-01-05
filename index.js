const containerEl = document.querySelector(".container")

for (let i = 0; i < 30; i++) {
    let colorHex = "#"
    for (let j = 0; j < 6; j++) {
        const colorCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", 'b', 'c', 'd', 'e', 'f']
        colorHex += colorCode[Math.floor(Math.random() * colorCode.length)]
    }
    const colorContainer = document.createElement("div")
    colorContainer.classList.add("color-container")
    colorContainer.innerText =  colorHex
    colorContainer.style.backgroundColor = colorHex;
    containerEl.appendChild(colorContainer)
}