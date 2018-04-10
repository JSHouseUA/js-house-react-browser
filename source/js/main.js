$(function() {
    "use strict";
    /*--------------------------------------------------
    -----------------   Preloader  -----------------
    ---------------------------------------------------*/
    $(document).ready(function() {
        $('.preloader').delay(400).fadeOut(500);
    });


    var btnclicked = false;
    var btnclicked2 = false;
    var currentpitem = "";
    /*--------------------------------------------------
    -----------------   Sidebars toggle  -----------------
    ---------------------------------------------------*/

    $("#left-menu-toggle").on('click', function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("left-toggled");
    });
    $("#right-menu-toggle").on('click', function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("right-toggled");

    });
    $(window).on('resize', function() {
        if ($(window).width() > 960) {
            $("#wrapper").removeClass('left-toggled ');
            $("#wrapper").removeClass('right-toggled ');
        }
    });
    /*--------------------------------------------------
    ---------------------   Menus  ---------------------
    ---------------------------------------------------*/
    if (url('?page') === 'home' || url('?page') === null) {
        $("#home").trigger("click").addClass("active");
    };
    if (url('?page') === 'about') {
        $("#about").trigger("click").addClass("active");
    };
    if (url('?page') === 'contact') {
        $("#contact").trigger("click").addClass("active");
    };
    if (url('?page') === 'services') {
        $("#services").trigger("click").addClass("active");
    };
    if (url('?page') === 'portfolio') {
        $("#portfolio").trigger("click").addClass("active");
    };
    if (url('?page') === 'blog') {
        $("#blog").trigger("click").addClass("active");
    };
    if (url('?page') === 'buttons') {
        $("#buttons").trigger("click").addClass("active");
    };
    if (url('?page') === 'typography') {
        $("#typography").trigger("click").addClass("active");
    };
    if (url('?page') === 'contact') {
        $("#contact").trigger("click").addClass("active");
    };
    if (url('?page') === 'servicebox') {
        $("#servicebox").trigger("click").addClass("active");
    };
    if (url('?page') === 'skillsbox') {
        $("#skillsbox").trigger("click").addClass("active");
    };
    if (url('?page') === 'alerts') {
        $("#alerts").trigger("click").addClass("active");
    };
    if (url('?page') === 'grids') {
        $("#grids").trigger("click").addClass("active");
    };
    if (url('?page') === 'availability') {
        $("#availability").trigger("click").addClass("active");
    };

    $("#home").on('click', function(event) {
        History.pushState(null, null, '?page=home');
    });
    $("#about").on('click', function(event) {
        History.pushState(null, null, '?page=about');
    });
    $("#contact").on('click', function(event) {
        History.pushState(null, null, '?page=contact');
    });
    $("#services").on('click', function(event) {
        History.pushState(null, null, '?page=services');
    });
    $("#portfolio").on('click', function(event) {
        History.pushState(null, null, '?page=portfolio');
    });
    $("#blog").on('click', function(event) {
        History.pushState(null, null, '?page=blog');
    });
    $("#buttons").on('click', function(event) {
        History.pushState(null, null, '?page=buttons');
    });
    $("#contact").on('click', function(event) {
        History.pushState(null, null, '?page=contact');
    });
    $("#typography").on('click', function(event) {
        History.pushState(null, null, '?page=typography');
    });
    $("#servicebox").on('click', function(event) {
        History.pushState(null, null, '?page=servicebox');
    });
    $("#skillsbox").on('click', function(event) {
        History.pushState(null, null, '?page=skillsbox');
    });
    $("#alerts").on('click', function(event) {
        History.pushState(null, null, '?page=alerts');
    });
    $("#grids").on('click', function(event) {
        History.pushState(null, null, '?page=grids');
    });
    $("#availability").on('click', function(event) {
        History.pushState(null, null, '?page=availability');
    });


    $(".pt-trigger").on('click', function(e) {
        $(".pt-trigger").removeClass("active");
        $(this).addClass("active");
        if ($(window).width() < 560) {
            $("#wrapper").removeClass('left-toggled ');
        }

    });
    /*--------------------------------------------------
    -----------------   Responsive  -----------------
    ---------------------------------------------------*/
    new ResizeSensor(jQuery('.pt-page'), function() {
        if ($('.pt-page').width() < 680) {
            $(".aboutcol").removeClass('col-md-6');
            $(".aboutcol").addClass('col-md-12');
            $(".servicecol").removeClass('col-sm-4');
            $(".servicecol").addClass('col-sm-12');

        } else {
            $(".aboutcol").removeClass('col-md-12');
            $(".aboutcol").addClass('col-md-6');
            $(".servicecol").removeClass('col-sm-12');
            $(".servicecol").addClass('col-sm-4');


        };
    });
    if ($('.pt-page').width() < 680) {
        $(".aboutcol").removeClass('col-md-6');
        $(".aboutcol").addClass('col-md-12');
        $(".servicecol").removeClass('col-sm-4');
        $(".servicecol").addClass('col-sm-12');


    };
    new ResizeSensor(jQuery('.pt-page'), function() {
        if ($('.pt-page').width() < 850) {
            $(".portitem").removeClass('col-md-4');
            $(".portitem").addClass('col-md-6');
            $(".blogcol").removeClass('col-md-4');
            $(".blogcol").addClass('col-md-6');
            $(".pricingcol4").removeClass('col-md-4');
            $(".pricingcol4").addClass('col-md-12');
            $(".pricingcol8").removeClass('col-md-8');
            $(".pricingcol8").addClass('col-md-12');
            $(".calendarcol4").removeClass('col-md-4');
            $(".calendarcol4").addClass('col-md-12');
            $(".calendarcol8").removeClass('col-md-8');
            $(".calendarcol8").addClass('col-md-12');
            $(".portfcountcol").removeClass('col-md-4');
            $(".portfcountcol").addClass('col-md-12');

        } else {
            $(".portitem").removeClass('col-md-6');
            $(".portitem").addClass('col-md-4');
            $(".blogcol").removeClass('col-md-6');
            $(".blogcol").addClass('col-md-4');
            $(".pricingcol4").removeClass('col-md-12');
            $(".pricingcol4").addClass('col-md-4');
            $(".pricingcol8").removeClass('col-md-12');
            $(".pricingcol8").addClass('col-md-8');
            $(".calendarcol4").removeClass('col-md-12');
            $(".calendarcol4").addClass('col-md-4');
            $(".calendarcol8").removeClass('col-md-12');
            $(".calendarcol8").addClass('col-md-8');
            $(".portfcountcol").removeClass('col-md-12');
            $(".portfcountcol").addClass('col-md-4');
        };
    });
    if ($('.pt-page').width() < 850) {
        $(".portitem").removeClass('col-md-4');
        $(".portitem").addClass('col-md-6');
        $(".blogcol").removeClass('col-md-4');
        $(".blogcol").addClass('col-md-6');
        $(".pricingcol4").removeClass('col-md-4');
        $(".pricingcol4").addClass('col-md-12');
        $(".pricingcol8").removeClass('col-md-8');
        $(".pricingcol8").addClass('col-md-12');
        $(".calendarcol4").removeClass('col-md-4');
        $(".calendarcol4").addClass('col-md-12');
        $(".calendarcol8").removeClass('col-md-8');
        $(".calendarcol8").addClass('col-md-12');
        $(".portfcountcol").removeClass('col-md-4');
        $(".portfcountcol").addClass('col-md-12');

    };

    /*--------------------------------------------------
    -----------------   Sub naviguation -----------------
    ---------------------------------------------------*/

    $('.main-nav li > .subnav').parent().addClass('has-subnav');


    $('.main-nav li.has-subnav > a').each(function() {

        var $this = $(this);

        var myClone = $this.clone();
        var myCloneParent = $this.next('.subnav');

        myClone.prependTo(myCloneParent).addClass('back-track').wrap('<li></li>');

    });

    $('.main-nav li.has-subnav > a').on('click', function() {

        var $this = $(this);

        $this.next('.subnav').addClass('active');
        $("#left-sidebar-wrapper").mCustomScrollbar("scrollTo", "top");



    });

    $('.main-nav a.back-track').on('click', function() {
        var $this = $(this);

        $this.parent().parent().removeClass('active');

    });
    /*--------------------------------------------------
    -------------------   Portfolio    -----------------
    ---------------------------------------------------*/

    var shuffleme = (function($) {
        'use strict';
        var $grid = $('#grid'), //locate what we want to sort 
            $filterOptions = $('.portfolio-sorting li'), //locate the filter categories
            $sizer = $grid.find('.shuffle_sizer'), //sizer stores the size of the items

            init = function() {

                // None of these need to be executed synchronously
                setTimeout(function() {
                    listen();
                    setupFilters();
                }, 100);

                // instantiate the plugin
                $grid.shuffle({
                    itemSelector: '[class*="col-"]',
                    sizer: $sizer,
                    speed: 500
                });
            },



            // Set up button clicks
            setupFilters = function() {
                var $btns = $filterOptions.children();
                $btns.on('click', function(e) {
                    e.preventDefault();
                    var $this = $(this),
                        isActive = $this.hasClass('active'),
                        group = isActive ? 'all' : $this.data('group');

                    // Hide current label, show current label in title
                    if (!isActive) {
                        $('.portfolio-sorting li a').removeClass('active');
                    }

                    $this.toggleClass('active');

                    // Filter elements
                    $grid.shuffle('shuffle', group);
                });

                $btns = null;
            },

            // Re layout shuffle when images load. This is only needed
            // below 768 pixels because the .picture-item height is auto and therefore
            // the height of the picture-item is dependent on the image
            // I recommend using imagesloaded to determine when an image is loaded
            // but that doesn't support IE7
            listen = function() {
                var debouncedLayout = $.throttle(300, function() {
                    $grid.shuffle('update');
                });

                // Get all images inside shuffle
                $grid.find('img').each(function() {
                    var proxyImage;

                    // Image already loaded
                    if (this.complete && this.naturalWidth !== undefined) {
                        return;
                    }

                    // If none of the checks above matched, simulate loading on detached element.
                    proxyImage = new Image();
                    $(proxyImage).on('load', function() {
                        $(this).off('load');
                        debouncedLayout();
                    });

                    proxyImage.src = this.src;
                });

                // Because this method doesn't seem to be perfect.
                setTimeout(function() {
                    debouncedLayout();
                }, 500);
            };

        return {
            init: init
        };
    }(jQuery));

    $(document).ready(function() {
        shuffleme.init(); //filter portfolio
    });

    new ResizeSensor(jQuery('.thecontainer'), function() {
        var $grid = $('#grid');
        $grid.shuffle('update');
    });

    $('.openBtn').each(function() {
        $(this).on('click', function(event) {
            event.preventDefault();
            var acturl = url();
            $.loadmodal({
                url: $(this).attr('href'),
                id: 'my-modal-id' + $(this).attr('href').replace(".html", ''),
                title: '',
            }).create(function(event) {
                NProgress.start();
            }).show(function(event) {
                NProgress.done();
            }).close(function(event) {
                btnclicked = false;
                History.replaceState(null, null, acturl);
            });
        });
    });

    var State = History.getState(); // Note: We are using History.getState() instead of event.state
    History.Adapter.bind(window, 'statechange', function() { // Note: We are using statechange instead of popstate
        if (url('?pitem') === null) {
            btnclicked = false;
        }
        if ((url('?page') === 'portfolio') && (btnclicked === false)) {
            if (url('?pitem') === null) {
                $('.modal').modal('hide');

            } else {
                $.loadmodal({
                    url: url('?pitem'),
                    title: '',
                    id: 'my-modal-id' + url('?pitem').replace(".html", ''),
                }).create(function(event) {
                    NProgress.start();
                }).show(function(event) {
                    NProgress.done();
                }).close(function(event) {
                    btnclicked = false;
                    History.replaceState(null, null, url().replace("&pitem=" + url('?pitem'), ''));
                });
            }
        }
    });


    if (url('?pitem') != null) {
        $.loadmodal({
            url: url('?pitem'),
            title: '',
            id: 'my-modal-id' + url('?pitem').replace(".html", ''),
        }).create(function(event) {
            NProgress.start();
        }).show(function(event) {
            NProgress.done();
        }).close(function(event) {
            btnclicked = false;
            History.replaceState(null, null, url().replace("&pitem=" + url('?pitem'), ''));
        });
    }

    $('.openBtn').on('click', function(event) {
        btnclicked = true;
        event.preventDefault();
        History.pushState(null, null, window.location.href + "&pitem=" + $(this).attr('href'));
        currentpitem = $(this).attr('href');

    });

    var portfolioitems = ["portfolio-item1.html", "portfolio-item2.html"];
    $(document).on('click', '.naviguationportfolio .nextportfolio', function() {

        btnclicked = true;
        var acturllnav = url('?pitem');
        $('#my-modal-id' + acturllnav.replace(".html", '')).modal('hide');
        var nextitem = portfolioitems[($.inArray(acturllnav, portfolioitems) + 1) % portfolioitems.length];
        History.replaceState(null, null, url().replace("&pitem=" + url('?pitem'), "&pitem=" + nextitem));
        $.loadmodal({
            url: nextitem,
            title: '',
            id: 'my-modal-id' + nextitem.replace(".html", ''),
        }).create(function(event) {
            NProgress.start();
        }).show(function(event) {
            NProgress.done();
        }).close(function(event) {
            btnclicked = false;
            History.replaceState(null, null, url().replace("&pitem=" + nextitem, ''));
        });

    });
    /*--------------------------------------------------
    --------------   portfolio gallerie  ---------------
    ---------------------------------------------------*/
    $('.openBtngal').on('click', function(event) {
        event.preventDefault();

        var gallery = $(this).attr('href');

        $(gallery).magnificPopup({
            delegate: 'a',
            tLoading: '',
            type: 'image',
            image: {
                tError: ''
            },
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');
    });
    /*--------------------------------------------------
    -------------------   Popup Video  -----------------
    ---------------------------------------------------*/

    $('.openvideomag').magnificPopup({
        type: 'iframe',


        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '<div class="mfp-title">Some caption</div>' +
                '</div>'
        },
        callbacks: {
            markupParse: function(template, values, item) {
                values.title = item.el.attr('title');
            }
        }


    });


    /*--------------------------------------------------
    ---------------------   Blog  ----------------------
    ---------------------------------------------------*/

    $('.button-single-post').each(function() {
        $(this).on('click', function(event) {
            event.preventDefault();
            var acturl = url();
            $.loadmodal({
                url: $(this).attr('href'),
                title: '',
                id: 'blogpost-id',
            }).create(function(event) {
                NProgress.start();
            }).show(function(event) {
                NProgress.done();
            }).close(function(event) {
                btnclicked2 = false;
                History.replaceState(null, null, acturl);
            });
        });
    });

    var State = History.getState(); // Note: We are using History.getState() instead of event.state
    History.Adapter.bind(window, 'statechange', function() { // Note: We are using statechange instead of popstate
        if (url('?bitem') === null) {
            btnclicked2 = false;
        }
        if ((url('?page') === 'blog') && (btnclicked2 === false)) {
            if (url('?bitem') === null) {
                $('.modal').modal('hide');

            } else {
                $.loadmodal({
                    url: url('?bitem'),
                    title: '',
                    id: 'blogpost-id',
                }).create(function(event) {
                    NProgress.start();
                }).show(function(event) {
                    NProgress.done();
                }).close(function(event) {
                    btnclicked2 = false;
                    History.replaceState(null, null, url().replace("&bitem=" + url('?bitem'), ''));
                });
            }
        }
    });


    if (url('?bitem') != null) {
        $.loadmodal({
            url: url('?bitem'),
            title: '',
            id: 'blogpost-id',
        }).create(function(event) {
            NProgress.start();
        }).show(function(event) {
            NProgress.done();
        }).close(function(event) {
            btnclicked2 = false;
            History.replaceState(null, null, url().replace("&bitem=" + url('?bitem'), ''));
        });
    }

    $('.button-single-post').on('click', function(event) {
        btnclicked2 = true;
        event.preventDefault();
        History.pushState(null, null, window.location.href + "&bitem=" + $(this).attr('href'));


    });

    /*--------------------------------------------------
    -----------------   Cusom Ccroll  ------------------
    ---------------------------------------------------*/

    $("#left-sidebar-wrapper").mCustomScrollbar({
        theme: "light-2",
        autoHideScrollbar: true,
        mouseWheel: {
            scrollAmount: 170,
            normalizeDelta: true
        }
    });
    $("#right-sidebar-wrapper").mCustomScrollbar({
        theme: "light-2",
        autoHideScrollbar: true,
        mouseWheel: {
            scrollAmount: 170,
            normalizeDelta: true
        }
    });
    $(".pagescroll").mCustomScrollbar({
        theme: "dark",
        mouseWheel: {
            scrollAmount: 270,
            normalizeDelta: true
        }
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#right-sidebar-wrapper").mCustomScrollbar("destroy");
        $(".pagescroll").mCustomScrollbar("destroy");
    }


    $('#fullpage').fullpage({ navigation: true, scrollBar: false });
    $('#fp-nav').appendTo('.pt-page-1');
    /*$('#fullpage-video').fullpage({ navigation: false, scrollBar: false });*/

    /*--------------------------------------------------
    -----------------   Contact config  ----------------
    ---------------------------------------------------*/

    $("#submit_btn").on('click', function() {
        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_message = $('textarea[name=message]').val();

        var proceed = true;
        if (user_name === "") {
            $('input[name=name]').css('border-color', 'red');
            proceed = false;
        }
        if (user_email === "") {
            $('input[name=email]').css('border-color', 'red');
            proceed = false;
        }
        if (user_message === "") {
            $('textarea[name=message]').css('border-color', 'red');
            proceed = false;
        }
        if (proceed) {
            NProgress.start();
            //data to be sent to server
            var post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userMessage': user_message
            };
            var output;
            //Ajax post data to server
            $.post('contact.php', post_data, function(response) {


                //load json data from server and output message     
                if (response.type === 'error') {
                    output = '<div class="error">' + response.text + '</div>';
                    NProgress.done();
                } else {
                    output = '<div class="success">' + response.text + '</div>';
                    NProgress.done();

                    //reset values in all input fields
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('');
                }

                $("#result").hide().html(output).slideDown().delay(4000).slideUp();
            }, 'json');

        }
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").on('keyup', function() {
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });

    /*--------------------------------------------------
    -----------------   Pricing Table  -----------------
    ---------------------------------------------------*/

    // Price Table
    var individual_price_table = $('#price_tables').find('.individual');
    var company_price_table = $('#price_tables').find('.company');


    $('.switch-toggles').find('.individual').addClass('active');
    $('#price_tables').find('.individual').addClass('active');

    $('.switch-toggles').find('.individual').on('click', function() {
        $(this).addClass('active');
        $(this).closest('.switch-toggles').removeClass('active');
        $(this).siblings().removeClass('active');
        individual_price_table.addClass('active');
        company_price_table.removeClass('active');
    });

    $('.switch-toggles').find('.company').on('click', function() {
        $(this).addClass('active');
        $(this).closest('.switch-toggles').addClass('active');
        $(this).siblings().removeClass('active');
        company_price_table.addClass('active');
        individual_price_table.removeClass('active');
    });

    function buildItem(id, type, length, src, preview, link, seen, time) {
        return {
            "id": id,
            "type": type,
            "length": length,
            "src": src,
            "preview": preview,
            "link": link,
            "seen": seen,
            "time": time
        };
    }

    var initDemo = function() {
        var header = document.getElementById("header");
        var skin = location.href.split('skin=')[1];

        if (!skin) {
            skin = 'Snapgram';
        }

        if (skin.indexOf('#') !== -1) {
            skin = skin.split('#')[0];
        }

        var skins = {
            'Snapgram': {
                'avatars': true,
                'list': false,
                'autoFullScreen': false,
                'cubeEffect': true
            },

            'VemDeZAP': {
                'avatars': false,
                'list': true,
                'autoFullScreen': false,
                'cubeEffect': false
            },

            'FaceSnap': {
                'avatars': true,
                'list': false,
                'autoFullScreen': true,
                'cubeEffect': false
            },

            'Snapssenger': {
                'avatars': false,
                'list': false,
                'autoFullScreen': false,
                'cubeEffect': false
            }
        };

        var timeIndex = 0;
        var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];
        var timestamp = function() {
            var now = new Date();
            var shift = shifts[timeIndex++] || 0;
            var date = new Date(now - shift * 1000);

            return date.getTime() / 1000;
        };

        var stories = new Zuck('stories', {
            backNative: true,
            autoFullScreen: skins[skin]['autoFullScreen'],
            skin: skin,
            avatars: skins[skin]['avatars'],
            list: skins[skin]['list'],
            cubeEffect: skins[skin]['cubeEffect'],
            localStorage: true,
            stories: [{
                id: "johndoe",
                photo: "images/portrait.jpg",
                name: "STORIES",
                link: "",
                lastUpdated: 1505845276,
                items: [
                    buildItem("johndoe-1", "photo", 5, "images/portfolio5.jpeg", "images/portfolio5.jpeg", '', false, 1505845276),
                    buildItem("johndoe-3", "photo", 3, "images/portrait.jpg", "images/portrait.jpg", '', false, 1505845276),
                ]
            }]
        });

        var el = document.querySelectorAll('#skin option');
        var total = el.length;
        for (var i = 0; i < total; i++) {
            var what = (skin === el[i].value) ? true : false;

            if (what) {
                el[i].setAttribute('selected', what);

                header.innerHTML = skin;
                header.className = skin;
            } else {
                el[i].removeAttribute('selected');
            }
        }

        document.body.style.display = 'block';
    };

    initDemo();



});

/*--------------------------------------------------
--------------------  Calendar  --------------------
---------------------------------------------------*/
! function() {

    var today = moment();

    function Calendar(selector, events) {
        this.el = document.querySelector(selector);
        this.events = events;
        this.current = moment().date(1);
        /*
        this.events.forEach(function(ev) {
        ev.date = moment(ev.date);
        });

        */
        this.draw();
        var current = document.querySelector('.today');
        if (current) {
            var self = this;
            window.setTimeout(function() {
                self.openDay(current);
            }, 500);
        }
    }

    Calendar.prototype.draw = function() {
        //Create Header
        this.drawHeader();

        //Draw Month
        this.drawMonth();


    }

    Calendar.prototype.drawHeader = function() {
        var self = this;
        if (!this.header) {
            //Create the header elements
            this.header = createElement('div', 'headercal');
            this.header.className = 'headercal';

            this.title = createElement('h1');

            var right = createElement('div', 'rightcal');
            right.addEventListener('click', function() { self.nextMonth(); });

            var left = createElement('div', 'leftcal');
            left.addEventListener('click', function() { self.prevMonth(); });

            //Append the Elements
            this.header.appendChild(this.title);
            this.header.appendChild(right);
            this.header.appendChild(left);
            this.el.appendChild(this.header);
        }

        this.title.innerHTML = this.current.format('MMMM YYYY');
    }

    Calendar.prototype.drawMonth = function() {
        var self = this;
        /* Demo purpose */
        this.events.forEach(function(ev) {
            ev.date = self.current.clone().date(Math.random() * (29 - 1) + 1);
        });
        /*Demo purpose */

        if (this.month) {
            this.oldMonth = this.month;
            this.oldMonth.className = 'month out ' + (self.next ? 'next' : 'prev');
            this.oldMonth.addEventListener('webkitAnimationEnd', function() {
                self.oldMonth.parentNode.removeChild(self.oldMonth);
                self.month = createElement('div', 'month');
                self.backFill();
                self.currentMonth();
                self.fowardFill();
                self.el.appendChild(self.month);
                window.setTimeout(function() {
                    self.month.className = 'month in ' + (self.next ? 'next' : 'prev');
                }, 16);
            });
        } else {
            this.month = createElement('div', 'month');
            this.el.appendChild(this.month);
            this.backFill();
            this.currentMonth();
            this.fowardFill();
            this.month.className = 'month new';
        }
    }

    Calendar.prototype.backFill = function() {
        var clone = this.current.clone();
        var dayOfWeek = clone.day();

        if (!dayOfWeek) {
            return;
        }

        clone.subtract('days', dayOfWeek + 1);

        for (var i = dayOfWeek; i > 0; i--) {
            this.drawDay(clone.add('days', 1));
        }
    }

    Calendar.prototype.fowardFill = function() {
        var clone = this.current.clone().add('months', 1).subtract('days', 1);
        var dayOfWeek = clone.day();

        if (dayOfWeek === 6) {
            return;
        }

        for (var i = dayOfWeek; i < 6; i++) {
            this.drawDay(clone.add('days', 1));
        }
    }

    Calendar.prototype.currentMonth = function() {
        var clone = this.current.clone();

        while (clone.month() === this.current.month()) {
            this.drawDay(clone);
            clone.add('days', 1);
        }
    }

    Calendar.prototype.getWeek = function(day) {
        if (!this.week || day.day() === 0) {
            this.week = createElement('div', 'week');
            this.month.appendChild(this.week);
        }
    }

    Calendar.prototype.drawDay = function(day) {
        var self = this;
        this.getWeek(day);

        //Outer Day
        var outer = createElement('div', this.getDayClass(day));
        outer.addEventListener('click', function() {
            self.openDay(this);
            $('.day-number').removeClass('clickedday');
            $(this).find('.day-number').addClass('clickedday');

        });

        //Day Name
        var name = createElement('div', 'day-name', day.format('ddd'));

        //Day Number
        var number = createElement('div', 'day-number', day.format('DD'));


        //Events
        var events = createElement('div', 'day-events');
        this.drawEvents(day, events);

        outer.appendChild(name);
        outer.appendChild(number);
        outer.appendChild(events);
        this.week.appendChild(outer);
    }

    Calendar.prototype.drawEvents = function(day, element) {
        if (day.month() === this.current.month()) {
            var todaysEvents = this.events.reduce(function(memo, ev) {
                if (ev.date.isSame(day, 'day')) {
                    memo.push(ev);
                }
                return memo;
            }, []);

            todaysEvents.forEach(function(ev) {
                var evSpan = createElement('span', ev.color);
                element.appendChild(evSpan);
            });
        }
    }

    Calendar.prototype.getDayClass = function(day) {
        classes = ['day'];
        if (day.month() !== this.current.month()) {
            classes.push('other');
        } else if (today.isSame(day, 'day')) {
            classes.push('today');
        }
        return classes.join(' ');
    }

    Calendar.prototype.openDay = function(el) {
        var details;
        var dayNumber = +el.querySelectorAll('.day-number')[0].innerText || +el.querySelectorAll('.day-number')[0].textContent;
        var day = this.current.clone().date(dayNumber);

        var currentOpened = document.querySelector('.details');

        //Check to see if there is an open detais box on the current row
        if (currentOpened && currentOpened.parentNode === el.parentNode) {
            details = currentOpened;
        } else {
            //Close the open events on differnt week row
            //currentOpened && currentOpened.parentNode.removeChild(currentOpened);
            if (currentOpened) {
                currentOpened.addEventListener('webkitAnimationEnd', function() {
                    currentOpened.parentNode.removeChild(currentOpened);
                });
                currentOpened.addEventListener('oanimationend', function() {
                    currentOpened.parentNode.removeChild(currentOpened);
                });
                currentOpened.addEventListener('msAnimationEnd', function() {
                    currentOpened.parentNode.removeChild(currentOpened);
                });
                currentOpened.addEventListener('animationend', function() {
                    currentOpened.parentNode.removeChild(currentOpened);
                });
                currentOpened.className = 'details out';
            }

            //Create the Details Container
            details = createElement('div', 'details in');


            //Create the event wrapper

            el.parentNode.appendChild(details);
        }

        var todaysEvents = this.events.reduce(function(memo, ev) {
            if (ev.date.isSame(day, 'day')) {
                memo.push(ev);
            }
            return memo;
        }, []);

        this.renderEvents(todaysEvents, details);

    }

    Calendar.prototype.renderEvents = function(events, ele) {
        //Remove any events in the current details element
        var currentWrapper = ele.querySelector('.events');
        var wrapper = createElement('div', 'events in' + (currentWrapper ? ' new' : ''));

        events.forEach(function(ev) {
            var div = createElement('div', 'event');
            var square = createElement('div', 'event-category ' + ev.color);
            var span = createElement('span', '', ev.eventName);

            div.appendChild(square);
            div.appendChild(span);
            wrapper.appendChild(div);
        });

        if (!events.length) {
            var div = createElement('div', 'event empty');
            var span = createElement('span', '', 'No Events For This Day');

            div.appendChild(span);
            wrapper.appendChild(div);
        }

        if (currentWrapper) {
            currentWrapper.className = 'events out';
            currentWrapper.addEventListener('webkitAnimationEnd', function() {
                currentWrapper.parentNode.removeChild(currentWrapper);
                ele.appendChild(wrapper);
            });
            currentWrapper.addEventListener('oanimationend', function() {
                currentWrapper.parentNode.removeChild(currentWrapper);
                ele.appendChild(wrapper);
            });
            currentWrapper.addEventListener('msAnimationEnd', function() {
                currentWrapper.parentNode.removeChild(currentWrapper);
                ele.appendChild(wrapper);
            });
            currentWrapper.addEventListener('animationend', function() {
                currentWrapper.parentNode.removeChild(currentWrapper);
                ele.appendChild(wrapper);
            });
        } else {
            ele.appendChild(wrapper);
        }
    }




    Calendar.prototype.nextMonth = function() {
        this.current.add('months', 1);
        this.next = true;
        this.draw();
    }

    Calendar.prototype.prevMonth = function() {
        this.current.subtract('months', 1);
        this.next = false;
        this.draw();
    }

    window.Calendar = Calendar;

    function createElement(tagName, className, innerText) {
        var ele = document.createElement(tagName);
        if (className) {
            ele.className = className;
        }
        if (innerText) {
            ele.innderText = ele.textContent = innerText;
        }
        return ele;
    }
}();
/*Demo Purpose*/
! function() {
    var data = [
        { eventName: 'Meeting With Developers', calendar: 'Work', color: 'red' },
        { eventName: 'Workshop - Web Developers', calendar: 'Work', color: 'red' },
        { eventName: 'Release First Version', calendar: 'Work', color: 'red' },
        { eventName: 'New App Demo', calendar: 'Work', color: 'red' },

        { eventName: 'San Degio vs Portalnd', calendar: 'Sports', color: 'blue' },
        { eventName: 'Denver vs Houston', calendar: 'Sports', color: 'blue' },
        { eventName: 'Portalnd vs Denver', calendar: 'Sports', color: 'blue' },
        { eventName: 'Denver vs San Degio', calendar: 'Sports', color: 'blue' },

        { eventName: 'School Activities', calendar: 'Kids', color: 'yellow' },
        { eventName: 'Parent Conference', calendar: 'Kids', color: 'yellow' },
        { eventName: 'Kids Party', calendar: 'Kids', color: 'yellow' },
        { eventName: 'kids Coding', calendar: 'Kids', color: 'yellow' },

        { eventName: 'Gardening', calendar: 'Other', color: 'green' },
        { eventName: 'Soccer Team', calendar: 'Other', color: 'green' },
        { eventName: 'Teach Kids To Code', calendar: 'Other', color: 'green' },
        { eventName: 'Startup Meeting', calendar: 'Other', color: 'green' }
    ];
    /*Demo Purpose*/


    /*
    ! function() {
        var data = [
            { eventName: 'Meeting With Developers', calendar: 'Work', color: 'red', date: '2017-02-08' },
            { eventName: 'Workshop - Web Developers', calendar: 'Work', color: 'red', date: '2017-03-08' },
            { eventName: 'Release First Version', calendar: 'Work', color: 'red', date: '2017-02-13' },
            { eventName: 'New App Demo', calendar: 'Work', color: 'red', date: '2017-02-19' },

            { eventName: 'San Degio vs Portalnd', calendar: 'Sports', color: 'blue', date: '2017-02-28' },
            { eventName: 'Denver vs Houston', calendar: 'Sports', color: 'blue', date: '2017-03-19' },
            { eventName: 'Portalnd vs Denver', calendar: 'Sports', color: 'blue', date: '2017-02-04' },
            { eventName: 'Denver vs San Degio', calendar: 'Sports', color: 'blue', date: '2017-02-01' },

            { eventName: 'School Activities', calendar: 'Kids', color: 'yellow', date: '2017-02-25' },
            { eventName: 'Parent Conference', calendar: 'Kids', color: 'yellow', date: '2017-02-19' },
            { eventName: 'Kids Party', calendar: 'Kids', color: 'yellow', date: '2017-03-31' },
            { eventName: 'kids Coding', calendar: 'Kids', color: 'yellow', date: '2017-02-20' },

            { eventName: 'Gardening', calendar: 'Other', color: 'green', date: '2017-02-08' },
            { eventName: 'Soccer Team', calendar: 'Other', color: 'green', date: '2017-02-10' },
            { eventName: 'Teach Kids to Code', calendar: 'Other', color: 'green', date: '2017-03-04' },
            { eventName: 'Startup Meeting', calendar: 'Other', color: 'green', date: '2017-03-17' }
        ];
        */

    /*Demo purpose*/
    function addDate(ev) {

    }
    /*Demo Purpose*/
    var calendar = new Calendar('#calendar', data);

}();