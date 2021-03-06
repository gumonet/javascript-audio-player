import ProgressBar from "./ProgressBar";
const Player = (function(){

    let objAudio = null;

    function play_audio(src){
        objAudio = new Audio(`${src}`);
        objAudio.play();
        ProgressBar.show_progress_bar()
        objAudio.ontimeupdate = function( e ) {
            if( objAudio !== null ) {
                ProgressBar.set_value_progress( objAudio.currentTime, objAudio.duration );
            }
        }
    }

    function resume_audio(){
        objAudio.play();
    }

    function pause_audio(){
        objAudio.pause();
       // objAudio = null;
    }

    function set_audio_time( value ) {
        objAudio.currentTime = ((value) * objAudio.duration );
    }

    function pause_current_playing(){
        pause_audio();
    }

    function change_audio_volume( volume ){
        objAudio.volume = volume;
    }

    return {
        play_audio,
        pause_audio,
        pause_current_playing,
        resume_audio,
        set_audio_time,
        change_audio_volume
    }

});

export default Player();