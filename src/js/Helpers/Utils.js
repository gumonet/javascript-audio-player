const Utils = ( function(){
    function get_src_audio_item( item_audio ) {
        return item_audio.getAttribute('data-rel');
    }

    return {
        get_src_audio_item
    }
})

export default Utils();