import Utils from "./Helpers/Utils";
import Player from "./modules/Player";
import ProgressBar from "./modules/ProgressBar";

const App = ( function (){
    function init(){
        let item_audio_content = document.querySelector('.wpb-japm-list-audio-content');
        item_audio_content.addEventListener('click', function(el ){
            if ( el.target.classList.contains('wpb-japm-audio-play') ) {
                play_audio_action( el );
            }
            if ( el.target.classList.contains('wpb-japm-audio-pause') ) {
                pause_audio_action( el );
            }
            return false
        });
    }

    function play_audio_action( el ) {
        let item_audio_clicked_element = el.target.parentNode.parentNode;
        let get_audio_active_element   = document.querySelector('.wpb-japm-item-audio.active');
        let get_audio_paused_element   = document.querySelector('.wpb-japm-item-audio.pause');
        //Check if exist an audio in pause
        if( get_audio_paused_element !== null){
            get_audio_paused_element.classList.remove('pause'); //Remove pause class
            //Check  if the play button corresponds to the currently paused audio. Then resume it
            if( item_audio_clicked_element === get_audio_paused_element ){
                resume_playing( item_audio_clicked_element );
                return false; //break
            }
        }
        //Check if an audio is playing
        if( get_audio_active_element !== null ) {
            stop_current_playing_audio( get_audio_active_element );
        }
        play_new_audio( item_audio_clicked_element );
    }

    function play_new_audio(item_audio_clicked_element){
        let src_audio = Utils.get_src_audio_item( item_audio_clicked_element )
        item_audio_clicked_element.classList.add('active');
        Player.play_audio( src_audio );
    }

    function resume_playing(item_audio_clicked_element){
        item_audio_clicked_element.classList.add('active');
        ProgressBar.toggle_play_buttons();
        Player.resume_audio();
    }

    function stop_current_playing_audio(item_audio_clicked_element){
        item_audio_clicked_element.classList.remove('active');
        Player.pause_current_playing();
    }

    function pause_audio_action(el){
        let item_audio = el.target.parentNode.parentNode;
        item_audio.classList.remove('active');
        item_audio.classList.add('pause');
        ProgressBar.toggle_pause_buttons();
        Player.pause_audio();
    }

    return {
        init
    }
});

export default App();
