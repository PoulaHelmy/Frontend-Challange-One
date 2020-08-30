window.addEventListener('load', function () {
    const elem = document.querySelector('.container');
    const imageElem = document.querySelector('.container__image');

    elem.classList.add('container--isActive');
    imageElem.addEventListener('mousemove', function (event) {
        const xPosition = event.layerX;
        const yPosition = event.layerY;
        imageElem.style.transform = `rotateY(${xPosition / 50}deg) rotateX(${-yPosition / 50}deg)`;
    });
});


data = [
    {
        details: '“ I’ve been interested in coding for a while but never taken the jump, until now.\n' +
            '    I couldn’t recommend this course enough. I’m now in the job of my dreams and so\n' +
            'excited about the future. ”',
        name: 'Tanya Sinclair',
        position: 'UX Engineer',
        photo: './images/image-tanya.jpg',
    },
    {
        details: ` “ If you want to lay the best foundation possible I’d recommend taking this course.
        The depth the instructors go into is incredible. I now feel so confident about
        starting up as a professional developer. ”`,
        name: 'John Tarkpor',
        position: 'Junior Front-end Developer',
        photo: './images/image-john.jpg',
    }
];
for (let i = 0; i < this.data.length; i++) {
    const sliderData = document.getElementsByClassName('.container__content');
    console.log(sliderData);
}







