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
        3. Then run --> firebase login , 
        firebase init(hosting and data storage) and firebase deploy
    b.COPY the given script and add it to your ​project’s javascript file
    c. On your firebase homepage dashboard, click on ​Authentication​ underDevelop category dropdown menu.
    d. Now click on google and toggle on enable switch button.
    e.Select project support email and click on save
    f. For facebook autentication:
      On the Facebook for Developers site, get the App ID and an App Secret for your app.
Enable Facebook Login:

1.In the Firebase console, open the Auth section.
2.On the Sign in method tab, enable the Facebook sign-in method and specify the App ID and App Secret you got from Facebook.
3.Then, make sure your OAuth redirect URI (e.g. my-app-12345.firebaseapp.com/__/auth/handler) is listed as one of your OAuth redirect URIs in your Facebook app's settings page on the Facebook for Developers site in the Product Settings > Facebook Login config.You will find input field Valid OAuth redirect URIs where you need to copy the OAuth Redirect URI from Firebase.



