/**
 * Overrides for Ext.data.association.Association
 */
Ext.define('overrides.data.Association', {

    override: 'Ext.data.association.Association'

}, function () {

    if (Ext.getVersion('extjs').isLessThan('4.2')) {

        this.override({

            /**
            * This override is needed to fix an issue when you define your models to extend from your
            * own custom base model instead of Ext.data.Model.  The issue that would happen in that case would
            * be that the proxy and reader from one class would end up getting defined on a different class
            * that was used in an association.
            * The Sencha Jira ticket for this bug is EXTJSIV-6327 and it is fixed in 4.2
            */
            getReader: function () {
                var me = this,
                    reader = me.reader,
                    model = me.associatedModel;

                if (reader === undefined || typeof reader === 'string') {
                    reader = {
                        type: reader
                    };
                }

                if (reader.isReader) {
                    reader.setModel(model);
                } else {
                    Ext.applyIf(reader, {
                        model: model,
                        type: me.defaultReaderType
                    });

                    me.reader = Ext.createByAlias('reader.' + reader.type, reader);
                }

                return me.reader;

            }
        });


    }

});
