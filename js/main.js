var elRed = document.querySelector('.red')
var elYellow = document.querySelector('.yellow')
var elGreen = document.querySelector('.green')
var elBox = document .querySelector('.box')


setInterval(()=>{
    elRed.style.backgroundColor = 'red'
    elYellow.style.backgroundColor = 'grey'
    elGreen.style.backgroundColor = 'grey'

    setTimeout(()=>{
        elRed.style.backgroundColor = 'grey'
        elYellow.style.backgroundColor = 'yellow'

        setTimeout(()=>{
            elYellow.style.backgroundColor = 'grey'
            elGreen.style.backgroundColor = 'green'
            setTimeout(()=>{
                elGreen.style.backgroundColor = 'grey'
                elYellow.style.backgroundColor = 'yellow'
                setTimeout(()=>{
                    elYellow.style.backgroundColor = 'grey'
                    elRed.style.backgroundColor = 'red'
                },2000)
            },2000)
            


        } , 2000)
    }, 2000)
}, 8000)
