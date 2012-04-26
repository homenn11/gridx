require([
	'gridx/Grid',
	'gridx/core/model/cache/Async',
	'gridx/tests/support/data/MusicData',
	'gridx/tests/support/stores/ItemFileWriteStore',
	'gridx/tests/support/modules',
	'gridx/tests/support/TestPane',
	'dojo/domReady!'
], function(Grid, Cache, dataSource, storeFactory, mods, TestPane){

	grid = new Grid({
		id: 'grid',
		cacheClass: Cache,
		store: storeFactory({
			dataSource: dataSource, 
			size: 50
		}),
		structure: dataSource.layouts[1],
		autoHeight: true,
		autoWidth: true,
		modules: [
			mods.Focus,
			mods.ColumnResizer,
//            mods.VirtualVScroller,
			mods.Pagination,
			mods.PaginationBar
		]
	});
	grid.placeAt('gridContainer');
	grid.startup();
});
