import anime from 'animejs';

export default {
  timeout: 650,
  unmountOnExit: true,
  onEnter: (node) => {
    const el = node;
    el.style.display = 'none';
  },
  onEntered: (node) => {
    const el = node;
    el.style.display = 'block';
    anime({
      targets: node.querySelectorAll('.fullpage-loader>div'),
      translateX: ['0%', '100%'],
      duration: 500,
      easing: 'easeInOutSine',
      delay: anime.stagger(150),
    });
  },
  onExit: (node) => {
    anime({
      targets: node.querySelectorAll('.fullpage-loader>div'),
      scaleX: [0, 1],
      translateX: ['0%', '0%'],
      duration: 500,
      easing: 'easeInOutSine',
      delay: anime.stagger(150),
    });
  },
};
