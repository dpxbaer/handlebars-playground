function handlebarsPartials(){
    const components = [
        registerComponent('myPartialExample'),
        registerComponent('navigation'),
        registerComponent('subnavigation'),
    ];
    return Promise.all(components);
}

async function start (page = 'example') {
    try {
        const data = await (await fetch(`data/${page}.json`)).json();
        renderDataVisualsTemplate(page, data);
    } catch (error) {
        console.warn(error);
        document.body.innerHTML = `<p>Could not load page <strong>${page}</strong></p>`;
    }
}

async function renderDataVisualsTemplate(page, data){
    handlebarsDebugHelper();
    const compontentsLoaded = await handlebarsPartials();
    console.debug(compontentsLoaded);
    renderHandlebarsTemplate(`templates/${page}.handlebars`, 'body', data);
}

async function getTemplate(path, callback) {
    const source = await (await fetch(path)).text();
    const template = Handlebars.compile(source);
    if (callback) callback(template);
}

function renderHandlebarsTemplate(withTemplate,inElement,withData){
    getTemplate(withTemplate, function(template) {
        document.querySelector(inElement).innerHTML = template(withData);
    });
}

function handlebarsDebugHelper(){
    Handlebars.registerHelper("debug", function(_optionalValue) {
        console.info("Current Context");
        console.info("====================");
        console.info(this);
    });
}

function registerComponent(componentName){
    return new Promise(async (resolve, reject) => {
        try {
            const template = await (await fetch(`components/${componentName}.handlebars`)).text();
            Handlebars.registerPartial(componentName, template);
            resolve(componentName);
        } catch (e) {
            reject(componentName);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const url = new URL(location.href);
    const page = url.searchParams.get('p') || url.searchParams.get('page') || 'home';
    start(page);
});
