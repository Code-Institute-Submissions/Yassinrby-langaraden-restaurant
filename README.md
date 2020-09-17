<p align="center">
<img src="https://h24-original.s3.amazonaws.com/197718/28627562-toaIE.png" width="500px">
</p>


<h1 align="center">Official website for restaurant Welamsund - Långa Raden in Stockholm, Sweden</h1>


<p align="center">
This is the official website where you can check the menus, ingredients, see reviews and book a table or bigger events. 
The website is built with HTML, CSS and JavaScript. 
</p>

<p align="center" style="color:red;">
The website is not live yet
</p>

<br>

# **UX**

## User Stories

1. A soon to be married couple visits the website to see how the place looks and the menu.
2. A family want to eat out but one of the children are vegiterian and visits the website to see what they can choose from in the menu.
3. A group of friends want to have some drinks near the ocean and visits the website to get to know the location and book a table.
4. A returning customer eats only vegiterian food and visits the website for checking the weekly menu. Thanks to localStorage the customer do not need to select his preferences everytime visiting the website.

## The website users is:

- Potential costumers wanting to book a table in the restaurant
- Potential costumers wanting to book a bigger event like marriage, birthday party or memorial
- Potential costumers that want to see the menu and the ingredients used
- Potential costumers wanting to see the place before visiting
- Potential costumers wanting the location
- Potential costumers wanting the contact information

<br>

# **Features**

The website conatains 7 different pages. First is home page with slideshow gallery, brief information about the other pages and a contact form. Second page contains menus and ingredients. Third page is the booking page. Fourth page is the contact and location page. Fifth page contains the special menu for homedelivery. Footer containing links to About us page and Work with us page.

**_Existing features_**

## 1. Home page

- A fixed navigation that links to the different pages and social media links
- Slideshow photo gallery
- History information about the place and a link to about us page
- Brief information about menu and a link to menu page
- Brief information about how to book and link to booking page
- Contact information and link to contact page
- Brief information about the Home delivery menu and link to page
- Contact form that currently send email to my private emailadress using EmailJS
- A interactive phone button that follows while scrolling down the page

## 2. Menu page

- A fixed navigation that links to the different pages and social media links
- A lunch and dinner menu that are interactive and save preferences in localStorage
- Buttons where you can open different event menus in external pdf file for downloading.
- A link to the Home delivery page
- A interactive phone button that follows while scrolling down the page

## 3. Booking page 

- A fixed navigation that links to the different pages and social media links
- A book-form where you fill in the nessercary information and submit. Currently sending email to my private emailadress using EmailJS
- Google maps API
- A interactive phone button that follows while scrolling down the page

## 4. Contact page

- A fixed navigation that links to the different pages and social media links
- Contact information
- Contact form that currently send email to my private emailadress using EmailJS
- Google maps location
- A interactive phone button that follows while scrolling down the page

## 5. Home delivery page

- A fixed navigation that links to the different pages and social media links
- Home delivery menu
- A form to book home delivery
- A interactive phone button that follows while scrolling down the page

## 6. About us page
- Information about the place and owners
- A interactive phone button that follows while scrolling down the page

## 7. Get hired page
- A form where you can attach CV and fill information
- A interactive phone button that follows while scrolling down the page


**_Features Left to Implement_**

## 1. Google maps API
 - Google maps window in contact.html and book.html

## 2. EmailJS 
- Need to change the emailadress that will recieve email from the website forms
- The book-delivery form still dont work since you need to upgrade the payment plan on EmailJS to have more templates 
- Same with the form on the Get hired page


# **Technologies Used**

**[Balsamiq](https://www.Balsamiq.com)**
- Used Balsamiq as wirefram for both desktop and mobile device. Since my free trial is over I cannot share the files,

**[CSS](https://www.w3.org/Style/CSS/Overview.en.html)**
- CSS was used to costumize HTML and Bootstrap.

**[HTML](https://html.spec.whatwg.org/multipage/)**
- HTML was used as the websites infrastructure and content.

**[Twitter Bootstrap](www.getbootstrap.com)**
- Bootstrap was used for organizing the websites content, navigation bar and buttons.

**[Fontawsome](www.Fontawsome.com)**
- Fontawsome was used for Icons.

**[Javascript](https://javascript.info/)**
- Core JS was used for the phone button on all pages

**[Jquery](www.jquery.com)**
- The project uses JQuery to simplify DOM manipulation in the Menu Page

**[Google maps JS API](https://developers.google.com/maps/documentation/javascript/overview)**
- Google maps API used on the booking page to showcase the restaurant position.

**[EmailJS](https://www.emailjs.com/)**
- Used for sending emails after filling out forms on the website


# **Testing**

**Code validation**
The HTML, CSS and JS code is validated by **[W3C](https://validator.w3.org/)**, **[W3C](https://jigsaw.w3.org/css-validator/)** and **[jshint](https://jshint.com/)**

**Different devices**
The Webiste works on all devices (rotaded or not).

**Different Browser**
Tests made with **[Browserling](https://www.browserling.com/)**:

- Microsoft edge
- Safari
- Explorer
- Chrome
- Opera 
- Firefox

The website works fine with all browsers.

**Buttons/Links**
All buttons and link works properly

**Contact form**
All forms except the home-delivery and Get hired works properly and sends emails to selected emailadress

**Phone button**
- Phone button works properly on all pages

## **Deployment**

I found out how to deploy the website from this **[Page.](https://docs.github.com/en/enterprise/2.14/user/articles/configuring-a-publishing-source-for-github-pages)**

**I did deploy the website by doing following:**

1. Git add . in CLI
2. Git commit -m "Test to deploy website"
3. Git push
4. Selecting my **[Repository](https://github.com/Yassinrby/resume-website)**
5. Click on settings
6. Scroll down to GitHub pages
7. Change the source to "Master branch"
8. Wait a few minutes and the website was **[deployed](https://yassinrby.github.io/resume-website/)**

**For running the code locally I did following:**

1. Type python3 -m http.server
2. Click the button "Open Browser" in the pop-up screen


-----------------

## **Credits**


**Media**

The pictures was taken from the the restaurants current website and facebook page.

**Acknowledgements**

I recieved inspitation from following websites:

1. **[Villa Boberg](https://www.villaboberg.se/)**

**Previous website**
[www.langaraden.se](https://www.langaraden.se)