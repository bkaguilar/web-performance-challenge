const CONTENT_ARTICLE_TEASERS = [
  "This is an article about first party that happened this weekend",
  "This is an article about second party that happened this weekend",
  "This is an article about third party that happened this weekend" ];

const dynamicContent = () => {
  const teasers = document.querySelectorAll('.teaser__text');

  // create dynamic content
  teasers.forEach((teaser, index) => {
    teaser.innerHTML = CONTENT_ARTICLE_TEASERS[index];
  });
};

const cookieLayerInit = () => {
  const data =  {
      title: 'Do you like cookies ?',
      text1: 'This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!',
      text2: 'The first step in making these easy chocolate chip cookies to to combine the dry ingredients in a medium size bowl. Next, cream together butter and sugars. Add the eggs & vanilla and beat to combine. Add dry ingredients and stir until just combined. Then add the chocolate chips and beat until they are evenly distributed throughout the dough.',
      buttonLabel: 'I solemny swear I will bake these cookies',
      disclaimer: 'This box is made using Vue.js and is super awesome !!! ............. or is it ???',
  }

  const template = ({ title, text1, text2, buttonLabel, disclaimer }) =>
  (`<div class="cookieLayer__content">
        <h2 class="cookieLayer__title">${title}</h2>
        <p class="cookieLayer__text">${text1}</p>
        <p class="cookieLayer__text">${text2}</p>
        <button type="button" class="cookieLayer__button">${buttonLabel}</button>
          <div class="cookieLayer__disclaimer">${disclaimer}</div>
    </div>`
  );

  const acceptCookies = () => {
    const cookieWrapper = document.querySelector('.cookieLayer__base');

    cookieWrapper.remove();
  }

  document.querySelector('.cookieLayer__base').insertAdjacentHTML('afterbegin', template(data));
  document.querySelector('.cookieLayer__button').addEventListener('click', acceptCookies);
};

const initApp = () => {
  cookieLayerInit();
  dynamicContent();
};

initApp();
