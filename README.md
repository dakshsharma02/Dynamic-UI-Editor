# Dynamic UI Editor – React + Tailwind CSS

This project is a fully functional UI editor built using React and Tailwind CSS.  
It allows users to customize fonts, colors, buttons, spacing, layout structure, image galleries and borders directly on the screen — without changing any code. All updates appear in real-time in the preview section.

This editor is built to simulate real-world design workflows where clients or designers request small UI changes frequently. Instead of manually editing CSS every time, the editor provides a configuration panel that makes the UI fully adjustable.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Live Demo (Netlify)

https://dynamic-ui-editing.netlify.app


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------



Features

•⁠  ⁠Live editing panel – customizes UI in real time  
•⁠  ⁠Two layouts – can switch between Layout 1 and Layout 2  
•⁠  ⁠Editable options include fonts, font size, font weight, button styling, colors, border radius, spacing, layout padding,         gallery settings, etc.  
•⁠  ⁠Export UI settings as a JSON file  
•⁠  ⁠Import saved JSON to restore a theme  
•⁠  ⁠Automatically saves changes in localStorage  
•⁠  ⁠Responsive and built using React + Tailwind CSS + Vite  

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Component API and Configurable Props

The entire UI is controlled through one configuration object called cfg. It contains the following properties:

Layout:

•⁠  ⁠layout – chooses between "layout1" or "layout2"

Typography:

•⁠  ⁠typography.family – font family (Inter, Poppins, Roboto etc.)  
•⁠  ⁠typography.weight – font weight from 100 to 900  
•⁠  ⁠typography.size – base font size in pixels (10–60px)

Button:

•⁠  ⁠button.radius – rounded corners of button  
•⁠  ⁠button.shadow – button shadow depth (none, small, medium, large)  
•⁠  ⁠button.align – alignment of button (left, center, right)  
•⁠  ⁠button.bg – background color of button  
•⁠  ⁠button.color – text color of button  
•⁠  ⁠button.strokeColor – button border color  
•⁠  ⁠button.strokeWeight – button border width

Gallery:

•⁠  ⁠gallery.align – alignment of image gallery (left, center, right)  
•⁠  ⁠gallery.spacing – space between gallery images (px)  
•⁠  ⁠gallery.radius – border radius of gallery images

General Section Styling:

•⁠  ⁠general.cardRadius – rounding of the whole section or card  
•⁠  ⁠general.containerPadding – padding inside the section  
•⁠  ⁠general.sectionBg – background color of the preview area

Borders / Stroke:

•⁠  ⁠stroke.color – border color for the card or layout  
•⁠  ⁠stroke.weight – border thickness in pixels

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


How the Editor Works

1.⁠ ⁠A cfg object is stored in React with useState.  
2.⁠ ⁠When a user interacts with a control in the editor panel, that value in cfg is updated.  
3.⁠ ⁠The preview section reads cfg and refreshes visually in real-time.  
4.⁠ ⁠Config values are saved in localStorage, so changes stay even after page reload.  
5.⁠ ⁠When Export is clicked, the cfg object is downloaded as a JSON file.  
6.⁠ ⁠When Import is used, a JSON file is loaded and applied to cfg.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Design and UX Decisions

•⁠  ⁠Tailwind CSS was used to make styling fast, consistent and utility-based.  
•⁠  ⁠All styling is linked to the config object, making the UI completely dynamic and reusable.  
•⁠  ⁠Export and Import options are provided so users can save or share UI settings easily.  
•⁠  ⁠localStorage ensures the editor feels persistent and user-friendly.  
•⁠  ⁠Component-based structure in React makes the project easier to maintain and extend.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


How to Run the Project Locally

1.⁠ ⁠Clone the repository  
   git clone https://github.com/dakshsharma02/dynamic-ui-editor.git

2.⁠ ⁠Go inside the folder  
   cd dynamic-ui-editor

3.⁠ ⁠Install dependencies  
   npm install

4.⁠ ⁠Run the project  
   npm run dev

Open in browser: http://localhost:5173

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Deployment (Netlify)

•⁠  ⁠This project is deployed using Netlify  
•⁠  ⁠Build Command:  npm run build  
•⁠  ⁠Publish Directory:  dist  
•⁠  ⁠No extra configuration required in package.json for Netlify deployment

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Future Improvements

•⁠  ⁠Add one or two extra layout options so users can switch between different screen structures  
•⁠  ⁠Allow saving multiple UI presets instead of only one configuration  
•⁠  ⁠Add Dark Mode / Light Mode toggle for better theme flexibility  
•⁠  ⁠Add feature to reset only a specific section (typography / button / gallery) rather than resetting everything  
•⁠  ⁠Improve responsiveness by adjusting font sizes, padding and gallery layout for mobile and tablet screens
•⁠  ⁠Allow users to upload their own images from device and use them inside the gallery section instead of default placeholders

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Made with React and Tailwind CSS.

Your Coder - Daksh Sharma 

Thank you ❤️ 
