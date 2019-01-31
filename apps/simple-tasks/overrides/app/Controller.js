/**
 * Overrides for Ext.app.Controller
 */
Ext.define('overrides.app.Controller', {
    override: 'Ext.app.Controller',

    // override of private method
    hasConfig: function (cfg) {
        return this.callParent();
    }
});
