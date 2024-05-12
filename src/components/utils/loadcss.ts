import { apply_styles } from "./apply_styles";

const load_styles = async (url: string, shadow: ShadowRoot | null): Promise<string> => {
    try {
        if (shadow === null) {
            throw new Error("ShadowRoot is null, cannot apply styles.");
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const css = await response.text();
        apply_styles(css, shadow);
        return css;
    } catch (error) {
        console.error('Failed to load CSS:', error);
        throw error;  
    }
};

export default load_styles;

