// Initialize the url to the CNN JSON file
const fetch = require('node-fetch');
const url = "https://ix.cnn.io/projects/dropbox-connect/coronavirus-state-plans/data.json";
const settings = { method: "Get" };

// Fetch the JSON state
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        console.log(`${json.states[whichState('California', json)].state}:\n${paraFormat(json.states[0].copy)}`);
    
    });

// Format the paragraph to filter out all links and weird symbols
function paraFormat(para) {
    let str = '';
    let isWrite = false;
    for (let i = 0; i < para.length; i++){
        if (isWrite & para[i] !== '<') {
            str += para[i];
        }
        if (para[i] === '>') {
            isWrite = true;
            if (para[i-1] === 'p' & para[i-2] === '/') {
                str += '\n';
            }
        }
        if (para[i] === '<'){
            isWrite = false;
        }
    }
    return str;
}

// Find the index of the desired state in the JSON file
function whichState (stateName, json) {
    stateName = stateName.toLowerCase();
    for (let i = 0; i < json.states.length; i++) {
        if (json.states[i].slug === stateName) {
            return i;
        }
    }
    return -1;
}