function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    console.log(`This is the url + ${formText}`)
    Client.checkForUrl(formText)

    console.log("::: Form Submitted...checking validation :::")
    fetch('/api', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                url: formText
            }),
        })
        .then(res => res.json())
        .then(function (res) {
            console.log("::: Updating UI :::")
            document.getElementById('results').innerHTML = `Text: ${res.text} <p> Subjectivity ${res.subjectivity} <p> Polarity: ${res.polarity}`
            document.getElementById('url').value = ''
        })

}


export {
    handleSubmit

}