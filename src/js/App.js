
export function App () {
    let d = document;
    let item_audio_content = d.querySelector('.list-audio-content');
    //console.log( item_audio_content );
    
    item_audio_content.addEventListener('click', function(e ){
        //console.log('Click on element');
        if ( e.target.classList.contains('audio-play') ) {
            console.log('Is Item audio');
            let item_audio = e.target.parentNode.parentNode;
            let sound_url  = item_audio.getAttribute('data-rel');
        }
    })
}