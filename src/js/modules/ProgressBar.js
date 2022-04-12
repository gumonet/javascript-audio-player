import player from "./Player";
import Player from "./Player";
const ProgressBar = (function(){
    let progress_bar_section = document.querySelector(".wpb-japm-bar-player-content");
    let progress_bar_content = progress_bar_section.querySelector(".wpb-japm-progress-bar-content");
    let progress_bar       = progress_bar_section.querySelector(".wpb-japm-progress-bar-fill");
    let time_status        = progress_bar_section.querySelector(".wpb-japm-audio-meta-data");

    function show_progress_bar () {
        let button_pause = progress_bar_section.querySelector('.wpb-japm-buttons');
        button_pause.addEventListener('click', function (el) {
            let get_audio_active_element = document.querySelector('.wpb-japm-item-audio.active');
            let get_audio_pause_element  = document.querySelector('.wpb-japm-item-audio.pause');
            if ( el.target.classList.contains('wpb-japm-audio-play') ) {
                console.log( 'Play')
                toggle_play_buttons();
                play_audio( get_audio_pause_element );
            }
            if ( el.target.classList.contains('wpb-japm-audio-pause') ) {
                console.log('Pause')
                pause_audio( get_audio_active_element );
                toggle_pause_buttons();
            }
        })
        progress_bar_content.addEventListener('click', function( el ){
            Player.set_audio_time( el.offsetX/progress_bar_content.offsetWidth );
        })

        progress_bar_section.classList.add('show');
    }

    function toggle_play_buttons(){
        progress_bar_section.querySelector('.wpb-japm-audio-play').style.display='none';
        progress_bar_section.querySelector('.wpb-japm-audio-pause').style.display='flex';
    }
    function toggle_pause_buttons(){
        progress_bar_section.querySelector('.wpb-japm-audio-play').style.display='flex';
        progress_bar_section.querySelector('.wpb-japm-audio-pause').style.display='none';
    }

    function pause_audio(get_audio_active_element){
        if(get_audio_active_element !== null){
            get_audio_active_element.classList.remove('active');
            get_audio_active_element.classList.add('pause');
        }
        Player.pause_audio();
    }

    function play_audio(get_audio_active_element){
        if( get_audio_active_element !== null ) {
            get_audio_active_element.classList.remove('pause');
            get_audio_active_element.classList.add('active');
        }
        Player.resume_audio();
    }

    function set_value_progress( current_time, duration ) {
        let percent              = Math.floor( (current_time  / duration ) * 100 );
        progress_bar.style.width = `${percent}%`;
        set_time_status( duration, current_time );
    }

    function set_time_status( total_time, current_time ){
        total_time       = format_time(total_time);
        current_time     = format_time(current_time);
        time_status.innerHTML = ` <span class="wpb-japm-audio-current-time">
                                    ${current_time}
                                </span> /
                                <span class="wpb-japm-audio-total-time">
                                    ${total_time}
                                </span>`;
    }

    function format_time ( time ) {
        let mins = Math.floor(time / 60);
        let secs = Math.floor(time % 60);
        return `${mins}:${secs}`;
    }



    return{
        show_progress_bar,
        set_value_progress,
        toggle_play_buttons,
        toggle_pause_buttons
    }

});

export default ProgressBar();