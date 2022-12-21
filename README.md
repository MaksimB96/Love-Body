# Love Body
(Developer: Maksims Buraks)

![Mockup image](docs/am-i-responsive.png)

[live web-page](https://maksimb96.github.io/LoveBody/)

## Table of contents

1. [Project Goals](#project-goals)
    * [User Goals](#user-goals)
    * [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    * [Target Audience](#target-audience)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
    * [User Stories](#user-stories)
3. [Design](#design)
    * [Design](#design-choices)
    * [Color](#colors)
    * [Fonts](#font)
    * [Structure](#structure)
    * [Wireframe](#wire-frame)
4. [Tech Used](#tech)
    * [Languages](#languages)
    * [Tools](#tools)
5. [Features](#features)
6. [Code Validation & Testing](#validation)
    * [Html](#html-val)
    * [Css](#css-val)
    * [Acessability](#acessability)
    * [Perforamnce](#performnce)
    * [User Story Testing](#user-story-testing)
7. [Bugs](#bugs)
8. [Deployment](#deploy)
9. [Credits](#credits)
10. [Acknowledgements](#acknowledgements)

## Project Goals

### User Goals
    -Finding a site that provides a fun way to test users fitness knowledge
    -To test training knowledge
    -To test nutrition knowledge
    -Find a way to leave feedback to improve quiz

### Site Owner Goals
    -Provide a simple and fun way to test visitor knowledge 
    -Provide an area to leave feedback
    -Make sure contact deetails being left are real people

## User Experience

### Target Audience
    -People looking to test fitness Knowledge
    -People looking to test nutrition Knowledge

### User Requirements and Expectations
    -A simple and natural way to navigate the website
    -Quick acessibility to relevant information
    -Appealing design that responds accordingly
    -A simple way to get in contact, and leave feedback
    -Accessibility

### User Stories

#### First-time User
1. As a first time user, I want to test my fitness knowledge
2. As a first time user, I want to test my nutrition knowledge
3. As a first time user, I want information presented in one location
4. As a first time user, I want to leave feedback for further addition of questions

#### Returning User
5. As a returning user I want to refresh my knowledge on fitness
6. As a returning user I want to refresh my knowledge on nutrition
7. As a returning user I want to see additional quesstions added
8. As a returning user I want to be able to locate relevant social links

#### Site Owner
9. As a site owner I want people to locate relevant information to the quiz
10. As a site owner I want people to be able to play as many times 
11. As a site owner I want individuals to get in contact

## Design

### Design Choices
The website was developed in such a way that had a minimal and colourful approach that is not too much to overload the senses. It has all relevaant information on the home page that allows users to jump directly to the relevant points of interest.

### Colour
Color Choices contain a slightly colder shade of greens and neutral greys and white to compliment all elements. A less satturated green was used as many associate the higher saturated colors with 'vegan'. Highlight color of oraange was used as it plays well with the secondary colors.
<br>

![Color Scheme](docs/features/colors.png)


### Fonts
Solway with a serif fall back was used as the main head text as it provides a nice playful and approachable flair to the website
<br>
Roboto with sans-serif fall back was used as it compliments solway and contrasts to its playful style without being out of place. It is also clear and concise.

### Structure
The Structure of the website is a clean and minimal approach as the main focus of the website is the quiz. Therefore the index page allows for ease of access to all relevant info. The nav bar is clean and simple with all elements being clear and intuative.

<br>

The website is made up of 3 pages:

    -The home page that draws a user and links directly to other points of interest. 
    -The fitness quiz page that contains the quiz script.
    -A contact page that allows easy contact, validation.

### Wireframes
<details><summary>Home</summary>
<img src="docs/wireframes/index-wireframe.png">
</details>
<details><summary>Quiz</summary>
<img src="docs/wireframes/quiz-wireframe.png">
</details>
<details><summary>Feedback</summary>
<img src="docs/wireframes/form-wireframe.png">
</details>

## Tech Used

### Languages
    -HTML
    -CSS
    -Java Script

### Tools
    -Git
    -Git Hub
    -Git Pod
    -Balsamiq
    -Google Fonts
    -Adobe Color Wheel
    -Font Awesome
    -Favicon.io
    -Circle Crop
    -EmailJs
    -Canva
    -Boot strap

## Features
The Website consists of 3 pages with 11 features

### Logo and Nav-Bar/ Home buttons
    -featured on all three pages
    -Home page Icons have zoom effect and has all info on one page to prevent excessive travel
    -Nav bar is fully responsive and changes to a burger style on mobile devices. Nav bar links to all relevant pages allowing for quick access.
    -Nav bar has selected item in order to give clear feedback to location as well as hover.
    -Pages 2/3 have a slight difference in appearance but over all same design in order to not disrupt immersion.
    -User stories adressed: 3, 9.
    
![Logo & Navbar](docs/features/nav-bar.png)
<br>

![Logo & Navbar](docs/features/nav-bar-select.png)
<br>

![Logo & Navbar](docs/features/burger-nav-home.png)

![Logo & Navbar](docs/features/burgerr-expanded.png)


### Footer
    -footer conistent on all pages with hover effect in order to provide clear feedback on selection
    -User stories adressed: 8.

![Footer and Selection](docs/features/socials.png)
![Footer and Selection](docs/features/socials-select.png)



### Quiz page
    -Clear UI
    -Tracks score
    -Cycles through questions and allows to restart when questions exhaust.
    -Clear visuals for correct/incorect selections
    -Quiz incrementss score 
    -User stories adressed: 1, 2, 5, 6, 10.

![Quiz Segment](docs/features/start-funct.png)
![Quiz Segment](docs/features/correct-increment-next.png)
![Quiz Segment](docs/features/restart.png)

### Feedback Form
    -Allows users to leave feedback for improvement of quiz etc.
    -Form validates email and name (full name and proper email)
    -Form Sends back email to me as soon as user leaves feedback
    -User stories adreessed: 4, 7, 11. 

![Feedback-form](docs/features/form-feat.png)
<br>

![Feedback-form](docs/features/invalidemail.png)
<br>

![Feedback-form](docs/features/valid-email.png)
<br>

![Feedback-form](docs/features/fullname-rreeq.png)
<br>

![Feedback-form](docs/features/fullname-valid.png)
<br>

![Feedback-form](docs/features/feedback-to-me.png)




## Validation

### HTML Validation
W3C mark-up was utilised in order to validate html of the website. All Pages pass with no errors. Warnings are related to various segments not using Headings, but utilise div elements.

<details><summary>Index</summary>
<img src="docs/validations/index-valid.png">
</details>
<details><summary>Fitness Quiz</summary>
<img src="docs/validations/fitquiz-valid.png">
</details>
<details><summary>Feedback</summary>
<img src="docs/validations/cont-valid.png">
</details>

<br>

### CSS Validation
W3C CSS validator was utilised in order to make sure the css code passes standards with no errors.

<details><summary>Full Document</summary>
<img src="docs/validations/style-valid.png">
</details>

<br>

### JS Validation
JSHint validator was utilised in order to make sure the javascript code passes standards with no errors or warnings, All functions marked as "unused" are called on click in HTML code segments, images of relevnt code is attached to validations.

<details><summary>Index</summary>
<img src="docs/validations/index-js.png">
<img src="docs/validations/showmenu-explain.png">
</details>
<details><summary>Fitness Quiz</summary>
<img src="docs/validations/jshint-fitquiz.png">
<img src="docs/validations/showmenu-explain.png">
</details>
<details><summary>Feedback</summary>
<img src="docs/validations/email-js.png">
<img src="docs/validations/emailjs-explain.png">
<img src="docs/validations/formfunct-explain.png">
</details>

<br>

### Accessability
Wave WebAIM was utilized in order to make sure the website met high accessability standards. All pages pass with no errors or contrast errors.

<details><summary>Index</summary>
<img src="docs/validation/indexwave.png">
</details>
<details><summary>Fitness Quiz</summary>
<img src="docs/validation/quizwave.png">
</details>
<details><summary>Feedback</summary>
<img src="docs/validation/feedbackwave.png">
</details>

<br>

### Performance
Google light house was used in order to confirm good standards of performace

<details><summary>Index</summary>
<img src="docs/validations/index-perform.png">
</details>
<details><summary>Fitness Quiz</summary>
<img src="docs/validations/fitquiz-perform.png">
</details>
<details><summary>Feedback</summary>
<img src="docs/validations/form-perform.png">
</details>

<br>

### Tests

#### Devices tested on on:
    -Iphone SE, XR, 11, 12, 13
    -Ipad
    -Macbook Pro/Air
    -Lenovo Platform
    -Dell Platform

#### Browser tested on on:
    -Chrome
    -Mozilla
    -Safari
    -Brave/Brave Mobile

### Testing User Stories

1. As a first time user, I want more information regarding fitness and be drawn in
2. As a first time user, I want more information regarding training fundamentals
5. As a returning user I want to refresh my knowledge on fitness
6. As a returning user I want to get back on track with my calorie intake
7. As a returning user I want to get back on track with my training 
10. As a site owner I want people to locate relevant information to fitness

<br>

| **Feature** | **Action** | **Expected Results** | **Final Result** |
|-------------|------------|----------------------|------------------|
|             |            |                      |                  |
| Home page, slogan zoom accordion| Button click, accordion expands into additional information| Home page will provide prompt to click, Accordion will provide solid information| Interactivaity of home page prompts click and accordion provides solid information with relevent links|
|3 Fitness elements| Visual Aid to locate fundamentals| Draws users to pictures then to accordion| Better response to read further|
|Accordion Icon Hover| Icon turns red on hover and is distinguishable| Clear visual prompt to press closed accordion| User prompted to press as it is intuative|

<details><summary>Screenshot</summary>
<img src="docs/user-story-test/slogan-zoom-interact.png">
<img src="docs/user-story-test/accordion-test.png">
<img src="docs/user-story-test/hover-icon-text.png">
</details>
<br>



3. As a first time user, I want information presented in one location

| **Feature** | **Action** | **Expected Results** | **Final Result** |
|-------------|------------|----------------------|------------------|
|             |            |                      |                  |
|Iframe| user has access to video aid and full control| Iframe works well and allows full user control| Iframe responsive and alllows full user control|
<details><summary>Screenshot</summary>
<img src="docs/user-story-test/accordion-test-2.png">
</details>
<br>



4. As a site owner I want people to get to know the PT

| **Feature** | **Action** | **Expected Results** | **Final Result** |
|-------------|------------|----------------------|------------------|
|             |            |                      |                  |
|About Me| Source of information for who the PT is| User scrolls to find information| Works as expected|
<details><summary>Screenshot</summary>
<img src="docs/user-story-test/about-test.png">
</details>
<br>



9. As a returning user I want to be able to locate relevant social links

| **Feature** | **Action** | **Expected Results** | **Final Result** |
|-------------|------------|----------------------|------------------|
|             |            |                      |                  |
|Footer| social link icons| User will interact with Icons| Works as as intended|
<details><summary>Screenshot</summary>
<img src="docs/user-story-test/footer-test.png">
</details>
<br>



8. As a returning user I want to have a clear pathway to getting into contact with a fitness professional
12. As a site owner I want individuals to get in contact

| **Feature** | **Action** | **Expected Results** | **Final Result** |
|-------------|------------|----------------------|------------------|
|             |            |                      |                  |
|Contact Form| Enter text fields| User enters form and additdional questions| Works as intended|
<details><summary>Screenshot</summary>
<img src="docs/user-story-test/submit-form-test.png">
</details>
<br>

## Bugs

| **Bug** | **Fix** | 
|---------|---------|
|         |         | 
|Paragraph constantly showing error| Through process of elimination, it was determined that lists could not be nested in paragraphs|
|Picture of me layout issues|Float properties and shape outside tool made it difficult to make responsive, flex box utilised instead|
|Performance issues on page 2| Assigned new images that were compressed|
|Page 2 poor anchor issues on Wave| Utilising aria labels fixed this|


## Deployment

Deployment of site was acheived through these steps:
1. I navigated to the settings section on git hub repositories on my repository.
2. I then selected the pages link on the left side.
3. I then selected source for the branch prompt.
4. Roughly, 2 minutes after refreshing I recieved a link to my site: https://maksimb96.github.io/FitnessMadeMinimal/index.html 

## Credits

### Media

1. The following were sourced from <a href="https://www.pexels.com/"> Pexels.com </a>

    1. barbell.jpg
    2. barbell2.jpg
    3. bedrest.jpg
    4. dumbell-rack.jpg
    5. dumbell2.jpg
    6. gymhll.jpg
    7. red-cherry.jpg
    8. resting.jpg
    9. soup.jpg
    10. IFrame youtube video sourced from <a href="https://www.youtube.com/@JeffNippard">Jeff Nippard</a>
    
    font awesome script and icons from font awesome

2. The following are owned by me and my PT company
    1. red-white-logo
    2. pic-of-me
    
### Code 

1. 404 page code provided by Mo Shami_mentor from code institue
2. favicon idea provided by Mo Shami_mentor, site used found <a href="https://favicon.io/"> here</a>
3. Accordion inspiration found on youtube, by <a href="https://www.youtube.com/watch?v=oCx4gtYe410"> Easy Tutorials</a>
4. Footer inspiration, zoom animation found from 'love running project' by code institute
5. Text shadow property take from <a href="https://www.w3schools.com/cssref/css3_pr_text-shadow.php"> w3schools</a>
6. minimal contact box inspiration found on youtube by <a href="https://www.youtube.com/watch?v=l_Z3N3etkS0">Coding Market</a>
7. placeholder text color found on w23schools <a href="https://www.w3schools.com/csSref/sel_placeholder.php#:~:text=The%20%3A%3Aplaceholder%20selector%20selects,value%20of%20an%20input%20field.">link here</a>
8. Form dump link used from code institute execises
9. pointer events removal from <a href="https://stackoverflow.com/questions/46949984/removing-pointer-events-none-property-not-working"> Stack overflow </a>


## Acknowledgements

-I would like to thank Victor my mentor
-CI for provide me the knowledge to under-take this task
-My beautiful girlfriend who almost got all my typos
-The wonderful community over on Slack!











