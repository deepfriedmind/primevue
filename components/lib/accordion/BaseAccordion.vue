<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';
import AccordionStyle from './AccordionStyle';

const { load: loadStyle } = useStyle(AccordionStyle.css, { name: AccordionStyle.name, manual: true });

export default {
    name: 'BaseAccordion',
    extends: BaseComponent,
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        activeIndex: {
            type: [Number, Array],
            default: null
        },
        lazy: {
            type: Boolean,
            default: false
        },
        expandIcon: {
            type: String,
            default: undefined
        },
        collapseIcon: {
            type: String,
            default: undefined
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        }
    },
    styles: {
        ...AccordionStyle,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
