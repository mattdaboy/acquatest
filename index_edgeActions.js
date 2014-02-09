
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("#Stage").css({"height":"34560px"});sym.$("container").css({"position":"absolute","left":"50%","margin-left":"-960px"});sym.$("notice_sym").css({"position":"absolute","left":"50%","margin-left":"-320px"});var sta_video=$("<video width='1024' height='576'>"+"<source src='videos/sta_reel.mp4' type='video/mp4' />"+"</video>");sym.getSymbol("container").$("sta_video_container").html(sta_video);sta_video.attr('preload','auto');sta_video.attr('controls','controls');var story_video=$("<video width='1024' height='576'>"+"<source src='videos/armani_storyboard.mp4' type='video/mp4' />"+"</video>");sym.getSymbol("container").$("story_video_container").html(story_video);story_video.attr('preload','auto');story_video.attr('controls','controls');sym.$("menu").offset({"left":20});sym.$("body").append(sym.$("menu").css({"position":"fixed"}));function posMenu(){var py=$(window).scrollTop();TweenLite.to(sym.$("menu"),0.25,{css:{"top":py},ease:Cubic.easeInOut});}
sym.getSymbol("menu").$("bt1").click(function(){animScroll(0);});sym.getSymbol("menu").$("bt2").click(function(){animScroll(sym.$("page3").position().top);});sym.getSymbol("menu").$("bt3").click(function(){animScroll(sym.$("page13").position().top);});sym.getSymbol("menu").$("bt4").click(function(){animScroll(sym.$("page23").position().top);});sym.getSymbol("menu").$("bt5").click(function(){animScroll(sym.$("page25").position().top);});sym.getSymbol("menu").$("bt6").click(function(){animScroll(sym.$("page30").position().top);});sym.getSymbol("menu").$("bt7").click(function(){animScroll(sym.$("page32").position().top);});sym.getSymbol("menu").$("bt8").click(function(){animScroll(sym.$("page36").position().top);});sym.getSymbol("menu").$("bt9").click(function(){animScroll(sym.$("page38").position().top);});sym.getSymbol("menu").$("bt10").click(function(){animScroll(sym.$("page39").position().top);});var pages_nb=40;$(document).keydown(onKeyDown);function onKeyDown(e){if(e.keyCode==38){var pos=sym.$("page"+getPreviousPagePosition()).position().top;animScroll(pos);}
if(e.keyCode==40){var pos=sym.$("page"+getNextPagePosition()).position().top;animScroll(pos);}}
function getNextPagePosition(){for(var i=1;i<pages_nb;i++){var previous_page_nb=i;var next_page_nb=i+1;if(sym.$("page"+previous_page_nb).position().top-$(window).scrollTop()<=0&&sym.$("page"+next_page_nb).position().top-$(window).scrollTop()>0){return next_page_nb;}}
return pages_nb;}
function getPreviousPagePosition(){for(var i=1;i<pages_nb;i++){var previous_page_nb=i;var next_page_nb=i+1;if(sym.$("page"+previous_page_nb).position().top-$(window).scrollTop()<0&&sym.$("page"+next_page_nb).position().top-$(window).scrollTop()>=0){return previous_page_nb;}}
if(sym.$("page1").position().top-$(window).scrollTop()!=0){return(pages_nb-1);}}
function animScroll(pos){setTimeout(function(){$("html, body").stop().animate({scrollTop:pos});},10);}
var audioplaying=false;var audio=new buzz.sound("audio/deep",{formats:["mp3"]});sym.getSymbol("container").$("bt_audio").click(function(){if(audioplaying==false){audio.play();audioplaying=true;}else{audio.stop();audioplaying=false;}});});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'container'
(function(symbolName){})("container");
//Edge symbol end:'container'

//=========================================================

//Edge symbol: 'menu'
(function(symbolName){})("menu");
//Edge symbol end:'menu'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'

//=========================================================

//Edge symbol: 'notice'
(function(symbolName){})("notice");
//Edge symbol end:'notice'
})(jQuery,AdobeEdge,"Armani");