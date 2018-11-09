// GLOBAL DATA
// Set a Default Todolist
var defaultTodolist = new Todolist("Things to do");
var allTodolists = [];
var currentList = defaultTodolist;
// Todolist object structure
function Todolist(listName) {
    this.listName = listName;
    this.todos = [];
    this.todosDone = [];
    this.icon = "";         // Leave empty, without string ?
}
// Icons object structure
function IconSolid(iconName) {
    this.name = iconName;
    this.imgClass = "fas fa-" + iconName;
}
function IconBrand(iconName) {
    this.name = iconName;
    this.imgClass = "fab fa-" + iconName;
}
{ // ALL ICONS SOLID 
var allIconsSolid = ["ad","address-book","address-card","adjust","air-freshener","align-center","align-justify","align-left","align-right","allergies","ambulance","american-sign-language-interpreting","anchor","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","angry","ankh","apple-alt","archive","archway","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows-alt","arrows-alt-h","arrows-alt-v","assistive-listening-systems","asterisk","at","atlas","atom","audio-description","award","backspace","backward","balance-scale","ban","band-aid","barcode","bars","baseball-ball","basketball-ball","bath","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","beer","bell","bell-slash","bezier-curve","bible","bicycle","binoculars","birthday-cake","blender","blind","bold","bolt","bomb","bone","bong","book","book-open","book-reader","bookmark","bowling-ball","box","box-open","boxes","braille","brain","briefcase","briefcase-medical","broadcast-tower","broom","brush","bug","building","bullhorn","bullseye","burn","bus","bus-alt","business-time","calculator","calendar","calendar-alt","calendar-check","calendar-minus","calendar-plus","calendar-times","camera","camera-retro","cannabis","capsules","car","car-alt","car-battery","car-crash","car-side","caret-down","caret-left","caret-right","caret-square-down","caret-square-left","caret-square-right","caret-square-up","caret-up","cart-arrow-down","cart-plus","certificate","chalkboard","chalkboard-teacher","charging-station","chart-area","chart-bar","chart-line","chart-pie","check","check-circle","check-double","check-square","chess","chess-bishop","chess-board","chess-king","chess-knight","chess-pawn","chess-queen","chess-rook","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","child","church","circle","circle-notch","city","clipboard","clipboard-check","clipboard-list","clock","clone","closed-captioning","cloud","cloud-download-alt","cloud-upload-alt","cocktail","code","code-branch","coffee","cog","cogs","coins","columns","comment","comment-alt","comment-dollar","comment-dots","comment-slash","comments","comments-dollar","compact-disc","compass","compress","concierge-bell","cookie","cookie-bite","copy","copyright","couch","credit-card","crop","crop-alt","cross","crosshairs","crow","crown","cube","cubes","cut","database","deaf","desktop","dharmachakra","diagnoses","dice","dice-five","dice-four","dice-one","dice-six","dice-three","dice-two","digital-tachograph","directions","divide","dizzy","dna","dollar-sign","dolly","dolly-flatbed","donate","door-closed","door-open","dot-circle","dove","download","drafting-compass","draw-polygon","drum","drum-steelpan","dumbbell","edit","eject","ellipsis-h","ellipsis-v","envelope","envelope-open","envelope-open-text","envelope-square","equals","eraser","euro-sign","exchange-alt","exclamation","exclamation-circle","exclamation-triangle","expand","expand-arrows-alt","external-link-alt","external-link-square-alt","eye","eye-dropper","eye-slash","fast-backward","fast-forward","fax","feather","feather-alt","female","fighter-jet","file","file-alt","file-archive","file-audio","file-code","file-contract","file-download","file-excel","file-export","file-image","file-import","file-invoice","file-invoice-dollar","file-medical","file-medical-alt","file-pdf","file-powerpoint","file-prescription","file-signature","file-upload","file-video","file-word","fill","fill-drip","film","filter","fingerprint","fire","fire-extinguisher","first-aid","fish","flag","flag-checkered","flask","flushed","folder","folder-minus","folder-open","folder-plus","font","font-awesome-logo-full","football-ball","forward","frog","frown","frown-open","funnel-dollar","futbol","gamepad","gas-pump","gavel","gem","genderless","gift","glass-martini","glass-martini-alt","glasses","globe","globe-africa","globe-americas","globe-asia","golf-ball","gopuram","graduation-cap","greater-than","greater-than-equal","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","grip-horizontal","grip-vertical","h-square","hamsa","hand-holding","hand-holding-heart","hand-holding-usd","hand-lizard","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","hands","hands-helping","handshake","hashtag","haykal","hdd","heading","headphones","headphones-alt","headset","heart","heartbeat","helicopter","highlighter","history","hockey-puck","home","hospital","hospital-alt","hospital-symbol","hot-tub","hotel","hourglass","hourglass-end","hourglass-half","hourglass-start","i-cursor","id-badge","id-card","id-card-alt","image","images","inbox","indent","industry","infinity","info","info-circle","italic","jedi","joint","journal-whills","kaaba","key","keyboard","khanda","kiss","kiss-beam","kiss-wink-heart","kiwi-bird","landmark","language","laptop","laptop-code","laugh","laugh-beam","laugh-squint","laugh-wink","layer-group","leaf","lemon","less-than","less-than-equal","level-down-alt","level-up-alt","life-ring","lightbulb","link","lira-sign","list","list-alt","list-ol","list-ul","location-arrow","lock","lock-open","long-arrow-alt-down","long-arrow-alt-left","long-arrow-alt-right","long-arrow-alt-up","low-vision","luggage-cart","magic","magnet","mail-bulk","male","map","map-marked","map-marked-alt","map-marker","map-marker-alt","map-pin","map-signs","marker","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","medal","medkit","meh","meh-blank","meh-rolling-eyes","memory","menorah","mercury","microchip","microphone","microphone-alt","microphone-alt-slash","microphone-slash","microscope","minus","minus-circle","minus-square","mobile","mobile-alt","money-bill","money-bill-alt","money-bill-wave","money-bill-wave-alt","money-check","money-check-alt","monument","moon","mortar-pestle","mosque","motorcycle","mouse-pointer","music","neuter","newspaper","not-equal","notes-medical","object-group","object-ungroup","oil-can","om","outdent","paint-brush","paint-roller","palette","pallet","paper-plane","paperclip","parachute-box","paragraph","parking","passport","pastafarianism","paste","pause","pause-circle","paw","peace","pen","pen-alt","pen-fancy","pen-nib","pen-square","pencil-alt","pencil-ruler","people-carry","percent","percentage","phone","phone-slash","phone-square","phone-volume","piggy-bank","pills","place-of-worship","plane","plane-arrival","plane-departure","play","play-circle","plug","plus","plus-circle","plus-square","podcast","poll","poll-h","poo","poop","portrait","pound-sign","power-off","pray","praying-hands","prescription","prescription-bottle","prescription-bottle-alt","print","procedures","project-diagram","puzzle-piece","qrcode","question","question-circle","quidditch","quote-left","quote-right","quran","random","receipt","recycle","redo","redo-alt","registered","reply","reply-all","retweet","ribbon","road","robot","rocket","route","rss","rss-square","ruble-sign","ruler","ruler-combined","ruler-horizontal","ruler-vertical","rupee-sign","sad-cry","sad-tear","save","school","screwdriver","search","search-dollar","search-location","search-minus","search-plus","seedling","server","shapes","share","share-alt","share-alt-square","share-square","shekel-sign","shield-alt","ship","shipping-fast","shoe-prints","shopping-bag","shopping-basket","shopping-cart","shower","shuttle-van","sign","sign-in-alt","sign-language","sign-out-alt","signal","signature","sitemap","skull","sliders-h","smile","smile-beam","smile-wink","smoking","smoking-ban","snowflake","socks","solar-panel","sort","sort-alpha-down","sort-alpha-up","sort-amount-down","sort-amount-up","sort-down","sort-numeric-down","sort-numeric-up","sort-up","spa","space-shuttle","spinner","splotch","spray-can","square","square-full","square-root-alt","stamp","star","star-and-crescent","star-half","star-half-alt","star-of-david","star-of-life","step-backward","step-forward","stethoscope","sticky-note","stop","stop-circle","stopwatch","store","store-alt","stream","street-view","strikethrough","stroopwafel","subscript","subway","suitcase","suitcase-rolling","sun","superscript","surprise","swatchbook","swimmer","swimming-pool","synagogue","sync","sync-alt","syringe","table","table-tennis","tablet","tablet-alt","tablets","tachometer-alt","tag","tags","tape","tasks","taxi","teeth","teeth-open","terminal","text-height","text-width","th","th-large","th-list","theater-masks","thermometer","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","thumbs-down","thumbs-up","thumbtack","ticket-alt","times","times-circle","tint","tint-slash","tired","toggle-off","toggle-on","toolbox","tooth","torah","torii-gate","trademark","traffic-light","train","transgender","transgender-alt","trash","trash-alt","tree","trophy","truck","truck-loading","truck-monster","truck-moving","truck-pickup","tshirt","tty","tv","umbrella","umbrella-beach","underline","undo","undo-alt","universal-access","university","unlink","unlock","unlock-alt","upload","user","user-alt","user-alt-slash","user-astronaut","user-check","user-circle","user-clock","user-cog","user-edit","user-friends","user-graduate","user-lock","user-md","user-minus","user-ninja","user-plus","user-secret","user-shield","user-slash","user-tag","user-tie","user-times","users","users-cog","utensil-spoon","utensils","vector-square","venus","venus-double","venus-mars","vial","vials","video","video-slash","vihara","volleyball-ball","volume-down","volume-off","volume-up","walking","wallet","warehouse","weight","weight-hanging","wheelchair","wifi","window-close","window-maximize","window-minimize","window-restore","wine-glass","wine-glass-alt","won-sign","wrench","x-ray","yen-sign","yin-yang"];
}
{ // All ICONS BRAND 
var allIconsBrand = ["500px","accessible-icon","accusoft","adn","adversal","affiliatetheme","algolia","alipay","amazon","amazon-pay","amilia","android","angellist","angrycreative","angular","app-store","app-store-ios","apper","apple","apple-pay","asymmetrik","audible","autoprefixer","avianex","aviato","aws","bandcamp","behance","behance-square","bimobject","bitbucket","bitcoin","bity","black-tie","blackberry","blogger","blogger-b","bluetooth","bluetooth-b","btc","buromobelexperte","buysellads","cc-amazon-pay","cc-amex","cc-apple-pay","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","centercode","chrome","cloudscale","cloudsmith","cloudversify","codepen","codiepie","connectdevelop","contao","cpanel","creative-commons","creative-commons-by","creative-commons-nc","creative-commons-nc-eu","creative-commons-nc-jp","creative-commons-nd","creative-commons-pd","creative-commons-pd-alt","creative-commons-remix","creative-commons-sa","creative-commons-sampling","creative-commons-sampling-plus","creative-commons-share","css3","css3-alt","cuttlefish","d-and-d","dashcube","delicious","deploydog","deskpro","deviantart","digg","digital-ocean","discord","discourse","dochub","docker","draft2digital","dribbble","dribbble-square","dropbox","drupal","dyalog","earlybirds","ebay","edge","elementor","ello","ember","empire","envira","erlang","ethereum","etsy","expeditedssl","facebook","facebook-f","facebook-messenger","facebook-square","firefox","first-order","first-order-alt","firstdraft","flickr","flipboard","fly","font-awesome","font-awesome-alt","font-awesome-flag","fonticons","fonticons-fi","fort-awesome","fort-awesome-alt","forumbee","foursquare","free-code-camp","freebsd","fulcrum","galactic-republic","galactic-senate","get-pocket","gg","gg-circle","git","git-square","github","github-alt","github-square","gitkraken","gitlab","gitter","glide","glide-g","gofore","goodreads","goodreads-g","google","google-drive","google-play","google-plus","google-plus-g","google-plus-square","google-wallet","gratipay","grav","gripfire","grunt","gulp","hacker-news","hacker-news-square","hackerrank","hips","hire-a-helper","hooli","hornbill","hotjar","houzz","html5","hubspot","imdb","instagram","internet-explorer","ioxhost","itunes","itunes-note","java","jedi-order","jenkins","joget","joomla","js","js-square","jsfiddle","kaggle","keybase","keycdn","kickstarter","kickstarter-k","korvue","laravel","lastfm","lastfm-square","leanpub","less","line","linkedin","linkedin-in","linode","linux","lyft","magento","mailchimp","mandalorian","markdown","mastodon","maxcdn","medapps","medium","medium-m","medrt","meetup","megaport","microsoft","mix","mixcloud","mizuni","modx","monero","napster","neos","nimblr","nintendo-switch","node","node-js","npm","ns8","nutritionix","odnoklassniki","odnoklassniki-square","old-republic","opencart","openid","opera","optin-monster","osi","page4","pagelines","palfed","patreon","paypal","periscope","phabricator","phoenix-framework","phoenix-squadron","php","pied-piper","pied-piper-alt","pied-piper-hat","pied-piper-pp","pinterest","pinterest-p","pinterest-square","playstation","product-hunt","pushed","python","qq","quinscape","quora","r-project","ravelry","react","readme","rebel","red-river","reddit","reddit-alien","reddit-square","rendact","renren","replyd","researchgate","resolving","rev","rocketchat","rockrms","safari","sass","schlix","scribd","searchengin","sellcast","sellsy","servicestack","shirtsinbulk","shopware","simplybuilt","sistrix","sith","skyatlas","skype","slack","slack-hash","slideshare","snapchat","snapchat-ghost","snapchat-square","soundcloud","speakap","spotify","squarespace","stack-exchange","stack-overflow","staylinked","steam","steam-square","steam-symbol","sticker-mule","strava","stripe","stripe-s","studiovinari","stumbleupon","stumbleupon-circle","superpowers","supple","teamspeak","telegram","telegram-plane","tencent-weibo","the-red-yeti","themeco","themeisle","trade-federation","trello","tripadvisor","tumblr","tumblr-square","twitch","twitter","twitter-square","typo3","uber","uikit","uniregistry","untappd","usb","ussunnah","vaadin","viacoin","viadeo","viadeo-square","viber","vimeo","vimeo-square","vimeo-v","vine","vk","vnv","vuejs","weebly","weibo","weixin","whatsapp","whatsapp-square","whmcs","wikipedia-w","windows","wix","wolf-pack-battalion","wordpress","wordpress-simple","wpbeginner","wpexplorer","wpforms","xbox","xing","xing-square","y-combinator","yahoo","yandex","yandex-international","yelp","yoast","youtube","youtube-square","zhihu"];
}
// All icons objects array
var allIcons = [];
// Push solid icons in allIcons array
for (i = 0; i < allIconsSolid.length; i++) {
    allIcons.push(new IconSolid(allIconsSolid[i]));
}
// Push brand icons in allIcons array
for (i = 0; i < allIconsBrand.length; i++) {
    allIcons.push(new IconBrand(allIconsBrand[i]));
}
// Run core features functions
listActions();
todoActions();

// *** Actions for TodoLists *** //
function listActions() {
    // Add todolist of defaultTodolist on load
    addList(defaultTodolist, "far fa-bookmark");
    // Set default todolist data
    $(".todolist-name").val(currentList.listName);
    defaultTodolist.todos.unshift("Do groceries");
    defaultTodolist.todos.unshift("Sign up for a gym membership");
    defaultTodolist.todos.unshift("Call Aunt Lisa");
    var addClicked = false; // Add button external checker
    // When AddBtn is clicked add a new todolist 
    $(".todolistsAdd-container i").on("click", function() {
        if (addClicked === false) { 
            var isSaved = false;
            addClicked = true;
            insertDialog();
            $("#dialog-name").focus()
            iconSearch(64);
            // Display usert text input in header
            $("#dialog-name").on("keyup", function() {
                var inputValue = $(this).val();
                $(".dialog-header h3").text(inputValue);
                if (inputValue === "") {
                    $(".dialog-header h3").text("Create a new list");
                }
            });
            displayIconSelected();
            // Saves data & Removes on pressing enter
            $(window).on("keyup", function (e) {
                if (e.which === 13 && isSaved !== true) {
                    $("#dialog-save").click();
                } else if (e.which === 27) {
                    $("#dialog-cancel").click();
                }
            });
            // Saves data & Removes Dialog on clicking save btn
            $("#dialog-save").on("click", function() {
                var iconIsSelected = $(".dialog-header").children().hasClass("icon-selected");
                if (($("#dialog-name").val() !== "" && iconIsSelected === true) === true) {
                    isSaved = true;
                    removeDialog(500);
                    newList();
                    $(".todo").remove();
                    removeDoneTitle();
                    $(".todolist-name").val(currentList.listName);
                    addClicked = false;
                } else {
                    if (iconIsSelected === false && $("#dialog-name").val() !== "") {
                        $(".input-alert").remove();
                        $("#allIconsDialog").focus()
                        if ($(".dialog-icons").children().hasClass("input-alert") !== true) {
                            // $(".dialog-icons").append("<p class='input-alert alert-2'>required field <span>*</span></p>");
                            // $(".alert-2").insertBefore(".iconsWrapper");
                            $(".allIcons-header").fadeOut(250).fadeIn(250).fadeOut(250).fadeIn(250);
                        }
                    } else if ($("#dialog-name").val() === "" && iconIsSelected === true) {
                        $(".input-alert").remove();
                        $("#dialog-name").focus();
                        if ($(".dialog-main").children().hasClass("input-alert") !== true) {
                            $(".dialog-main").prepend("<p class='input-alert'>required field <span>*</span></p>");
                        }
                    } else {
                        if ($(".dialog-main").children().hasClass("input-alert") !== true) {
                            $(".dialog-main").prepend("<p class='input-alert'>required field <span>*</span></p>");
                        }
                        if ($(".dialog-icons").children().hasClass("input-alert") !== true) {
                            // $(".dialog-icons").append("<p class='input-alert alert-2'>required field <span>*</span></p>");
                            // $(".alert-2").insertBefore(".iconsWrapper");
                        }
                    }
                }
            });
            // Removes dialog on click cancel button
            $("#dialog-cancel").on("click", function() {
                removeDialog(500);
                addClicked = false;
            })
            // Prepend dialog & animate
            function insertDialog() {
                $(".main-container").prepend(
                    "<div class='dialog-container'>" +
                        "<div class='dialog'>" +
                            "<div class='dialog-header'>" +
                                "<h3>Create a new list</h3>" +
                                "</div>" +
                                "<div class='dialog-main'>" +
                                    "<input id='dialog-name' type='text' maxlength='30' placeholder='Name of the list'></input>" +
                                        "<div class='dialog-icons'>" +
                                            "<p class='allIcons-header'>Choose an icon</p>" +
                                            "<div class='iconsWrapper'>" +
                                                "<i class='fas fa-search'></i>" +
                                                "<input id='allIconsDialog' type='text' class='icons-search' placeholder='Enter a keyword'>" +
                                            "</div>" +
                                            "<ul class='icons-grid'></ul>" +
                                            "<button class='icons-loadBtn'>Load more icons</button>" +
                                        "</div>" +
                                "</div>" +
                                "<button id='dialog-cancel'>Cancel</button>" +
                                "<button id='dialog-save'>Save</button>" +
                            "</div>" +
                        "</div>"
                );
                $(".dialog-container").hide().fadeIn(500);
                $(".dialog").hide().slideDown(500);
            }
            function newList() {
                var selectedName = $(".dialog-main input").val();
                var selectedIcon = $(".icon-selected i").attr("class");
                addList(new Todolist(selectedName), selectedIcon);
            }
        }//END IF STATE
    });
    //Toggle todolist possible actions on clicking settings btn
    $(".todolist-settings").on("click", function() {
        $(".todolist-settings-content").toggleClass("hide");
    });
    // Open Icons Choosing Dialog 
    $(".todolist-change-icon").on("click", function() {
        var isSaved = false;
        insertDialog();
        displayIconSelected();
        // Saves data & Removes on pressing enter
        $(window).on("keyup", function (e) {
            if (e.which === 13 && isSaved !== true) {
               $("#dialog-save").click();
            } else if (e.which === 27) {
               $("#dialog-cancel").click();
            }
        });
        // Removes dialog on click cancel button
        $("#dialog-cancel").on("click", function() {
            removeDialog(500);
        })
        $("#dialog-save").on("click", function() {
            var iconIsSelected = $(".dialog-header").children().hasClass("icon-selected");
            if (iconIsSelected === true) {
                isSaved = true;
                $(".todolist-icon").children().remove();
                $(".todolist.current i").remove();
                currentList.icon = $(".icon-selected").children().attr("class");
                $(".todolist-icon").prepend("<i class='" + currentList.icon + "'></i>");
                $(".todolist.current").prepend("<i class='" + currentList.icon + "'></i>");
                removeDialog(500);
            }
        });
        iconSearch(128);
        function insertDialog() {
            $(".main-container").prepend(
                "<div class='dialog-container'>" +
                    "<div class='dialog'>" +
                        "<div class='dialog-header'>" +
                            "<div class='icon-selected'>" + 
                                "<i class='" + currentList.icon + "'></i>" +
                            "</div>" +
                            "<h3>" + currentList.listName + "</h3>" +
                        "</div>" +
                        "<div class='dialog-icons'>" +
                            "<label for='allIconsDialog'>Choose an icon</label><br>" +
                            "<input id='allIconsDialog' type='text' class='icons-search' placeholder='Enter a keyword'>" +
                            "<ul class='icons-grid'></ul>" +
                            "<button class='icons-loadBtn'>Load more icons</button>" +
                        "</div>" +
                        "<button id='dialog-cancel'>Cancel</button>" +
                        "<button id='dialog-save'>Save</button>" +
                    "</div>" +
                "</div>"
            );
            $(".dialog-container").hide().fadeIn(500);
            $(".dialog").hide().slideDown(500);
        }
    });
    //Hide dropdown list settings content when user click outside of it
    $(window).click(function(e) {
        if (!e.target.matches(".todolist-settings")) {
            $(".todolist-settings-content").addClass("hide");
        }
    });
    $(".todolists").on("click", ".todolist", function() {
        if (!$(this).hasClass("current")) {
            switchList(this);
        }
    });
    // Rename a list
    renameList();
    deleteList();
}

function displayIconSelected() {
    // Display icon clicked on in header
    $(".icons-grid").on("click", ".icon-awesome", function() {
        var iconHtml = $(this).html();
        if ($(".dialog-header").children().hasClass("icon-selected") !== true) {
            $(".dialog-header").prepend("<div class='icon-selected'>" + iconHtml + "</div>");
        } else if ($(".icon-selected").html() === iconHtml) {
            // Does nothing  
        } else {
            $(".icon-selected").remove();
            $(".dialog-header").prepend("<div class='icon-selected'>" + iconHtml + "</div>");
        }
    });
}
// Icon search feature 
function iconSearch(maxIcons) {
    var maxIconsLoad = maxIcons;
    // Add the first 32 icons to dom
    for (i = 0; i < maxIconsLoad; i++) {
        appendIcons();
    }
    // Load more icons
    $(".icons-loadBtn").on("click", function() {
        if ($(".icons-search").val() === "") {
            // Get current length of icons on display
            var iconsLength = $(".icons-grid .icon-awesome").length;
            for (i = iconsLength + 1; i < (iconsLength + maxIconsLoad) + 1; i++) {
                appendIcons();
            }
        }      
    });
    // Icons Search Logic
    $(".icons-search").on("keyup", function() {
        var value = $(this).val();
        var exp = new RegExp(value);
        // RESET:
        $(".icon-awesome").each(function() {
            // Remove icons each time a key is pressed
            $(this).remove();
        });
        if (value !== "") {
            for (i = 0; i < allIcons.length; i++) {
                var matchArr = exp.test(allIcons[i].name);
                if (matchArr === true) {
                    appendIcons();
                }
            }
        } else {
            // When no search : only loads the set max amount on load
            for (i = 0; i < maxIconsLoad; i++) {
                appendIcons();
            }
        }
    });
    // Insert icons in DOM Dialog
    function appendIcons() {
        $(".icons-grid").append(
            "<li class='icon-awesome'>" +
            "<i class='" +
            allIcons[i].imgClass + "'></i>" +
            "</li>");
    }
}
// Delete Dom elements & animate    
function removeDialog(val) {
    $(".dialog").slideUp(val, function() {
        $(this).remove();
    });
    $(".dialog-container").fadeOut(val, function() {
        $(this).remove();
    });              
}
function switchList(sel) {
    $(".todolist").each(function(){
        if ($(this).hasClass("current")) {
            $(this).removeClass("current");
        }
    });
    // Set selected list to current list
    currentList = allTodolists[$(sel).index()];
    $(sel).addClass("current");
    $(".todolist-name").val(currentList.listName);
    $(".todolist-icon").children().remove();
    $(".todolist-icon").prepend("<i class='" + currentList.icon + "'></i>");
    // Remove all todos
    $(".todo").remove();
    // Add selected list todos
    addTodo(currentList);
    addTodoDone(currentList);
    // Put Done todos title in place
    $("h3").prependTo($(".todos-done"));
    removeDoneTitle();
    hoverTodo();
}
function addList(obj, icon) {
    // Store new todolist object in todolists array
    allTodolists.push(obj);
    // Added todolist is now the current todolist to be displayed
    currentList = obj;
    obj.icon = icon;
    $(".todolist").each(function(){
        if ($(this).hasClass("current")) {
            $(this).removeClass("current");
        }
    });
    // Add todolist Dom elements at the end of the todolists div
    $(".todolists").append(
        "<div class='todolist current'>" +
        "<i class='" + obj.icon + "'></i>" +
        "<p>" + obj.listName + "</p>" +
        "</div>");
    $(".todolist-icon").children().remove();
    $(".todolist-icon").prepend("<i class='" + obj.icon + "'></i>");
}
function deleteList() {
    $(".todolist-delete").on("click", function() {
        var isDeleted = false;
        // Insert Dialog
        $(".main-container").prepend(
            "<div class='dialog-container'>" +
                "<div class='dialog'>" +
                    "<div class='dialog-header'>" +
                        "<h3>Are you sure you wanna delete this list ?</h3>" +
                    "</div>" +
                    "<div class='dialog-main'>" +
                        "<button id='cancelBtn'>Cancel</button>" +
                        "<button id='deleteListBtn'>Yes</button>" +
                    "</div>" +
                "</div>" +
            "</div>"
        );
        // Dialog opening anim 
        $(".dialog-container").hide().fadeIn(500);
        $(".dialog").hide().slideDown(500);
        $("#deleteListBtn").on("click", function() {
            isDeleted = true;
            var nextIndex = allTodolists.indexOf(currentList) - 1;
            $(".dialog-container").remove();
            $(".todolist")[allTodolists.indexOf(currentList)].remove();
            allTodolists.splice(allTodolists.indexOf(currentList), 1);
            if (allTodolists.length !== 0) {
                if (nextIndex === -1) {
                    currentList = allTodolists[0];
                    switchList($(".todolist")[0]);
                } else {
                    currentList = allTodolists[nextIndex];
                    switchList($(".todolist")[nextIndex]);
                }
            } else {
                // Add an empty list
                currentList = new Todolist("Todolist");
                $(".todo").remove();
                // Add todolist of defaultTodolist on load
                addList(currentList, "far fa-bookmark");
                // Set default todolist data
                $(".todolist-name").val(currentList.listName);
                removeDoneTitle();
            }
        });
        $(window).on("keyup", function (e) {
            // Triggers delete on pressing Enter
            if (e.which === 13 && isDeleted !== true) {
                $("#deleteListBtn").click();
            }
            // Triggers cancel on presing Escape
            else if (e.which === 27) {
                $("#cancelBtn").click();
            }
        });
        $("#cancelBtn").on("click", function() {
            // Dialog closing
            removeDialog(500);
        });
    });
}
function renameList() {
    // Enable todolist input and focus on it
    $(".todolist-rename").on("click", function() {
        $(".todolist-name").removeAttr("disabled");
        $(".todolist-name").focus();
    });
    // Pressing enter saves renamed totolist by disabling input area
    $(".todolist-name").on("keypress", function(e) {
        // Press enter to disable input
        if (e.which === 13) {
            // Prevent input text from submitting form
            e.preventDefault();
            addValueOf(this);
        }
    });
    // Disable input and saves data when text unfocused
    $(".todolist-name").focusout(function() {
        addValueOf(this);
    });
    function addValueOf(sel) {
        currentList.listName = $(sel).val();
        $(".current p").text($(sel).val());
        $(sel).attr("disabled", "disabled");
    }
}

// *** Actions for Todos *** //
function todoActions() {
    // Add Default todos on start
    addTodo(defaultTodolist);
    //Get user todo input and store it in todos array
    $(".todos-input").on("keypress", function(e) {
        if (e.which === 13) {
            //Prevent input text from submitting form
            e.preventDefault();
            //Store todo and creates DOM element if not empty
            while ($(this).val() !== "") {
                currentList.todos.unshift($(this).val());
                prependTodo($(this).val(), "todo");
                $(this).val("");
            } 
            hoverTodo();
        }
    });
    hoverTodo();
    sortTodo()
    doneTodo();
    renameTodo();
    removeTodo();
} 

function hoverTodo() {
    $(".todo-edit").hide();
    $(".todo-delete").hide();
    $(".todos-todo, .todos-done").children(".todo").hover(
        function() {
            $(this).children(".todo-edit").show();
            $(this).children(".todo-delete").show();
        }, function() {
            $(this).children(".todo-edit").hide();
            $(this).children(".todo-delete").hide();
        }
    );
}

function sortTodo() {
    $(".todos-todo")
    .sortable({
        items: ".todo",
        // Keep the mouse vertically in the middle of the todo div 
        cursor: "grabbing",
        cursorAt: {
            top: $(".todo").height() / 2
        },
        revert: false,
        // Delete grabbed item data at index in array
        start: function(event, ui) {
            currentList.todos.splice($(ui.item).index(), 1);
            console.log(currentList.todos);
            // Saves & unfocus any open input when dragging
            $("input").trigger("blur");
        },
        // On Stopping sorting, put data after the previous item's index in array
        stop: function(event, ui) {
            var previousItem = $(ui.item).prev();
            var itemTxt = $(ui.item).text();
            currentList.todos.splice($(previousItem).index() + 1, 0, itemTxt);
            console.log(currentList.todos);
        }
    });
}
function addTodo(obj) {
    for (i = obj.todos.length - 1; i >= 0; i--) {
        prependTodo(obj.todos[i], "todo");
        console.log(obj.todos[i]);
    }
}
function addTodoDone(obj) {
    for (i = obj.todosDone.length - 1; i >= 0; i--) {
        prependTodo(obj.todosDone[i], "done");
        // Add style properties & check boxes
        $(".todos-done .todo-text").addClass("done");
        $(".todos-done input[type=checkbox]").prop("checked", true);
        console.log(obj.todosDone[i]);
    }
}
// Pattern upon inserting todo in DOM
function prependTodo(val, state) {
    $(".todos-" + state).prepend(
        "<div class='todo'><input type='checkbox'>" +
        "<label>" + val + "</label>" + 
        "<button class='todo-edit'><i class='fas fa-edit'></i>" + 
        "<button class='todo-delete'><i class='fas fa-trash-alt'></i></div>");
    $(".todos-container label").addClass("todo-text");
    // $(".fa-edit").addClass("todo-edit");
    // $(".fa-trash-alt").addClass("todo-delete");
}
function renameTodo() {
    var inputHtml = "<input type='text' class='todo-text'>";
    //Change DOM elem to input tag on clicking edit btn
    $(".todos-container").on("click", ".todo-edit", function() {
        var todoTxt = $(this).siblings(".todo-text");
        var txt = todoTxt.text();
        console.log($(todoTxt).prop("tagName"));
        // Check if it's already a done todo
            if (todoTxt.hasClass("done")) {
                $(todoTxt).replaceWith(inputHtml);
                $("input.todo-text").addClass("done");
                // Remove the line through for visibilty upon renaming
                $("input.todo-text").css("text-decoration-line", "none");
            } else {
                $(todoTxt).replaceWith(inputHtml); // FIXME: Error code on a problem of node parent and blur.
            }
        $("input.todo-text").focus();
        // Transfer the txt value to the changed tag input
        $("input.todo-text").val(txt);
    });
    //Save data on input blur and switch back to a label tag
    $(".todos-container").on("blur", "input.todo-text", function() {
        if ($(this).val() !== "") {
            $(this).removeAttr("style");
            var todoIndex = $(this).parent().index();
            var todoDoneIndex = $(this).parent().index() - 1;
            if ($(this).hasClass("done")) {
                currentList.todosDone[todoDoneIndex] = $(this).val();
                $(this).replaceWith("<label class='todo-text done'>" + $(this).val() + "</label>");
                console.log(currentList.todosDone);
            } else {
                currentList.todos[todoIndex] = $(this).val();
                $(this).replaceWith("<label class='todo-text'>" + $(this).val() + "</label>");
                console.log(currentList.todos);
            }
        }
    });
    //Pressing enter saves todo and get back to a label tag by trigerring blur
    $(".todos-container").on("keypress", "input.todo-text", function(e) {
        if (e.which === 13) {
            e.preventDefault();
            if ($(this).val() !== "") {
                $(this).trigger("blur");
            }
        }
    });
}
function removeTodo() {
    $(".todos-container").on("click", ".todo-delete", function() {
        //Select and store the current todo 
        var todo = $(this).parent();
        //Remove the todo & its data
        if (todo.parent().hasClass("todos-done") === true) {
            var x = todo.index() - 1;
            currentList.todosDone.splice(x, 1);
            console.log(currentList.todos);
            console.log(currentList.todosDone);
        } else {
            currentList.todos.splice(todo.index(), 1);
            console.log(currentList.todos);
            console.log(currentList.todosDone);
        // }
        }
        $(todo).fadeOut(250, function() {
            $(this).remove();        
            removeDoneTitle();
        });
        console.log(currentList.todos);
    });
}
function doneTodo() {
    $(".todos-container").on("click", "input[type=checkbox]", function() {
        //Store todo text only
        var todoTxt = $(this).siblings(".todo-text");
        var lastTodo = $(".todos-todo").children().last();
        var todo = $(this).parent();
        if ($(this).prop("checked") !== false) {
            todo.hide().slideDown(500);
            // Delete data from todos array and store it in todosDone
            currentList.todosDone.unshift(todoTxt.text());
            currentList.todos.splice(todo.index(), 1);         
            console.log(currentList.todos);
            console.log(currentList.todosDone);   
            //Add a line through to the text of todo
            todoTxt.addClass("done");
            $("h3").removeClass("hide");
            $(this).parent().insertAfter($("h3"));
        } else {
            var titleIndex = 1;
            currentList.todos.push(todoTxt.text());
            currentList.todosDone.splice(todo.index() - titleIndex, 1);
            console.log(currentList.todos);
            console.log(currentList.todosDone);
            //Remove line through to the text of todo
            todoTxt.removeClass("done");
            if (lastTodo.length !== 0) {
                $(this).parent().insertAfter(lastTodo);
            } else {
                $(this).parent().appendTo($(".todos-todo"));
            }
            removeDoneTitle();
        }
    });
}
function removeDoneTitle() {
    if ($(".todos-done").find(".todo").length === 0) {
        $("h3").addClass("hide");
    } else {
        $("h3").removeClass("hide");
    }
}

$(".night-btn").on("click", function() {
    if ($(this).prop("checked") !== false) {
        $("body").addClass("night-mode");
        $(".todos-container, .input-container, header").css("background-color", "rgb(80, 80, 80)");
        $(".todolist-container, .todos-container").css("border-color", "rgb(120, 120, 120)");
        $("header").css("border-bottom", "1px solid rgb(80, 80, 80)");   
        $("header").css("box-shadow", "0px 1px 3px rgb(40, 40, 40)");
    } else {
        $("body").removeClass("night-mode");
        $(".todos-container, .input-container, header").css("background-color", "rgb(255, 255, 255)")
        $(".todolist-container, .todos-container").css("border-color", "rgb(200, 200, 200)");
        $("header").css("border-bottom", "1px solid rgb(255, 255, 255)");   
        $("header").css("box-shadow", "0px 1px 3px rgb(200, 200, 200)");
    }
});