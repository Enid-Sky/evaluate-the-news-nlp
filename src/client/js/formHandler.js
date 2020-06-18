function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.checkForUrl(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/api', {
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
            document.getElementById('results').innerHTML = `The weather now is ${res.main.temp} and it looks like ${res.weather[0].description}`

            console.log(`::: API DATA::: ${res}`)
        })
}

export {
    handleSubmit
}