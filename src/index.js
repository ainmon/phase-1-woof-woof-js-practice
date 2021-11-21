document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(obj => obj.map(d => dogInfo(d)))
})

function dogInfo(dog){
    
    let doggieBar = document.getElementById('dog-bar')
    let span = document.createElement('span')


    let name = dog.name
    let judgement = dog.isGoodDog
    let image = dog.image


    span.append(name)
    doggieBar.append(span)

    span.addEventListener('click', () => {
        let dogInfo = document.getElementById('dog-info')
        dogInfo.innerHTML = ''
        let img = document.createElement('img')
        let button = document.createElement('button')

        if (judgement !== true){
            button.textContent = 'Bad Dog!'
        }
        else button.textContent = 'Good Dog!'

        button.addEventListener('click', (event) => {
            if (judgement === true){
                fetch(`http://localhost:3000/pups/${event.target.id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        isGoodDog: false
                    })
                })
            }

        })

        img.src = image

        dogInfo.append(img, button)


    })

}

const updateDog = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        isGoodDog: false
    })
}