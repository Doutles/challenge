
function encryptText() {
    const inputText = document.getElementById("inputText").value;
    const encryptedTextElement = document.getElementById("encryptedText");
    const copyButton = document.getElementById("copyButton");

    // Reglas de encriptación
    const encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    encryptedTextElement.textContent = encryptedText;
    encryptedTextElement.style.display = "block";
    copyButton.style.display = "block";
    document.querySelector(".message-card img").style.display = "none";
    document.querySelector(".message-not-found").style.display = "none";
    document.querySelector(".message-instruction").style.display = "none";
}

function decryptText() {
    const inputText = document.getElementById("inputText").value;
    const encryptedTextElement = document.getElementById("encryptedText");
    const copyButton = document.getElementById("copyButton");

    // Reglas de desencriptación
    const decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    encryptedTextElement.textContent = decryptedText;
    encryptedTextElement.style.display = "block";
    copyButton.style.display = "block";
    document.querySelector(".message-card img").style.display = "none";
    document.querySelector(".message-not-found").style.display = "none";
    document.querySelector(".message-instruction").style.display = "none";
}

function copyText() {
    const encryptedText = document.getElementById("encryptedText").textContent;
    navigator.clipboard.writeText(encryptedText).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
