/**
 * Overrides for private class Ext.container.AbstractContainer
 */
Ext.define('overrides.container.Container', {
    override: 'Ext.container.AbstractContainer',

    // override of onPosition that does a callOverridden()
    // instead of callParent()
    onPosition: function () {
        // this.callParent(arguments);
        this.callOverridden(arguments);
        this.repositionFloatingItems();
    }
});
