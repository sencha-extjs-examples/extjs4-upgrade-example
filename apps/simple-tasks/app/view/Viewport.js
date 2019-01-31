Ext.define('SimpleTasks.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
        'Ext.tab.Panel',
        'Ext.LoadMask'
    ],

    layout: 'border',

    items: [
        {
            xtype: 'tasksToolbar',
            region: 'north'
        },
        {
            xtype: 'listTree',
            region: 'west',
            width: 300,
            collapsible: true,
            split: true
        },
        {
            region: 'center',
            width: 300,
            xtype: 'taskGrid',
            title: 'All Lists'
        },
        {
            region: 'south',
            xtype: 'tabpanel',
            height: 400,
            items: [
                {
                    xtype: 'grid',
                    multiSelect: true
                },
                {
                    xtype: 'component',
                    title: 'Tab (should auto load)',
                    loader: {url: 'resources/html/MyCustomComponent.html'}
                },
                {
                    xtype: 'panel',
                    title: 'Tab (should auto load)',
                    dockedItems: [{
                        xtype: 'toolbar',
                        dock: 'top',
                        items: [
                            {
                                xtype: 'button',
                                text: 'show mask',
                                handler: function (btn) {
                                    var viewport = btn.up('viewport'),
                                        centerRegion = viewport.down('[region=center]');
                                        
                                    var myMask = new Ext.LoadMask({
                                        id: centerRegion.getId() + '-loadmask',
                                        msg : 'Please wait...',
                                        maskCls: 'mycustom-loadmask-mask',
                                        msgCls: 'mycustom-loadmask-msg',
                                        target : centerRegion
                                    });

                                    // var myMask = Ext.create('widget.loadmask', {
                                    //     id: centerRegion.getId() + '-loadmask',
                                    //     msg : 'Please wait...',
                                    //     maskCls: 'mycustom-loadmask-mask',
                                    //     msgCls: 'mycustom-loadmask-msg',
                                    //     target : centerRegion
                                    // });

                                    // var myMask = Ext.createByAlias('loadmask', {
                                    //     id: centerRegion.getId() + '-loadmask',
                                    //     msg : 'Please wait...',
                                    //     maskCls: 'mycustom-loadmask-mask',
                                    //     msgCls: 'mycustom-loadmask-msg',
                                    //     target : centerRegion
                                    // });

                                    // var myMask = Ext.widget('loadmask', {
                                    //     id: centerRegion.getId() + '-loadmask',
                                    //     msg : 'Please wait...',
                                    //     maskCls: 'mycustom-loadmask-mask',
                                    //     msgCls: 'mycustom-loadmask-msg',
                                    //     target : centerRegion
                                    // });

                                    myMask.show();
                                }
                            },
                            {
                                text: 'hide mask',
                                handler: function (btn) {
                                    var viewport = btn.up('viewport'),
                                        centerRegion = viewport.down('[region=center]'),
                                        myMask = Ext.getCmp(centerRegion.getId() + '-loadmask');
                                    
                                    myMask.destroy();
                                }
                            }
                        ]
                    }],
                    loader: {
                        url: 'resources/html/MyCustomComponent.html'
                    }
                }
            ]
        }
    ]

});