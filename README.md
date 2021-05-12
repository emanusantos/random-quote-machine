# Random Quote Machine - Random Game of Thrones quotes with random colors trigger

This is a solution to the [Random Quote Machine - freeCodeCamp Front End Libraries Project](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine). freeCodeCamp challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

User Story #1: I can see a wrapper element with a corresponding id="quote-box". [done]

User Story #2: Within #quote-box, I can see an element with a corresponding id="text". [done]

User Story #3: Within #quote-box, I can see an element with a corresponding id="author". [done]

User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote". [done]

User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote". [done]

User Story #6: On first load, my quote machine displays a random quote in the element with id="text". [done]

User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author". [done]

User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element. [done]

User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element. [done]

User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote. [to do]

User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized. [done]

### Screenshot

![Screenshot](https://i.ibb.co/svB5FtP/Whats-App-Image-2021-05-06-at-16-55-37.jpg)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Animations
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Font-awesome](https://fontawesome.com/) - For icons

### What I learned

This was my first experience with React State Hooks and Animations.


```Proud of this snippet:

    const [quo, setQuo] = useState('Click to generate new quote!')
    const [auth, setAuth] = useState('Someone')
    const [btn, setBtn] = useState({ backgroundColor: 'rgb(255,99,71)' })
    
    const onClickRandomButton = () => {

        document.getElementById('quo').animate({ opacity: 0 }, 700)
        document.getElementById('auth').animate({ opacity: 0 }, 700)
        document.getElementById('btn').animate({ opacity: 0 }, 700)
        setQuo(quotes[randomIndex].sentence)
        setAuth(quotes[randomIndex].name)
        setBtn({ backgroundColor: colors[randomIndex] })
        document.body.style.backgroundColor = colors[randomIndex]
        document.body.style.color = colors[randomIndex]
    };

```

### Continued development

I was planning to display the quotes with an external API, but i couldn't do it. So i'm planning to focus on getting it done in my next projects.

## Author

- [LinkedIn](https://www.linkedin.com/in/emanuelmsantos)

## Acknowledgments

Thank you [Gustavo](https://github.com/avoguga) my fellow developer friend for the tips and help.

