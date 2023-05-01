// duration of scroll animation
var scrollDuration = 300;

// paddles
var leftPaddle = document.getElementsByClassName('left-paddle')[0];
var rightPaddle = document.getElementsByClassName('right-paddle')[0];

// get items dimensions
var items = document.getElementsByClassName('item');
var itemsLength = items.length;
var itemSize = items[0].offsetWidth;

// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var menuWrapper = document.getElementsByClassName('menu-wrapper')[0];
var getMenuWrapperSize = function () {
    return menuWrapper.offsetWidth;
};
var menuWrapperSize = getMenuWrapperSize();

// the wrapper is responsive
window.addEventListener('resize', function () {
    menuWrapperSize = getMenuWrapperSize();
});

// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function () {
    return itemsLength * itemSize;
};
var menuSize = getMenuSize();

// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function () {
    return menu.scrollLeft;
};
var menu = document.getElementsByClassName('menu')[0];

// finally, what happens when we are actually scrolling the menu
menu.addEventListener('scroll', function () {
    // get how much of menu is invisible
    menuInvisibleSize = menuSize - menuWrapperSize;

    // get how much have we scrolled so far
    var menuPosition = getMenuPosition();

    var menuEndOffset = menuInvisibleSize - paddleMargin;

    // show & hide the paddles depending on scroll position
    if (menuPosition <= paddleMargin) {
        leftPaddle.classList.add('hidden');
        rightPaddle.classList.remove('hidden');
    } else if (menuPosition < menuEndOffset) {
        // show both paddles in the middle
        leftPaddle.classList.remove('hidden');
        rightPaddle.classList.remove('hidden');
    } else if (menuPosition >= menuEndOffset) {
        leftPaddle.classList.remove('hidden');
        rightPaddle.classList.add('hidden');
    }
});

// scroll to left
rightPaddle.addEventListener('click', function () {
    menu.scrollTo({
        left: menuInvisibleSize,
        behavior: 'smooth'
    });
});

// scroll to right
leftPaddle.addEventListener('click', function () {
    menu.scrollTo({
        left: 0,
        behavior: 'smooth'
    });
});