const body = document.querySelector('body')


function sparkAnimation(positionX, positionY){
    for(let i = 0; i < 50; i++){
        const spark = document.createElement('i')

        spark.style.left = `${positionX}px`
        spark.style.top = `${positionY}px`

        const randomX = (Math.random() - 0.5) * window.innerWidth / 1.5
        const randomY = (Math.random() - 0.5) * window.innerWidth / 1.5

        spark.style.setProperty('--randomX', `${randomX}px`)
        spark.style.setProperty('--randomY', `${randomY}px`)

        const randomSize = Math.random()*30 + 2
        spark.style.width = `${randomSize}px`
        spark.style.height = `${randomSize}px`

        const duraiton = Math.random() * 2 + 0.5
        spark.style.animation = `animate ${duraiton}s ease-out forwards`

        const colors = ['#A83B19','#D35A1E','#F27929','#F2982C','#FADD43']
        const randomColor = colors[Math.floor(Math.random()*colors.length)]
        spark.style.background = randomColor

        body.appendChild(spark)

        setTimeout(()=>{
            spark.remove()
        }, 2000)
    }
}
body.addEventListener('click', (e) => {
    Array(5).fill(null).forEach((_, index) => {
        const randomX = (Math.random() * .7 + .15) * window.innerWidth
        const randomY = (Math.random()) * window.innerHeight
        sparkAnimation(randomX, randomY)
    })
    //sparkAnimation(e.clientX, e.clientY)
})