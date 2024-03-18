"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[3906],{2027:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(4848),i=s(8453);const r={id:"addons",title:"Addons"},o="Basic Scaffold Generation",a={id:"developers/addons",title:"Addons",description:"If you're looking to create a full add-on, that has it's own URL, this is the page you want. If you want to create a component that someone can include into their own views/templates, you want a widget.",source:"@site/docs/developers/addons.md",sourceDirName:"developers",slug:"/developers/addons",permalink:"/developers/addons",draft:!1,unlisted:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/developers/addons.md",tags:[],version:"current",frontMatter:{id:"addons",title:"Addons"},sidebar:"docs",previous:{title:"Building Assets",permalink:"/developers/building-assets"},next:{title:"Awards",permalink:"/developers/awards"}},l={},d=[{value:"Namespacing",id:"namespacing",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"Automatic Installation",id:"automatic-installation",level:3},{value:"Web Routes",id:"web-routes",level:2},{value:"Admin Routes",id:"admin-routes",level:4},{value:"API Routes",id:"api-routes",level:4},{value:"<code>middleware</code>",id:"middleware",level:4},{value:"Controllers",id:"controllers",level:2},{value:"Getting the User",id:"getting-the-user",level:5},{value:"Models",id:"models",level:2},{value:"Creating a Model",id:"creating-a-model",level:3},{value:"Relationships",id:"relationships",level:4},{value:"Creating and modifying tables with migrations",id:"creating-and-modifying-tables-with-migrations",level:2},{value:"Seeding Data",id:"seeding-data",level:3},{value:"Service Layer",id:"service-layer",level:2},{value:"Repositories",id:"repositories",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"If you're looking to create a full add-on, that has it's own URL, this is the page you want. If you want to create a component that someone can include into their own views/templates, you want a widget."}),"\n",(0,t.jsxs)(n.p,{children:["At their core, the module system uses ",(0,t.jsx)(n.a,{href:"https://nwidart.com/laravel-modules/v2/introduction",children:"laravel-modules"}),". The stubs are modified so the generation create the structure that is compatible with the phpVMS codebase."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"basic-scaffold-generation",children:"Basic Scaffold Generation"}),"\n",(0,t.jsx)(n.p,{children:"To generate a module, run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan module:make {ModuleName}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Which generates the basic structure in the ",(0,t.jsx)(n.code,{children:"/modules"})," folder. After generating the module, if you want to make it available on composer, edit the ",(0,t.jsx)(n.code,{children:"composer.json"})," file, setting your ",(0,t.jsx)(n.code,{children:"VENDOR"})," and author information."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["All of the examples below will be based on a module named ",(0,t.jsx)(n.code,{children:"Sample"}),". To see the source for the module, ",(0,t.jsx)(n.a,{href:"https://github.com/nabeelio/phpvms-module",children:"check it out on GitHub"}),"."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"namespacing",children:"Namespacing"}),"\n",(0,t.jsxs)(n.p,{children:["The root namespace for your module will be ",(0,t.jsx)(n.code,{children:"Modules\\{YOUR_MODULE}"}),", e.g, ",(0,t.jsx)(n.code,{children:"Modules\\Sample"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,t.jsx)(n.p,{children:"When a module is created, a directory structure like this is created:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u251c\u2500\u2500 Config\n\u251c\u2500\u2500 Console\n\u251c\u2500\u2500 Database\n\u251c\u2500\u2500 Http\n\u251c\u2500\u2500 Listeners\n\u251c\u2500\u2500 Models\n\u251c\u2500\u2500 Providers\n\u2514\u2500\u2500 Resources\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Config"})," - This contains the config file for use in your module. The items in this will be prefixed by your module name, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"echo config('sample.name'); # writes out \"Sample\"\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Console"})," - This contains any ",(0,t.jsx)(n.code,{children:"artisan"})," commands your module might have"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Database"})," - This contains several directories, the most important probably being the ",(0,t.jsx)(n.code,{children:"migrations"})," directory. See below for more information about migrations and database access."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Http"})," - The folders in this are all related to HTTP access for your application - includes the controllers and routes"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Listeners"})," - Any event listeners for your module will be in here. See below for more information about subscribing to events."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Models"})," - All of the models, used for database access, and corresponding to tables, are placed here."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Resources"})," - Any language files and views are placed here"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"automatic-installation",children:"Automatic Installation"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Still being written"})}),"\n",(0,t.jsxs)(n.p,{children:["To be able to publish to composer, add ",(0,t.jsx)(n.code,{children:"joshbrw/laravel-module-installer"})," as a dependency in your module's ",(0,t.jsx)(n.code,{children:"composer.json"})," file, and then set the ",(0,t.jsx)(n.code,{children:"type"})," in the ",(0,t.jsx)(n.code,{children:"composer.json"})," file to ",(0,t.jsx)(n.code,{children:"laravel-module"}),". Then a user can run ",(0,t.jsx)(n.code,{children:"composer require your/module"})," from Packagist to install."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/joshbrw/laravel-module-installer",children:"joshbrw/laravel-module-installer"})," for additional information."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"routing-and-controllers",children:"Routing And Controllers"}),"\n",(0,t.jsxs)(n.p,{children:["Routing follows the standard Laravel routing format, and the files are placed in the ",(0,t.jsx)(n.code,{children:"modules/{MODULE}/Http/Routes"})," folder. For examples, see the ",(0,t.jsx)(n.code,{children:"app/Routes"})," files to see how the Route groups work and how the middleware works. For example, the ",(0,t.jsx)(n.code,{children:"Sample"})," module's routes:"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"web-routes",children:"Web Routes"}),"\n",(0,t.jsxs)(n.p,{children:["These are in the ",(0,t.jsx)(n.code,{children:"Http/Routes/web.php"})," file. These define your pages that render HTML. For example, the default routes look like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"Route::group(['middleware' => [\n    'role:user' # Define who can access this page\n]], function() {\n\n    # all your routes are prefixed with your module's name\n    # e.g. yoursite.com/sample\n    Route::get('/', 'SampleController@index');\n});\n\n"})}),"\n",(0,t.jsx)(n.h4,{id:"admin-routes",children:"Admin Routes"}),"\n",(0,t.jsxs)(n.p,{children:["These are in the ",(0,t.jsx)(n.code,{children:"Http/Routes/admin.php"}),". This will look for controllers in the ",(0,t.jsx)(n.code,{children:"Http/Controllers/Admin"})," folder and namespace. These routes will be prefixed with ",(0,t.jsx)(n.code,{children:"$module/admin"})]}),"\n",(0,t.jsx)(n.h4,{id:"api-routes",children:"API Routes"}),"\n",(0,t.jsxs)(n.p,{children:["These are in ",(0,t.jsx)(n.code,{children:"Http/Routes/api.php"}),", and will look for controllers in the ",(0,t.jsx)(n.code,{children:"Http/Controllers/Api"})," folder and namespace. These routes will be prefixed with ",(0,t.jsx)(n.code,{children:"/api/$module"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"middleware",children:(0,t.jsx)(n.code,{children:"middleware"})}),"\n",(0,t.jsx)(n.p,{children:"Middleware allows you to inject a class into the HTTP request chain, so you don't need to call a check or something in every method."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"'middleware' => ['role:user']   \t# enable for all users\n'middleware' => ['role:admin']  \t# enable for admin only\n\n'middleware' => ['api.auth'] # for API routes, you can add this middlware to require API auth\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Read more about ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/9.x/middleware",children:"Laravel Middleware"})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"controllers",children:"Controllers"}),"\n",(0,t.jsx)(n.p,{children:"Now we can look at the (truncated) corresponding controller:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"<?php\n\nnamespace Modules\\Sample\\Http\\Controllers;\n\nuse App\\Http\\Controllers\\Controller;\nuse Illuminate\\Http\\Request;\n\nclass SampleController extends Controller\n{\n    // ...\n    \n    /**\n     * Display a listing of the resource.\n     */\n    public function index()\n    {\n        return view('sample::index');\n    }\n\n    // ...\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h5,{id:"getting-the-user",children:"Getting the User"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$user = Auth::user();\n"})}),"\n",(0,t.jsx)(n.p,{children:"To check if a user is logged in, use:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"if(Auth::check())\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"database-access",children:"Database Access"}),"\n",(0,t.jsx)(n.h2,{id:"models",children:"Models"}),"\n",(0,t.jsxs)(n.p,{children:["Models are the more basic way to access your database tables. For example, if you have a table called ",(0,t.jsx)(n.code,{children:"sample_table"}),", a model called ",(0,t.jsx)(n.code,{children:"SampleTable"})," would make most sense. While table names generally refer to objects in the plural, a model is named for an item in it's singular form."]}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-model",children:"Creating a Model"}),"\n",(0,t.jsxs)(n.p,{children:["The models go into the ",(0,t.jsx)(n.code,{children:"Models"})," directory. The fastest way is to use the ",(0,t.jsx)(n.code,{children:"artisan"})," helper:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"php artisan module:make-model SampleTable Sample\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After it's generated, you should open the model, and fill in the table name. See the ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/9.x/eloquent",children:"Laravel Model Documentation"})," for more details on how to work with models."]}),"\n",(0,t.jsx)(n.h4,{id:"relationships",children:"Relationships"}),"\n",(0,t.jsxs)(n.p,{children:["If your table has a column called ",(0,t.jsx)(n.code,{children:"pirep_id"}),", you can add a relationship to your model called ",(0,t.jsx)(n.code,{children:"pireps"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"namespace Modules\\Sample\\Models;\n\nuse App\\Contracts\\Model;\n\nclass SampleTable extends Model {\n    public function pirep()\n    {\n        return $this->belongsTo(Pirep::class, 'pirep_id');\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now, you can easily access the parent PIREP, without having to write any queries:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$record = SampleTable::with(['pirep'])->get(1);  # Get the ID of 1, eager-loading the pirep relationship\necho $record->pirep->dpt_airport_id; # Write out the departure airport\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We can also get fancy, since the relationship returns the ",(0,t.jsx)(n.code,{children:"Pirep"})," model, and it has relationships to the ",(0,t.jsx)(n.code,{children:"Airport"})," model, you can open the ",(0,t.jsx)(n.code,{children:"App\\Models\\Pirep"})," file and look at the relationships."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"echo $record->pirep->dpt_airport->name; # Write out the name of the departure airport\n"})}),"\n",(0,t.jsx)(n.p,{children:"The right relationships make life easier. See the Laravel documentation on relationships."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"creating-and-modifying-tables-with-migrations",children:"Creating and modifying tables with migrations"}),"\n",(0,t.jsxs)(n.p,{children:["Laravel includes a way to create and update tables, called ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/5.5/migrations",children:"migrations"}),".  Migrations are ways to programmatically define your tables, and let the framework worry about the exact syntax to use. The advantage to this abstraction is being."]}),"\n",(0,t.jsxs)(n.p,{children:["! You should ",(0,t.jsx)(n.em,{children:"not"})," be using raw SQL"]}),"\n",(0,t.jsxs)(n.p,{children:["There is an ",(0,t.jsx)(n.code,{children:"artisan"})," helper to generate migrations:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan module:make-migration create_sample_table ModuleName\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will create a migration file in your module's ",(0,t.jsx)(n.code,{children:"Database/migrations"})," directory. Now, when a user can goes to the updater, at ",(0,t.jsx)(n.code,{children:"/update"}),", it will show that there are updates available, and the migrations will be run. During an install, the migrations are also all run. This makes updates simple and straight-forward, without having to run any SQL manually."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"app/Database/migrations"})," directory has the core migrations and is a good reference on field types, especially if you're looking to add relationships."]}),"\n",(0,t.jsx)(n.p,{children:"!!! Design your tables well - follow the guidelines set by Laravel, and you'll have a much better time."}),"\n",(0,t.jsx)(n.p,{children:"!!!! Add new migration files when you have to modify a table, etc, after you've released it into the wild. The migrations that are run are kept track of, so if it's seen that it's already run the file, it won't run it again."}),"\n",(0,t.jsx)(n.h3,{id:"seeding-data",children:"Seeding Data"}),"\n",(0,t.jsxs)(n.p,{children:["I've added a few extra features, including adding seed data, including adding seeder data. For example, the ",(0,t.jsx)(n.code,{children:"Settings"})," table:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"<?php\nuse App\\Contracts\\Migration;\nuse App\\Services\\Installer\\SeederService;\nuse Illuminate\\Database\\Schema\\Blueprint;\n\nclass CreateSettingsTable extends Migration\n{\n    /**\n     * Run the migrations.\n     *\n     * @return void\n     */\n    public function up()\n    {\n        Schema::create('settings', function (Blueprint $table) {\n        \t// ... Create all the columns\n        });\n        \n        \t// Create some initial data, with the columns filled out\n        $settings = [\n        \t[\n                'order' => 1,\n                'name' => 'Start Date',\n                'group' => 'general',\n                'value' => '',\n                'type' => 'date',\n                'description' => 'The date your VA started',\n            ],\n            \n            // A lot more entries\n            \n        ];\n        \n        $this->addData('settings', $settings);\n    }\n    \n    // Not showning the down()\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"templating",children:"Templating"}),"\n",(0,t.jsxs)(n.p,{children:["Templates are placed in ",(0,t.jsx)(n.code,{children:"modules/{ModuleName}/Resources/views"}),". If someone wants to modify the views, it's recommended that they either run ",(0,t.jsx)(n.code,{children:"php artisan vendor:publish"})," or they copy the templates into the ",(0,t.jsx)(n.code,{children:"resources/views/module/$moduleName"})," folder (look at the ",(0,t.jsx)(n.code,{children:"$viewPath"})," value in the ",(0,t.jsx)(n.code,{children:"registerViews()"})," method in the ",(0,t.jsx)(n.code,{children:"$MODULE/Providers/$ModuleServiceProvider.php"})," file for the exact path if you're unsure)."]}),"\n",(0,t.jsxs)(n.p,{children:["!!!! Read more about ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/5.5/blade",children:"Laravel Blade Templating"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"event-listeners",children:"Event Listeners"}),"\n",(0,t.jsxs)(n.p,{children:["Available events from the main app are listed in the ",(0,t.jsx)(n.a,{href:"/nabeelio/phpvms/tree/master/app/Events",children:"app/Events"})," directory. Subscribing to events follows the ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/5.5/events#event-subscribers",children:"Laravel Events"})," format. Create the event listener in your ",(0,t.jsx)(n.code,{children:"$MODULE\\Listeners"})," folder (e.g, ",(0,t.jsx)(n.code,{children:"PirepAcceptedListener"}),"), and then register it in your ",(0,t.jsx)(n.code,{children:"$MODULE\\Providers\\EventServiceProvider"})," folder, in the ",(0,t.jsx)(n.code,{children:"$listen"})," section, like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"protected $listen = [\n    'App\\Events\\PirepAccepted' => [\n        'Modules\\Sample\\Listeners\\PirepAcceptedListener',\n    ],\n];\n"})}),"\n",(0,t.jsx)(n.p,{children:"To see the data passed, just look in the Event class."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"design-patterns-and-suggestions",children:"Design Patterns and Suggestions"}),"\n",(0,t.jsx)(n.h2,{id:"service-layer",children:"Service Layer"}),"\n",(0,t.jsxs)(n.p,{children:["When multiple models/repositories/steps are involved in a task, they should be written as a ",(0,t.jsx)(n.code,{children:"Service"})," class. For example, when filing a PIREP,  there are changes made to the ",(0,t.jsx)(n.code,{children:"PIREP"})," model, but also to the ",(0,t.jsx)(n.code,{children:"User"})," model, one or more events are dispatched, etc. Instead of putting all of this logic into a Controller or directly into a Model, a Service class should be defined, which ties all these steps together. This helps with testing and debugging, and portability. In the PIREP example, it can be filed through a web interface, or a RESTful interface. A Service class allows for both of these to use the same logic without reusing code."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"repositories",children:"Repositories"}),"\n",(0,t.jsxs)(n.p,{children:["While you can use and import models directly, it's recommended to use the repositories, in the ",(0,t.jsx)(n.a,{href:"/nabeelio/phpvms/tree/master/app/Repositories",children:"app/Repositories"})," are listed ",(0,t.jsx)(n.a,{href:"https://github.com/andersao/l5-repository#prettusrepositorycontractsrepositoryinterface",children:"here"}),". Repositories give the added benefits of automatically caching and flushing the cache when data is added/updated."]}),"\n",(0,t.jsxs)(n.p,{children:["The recommended method is to use ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/5.5/container#automatic-injection",children:"Automatic Injection"}),", which would involve adding a constructor to your Listener, as such:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"namespace Modules\\Sample\\Listeners;\n\nuse App\\Events\\PirepAccepted;\nuse App\\Repositories\\PirepRepository;\n\nclass PirepAcceptedListener {\n\n    private $pirepRepo;\n\n    // You can pass as many Repositories in as your wish. \n    // See the app\\Controllers for more examples\n    public function __construct(PirepRepository $pirepRepo) {\n        $this->pirepRepo = $pirepRepo;\n    }\n\n    public function handle(PirepAccepted $pirep) {\n        Log::info('Received PIREP', [$pirep]);\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The methods in the repositories largely mirror the Model methods, but can automatically handle searches, etc. The docs for the repositories ",(0,t.jsx)(n.a,{href:"https://github.com/andersao/l5-repository#prettusrepositorycontractsrepositoryinterface",children:"are available here"}),". You can read more about the repository pattern ",(0,t.jsx)(n.a,{href:"https://bosnadev.com/2015/03/07/using-repository-pattern-in-laravel-5/?utm_source=prettus-l5-repository&utm_medium=readme&utm_campaign=prettus-l5-repository",children:"here"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);