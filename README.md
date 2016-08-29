# node-server
Simple HTTP node.js server is a standalone server to run any static web page.

Once the node.js is insatlled, edit profile $PATH variable using export command to run node from any directory in terminal (e.g. export PATH="/Users/USER-NAME/node/bin:$PATH").

server.js can be installed in any directory  and webpage can have access to it. An example of directory which has node.js in a different directory than development server is showing in following:   
<pre>
- node
- ...
- dev
 -- index.html
  --- js
   ---- global.js
  --- style
   ---- global.css
  --- images
   ---- logo.png
</pre>

For above structure, runing server.js in dev or node directory will result in showing following in terminal 

<pre>
/Users/USERNAME/dev $ node server.js
Server running at http://127.0.0.1:1337/
</pre>
Visiting <b>http://127.0.0.1:1337/dev/index.html</b> in a browser shows content of index.html and other assets. 

If port 1337 is giving conflict or is in use, any other avaible port can be used.
