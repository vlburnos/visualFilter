visualfilter.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'visualfilter-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: false,
			hideMode: 'offsets',
			items: [{
				title: _('visualfilter_items'),
				layout: 'anchor',
				items: [{
					html: _('visualfilter_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'visualfilter-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	visualfilter.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(visualfilter.panel.Home, MODx.Panel);
Ext.reg('visualfilter-panel-home', visualfilter.panel.Home);
