function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('https://api.openweathermap.org/data/2.5/weather?q=94070,US&units=imperial&APPID=e131d5ea093dbc7fc2da1a0496c042c8')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = `The weather now is ${res.main.temp} and it looks like ${res.weather[0].description}`

            console.log(`::: API DATA::: ${res}`)
        })
}

export {
    handleSubmit
}