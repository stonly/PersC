PersC
=====

Chrome extension that shows you where you are located on a page as a number from 0 to 100 representing the percentage completed.

README.md	- This file

bg_script.js - The background script that update the tab icon based on changes in the view postion percentage as well as switches between tabs.

manifest.json	- Chrome extension manifest file

pc_128.png - 128x128px icon

pc_16.png	- 16x16px icon

pc_48.png	- 48x48px icon

pc_icon.png	- 9x9px tab icon

pc_popup.html	- The popup page when you click on the tab icon.

pos.js - The content script that tracks the percentage by comparing the current top most visible position to the total height of the page minus the currently visible height. The result is the percentage indicated in the tab icon.
