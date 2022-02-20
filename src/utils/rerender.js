export const reRender = async (component, domElement, page) => {
    if (component) {
        document.querySelector(domElement).innerHTML = await component.render();
    }
    if (component && page) {
        document.querySelector(domElement).innerHTML = await component.render();(page);
    }
    if (component.afterRender) await component.afterRender();

} 