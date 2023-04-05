# marcmacdougall.github.io
This is a professional website designed by Marc MacDougall

README

This is a personal website designed by Marc MacDougall, specifically about his desire to one day become a software engineer. It utilizes HTML, CSS and JavaScript. It is comprised of 7 html files, 1 css file, 7 JavaScript files, 1 audio file, 8 image files and 2 video files. For this assignment, I reused html code and css code from the previous assignment.

I have also decided to use Github Pages to host my website. It's URL is "https://marcmacdougall.github.io".




ASSET LIST

about_me.html		(html file for the "About Me" webpage)
contact.html		(html file for the "Contact" webpage)
experience.html		(html file for the "Experience" webpage)
future_of_ai.html		(html file for the "Future of AI" webpage)
goals.html			(html file for the "Goals" webpage)
index.html			(html file for the Homepage)
projects.html		(html file for the "Projects" webpage)
styles.css			(CSS stylesheet for the entire website)
js_about_me.js		(JavaScript file for the "About Me" webpage)
js_contact.js		(JavaScript file for the "Contact" webpage)
js_experience.js		(JavaScript file for the "Experience" webpage)
js_future_of_ai.js	(JavaScript file for the "Future of AI" webpage)
js_goals.js			(JavaScript file for the "Goals" webpage)
js_index.js			(JavaScript file for the Homepage)
js_projects.js		(JavaScript file for the "Projects" webpage)
README.txt			(The README file you're currently reading)
code_review.pdf		(PDF file for the reviewing code that can be improved with JavaScript)
wireframes.pdf		(PDF file for the diagrams of my website)
audio				
	music.mp3		(mp3 file for the song that plays on every webpage)
pics
	blomidon.jpg	(image of Blomidon that diplays on the "About Me" webpage)
	code.jpg		(image of lines of code that displays of the "Future of AI" webpage)
	dal_compsci.png	(image of the Dalhousie Faculty of Computer Science logo that appears on the "Experience" webpage) 
	dal_logo.jpg	(image of the Dalhousie University entrance that displays on the Homepage)
	favicon.png		(image for the favicon for every webpage)
	goldberg.jpg	(image for the entrance to the Goldberg Building that appears on the "Goals" webpage)
	harriet.jpg		(image of my cat that displays on the "About Me" webpage)
	hero_image.jfif	(image I use for my hero image, that displays on the Homepage)
video
	what_is_ai.mp4	(mp4 file for the "What is AI?" video that displays on the "Future of AI" webpage)
Contact: mailto:mr840651@dal.ca	(links to my Dalhousie email address)
External Link: https://cs.dal.ca	(links to the homepage for the Dalhousie Faculty of Computer Science)
External Video:https://www.youtube.com/watch?v=iqJVVoluJzY	(links to the youtube video "Machine Learning Explained")





js_index.js

This is a JavaScript file specifically for the html file "index.html". It contains 3 functions, each specifically for the 3 different color palettes for the page. It allows the user to change the color palettes by clicking on the 3 buttons at the bottom of the page (palette1, palette2, and palette3).



js_about_me.js

This is a JavaScript file specifically for the html file "about_me.html". It contains 3 functions, each specifically for the 3 different color palettes for the page. It allows the user to change the color palettes by clicking on the 3 buttons at the bottom of the page (palette1, palette2, and palette3).



js_goals.js

This is a JavaScript file specifically for the html file "goals.html". It contains 3 functions specifically for the 3 different color palettes. It allows the user to change the color palettes by clicking on the 3 buttons at the bottom of the page (palette1, palette2, and palette3). It also contains 8 other functions that reveal the hidden text underneath each list entry. When a list entry is clicked, the text underneath is revealed. It is reclicked, then the text goes back to being hidden.



js_experience.js

This is a JavaScript file specifically for the html file "experience.html". It contains 3 functions, each specifically for the 3 different color palettes for the page. It allows the user to change the color palettes by clicking on the 3 buttons at the bottom of the page (palette1, palette2, and palette3).



js_projects.js

This is a JavaScript file specifically for the html file "projects.html". It contains 3 functions, each specifically for the 3 different color palettes for the page. It allows the user to change the color palettes by clicking on the 3 buttons at the bottom of the page (palette1, palette2, and palette3).



js_future_of_ai.js

This is a JavaScript file specifically for the html file "future_of_ai.html". It contains 3 functions, each specifically for the 3 different color palettes for the page. It allows the user to change the color palettes by clicking on the 3 buttons at the bottom of the page (palette1, palette2, and palette3).



js_contact.js

This is a JavaScript file specifically for the html file "index.html". It contains 3 functions, each specifically for the 3 different color palettes for the page. It allows the user to change the color palettes by clicking on the 3 buttons at the bottom of the page (palette1, palette2, and palette3). It also contains 2 other functions called "submitEmail" and "resetEmail". For "submitEmail", this determines if each of the input fields have been filled in by the user. If they haven't, then the webpage gives a notification that tells them to fill in them all, and it refuses to send the email. If a field has been filled in, the function disables the input and it becomes greyed out. Once all the inputs have been filled, then the user can submit all their info, and the webpage gives a notification thanking them for sending me an email.
For the "resetEmail" function, this allows the user to completely reset each input field. If a field has been submitted and became disabled, this reactivates them and the user can once again put in input. It also deletes all of the input that was put in previously.






styles.css

The following CSS rules all apply to desktop sizes by default. Media queries for mobile and tablet appear at the bottom of the css file.

: root
- This rule specifies the color of the headers, fonts background, div background, and border radius. These are defined variables and applied to all html files.



For the section under the comment "Applicable To Multiple or All Pages", these are rules that apply across the board for all/most of the html files.

- Specifies the background color and background color for divs. Also specifies fonts and font colors for regular text, as well as headings and captions, as well as text alignment.

- The placement, padding, border and margin of each relevant element is specified within this section, including for nav, headings, li, img, footer and audio controls.

- Specifies the overall styling of the navigation bar.

- Specifies the color, font, text alignment, and padding & margin for all 4 of those selectors.

- Specifies the formatting for <p> elements

- The rules for the class "list" and li tags. These specify margins and text alignment.

- Stylings for img apply to all images on the website. Includes stylings for border and padding and margins.

- Styling rules for the footer of each page.

- The attribute selector for a[target="_blank"] specifies that anchor tags that have target="_blank" will be underlines. This overrides another rules that specifies that all links shall not have any text-decoration.

- Specifies that links shall have the color of --font-color, no text decoration (meaning no underlining), the color turns yellow when the mouse cursor hovers over them, and the color turns red when links are actively being clicked.

- Specifies that all text selected by the user will have a background-color of yellow.

- Specifies the formatting and appearance of the color palette buttons.



For the section under the comment "Specific to index.html", these are rules that apply specifically on page index.html.

- Specifies the layout of the hero image.

- Specifies the layout of flexboxes so that the images and texts will be formatteda appropriately.

- Specifies the styling for <table> within the container #index-table. It makes the table bigger and expands it.

- Specifies padding and border for the tr elements and td element inside the #index-table container.

- Specifies that all td that are direct children of tr will have a font-weight of bold.



For the section under the comment "Specific To about_me.html", these are rules that apply specifically to the page about_me.html

- This section has rules for the flexbox called #about-container. Within that flexbox are 2 other containers. Overall, these rules specify the organization of the flexbox, and how the contents of the containers shall appear.
 


For the section under the comment "Specific To goals.html", these are rules that apply specifically to the page goals.html

- This section has rules for the grid container on the page goals.html, as well as the 2 divs within it. They specify how the 2 divs will be organized on the webpage. Padding, margins and alignment are also specified.



For the section under the comment "Specific To experience.html", this is a rule that applies specifically to the page experience.html

- This specifies that the image on experience.html will appear centered on the page.



For the section under the comment "Specific To projects.html", these are rules that apply specifically to the page projects.html

- These rules specify that the paragraphs and the list will be in a grid container, and it will determine the overall layout of the grid. It also specifies the alignment of the content, as well as the padding, border and margin of the project-list container.



For the section under the comment "Specific To future_if_ai.html", these are rules that apply specifically to the page future_of_ai.html

- These specify how the image code.jpg will appear on the screen, as well as the paragraph, video div and the two videos as well.



For the section under the comment "Specific To contact.html", these are rules that apply specifically to the page contact.html

- These rules specify the styling for the contact form, including the background-color, as well as the border and margin.

- Specifies how the contact form will be set up, including appearance, margins, and border.
- Specifies that if a div tag is a directly adjacent sibling of a h1 tag, than the text within the div tag will be centered. This only applies to the contact form.
- There is also a CSS rule for the class "input-color", which is utilized by the JavaScript code to change the background color of the input fields when the user submits it.


After these sections, I have two different media query sections that are specifically for tablet and mobile sizes.

- The tablet size is specified as a minimum viewport width of 1000px. Many rules are altered inside this media query. It reorganizes the content for each and every webpage to make it look more visually appealing. Images are resized, divs are formatted differently so that they fit appropriately on the tablet viewport.

- The mobile size is specified as a minimum viewport width of 400px. Many rules are altered inside this media query. It reorganizes the contents for each webpage to make it look more visually appealing in the context of viewing them on mobile devices. Many of these rules are inherited from the media query for tablets, and the media query for mobile alters them further to make each element and item appear fitted on a mobile viewport. The nav bar has its links separated further so that they are easier to click on. I have also done the same thing for buttons, both on the contact as well as the contact form. This media query also resizes images and videos.






index.html

Within the <head> tag, the characters are encoded using UTF-8, the title is "Marc MacDougall" and the favicon , titled "favicon.png", was recieved from the Dalhousie website, http://www.dal.ca/. There is also a meta viewport tag that specifies that this is a responsive webpage.

Within the <nav> tags, a navigation bar has links to the following pages:
- index.html (titled "Home")
- about_me.html (titled "About Me")
- goals.html (titled "Goals")
- experience.html (titled "Experience")
- projects.html (titled "Projects")
- future_of_ai.html (titled "Future of AI")
- contact.html (tited "Contact")

Within the <main> tags, I have a hero image under the nav bar, a title with my name, and 2 paragraphs explaining the purpose of my website. Followed afterwards is an image titled "dal_logo.jpg", with the alt caption "Logo of Dalhousie University", a width of 544 and a height of 306.
There is also a table with the caption "Sections of the Website", linking to all of the pages on the website.

Within the <footer> tags, there is a "contact me" button linking to my Dalhousie student email, and also audio controls for the song "music1.jpg". There is also now a div that has 3 buttons that change the webpage's color palettes.

Finally at the bottom, there is a script tag that imports the file "js_index.js" for JavaScript code.






about_me.html

Within the <head> tag, the characters are encoded using UTF-8, the title is "About Me" and the favicon, titled "favicon.png", was recieved from the Dalhousie website, http://www.dal.ca/. There is also a meta viewport tag that specifies that this is a responsive webpage.

This webpage also has the nav bar, exactly that same as it appeared on index.html.

Within the <main> tags, I have a title for the page and 2 paragraphs giving a small profile of myself and my educational/career goals. Afterwards, there is an unordered list about what some of my interests are.
There is also 2 photos on the page, "blomidon.jpg" (with width of 450 and a height of 300) and "harriet.jpg" (with a width of 280 and a height of 300).
Both the list and the 2 images are located within the div "about-container".

Within the <footer> tags, there is a "contact me" button linking to my Dalhousie student email, and also audio controls for the song "music1.jpg". There is also now a div that has 3 buttons that change the webpage's color palettes.

Finally at the bottom, there is a script tag that imports the file "js_about_me.js" for JavaScript code.





goals.html

Within the <head> tag, the characters are encoded using UTF-8, the title is "My Goals" and the favicon, titled "favicon.png" was recieved from the Dalhousie website, http://www.dal.ca/. There is also a meta viewport tag that specifies that this is a responsive webpage.

This webpage also has the nav bar, exactly that same as it appeared on index.html.

In the <main> tags, there is a title for the page and the photograph "goldberg.jpg", follows by an ordered list about what my current goals are. and another ordered list for future goals. Under each list entry, there is a short description about these goals, and these descriptions are hidden by default. The image and both lists are in the div "goals-container", which is a grid. 

Within the <footer> tags, there is a "contact me" button linking to my Dalhousie student email, and also audio controls for the song "music1.jpg". There is also now a div that has 3 buttons that change the webpage's color palettes.

Finally at the bottom, there is a script tag that imports the file "js_goals.js" for JavaScript code.





experience.html


Within the <head> tag, the characters are encoded using UTF-8, the title is "Experience" and the favicon, titled "favicon.png" was recieved from the Dalhousie website, http://www.dal.ca/. There is also a meta viewport tag that specifies that this is a responsive webpage.

This webpage also has the nav bar, exactly that same as it appeared on index.html.

In the <main> tags, I have a title for the page and also 2 paragraphs explaining what my experience level is and what my plans are. Followed afterwards is the image "dal_compsci.png" which links to "http://cs.dal.ca".

Within the <footer> tags, there is a "contact me" button linking to my Dalhousie student email, and also audio controls for the song "music1.jpg". There is also now a div that has 3 buttons that change the webpage's color palettes.

Finally at the bottom, there is a script tag that imports the file "js_experience.js" for JavaScript code.





projects.html

Within the <head> tag, the characters are encoded using UTF-8, the title is "Projects" and the favicon, titled "favicon.png" was recieved from the Dalhousie website, http://www.dal.ca/. There is also a meta viewport tag that specifies that this is a responsive webpage.

This webpage also has the nav bar, exactly that same as it appeared on index.html.

In the <main> tags, I have a title for the page and 2 paragraphs explaining my situation with projects and that I plan on completing more in the future. I then have an unordered list about a list of future projects that I want to undertake.

Within the <footer> tags, there is a "contact me" button linking to my Dalhousie student email, and also audio controls for the song "music1.jpg". There is also now a div that has 3 buttons that change the webpage's color palettes.

Finally at the bottom, there is a script tag that imports the file "js_projects.js" for JavaScript code.





future_of_ai.html

Within the <head> tag, the characters are encoded using UTF-8, the title is "Future of AI" and the favicon, titled "favicon.png" was recieved from the Dalhousie website, http://www.dal.ca/. There is also a meta viewport tag that specifies that this is a responsive webpage.

This webpage also has the nav bar, exactly that same as it appeared on index.html.

In the <main> tags, I have a title for the page, and also the photo "code.jpg". Afterwards I have a paragraph about my interest in AI and also the promising future that it holds.
Also within the <main> tags are 2 videos, one which is "what_is_ai.mp4", and the other one being an <iframe> link to https://www.youtube.com/embed/iqJVVoluJzY
Both the videos are contained within a flexbox.

Within the <footer> tags, there is a "contact me" button linking to my Dalhousie student email, and also audio controls for the song "music1.jpg". There is also now a div that has 3 buttons that change the webpage's color palettes.

Finally at the bottom, there is a script tag that imports the file "js_future_of_ai.js" for JavaScript code.





contact.html

Within the <head> tag, the characters are encoded using UTF-8, the title is "Future of AI" and the favicon, titled "favicon.png" was recieved from the Dalhousie website, http://www.dal.ca/. There is also a meta viewport tag that specifies that this is a responsive webpage.

This webpage also has the nav bar, exactly that same as it appeared on index.html.

In the <main> tags, I have a title for the page. Afterwards I have a form in which the user can enter their first name, last name, their email address and a message. All contents of the form are within the div "contact-form".

Within the <footer> tags, there is a "contact me" button linking to my Dalhousie student email, and also audio controls for the song "music1.jpg". There is also now a div that has 3 buttons that change the webpage's color palettes.

Finally at the bottom, there is a script tag that imports the file "js_contact.js" for JavaScript code.






FILE STRUCTURE

A3_mr849651
	- about_me.html
	- contact.html
	- experience.html
	- future_of_ai.html
	- goals.html
	- index.html
	- projects.html
	- styles.css
	- js_about_me.js
	- js_contact.js
	- js_experience.js
	- js_future_of_ai.js
	- js_goals.js
	- js_index.js
	- js_projects.js
	- README.txt
	- code_review.pdf
	- wireframes.pdf
	audio
		- music1.mp3
	pics
		- blomidon.jpg
		- code.jpg
		- dal_compsci.png
		- dal_logo.jpg
		- favicon.png
		- goldberg.jpg
		- harriet.jpg
		- hero_image.jfif
	video
		- what_is_ai.mp4







REFERENCES

Craig David Morrison. Cape Blomidon, Nova Scotia. 2017. From <https://fineartamerica.com/featured/cape-blomidon-nova-scotia-craig-david-morrison.html>. Accessed 02/03/2023.

Dalhousie. Brightspace homepage. 2023. From <https://dal.brightspace.com/d2l/api/lp/1.9/courses/6606/image?height=300&width=1200&versionNumber=c0ffeec0-ffee-c0ff-eec0-ffeec0ffeec0>. Date accessed 04/02/2023.

Dalhousie. Dalhousie homepage. 2023. From <https://cdn.dal.ca/etc/designs/dalhousie/clientlibs/global/default/images/favicon/icon-192x192.png.lt_52d8b16a1d0bc6e6e2f65bda92d6c7fa.res/icon-192x192.png>. Date accessed 02/03/2023.

Dalhousie. Faculty of Computer Science Homepage. 2023. From <https://cdn.dal.ca/faculty/computerscience/_jcr_content/contentPar/featureslider/featureSlider/featureslide_1244620597/image.adaptive.579.high.jpg/1673634653257.jpg>. Date accessed 02/03/2023

Florian Olivo. James Cook University. 2019. From <https://www.jcu.edu.au/__data/assets/image/0004/809653/varieties/newsdetails.jpg>. Date accessed 02/03/2023.

Harvard University. 2020. Youtube. Machine Learning Explained. From <https://www.youtube.com/watch?v=iqJVVoluJzY>. Date accessed 02/03/2023.

Marc MacDougall. 2022. Photo of my cat, Harriet. Date accessed 02/03/2022.

Matthew Tran. GrantMe. 2022. From <https://grantme.ca/wp-content/uploads/2022/01/download-1.png>. Date accessed 02/03/2023.

Midsummer. 2020. Youtube. [FREE] Lo-fi type beat - Lighter | lofi hiphop beat. From <https://www.youtube.com/watch?v=QCzRXx1DA_U&ab_channel=midsummer>. Date accessed 02/03/2023.

Nova Scotia Government and General Employees Union. NSGEU. 2021. From <https://nsgeu.ca/wp-content/uploads/2020/06/dalhousie-sign.jpg>. Date accessed 02/03/2023.

Simplilearn. 2023. Youtube. What is Artificial Intelligence? | Artificial Intelligence In 5 Minutes | AI Explained | Simplilearn. From <https://www.youtube.com/watch?v=uMzUB89uSxU> Date accessed 02/02/2023.
