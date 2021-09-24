// Selectors
const navList = document.querySelector('header nav ul');
const sliderUl = document.querySelector('.landing .bullets');
const SliderLeftArrow = document.querySelector('.landing .fa-angle-left');
const SliderRightArrow = document.querySelector('.landing .fa-angle-right');
const landingSection = document.querySelector('.landing')
// Event Listeners
document.addEventListener('click', handleToggleMenu);
sliderUl.addEventListener('click', handleSliderBulletClick);
SliderRightArrow.addEventListener('click', handleRightArrowClick);
SliderLeftArrow.addEventListener('click', handleLeftArrowClick);


// Functions
function handleToggleMenu(e) {
    // console.log(e.target.classList.contains('toggle-menu'));
    if(e.target.classList.contains('toggle-menu')){
        navList.classList.toggle('hide');
    }
    // else{
    //     navList.classList.add('hide');
    // }
}

function handleSliderBulletClick(event) {
    let bullets = sliderUl.children;
    let bulletsArray = Array.from(bullets);
    let clickedBullet;

    if(event.target.tagName === 'LI'){
        clickedBullet = event.target;

        bulletsArray.forEach((bullet) => {
            bullet.classList.remove('active-bullet');
        });
        
        clickedBullet.classList.add('active-bullet');
        let bulletIndex = clickedBullet.getAttribute('bullet-index');
        // Change the Background-Image of the Landing Section
        landingSection.style.backgroundImage = `url('../images/landing${bulletIndex}.jpg')`;
    }
}
function handleRightArrowClick(event) {
    let bullets = sliderUl.children;
    let bulletsArray = Array.from(bullets);
    let bulletIndex;

    for(let i = 0; i < bulletsArray.length; i++){
        let bullet = bulletsArray[i];
        if(bullet.classList.contains('active-bullet')){

            bullet.classList.remove('active-bullet');
            if(bullet.nextElementSibling != null){
                bullet.nextElementSibling.classList.add('active-bullet');
                bulletIndex = bullet.nextElementSibling.getAttribute('bullet-index');
            }
            else{
                bulletsArray[0].classList.add('active-bullet');
                bulletIndex = bulletsArray[0].getAttribute('bullet-index');
            }
            // Change the Background-Image of the Landing Section
            landingSection.style.backgroundImage = `url('../images/landing${bulletIndex}.jpg')`;
            break;
        }
    }
}
function handleLeftArrowClick(event) {
    let bullets = sliderUl.children;
    let bulletsArray = Array.from(bullets);
    let bulletIndex;


    for(let i = 0; i < bulletsArray.length; i++){
        let bullet = bulletsArray[i];
        if(bullet.classList.contains('active-bullet')){

            bullet.classList.remove('active-bullet');
            if(bullet.previousElementSibling != null){
                bullet.previousElementSibling.classList.add('active-bullet');
                bulletIndex = bullet.previousElementSibling.getAttribute('bullet-index');
            }
            else{
                bulletsArray[bulletsArray.length - 1].classList.add('active-bullet');
                bulletIndex = bulletsArray[bulletsArray.length - 1].getAttribute('bullet-index');
            }
            // Change the Background-Image of the Landing Section
            landingSection.style.backgroundImage = `url('../images/landing${bulletIndex}.jpg')`;
            break;
        }
    }
}