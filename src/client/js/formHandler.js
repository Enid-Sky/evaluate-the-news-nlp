

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
            if(res.polarity === 'neutral') {
                document.getElementById('polarityImg').innerHTML = "<img src=\"https://i.ibb.co/mJc1WVV/neutraldog.png\" width=\"320px\">";
            }
            if(res.polarity === 'positive'){
                document.getElementById('polarityImg').innerHTML = "<img src=\"https://i.ibb.co/YdrwMBL/happydog.png\" width=\"320px\">";
            }
            if(res.polarity === 'negative'){
                document.getElementById('polarityImg').innerHTML = "<img src=\"https://i.ibb.co/BqPDf0P/baddog.png\" width=\"320px\">";
            }

            document.getElementById('subjectivity').innerText = `The nature of this article is ${res.subjectivity}.`
            subjectivity.style.fontSize = '18px';
    
            document.getElementById('polarity').innerText = `The tone of this article is ${res.polarity}.`
            polarity.style.fontSize = '18px';
            document.getElementById('text').innerText = res.text;

            document.getElementById('url').value = ''
        })

}


export {
    handleSubmit
}

