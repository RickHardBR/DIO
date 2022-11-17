import { subscribeToHellfireClube } from './data/hellfire-clube.js';

    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const level = document.getElementById('level')
    const character = document.getElementById('character')
    
    const btnSubscribe = document.getElementById('btnSubscribe')

    btnSubscribe.addEventListener('click', async () => {
        const subscribe = {
            name: name.value,
            email: email.value,
            level: level.value,
            character: character.value
        }

        const subscribeId = await subscribeToHellfireClube(subscribe)

        window.alert(`Inscrição adicionada com sucesso! seu ID é: ${subscribeId}`)
        
        name.value = ''
        email.value = ''
        level.value = ''
        character.value = ''

    })