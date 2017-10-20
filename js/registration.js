;(function(){
	'use strict';

    function heightDetect(){
        $("html").css("height", $(window).height());
    };
    heightDetect()
    $(window).resize(function(){
        heightDetect();
    });
})();
