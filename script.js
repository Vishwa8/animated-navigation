const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(direction1, direction2) {
    navItems.forEach((nav, idx) => {
        nav.classList.replace(`slide-${direction1}-${idx+1}`, `slide-${direction2}-${idx+1}`);
    });
}

function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navAnimation('out', 'in');
    } else {        
        // Animate Out
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => nav.addEventListener('click', toggleNav));