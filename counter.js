document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').onsubmit = function(event) {

        event.preventDefault();

        const c = document.querySelector('#celsius').value;

        const f = (c * 9/5) + 32;

        document.querySelector('h1').innerHTML = `${f} °F`;
    };

});
