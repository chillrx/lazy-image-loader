const images = document.querySelectorAll('img');

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const img = entry.target;

                img.setAttribute('src', img.dataset.src);
                img.classList.add('fade');

                observer.unobserve(entry.target);
            }

        });

    });

    io.observe(target);
};

images.forEach(lazyLoad);