import Player from "./Player";
const VolumeControl = ( function (){
    let volume_control_content = document.querySelector('.wpb-japm-volume-control');
    let btn_volume             = volume_control_content.querySelector('.wpb-japm-audio-volume');
    let control_volume         = volume_control_content.querySelector('.wpb-japm-control-volume');
    let range_split_volume     = volume_control_content.querySelector('.wpb-japm-control-volume-range');
    let btn_volume_off         = volume_control_content.querySelector('.wpb-japm-control-volume-off');
    let btn_volume_high        = volume_control_content.querySelector('.wpb-japm-control-volume-up');

    btn_volume.addEventListener('click', function (el){
        toggle_volume_control();
    });
    range_split_volume.addEventListener('click', function (el){
        change_volume( this.value );
    })

    btn_volume_off.addEventListener( 'click', function (el){
        change_volume(0)
    })
    btn_volume_high.addEventListener( 'click', function (el){
        change_volume(1)
    })


    function toggle_volume_control() {
        console.log('Click toggle volume');
        if( control_volume.classList.contains('active') ) {
            console.log( 'Active exists');
            control_volume.classList.remove('active');
            return false;
        }
        control_volume.classList.add('active');
    }

    function change_volume( value ){
        range_split_volume.value = value;
        Player.change_audio_volume(value);
    }

});

export default VolumeControl;