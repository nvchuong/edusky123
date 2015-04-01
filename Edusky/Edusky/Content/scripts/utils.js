$(document).ready(function () {
    var offset = 220;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.scrollup').fadeIn(duration);
        } else {
            $('.scrollup').fadeOut(duration);
        }
    });

    $('.scrollup').click(function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 86) {
            //$('.collapse').addClass("affix");
            $('.affix-top').addClass("affix");
            $('.navbar-toggle').addClass("affix");
        } else {
           //$('.collapse').removeClass("affix");
            $('.affix-top').removeClass("affix");
            $('.navbar-toggle').removeClass("affix");
        }
    });

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    var n = 0,
    t = $('#header').height();

    $('.navbar-toggle').on('click', function () {
        var i = $('#menu-left').css('display');
        i == 'none' ? (n = $(document).scrollTop(), $('#menu-left').css('top', t), $('#menu-left').show('fast'), $('#pageWrapper').addClass('overhid'), $('#pageWrapper').css('height', t)) : ($('#menu-left').hide('fast'), $('#pageWrapper').removeClass('overhid'), $('#pageWrapper').css('height', 'auto'), $(document).scrollTop(n))
    });

    $(function () {
        $('#nav-wrapper').length > 0 && ($('#nav-wrapper').height($('#navbar-main').height()), $('#navbar-main').affix({
            offset: {
                top: $('#navbar-main').offset().top
            }
        }))
    });

    blueimp.Gallery(
    $(document).getElementById('links'), {
        onslide: function (index, slide) {
            var text = this.list[index].getAttribute('data-description'),
                node = this.container.find('.description');
            node.empty();
            if (text) {
                node[0].appendChild($(document).createTextNode(text));
            }
        }
    });

    $(document).getElementById('links').onclick = function (event) {
        event = event || $(window).event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {
                index: link, event: event, onslide: function (index, slide) {
                    var text = this.list[index].getAttribute('data-description'),
                        node = this.container.find('.description');
                    node.empty();
                    if (text) {
                        node[0].appendChild($(document).createTextNode(text));
                    }
                }
            },
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    };

    // upload file 

    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    var files;
    var storedFiles = [];
    var upc = 0;



    $(function () {

        $(":file").attr('title', '  ');
        var $loading = $('#loadingDiv').hide();

        $("input[id^='fileToUpload']").change(function (e) {
            doReCreate(e);
        });

        selDiv = $("#selectedFiles");
    });


    $(function doReCreate(e) {
        upc = upc + 1;
        handleFileSelect(e);

        $("input[id^='fileToUpload']").hide();

        $('<input>').attr({
            type: 'file',
            multiple: 'multiple',
            id: 'fileToUpload' + upc,
            class: 'fUpload',
            name: 'fileUpload',
            style: 'float: left',
            title: '  ',
            onchange: "doReCreate(event)"

        }).appendTo('#uploaders');
    });


    $(function handleFileSelect(e) {

        //selDiv.innerHTML = ""; storedFiles = []; 
        selDiv = document.querySelector("#selectedFiles");

        if (!e.target.files) return;

        //selDiv.innerHTML = "";
        files = e.target.files;

        for (var i = 0; i < files.length; i++) {
            //if (i == 0) { selDiv.innerHTML = ""; storedFiles = []; }
            var f = files[i];
            selDiv.innerHTML += "<div>" + f.name + "<a onclick='removeAtt(this)'>   [-]</a></div>";
            storedFiles.push(f.name);
        }
        $('#@Html.IdFor(i => i.FilesToBeUploaded)').val(storedFiles);
    });

    $(function removeAtt(t) {
        var serEle = $(t).parent().text().slice(0, -3);
        var index = storedFiles.indexOf(serEle);
        if (index !== -1) {
            storedFiles.splice(index, 1);
        }
        $(t).parent().remove();

        $('#@Html.IdFor(i => i.FilesToBeUploaded)').val(storedFiles);

    });

    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });


    // jssor slider
})