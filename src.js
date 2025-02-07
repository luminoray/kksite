var togglers = document.getElementsByClassName('toggler');
var togglables = document.getElementsByClassName('togglable');

for(let toggler of togglers) {
    toggler.addEventListener('click', function(e) {
        e.preventDefault();
        for(let togglable of togglables) {
            if ('#'+togglable.id === e.target.getAttribute('href')) {
                togglable.style.display = 'block';
            } else {
                togglable.style.display = 'none';
            }   
        }
    });
}

for(let togglable of togglables) {
    if (togglable === togglables[0]) {
        continue;
    }
    togglable.style.display = 'none';
}