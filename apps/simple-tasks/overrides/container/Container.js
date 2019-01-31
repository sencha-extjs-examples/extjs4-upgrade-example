/**
 * Overrides for Ext.container.Container
 */
Ext.define('overrides.container.Container', {
    override: 'Ext.container.Container',

    // override of deprecated config
    autoScroll: true,

    // override of private method
    anim: function () {
        return this.callParent(arguments);
    }
});
