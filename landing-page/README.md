# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

* [JS File](#js-file)

* * [Preface](#preface)

* * [Functions](#functions)

* [HTML File](#html-file)

* [CSS File](#css-file)


## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.


## JS File
[](js\app.js)

### Preface

* All Global Variables have been identified.


### Functions

* responder Function has been created to help in adding class 'responsive' to the unordered list and to the Navigation bar icon - which has been added using (.insertAdjacentHTML) Metod -. so, it helps to change their styling once they are clicked.

* navList Function has been used to create the list of sections inside the Header.

* An Event Listener has been added to activate each section when scrolling near top of viewport.

* An Event Listener has been added to hide the Navigation header whin scrolling is inactive.

* Two Functions have been used: 

* * one if them to add a button that let user go to the top of the page when the viewpoint is not there. and the other function to hide the button when the viewpoint is the top of the page.

* * An Event Listener has been added by looping with (for-of) loop to hide/unhide each section's contents by clicking the section's header. some amendments have been implemented on the CSS File to improve the collapsing view.

* a sring has been created to be added in the page console to return the performance of page loading through the (performence.now) method.
 

## HTML File
[](index.html)

* Font Awsome URL link has been added to the <head> item to load the Navigation Icon style.


## CSS File
[](css\styles.css)

* Some Media Query Styles have been added to make the navigation Bar responsive.

*  Top Button Styling has been added.

* Main Sections Collapsing Style has been added.

* some improvements have been implemented to some styling items to improve the page appearance.