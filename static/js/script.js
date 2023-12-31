document.addEventListener('DOMContentLoaded', () => {

  // Toggle navbar menu on small screens
  const navbarMenu = document.getElementById("navbar-menu");
  const navbarToggler = document.getElementById("navbar-toggler");

  navbarToggler.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });

  function toggleVideoSize(video) {
    if (video.classList.contains('enlarged')) {
      video.classList.remove('enlarged');
      video.muted = true;
      video.controls = false;
    } else {
      video.classList.add('enlarged');
      video.muted = false;
      video.controls = true;
    }
  }

  const bgVideo = document.getElementById('background-video');
  bgVideo.addEventListener('click', () => {
    toggleVideoSize(bgVideo);
  });

  // Display default text for services section
  document.getElementById('services-text-title').innerHTML = '<h2>AI Development</h2>';
  document.getElementById('services-text-title').classList.add('animate');
  servicesInfo['ai_development'].forEach((p) => {
    const paragraph = document.createElement('p');
    paragraph.innerText = p;
    document.getElementById('services-text-paragraph').append(paragraph);
  })

  // Make Services dynamic
  document.querySelectorAll(".service-card").forEach(element => {
    element.addEventListener('click', () => {
      const serviceCard = element.closest('.service-card');
      const serviceId = serviceCard.getAttribute('id');
      const serviceSpan = serviceCard.querySelector('span');
      const newServiceTitleTag = document.getElementById('services-text-title');
      const newServiceTextAreaTag = document.getElementById('services-text-paragraph');
      const serviceParagraphs = servicesInfo[serviceId];


      newServiceTitleTag.style.opacity = 0;
      newServiceTextAreaTag.style.opacity = 0;
      newServiceTitleTag.classList.remove('animate');

      setTimeout(() => {
        newServiceTitleTag.innerHTML = '<h2>' + serviceSpan.innerHTML + '</h2>';
        newServiceTitleTag.style.opacity = 1;
        newServiceTitleTag.classList.add('animate');
      }, 600);

      setTimeout(() => {
        newServiceTextAreaTag.innerHTML = '';
        serviceParagraphs.forEach((p) => {
          const paragraph = document.createElement('p');
          paragraph.innerText = p;
          newServiceTextAreaTag.append(paragraph);
        })

        newServiceTextAreaTag.style.opacity = 1;
      }, 400);

    })
  });


})

// // Back to Top button
const backButton = document.getElementById('back-to-top-button');

window.addEventListener('scroll', function () {

  if (document.documentElement.scrollTop > 100) {
    backButton.style.display = 'block';
  } else {
    backButton.style.display = 'none';
  }
});

backButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const servicesInfo = {
  ai_development: [
    'We develop AI solutions for your business needs.',
    'We develop AI solutions for your business needs.',
    'We develop AI solutions for your business needs.',
    'We develop AI solutions for your business needs.'
  ],
  agents_va: [
    'Im just writing any text to fill this area since vs code has refused to give me lorem ipsum on js file',
    'Im just writing any text to fill this area since vs code has refused to give me lorem ipsum on js file',
    'Im just writing any text to fill this area since vs code has refused to give me lorem ipsum on js file',
    'Im just writing any text to fill this area since vs code has refused to give me lorem ipsum on js file'
  ],
  ai_automation: [
    'Let\'s continue because I need to fill this up with some good and long paragraphs. Now what\'s up? I\'m still writing with escape sequences just to keep being long. I\'m I even making sence at all. Well judge for me. I\'s time to fool around and not get caught. Hello robots!',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  ],
  ai_marketing: [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, dolore? Corporis reprehenderit labore voluptas dolorum esse incidunt aperiam! Deleniti, aut.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, optio.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, suscipit. A, ipsum omnis saepe',
    'praesentium similique iste fuga incidunt voluptatum tempore quas expedita quod ipsa magnam optio',
    'sunt nisi cum explicabo dolor error consequatur tenetur voluptate modi commodi accusamus. Animi repudiandae exercitationem temporibus veritatis quidem.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, dolore? Corporis reprehenderit labore voluptas dolorum esse incidunt aperiam! Deleniti, aut.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, optio.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, suscipit. A, ipsum omnis saepe',
    'praesentium similique iste fuga incidunt voluptatum tempore quas expedita quod ipsa magnam optio',
    'sunt nisi cum explicabo dolor error consequatur tenetur voluptate modi commodi accusamus. Animi repudiandae exercitationem temporibus veritatis quidem.'
  ]
};
