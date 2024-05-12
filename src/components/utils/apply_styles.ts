export const apply_styles = (css:string, target: Element | ShadowRoot): void =>{
    const style = document.createElement('style');
    style.textContent = css;
    target.appendChild(style);
}
