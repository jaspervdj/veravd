function setContent(name) {
    /* Remove the hashbang if necessary */
    if(name.match(/^#!/)) name = name.substr(2);

    /* Remove extra parts from the URL */
    name = name.replace(/\/.*$/, "");

    $.get('data/pages/' + name + '.html', function(data) {
        $('#content').html(data);
    });
}

function getPageNameFromUrl() {
    /* Get the hashbang from the URL */
    var page = document.location.href;

    if(page.match(/#!/)) {
        /* There is a hashbang, throw away the first part of the URL. */
        page = page.replace(/^.*#!/, "");
    } else {
        /* There is no hashbang, default to home. */
        page = 'home';
    }

    return page;
}

function setContentFromUrl() {
    setContent(getPageNameFromUrl());
}

$('.hash').click(function(element) {
    setContent($(this).attr('href'));
});
