$(document).ready(function() {
    //$('#demo_form').show();

    $('#scheme_color').minicolors({
        animationSpeed: 100,
        animationEasing: 'swing',
        change: enableColorButton,
        changeDelay: 0,
        control: 'hue',
        defaultValue: '',
        hide: null,
        hideSpeed: 100,
        inline: false,
        letterCase: 'lowercase',
        opacity: false,
        position: 'top left',
        show: null,
        showSpeed: 100,
        swatchPosition: 'left',
        textfield: true,
        theme: 'bootstrap'
    });

    updateColorValues();
});

$('#toggle_navbar').click(function() {
    $('#main_navbar').toggle();
});

$('a[href="#"]').click(function() {
    return false;
});

$('#scheme_header').click(function() {
    $('#scheme_color').focus();
});

$('#demo_form').change(function(e){
    enableColorButton();
});

$('#demo_form').submit(function(e){

    $('#change_color').val('Scheming...');

    var color = $('#scheme_color').val();

    if ($('#tetrad').is(':checked')) {
        var wheel_pos1 = '30';
        var wheel_pos2 = '180';
        var wheel_pos3 = '210';
    } else if ($('#triad').is(':checked')) {
        var wheel_pos1 = '120';
        var wheel_pos2 = '240';
        var wheel_pos3 = '0';
    } else if ($('#complement').is(':checked')) {
        var wheel_pos1 = '180';
        var wheel_pos2 = '0';
        var wheel_pos3 = '180';
    } else if ($('#monochrome').is(':checked')) {
        var wheel_pos1 = '8';
        var wheel_pos2 = '352';
        var wheel_pos3 = '0';
    } else {
        var wheel_pos1 = '45';
        var wheel_pos2 = '315';
        var wheel_pos3 = '180';
    }

    less.modifyVars({
        '@seed-color': color,
        '@wheel_pos1': wheel_pos1,
        '@wheel_pos2': wheel_pos2,
        '@wheel_pos3': wheel_pos3
    });

    updateColorValues();

    resetColorButton();

    return false;
});

$('#swatches input').focus(function() {
    var $this = $(this);
    $this.select();
    $this.mouseup(function() {
        $this.unbind("mouseup");
        return false;
    });
});

function updateColorValues() {
    $('.swatch').each(function() {
        var $this = $(this);
        var bg_color = $this.css('background-color');
        var hex_bg_color = rgb2hex(bg_color);
        $this.find('input').val(hex_bg_color);
    });
}

function enableColorButton() {
    $('#change_color').removeClass('disabled');
}

function resetColorButton() {
    $('#change_color').addClass('disabled');
    $('#change_color').val('Scheme now');
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

less = {
    env: "development",
    async: false
};