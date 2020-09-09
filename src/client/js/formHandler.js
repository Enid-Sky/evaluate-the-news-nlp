

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
                let img = document.createElement('img');
                img.src = './images/neutral.jpg'
                document.getElementById('polarityImg').appendChild(img);
            }
            if(res.polarity === 'positive'){
                let img = document.createElement('img');
                img.src = './images/positive.jpg'
                document.getElementById('polarityImg').appendChild(img);
            }
            if(res.polarity === 'negative'){
                let img = document.createElement('img');
                img.src = './images/negative.jpg'
                document.getElementById('polarityImg').appendChild(img);
            }
            
            
            let txt = document.createElement('txt');
            txt.innerText = 'Article Excerpt:'
            

            document.getElementById('excerpt').appendChild(txt)
            excerpt.style.fontSize = '16px';

            document.getElementById('text').innerText = res.text;
            document.getElementById('subjectivity').innerText = `The nature of this article is ${res.subjectivity}.`
            subjectivity.style.fontSize = '18px';
    
            document.getElementById('polarity').innerText = `The tone of this article is ${res.polarity}.`
            polarity.style.fontSize = '18px';
            document.getElementById('url').value = ''
        })

}


export {
    handleSubmit
}

