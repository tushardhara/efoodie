$(function(){
		
	$(".popularwriters_list ul li .follow_btn").click(function(){		
		if(!$(this).parents("li").hasClass("active")){
			$(this).parents("li").addClass("active");
		}
		else{ 
			$(this).parents("li").removeClass("active");
		}		
	});
	
	var sethovecont;
	
	$(".product_detail_list .product_cont").hover(function(){
		var $this=$(this)
		$this.parents(".product_detail_list").find(".product_contbg").css({"height":"100%"});		
		sethovecont=setTimeout(function(){  $this.parents(".product_detail_list").find(".product_continner").fadeIn();  }, 100);	
	}, function(){
		$(this).parents(".product_detail_list").find(".product_contbg").css({"height":0});	
		$(this).parents(".product_detail_list").find(".product_continner").hide();
		clearTimeout(sethovecont);
	});
	
	$(".filter_icon").click(function(){
		$(this).hide();
		$(".filter_info").css({"left":0});	
		$(".filter_info_closebg").show();	
	});
	
	$(".filter_close, .filter_info_closebg").click(function(){
		var filterw=$(".filter_info").width();		
		$(".filter_info").css({"left":-filterw});	
		$(".filter_icon").show();	
		$(".filter_info_closebg").hide();	
	});
	
	$(".filter_list ul li h6").click(function(){		
		if(!$(this).hasClass("active")){
			$(".filter_list ul li h6").removeClass("active");
			$(this).addClass("active");
			$(".filter_list ul li .filter_listinfo").hide();
			$(this).parent("li").find(".filter_listinfo").slideDown();
		}
		else{
			$(this).removeClass("active");
			$(this).parents("li").find(".filter_listinfo").hide();
		}			
	});
	
	$(".filter_list ul li .filter_listinfo ul li label").click(function(){		
		if(!$(this).parent("li").hasClass("active")){
			$(this).parent("li").addClass("active");
		}
		else{
			$(this).parent("li").removeClass("active");
		}
		return false;	
	});

	$(".removemystats_sec .table > tbody > tr > td span input").click(function(){		
		if(!$(this).parent("span").hasClass("active")){
			$(this).parent("span").addClass("active");
		}
		else{
			$(this).parent("span").removeClass("active");
		}
		return false;	
	});

	$(".stepone_form .label_list label span input").click(function(){		
		if(!$(this).parent("span").hasClass("active")){
			$(this).parent("span").addClass("active");
		}
		else{
			$(this).parent("span").removeClass("active");
		}
		return false;	
	});

	

	$(".stepthree_form .form-horizontal label span input").click(function(){		
		if(!$(this).parent("span").hasClass("active")){
			$(this).parent("span").addClass("active");
		}
		else{
			$(this).parent("span").removeClass("active");
		}
		return false;	
	});

	$(".stepone_form .check_list label span input").click(function(){		
		if(!$(this).parent("span").hasClass("active")){
			$(this).parent("span").addClass("active");
		}
		else{
			$(this).parent("span").removeClass("active");
		}
		return false;	
	});


	$(".addreadinglist_btn").click(function(){
	var thisid=$(this).attr("id");		
		if(thisid!="active"){
			$(this).attr("id","active");
			$(this).find(".addreadinglist_txt").text('Added');
		}
		else{
			$(this).attr("id"," ");
			$(this).find(".addreadinglist_txt").text('Add to My Reading List');
		}
		return false;	
	});


	
		
		
	var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
	
});