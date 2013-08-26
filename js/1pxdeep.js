$(document).ready(function() {

    $('#1pxdeep_navbar').scrollspy();

    $('.carousel').carousel({interval:false});

    if(window.location.hash && window.location.hash.length == 7) {
        $('#scheme_color').val(window.location.hash);
        $('#demo_form').submit();
    }

    $('#scheme_color').minicolors({
        animationSpeed: 100,
        animationEasing: 'swing',
        change: enableColorButton,
        changeDelay: 0,
        control: 'saturation',
        hide: null,
        hideSpeed: 100,
        inline: false,
        letterCase: 'lowercase',
        opacity: false,
        position: 'bottom left',
        show: null,
        showSpeed: 100,
        swatchPosition: 'left',
        textfield: true
    });

    $('#scheme_color_navbar').minicolors({
        animationSpeed: 100,
        animationEasing: 'swing',
        change: enableColorButtonNavbar,
        changeDelay: 0,
        control: 'saturation',
        hide: null,
        hideSpeed: 100,
        inline: false,
        letterCase: 'lowercase',
        opacity: false,
        position: 'bottom left',
        show: null,
        showSpeed: 100,
        swatchPosition: 'left',
        textfield: true
    });

    updateColorValues();
});

$('a[href="#"]').click(function() {
    return false;
});

$('#carousel-login-form .btn').click(function() {
    return false;
});

$('#carousel-newsletter-signup .btn').click(function() {
    return false;
});

$('#demo_form,#demo_form_navbar').change(function(e){
    var $this = $(this);
    if ($this.is('#demo_form')) {
        var color = $('#scheme_color').val();
        enableColorButton();
    } else {
        var color = $('#scheme_color_navbar').val();
        enableColorButtonNavbar();
    }
    $('#scheme_color, #scheme_color_navbar').val(color);
    
});

$('#demo_form,#demo_form_navbar').submit(function(e){

    $this = $(this);

    $('#change_color,#change_color_navbar').val('Scheming...');

    if ($this.is('#demo_form')) {
        var color = $('#scheme_color').val();
    } else {
        var color = $('#scheme_color_navbar').val();
    }

    //var color = $('#scheme_color').val();

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

    $('#scheme_color,#scheme_color_navbar').val(color);

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
    $('#change_color,#change_color_navbar').removeClass('disabled');
    var color = $('#scheme_color').val();
    $('#scheme_color_navbar').val(color);
    $('#scheme_color_navbar').minicolors('value', color);
}

function enableColorButtonNavbar() {
    $('#change_color,#change_color_navbar').removeClass('disabled');
    var color = $('#scheme_color_navbar').val();
    $('#scheme_color').val(color);
    $('#scheme_color').minicolors('value', color);
}

function resetColorButton() {
    $('#change_color,#change_color_navbar').addClass('disabled');
    $('#change_color,#change_color_navbar').val('Scheme now');
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

less = {
    
};