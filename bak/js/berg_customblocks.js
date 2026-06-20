// In your app.js
var el = window.wp.element.createElement;
var InnerBlocks = window.wp.blockEditor.InnerBlocks;

Laraberg.registerCategory('Custom', 'custom');
Laraberg.registerBlock('vendor/custom-item', {
    title: 'Custom item',
    icon: 'align-none',
    category: 'custom',

    example: {},

    edit: (props) => {
        return el(InnerBlocks, {
            template: [
                ['core/heading', {
                    content: 'New Item',
                    placeholder: 'Custom item',
                    level: 3,
                }],
                ['core/paragraph', {
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor condimentum arcu nec pretium.',
                    placeholder: 'Summary',
                }],
            ],
            templateLock: 'all',
        });
    },
    save: () => {
        return el(InnerBlocks.Content);
    },
});

