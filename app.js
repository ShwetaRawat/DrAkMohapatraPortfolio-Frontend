(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.addEventListener('DOMContentLoaded', function () {
    var professor = document.getElementById('professor');
    var researcher = document.getElementById('researcher');
    var cta = document.getElementById('cta');
    var ps = document.getElementById('PS');
    var hod = document.getElementById('hod');
    
    var elements = [professor, researcher, cta, ps,hod];
    var currentIndex = 0;

    function toggleText() {
        elements.forEach(function (element) {
            element.style.display = 'none';
        });

        elements[currentIndex].style.display = 'block';
        currentIndex = (currentIndex + 1) % elements.length;
    }
    toggleText();//call text immediately
    setInterval(toggleText, 1400);//alternate
})