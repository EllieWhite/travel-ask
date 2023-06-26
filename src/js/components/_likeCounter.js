const likes = document.querySelectorAll('.like');
likes.forEach(like => {
  const buttonLike = like.querySelector('.button-like');
  const counter_element = like.querySelector('.counter');
  
  let counter = 0;
  
  buttonLike.addEventListener('click', () => {
    render(++counter, counter_element);
    buttonLike.classList.add('is-true');
  },  { once: true });
  
});

const render = (counter, counter_element) => counter_element.innerText = counter;