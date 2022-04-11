
export function App () {
    let d = document;
    let item_audio_content = d.querySelector('.list-audio-content');
    console.log( item_audio_content );
    
    item_audio_content.addEventListener('click', function(e ){
        //console.log('Click on element');
        console.log(e.target.parent);
        if ( e.target.className === 'audio-play' ) {
            console.log('Is Item audio');
        }
    })
}