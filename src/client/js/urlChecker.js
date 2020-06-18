function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);

    if (url == '' || url == null) {
        alert("Please enter a valid URL")
    } else {
        return true;
    }
}

export {
    checkForUrl
}