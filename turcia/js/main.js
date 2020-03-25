var modal = document.getElementById('myModal');
    var btn = document.getElementById('myBtn');
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "flex";
        document.querySelector('html').classList.add('no-scroll');
        // console.log(document.getElementByTagName('html'));
    }
    span.onclick = function () {
        modal.style.display = "none";
        document.querySelector('html').classList.remove('no-scroll');

    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.querySelector('html').classList.remove('no-scroll');
        }
    }