	Ext.Loader.setConfig({ enabled: true });
	Ext.Loader.setPath('Ext.ux', '../framework/extjs-6.2.0/packages/ux/classic/src');
	Ext.Loader.setPath('Ext.ajax', '../framework/extjs-6.2.0/packages/ux/src');
	
	//function untuk fontsize grid
	function upsize(val) {
		var x = val;
		if (x == ''){
			return '<font class="fontsize12" style="color:red;font-weight: bold;"> --- </font>';
		}
		else{
			return '<font class="fontsize12">' + x + '</font>';
		}
	}

	// Start
	Ext.onReady(function() {

		//	========================================================    VARIABLE    =======================================
			// configure whether filter query is encoded or not (initially)
			var encode = false;

			// configure whether filtering is performed locally or remotely (initially)
			var local = true;
			Ext.QuickTips.init();

			//	end function untuk column bigsize
			var itemperpage = 10;
			var date 		= new Date();
			
		//	=======================================================    MODEL    =========================================
			
					Ext.define('model_thermo_ma',{
		                extend: 'Ext.data.Model',
						fields: ['unid', 'id', 'model', 'serial','datetimein','alm','t_ch1','h_ch2','alm1','alm2']
		           	});
					Ext.define('model_thermo_smt',{
		                extend: 'Ext.data.Model',
						fields: ['unid', 'id', 'model', 'serial','datetimein','alm','t_ch1','h_ch2','alm1','alm2']
		           	});
					
		//	=======================================================    DATASTORE    =====================================

					var store_thermo_ma = Ext.create('Ext.data.Store',{
						model	: 'model_thermo_ma',
						autoLoad: false,
						pageSize: itemperpage,
						proxy   : {
							type    : 'ajax',
							url     : 'json/measurement/json_ma_thermohumidity.php',
							reader  : {
								type    : 'json',
								root    : 'rows'
							}
						},
						// listeners: {
						// 	load: function(store, records) {
						// 		if (records == "") {
						// 			Ext.Msg.alert('Warning', 'No Data Found ! <br> Please try again with the correct Date Measurement.');
						// 		}
						// 	}
						// }
					});
					var store_thermo_smt = Ext.create('Ext.data.Store',{
						model	: 'model_thermo_smt',
						autoLoad: false,
						pageSize: itemperpage,
						proxy   : {
							type    : 'ajax',
							url     : 'json/measurement/json_smt_thermohumidity.php',
							reader  : {
								type    : 'json',
								root    : 'rows'
							}
						},
						// listeners: {
						// 	load: function(store, records) {
						// 		if (records == "") {
						// 			Ext.Msg.alert('Warning', 'No Data Found ! <br> Please try again with the correct Date Measurement.');
						// 		}
						// 	}
						// }
					});
					

		//	=======================================================    GRID    ==========================================
					var grid_thermo_ma = Ext.create('Ext.grid.Panel', {
						id 				: 'grid_thermo_ma',
						autoWidth 	 	: '100%',
						maxHeight	 	: 290,
						columnLines 	: true,
						store 			: store_thermo_ma,
						viewConfig 		: {
							stripeRows 			: true,
							emptyText 		 	: '<div class="empty-txt">No data to display.</div>',
							deferEmptyText 		: false,
							enableTextSelection : true
						},
						columns: [
							{	header 		: 'unid',
								dataIndex 	: 'unid',
								flex 		: 1,
								renderer 	: upsize,
								hidden		: true
							},
							{	header 		: 'id',
								dataIndex 	: 'id',
								flex 		: 1,
								renderer 	: upsize,
								hidden		: true
							},
							{	header 		: 'model',
								dataIndex 	: 'model',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 'serial',
								dataIndex 	: 'serial',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 'datetimein',
								dataIndex 	: 'datetimein',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 'alm',
								dataIndex 	: 'alm',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 't_ch1',
								dataIndex 	: 't_ch1',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 'h_ch2',
								dataIndex 	: 'h_ch2',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 'alm1',
								dataIndex	: 'alm1',
								flex 		: 1,
								renderer	: upsize
							},
							{	header 		: 'alm2',
								dataIndex 	: 'alm2',
								flex 		: 1,
								renderer 	: upsize
							}
						],
						//features: [filters],
						// selModel: {
						// 	selType: 'cellmodel'
						// },
						// plugins: [cellEditing]
					});
					var grid_thermo_smt = Ext.create('Ext.grid.Panel', {
						id 				: 'grid_thermo_smt',
						autoWidth 	 	: '100%',
						maxHeight	 	: 290,
						columnLines 	: true,
						store 			: store_thermo_smt,
						viewConfig 		: {
							stripeRows 			: true,
							emptyText 		 	: '<div class="empty-txt">No data to display.</div>',
							deferEmptyText 		: false,
							enableTextSelection : true
						},
						columns: [
							{	header 		: 'unid',
								dataIndex 	: 'unid',
								flex 		: 1,
								renderer 	: upsize,
								hidden		: true
							},
							{	header 		: 'id',
								dataIndex 	: 'id',
								flex 		: 1,
								renderer 	: upsize,
								hidden		: true
							},
							{	header 		: 'MODEL',
								dataIndex 	: 'model',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 'SERIAL',
								dataIndex 	: 'serial',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 'TIME IN',
								dataIndex 	: 'datetimein',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 'alm',
								dataIndex 	: 'alm',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 't_ch1',
								dataIndex 	: 't_ch1',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 'h_ch2',
								dataIndex 	: 'h_ch2',
								flex 		: 1,
								renderer 	: upsize
							},
							{	header 		: 'alm1',
								dataIndex	: 'alm1',
								flex 		: 1,
								renderer	: upsize
							},
							{	header 		: 'alm2',
								dataIndex 	: 'alm2',
								flex 		: 1,
								renderer 	: upsize
							}
						],
						//features: [filters],
						// selModel: {
						// 	selType: 'cellmodel'
						// },
						// plugins: [cellEditing]
					});
					
					
		//	=======================================================    PANEL    =========================================
			
					var panel_thermo = Ext.create('Ext.tab.Panel', {
						id 			: 'panel_thermo',
						renderTo 	: 'panel_thermo',
						plain 		: true,
						activeTab 	: 0,
						autoWidth 	: '100%',
						height		: 300,
						autoScroll 	: true,
						frame 		: true,
						//style 	: 'padding:5px;-background:#157FCC;',
						items 		: [
							{	title 		: 'MA',
							 	id  		: 'show_grid_thermo_ma',
								reorderable : false,
								items 		: [grid_thermo_ma]
							}, 
							{	title 		: 'SMT',
							 	id  		: 'show_grid_thermo_smt',
								reorderable : false,
								items 		: [grid_thermo_smt]
							}
						]
					});
			
		//	=======================================================    POPUP SEARCH DATA    =============================
				Ext.create('Ext.form.field.Date',{
					renderTo 	: src_measurement_date,
					width 		: '100%',
					id 			: 'src_measurement_date',
					name 		: 'src_measurement_date',
					fieldCls	: 'biggertext',
					emptyText	: 'Search Date',
					margins		: '0 6 0 0',
					height 		: 30,
					flex		: 1,
					format		: 'd F Y',
					submitFormat: 'Y-m-d',
					mode		: 'local',  
					value 		: new Date(),
					editable 	: false,
					listeners	: {
							afterrender : function() {
								this.inputEl.setStyle('text-align', 'center');
								this.inputEl.setStyle('backgroundColor', '#0067AE');
								this.inputEl.setStyle('color', '#fff');
								this.inputEl.setStyle('fontSize', '20px');
								var me = this,
						            inputElement = me.inputElement;
						 
						        if (inputElement && inputElement.dom.focus) {
						            inputElement.dom.focus();
						        }
						        return me;
							},
							specialkey : function(field, e) {
								if (e.getKey() == 13) {
									var measurement_date = Ext.getCmp('src_measurement_date').getValue();
									
									if (!measurement_date) {
										Ext.Msg.alert('Warning', 'Measurement date cannot be null !!!');
									} else {
										store_thermo_smt.proxy.setExtraParam('measurement_date', measurement_date);
										store_thermo_smt.loadPage(1);

										store_thermo_ma.proxy.setExtraParam('measurement_date', measurement_date);
										store_thermo_ma.loadPage(1);
									}
								}
							}
						}
				});

		//	==** end **==

	});

