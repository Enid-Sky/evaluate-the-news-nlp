

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
                document.getElementById('polarityImg').innerHTML = "<img src=\"https://images.unsplash.com/photo-1575045113838-6bdaf17765d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80\" width=\"320px\">";
            }
            if(res.polarity === 'positive'){
                document.getElementById('polarityImg').innerHTML = "<img src=\"https://images.unsplash.com/photo-1545328951-d483a3667ed0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80\" width=\"320px\">";
            }
            if(res.polarity === 'negative'){
                document.getElementById('polarityImg').innerHTML = "<img src=\"https://images.unsplash.com/photo-1541848156497-67cadcfbc7de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2106&q=80\" width=\"320px\">";
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

