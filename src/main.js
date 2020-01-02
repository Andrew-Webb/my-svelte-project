
import App from './App.svelte';
import LogOnBtn from "./LogOnButton.svelte";

const app = new App({
    target: document.querySelector('#app')
});

const logOnBtn = new LogOnBtn({
    target: document.querySelector('#logonBtn')
});

// Capture the paste event anywhere in our window, and inform the 'app' component when this fires - so long
// as text hasn't been pasted into an input or textarea.
window.addEventListener('paste', (event) => {
    if (!event) {
        return;
    }

    let tagName = event.target ? event.target.tagName.toUpperCase() : null;
    if (!tagName) {
        return;
    }

    if (tagName === "INPUT" || tagName === "TEXTAREA") {
        return;
    }

    let pastedText = event.clipboardData.getData("text");
    if (!pastedText) {
        return;
    }

    event.stopPropagation();
    app.$set({ pastedText: pastedText });
});

export { app, logOnBtn };
