const txtAnim= document.querySelector('h1');
new Typewriter (txtAnim,{
    loop: true,
    deleteSpeed:50
    
    
})
.changeDelay(50)
.typeString('Moi c\'est Thomas')
.pauseFor(300)
.typeString('<strong> Dev Junior </strong>')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color:#f1f1f1 "> HTML <span> !')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color:#27ae60"> Css<span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color:#ff6910 "> Javascript <span> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color:midnightblue "> React <span> !')
.pauseFor(1000)
.deleteChars(8)

.start()


