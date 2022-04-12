const ProgressBar = (function(){
    let contentProgressBar = document.querySelector(".wpb-japm-bar-player-content");
    let progress_bar       = contentProgressBar.querySelector(".wpb-japm-progress-bar-fill");
    let time_status        = contentProgressBar.querySelector(".wpb-japm-audio-meta-data");

    function show_progress_bar () {
        contentProgressBar.classList.add('show');
    }

    function set_value_progress( current_time, duration ) {
        let percent              = Math.floor( (current_time  / duration ) * 100 );
        progress_bar.style.width = `${percent}%`;
        set_time_status( duration, current_time );
    }

    function set_time_status( total_time, current_time ){
        total_time       = format_time(total_time);
        current_time     = format_time(current_time);
        let html_content = ` <span class="wpb-japm-audio-current-time">
                                    ${current_time}
                                </span> /
                                <span class="wpb-japm-audio-total-time">
                                    ${total_time}
                                </span>`;
        time_status.innerHTML = html_content;
    }

    function format_time ( time ) {
        let mins = Math.floor(time / 60);
        let secs = Math.floor(time % 60);
        return `${mins}:${secs}`;
    }

    return{
        show_progress_bar,
        set_value_progress
    }

});

export default ProgressBar();