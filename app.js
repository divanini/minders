const menu = document.querySelector('.menu');
const list = document.querySelector('.nav__links');
const close = document.querySelector('.close');
menu.onclick = function () {
  list.classList.toggle('is-opened');
}
close.onclick = function () {
  list.classList.remove('is-opened');
}

const wrapper = document.querySelector('.about__niche-wrapper');

wrapper.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const { left, top, width, height } = wrapper.getBoundingClientRect();

  const x = (clientX - left) / width * 100;
  const y = (clientY - top) / height * 100;

  wrapper.style.transform = `translate(${(x - 50) * 0.1}%, ${(y - 50) * 0.1}%)`;
});


const moreButtons = document.querySelectorAll('.info__item-more');
const descriptions = document.querySelectorAll('.info__item-description-wrapper');
const changeToLess = document.querySelectorAll('.info__item-more-text');
const svgIcons = document.querySelectorAll('.info-svg');
const infoItems = document.querySelectorAll('.info__item');

moreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (descriptions[index].style.display === "none" || descriptions[index].style.display === "") {
      descriptions[index].style.display = "block";
      changeToLess[index].textContent = 'Less';
      svgIcons[index].setAttribute('transform', 'rotate(180)');
      infoItems[index].style.borderColor = '#E8FE74';
      infoItems[index].style.borderWidth = "1px";
    } else {
      descriptions[index].style.display = "none";
      changeToLess[index].textContent = 'More';
      svgIcons[index].setAttribute('transform', 'rotate(0)');
      infoItems[index].style.borderColor = 'rgba(255, 255, 255, 0.30)';
      infoItems[index].style.borderWidth = "1px";
    }
  });
});
;

    const formInputs = document.querySelectorAll('.form-main'); 

    const applyButton = document.querySelector('.form__apply'); 

    applyButton.addEventListener('mouseenter', () => {
        let allInputsFilled = true;

        formInputs.forEach(input => {
            if (input.value.trim() === '') {
                allInputsFilled = false;
            }
        });

        if (!allInputsFilled) {
            applyButton.style.boxShadow = '1px 9px 44px -7px rgba(255,0,9,1)';
            applyButton.style.cursor = 'not-allowed';
        }
    });

    applyButton.addEventListener('mouseleave', () => {
        applyButton.style.boxShadow = ''; 
        applyButton.style.cursor = '';
    });

    applyButton.addEventListener('click', () => {
      let allInputsFilled = true;
  
      formInputs.forEach(input => {
          if (input.value.trim() === '') {
              allInputsFilled = false;
          }
      });
  
      if (allInputsFilled) {
          formInputs.forEach(input => {
              input.value = ''; 
          });
      }
  });
  