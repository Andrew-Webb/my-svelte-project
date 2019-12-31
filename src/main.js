
import App from './App.svelte';
import LogOnBtn from "./LogOnButton.svelte";

const app = new App({
    target: document.querySelector('#root'),
    props: {
        name: 'andrew'
    }
});

const logOnBtn = new LogOnBtn({
    target: document.querySelector('#logonBtn')
});

export { app, logOnBtn };
