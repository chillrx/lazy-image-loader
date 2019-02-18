const images = document.querySelectorAll('img');

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.setAttribute('src', img.dataset.lazy);
                img.classList.add('fade');

                observer.disconnect();
            }
        });

    });

    io.observe(target);
};

images.forEach(lazyLoad);