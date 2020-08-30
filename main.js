window.addEventListener("load", function () {
  const elem = document.querySelector(".container");
  const imageElem = document.querySelector(".container__image");

  elem.classList.add("container--isActive");
  imageElem.addEventListener("mousemove", function (event) {
    const xPosition = event.layerX;
    const yPosition = event.layerY;
    imageElem.style.transform = `rotateY(${xPosition / 50}deg) rotateX(${
      -yPosition / 50
    }deg)`;
  });
});
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const mainText = document.getElementById("mainText");
const mainName = document.getElementById("mainName");
const mainPostion = document.getElementById("mainPostion");
const MainImg = document.getElementById("mainImg");
const mainContent = document.getElementById("mainContent");
data = [
  {
    details:
      "“ I’ve been interested in coding for a while but never taken the jump, until now.\n" +
      "    I couldn’t recommend this course enough. I’m now in the job of my dreams and so\n" +
      "excited about the future. ”",
    name: "Tanya Sinclair",
    position: "UX Engineer",
    photo: "./images/image-tanya.jpg",
  },
  {
    details: ` “ If you want to lay the best foundation possible I’d recommend taking this course.
        The depth the instructors go into is incredible. I now feel so confident about
        starting up as a professional developer. ”`,
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
    photo: "./images/image-john.jpg",
  },
];
this.prev.addEventListener("click", function () {
  mainText.innerHTML = data[0]["details"];
  mainName.innerHTML = data[0]["name"];
  mainPostion.innerHTML = data[0]["position"];
  MainImg.src = data[0]["photo"];
});
this.next.addEventListener("click", function () {
  mainText.innerHTML = data[1]["details"];
  mainName.innerHTML = data[1]["name"];
  mainPostion.innerHTML = data[1]["position"];
  MainImg.src = data[1]["photo"];
});
