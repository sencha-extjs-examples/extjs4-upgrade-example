/**
 * Overrides for Ext.data.Store
 */
Ext.define('overrides.data.Store', {
    override: 'Ext.data.Store',

    // override of a deprecated method
    save: function (cfg) {
        return this.callParent();
    }
});
