# Oileain Open Maps

An experiment in rendering maps of the Island of Ireland. Based on the book [Oileain](http://www.oileain.org/) by David Walsh. 
The application is running here:

- <https://oileain.netlify.app>

This application is implemented using the [Aurelia Framework](https://aurelia.io/). It relies the 
the API hosted in this repository:

- https://github.com/edeleastar/oileain-api

This is an imutable json version of David's book. 

# Building

With git & node installed, clone this repo:

~~~
git clone https://github.com/edeleastar/oileain-au.git
~~~

From withint the project install dependencies:

~~~
npm install
~~~

In order to run the application, also install the [Aurelia CLI](https://aurelia.io/docs/cli)


~~~
 npm install aurelia-cli -g
~~~


Before it will build successfully, you will need a [Mapbox API Key](https://www.mapbox.com/) 
by registering for their service. The free tier will be fine.

Then create a file called `map-config.ts` in the project root structured like this:

### map-config.ts
~~~
export const mapConfig = {
  leafletKey : 'YOUR KEY HERE'
};
~~~

Paste your key as shown.

Then, to run the application, run the following from within the project folder:

~~~
au run --watch
~~~

The application should be served on:

- <http://localhost:8080/>
