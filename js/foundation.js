jQuery(function(e){function t(t){var n=t.closest("dl").find("dd.active"),r=t.children("a").attr("href")+"Tab";r=r.replace(/^.+#/,"#"),n.removeClass("active"),t.addClass("active"),e(r).closest(".tabs-content").children("li").removeClass("active").hide(),e(r).css("display","block").addClass("active")}e("dl.tabs dd a").on("click.fndtn",function(n){t(e(this).parent("dd"))}),window.location.hash&&(t(e('a[href="'+window.location.hash+'"]').parent("dd")),e.foundation.customForms.appendCustomMarkup()),e(".alert-box").delegate("a.close","click",function(t){t.preventDefault(),e(this).closest(".alert-box").fadeOut(function(t){e(this).remove()})}),e("input, textarea").placeholder(),e(this).tooltips();var n=!1;Modernizr.touch||navigator.userAgent.match(/Windows Phone/i)?(e(".nav-bar a.flyout-toggle").on("click.fndtn touchstart.fndtn",function(t){t.preventDefault();var r=e(this).siblings(".flyout").first();n===!1&&(e(".nav-bar .flyout").not(r).slideUp(500),r.slideToggle(500,function(){n=!1})),n=!0}),e(".nav-bar>li.has-flyout").addClass("is-touch")):e(".nav-bar>li.has-flyout").hover(function(){e(this).children(".flyout").show()},function(){e(this).children(".flyout").hide()}),e(".button.disabled").on("click.fndtn",function(e){e.preventDefault()}),e(".button.dropdown > ul").addClass("no-hover"),e(".button.dropdown").on("click.fndtn touchstart.fndtn",function(e){e.stopPropagation()}),e(".button.dropdown.split span").on("click.fndtn touchstart.fndtn",function(t){t.preventDefault(),e(".button.dropdown").not(e(this).parent()).children("ul").removeClass("show-dropdown"),e(this).siblings("ul").toggleClass("show-dropdown")}),e(".button.dropdown").not(".split").on("click.fndtn touchstart.fndtn",function(t){e(".button.dropdown").not(this).children("ul").removeClass("show-dropdown"),e(this).children("ul").toggleClass("show-dropdown")}),e("body, html").on("click.fndtn touchstart.fndtn",function(){e(".button.dropdown ul").removeClass("show-dropdown")});var r=e(".button.dropdown:not(.large):not(.small):not(.tiny)").outerHeight()-1,i=e(".button.large.dropdown").outerHeight()-1,s=e(".button.small.dropdown").outerHeight()-1,o=e(".button.tiny.dropdown").outerHeight()-1;e(".button.dropdown:not(.large):not(.small):not(.tiny) > ul").css("top",r),e(".button.dropdown.large > ul").css("top",i),e(".button.dropdown.small > ul").css("top",s),e(".button.dropdown.tiny > ul").css("top",o),e(".button.dropdown.up:not(.large):not(.small):not(.tiny) > ul").css("top","auto").css("bottom",r-2),e(".button.dropdown.up.large > ul").css("top","auto").css("bottom",i-2),e(".button.dropdown.up.small > ul").css("top","auto").css("bottom",s-2),e(".button.dropdown.up.tiny > ul").css("top","auto").css("bottom",o-2),e.foundation.customForms.appendCustomMarkup()});