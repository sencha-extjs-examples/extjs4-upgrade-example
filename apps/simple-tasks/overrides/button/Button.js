Ext.define('overrides.button.Button', {
    override: 'Ext.button.Button',

    // this is a test of a config that is marked as 'removed'
    padding: 10,

    // this is a test of a config that is marked as 'deprecated'
    renderSelectors: {
        titleEl: 'h1.title',
        descEl: 'p'
    }
});
