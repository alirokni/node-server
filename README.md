# node-server
Simple <a hrefr="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework">HTTP node.js server</a> is a standalone server to run any static web page. The code is dervied from https://nodejs.dev/learn/making-http-requests-with-nodejs and as example of it is at  https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework

Once the node.js is insatlled, edit profile $PATH variable using export command to run node from any directory in terminal (e.g. export PATH="/Users/USER-NAME/node/bin:$PATH"). In order to make life easier, setting profile $PATH can be done in .profile and sourced before running node app. To check availability of node, execute node -v to get the node version.  

server.js can be installed in any directory  and webpage can have access to it. An example of directory which has node.js in a different directory than development server is showing in following:   
<pre>
- node
- server
 -- server.js
 -- package.json
 -- ...
 -- dev
 --- index.html
  ---- js
   ----- global.js
  ---- style
   ----- global.css
  ---- images
   ----- logo.png
</pre>

For above structure, runing server.js in parent directory of dev and node directory will result in showing following in terminal 

<pre>
/Users/USERNAME/dev $ npm run start or npm run debug
Server running at http://127.0.0.1:1337/
</pre>
Visiting <b>127.0.0.1:1337/dev/index.html</b> in a browser shows content of index.html and other assets. 

If port 1337 is giving conflict or is in use, any other avaible port can be used.

