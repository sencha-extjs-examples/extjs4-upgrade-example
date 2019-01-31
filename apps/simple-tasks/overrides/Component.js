
Ext.define('overrides.Component', {
    override: 'Ext.Component',

    afterRender: function () {
        var me = this;
        var myTestId = null;

        if (me.testId) {
            myTestId = me.testId;
        }
        else if (me.itemId) {
            myTestId = me.itemId;
        }
        else if (me.reference) {
            myTestId = me.reference;
        }
        else if (me.name) {
            myTestId = me.name;
        }

        if (myTestId) {
            if (me.inputEl) {
                me.inputEl.set({ testId: myTestId });
            }
            else if (me.getEl()) {
                me.getEl().set({ testId: myTestId });
            }
        }
        me.callParent(arguments);
    },

    beforeDestroy: function () {
        var me = this;
        if (me.getEl()) {
            me.getEl().set({ testId: null });
        }
        if (me.inputEl) {
            me.inputEl.set({ testId: null });
        }
        me.callParent(arguments);
    }

});
