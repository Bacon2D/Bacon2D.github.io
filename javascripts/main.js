
window.onload = function () {

    setUpNavigation();

};

/**
 * Lets clicks on the hamburger toggle small-screen menu visibility.
 * @return bool whether or not navigation was set up right
 */
function setUpNavigation () {
    var hamburger;
    var header;

    try {
        hamburger = document.getElementsByClassName('hamburger')[0];
        header = document.getElementsByTagName('header')[0];
    } catch (e) {
        console.error('setUpNavigation: Failed to get principal elements', e);
        return false;
    }

    // Toggle menu-active on header on click.
    hamburger.addEventListener('click', function (e) {
        var cls = 'menu-active';
        header.className = header.className.indexOf(cls) >= 0 ? "" : cls;
    });

    return true;
}
