function getGalleryName() {
    var name = getPageNameFromUrl();
    return name.replace(/^.*\//, "");
}

/* The gallery */
var gallery;

/* Currently selected item */
var current;

/* Load the gallery data... */
$.get("data/" + getGalleryName() + ".json", function(data) {
    gallery = eval(data);
    selectItem(0);
});

/* Select an item */
function selectItem(i) {
    /* Bail out if invalid */
    if(i < 0 || i >= gallery.length) return;

    /* Update the current var */
    current = i;

    /* Set source and description */
    var item = gallery[i];
    $('#gallery-image').attr('src', 'images/loading.gif');
    $('#gallery-image').attr('src', item.src);
    $('#gallery-description').html(item.description);

    /* Hide next/previous buttons */
    if(i == 0) $('#gallery-previous').hide();
    else $('#gallery-previous').show();

    if(i + 1 == gallery.length) $('#gallery-next').hide();
    else $('#gallery-next').show();
}

function previousItem() {
    selectItem(current - 1);
}

function nextItem() {
    selectItem(current + 1);
}
