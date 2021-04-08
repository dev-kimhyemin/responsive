/* Share */
//http://www.facebook.com/sharer.php?u={페이지 제목}&t={페이지링크}
//http://twitter.com/intent/tweet?text={페이지 제목}&url={페이지링크}
//https://share.naver.com/web/shareView.nhn?url={페이지링크}&title={페이지 제목}
//https://plus.google.com/share?url={페이지링크}&t={페이지 제목}
$(".Facebook").click(function(e){
    e.preventDefault();
    window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
});

$(".Twitter").click(function(e){
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
});

/* Fold / Unfold */
$(".btn").click(function(e){
	e.preventDefault();
	$(".nav").slideToggle();
	$(".btn").toggleClass("open");

	if($(".btn").hasClass("open")){
		$(".btn").find("i").attr("class","fa fa-angle-up");
	} else{
		$(".btn").find("i").attr("class","fa fa-angle-down");
	}
});

$(window).resize(function(){
	var wWidth = $(window).width();
	if(wWidth < 600){
		$(".nav").removeAttr("style");
		$(".btn").find("i").attr("class","fa fa-angle-down");
	}
});

/* Light Box */
$(".lightbox").lightGallery({
	autoplay: true,
	pause: 3000,
	progressBar: true
});

/* Image Slider */
$(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
    	{
            breakpoint: 768,
            settings: {
                autoplay: false,
            }
    	}
	]
});