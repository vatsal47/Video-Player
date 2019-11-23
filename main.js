let playbackSpeed = 1
let isPlaying = false
let isMuted = false
let video = document.getElementById('myVideo');

// For Play Pause And Stop
document.addEventListener('click',(e) => {
    if((e.target.id === 'play' || e.target.id === 'myVideo') && isPlaying === false) {
        video.play()
        document.getElementById('play').innerHTML = 'Pause'
        isPlaying = true
    } else if((e.target.id === 'play' || e.target.id === 'myVideo') && isPlaying === true) {
        video.pause()
        document.getElementById('play').innerHTML = 'Play'
        isPlaying = false
    }   else if(e.target.id === 'load') {
        video.load()
        document.getElementById('play').innerHTML = 'Play'
        document.getElementById('mute').innerHTML = 'Mute'
    }
})

// For Mute and UnMute
document.addEventListener('click',(e) => {
    if(e.target.id === 'mute' && isMuted === false) {
        video.muted = true
        document.getElementById(e.target.id).innerHTML = 'Unmute'
        isMuted = true
    } else if(e.target.id === 'mute' && isPlaying === true) {
        video.muted = false
        document.getElementById(e.target.id).innerHTML = 'Mute'
        isMuted = false
    }
})

// For PlayBack Speed
document.addEventListener('change', (e) => {
    if(e.target.id === 'speed') {
        video.playbackRate = e.target.value
    }
})


// Control Volume
document.addEventListener('change', (e) => {
    if(e.target.id === 'volume') {
        video.volume = e.target.value
    }
})


// Forward and Rewind
document.addEventListener('click', (e) => {
    if(e.target.id === 'forward') {
        video.currentTime += 5
    } else if (e.target.id === 'rewind') {
        video.currentTime -= 5
    }
})