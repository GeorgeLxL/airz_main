var lastScrollTop = 0;
var isScrolling;
window.onscroll = function(e) {
    var body = document.getElementsByTagName('body');
    var header = document.getElementsByTagName('header');
    if (!body[0].classList.contains('body_menu_open')) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            header[0].classList.add('header_scroll');
        } else {
            if (header[0].classList.contains("header_scroll")) {
                header[0].classList.remove('header_scroll');
            }
        }
    } else {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    top_banner_appear();
    check_if_facilites_in_view();
    top_service_appear();
    top_values_appear();
    top_news_appear();
    top_company_appear();
    more_btn_appear();
    member_card_appear();
    company_profile_appear();
    company_building_appear();
    mission_h3_appear();
    mission_p_appear();
    mission_h4_appear();
    news_title_appear();
    news_content_appear();

    var st = window.pageYOffset || document.documentElement.scrollTop;
    var footerPhone = document.getElementById('footer_phone');
    if (st > lastScrollTop){
        if (footerPhone.classList.contains('footer_scroll')) {
            footerPhone.classList.remove('footer_scroll');
        }
    } else {
        if (!footerPhone.classList.contains('footer_scroll')) {
            footerPhone.classList.add('footer_scroll');
        }
    }
    lastScrollTop = st <= 0 ? 0 : st;
}
window.addEventListener('scroll', function ( event ) {

    var footerPhone = document.getElementById('footer_phone');
	window.clearTimeout( isScrolling );

	isScrolling = setTimeout(function() {

		if (!footerPhone.classList.contains('footer_scroll')) {
            footerPhone.classList.add('footer_scroll');
        }
		console.log( 'Scrolling has stopped.' );

	}, 66);

}, false);
window.onload = function() {
    top_banner_appear();
    check_if_facilites_in_view();
    top_service_appear();
    top_values_appear();
    top_news_appear();
    top_company_appear();
    more_btn_appear();
    member_card_appear();
    company_profile_appear();
    company_building_appear();
    mission_h3_appear();
    mission_p_appear();
    mission_h4_appear();
    news_title_appear();
    news_content_appear();
}

function menuClick(x) {
    var menu = document.getElementsByTagName('menu');
    var body = document.getElementsByTagName('body');
    x.classList.toggle('menu_btn_open');
    if (x.classList.contains('menu_btn_open')) {
        if (menu[0].classList.contains('menu_close')) {
            menu[0].classList.remove('menu_close');
        }
        if (menu[0].classList.contains('menu_open')) {
            menu[0].classList.remove('menu_open');
        }
        menu[0].classList.add('menu_open');
        body[0].classList.add('body_menu_open');
        disableScroll();
    } else {
        menu[0].classList.add('menu_close');
        body[0].classList.remove('body_menu_open');
        menu[0].classList.remove('menu_open');
        enableScroll();
    }
}

function menuClose() {
    var menu = document.getElementsByTagName('menu');
    var menu_btn = document.getElementsByClassName('menu_btn');
    var body = document.getElementsByTagName('body');
    if (menu_btn[0].classList.contains('menu_btn_open')) {
        menu_btn[0].classList.remove('menu_btn_open');
        menu[0].classList.add('menu_close');
        body[0].classList.remove('body_menu_open');
        menu[0].classList.remove('menu_open');
        enableScroll();
    }
}
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function() { supportsPassive = true; }
    }));
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener('touchmove', preventDefault, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

function menuMouseOver(x) {
    var link = x.parentElement.parentElement.children;
    var i;
    for (i = 0; i < link.length; i++) {
        if (link[i] != x.parentElement) {
            link[i].firstElementChild.style.opacity = '0.4'
        }
    }
}

function menuMouseLeave(x) {
    var link = x.parentElement.parentElement.children;
    var i;
    for (i = 0; i < link.length; i++) {
        if (link[i] != x.parentElement) {
            link[i].firstElementChild.style.opacity = '1'
        }
    }
}

function btnMouseOver(x) {
    if (!x.classList.contains('menu_btn_open')) {
        if (!x.classList.contains('menu_btn_hover')) {
            x.classList.add('menu_btn_hover');
        }
    }
}

function btnMouseLeave(x) {
    if (!x.classList.contains('menu_btn_open')) {
        if (x.classList.contains('menu_btn_hover')) {
            x.classList.remove('menu_btn_hover');
        }
    }
}

var topBannerContent = document.querySelectorAll('.top_banner_container');

function top_banner_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    topBannerContent.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('top_banner_content_appear')) {
                element.classList.add('top_banner_content_appear');
            }
        } else {
            if (element.classList.contains('top_banner_content_appear')) {
                element.classList.remove('top_banner_content_appear');
            }
        }
    });
}
var sectionTitle = document.querySelectorAll('.section_title');

function check_if_facilites_in_view() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    sectionTitle.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('section_title_appear')) {
                element.classList.add('section_title_appear');
            }
        } else {
            if (element.classList.contains('section_title_appear')) {
                element.classList.remove('section_title_appear');
            }
        }
    });
}
var top_service_container = document.querySelectorAll('.top_service_card');

function top_service_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    top_service_container.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('top_service_appear')) {
                element.classList.add('top_service_appear');
            }
        } else {
            if (element.classList.contains('top_service_appear')) {
                element.classList.remove('top_service_appear');
            }
        }
    });
}
var top_values_container = document.querySelectorAll('.top_values_main');

function top_values_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    top_values_container.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('top_values_appear')) {
                element.classList.add('top_values_appear');
            }
        } else {
            if (element.classList.contains('top_values_appear')) {
                element.classList.remove('top_values_appear');
            }
        }
    });
}
var top_news_container = document.querySelectorAll('.top_news .news_card');

function top_news_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    top_news_container.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('top_news_appear')) {
                element.classList.add('top_news_appear');
            }
        } else {
            if (element.classList.contains('top_news_appear')) {
                element.classList.remove('top_news_appear');
            }
        }
    });
}
var top_company_container = document.querySelectorAll('.top_company .container:first-child');

function top_company_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    top_company_container.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('top_company_appear')) {
                element.classList.add('top_company_appear');
            }
        } else {
            if (element.classList.contains('top_company_appear')) {
                element.classList.remove('top_company_appear');
            }
        }
    });
}
var more_btn = document.querySelectorAll('.more_btn');

function more_btn_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    more_btn.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('more_btn_appear')) {
                element.classList.add('more_btn_appear');
            }
        } else {
            if (element.classList.contains('more_btn_appear')) {
                element.classList.remove('more_btn_appear');
            }
        }
    });
}
var member_card = document.querySelectorAll('.member_card');

function member_card_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    member_card.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop + 100;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('member_card_appear')) {
                if (element.classList.contains('member_card_disappear')) {
                    element.classList.remove('member_card_disappear')
                }
                element.classList.add('member_card_appear');
            }
        } else {
            if (element.classList.contains('member_card_appear')) {
                element.classList.add('member_card_disappear');
                element.classList.remove('member_card_appear')
            }
        }
    });
}
var companyProfile = document.querySelectorAll('.company_profile');

function company_profile_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    companyProfile.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('company_profile_appear')) {
                element.classList.add('company_profile_appear');
            }
        } else {
            if (element.classList.contains('company_profile_appear')) {
                element.classList.remove('company_profile_appear');
            }
        }
    });
}
var company_building = document.querySelectorAll('.company_building');

function company_building_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    company_building.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('company_building_appear')) {
                element.classList.add('company_building_appear');
            }
        } else {
            if (element.classList.contains('company_building_appear')) {
                element.classList.remove('company_building_appear');
            }
        }
    });
}
var mission_h3 = document.querySelectorAll('.mission h3');

function mission_h3_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    mission_h3.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('mission_h3_appear')) {
                element.classList.add('mission_h3_appear');
            }
        } else {
            if (element.classList.contains('mission_h3_appear')) {
                element.classList.remove('mission_h3_appear');
            }
        }
    });
}
var mission_p = document.querySelectorAll('.mission p');

function mission_p_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    mission_p.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('mission_p_appear')) {
                element.classList.add('mission_p_appear');
            }
        } else {
            if (element.classList.contains('mission_p_appear')) {
                element.classList.remove('mission_p_appear');
            }
        }
    });
}
var mission_h4 = document.querySelectorAll('.mission h4');

function mission_h4_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    mission_h4.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('mission_h4_appear')) {
                element.classList.add('mission_h4_appear');
            }
        } else {
            if (element.classList.contains('mission_h4_appear')) {
                element.classList.remove('mission_h4_appear');
            }
        }
    });
}

function newsCatClick(x) {
    var news_cat = x.parentElement.parentElement.children;
    var i;
    if (!x.classList.contains('news_category_current')) {
        x.classList.add('news_category_current');
    }
    for (i = 0; i < news_cat.length; i++) {
        if (news_cat[i] != x.parentElement) {
            if (news_cat[i].firstElementChild.classList.contains('news_category_current')) {
                news_cat[i].firstElementChild.classList.remove('news_category_current');
            }
        }
    }
}
var news_title = document.querySelectorAll('.news_detail_title');

function news_title_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    news_title.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('news_title_appear')) {
                element.classList.add('news_title_appear');
            }
        } else {
            if (element.classList.contains('news_title_appear')) {
                element.classList.remove('news_title_appear');
            }
        }
    });
}
var news_content = document.querySelectorAll('.news_detail_content > *');
var i;
for (i = 0; i < news_content.length; i++) {
    if (i < 5) {
        news_content[i].style.transitionDelay = 0.7 + i * 0.1 + 's';
    } else {
        news_content[i].style.transitionDelay = '1.2s';
    }
}

function news_content_appear() {
    var window_height = window.innerHeight;
    var window_top_position = window.scrollY;
    var window_bottom_position = (window_top_position + window_height);

    news_content.forEach(function(item) {
        var element = item;
        var element_height = element.scrollHeight;
        var element_top_position = element.offsetTop;
        var element_bottom_position = (element_top_position + element_height);

        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            if (!element.classList.contains('news_content_appear')) {
                element.classList.add('news_content_appear');
            }
        } else {
            if (element.classList.contains('news_content_appear')) {
                element.classList.remove('news_content_appear');
            }
        }
    });
}

var contact_items = document.querySelectorAll('.contact_box span *');

contact_items.forEach(item => {
    item.addEventListener('focus', (event) => {
        if (event.target.value != '') {
            if (event.target.classList.contains('contact_notext')) {
                event.target.classList.remove('contact_notext');
            }
            if (!event.target.classList.contains('contact_focus')) {
                event.target.classList.add('contact_focus');
            }
        } else {
            if (!event.target.classList.contains('contact_notext')) {
                if (!event.target.classList.contains('contact_focus')) {
                    event.target.classList.add('contact_focus');
                }
            }
        }
    });
});
contact_items.forEach(item => {
    item.addEventListener('blur', (event) => {
        if (event.target.classList.contains('contact_focus')) {
            event.target.classList.remove('contact_focus');
        }
        if (event.target.value == '') {
            if (!event.target.classList.contains('contact_notext')) {
                event.target.classList.add('contact_notext');
            }
        }
    });
});
contact_items.forEach(item => {
    item.addEventListener('input', (event) => {
        if (event.target.value != '') {
            if (event.target.classList.contains('contact_notext')) {
                event.target.classList.remove('contact_notext');
                if (!event.target.classList.contains('contact_focus')) {
                    event.target.classList.add('contact_focus');
                }
            }
        }
    });
});