"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[2370],{9647:function(e){e.exports=JSON.parse('{"pluginId":"intro","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/","docId":"intro"},{"type":"link","label":"Requirements","href":"/requirements","docId":"requirements"},{"type":"link","label":"Download","href":"/download","docId":"download"},{"type":"category","label":"Guides","items":[{"type":"link","label":"Basics","href":"/guides/basics","docId":"guides/basics"},{"type":"link","label":"Finances","href":"/guides/finances","docId":"guides/finances"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Installation","items":[{"type":"link","label":"Uploading Files","href":"/installation/uploading","docId":"installation/uploading"},{"type":"link","label":"VHost Configuration","href":"/installation/vhost","docId":"installation/vhost"},{"type":"link","label":"Installation","href":"/installation/","docId":"installation/installation"},{"type":"link","label":"Cron/Scheduled Tasks","href":"/installation/cron","docId":"installation/cron"},{"type":"link","label":"Importing","href":"/installation/importing","docId":"installation/importing"},{"type":"link","label":"Updating","href":"/installation/updating","docId":"installation/updating"},{"type":"link","label":"Installation Issues","href":"/installation/issues","docId":"installation/issues"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Configuration","items":[{"type":"link","label":"Config Files","href":"/config/files","docId":"config/files"},{"type":"link","label":"Email","href":"/config/email","docId":"config/email"},{"type":"link","label":"Optimizing","href":"/config/optimizing","docId":"config/optimizing"},{"type":"link","label":"Notifications","href":"/config/notifications","docId":"config/notifications"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Themes and Layouts","items":[{"type":"link","label":"Layouts and Template Basics","href":"/customize/layouts","docId":"customize/layouts"},{"type":"link","label":"Theming","href":"/customize/theming","docId":"customize/theming"},{"type":"link","label":"Maps and Layouts","href":"/customize/maps","docId":"customize/maps"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Developers","items":[{"type":"link","label":"Environment Configuration","href":"/developers/environment","docId":"developers/environment"},{"type":"link","label":"Building Assets","href":"/developers/building-assets","docId":"developers/building-assets"},{"type":"link","label":"Addons","href":"/developers/addons","docId":"developers/addons"},{"type":"link","label":"Awards","href":"/developers/awards","docId":"developers/awards"}],"collapsible":true,"collapsed":true},{"type":"category","label":"API","items":[{"type":"link","label":"Overview","href":"/api/overview","docId":"api/overview"},{"type":"link","label":"Authentication","href":"/api/auth","docId":"api/auth"},{"type":"link","label":"APIs","href":"/api/apis","docId":"api/apis"}],"collapsible":true,"collapsed":true},{"type":"category","label":"ACARS","items":[{"type":"link","label":"Overview","href":"/acars/overview","docId":"acars/overview"},{"type":"link","label":"License Agreement","href":"/acars/eula","docId":"acars/eula"},{"type":"link","label":"Installation (Server)","href":"/acars/install-server","docId":"acars/install-server"},{"type":"link","label":"User Guide","href":"/acars/user-guide","docId":"acars/user-guide"},{"type":"link","label":"Customization","href":"/acars/customization","docId":"acars/customization"},{"type":"link","label":"Config Maps","href":"/acars/configmaps","docId":"acars/configmaps"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Getting Help","href":"/help","docId":"help"}]},"docs":{"acars/configmaps":{"id":"acars/configmaps","title":"Config Maps","description":"Since developers often use custom offsets or datarefs, and not the defaults, having configmaps allows you to map an aircraft feature (landing lights, etc) to a \\"feature\\", which tells ACARS where to read the data for those features. They\'re stored in the configmaps directory.","sidebar":"docs"},"acars/customization":{"id":"acars/customization","title":"Customization","description":"Logo Images","sidebar":"docs"},"acars/eula":{"id":"acars/eula","title":"License Agreement","description":"Last updated: September 26, 2020","sidebar":"docs"},"acars/flight":{"id":"acars/flight","title":"Flight Planning","description":"Setting up your flight"},"acars/install-server":{"id":"acars/install-server","title":"Installation (Server)","description":"1. Module Installation","sidebar":"docs"},"acars/overview":{"id":"acars/overview","title":"Overview","description":"The ACARS application is designed to run with phpVMS 7 to automatically report your pilot reports from the new Microsoft Flight Simulator, Prepar3d, FSX and X-Plane.","sidebar":"docs"},"acars/user-guide":{"id":"acars/user-guide","title":"User Guide","description":"---","sidebar":"docs"},"api/apis":{"id":"api/apis","title":"APIs","description":"All of these calls require a valid API key","sidebar":"docs"},"api/auth":{"id":"api/auth","title":"Authentication","description":"Each user is given an API key (and can regenerate it) when they register. Requests to a phpVMS API will require an X-API-Key header, with this key. Addons can take advantage of this by adding the api.auth middleware to their route group.","sidebar":"docs"},"api/overview":{"id":"api/overview","title":"Overview","description":"phpVMS includes a REST API that can be used for retrieving or saving information.","sidebar":"docs"},"config/debug":{"id":"config/debug","title":"Debug Mode","description":"Debugging enables extra logging, and the Laravel toolbar allows you to inspect what\'s happening on the page."},"config/email":{"id":"config/email","title":"Email","description":"I recommend using a 3rd party service for sending email. They usually offer SMTP support, and great logging and analytics. Especially on a shared host, where email is locked down, and a \\"naughty neighbor\\" can quickly get the server/IP you\'re emailing from blacklisted. I highly recommend using a service over SMTP, because SMTP slows response times down.","sidebar":"docs"},"config/files":{"id":"config/files","title":"Config Files","description":"A lot of settings can be located in the phpVMS Admin panel, under settings.","sidebar":"docs"},"config/notifications":{"id":"config/notifications","title":"Notifications","description":"phpVMS can send event notifications to different places. Currently, Discord is supported. Some of the events that are supported:","sidebar":"docs"},"config/optimizing":{"id":"config/optimizing","title":"Optimizing","description":"These are just some basic optimizing. For additional optimization information, refer to the Laravel docs","sidebar":"docs"},"customize/layouts":{"id":"customize/layouts","title":"Layouts and Template Basics","description":"phpVMS can customized to fit your VA\'s look and feel. The templating is powered by Laravel Blade. To understand skinning and changing templates, study the Laravel Blade documents, and then the below will make more sense.","sidebar":"docs"},"customize/maps":{"id":"customize/maps","title":"Maps and Layouts","description":"Modification of the Leaflet maps used is possible by editing two templates:","sidebar":"docs"},"customize/theming":{"id":"customize/theming","title":"Theming","description":"The custom theme system is using laravel-theme, which allows for great flexibility for creating themes, and extending existing ones, or only modifying the templates that you want to change.","sidebar":"docs"},"developers/addons":{"id":"developers/addons","title":"Addons","description":"If you\'re looking to create a full add-on, that has it\'s own URL, this is the page you want. If you want to create a component that someone can include into their own views/templates, you want a widget.","sidebar":"docs"},"developers/awards":{"id":"developers/awards","title":"Awards","description":"Awards have been improved from the previous version. Awards are created in the admin panel, but are associated with an Award plugin. This class allows you to check any conditions to see if the award should be given. These award classes can also be passed a parameter (a number, string or JSON string), so you can use the same Award class for multiple awards.","sidebar":"docs"},"developers/building-assets":{"id":"developers/building-assets","title":"Building Assets","description":"The default CSS/Javascript is built and packaged using webpack. The main Javascript files used are compiled together into a single JS file, which is then minimized. While most settings are exposed, you might still want to customize them.","sidebar":"docs"},"developers/environment":{"id":"developers/environment","title":"Environment Configuration","description":"This is for running a local configuration, for running unit-tests, etc.","sidebar":"docs"},"download":{"id":"download","title":"Download","description":"There are a few ways you can obtain phpVMS and its dependencies. The full package method already includes the vendor directory and you don\'t need to do anything but upload it.","sidebar":"docs"},"guides/basics":{"id":"guides/basics","title":"Basics","description":"phpVMS 7 has a few fundamental differences from the old version, on how schedules and flights are handled.","sidebar":"docs"},"guides/finances":{"id":"guides/finances","title":"Finances","description":"Journals","sidebar":"docs"},"help":{"id":"help","title":"Getting Help","description":"This guide details the requirements for getting help with phpVMS or vmsACARS.","sidebar":"docs"},"installation/cron":{"id":"installation/cron","title":"Cron/Scheduled Tasks","description":"In order for some phpVMS features to work, a cronjob is required to be setup. Some of the features that rely on cronjobs include:","sidebar":"docs"},"installation/importing":{"id":"installation/importing","title":"Importing","description":"You can import through either the installer or the command line after install.","sidebar":"docs"},"installation/installation":{"id":"installation/installation","title":"Installation","description":"The installation requires a few steps:","sidebar":"docs"},"installation/issues":{"id":"installation/issues","title":"Installation Issues","description":"Installer 404","sidebar":"docs"},"installation/updating":{"id":"installation/updating","title":"Updating","description":"1. Make a backup of your site! Skip this at your own peril. At a minimum, make a backup of the env.php files. Also, make note of any changes you made to files in the /config folder - I recommend making a backup of this as well and checking to see if there are changes to any of those files which might need to be copied over.","sidebar":"docs"},"installation/uploading":{"id":"installation/uploading","title":"Uploading Files","description":"When uploading the files, you have several options on how to. These mainly apply to shared hosts. For your own server or if you have control over the vhost files, upload/extract the files to your desired location and point the vhost to the /public folder.","sidebar":"docs"},"installation/vhost":{"id":"installation/vhost","title":"VHost Configuration","description":"If you\'re configuring your own VPS/webserver, the vhosts should point to the public directory.","sidebar":"docs"},"intro":{"id":"intro","title":"Introduction","description":"Welcome to the phpVMS Docs site! phpVMS is a PHP based application to run and simulate and airline. It allowed users to register, view flight schedules that you create, and file flight reports.","sidebar":"docs"},"requirements":{"id":"requirements","title":"Requirements","description":"Server Requirements","sidebar":"docs"}}}')}}]);