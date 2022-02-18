export const $ = (element) =>{ 
    const selectors = document.querySelector(element);
    return selectors.length == 1 ? selectors[0] : selectors
}