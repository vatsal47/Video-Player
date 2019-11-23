document.addEventListener('click',(e) => {
    let video = document.getElementById('myVideo');
    let isPlaying = false

    if(e.target.id === 'play' && isPlaying === false) {
        video.play()
        document.getElementById(e.target.id).innerHTML = 'Pause'
        isPlaying = true
    }else if(e.target.id === 'play' && isPlaying === true) {
        video.pause()
        document.getElementById(e.target.id).innerHTML = 'Play'
        isPlaying = false
    }else if(e.target.id === 'stop') {
        video.load()
    }
})