/**
 * Uncomplicated categories
 * Front-end support javascript
 *   - dependencies: none
 *
 * (c) 2015 Lightenna Ltd
 */
(function () {
    // setup default options, overwritten if set in page
    var options = {
            mode: 'default',
            baseId: 'uncomplicated-categories-ul'
        },

    // tree of categories
        tree = {},

    // constants
        name_supercat = 'supercat',
        name_subcat = 'subcat',
        name_subcatdirect = 'subcatdirect',
        name_supercatpeer = 'supercatpeer',
        name_activecat = 'activecat',
        name_activecatpeer = 'activecatpeer',
        name_activeduplicat = 'activeduplicat',
        name_subduplicat = 'subduplicat',
        name_productskey = '/products/',
        name_collectionskey = '/collections/',

    // simple helper functions
        merge = function (s1, s2) {
            for (var key in s1) {
                if (s1.hasOwnProperty(key)) {
                    s2[key] = s1[key];
                }
            }
        },

        bind = function (target, eventName, functionDirect) {
            if (eventName == 'load') {
                if (document.readyState == 'complete') {
                    return functionDirect();
                }
            }
            // wrap functionDirect in current context
            var that = this;
            var fn = function () {
                // call wrapped function in current context, with all arguments (super-global)
                functionDirect.apply(that, arguments);
            }
            // attach listener depending on what's available
            if (target.addEventListener) {
                target.addEventListener(eventName, fn, false);
            }
            else if (target.attachEvent) {
                target.attachEvent('on' + eventName, fn);
            }
            else {
                window['on' + eventName] = fn;
            }
        },

    // raw javascript class functions, thanks to Jake Trent (http://jaketrent.com/post/addremove-classes-raw-javascript/)
        hasClass = function (el, className) {
            if (el.classList) {
                return el.classList.contains(className)
            }
            else {
                return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
            }
        },

        addClass = function (el, className) {
            if (el.classList) {
                el.classList.add(className)
            }
            else if (!hasClass(el, className)) {
                el.className += " " + className
            }
        },

        removeClass = function (el, className) {
            if (el.classList) {
                el.classList.remove(className)
            }
            else if (hasClass(el, className)) {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
                el.className = el.className.replace(reg, ' ')
            }
        },

        processed = function (key, value) {
            // ensure that we've got a processed array
            window.uncompt_cat.processed = window.uncompt_cat.processed || {};
            // if we're not setting a processed flag
            if (value == undefined) {
                // return true if we have stored an entry in the processed object
                return (window.uncompt_cat.processed[key] != undefined);
            } else {
                // set value
                window.uncompt_cat.processed[key] = value;
            }
            return true;
        },

    // tree and list functions
        flattenTree = function (branch) {
            var list = [];
            // we're only interested in flattening items that can be linked to
            if (branch.url !== undefined) {
                list = [{"title": branch.title, "url": branch.url, "pointer": branch}];
            }
            // recurse on subtree if we have one
            if (branch.links !== undefined) {
                for (var i = 0; i < branch.links.length; ++i) {
                    var sublist = flattenTree(branch.links[i]);
                    // merge the sublist into list nicely (list = list + sublist)
                    list.push.apply(list, sublist);
                }
            }
            return list;
        },

        doublyLinkTree = function (branch, parent) {
            if (parent !== undefined) {
                // store reference to parent
                branch.parent = parent;
            }
            // recurse on children if there are any
            if (branch.links !== undefined) {
                for (var i = 0; i < branch.links.length; ++i) {
                    doublyLinkTree(branch.links[i], branch);
                }
            }
        },

    // untested, unused
        hashList = function (list) {
            var hash = {};
            for (var i = 0; i < list.length; ++i) {
                var item = list[i];
                // create an array bucket for each URL
                if (hash[item.url] == undefined) {
                    hash[item.url] = [];
                }
                // add the subtree to that bucket
                hash[item.url][hash[item.url].length] = item.pointer;
            }
            return hash;
        },

        searchList = function (needle, list) {
            // simple linear search for now
            var matches = linearSearchList(needle, list);
            // if first pass yielded no exact matches, try partial URLs
            if (matches.length == 0) {
                // if we can split the URL into collections/<collection>/products/<product>
                var posprod, poscoll;
                if ((posprod = needle.indexOf(name_productskey)) != -1) {
                    if ((poscoll = needle.indexOf(name_collectionskey)) != -1) {
                        // pull a collection URL
                        needle = needle.substring(poscoll, posprod);
                        // re-search through the list for this new match
                        matches = linearSearchList(needle, list);
                    }
                }
            }
            return matches;
        },

        linearSearchList = function (needle, list) {
            var matches = [];
            for (var i = 0; i < list.length; ++i) {
                // test if there's an exact match between the page's URL and the category URL
                if (list[i].url == needle) {
                    // skip any entry that doesn't feature 'collections'
                    var poscoll;
                    if ((poscoll = needle.indexOf(name_collectionskey)) == -1) {
                        continue;
                    }
                    matches[matches.length] = list[i].pointer;
                }
            }
            return matches;
        },

        ascend = function (cat, func) {
            while ((cat.parent !== undefined) && (cat.parent != cat) && (cat.parent != tree)) {
                // call the ascending function on the current category
                // func.apply(this, cat);
                func(cat);
                // iterate up tree
                cat = cat.parent;
            }
        },

        getParents = function (cat) {
            var parents = [];
            // notice loop_cat is just a local variable passed to iterator function
            ascend(cat, function (loop_cat) {
                parents[parents.length] = loop_cat.parent;
            });
            return parents;
        },

        getCatId = function (cat) {
            // build id backwards (from active cat up the tree)
            var id = cat.peer_index;
            ascend(cat, function (loop_cat) {
                id = loop_cat.parent.peer_index + '-' + id;
                // debugging string
                if (false) {
                    id = loop_cat.parent.title + '(' + loop_cat.parent.peer_index + ')' + '-' + id;
                }
            });
            id = options.baseId + '-' + id;
            return id;
        },

        isDuplicate = function (branch, active_categories, sofar) {
            // sofar must be less than current branch number to avoid false-positives
            for (var i = 0; i <= sofar; ++i) {
                // if title and url match, it's a duplicate
                if ((branch.title == active_categories[i].title) && (branch.url == active_categories[i].url)) {
                    return true;
                }
            }
            return false;
        },

        processCategorySelect = function (element, active_categories) {
            // attach to the onchange event
            bind(element, 'change', function (e) {
                if (e.target != undefined) {
                    if ((e.target.value != undefined) && (e.target.value != "")) {
                        // get the selected url
                        var url = e.target.value;
                        // jump to that page
                        window.location = url;
                    }
                }
            });
            // don't try to pre-select if we've not got any active categories
            if ((active_categories == undefined) || (active_categories.length == 0)) {
                return;
            }
            // select the right item for the current page (
            for (var i = 0; i < element.options.length; i++) {
                // skip elements with no link target
                if ((element.options[i].value == undefined) || (element.options[i].value == "")) {
                    continue;
                }
                // console.log(element.options[i].text+" "+element.options[i].value);
                // find first matching category by URL
                if (element.options[i].value == active_categories[0].url) {
                    // tag this option as selected
                    element.selectedIndex = i;
                    break;
                }
            }
        },

        processCategoryList = function (element, active_categories) {
            var peer_branch;
            if (active_categories.length > 0) {
                // mark current selection(s)
                for (var i = 0; i < active_categories.length; ++i) {
                    var branch = active_categories[i];
                    // identify this branch as a duplicate if same as a previous active_category
                    var dub = isDuplicate(branch, active_categories, i - 1);
                    // find all parents but exclude top-level container
                    var parents = getParents(branch);
                    // tag parents (supercats)
                    for (var j = 0; j < parents.length; ++j) {
                        var parent_branch = parents[j];
                        addClass(document.getElementById(getCatId(parent_branch)), name_supercat);
                        if (j == 0) {
                            // for the direct parent branch, find active category peers (activecatpeer)
                            for (var m = 0; m < parent_branch.links.length; ++m) {
                                peer_branch = parent_branch.links[m];
                                if (peer_branch == branch) {
                                    // don't tag it because it's already tagged as activecat
                                } else {
                                    addClass(document.getElementById(getCatId(peer_branch)), name_activecatpeer);
                                }
                            }
                        }
                        // foreach parent, find all its peers
                        if (parent_branch.parent !== undefined) {
                            if (parent_branch.parent.links !== undefined) {
                                for (var k = 0; k < parent_branch.parent.links.length; ++k) {
                                    peer_branch = parent_branch.parent.links[k];
                                    if (peer_branch == parent_branch) {
                                        // don't tag it because it's already tagged as supercat
                                    } else {
                                        addClass(document.getElementById(getCatId(peer_branch)), name_supercatpeer);
                                    }
                                }
                            }
                        }
                    }
                    // tag active category
                    var active_cat_elem = document.getElementById(getCatId(branch));
                    addClass(active_cat_elem, name_activecat);
                    // tag active category as duplicate if dub
                    if (dub) {
                        addClass(active_cat_elem, name_activeduplicat);
                    }
                    // replace first link only (because nested <ul> may contain more links)
                    active_cat_elem.innerHTML = active_cat_elem.innerHTML.replace(/<a/, '<span').replace(/a>/, 'span>');
                    // tag first generation of children (subcatdirect)
                    processCategoryListTagLinks(branch.links, name_subcatdirect, false);
                    // tag all children and grandchildren (subcat)
                    processCategoryListTagLinks(branch.links, name_subcat, true);
                    // tag all children and grandchildren as sub-category of duplicate if dub
                    if (dub) {
                        processCategoryListTagLinks(branch.links, name_subduplicat, true);
                    }
                }
            } else {
                // if there are no active categories, tag-up the top of the tree
                addClass(element, 'no-active-cat');
            }
            // tweak display of category list based on mode
            switch (options.mode) {
                case 'unstyled' :
                    // don't apply any css styles to the category-list
                    removeClass(element, 'show-styled');
                    break;
                default:
                    break;
            }
        },

        processCategoryListTagLinks = function (links, name, recurse) {
            if (links !== undefined) {
                if (links.length > 0) {
                    // catch case that we've done these already (loop)
                    if (links[0]['tagged-' + name] !== undefined) {
                        return;
                    } else {
                        links[0]['tagged-' + name] = true;
                    }
                    // loop through links
                    for (var j = 0; j < links.length; ++j) {
                        addClass(document.getElementById(getCatId(links[j])), name);
                        if (recurse) {
                            processCategoryListTagLinks(links[j].links, name, recurse);
                        }
                    }
                }
            }
        },

        processCategoryBreadcrumb = function (element, active_categories) {
            // don't try to process if we've not got any active categories
            if ((active_categories == undefined) || (active_categories.length == 0)) {
                return;
            }
            var parents = getParents(active_categories[0]);
            // find attach point
            var id_topsep = 'uncomplicated-category-breadcrumb-top-separator';
            var attach = document.getElementById(id_topsep);
            var separator = attach;
            // find model
            var id_modelitem = 'uncomplicated-category-breadcrumb-model-item';
            var model = document.getElementById(id_modelitem);
            // loop backwards through parents attaching to breadcrumb list in reverse order
            for (var i = parents.length - 1; i >= 0; --i) {
                // copy existing item
                var copy = model.cloneNode(true);
                // tweak to include parent[i] data
                copy.id = 'uncomplicated-category-breadcrumb-inserted-' + i;
                copy.href = parents[i].url
                copy.title = parents[i].title;
                copy.innerHTML = parents[i].title;
                // insert separator into DOM
                var newsep = separator.cloneNode(true);
                newsep.id = 'uncomplicated-category-breadcrumb-insertedsep-' + i;
                element.insertBefore(newsep, attach);
                // insert into DOM
                element.insertBefore(copy, attach);
            }
        },

        init = function () {
            // hunt for options in page
            if (window.uncompt_cat !== undefined) {
                if (window.uncompt_cat.options !== undefined) {
                    // merge page's site-specific options into defaults
                    merge(window.uncompt_cat.options, options);
                }
                // store local reference to shared tree structure
                tree = window.uncompt_cat.categories;
                // process tree if unprocessed
                if (!processed('tree')) {
                    processed('tree', true);
                    // link each tree node to its parent
                    doublyLinkTree(tree);
                    // transform category tree into simple linear list
                    var list = flattenTree(tree);
                    // loop through list to find matching branches
                    window.uncompt_cat.matches = searchList(window.location.pathname, list);
                }
                // process catselect if unprocessed
                var id_catselect = 'uncomplicated-category-select';
                if (!processed(id_catselect)) {
                    // hunt for category select in page
                    var element_catselect = document.getElementById(id_catselect);
                    if (element_catselect !== null) {
                        processed(id_catselect, true);
                        processCategorySelect(element_catselect, window.uncompt_cat.matches);
                    }
                }
                // process catlist if unprocessed
                var id_catlist = 'uncomplicated-category-list';
                if (!processed(id_catlist)) {
                    // hunt for category list in page
                    var element_catlist = document.getElementById(id_catlist);
                    if (element_catlist !== null) {
                        processed(id_catlist, true);
                        processCategoryList(element_catlist, window.uncompt_cat.matches);
                    }
                }
                // process catbread if unprocessed
                var id_catbread = 'uncomplicated-category-breadcrumb';
                if (!processed(id_catbread)) {
                    // hunt for category list in page
                    var element_catbread = document.getElementById(id_catbread);
                    if (element_catbread !== null) {
                        processed(id_catbread, true);
                        processCategoryBreadcrumb(element_catbread, window.uncompt_cat.matches);
                    }
                }
            }
        };

    // executed section
    init();
}());