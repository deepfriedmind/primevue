import { useStyle } from '../../usestyle/UseStyle';

const css = `
.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.p-panel-title {
    line-height: 1;
}

.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
`;

const classes = {
    root: ({ props }) => [
        'p-panel p-component',
        {
            'p-panel-toggleable': props.toggleable
        }
    ],
    header: 'p-panel-header',
    title: 'p-panel-title',
    icons: 'p-panel-icons',
    toggler: 'p-panel-header-icon p-panel-toggler p-link',
    toggleablecontent: 'p-toggleable-content',
    content: 'p-panel-content',
    footer: 'p-panel-footer'
};

export default {
    name: 'panel',
    css,
    classes,
    loadStyle() {
        return useStyle(this.css, { name: this.name, manual: true }).load;
    },
    getStyleElement(extendedCSS = '') {
        return `<style type="text/css" data-primevue-style-id="${this.name}">${this.css}${extendedCSS}</style>`;
    }
};
