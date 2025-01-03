{ // must be inside our own scope here so that when we are unloaded everything disappears
    let s = require("Storage");

    // TODO: Allow to change sortorder in settings
    let tags = {
        "clock": {
            name: /*LANG*/ "Clocks",
            icon: () => atob("MDCEBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERESIiIiIREREREREREREREREREREREREiIiIiIiIiIhERERERERERERERERERESIiIiIiIiIiIiIREREREREREREREREREiIiIiIiIiIiIiIhERERERERERERERESIiIiIgz//8ziIiIiIREREREREREREREiIiIg////////ziIiIhERERERERERERIiIiD//////////84iIiERERERERERESIiIg/////8A/////ziIiIRERERERERESIiI//////8A//////+IiIREREREREREiIiP//////8A///////4iIhERERERERIiIg///////8A///////ziIiERERERERIiIP///////8A////////OIiERERERESIiI////////8A////////+IiIRERERESIiD////////8A////////84iIRERERESIiP////////8A/////////4iIRERERESIiP////////8A/////////4iIREREREiIg/////////8A/////////ziIhEREREiIg/////////IAL////////ziIhEREREiIj////////yAAAv////////iIhEREREiIgiIv/////wCIAP/////yIiiIhEREREiIgiIv/////wCIAP/////yIiiIhEREREiIj////////yAAAD////////iIhEREREiIg/////////IAABP//////ziIhEREREiIg///////////IAE//////ziIhERERESIiP//////////8gAT/////4iIRERERESIiP///////////yABP////4iIRERERESIiD////////////IAL///84iIRERERESIiI////////////8i////+IiIRERERERIiIP/////////////////OIiERERERERIiIg////////////////ziIiEREREREREiIiP///////////////4iIhERERERERESIiI//////////////+IiIRERERERERESIiIg/////8i/////ziIiIRERERERERERIiIiD////8i////84iIiEREREREREREREiIiIg///8i///ziIiIhERERERERERERESIiIiIgz8i8ziIiIiIREREREREREREREREiIiIiIiIiIiIiIhERERERERERERERERESIiIiIiIiIiIiIREREREREREREREREREREiIiIiIiIiIhERERERERERERERERERERERESIiIiIRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERA==")
        },
        "game": {
            name: /*LANG*/ "Games",
            sortorder: 1,
            icon: () => atob("MDCEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMzMzMzMzMzMzMzMzMzMzMwAAAAAAAAAzMzMzMzMzMzMzMzMzMzMzMwAAAAAAAAAzIiIiIiIiIiIiIiIiIiIiMwAAAAAAAAAzL///IiIi////IiIi///yMwAAAAAAAAAzL///IiIi////IiIi///yMwAAAAAAAAAzL///IiIi////IiIi///yMwAAAAAAAAAzL///IiIi////IiIi///yMwAAAAAAAAAzL///IiIi////IiIi///yMwAAAAAAAAAzIiIi////IiIi////IiIiMwAAAAAAAAAzIiIi////IiIi////IiIiMwAAAAAAAAAzIiIi////IiIi////IiIiMwAAAAAAAAAzIiIi////IiIi////IiIiMwAAAAAAAAAzIiIi////IiIi////IiIiMwAAAAAAAAAzIiIi////IiIi////IiIiMwAAAAAAAAAzL///IiIi////IiIi///yMwAAAAAAAAAzL///IiIi////IiIi///yMwAAAAAAAAAzL///IiIi////IiIi8R/xERABEAAAAAAzL///IiIi////IiIi8R/xERABEAAAAAAzL///IiIi////IiIi8R/xERABEAAAAAAzL///IiIi////IiIi8RMxERABEAAAAAAzIiIi////IiIi////IREREREREAAAAAAzIiIi////IiIi////IREREREREAAAAAAzIiIi////IiIi////IREREREREAAAAAAzIiIi////IiIi////IhERERERAAAAAAAzIiIi////IiIi////IiMzMzMwAAAAAAAzIiIi////IiIi////IiMzMzMwAAAAAAAzL///IiIi////IiIi///xERAAAAAAAAAzL///IiIi////IiIi//8xERAAAAAAAAAzL///IiIi////IiIi//8hEREAAAAAAAAzL///IiIi////IiIi//8REREAAAAAAAAzL///IiIi////IiIi//MREREAAAAAAAAzIiIiIiIiIiIiIiIiIzMzMzMzMAAAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMAAAAAAzMzMzMzMzMzMzMzMzMhEREREREAAAAAAAAAAAAAAAAAAAAAAAEREREREREQAAAAAAAAAAAAAAAAAAAAAAEREREREREQAAAAAAAAAAAAAAAAAAAAAAEREREREREQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==")
        },
        "tool": {
            name: /*LANG*/ "Tools",
            sortorder: -1,
            icon: () => atob("MDCEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMwAAAAAAAAAAAAAAIiIgAAAAAAAAAAADMzMAAAAAAAAAAAAiIiIgAAAAAAAAAAADMzMwAAAAAAAAAAIiIiIAAAAAAAAAAAAAMzMzAAAAAAAAACIiIiAAAAAAAAAAAAAAMzMzMAAAAAAAACIiIgAAAAAAAAAAAAAAAzMzMAAAAAAAAiIiIAAAAAAAAAAAAAAAADMzMwAAAAAAAiIiIAAAAAIgAAAAAAAAAAMzMzAAAAAAAiIiIgAAACIgAAAAAAAAAAADMzMAAAAAAiIiIiAAAiIgAAAAAAAAAAAAMzMwAAAAAiIiIiIAIiIgAAAAAAAAAAAAAzMzAAAAACIiIiIiIiIgAAAAAAAAAAAAADMzMAAAAiIiIiIiIiIAAAAAAAAAAAAAAAMzMwDdQiIiIiIiIiIAAAAAAAAAAAAAAAAzMz3d0iIiIiIiIiAAAAAAAAAAAAAAAAADM93d1CIiIiIiIgAAAAAAAAAAAAAAAAAAPd3d3iIiACIiAAAAAAAAAAAAAAAAAAAA3d3d7kIgAAAAAAAAAAAAAAAAAAAAAAAN3d3e7uQAAAAAAAAAAAAAAAAAAAAAAAAN3d3u7u4AAAAAAAAAAAAAAAAAAAAAAAAC3d7u7u7gAAAAAAAAAAAAAAAAAAAAAAAiJO7u7u7uAAAAAAAAAAAAAAAAAAAAAAIiIiTu7u7u7gAAAAAAAAAAAAAAAAAAACIiIiIu7u7u7uAAAAAAAAAAAAAAAAAAAiIiIiIA7u7u7u4AAAAAAAAAAAAAAAAAIiIiIiAADu7u7u7uAAAAAAAAAAAAAAACIiIiIgAAAO7u7u7u4AAAAAAAAAAAAAAiIiIiIAAAAO7u7u7u7gAAAAAAAAAAAAIiIiIiAAAAAA7u7u7u7uAAAAAAAAAAAiIiIiIgAAAAAADu7u7u7u4AAAAAAAAAIiIiIiIAAAAAAAAO7u7u7u7gAAAAAAAAIiIiIiAAAAAAAAAO7u7u7u7gAAAAAAACIgAiIgAAAAAAAAAA7u7u7u7gAAAAAAACIgAiIAAAAAAAAAAADu7u7u7gAAAAAAACIiIiIAAAAAAAAAAAAO7u7u4AAAAAAAAAIiIiAAAAAAAAAAAAAO7u7uAAAAAAAAAAAiIAAAAAAAAAAAAAAADu7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==")
        },
        "bluetooth": {
            name: /*LANG*/ "Bluetooth",
            icon: () => atob("MDCEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKqqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKqqoAAAAAAAAAAAAAAAAAAAAAAAAAAAAKqqqgAAAAAAAAAAAAAAAAAAAAAAAAAAAKqqqqoAAAAAAAAAAAAAAAAAAAAAAAAAAKqqqqqgAAAAAAAAAAAAAAAAAAAAAAAAAKqqqqqqAAAAAAAAAAAAAAAAAAAAAAAAAKqqCqqqoAAAAAAAAAAAAAAAAAAAAAAAAKqqAKqqqgAAAAAAAAAAAAAAAAAAAAAAAKqqAAqqqqAAAAAAAAAAAAAAAAAKqgAAAKqqAACqqqqgAAAAAAAAAAAAAAAKqqAAAKqqAAAKqqoAAAAAAAAAAAAAAAAKqqoAAKqqAACqqqAAAAAAAAAAAAAAAAAAqqqgAKqqAAqqqgAAAAAAAAAAAAAAAAAACqqqAKqqAKqqoAAAAAAAAAAAAAAAAAAAAKqqoKqqCqqqAAAAAAAAAAAAAAAAAAAAAAqqqqqqqqqgAAAAAAAAAAAAAAAAAAAAAACqqqqqqqoAAAAAAAAAAAAAAAAAAAAAAAAKqqqqqqAAAAAAAAAAAAAAAAAAAAAAAAAAqqqqqgAAAAAAAAAAAAAAAAAAAAAAAAAACqqqoAAAAAAAAAAAAAAAAAAAAAAAAAAACqqqoAAAAAAAAAAAAAAAAAAAAAAAAAAAqqqqqgAAAAAAAAAAAAAAAAAAAAAAAAAKqqqqqqAAAAAAAAAAAAAAAAAAAAAAAACqqqqqqqoAAAAAAAAAAAAAAAAAAAAAAAqqqqqqqqqgAAAAAAAAAAAAAAAAAAAAAKqqoKqqCqqqAAAAAAAAAAAAAAAAAAAACqqqAKqqAKqqoAAAAAAAAAAAAAAAAAAAqqqgAKqqAAqqqgAAAAAAAAAAAAAAAAAKqqoAAKqqAACqqqAAAAAAAAAAAAAAAACqqqAAAKqqAAAKqqoAAAAAAAAAAAAAAAAKqgAAAKqqAACqqqoAAAAAAAAAAAAAAAAAoAAAAKqqAAqqqqAAAAAAAAAAAAAAAAAAAAAAAKqqAKqqqgAAAAAAAAAAAAAAAAAAAAAAAKqqCqqqoAAAAAAAAAAAAAAAAAAAAAAAAKqqqqqqAAAAAAAAAAAAAAAAAAAAAAAAAKqqqqqgAAAAAAAAAAAAAAAAAAAAAAAAAKqqqqoAAAAAAAAAAAAAAAAAAAAAAAAAAKqqqgAAAAAAAAAAAAAAAAAAAAAAAAAAAKqqoAAAAAAAAAAAAAAAAAAAAAAAAAAAAKqqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==")
        },
        "outdoors": {
            name: /*LANG*/ "Outdoor",
            icon: () => atob("MDCEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN3d0AAAAAAAAAAAAAAAAAAAAAAAAADd3d3d3d3QAAAAAAAAAAAAAAAAAAAAAADd3d3d3d3QAAAAAAAAAAAAAAAAAAAAAADd3e7u7d3QAAAAAAAAAAAAAAAAAAAAAADd3u7u7t3QAAAAAAAAAAAAAAAAAAAAAA3d7u7u7u3dAAAAAAAAAAAAAAAAAAAAAN3d7u7u7u3d0AAAAAAAAAAAAAAAAAAADd3d7u7u7u3d3QAAAAAAAAAAAAAAAAAAAN3d7u7u7u3d0AAAAAAAAAAAAAAAAAAAAA3d3u7u7u3dAAAAAAAAAAAAAAAAAAAAAADd3u7u7t3QAAAAAAAAAAAAAAAAAAAAAADd3d7u7d3QAMzMwAAAAAAAAO4AAAAAAADd3d3d3d3QAMzMwAAAAAAA7u7gAAAAAADd3d3d3d3QAAzMwAAAAAAO7u7gAAAAAAAAAN3d0AAAAAzMAAAAAAAO7u7gAAAAAAAAAA3dAAAAAAzMAAAAAADu7u4AAAAAAAAAAADQAAAAAAzMAAAAAADu7u4AAAAAAAAAAAAAAAAAAAERAAAAAA7u7uAAAAAAAAAAAAAAAAAAAAERAAAAQO7u7uAAAAAAAAAAAAAAAAAAAAEREAAEAO7u7gAAAAAAAAAAAAAAAAAAABEREN3U3e7u7gAAAAAAAAAAAAAAAAAAARERFN3d3d7u4AAAAAAAAAAAAAAAAAAAARERFEREREREQAAAAAAAAAAAAAAAAAEREREREREREREREREAAAAAAAAAAAAAAAEREREREREREREREREAAAAAAAAAAAAAAAARERERERERERERERAAAAAAAAAAAAAAAAAEREREREREREREREAAAAAAAAAAAAAAAAAERERERERERERERAAAAAAAAAADMzMzMzMxFEERRBEUQRFEETMzMzAAAAADMzMzMzMyFEERRBEUQRFEETMzMzAAAAADMzMzMzMzREREREREREREQzMzMzAAAAADMzMzMzMzJEREREREREREIzMzMzAAAAADMzMzMzMzMkRERERERERCMzMzMzAAAAADMzMzMzMzMzJEREREREIzMzMzMzAAAAADMzMzMzMzMzMzMzMzMzMzMzMzMzAAAAADMzMzMzMzMzMzMzMzMzMzMzMzMzAAAAADMzMzMzMzMzMzMzMzMzMzMzMzMzAAAAADMzMzMzMzMzMzMzMzMzMzMzMzMzAAAAADMzMzMzMzMzMzMzMzMzMzMzMzMzAAAAADMzMzMzMzMzMzMzMzMzMzMzMzMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==")
        },
        "misc": {
            name: /*LANG*/ "Misc",
            icon: () => atob("MDCEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAACIiIiIiIiIiIiIiIiIiIiIiIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==")
        },
        "health": {
            name: /*LANG*/ "Health",
            icon: () => require("heatshrink").decompress(atob("mEwwhC/AEnM5ndABgWGhgXP6AuHC5wwGC/4X/C98z///mYXSn4WBAAPzC6HTCwYABnoXPFwgwGC5QuDAoIwGC5XfC4/9C5pGDC4hIDC8QVDAAYHEC/4XSR97XX6YXHnoXNJAhGGC5gwDFwwXMGAouEC5vdmYWBmbEFC5oAJC/4X/C9sMC5/QC4owCFyYA/ADoA=="))
        },
    };

    // handle customised launcher
    let scaleval = 1;
    let vectorval = 20;
    let font = g.getFonts().includes("12x20") ? "12x20" : "6x8:2";
    let settings = Object.assign({
        showClocks: true,
        fullscreen: false
    }, s.readJSON("taglaunch.json", true) || {});
    if ("vectorsize" in settings)
        vectorval = parseInt(settings.vectorsize);
    if ("font" in settings) {
        if (settings.font == "Vector") {
            scaleval = vectorval / 20;
            font = "Vector" + (vectorval).toString();
        } else {
            font = settings.font;
            scaleval = (font.split("x")[1]) / 20;
        }
    }

    let sort = (a, b) => {
        let n = (0 | a.sortorder) - (0 | b.sortorder);
        if (n) return n; // do sortorder first
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    };

    // cache app list so launcher loads more quickly
    let launchCache = s.readJSON("taglaunch.cache.json", true) || {};
    let launchHash = require("Storage").hash(/\.info/);
    if (launchCache.hash != launchHash) {
        let appsByTag = Object.keys(tags).reduce((acc, curr) => (acc[curr] = [], acc), {});
        s.list(/\.info$/).map(app => s.readJSON(app, 1))
            .filter(app => app && app.type == "app" || app.type == "clock" || !app.type)
            .sort((a, b) => sort(a, b))
            .forEach(app => {
                let appTags = [];
                if (!app.tags) {
                    appTags.push("misc");
                } else {
                    appTags = app.tags.split(",")
                        .map(tag => tag.trim())
                        .map(tag => tag === "tools" ? "tool" : tag) // tool = tools
                        .filter(tag => Object.keys(tags).includes(tag));
                    if (appTags.length === 0) {
                        appTags.push("misc");
                    } else if (appTags.length > 1 && appTags.indexOf("tool") >= 0) {
                        // everything has tag 'tool', unregister when at least one other known tag
                        appTags.splice(appTags.indexOf("tool"), 1);
                    }
                }
                appTags.forEach(tag => appsByTag[tag].push(app));
            });
        launchCache = {
            hash: launchHash,
            appsByTag: appsByTag
        };
        s.writeJSON("taglaunch.cache.json", launchCache);
    }
    let appsByTag = launchCache.appsByTag;
    let tagKeys = Object.keys(tags).filter(tag => tag !== "clock" || settings.showClocks)
        .filter(tag => appsByTag[tag].length > 0)
        .sort((a, b) => sort(tags[a], tags[b]));

    // Now apps list is loaded - render
    if (!settings.fullscreen)
        Bangle.loadWidgets();

    const unload = () => {
        // cleanup the timeout to not leave anything behind after being removed from ram
        if (lockTimeout) clearTimeout(lockTimeout);
        Bangle.removeListener("lock", lockHandler);
    };

    // 10s of inactivity goes back to clock
    Bangle.setLocked(false); // unlock initially
    let lockTimeout;
    let lockHandler = function(locked) {
        if (lockTimeout) clearTimeout(lockTimeout);
        lockTimeout = undefined;
        if (locked) {
            lockTimeout = setTimeout(Bangle.showClock, 10000);
        }
    };

    let showTagMenu = (tag) => {
        E.showScroller({
            h: 64 * scaleval,
            c: appsByTag[tag].length,
            draw: (i, r) => {
                let app = appsByTag[tag][i];
                if (!app) return;
                g.clearRect((r.x), (r.y), (r.x + r.w - 1), (r.y + r.h - 1));
                g.setFont(font).setFontAlign(-1, 0).drawString(app.name, 64 * scaleval, r.y + (32 * scaleval));
                if (app.icon) {
                    if (!app.img) app.img = s.read(app.icon); // load icon if it wasn't loaded
                    try {
                        g.drawImage(app.img, 8 * scaleval, r.y + (8 * scaleval), {
                            scale: scaleval
                        });
                    } catch (e) {}
                }
            },
            select: i => {
                let app = appsByTag[tag][i];
                if (!app) return;
                if (!app.src || require("Storage").read(app.src) === undefined) {
                    Bangle.setUI();
                    E.showMessage( /*LANG*/ "App Source\nNot found");
                    setTimeout(showMainMenu, 2000);
                } else {
                    load(app.src);
                }
            },
            back: showMainMenu,
            remove: unload
        });
        Bangle.on("lock", lockHandler);
    };

    let showMainMenu = () => {
        E.showScroller({
            h: 64 * scaleval,
            c: tagKeys.length,
            draw: (i, r) => {
                let tag = tagKeys[i];
                g.clearRect((r.x), (r.y), (r.x + r.w - 1), (r.y + r.h - 1));
                g.setFont(font).setFontAlign(-1, 0).drawString(tags[tag].name, 64 * scaleval, r.y + (32 * scaleval));

                const img = tags[tag].icon ? tags[tag].icon() : s.read("taglaunch." + tag + ".img");
                if (img) {
                    try {
                        g.drawImage(img, 8 * scaleval, r.y + (8 * scaleval), {
                            scale: scaleval
                        });
                    } catch (e) {}
                }
            },
            select: i => {
                let tag = tagKeys[i];
                showTagMenu(tag);
            },
            back: Bangle.showClock, // button press or tap in top left shows clock now
            remove: unload
        });
        Bangle.on("lock", lockHandler);
    };
    showMainMenu();
    g.flip(); // force a render before widgets have finished drawing

    if (!settings.fullscreen) // finally draw widgets
        Bangle.drawWidgets();
}
