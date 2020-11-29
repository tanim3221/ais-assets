$(function() {
    $(document).on('click', '#navbar_btn', function(e) {
        e.preventDefault();
        $('#collapsibleNavbar').toggleClass('show');
    })

    $(document).on('click', '.gallery_nav', function(e) {
        e.preventDefault();
        var title = 'Gallery';
        var show = '.gallery_view';
        var hide = '.mobile_nav_wrapper_search,.document_view, .explore_view,.more_view, .log_more_view,  .notice_explore_view,.about_more_view, .link_more_view';
        viewWindow(title, show, hide);
        console.log('Gallery Tab');
    })
    $(document).on('click', '.document_nav', function(e) {
        e.preventDefault();
        var title = 'Document';
        var show = '.document_view';
        var hide = '.mobile_nav_wrapper_search,.gallery_view,.explore_view,.more_view, .log_more_view, .notice_explore_view,.about_more_view, .link_more_view';
        viewWindow(title, show, hide);
        console.log('Document Tab');
    })
    $(document).on('click', '.more_nav', function(e) {
        e.preventDefault();
        var title = 'More';
        var show = '.more_view';
        var hide = '.mobile_nav_wrapper_search,.gallery_view,.explore_view,.document_view, .log_more_view,  .notice_explore_view ,.about_more_view, .link_more_view';
        viewWindow(title, show, hide);
        console.log('More Tab');
    })
    $(document).on('click', '.explore_nav', function(e) {
        e.preventDefault();
        var title = 'Explore';
        var show = '.explore_view';
        var hide = '.mobile_nav_wrapper_search, .gallery_view,.more_view,.document_view, .log_more_view,  .about_more_view, .notice_explore_view, .link_more_view';
        var short_link = $('.explore_more_content').html();
        $('.all_batch_short_link').html(short_link);
        viewWindow(title, show, hide);
        console.log('Explore Tab');
    })

    $(document).on('click', '.search_nav', function(e) {
        e.preventDefault();
        $("#explore_more, #myModalNotice, #myModal, #myModalFileUpload").modal('hide');
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
        var hide = '.mobile_nav_wrapper_search,.gallery_view,.explore_view,.document_view, .more_view';
        var show = '.link_more_view';
        var title = 'Important Links';
        viewWindow(title, show, hide);
        var important_links = $('.dropdown-menu.megamenu').html();
        $('.link_more_view.important_links').html(important_links);
    })
    $(document).on('click', '#about_database', function(e) {
        e.preventDefault();
        var hide = '.mobile_nav_wrapper_search,.gallery_view,.explore_view,.document_view, .more_view, .link_more_view';
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
        console.log("ffffff");
        var hide = '.mobile_nav_wrapper_search,.gallery_view,.explore_view,.document_view, .more_view, .link_more_view';
        var show = '.log_more_view';
        var title = 'Activity Log';
        viewWindow(title, show, hide);

        $.ajax({
            url: 'qr_generate.php?activitty_info_date_wise',
            dataType: 'html',
            success: function(response) {
                $('.log_more_view.activity_log').html(response);
                $('.spinner_log').hide();
                console.log(response);
                console.log("ffffff");
            }
        });
    })

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
        console.log('clicked');
    }

});