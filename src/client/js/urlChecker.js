function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);

    if (inputText == '' || !inputText.includes("http")) {
        alert("Please enter a valid URL")
        document.getElementById('url').value = '';

    } else {
        return true;
    }
}

export {
    checkForUrl
}