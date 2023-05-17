import{_ as a,o as s,c as r,a as t,b as e,d as n,r as i}from"./app.73a0c550.js";const l={},h=t("h3",{id:"how-atom-uses-chromium-snapshots",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#how-atom-uses-chromium-snapshots","aria-hidden":"true"},"#"),e(" How Atom Uses Chromium Snapshots")],-1),c={href:"https://v8project.blogspot.it/2015/09/custom-startup-snapshots.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/atom/electron-link",target:"_blank",rel:"noopener noreferrer"},d=t("code",null,"require",-1),m={href:"https://github.com/v8/v8/wiki/Embedder%27s-Guide#contexts",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/atom/atom/blob/74ff9fdb91205b89673209caf1e2ceb373e9c59f/script/lib/generate-startup-snapshot.js#L19-L65",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/atom/atom/blob/74ff9fdb91205b89673209caf1e2ceb373e9c59f/script/lib/generate-startup-snapshot.js#L73-L78",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/atom/atom/blob/74ff9fdb91205b89673209caf1e2ceb373e9c59f/script/lib/generate-startup-snapshot.js#L80-L89",target:"_blank",rel:"noopener noreferrer"};function g(_,w){const o=i("ExternalLinkIcon");return s(),r("div",null,[h,t("p",null,[e("In order to improve startup time, when Atom is built we create a "),t("a",c,[e("V8 snapshot"),n(o)]),e(" in which we preload core services and packages. Then, at runtime, we finish loading Atom by supplying all the information we didn't have during the compilation phase (e.g. loading third party packages, custom style sheets, configuration, etc.).")]),t("p",null,[t("a",p,[e("electron-link"),n(o)]),e(" is the tool that powers snapshots, as it enables us to traverse the entire require graph (starting at the entry point) and replace all the forbidden "),d,e(" calls (e.g. require calls to native modules, node core modules or other modules that can't be accessed in the snapshot "),t("a",m,[e("V8 context"),n(o)]),e(") with a function that will be called at runtime. When adding new code to Atom, we always try to put it inside the snapshot by, for example, deferring the usage of DOM APIs or native node modules to a later moment in time when those facilities are available. If that is not possible, we will add the unsupported code paths to the "),t("a",u,[e("list of files that get excluded from the snapshot"),n(o)]),e(", ensuring we only exclude those ones that are not supported as opposed to skipping an entire Node module.")]),t("p",null,[e("The output of electron-link is a single script containing the code for all the modules reachable from the entry point, which we then "),t("a",f,[e("supply to mksnapshot"),n(o)]),e(" to generate a snapshot blob.")]),t("p",null,[e("The generated blob is finally "),t("a",b,[e("copied into the application bundle"),n(o)]),e(" and will be automatically loaded by Electron when running Atom.")])])}const y=a(l,[["render",g],["__file","how-atom-uses-chromium-snapshots.html.vue"]]);export{y as default};
