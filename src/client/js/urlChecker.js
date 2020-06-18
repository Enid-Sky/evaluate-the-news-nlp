function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);

    if (inputText == '' || inputText == null) {
        alert("Please enter a valid URL")
    } else {
        return true;
    }
}

export {
    checkForUrl
}