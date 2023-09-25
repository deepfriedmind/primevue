import StyleSheet from '@/components/lib/stylesheet/StyleSheet';

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        const styleSheet = new StyleSheet();
        const el = styleSheet.getStyleElement();

        html.head.push(`${el}`);
    });
});
