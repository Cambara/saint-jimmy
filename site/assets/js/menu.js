function menu_open_close(env){
    var media = window.matchMedia("screen and (min-width: 730px)")
    if(!media.matches){
        var opt_menu = document.getElementById("opt_menu");
        var triangle = document.getElementById("triangle");
        if(opt_menu.style.display == 'block'){
            opt_menu.style.display = 'none';
            triangle.style.top = '98px';
        }else{
            opt_menu.style.display = 'block';
            triangle.style.top = '228px';
        }
    }

}

document.querySelector('.menu').onclick = menu_open_close;

window.onresize = function () {
    var media = window.matchMedia("screen and (min-width: 730px)")
    var opt_menu = document.getElementById("opt_menu");
    if(media.matches){
        document.querySelector('.menu').onclick = null;
        opt_menu.style.display = 'block';
    }else{
        var triangle = document.getElementById("triangle");
        document.querySelector('.menu').onclick = menu_open_close;
        opt_menu.style.display = 'none';
        triangle.style.top = '98px';
    }
};