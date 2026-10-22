THE OTHER FACE - website files
==============================

How to open
  Double-click index.html. Keep the folders (css and js) next to it.
  The fonts load from the internet (Google Fonts), so open it with internet access.

Pages (each page has its own html, css and js file)
  index.html   main page      css/index.css  js/index.js
  liam.html    Liam's page    css/liam.css   js/liam.js
  evan.html    Evan's page    css/evan.css   js/evan.js
  lily.html    Lily's page    css/lily.css   js/lily.js
  tyler.html   Tyler's page   css/tyler.css  js/tyler.js
  mia.html     Mia's page     css/mia.css    js/mia.js
  tina.html    Tina's page    css/tina.css   js/tina.js   (statement section only, no profile)

Images
  images/   photos of each person (Liam.jpg, Evan.jpg, Lily.jpg, Tyler.jpg, Mia.jpg) and the case photos.
            File names are case-sensitive on most web hosts, so keep them exactly as written in the css files.

Video
  videos/   put the case video here and set its path in js/index.js (CASE_VIDEO). See videos/README.txt.

Fonts
  fonts/   put BRoya.ttf (and BRoya-Bold.ttf) here. See fonts/README.txt.

Shared by all pages
  css/common.css   colors, glass sections, buttons, music button, cursor
  js/common.js     helpers, music, magnifier cursor, scroll reveal

Logins (type them on index.html)
  detective1 / 1234   -> investigator tools on the main page
  detective2 / 1234   -> investigator tools on the main page
  Liam  / Liam1997    -> liam.html
  Evan  / Evan2001    -> evan.html
  Lily  / Lily1998    -> lily.html
  Tyler / Tyler1997   -> tyler.html
  Mia   / Mia1998     -> mia.html
  Tina  / Tina2002    -> tina.html
  Each personal page sends visitors back to index.html if they did not log in first.
  The "Log out" button on a personal page goes back to index.html.

Where to edit
  Accounts, suspects, hints ............ top of js/index.js  (EDIT HERE)
  Details and texts of each person ..... top of that person's js file  (EDIT HERE)
      The details (age, job, relationship, personality) and the three texts are
      copies of Liam's for now. Replace them with the real ones.
  Sentence before the Begin button ..... index.html (near the bottom, class cta-k)

Important
  There is no server. Names and passwords are checked inside the browser,
  so anyone who opens js/index.js can read them. Use this for a game, not for secrets.
