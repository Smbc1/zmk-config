const { writeFileSync } = require('fs');
const input = require('./keyboard.json');


const coordSort = (a, b) => {
    return (100 * Math.ceil(a.y) + a.x) - (100 * Math.ceil(b.y) + b.x);
};

const mapped = {
    ...input,
    layouts: {
        LAYOUT: {
            layout: input.layouts.LAYOUT.layout.map(key => ({ ...key, row: key.y -1, col: Math.ceil(key.x)}))
        }
    }
};

writeFileSync('./layout_editor_meta.json', JSON.stringify(mapped, null, 4));
