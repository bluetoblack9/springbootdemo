var View = {};


//订单信息表格
function displayProductTable(info){
	$("#studentTable").DataTable({
		"order" : [[ 0, "desc" ]],
		// 默认每页显示数据条数
		"pageLength" : 10,
		"data" : info,
		"searching": true,
		"bDestroy" : true,
		"bPaginate" : true, // 是否显示分页
		"bLengthChange" : true, // 每页显示的记录数
		"bFilter" : true, // 搜索栏
		"bSort" : false, // 是否支持排序功能
		"ordering" : true, //排序功能
		"orderClasses": false, //禁用列排序类
		"bInfo" : false, // 显示表格信息
		"bAutoWidth" : true, // 自适应宽度
		"bStateSave": true,   //下回访问时会显示上一次关闭页面时的内容
		
//		表格显示的数据
		columns : [ 
					{// 订单号
						"data" : "name",
					},  
					{// 订单号
						"data" : "sex",
					},  
					{// 订单号
						"data" : "age",
					}
		],
		"columnDefs" : [
			{
				"targets" : [3],
				"render" : function(data, type, full, meta) {
						return "<button onclick=\"Model.deleteStudentById('"+full.id+"')\" type=\"button\" class=\"btn btn-default\">"
							 		+"删除"
							  +"</button>"
				}
			},
			{
				"targets" : [4],
				"render" : function(data, type, full, meta) {
						return "<button onclick=\"Model.updateStudentById('"+full.id+"')\" type=\"button\" class=\"btn btn-default\">"
							 		+"修改"
							  +"</button>"
				}
			}

		]
	});
}