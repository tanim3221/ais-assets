$(function() {
    $(document).on('click', '#navbar_btn', function(e) {
        e.preventDefault();
        $('#collapsibleNavbar').toggleClass('show');
    })

    $(document).on('click', '.gallery_nav', function(e) {
        e.preventDefault();
        $("#explore_more, #myModalNotice, #myModal, #myModalFileUpload, #myModalActivityInfo").modal('hide');
        var title = 'Gallery';
        var show = '.gallery_view';
        var hide = '.birth_more_all, .course_more_view_year,.course_more_view, .loggedin_more_view, .notifications,.wish_birthday, .bd_wish_more_view, .mobile_nav_wrapper_search,.document_view, .explore_view,.more_view, .log_more_view,  .notice_explore_view,.about_more_view, .link_more_view';
        viewWindow(title, show, hide);
        console.log('Gallery Tab');
    })
    $(document).on('click', '.document_nav', function(e) {
        e.preventDefault();
        $("#explore_more, #myModalNotice, #myModal, #myModalFileUpload, #myModalActivityInfo").modal('hide');
        var title = 'Document';
        var show = '.document_view';
        var hide = '.birth_more_all,.course_more_view_year,.course_more_view,.loggedin_more_view,.notifications,.wish_birthday,.bd_wish_more_view, .mobile_nav_wrapper_search,.gallery_view,.explore_view,.more_view, .log_more_view, .notice_explore_view,.about_more_view, .link_more_view';
        viewWindow(title, show, hide);
        console.log('Document Tab');
    })
    $(document).on('click', '.more_nav', function(e) {
        e.preventDefault();
        $("#explore_more, #myModalNotice, #myModal, #myModalFileUpload, #myModalActivityInfo").modal('hide');
        var title = 'More';
        var show = '.more_view';
        var hide = '.birth_more_all,.upcoming_title,.course_more_view_year,.course_more_view,.loggedin_more_view,.notifications,.wish_birthday,.bd_wish_more_view, .mobile_nav_wrapper_search,.gallery_view,.explore_view,.document_view, .log_more_view,  .notice_explore_view ,.about_more_view, .link_more_view';
        viewWindow(title, show, hide);
        console.log('More Tab');
    })
    $(document).on('click', '.explore_nav', function(e) {
        e.preventDefault();
        $("#explore_more, #myModalNotice, #myModal, #myModalFileUpload, #myModalActivityInfo").modal('hide');
        var title = 'Explore';
        var show = '.explore_view';
        var hide = '.course_more_view_year,.course_more_view,.loggedin_more_view,.notifications,.wish_birthday,.bd_wish_more_view, .mobile_nav_wrapper_search, .gallery_view,.more_view,.document_view, .log_more_view,  .about_more_view, .notice_explore_view, .link_more_view';
        var short_link = $('.explore_more_content').html();
        $('.all_batch_short_link').html(short_link);
        viewWindow(title, show, hide);
        console.log('Explore Tab');
    })
    $(document).on('click', '.dropbtn_nav', function(e) {
        e.preventDefault();

        var title = $(this).data('name');
        var show = '.users_loggedin_info_view';
        var hide = '.course_more_view_year,.course_more_view,.notifications,.wish_birthday,.bd_wish_more_view, .mobile_nav_wrapper_search, .gallery_view,.more_view,.document_view, .log_more_view,  .about_more_view, .notice_explore_view, .link_more_view';
        var short_link = $('.users_loggedin_info').html();
        $('.users_loggedin_info_view').html(short_link);
        viewWindow(title, show, hide);
        console.log('LoggedIn Info Tab');
    })
    $(document).on('click', '#birthday_view_title', function(e) {
        e.preventDefault();
        $("#explore_more, #myModalNotice, #myModal, #myModalFileUpload, #myModalActivityInfo").modal('hide');
        var date = $(this).data('date');
        var title = 'Birthday';
        var show = '.bd_wish_more_view, .upcoming_title, .birth_more_all';
        var hide = '.course_more_view_year,.course_more_view,.loggedin_more_view,.notifications,.wish_birthday,.explore_view, .mobile_nav_wrapper_search, .gallery_view,.more_view,.document_view, .log_more_view,  .about_more_view, .notice_explore_view, .link_more_view';
        viewWindow(title, show, hide);
        console.log(title + ' Tab');
    })

    $(document).on('click', '#course_view_title', function(e) {
        e.preventDefault();
        $("#explore_more, #myModalNotice, #myModal, #myModalFileUpload, #myModalActivityInfo").modal('hide');
        var title = 'AIS Courses';
        var show = '.course_more_view_year';
        var hide = '.birth_more_all,.loggedin_more_view,.notifications,.wish_birthday,.explore_view, .mobile_nav_wrapper_search, .gallery_view,.more_view,.document_view, .log_more_view,  .about_more_view, .notice_explore_view, .link_more_view';
        viewWindow(title, show, hide);
        console.log(title + ' Tab');
    })

    $(document).on('click', '#course_view_list', function(e) {
        e.preventDefault();
        var value = $(this).data('coursename');
        var year = $(this).data('year');
        CopyToClipboard(value);
        var log = value + ' Copied!';
        console.log(log);
        $('.modal_activity_view_info').html(log);
    })

    $(document).on('click', '#course_view_year', function(e) {
            e.preventDefault();
            var modal = '#myModalActivityInfo';
            var view = '#activity_view_info';
            $(modal).modal({
                show: true
            });
            $('.spinner_log').show();
            var year = $(this).data('year');
            var title = year + ' Courses';
            $('.modal_activity_view_info').html(title);
            console.log(title + ' Tab');
            $.ajax({
                type: 'GET',
                url: 'inc/get_course.php',
                dataType: 'html',
                data: { year: year },
                success: function(response) {
                    $(view).html(response);
                    $('.spinner_log').hide();
                    console.log("Course Success");
                }
            });
        })
        /*
            $(document).on('click', '#birthday_view_item', function(e) {
                e.preventDefault();
                var batch = $(this).data('batch');
                var studentid = $(this).data('studentid');
                var name = $(this).data('name');
                var id = $(this).data('id'); 
                var title = 'Birthday Wish ' + name;
                var show = '.wish_birthday';
                var hide = '.loggedin_more_view,.notifications,.bd_wish_more_view, .explore_view, .mobile_nav_wrapper_search, .gallery_view,.more_view,.document_view, .log_more_view,  .about_more_view, .notice_explore_view, .link_more_view';
                viewWindow(title, show, hide);
                console.log(title + ' Tab');
            })
        */
    $(document).on('click', '#notifications', function(e) {
        e.preventDefault();
        var title = 'Notifications';
        var show = '.notifications';
        var hide = '.course_more_view,.loggedin_more_view,.wish_birthday,.bd_wish_more_view, .explore_view, .mobile_nav_wrapper_search, .gallery_view,.more_view,.document_view, .log_more_view,  .about_more_view, .notice_explore_view, .link_more_view';
        viewWindow(title, show, hide);
        console.log(title + ' Tab');
    })

    $(document).on('click', '.search_nav', function(e) {
        e.preventDefault();
        $("#explore_more, #myModalNotice, #myModal, #myModalFileUpload, #myModalActivityInfo").modal('hide');
        $('.mobile_nav_wrapper').hide();
        window.location = 'home.php?search_here#search_results';
        //$('.mobile_nav_wrapper_search').show();
        console.log('Search Tab');
    })
    $(document).on('click', '.mobile_nav_close i', function(e) {
        e.preventDefault();
        $('.mobile_nav_wrapper').hide();
        $('.mobile_nav_wrapper_search').hide();
        console.log('Close Button');
    })
    $(document).on('click', '.explore_more_content', function(e) {
        e.preventDefault();
        $("#explore_more").modal('hide');
    })
    $(document).on('click', '#important_links_all_view', function(e) {
        e.preventDefault();
        var hide = '.notifications,.bd_wish_more_view, .mobile_nav_wrapper_search,.gallery_view,.explore_view,.document_view, .more_view';
        var show = '.link_more_view';
        var title = 'Important Links';
        viewWindow(title, show, hide);
        var important_links = $('.dropdown-menu.megamenu').html();
        $('.link_more_view.important_links').html(important_links);
    })
    $(document).on('click', '#about_database', function(e) {
        e.preventDefault();
        var hide = '.bd_wish_more_view, .mobile_nav_wrapper_search,.gallery_view,.explore_view,.document_view, .more_view, .link_more_view';
        var show = '.about_more_view';
        var title = 'About Database';
        viewWindow(title, show, hide);
        var footer = $('.footer-bottom').html();
        $('.about_more_view.about_database').html(footer);
    })
    $(document).on('click', '#insert_pre_key', function(e) {
        e.preventDefault();
        var key = $(this).data('key');
        $("#search_nav_movile").val(key);
    })
    $(document).on('click', '#activity_log_nav', function(e) {
        e.preventDefault();
        console.log("Activity log Clicked");
        var hide = '.bd_wish_more_view, .mobile_nav_wrapper_search,.gallery_view,.explore_view,.document_view, .more_view, .link_more_view';
        var show = '.log_more_view';
        var title = 'Activity Log';
        viewWindow(title, show, hide);
        $('.spinner_log').show();

        $.ajax({
            url: 'qr_generate.php?activitty_info_date_wise',
            dataType: 'html',
            success: function(response) {
                $('.log_more_view.activity_log').html(response);
                $('.spinner_log').hide();
                console.log("Activity log Success");
            }
        });
    })

    getPopupToday();

    function getPopupToday() {
        var popup = $('.today_birthday_class').html();
        $('.mobile_nav_title.popup').html('Wish your loved one a HAPPY BIRTHDAY now.');
        $('.today_birthday_class_wrapper').html(popup);
    }

    $(document).on('click', '#direct_key_search', function(e) {
        e.preventDefault();
        var cat = $(this).data('cat');
        var key = $(this).data('key');
        $('.mobile_nav_wrapper').hide();
        window.location = 'home.php?query=' + key + '&category=' + cat + '#search_results';
    })

    function viewWindow(title, show, hide) {
        $('.mobile_nav_title').html(title);
        $('.mobile_nav_wrapper').show();
        $(show).show();
        $(hide).hide();
    }

});


$(document).on('click', '#file_view_btn', function(e) {
    var title = $(this).data('title');
    var id = $(this).data('id');
    var modal = '#myModalFileView';
    var view = '#modal_file_view_content';
    var url = 'viewer.php?id=' + id + '&view&title=' + title;
    $(".modal_file_view_title").html(title);
    getDetailsViewInfo(url, modal, view);
});

$(document).on('click', '#view_btn_stds, #birthday_view_item', function(e) {
    var modal = '#myModalInfo';
    var view = '#web_content_info';
    var cat = 'students';
    var id = $(this).data('id');
    var batch = $(this).data('batch');
    var url = 'qr_generate.php?' + cat + '&id=' + id + '&batch=' + batch;
    getDetailsViewInfo(url, modal, view);
});

$(document).on('click', '#view_btn_tea', function(e) {
    var modal = '#myModalInfo';
    var view = '#web_content_info';
    var cat = 'teachers';
    var id = $(this).data('id');
    var url = 'qr_generate.php?' + cat + '&id=' + id;
    getDetailsViewInfo(url, modal, view);
});
$(document).on('click', '#view_btn_office_stuff', function(e) {
    var modal = '#myModalInfo';
    var view = '#web_content_info';
    var cat = 'office_stuff';
    var id = $(this).data('id');
    var url = 'qr_generate.php?' + cat + '&id=' + id;
    getDetailsViewInfo(url, modal, view);
});
$(document).on('click', '#login_info_batch_wise', function(e) {
    var modal = '#myModalLoginInfo';
    var view = '#login_view_info';
    var batch = $(this).data('batch');
    $('.modal_login_info_title').html('Login Info ' + batch + ' Batch');
    var url = 'qr_generate.php?login_info_batch_wise&batch=' + batch;
    getDetailsViewInfo(url, modal, view);
});
$(document).on('click', '#actual_login_info_batch_wise', function(e) {
    var modal = '#myModalLoginInfo';
    var view = '#login_view_info';
    var batch = $(this).data('batch');
    $('.modal_login_info_title').html('Login Info ' + batch + ' Batch');
    var url = 'qr_generate.php?actual_view&login_info_batch_wise&batch=' + batch;
    getDetailsViewInfo(url, modal, view);
});

$(document).on('click', '#today_login_info_batch_wise', function(e) {
    var modal = '#myModalLoginInfo';
    var view = '#login_view_info';
    var batch = $(this).data('batch');
    $('.modal_login_info_title').html('Login Info ' + batch + ' Batch');
    var url = 'qr_generate.php?today_view&login_info_batch_wise&batch=' + batch;
    getDetailsViewInfo(url, modal, view);
});

$(document).on('click', '#activity_log_view', function(e) {
    var modal = '#myModalActivityInfo';
    var view = '#activity_view_info';
    $('.modal_activity_view_info').html('My Activity Log');
    var url = 'qr_generate.php?activitty_info_date_wise';
    getDetailsViewInfo(url, modal, view);
});
$(document).on('click', '#shortcut_menu', function(e) {
    console.log('click on menu');
    $('.shortcut_menu').toggle();
})
$(document).on('click', '#view_login_info', function(e) {
    var login_id = $(this).data('id');
    var name = $(this).data('name');
    var time = $(this).data('time');
    var modal = '#myModalActivityInfo';
    var view = '#activity_view_info';
    $('.modal_activity_view_info').html('Login Info of ' + name + ' [' + time + ']');
    var url = 'qr_generate.php?mybatchlogin&logininfoid=' + login_id;
    getDetailsViewInfo(url, modal, view);
});

function getDetailsViewInfo(url, modal, view) {
    $(modal).modal({
        show: true
    });
    $('.spinner_log').show();
    $.ajax({
        url: url,
        dataType: 'html',
        success: function(response) {
            $(view).html(response);
            $('.spinner_log').hide();
            console.log("success");
        }
    });
}

$(document).ready(function() {
    $("#link_copy").click(function(event) {
        event.preventDefault();
        var link = $(this).data('link');
        CopyToClipboard(link, true, "Link copied successfully.");
    });
});

function CopyToClipboard(value, showNotification, notificationText) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    if (typeof showNotification === 'undefined') {
        showNotification = true;
    }
    if (typeof notificationText === 'undefined') {
        notificationText = "Copied to clipboard";
    }

    var notificationTag = $("div.copy-notification");
    if (showNotification && notificationTag.length == 0) {
        notificationTag = $("<div/>", {
            "class": "copy-notification",
            text: notificationText
        });
        $("body").append(notificationTag);

        notificationTag.fadeIn("slow", function() {
            setTimeout(function() {
                notificationTag.fadeOut("slow", function() {
                    notificationTag.remove();
                });
            }, 2000);
        });
    }
}

$(document).ready(function() {
    var setCookie = function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    var getCookie = function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }

    jQuery(document).ready(function($) {
        console.log(getCookie("bdpopupclosed"));
        if (getCookie("bdpopupclosed") == "bdpopupclosed") {
            //$(".wish_them_popup_wrapper").hide();
        }

        jQuery(".mobile_nav_close.popup").click(function() {
            jQuery(".wish_them_popup_wrapper").remove();
            setCookie("bdpopupclosed", "bdpopupclosed", 0.3);
        });
    });
});

$(document).ready(function() {
    $("#sort_search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".learn_card_class_ac, .learn_card_class").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(function() {
    $('#selectType').on('change', function() {
        if ($(this).val() === "file") {
            $('#file_upload').show();
            $('#file_link_upload').hide();
            $('#file').attr('required', 'required');
            $('#file_link_upload_input').removeAttr('required');

        } else if ($(this).val() === "file_link") {
            $('#file_link_upload').show();
            $('#file_upload').hide();
            $('#file_link_upload_input').attr('required', 'required');
            $('#file').removeAttr('required');
        }
    });

    $('#files_cat_select').on('change', function() {
        if ($(this).val() === "add_new") {
            $('#new_cat').show();
            //$('#old_cat').hide();
            $('#new_cat_input').attr('required', 'required');
            $('#new_cat_input').attr('name', 'cat');
            $('#files_cat_select').removeAttr('required');
            $('#files_cat_select').removeAttr('name');

        } else {
            //$('#old_cat').show();
            $('#new_cat').hide();
            $('#files_cat_select').attr('required', 'required');
            $('#files_cat_select').attr('name', 'cat');
            $('#new_cat_input').removeAttr('required');
            $('#new_cat_input').removeAttr('name');
        }
    });

    $('#album_select').on('change', function() {
        if ($(this).val() === "add_new") {
            $('#new_album').show();
            //$('#old_cat').hide();
            $('#new_album_input').attr('required', 'required');
            $('#new_album_input').attr('name', 'album');
            $('#album_select').removeAttr('required');
            $('#album_select').removeAttr('name');
        } else {
            //$('#old_cat').show();
            $('#new_album').hide();
            $('#album_select').attr('required', 'required');
            $('#album_select').attr('name', 'album');
            $('#new_album_input').removeAttr('required');
            $('#new_album_input').removeAttr('name');
        }
    });

    $('#files_year_select').on('change', function() {
        if ($(this).val() === "add_new") {
            $('#new_year').show();
            //$('#old_year').hide();
            $('#new_year_input').attr('required', 'required');
            $('#new_year_input').attr('name', 'recommanded_year');
            $('#files_year_select').removeAttr('required');
            $('#files_year_select').removeAttr('name');

        } else {
            //$('#old_year').show();
            $('#new_year').hide();
            $('#files_year_select').attr('required', 'required');
            $('#files_year_select').attr('name', 'recommanded_year');
            $('#new_year_input').removeAttr('required');
            $('#new_year_input').removeAttr('name');
        }
    });
});