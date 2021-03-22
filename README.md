# blogging-website

This is a web design of a frontend template similar to any blogging or online publishing platform like Medium using HTML, CSS, JavaScript, PHP, MySQL, jQuery-ajax & Firebase.

Firebase user authentication( Google/facebook authetication for signin/signup and signout) used.
Total views and total users are calculated using jQuery-ajax, MySQL and PHP.

To run xampp:
  1. command: cd /opt/lampp/
  2. start apache server and SQL server.
  3. In browser ,type localhost/phpmyadmin/ create 2 tables
        Table 1: visit -- (user,count)
        Table 2: rate -- (total,like,dislike)
  4. command: cd /opt/lampp/htdocs/   store all files images ,css,html, javascript and php files.
  5. jQuery AJAX to connect server(store-rating.php) and return back to page which maintain like, dislike, users count and views count.
  
Firebase setup
1. Goto firebase.google.com
2. Log in with your google account
3. On the firebase console click on Add project
4. Enter your project name and edit project id if required
5.Select I accept & I agree checkboxes
6. On the project-overview-Firebase console -->
    a. Select  ​( </> )​ app to get started.
    Terminal command:
        1. To install firebase-tools --> sudo npm install -g firebase-tools
        2. If error occurs update npm uding command --> sudo npm update -g
        3. Then run --> firebase login , firebase init and firebase deploy
    b.COPY the given script and add it to your ​project’s javascript file
    c. On your firebase homepage dashboard, click on ​Authentication​ underDevelop category dropdown menu.
    d. Now click on google and toggle on enable switch button.
    e.Select project support email and click on save
