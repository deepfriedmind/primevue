import PanelStyle from 'primevue/panel/style';

export default class StyleSheet {
    _styles = {};

    constructor() {
        this._styles = {
            panel: PanelStyle
        };
    }

    getStyleElement() {
        return this._styles.panel.getStyleElement();
    }
}
