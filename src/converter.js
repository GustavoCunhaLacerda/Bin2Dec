let inputElement = document.getElementById("converterInput")
let btnElement = document.getElementById("converterBtn")
let outputElement = document.getElementById("converterOutput")

const ehBinario = (text) => {
    for(let i=0; i < text.length; i++) {
        if(binaryString[i] != '0' && binaryString[i] != '1') {
            alert("Please! Enter a binary number.")
            return false
        }
    }
    return true
}

const bin2Dec = (text) => {
    if (text == "") {
        return ""
    }

    decimal = 0
    for (let i = text.length - 1; i >= 0; i--) {
        console.log(text[i], i, 2**(text.length - i - 1))
        if(text[i] == '1') {
            decimal += 2**(text.length - i - 1)
        }
    }
    return decimal
}

btnElement.onclick = () => {
    binaryString = inputElement.value
    
    if (ehBinario(binaryString)) {
        decimalString = String(bin2Dec(binaryString))
        outputElement.value = decimalString
    } else {
        outputElement.value = ""
    }
}
