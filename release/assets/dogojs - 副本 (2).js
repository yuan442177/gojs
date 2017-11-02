/*流程图有2种状态：
1、编辑图形阶段：此时可以修改图形拓扑结构，添加和删除元素，编辑节点和连线的名称,。*名称和Aspen模型元素是一致的。
2、绑定输入参数阶段：利用node和link的name从Aspen模型检索输入参数。*不能移动block和link。
3、输入、运行和输出：用户点击流股或设备，配置设置输入参数；运行后，显示计算结果。
	输入阶段：流股和设备显示名称
	

	
	
作图阶段(stateFlag = 1：) 
1、常规gojs：添加、删除和修改node和link
2、关联Aspen元素：
3、关联Aspen参数
4、关联物料平衡

运行阶段：
1、设置输入参数


*/
function dis(){
	//isDrawing = true;//  是否作图阶段:元素名称
	//isRuning = true;// 是否运行阶段

	//partOnEditting = null;// 正在编辑的part
	//partKeyOnEditing = null;// 正在编辑的part的key
	//selectOnEdittingId = null;// 正在编辑的select的id
	//allTowShowAspenTemplates = [];// 允许显示的Aspen参数模板（数组）
    
	//function init(stateFlag) {
	//    stateFlag = 1;
	//    //stateFlag = 2;
	//	if(stateFlag==1){
	//		isDrawing = true;
	//		isRuning = false;
			
	//	}
	//	else if (stateFlag==2) {
	//		isDrawing = false;
	//		isRuning = true;
	//	}
		
	//	// isDrawing 是否处于编辑状态
	//	var urlOfImages = $("#urlOfImages").val();// 获取images的url，主要是svg图片
        
    //    var $$ = go.GraphObject.make;  // for conciseness in defining templates
    //    myDiagram =
    //      $$(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
    //        {
    //            isEnabled: true,
    //            allowMove: isDrawing ? true : false,
    //            allowLink: isDrawing ? true : false,
    //            allowRelink: isDrawing ? true : false,
    //            allowResize: isDrawing ? true : false,
	//			allowDrop: isDrawing ? true : false,
    //            //wjn 新增
	//			"animationManager.isEnabled":false,
	//			//"grid.visible": isDrawing ? true : false,
    //            initialContentAlignment: go.Spot.Center,
    //            allowDrop: isDrawing?true:false,  // must be true to accept drops from the Palette
    //            "LinkDrawn": showLinkLabel,  // this DiagramEvent listener is defined below
    //            //"LinkRelinked": true,
    //            "draggingTool.dragsLink": isDrawing?true:false,
    //            "draggingTool.isGridSnapEnabled": true,
    //            "linkingTool.isUnconnectedLinkValid": true,
    //            "linkingTool.portGravity": 20,
    //            "relinkingTool.isUnconnectedLinkValid": true,
	//			"rotatingTool.snapAngleMultiple": 90,//指定旋转角度//ouyang
	//			"rotatingTool.snapAngleEpsilon": 45,//指定旋转角度//ouyang
    //            "animationManager.duration": 800, // slightly longer than default (600ms) animation
    //            "undoManager.isEnabled": true  // enable undo & redo
    //        });// when the document is modified, add a "*" to the title and enable the "Save" button
	//		myDiagram.addDiagramListener("Modified", function (e) {
    //        var button = document.getElementById("SaveButton");
    //        if (button) button.disabled = !myDiagram.isModified;
    //        var idx = document.title.indexOf("*");
    //        if (myDiagram.isModified) {
    //            if (idx < 0) document.title += "*";
    //        } else {
    //            if (idx >= 0) document.title = document.title.substr(0, idx);
    //        }
    //    });
		
	//	// 整体监听双击
	//	myDiagram.addDiagramListener("ObjectDoubleClicked", function (e, obj) {
	//		var part = e.subject.part;
	//		//setPartOnInputing(part);
	//		/* var partName = "";// 部件元素名称
	//		var partType = "";// 部件元素类型 Stream或Other
	//		if (part instanceof go.Node)//节点
	//		{
	//			// 参数
	//			partType="Other";// 只区分流股和其他
	//			//alert('diag evetn:a node double clicked:' + part.data.text);
	//		}
	//		if (part instanceof go.Link)//节点
	//		{
	//			partType = "Stream";// 流股
	//			//alert('diag evetn:a link double clicked:' + part.data.text);
	//		} */
			
	//	});
		
		
    //    var partContextMenu;
	//	if(isDrawing)
	//	{
    //      partContextMenu = $$(go.Adornment, "Vertical",
    //          // makeButton("Group",
    //                     // function (e, obj) { e.diagram.commandHandler.groupSelection(); },
    //                     // function (o) { return o.diagram.commandHandler.canGroupSelection(); }),
    //          // makeButton("Ungroup",
    //                     // function (e, obj) { e.diagram.commandHandler.ungroupSelection(); },
    //                     // function (o) { return o.diagram.commandHandler.canUngroupSelection(); }),
	//		makeButton("设置Label",
	//			function(e, obj) {  // OBJ is this Button
	//				var contextmenu = obj.part;  // the Button is in the context menu Adornment
	//				var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context 
	//				setPartOnEditing0(part);
	//				partToDialog("dialogOfLabel");
	//				openDialog0("dialogOfLabel");
	//				// if (part instanceof go.Link) {
	//					// alert('link is clicked');	
	//				// }
	//				// else if (part instanceof go.Group) {
	//					// alert('group is clicked');
	//				// }
	//				// else{
	//					// alert('node is clicked');
	//				// }
	//		})
	//		,makeButton("关联Aspen元素",
	//			function(e, obj) {  // OBJ is this Button
	//				var contextmenu = obj.part;  // the Button is in the context menu Adornment
	//				var part = contextmenu.adornedPart;  
	//				//setPartOnEditing(part,"text");
	//				setPartOnEditing0(part);
	//				partToDialog("dialogOfAspenElement");
	//				openDialog0("dialogOfAspenElement");
	//		}),
	//		makeButton("关联Aspen参数",
	//			function(e, obj) {  // OBJ is this Button
	//				var contextmenu = obj.part;  // the Button is in the context menu Adornment
	//				var part = contextmenu.adornedPart; 
	//				setPartOnEditing0(part);
	//				_partToTable();//
	//				openDialog0("diaglogOfAspenParamBinding");
	//		}),
	//		makeButton("关联物料平衡",
	//			function(e, obj) {  // OBJ is this Button
					
	//				var contextmenu = obj.part;  // the Button is in the context menu Adornment
	//				var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context menu 
	//				setPartOnEditing0(part);					
	//				if (part instanceof go.Link) {
	//					partToDialog("diaglogOfBanlanceMedia");
	//					openDialog0("diaglogOfBanlanceMedia");
	//				}
	//				else if (part instanceof go.Node) {
	//					dialogToPart("diaglogOfTowerType");
	//					//alert('to open node diag of tower type');
	//					openDialog0("diaglogOfTowerType");
	//				}
					
	//			}),
    //        makeButton("设置输入参数",
    //              function (e, obj) {  // OBJ is this Button
    //                  var contextmenu = obj.part;  // the Button is in the context menu Adornment
    //                  var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context menu
    //                  // // // ////debugger;;
    //                  setPartOnEditing0(part);
    //                  if (_partToInputTable()) {
    //                      openDialog0("dialogOfRunInputs");
    //                  }

    //              }),
    //       /* makeButton("模型输入参数",
    //            function(e, obj) {  // OBJ is this Button
    //                var contextmenu = obj.part;  // the Button is in the context menu Adornment
    //                var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context menu
    //                setPartOnEditing0(part);
    //                _partToInputTable();
    //                    openDialog0("dialogOfRunInputs");
    //            })*/
	//		/*
	//		//wjn20170517新增
	//		makeButton("获取位置",
	//			function(e, obj) {  // OBJ is this Button
	//				var contextmenu = obj.part;  // the Button is in the context menu Adornment
	//				var part = contextmenu.adornedPart;
	//				setPartOnEditing0(part);
	//				var xpos=part.location.x;
	//				var ypos=part.location.y;
	//				var setloc=prompt("当前位置X="+ xpos + ", Y=" + ypos, xpos +" "+ ypos );
	//				if(setloc)
	//				{
	//					var newpos=go.Point.parse(setloc);
	//					//part.move(newpos);
	//					//alert(part.location);				
	//					//save();						
	//					//1. part.move(newpos); 直接move，再save
	//					//2. 找到key，再找到nodedataarry,再setdataproperty
	//					//var model = myDiagram.model;
	//					//model.startTransaction("update locations");//可以批量修改
	//					//var arr = model.nodeDataArray;
	//					//var data = arr.findNodeDataForKey(partKeyOnEditing);					
	//					//model.setDataProperty(data, "loc", newpos);	
	//					//model.commitTransaction("update locations");						
	//				}						
																	
	//		})
    //      );
	//	}
	//	else
	//	{	
		  
	//	  partContextMenu = $$(go.Adornment, "Vertical",makeButton("设置输入参数",
	//			function(e, obj) {  // OBJ is this Button
	//				var contextmenu = obj.part;  // the Button is in the context menu Adornment
	//				var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context menu 
	//				setPartOnEditing0(part);
	//				if(_partToInputTable())
	//				{
	//					openDialog0("dialogOfRunInputs");
	//				}
					
	//		})*/
    //      );
	//	}

    //    // Define the appearance and behavior for Nodes:

    //    // First, define the shared context menu for all Nodes, Links, and Groups.

    //    // To simplify this code we define a function for creating a context menu button:
}
isDrawing = true;//  是否作图阶段:元素名称
isRuning = true;// 是否运行阶段

partOnEditting = null;// 正在编辑的part
partKeyOnEditing = null;// 正在编辑的part的key
selectOnEdittingId = null;// 正在编辑的select的id
allTowShowAspenTemplates = [];// 允许显示的Aspen参数模板（数组）
function init(stateFlag) {

    //已经初始化数据
    //$("#isInitGoJs").val("1");

    if (stateFlag == 1) {
        isDrawing = true;
        isRuning = false;

    }
    else if (stateFlag == 2) {
        isDrawing = false;
        isRuning = true;
    }

    // isDrawing 是否处于编辑状态
    var urlOfImages = $("#urlOfImages").val();// 获取images的url，主要是svg图片

    var $$ = go.GraphObject.make;  // for conciseness in defining templates
    myDiagram =
      $$(go.Diagram, "myDiagramDiv",  // must name or refer to the DIV HTML element
        {
            isEnabled: true,
            allowMove: isDrawing ? true : false,
            allowLink: isDrawing ? true : false,
            allowRelink: isDrawing ? true : false,
            allowResize: isDrawing ? true : false,
            //autoScale: go.Diagram.Uniform,//加上去不能缩放
            initialAutoScale: go.Diagram.UniformToFill,//20170809缩放
            initialContentAlignment: go.Spot.Center,
            allowDrop: isDrawing ? true : false,  // must be true to accept drops from the Palette
            "LinkDrawn": showLinkLabel,  // this DiagramEvent listener is defined below
            //"LinkRelinked": true,
            "draggingTool.dragsLink": isDrawing ? true : false,
            "draggingTool.isGridSnapEnabled": false,//开启控制移动单位10px
            "linkingTool.isUnconnectedLinkValid": true,
            "linkingTool.portGravity": 20,
            "relinkingTool.isUnconnectedLinkValid": true,
            "rotatingTool.snapAngleMultiple": 90,//指定旋转角度//ouyang
            "rotatingTool.snapAngleEpsilon": 45,//指定旋转角度//ouyang
            "animationManager.duration": 800, // slightly longer than default (600ms) animation
            "undoManager.isEnabled": true  // enable undo & redo
        });// when the document is modified, add a "*" to the title and enable the "Save" button
    myDiagram.addDiagramListener("Modified", function (e) {
        var button = document.getElementById("SaveButton");
        if (button) button.disabled = !myDiagram.isModified;
        var idx = document.title.indexOf("*");
        if (myDiagram.isModified) {
            if (idx < 0) document.title += "*";
        } else {
            if (idx >= 0) document.title = document.title.substr(0, idx);
        }
    });

    // 整体监听双击
    myDiagram.addDiagramListener("ObjectDoubleClicked", function (e, obj) {




        var part = e.subject.part;
        //var contextmenu = obj.part;  // the Button is in the context menu Adornment
        //var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context menu 
        try {
            var isT = part.data.AspenElementName;
            if (isT.indexOf('T') == '-1') {
                return;
            }

            //加载单塔分析对用的下拉列表数据
            $("#SingTSpan").css("display", "block");
            //选择单塔分析数据
            //GetSingTChart("");
            window.parent.parent.generaFlowChart("6", "6");
        } catch (e) {

            try {
                //debugger;
                var name = part.data.text.replace(/\s+/g, "");;

                var numberIndex = name.indexOf('吸收');
                var indexName = name.substring(0, numberIndex);
                if (numberIndex == -1) {
                    numberIndex = name.indexOf('再生');
                    indexName = name.substring(0, numberIndex);
                } else {
                    indexName = name.substring(0, numberIndex);
                }
                var treeview = window.parent.parent.KendTreeView();//$('#treeview-organization').data("kendoTreeView");
                if (treeview) {

                    var treeNode = treeview.findByText(indexName); //根据节点文本进行搜索(请根据实际情况来定),类似的还有treeview.findByUid(id);
                    if (treeNode.length > 0) {
                        treeview.select(treeNode); //设置节点选中,
                        window.parent.parent.SetTreeSelectData();
                    } else {
                        var treeNode = treeview.findByText(indexName + "系统");
                        if (treeNode.length > 0) {
                            treeview.select(treeNode); //设置节点选中,
                            window.parent.parent.SetTreeSelectData();
                        } else {
                            //alert("跳转异常！");
                            return;
                        }
                    }

                }
                return;
            } catch (e) {
                return;
            }

        }

        //setPartOnInputing(part);
        /* var partName = "";// 部件元素名称
        var partType = "";// 部件元素类型 Stream或Other
        if (part instanceof go.Node)//节点
        {
            // 参数
            partType="Other";// 只区分流股和其他
            //alert('diag evetn:a node double clicked:' + part.data.text);
        }
        if (part instanceof go.Link)//节点
        {
            partType = "Stream";// 流股
            //alert('diag evetn:a link double clicked:' + part.data.text);
        } */

    });


    var partContextMenu;
    // if (isDrawing) {
    partContextMenu = $$(go.Adornment, "Vertical",
        // makeButton("Group",
                   // function (e, obj) { e.diagram.commandHandler.groupSelection(); },
                   // function (o) { return o.diagram.commandHandler.canGroupSelection(); }),
        // makeButton("Ungroup",
                   // function (e, obj) { e.diagram.commandHandler.ungroupSelection(); },
                   // function (o) { return o.diagram.commandHandler.canUngroupSelection(); }),
      //makeButton("设置Label",
      //    function (e, obj) {  // OBJ is this Button
      //        var contextmenu = obj.part;  // the Button is in the context menu Adornment
      //        var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context 
      //        setPartOnEditing0(part);
      //        partToDialog("dialogOfLabel");
      //        openDialog0("dialogOfLabel");
      //        // if (part instanceof go.Link) {
      //        // alert('link is clicked');	
      //        // }
      //        // else if (part instanceof go.Group) {
      //        // alert('group is clicked');
      //        // }
      //        // else{
      //        // alert('node is clicked');
      //        // }
      //    })
      //, makeButton("关联Aspen元素",
      //    function (e, obj) {  // OBJ is this Button
      //        var contextmenu = obj.part;  // the Button is in the context menu Adornment
      //        var part = contextmenu.adornedPart;
      //        //setPartOnEditing(part,"text");
      //        setPartOnEditing0(part);
      //        partToDialog("dialogOfAspenElement");
      //        openDialog0("dialogOfAspenElement");
      //    }),
      makeButton("修改Aspen参数",
          function (e, obj) {  // OBJ is this Button

              var contextmenu = obj.part;  // the Button is in the context menu Adornment
              var part = contextmenu.adornedPart;
              /*var isT = part.data.AspenElementName;
              if (isT.indexOf('T') == '-1') {
                  alert("只有T才能查看")
                  return;
              }*/
              setPartOnEditing0(part);
              _partToTable();//
              openDialog0("diaglogOfAspenParamBinding");
          })
      //, makeButton("查看中单塔分析",
      //    function (e, obj) {  // OBJ is this Button

      //        var contextmenu = obj.part;  // the Button is in the context menu Adornment
      //        var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context menu 
      //        var isT = part.data.AspenElementName;
      //        if (isT.indexOf('T') == '-1') {
      //            alert("只有T才能查看")
      //            return;
      //        }
      //        //加载单塔分析对用的下拉列表数据
      //        $("#SingTSpan").css("display", "block");
      //        //选择单塔分析数据
      //        GetSingTChart("");
      //        generaFlowChart("6", "6");

      //        //setPartOnEditing0(part);
      //        //if (part instanceof go.Link) {
      //        //    partToDialog("diaglogOfBanlanceMedia");
      //        //    openDialog0("diaglogOfBanlanceMedia");
      //        //}
      //        //else if (part instanceof go.Node) {
      //        //    dialogToPart("diaglogOfTowerType");
      //        //    //alert('to open node diag of tower type');
      //        //    openDialog0("diaglogOfTowerType");
      //        //}

      //    })
    );
    //  }
    // else {

    partContextMenu = $$(go.Adornment, "Vertical",
        makeButton("设置输入参数",
          function (e, obj) {  // OBJ is this Button
              var contextmenu = obj.part;  // the Button is in the context menu Adornment
              var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context menu 
              // // // ////debugger;;
              setPartOnEditing0(part);
              if (_partToInputTable()) {
                  openDialog0("dialogOfRunInputs");
              }

          }),
    //20170726左键设置方向菜单
    makeButton("设置去向",
        function (e, obj) {  // OBJ is this Button
            debugger
            var contextmenu = obj.part;  // the Button is in the context menu Adornment
            var part = contextmenu.adornedPart;  // the adornedPart is the Part that the context menu
            // // // ////debugger;;
            setPartOnEditing0(part);
            partToDialogF("dialogF");
                openDialog0("dialogF");

        })
    );
    //}

    // Define the appearance and behavior for Nodes:

    // First, define the shared context menu for all Nodes, Links, and Groups.

    // To simplify this code we define a function for creating a context menu button:
        function makeButton(text, action, visiblePredicate) {
            return $$("ContextMenuButton",
                     $$(go.TextBlock, text),
                     { click: action },
                     // don't bother with binding GraphObject.visible if there's no predicate
                     visiblePredicate ? new go.Binding("visible", "", visiblePredicate).ofObject() : {});
        }

        function groupInfo(adornment) {  // takes the tooltip or context menu, not a group node data object
            var g = adornment.adornedPart;  // get the Group that the tooltip adorns
            var mems = g.memberParts.count;
            var links = 0;
            g.memberParts.each(function (part) {
                if (part instanceof go.Link) links++;
            });
            return "Group " + g.data.key + ": " + g.data.text + "\n" + mems + " members including " + links + " links";
        }
        // helper definitions for node templates
        function nodeStyle() {
            return [{locationSpot: new go.Spot(0.5, 0.5), locationObjectName: "PICTURE", resizable:true,
			// this context menu Adornment is shared by all nodes
			contextMenu: partContextMenu,
			resizeObjectName: "PICTURE"},    //将图片与对象进行绑定，实现同时的缩放//ouyang
              // The Node.location comes from the "loc" property of the node data,
              // converted by the Point.parse static method.
              // If the Node.location is changed, it updates the "loc" property of the node data,
              // converting back using the Point.stringify static method.
              new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
              {
                  // the Node.location is at the center of each node
                  locationSpot: go.Spot.Center,
                  //isShadowed: true,
                  //shadowColor: "#888",
                  // handle mouse enter/leave events to show/hide the ports
                  mouseEnter: function (e, obj) { showPorts(obj.part, true); },
                  mouseLeave: function (e, obj) { showPorts(obj.part, false); },
                  toolTip: $$(go.Adornment, "Auto",
                          $$(go.Shape, { fill: "#FFFFCC" }),
                          $$(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                                  new go.Binding("text", "", function (data) { return data.label }))
                  )
              }
			  //设置旋转手柄//ouyang
			  ,new go.Binding("angle").makeTwoWay(),
                    {
                        // the Node.location is at the center of each node
                        locationSpot: go.Spot.Center,
                        //isShadowed: true,
                        //shadowColor: "#888",
                        // handle mouse enter/leave events to show/hide the ports
                        mouseEnter: function (e, obj) {
                            showPorts(obj.part, true);
                        },
                        mouseLeave: function (e, obj) {
                            showPorts(obj.part, false);
                        },
                        rotatable: true, rotateObjectName:"PICTURE"
                    }
			  //将图片与旋转功能进行绑定，操纵旋转柄时仅对图片有效(对文本框和锚点位置无效)//ouyang
            ];
        }

        // Define a function for creating a "port" that is normally transparent.
        // The "name" is used as the GraphObject.portId, the "spot" is used to control how links connect
        // and where the port is positioned on the node, and the boolean "output" and "input" arguments
        // control whether the user can draw links from or to the port.
        function makePort(name, spot, output, input) {
            // the port is basically just a small circle that has a white stroke when it is made visible

            //tag position
            return $$(go.Shape, "Circle",
                     {
                         fill: "transparent",/*transparent*/
                         stroke: null,  // this is changed to "white" in the showPorts function
                         desiredSize: new go.Size(8, 8),
                         alignment: spot, alignmentFocus: spot,  // align the port on the main Shape
                         portId: name,  // declare this object to be a "port"
                         fromSpot: spot, toSpot: spot,  // declare where links may connect at this port
                         //fromLinkable: true, toLinkable: true,
                         fromLinkable: output, toLinkable: input,  // declare whether the user may draw links to/from here
                         cursor: "pointer"  // show a different cursor to indicate potential link point
                     });
        }
        function makePortX(name, spot1, spot2, output, input) {
            return $$(go.Shape, "Circle",
                     {
                         fill: "transparent",/*transparent*/
                         stroke: null,  // this is changed to "white" in the showPorts function
                         desiredSize: new go.Size(8, 8),
                         alignment: spot1, alignmentFocus: spot1,  // align the port on the main Shape
                         portId: name,  // declare this object to be a "port"
                         fromSpot: spot2, toSpot: spot2,  // declare where links may connect at this port
                         //fromLinkable: true, toLinkable: true,
                         fromLinkable: output, toLinkable: input,  // declare whether the user may draw links to/from here
                         cursor: "pointer"  // show a different cursor to indicate potential link point
                     });
        }
        
        // define the Node templates for regular nodes

        var lightText = 'black';//the color of Text at block //ouyang
        myDiagram.nodeTemplateMap.add("",  // the default category
          $$(go.Node, "Spot", nodeStyle(),
            // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
            $$(go.Panel, "Auto",
              $$(go.Shape, "Rectangle",
                { fill: "#00A9C9", stroke: null },
                new go.Binding("figure", "figure")),
              $$(go.TextBlock,
                {
                    font: "bold 11pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            //// four named ports, one on each side:
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
            makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
            makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
            makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
          ));
          
       function addNodeTemp(newName,newSrc,newWidth,newHeight)
       {
            myDiagram.nodeTemplateMap.add(
            newName,  // the block category
            $$(go.Node, "Spot", nodeStyle(),
                // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
                $$(go.Panel, "Auto",
                $$(go.Picture,
                    {
					    name: "PICTURE",
                        source: newSrc,
                        width: newWidth,
                        height: newHeight
                        //background:"gray"
                    }
                ),
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "white",
                        opacity: 0.7,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                )
                //// four named ports, one on each side:
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
            makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
            makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
            makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
            )
         );
       }

	   //新增四个函数用于构建文字在图标以外的对象//ouyang
       function addNodeTempAbove(newName,newSrc,newWidth,newHeight)
       {//文字在图像上方
            myDiagram.nodeTemplateMap.add(
            newName,
            $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "white",
                        opacity: 0.7,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                new go.Binding("text").makeTwoWay()),
                $$(go.Panel, "Auto",
                $$(go.Picture,
                    {
					    name: "PICTURE",
                        source: newSrc,
                        width: newWidth,
                        height: newHeight
                        //background:"gray"
                    }
                ),
                makePort("T", go.Spot.Top, true, true),
				makePort("L", go.Spot.Left, true, true),
				makePort("R", go.Spot.Right, true, true),
				makePort("B", go.Spot.Bottom, true, true),
				makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
				makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
				makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
				makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
                )
            )
         );
       }
       function addNodeTempBelow(newName,newSrc,newWidth,newHeight)
       {//文字在图像下方
            myDiagram.nodeTemplateMap.add(
            newName,
            $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
                $$(go.Panel, "Auto",
                $$(go.Picture,
                    {
					    name: "PICTURE",
                        source: newSrc,
                        width: newWidth,
                        height: newHeight
                        //background:"gray"
                    }
                ),
				makePort("T", go.Spot.Top, true, true),
				makePort("L", go.Spot.Left, true, true),
				makePort("R", go.Spot.Right, true, true),
				makePort("B", go.Spot.Bottom, true, true),
				makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
				makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
				makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
				makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
                ), 
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "white",
                        opacity: 0.7,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            )
         );
       }
       function addNodeTempLeft(newName,newSrc,newWidth,newHeight)
       {//文字在图像左侧
            myDiagram.nodeTemplateMap.add(
            newName,
            $$(go.Node, "Horizontal", nodeStyle(),//Horizontal水平;Vertical垂直
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "white",
                        opacity: 0.7,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay()),
                $$(go.Panel, "Auto",
                $$(go.Picture,
                    {
					    name: "PICTURE",
                        source: newSrc,
                        width: newWidth,
                        height: newHeight
                        //background:"gray"
                    }
                ),
                makePort("T", go.Spot.Top, true, true),
				makePort("L", go.Spot.Left, true, true),
				makePort("R", go.Spot.Right, true, true),
				makePort("B", go.Spot.Bottom, true, true),
				makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
				makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
				makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
				makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
                )
            )
         );
       }
       function addNodeTempRight(newName,newSrc,newWidth,newHeight)
       {//文字在图像右侧
            myDiagram.nodeTemplateMap.add(
            newName,
            $$(go.Node, "Horizontal", nodeStyle(),//Horizontal水平;Vertical垂直
                $$(go.Panel, "Auto",
                $$(go.Picture,
                    {
					    name: "PICTURE",
                        source: newSrc,
                        width: newWidth,
                        height: newHeight
                        //background:"gray"
                    }
                ),
				makePort("T", go.Spot.Top, true, true),
				makePort("L", go.Spot.Left, true, true),
				makePort("R", go.Spot.Right, true, true),
				makePort("B", go.Spot.Bottom, true, true),
				makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
				makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
				makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
				makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
                ), 
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "white",
                        opacity: 0.7,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            )
         );
       }
	   //新增四个函数用于构建文字在图标以外的对象//ouyang
	   
	   //新增一套五个函数构建节点对象(四角锚点上下出线)//ouyang
       function addNodeTempX(newName,newSrc,newWidth,newHeight)
       {
            myDiagram.nodeTemplateMap.add(
            newName,  // the block category
            $$(go.Node, "Spot", nodeStyle(),
                // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
                $$(go.Panel, "Auto",
                $$(go.Picture,
                    {
					    name: "PICTURE",
                        source: newSrc,
                        width: newWidth,
                        height: newHeight
                        //background:"gray"
                    }
                ),
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "white",
                        opacity: 0.7,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                )
                //// four named ports, one on each side:
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", go.Spot.TopLeft, go.Spot.Top, true, true),
            makePortX("TR", go.Spot.TopRight, go.Spot.Top, true, true),
            makePortX("BL", go.Spot.BottomLeft, go.Spot.Bottom, true, true),
            makePortX("BR", go.Spot.BottomRight, go.Spot.Bottom, true, true)
            )
         );
       }
       function addNodeTempAboveX(newName,newSrc,newWidth,newHeight)
       {//文字在图像上方
            myDiagram.nodeTemplateMap.add(
            newName,
            $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "white",
                        opacity: 0.7,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                new go.Binding("text").makeTwoWay()),
                $$(go.Panel, "Auto",
                $$(go.Picture,
                    {
					    name: "PICTURE",
                        source: newSrc,
                        width: newWidth,
                        height: newHeight
                        //background:"gray"
                    }
                ),
                makePort("T", go.Spot.Top, true, true),
				makePort("L", go.Spot.Left, true, true),
				makePort("R", go.Spot.Right, true, true),
				makePort("B", go.Spot.Bottom, true, true),
				makePortX("TL", go.Spot.TopLeft, go.Spot.Top, true, true),
				makePortX("TR", go.Spot.TopRight, go.Spot.Top, true, true),
				makePortX("BL", go.Spot.BottomLeft, go.Spot.Bottom, true, true),
				makePortX("BR", go.Spot.BottomRight, go.Spot.Bottom, true, true)
                )
            )
         );
       }
       function addNodeTempBelowX(newName,newSrc,newWidth,newHeight)
       {//文字在图像下方
            myDiagram.nodeTemplateMap.add(
            newName,
            $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
                $$(go.Panel, "Auto",
                $$(go.Picture,
                    {
					    name: "PICTURE",
                        source: newSrc,
                        width: newWidth,
                        height: newHeight
                        //background:"gray"
                    }
                ),
				makePort("T", go.Spot.Top, true, true),
				makePort("L", go.Spot.Left, true, true),
				makePort("R", go.Spot.Right, true, true),
				makePort("B", go.Spot.Bottom, true, true),
            	makePortX("TL", go.Spot.TopLeft, go.Spot.Top, true, true),
            	makePortX("TR", go.Spot.TopRight, go.Spot.Top, true, true),
            	makePortX("BL", go.Spot.BottomLeft, go.Spot.Bottom, true, true),
            	makePortX("BR", go.Spot.BottomRight, go.Spot.Bottom, true, true)
                ), 
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "white",
                        opacity: 0.7,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            )
         );
       }
       function addNodeTempLeftX(newName,newSrc,newWidth,newHeight)
       {//文字在图像左侧
            myDiagram.nodeTemplateMap.add(
            newName,
            $$(go.Node, "Horizontal", nodeStyle(),//Horizontal水平;Vertical垂直
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "white",
                        opacity: 0.7,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay()),
                $$(go.Panel, "Auto",
                $$(go.Picture,
                    {
					    name: "PICTURE",
                        source: newSrc,
                        width: newWidth,
                        height: newHeight
                        //background:"gray"
                    }
                ),
                makePort("T", go.Spot.Top, true, true),
				makePort("L", go.Spot.Left, true, true),
				makePort("R", go.Spot.Right, true, true),
				makePort("B", go.Spot.Bottom, true, true),
            	makePortX("TL", go.Spot.TopLeft, go.Spot.Top, true, true),
            	makePortX("TR", go.Spot.TopRight, go.Spot.Top, true, true),
            	makePortX("BL", go.Spot.BottomLeft, go.Spot.Bottom, true, true),
            	makePortX("BR", go.Spot.BottomRight, go.Spot.Bottom, true, true)
                )
            )
         );
       }
       function addNodeTempRightX(newName,newSrc,newWidth,newHeight)
       {//文字在图像右侧
            myDiagram.nodeTemplateMap.add(
            newName,
            $$(go.Node, "Horizontal", nodeStyle(),//Horizontal水平;Vertical垂直
                $$(go.Panel, "Auto",
                $$(go.Picture,
                    {
					    name: "PICTURE",
                        source: newSrc,
                        width: newWidth,
                        height: newHeight
                        //background:"gray"
                    }
                ),
				makePort("T", go.Spot.Top, true, true),
				makePort("L", go.Spot.Left, true, true),
				makePort("R", go.Spot.Right, true, true),
				makePort("B", go.Spot.Bottom, true, true),
            	makePortX("TL", go.Spot.TopLeft, go.Spot.Top, true, true),
            	makePortX("TR", go.Spot.TopRight, go.Spot.Top, true, true),
            	makePortX("BL", go.Spot.BottomLeft, go.Spot.Bottom, true, true),
            	makePortX("BR", go.Spot.BottomRight, go.Spot.Bottom, true, true)
                ), 
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "white",
                        opacity: 0.7,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            )
         );
       }
	   //新增一套五个函数构建节点对象(四角锚点上下出线)//ouyang

	    //addNodeTemp(newName,newSrc,newWidth,newHeight);
		myDiagram.nodeTemplateMap.add("BorderR",//向右界区//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"22_RBoundary.png",
                    width: 52.5,
                    height: 15
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePort("L", go.Spot.Left, true, true),
			makePort("R", go.Spot.Right, true, true)
        ));
		myDiagram.nodeTemplateMap.add("BorderL",//向左界区//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"23_LBoundary.png",
                    width: 52.5,
                    height: 15
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePort("L", go.Spot.Left, true, true),
			makePort("R", go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("MixeZR",//桶型混合器//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"01_Mixer.png",
                    width: 40.462,
                    height: 55.74
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", new go.Spot(0,0.25), go.Spot.Left, true, true),
            makePortX("TR", new go.Spot(1,0.25), go.Spot.Right, true, true),
            makePortX("BL", new go.Spot(0,0.75), go.Spot.Left, true, true),
            makePortX("BR", new go.Spot(1,0.75), go.Spot.Right, true, true)
        ));
		myDiagram.nodeTemplateMap.add("Mixer2",//节点混合器//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"02_Mixer.png",
                    width: 24.152,
                    height: 30.232
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
            makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
            makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
            makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("Mixer3",//三角混合器//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"03_Mixer.png",
                    width: 28.666,
                    height: 46.364
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePortX("TL", new go.Spot(0,0.2), go.Spot.Left, true, true),
            makePortX("BL", new go.Spot(0,0.8), go.Spot.Left, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("Flash21",//卧式罐//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"05_Flash2.png",
                    width: 53.786,
                    height: 33.036
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("Flash22",//竖式罐//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"06_Flash2.png",
                    width: 32.916,
                    height: 54.228
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", new go.Spot(0,0.25), go.Spot.Left, true, true),
            makePortX("TR", new go.Spot(1,0.25), go.Spot.Right, true, true),
            makePortX("BL", new go.Spot(0,0.75), go.Spot.Left, true, true),
            makePortX("BR", new go.Spot(1,0.75), go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("Sep",//填料罐//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"07_Sep.png",
                    width: 35.856,
                    height: 54.232
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", new go.Spot(0,0.25), go.Spot.Left, true, true),
            makePortX("TR", new go.Spot(1,0.25), go.Spot.Right, true, true),
            makePortX("BL", new go.Spot(0,0.75), go.Spot.Left, true, true),
            makePortX("BR", new go.Spot(1,0.75), go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("Heater",//简单换热器//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"08_Heater.png",
                    width: 30.108,
                    height: 29.832
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("HeatX",//换热器//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"09_HeatX.png",
                    width: 53.862,
                    height: 32.84
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePortX("TL", new go.Spot(0.2,0), go.Spot.Top, true, true),
            makePortX("TR", new go.Spot(0.8,0), go.Spot.Top, true, true),
            makePortX("BL", new go.Spot(0.2,1), go.Spot.Bottom, true, true),
            makePortX("BR", new go.Spot(0.8,1), go.Spot.Bottom, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("HeaterA",//空冷器//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"21_Heater.png",
                    width: 52.64,
                    height: 23.976
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("RadFrac1",//塔//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"10_RadFrac.png",
                    width: 30.06,
                    height: 89.912
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", new go.Spot(0,0.09), go.Spot.Left, true, true),
            makePortX("TR", new go.Spot(1,0.09), go.Spot.Right, true, true),
            makePortX("BL", new go.Spot(0,0.91), go.Spot.Left, true, true),
            makePortX("BR", new go.Spot(1,0.91), go.Spot.Right, true, true),
			makePortX("TLS", new go.Spot(0,0.3), go.Spot.Left, true, true),
            makePortX("TRS", new go.Spot(1,0.3), go.Spot.Right, true, true),
            makePortX("BLS", new go.Spot(0,0.7), go.Spot.Left, true, true),
            makePortX("BRS", new go.Spot(1,0.7), go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("RadFrac2",//含再沸器的塔//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"11_RadFrac.png",
                    width: 57.208,
                    height: 111.278
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePortX("T", new go.Spot(0.225,0), go.Spot.Top, true, true),
            makePortX("L", new go.Spot(0,0.4), go.Spot.Left, true, true),
            makePortX("R", new go.Spot(0.45,0.4), go.Spot.Right, true, true),
            makePortX("B", new go.Spot(0.225,0.88), go.Spot.Bottom, true, true),
            makePortX("TL", new go.Spot(0,0.072), go.Spot.Left, true, true),
            makePortX("TR", new go.Spot(0.45,0.072), go.Spot.Right, true, true),
            makePortX("BL", new go.Spot(0,0.728), go.Spot.Left, true, true),
            makePortX("BR", new go.Spot(0.45,0.728), go.Spot.Right, true, true),
			makePortX("TLS", new go.Spot(0,0.236), go.Spot.Left, true, true),
            makePortX("TRS", new go.Spot(0.45,0.236), go.Spot.Right, true, true),
            makePortX("BLS", new go.Spot(0,0.564), go.Spot.Left, true, true),
            makePortX("BRS", new go.Spot(0.45,0.564), go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("RadFrac3",//含再沸冷凝的塔//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"12_RadFrac.png",
                    width: 60.22,
                    height: 135.164
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePortX("T", new go.Spot(0.25,0.0957), go.Spot.Top, true, true),
            makePortX("L", new go.Spot(0,0.5), go.Spot.Left, true, true),
            makePortX("R", new go.Spot(0.5,0.5), go.Spot.Right, true, true),
            makePortX("B", new go.Spot(0.25,0.9), go.Spot.Bottom, true, true),
            makePortX("TL", new go.Spot(0,0.225), go.Spot.Left, true, true),
            makePortX("TR", new go.Spot(0.5,0.225), go.Spot.Right, true, true),
            makePortX("BL", new go.Spot(0,0.775), go.Spot.Left, true, true),
            makePortX("BR", new go.Spot(0.5,0.775), go.Spot.Right, true, true),
			makePortX("TLS", new go.Spot(0,0.3625), go.Spot.Left, true, true),
            makePortX("TRS", new go.Spot(0.5,0.3625), go.Spot.Right, true, true),
            makePortX("BLS", new go.Spot(0,0.6375), go.Spot.Left, true, true),
            makePortX("BRS", new go.Spot(0.5,0.6375), go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("RadFrac4",//双层填料塔//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"13_RadFrac.png",
                    width: 30.024,
                    height: 70.646
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", new go.Spot(0,0.15), go.Spot.Left, true, true),
            makePortX("TR", new go.Spot(1,0.15), go.Spot.Right, true, true),
            makePortX("BL", new go.Spot(0,0.85), go.Spot.Left, true, true),
            makePortX("BR", new go.Spot(1,0.85), go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("Extract",//单层填料塔//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"14_Extract.png",
                    width: 31.368,
                    height: 69.038
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", new go.Spot(0,0.13), go.Spot.Left, true, true),
            makePortX("TR", new go.Spot(1,0.13), go.Spot.Right, true, true),
            makePortX("BL", new go.Spot(0,0.87), go.Spot.Left, true, true),
            makePortX("BR", new go.Spot(1,0.87), go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("Pump",//向右泵//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"15_Pump.png",
                    width: 44.814,
                    height: 39.186
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePortX("TR", go.Spot.TopRight, go.Spot.Top, true, true),
            makePortX("L", new go.Spot(0.05,0.37), go.Spot.Left, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("ReversePump",//向左泵//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"04_Pump.png",
                    width: 44.814,
                    height: 39.186
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePortX("R", new go.Spot(0.95,0.37), go.Spot.Right, true, true),
            makePortX("TL", go.Spot.TopLeft, go.Spot.Top, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("Valve",//阀门//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"16_Valve.png",
                    width: 34.54,
                    height: 21.072
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("Mult",//乘子器//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"17_Mult.png",
                    width: 21.057,
                    height: 20.904
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("Dupl",//复制器//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"18_Dupl.png",
                    width: 21.097,
                    height: 21.09
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("FSplit1",//节点分割器//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"19_FSplit.png",
                    width: 23.984,
                    height: 30.224
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
            makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
            makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
            makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
        ));
	    myDiagram.nodeTemplateMap.add("FSplit2",//三角分割器//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"20_FSplit.png",
                    width: 30.459,
                    height: 50.823
                }
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            ,makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePortX("TR", new go.Spot(1,0.2), go.Spot.Right, true, true),
            makePortX("BR", new go.Spot(1,0.8), go.Spot.Right, true, true)
        ));
	    //addNodeTemp(newName,newSrc,newWidth,newHeight);//以下是应甲方要求增补的//ouyang
		myDiagram.nodeTemplateMap.add("NPump",//文字在上//向右泵//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"31_Pump.png",
                    width: 43.655,
                    height: 29.705
                },
                //ysh 20170626存储控件大小
                new go.Binding("width","width").makeTwoWay(),
                new go.Binding("height","height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
			makePortX("T", new go.Spot(0.6,0), go.Spot.Right, true, true),
            makePortX("L", new go.Spot(0,0.35), go.Spot.Left, true, true)
            )
        ));
	    myDiagram.nodeTemplateMap.add("NRPump",//文字在上//向左泵//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"32_Pump.png",
                    width: 44.720,
                    height: 29.755
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            makePortX("T", new go.Spot(0.4,0), go.Spot.Left, true, true),
            makePortX("R", new go.Spot(1,0.35), go.Spot.Right, true, true)
            )
        ));
	    myDiagram.nodeTemplateMap.add("NHeater",//文字在上//向右简单换热器//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"33_Heater.png",
                    width: 44.796,
                    height: 28.112
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            makePortX("L", new go.Spot(0,0.58), go.Spot.Left, true, true),
			makePortX("R", new go.Spot(1,0.58), go.Spot.Right, true, true)
            )
        ));
	    myDiagram.nodeTemplateMap.add("NRHeater",//文字在上//向左简单换热器//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"34_Heater.png",
                    width: 44.800,
                    height: 28.164
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            makePortX("L", new go.Spot(0,0.58), go.Spot.Left, true, true),
			makePortX("R", new go.Spot(1,0.58), go.Spot.Right, true, true)
            )
        ));
	    myDiagram.nodeTemplateMap.add("NHeatX",//文字在上//换热器//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"35_HeaterX.png",
                    width: 43.644,
                    height: 43.520
                }
            ),
            makePort("T", go.Spot.Top, true, true),
			makePort("L", go.Spot.Left, true, true),
			makePort("R", go.Spot.Right, true, true),
			makePort("B", go.Spot.Bottom, true, true)
            )
        ));
	    myDiagram.nodeTemplateMap.add("AirCooler",//文字在上//空冷器//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"36_AirCooler.png",
                    width: 36.640,
                    height: 27.444
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            makePortX("L", new go.Spot(0.05,0.5), go.Spot.Left, true, true),
			makePortX("R", new go.Spot(0.95,0.5), go.Spot.Right, true, true)
            )
        ));
	    myDiagram.nodeTemplateMap.add("FlashA",//文字在下//竖式罐//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"37_FlashA.png",
                    width: 21.442,
                    height: 39.120
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
			makePort("T", go.Spot.Top, true, true),
			makePort("L", go.Spot.Left, true, true),
			makePort("R", go.Spot.Right, true, true),
			makePort("B", go.Spot.Bottom, true, true),
			makePortX("TL", new go.Spot(0,0.05), go.Spot.Left, true, true),
			makePortX("TR", new go.Spot(1,0.05), go.Spot.Right, true, true),
			makePortX("BL", new go.Spot(0,0.95), go.Spot.Left, true, true),
			makePortX("BR", new go.Spot(1,0.95), go.Spot.Right, true, true)
            ), 
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
        ));
	    myDiagram.nodeTemplateMap.add("FlashB",//文字在右//卧式罐//ouyang
        $$(go.Node, "Horizontal", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"38_FlashB.png",
                    width: 36.700,
                    height: 20.155
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
			makePort("T", go.Spot.Top, true, true),
			makePort("L", go.Spot.Left, true, true),
			makePort("R", go.Spot.Right, true, true),
			makePort("B", go.Spot.Bottom, true, true),
			makePortX("TL", new go.Spot(0.05,0.05), go.Spot.Left, true, true),
			makePortX("TR", new go.Spot(0.95,0.05), go.Spot.Right, true, true),
			makePortX("BL", new go.Spot(0.05,0.95), go.Spot.Left, true, true),
			makePortX("BR", new go.Spot(0.95,0.95), go.Spot.Right, true, true)
            ), 
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
        ));
	    myDiagram.nodeTemplateMap.add("FlashC",//文字在右//含吸收柱卧式罐//ouyang
        $$(go.Node, "Horizontal", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"39_FlashC.png",
                    width: 36.700,
                    height: 48.350
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
			makePortX("T", new go.Spot(0.72,0), go.Spot.Top, true, true),
			makePortX("L", new go.Spot(0.6,0.45), go.Spot.Left, true, true),
			makePortX("R", new go.Spot(0.83,0.45), go.Spot.Right, true, true),
			makePort("B", go.Spot.Bottom, true, true),
			makePortX("TL", new go.Spot(0.6,0.05), go.Spot.Left, true, true),
			makePortX("TR", new go.Spot(0.83,0.05), go.Spot.Right, true, true),
			makePortX("BL", new go.Spot(0,0.84), go.Spot.Left, true, true),
			makePortX("BR", new go.Spot(1,0.84), go.Spot.Right, true, true)
            ), 
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
        ));
	    myDiagram.nodeTemplateMap.add("ColA",//文字在上//填料塔//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"40_ColA.png",
                    width: 37.964,
                    height: 114.760
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            makePort("T", go.Spot.Top, true, true),
			makePort("L", go.Spot.Left, true, true),
			makePort("R", go.Spot.Right, true, true),
			makePort("B", go.Spot.Bottom, true, true),
			makePortX("TL", new go.Spot(0,0.08), go.Spot.Left, true, true),
			makePortX("TR", new go.Spot(1,0.08), go.Spot.Right, true, true),
			makePortX("BL", new go.Spot(0,0.92), go.Spot.Left, true, true),
			makePortX("BR", new go.Spot(1,0.92), go.Spot.Right, true, true),
			makePortX("TLS", new go.Spot(0,0.29), go.Spot.Left, true, true),
			makePortX("TRS", new go.Spot(1,0.29), go.Spot.Right, true, true),
			makePortX("BLS", new go.Spot(0,0.71), go.Spot.Left, true, true),
			makePortX("BRS", new go.Spot(1,0.71), go.Spot.Right, true, true)
            )
        ));
	    myDiagram.nodeTemplateMap.add("ColB",//文字在上//板式塔//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"41_ColB.png",
                    width: 37.920,
                    height: 109.364
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            makePort("T", go.Spot.Top, true, true),
			makePort("L", go.Spot.Left, true, true),
			makePort("R", go.Spot.Right, true, true),
			makePort("B", go.Spot.Bottom, true, true),
			makePortX("TL", new go.Spot(0,0.08), go.Spot.Left, true, true),
			makePortX("TR", new go.Spot(1,0.08), go.Spot.Right, true, true),
			makePortX("BL", new go.Spot(0,0.92), go.Spot.Left, true, true),
			makePortX("BR", new go.Spot(1,0.92), go.Spot.Right, true, true),
			makePortX("TLS", new go.Spot(0,0.29), go.Spot.Left, true, true),
			makePortX("TRS", new go.Spot(1,0.29), go.Spot.Right, true, true),
			makePortX("BLS", new go.Spot(0,0.71), go.Spot.Left, true, true),
			makePortX("BRS", new go.Spot(1,0.71), go.Spot.Right, true, true)
            )
        ));
	    myDiagram.nodeTemplateMap.add("ColC",//文字在上//含再沸器板式塔//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"42_ColC.png",
                    width: 80.596,
                    height: 149.669
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            makePortX("T", new go.Spot(0.24,0), go.Spot.Top, true, true),
			makePortX("L", new go.Spot(0,0.3725), go.Spot.Left, true, true),
			makePortX("R", new go.Spot(0.48,0.3725), go.Spot.Right, true, true),
			makePortX("B", new go.Spot(0.21,0.88), go.Spot.Bottom, true, true),
			makePortX("TL", new go.Spot(0,0.065), go.Spot.Left, true, true),
			makePortX("TR", new go.Spot(0.48,0.065), go.Spot.Right, true, true),
			makePortX("BL", new go.Spot(0,0.68), go.Spot.Left, true, true),
			makePortX("BR", new go.Spot(0.48,0.68), go.Spot.Right, true, true),
			makePortX("TLS", new go.Spot(0,0.21875), go.Spot.Left, true, true),
			makePortX("TRS", new go.Spot(0.48,0.21875), go.Spot.Right, true, true),
			makePortX("BLS", new go.Spot(0,0.52625), go.Spot.Left, true, true),
			makePortX("BRS", new go.Spot(0.48,0.52625), go.Spot.Right, true, true)
            )
        ));
	    myDiagram.nodeTemplateMap.add("ColD",//文字在上//含再沸器和冷凝器的板式塔//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"43_ColD.png",
                    width: 80.596,
                    height: 175.396
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            makePortX("T", new go.Spot(0.23,0.1), go.Spot.Top, true, true),
			makePortX("L", new go.Spot(0,0.5), go.Spot.Left, true, true),
			makePortX("R", new go.Spot(0.43,0.5), go.Spot.Right, true, true),
			makePortX("B", new go.Spot(0.2,0.9), go.Spot.Bottom, true, true),
			makePortX("TL", new go.Spot(0,0.25), go.Spot.Left, true, true),
			makePortX("TR", new go.Spot(0.43,0.25), go.Spot.Right, true, true),
			makePortX("BL", new go.Spot(0,0.74), go.Spot.Left, true, true),
			makePortX("BR", new go.Spot(0.43,0.74), go.Spot.Right, true, true),
			makePortX("TLS", new go.Spot(0,0.375), go.Spot.Left, true, true),
			makePortX("TRS", new go.Spot(0.43,0.375), go.Spot.Right, true, true),
			makePortX("BLS", new go.Spot(0,0.62), go.Spot.Left, true, true),
			makePortX("BRS", new go.Spot(0.43,0.62), go.Spot.Right, true, true)
            )
        ));
	    myDiagram.nodeTemplateMap.add("NBorderR",//文字在下//界区向右//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"44_REdge.png",
                    width: 17.653,
                    height: 9.495
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
			makePort("L", go.Spot.Left, true, true),
			makePort("R", go.Spot.Right, true, true)
            ), 
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
        ));
		myDiagram.nodeTemplateMap.add("NBorderL",//文字在下//界区向左//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"45_LEdge.png",
                    width: 17.653,
                    height: 9.495
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
			makePort("L", go.Spot.Left, true, true),
			makePort("R", go.Spot.Right, true, true)
            ), 
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
        ));
		myDiagram.nodeTemplateMap.add("Nmix",//文字在内//汇合点//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"46_MixSplit.png",
                    width: 5.758,
                    height: 5.758
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
            makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
            makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
            makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
        ));
		myDiagram.nodeTemplateMap.add("Nsplit",//文字在内//分割点//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"46_MixSplit.png",
                    width: 10,
                    height: 10
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
            )
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
            makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
            makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
            makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
        ));
		myDiagram.nodeTemplateMap.add("FlashD",//文字在右//含吸收柱的卧式罐//ouyang
        $$(go.Node, "Horizontal", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"47_FlashD.png",
                    width: 42.448,
                    height: 42.678
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
			makePortX("T", new go.Spot(0.74,0), go.Spot.Top, true, true),
			makePortX("L", new go.Spot(0.6,0.45), go.Spot.Left, true, true),
			makePortX("R", new go.Spot(0.88,0.45), go.Spot.Right, true, true),
			makePort("B", go.Spot.Bottom, true, true),
			makePortX("TL", new go.Spot(0.6,0.05), go.Spot.Left, true, true),
			makePortX("TR", new go.Spot(0.88,0.05), go.Spot.Right, true, true),
			makePortX("BL", new go.Spot(0,0.83), go.Spot.Left, true, true),
			makePortX("BR", new go.Spot(1,0.83), go.Spot.Right, true, true)
            ), 
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
        ));
		myDiagram.nodeTemplateMap.add("N2HeatX",//文字在上//换热器//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"48_HeatX.png",
                    width: 53.060,
                    height: 23.845
                },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
            ),
            makePort("L", go.Spot.Left, true, true),
			makePort("R", go.Spot.Right, true, true),
			makePortX("TL", new go.Spot(0.23,0), go.Spot.Top, true, true),
			makePortX("TR", new go.Spot(0.77,0), go.Spot.Top, true, true),
			makePortX("BL", new go.Spot(0.23,1), go.Spot.Bottom, true, true),
			makePortX("BR", new go.Spot(0.77,1), go.Spot.Bottom, true, true)
            )
        ));
		//以下添加图例对象//ouyang
		myDiagram.nodeTemplateMap.add("Legend1",//文字在上//简化图例//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"LegendLine.png",
                    width: 104.0,
                    height: 62.0
                }
            ),
            makePort("T", go.Spot.Top, true, true)
            )
        ));
		myDiagram.nodeTemplateMap.add("Legend2",//文字在上//图例//ouyang
        $$(go.Node, "Vertical", nodeStyle(),//Horizontal水平;Vertical垂直
            $$(go.TextBlock,
                {
                    font: "bold 9pt Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "white",
                    opacity: 0.7,
                    margin: 8,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: true
                },
            new go.Binding("text").makeTwoWay()),
            $$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"Legend.png",
                    width: 104.0,
                    height: 142.0
                }
            ),
            makePort("T", go.Spot.Top, true, true)
            )
        ));
	    //addNodeTemp(newName,newSrc,newWidth,newHeight);
		//添加一个新的node，用以表示信息框//ouyang
	    myDiagram.nodeTemplateMap.add(
        "OldZone",  // the block category
            $$(go.Node, "Spot", nodeStyle(),
                // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
                $$(go.Panel, "Auto",
                $$(go.Shape,
                    {
					    name: "PICTURE",
						width:45.0,
						height:60.0,
					    fill: "#f1f1f1",
						stroke: null
					}),
                $$(go.TextBlock,
                    {
                        font: "bold 9pt Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                )
                //// four named ports, one on each side:
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
            makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
            makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
            makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
			makePortX("TLS", new go.Spot(0,0.25), go.Spot.Left, true, true),
            makePortX("TRS", new go.Spot(1,0.25), go.Spot.Right, true, true),
            makePortX("BLS", new go.Spot(0,0.75), go.Spot.Left, true, true),
            makePortX("BRS", new go.Spot(1,0.75), go.Spot.Right, true, true)
            )
         );
    //20170810 
    //blue
	    myDiagram.nodeTemplateMap.add("Zoneblue",//信息框//ouyang
            $$(go.Node, "Spot", nodeStyle(),
                { width: 90, height: 260, background: "#ffffff" },
                new go.Binding("width", "width").makeTwoWay(),
                    new go.Binding("height", "height").makeTwoWay(),
                    new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                /*$$(go.Panel, "Auto",
                $$(go.Picture,
                    {
                        name: "PICTURE",
                        source: urlOfImages+"Zone.png",
                        width: 45.0,
                        height: 60.0
                    }
                ),*/
                $$(go.Shape, //形状:一个 矩形
                    {
                        fill: "#ffffff",
                        stroke: "blue",
                    }/*,
                 new go.Binding("fill", "color")*/
                ),
                $$(go.TextBlock,
                    {
                        font: "bold 24px Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "#ffffff",
                        opacity: 1,
                        margin: 0,
                        maxSize: new go.Size(NaN, NaN),
                        wrap: go.TextBlock.WrapFit,
                        /* textAlign:center,*/
                        editable: true,
                        stroke: "blue"
                    },
                    new go.Binding("text").makeTwoWay())
               /* )*/
                , makePort("T", go.Spot.Top, true, true),
                makePort("L", go.Spot.Left, true, true),
                makePort("R", go.Spot.Right, true, true),
                makePort("B", go.Spot.Bottom, true, true),
                makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                /*makePortX("TLS", new go.Spot(0,0.25), go.Spot.Left, true, true),
                makePortX("TRS", new go.Spot(1,0.25), go.Spot.Right, true, true),
                makePortX("BLS", new go.Spot(0,0.75), go.Spot.Left, true, true),
                makePortX("BRS", new go.Spot(1,0.75), go.Spot.Right, true, true)*/
                //左边框链接点
                makePortX("ZL1", new go.Spot(0, 0.05), go.Spot.Left, true, true),
                makePortX("ZL2", new go.Spot(0, 0.1), go.Spot.Left, true, true),
                makePortX("ZL3", new go.Spot(0, 0.15), go.Spot.Left, true, true),
                makePortX("Z14", new go.Spot(0, 0.2), go.Spot.Left, true, true),
                makePortX("ZL5", new go.Spot(0, 0.25), go.Spot.Left, true, true),
                makePortX("ZL6", new go.Spot(0, 0.3), go.Spot.Left, true, true),
                makePortX("ZL7", new go.Spot(0, 0.35), go.Spot.Left, true, true),
                makePortX("ZL8", new go.Spot(0, 0.4), go.Spot.Left, true, true),
                makePortX("ZL9", new go.Spot(0, 0.45), go.Spot.Left, true, true),
                makePortX("ZL10", new go.Spot(0, 0.5), go.Spot.Left, true, true),
                makePortX("ZL11", new go.Spot(0, 0.55), go.Spot.Left, true, true),
                makePortX("ZL12", new go.Spot(0, 0.6), go.Spot.Left, true, true),
                makePortX("ZL13", new go.Spot(0, 0.65), go.Spot.Left, true, true),
                makePortX("ZL14", new go.Spot(0, 0.7), go.Spot.Left, true, true),
                makePortX("ZL15", new go.Spot(0, 0.75), go.Spot.Left, true, true),
                makePortX("ZL16", new go.Spot(0, 0.8), go.Spot.Left, true, true),
                makePortX("ZL17", new go.Spot(0, 0.85), go.Spot.Left, true, true),
                makePortX("ZL18", new go.Spot(0, 0.9), go.Spot.Left, true, true),
                makePortX("ZL19", new go.Spot(0, 0.95), go.Spot.Left, true, true),
                //右边框连接点
                makePortX("ZR1", new go.Spot(1, 0.05), go.Spot.Right, true, true),
                makePortX("ZR2", new go.Spot(1, 0.1), go.Spot.Right, true, true),
                makePortX("ZR3", new go.Spot(1, 0.15), go.Spot.Right, true, true),
                makePortX("ZR4", new go.Spot(1, 0.2), go.Spot.Right, true, true),
                makePortX("ZR5", new go.Spot(1, 0.25), go.Spot.Right, true, true),
                makePortX("ZR6", new go.Spot(1, 0.3), go.Spot.Right, true, true),
                makePortX("ZR7", new go.Spot(1, 0.35), go.Spot.Right, true, true),
                makePortX("ZR8", new go.Spot(1, 0.4), go.Spot.Right, true, true),
                makePortX("ZR9", new go.Spot(1, 0.45), go.Spot.Right, true, true),
                makePortX("ZR10", new go.Spot(1, 0.5), go.Spot.Right, true, true),
                makePortX("ZR11", new go.Spot(1, 0.55), go.Spot.Right, true, true),
                makePortX("ZR12", new go.Spot(1, 0.6), go.Spot.Right, true, true),
                makePortX("ZR13", new go.Spot(1, 0.65), go.Spot.Right, true, true),
                makePortX("ZR14", new go.Spot(1, 0.7), go.Spot.Right, true, true),
                makePortX("ZR15", new go.Spot(1, 0.75), go.Spot.Right, true, true),
                makePortX("ZR16", new go.Spot(1, 0.8), go.Spot.Right, true, true),
                makePortX("ZR17", new go.Spot(1, 0.85), go.Spot.Right, true, true),
                makePortX("ZR18", new go.Spot(1, 0.9), go.Spot.Right, true, true),
                makePortX("ZR19", new go.Spot(1, 0.95), go.Spot.Right, true, true)
            ));
    //purple
	    myDiagram.nodeTemplateMap.add("Zonepurple",//信息框//ouyang
                $$(go.Node, "Spot", nodeStyle(),
                    { width: 90, height: 260, background: "#ffffff" },
                    new go.Binding("width", "width").makeTwoWay(),
                        new go.Binding("height", "height").makeTwoWay(),
                        new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                    /*$$(go.Panel, "Auto",
                    $$(go.Picture,
                        {
                            name: "PICTURE",
                            source: urlOfImages+"Zone.png",
                            width: 45.0,
                            height: 60.0
                        }
                    ),*/
                    $$(go.Shape, //形状:一个 矩形
                        {
                            fill: "#ffffff",
                            stroke: "purple",
                        }/*,
                 new go.Binding("fill", "color")*/
                    ),
                    $$(go.TextBlock,
                        {
                            font: "bold 24px Helvetica, Arial, sans-serif",
                            stroke: lightText,
                            background: "#ffffff",
                            opacity: 1,
                            margin: 0,
                            maxSize: new go.Size(NaN, NaN),
                            wrap: go.TextBlock.WrapFit,
                            /* textAlign:center,*/
                            editable: true,
                            stroke: "purple"
                        },
                        new go.Binding("text").makeTwoWay())
                   /* )*/
                    , makePort("T", go.Spot.Top, true, true),
                    makePort("L", go.Spot.Left, true, true),
                    makePort("R", go.Spot.Right, true, true),
                    makePort("B", go.Spot.Bottom, true, true),
                    makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                    makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                    makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                    makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                    /*makePortX("TLS", new go.Spot(0,0.25), go.Spot.Left, true, true),
                    makePortX("TRS", new go.Spot(1,0.25), go.Spot.Right, true, true),
                    makePortX("BLS", new go.Spot(0,0.75), go.Spot.Left, true, true),
                    makePortX("BRS", new go.Spot(1,0.75), go.Spot.Right, true, true)*/
                    //左边框链接点
                    makePortX("ZL1", new go.Spot(0, 0.05), go.Spot.Left, true, true),
                    makePortX("ZL2", new go.Spot(0, 0.1), go.Spot.Left, true, true),
                    makePortX("ZL3", new go.Spot(0, 0.15), go.Spot.Left, true, true),
                    makePortX("Z14", new go.Spot(0, 0.2), go.Spot.Left, true, true),
                    makePortX("ZL5", new go.Spot(0, 0.25), go.Spot.Left, true, true),
                    makePortX("ZL6", new go.Spot(0, 0.3), go.Spot.Left, true, true),
                    makePortX("ZL7", new go.Spot(0, 0.35), go.Spot.Left, true, true),
                    makePortX("ZL8", new go.Spot(0, 0.4), go.Spot.Left, true, true),
                    makePortX("ZL9", new go.Spot(0, 0.45), go.Spot.Left, true, true),
                    makePortX("ZL10", new go.Spot(0, 0.5), go.Spot.Left, true, true),
                    makePortX("ZL11", new go.Spot(0, 0.55), go.Spot.Left, true, true),
                    makePortX("ZL12", new go.Spot(0, 0.6), go.Spot.Left, true, true),
                    makePortX("ZL13", new go.Spot(0, 0.65), go.Spot.Left, true, true),
                    makePortX("ZL14", new go.Spot(0, 0.7), go.Spot.Left, true, true),
                    makePortX("ZL15", new go.Spot(0, 0.75), go.Spot.Left, true, true),
                    makePortX("ZL16", new go.Spot(0, 0.8), go.Spot.Left, true, true),
                    makePortX("ZL17", new go.Spot(0, 0.85), go.Spot.Left, true, true),
                    makePortX("ZL18", new go.Spot(0, 0.9), go.Spot.Left, true, true),
                    makePortX("ZL19", new go.Spot(0, 0.95), go.Spot.Left, true, true),
                    //右边框连接点
                    makePortX("ZR1", new go.Spot(1, 0.05), go.Spot.Right, true, true),
                    makePortX("ZR2", new go.Spot(1, 0.1), go.Spot.Right, true, true),
                    makePortX("ZR3", new go.Spot(1, 0.15), go.Spot.Right, true, true),
                    makePortX("ZR4", new go.Spot(1, 0.2), go.Spot.Right, true, true),
                    makePortX("ZR5", new go.Spot(1, 0.25), go.Spot.Right, true, true),
                    makePortX("ZR6", new go.Spot(1, 0.3), go.Spot.Right, true, true),
                    makePortX("ZR7", new go.Spot(1, 0.35), go.Spot.Right, true, true),
                    makePortX("ZR8", new go.Spot(1, 0.4), go.Spot.Right, true, true),
                    makePortX("ZR9", new go.Spot(1, 0.45), go.Spot.Right, true, true),
                    makePortX("ZR10", new go.Spot(1, 0.5), go.Spot.Right, true, true),
                    makePortX("ZR11", new go.Spot(1, 0.55), go.Spot.Right, true, true),
                    makePortX("ZR12", new go.Spot(1, 0.6), go.Spot.Right, true, true),
                    makePortX("ZR13", new go.Spot(1, 0.65), go.Spot.Right, true, true),
                    makePortX("ZR14", new go.Spot(1, 0.7), go.Spot.Right, true, true),
                    makePortX("ZR15", new go.Spot(1, 0.75), go.Spot.Right, true, true),
                    makePortX("ZR16", new go.Spot(1, 0.8), go.Spot.Right, true, true),
                    makePortX("ZR17", new go.Spot(1, 0.85), go.Spot.Right, true, true),
                    makePortX("ZR18", new go.Spot(1, 0.9), go.Spot.Right, true, true),
                    makePortX("ZR19", new go.Spot(1, 0.95), go.Spot.Right, true, true)
                ));
    //green
	    myDiagram.nodeTemplateMap.add("Zonegreen",//信息框//ouyang
                    $$(go.Node, "Spot", nodeStyle(),
                        { width: 90, height: 260, background: "#ffffff" },
                        new go.Binding("width", "width").makeTwoWay(),
                            new go.Binding("height", "height").makeTwoWay(),
                            new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                        /*$$(go.Panel, "Auto",
                        $$(go.Picture,
                            {
                                name: "PICTURE",
                                source: urlOfImages+"Zone.png",
                                width: 45.0,
                                height: 60.0
                            }
                        ),*/
                        $$(go.Shape, //形状:一个 矩形
                            {
                                fill: "#ffffff",
                                stroke: "green",
                            }/*,
                 new go.Binding("fill", "color")*/
                        ),
                        $$(go.TextBlock,
                            {
                                font: "bold 24px Helvetica, Arial, sans-serif",
                                stroke: lightText,
                                background: "#ffffff",
                                opacity: 1,
                                margin: 0,
                                maxSize: new go.Size(NaN, NaN),
                                wrap: go.TextBlock.WrapFit,
                                /* textAlign:center,*/
                                editable: true,
                                stroke: "green"
                            },
                            new go.Binding("text").makeTwoWay())
                       /* )*/
                        , makePort("T", go.Spot.Top, true, true),
                        makePort("L", go.Spot.Left, true, true),
                        makePort("R", go.Spot.Right, true, true),
                        makePort("B", go.Spot.Bottom, true, true),
                        makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                        makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                        makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                        makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                        /*makePortX("TLS", new go.Spot(0,0.25), go.Spot.Left, true, true),
                        makePortX("TRS", new go.Spot(1,0.25), go.Spot.Right, true, true),
                        makePortX("BLS", new go.Spot(0,0.75), go.Spot.Left, true, true),
                        makePortX("BRS", new go.Spot(1,0.75), go.Spot.Right, true, true)*/
                        //左边框链接点
                        makePortX("ZL1", new go.Spot(0, 0.05), go.Spot.Left, true, true),
                        makePortX("ZL2", new go.Spot(0, 0.1), go.Spot.Left, true, true),
                        makePortX("ZL3", new go.Spot(0, 0.15), go.Spot.Left, true, true),
                        makePortX("Z14", new go.Spot(0, 0.2), go.Spot.Left, true, true),
                        makePortX("ZL5", new go.Spot(0, 0.25), go.Spot.Left, true, true),
                        makePortX("ZL6", new go.Spot(0, 0.3), go.Spot.Left, true, true),
                        makePortX("ZL7", new go.Spot(0, 0.35), go.Spot.Left, true, true),
                        makePortX("ZL8", new go.Spot(0, 0.4), go.Spot.Left, true, true),
                        makePortX("ZL9", new go.Spot(0, 0.45), go.Spot.Left, true, true),
                        makePortX("ZL10", new go.Spot(0, 0.5), go.Spot.Left, true, true),
                        makePortX("ZL11", new go.Spot(0, 0.55), go.Spot.Left, true, true),
                        makePortX("ZL12", new go.Spot(0, 0.6), go.Spot.Left, true, true),
                        makePortX("ZL13", new go.Spot(0, 0.65), go.Spot.Left, true, true),
                        makePortX("ZL14", new go.Spot(0, 0.7), go.Spot.Left, true, true),
                        makePortX("ZL15", new go.Spot(0, 0.75), go.Spot.Left, true, true),
                        makePortX("ZL16", new go.Spot(0, 0.8), go.Spot.Left, true, true),
                        makePortX("ZL17", new go.Spot(0, 0.85), go.Spot.Left, true, true),
                        makePortX("ZL18", new go.Spot(0, 0.9), go.Spot.Left, true, true),
                        makePortX("ZL19", new go.Spot(0, 0.95), go.Spot.Left, true, true),
                        //右边框连接点
                        makePortX("ZR1", new go.Spot(1, 0.05), go.Spot.Right, true, true),
                        makePortX("ZR2", new go.Spot(1, 0.1), go.Spot.Right, true, true),
                        makePortX("ZR3", new go.Spot(1, 0.15), go.Spot.Right, true, true),
                        makePortX("ZR4", new go.Spot(1, 0.2), go.Spot.Right, true, true),
                        makePortX("ZR5", new go.Spot(1, 0.25), go.Spot.Right, true, true),
                        makePortX("ZR6", new go.Spot(1, 0.3), go.Spot.Right, true, true),
                        makePortX("ZR7", new go.Spot(1, 0.35), go.Spot.Right, true, true),
                        makePortX("ZR8", new go.Spot(1, 0.4), go.Spot.Right, true, true),
                        makePortX("ZR9", new go.Spot(1, 0.45), go.Spot.Right, true, true),
                        makePortX("ZR10", new go.Spot(1, 0.5), go.Spot.Right, true, true),
                        makePortX("ZR11", new go.Spot(1, 0.55), go.Spot.Right, true, true),
                        makePortX("ZR12", new go.Spot(1, 0.6), go.Spot.Right, true, true),
                        makePortX("ZR13", new go.Spot(1, 0.65), go.Spot.Right, true, true),
                        makePortX("ZR14", new go.Spot(1, 0.7), go.Spot.Right, true, true),
                        makePortX("ZR15", new go.Spot(1, 0.75), go.Spot.Right, true, true),
                        makePortX("ZR16", new go.Spot(1, 0.8), go.Spot.Right, true, true),
                        makePortX("ZR17", new go.Spot(1, 0.85), go.Spot.Right, true, true),
                        makePortX("ZR18", new go.Spot(1, 0.9), go.Spot.Right, true, true),
                        makePortX("ZR19", new go.Spot(1, 0.95), go.Spot.Right, true, true)
                    ));
    //red
	    myDiagram.nodeTemplateMap.add("Zonered",//信息框//ouyang
                    $$(go.Node, "Spot", nodeStyle(),
                        { width: 90, height: 260, background: "#ffffff" },
                        new go.Binding("width", "width").makeTwoWay(),
                            new go.Binding("height", "height").makeTwoWay(),
                            new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                        /*$$(go.Panel, "Auto",
                        $$(go.Picture,
                            {
                                name: "PICTURE",
                                source: urlOfImages+"Zone.png",
                                width: 45.0,
                                height: 60.0
                            }
                        ),*/
                        $$(go.Shape, //形状:一个 矩形
                            {
                                fill: "#ffffff",
                                stroke: "red",
                            }/*,
                 new go.Binding("fill", "color")*/
                        ),
                        $$(go.TextBlock,
                            {
                                font: "bold 24px Helvetica, Arial, sans-serif",
                                stroke: lightText,
                                background: "#ffffff",
                                opacity: 1,
                                margin: 0,
                                maxSize: new go.Size(NaN, NaN),
                                wrap: go.TextBlock.WrapFit,
                                /* textAlign:center,*/
                                editable: true,
                                stroke: "red"
                            },
                            new go.Binding("text").makeTwoWay())
                       /* )*/
                        , makePort("T", go.Spot.Top, true, true),
                        makePort("L", go.Spot.Left, true, true),
                        makePort("R", go.Spot.Right, true, true),
                        makePort("B", go.Spot.Bottom, true, true),
                        makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                        makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                        makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                        makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                        /*makePortX("TLS", new go.Spot(0,0.25), go.Spot.Left, true, true),
                        makePortX("TRS", new go.Spot(1,0.25), go.Spot.Right, true, true),
                        makePortX("BLS", new go.Spot(0,0.75), go.Spot.Left, true, true),
                        makePortX("BRS", new go.Spot(1,0.75), go.Spot.Right, true, true)*/
                        //左边框链接点
                        makePortX("ZL1", new go.Spot(0, 0.05), go.Spot.Left, true, true),
                        makePortX("ZL2", new go.Spot(0, 0.1), go.Spot.Left, true, true),
                        makePortX("ZL3", new go.Spot(0, 0.15), go.Spot.Left, true, true),
                        makePortX("Z14", new go.Spot(0, 0.2), go.Spot.Left, true, true),
                        makePortX("ZL5", new go.Spot(0, 0.25), go.Spot.Left, true, true),
                        makePortX("ZL6", new go.Spot(0, 0.3), go.Spot.Left, true, true),
                        makePortX("ZL7", new go.Spot(0, 0.35), go.Spot.Left, true, true),
                        makePortX("ZL8", new go.Spot(0, 0.4), go.Spot.Left, true, true),
                        makePortX("ZL9", new go.Spot(0, 0.45), go.Spot.Left, true, true),
                        makePortX("ZL10", new go.Spot(0, 0.5), go.Spot.Left, true, true),
                        makePortX("ZL11", new go.Spot(0, 0.55), go.Spot.Left, true, true),
                        makePortX("ZL12", new go.Spot(0, 0.6), go.Spot.Left, true, true),
                        makePortX("ZL13", new go.Spot(0, 0.65), go.Spot.Left, true, true),
                        makePortX("ZL14", new go.Spot(0, 0.7), go.Spot.Left, true, true),
                        makePortX("ZL15", new go.Spot(0, 0.75), go.Spot.Left, true, true),
                        makePortX("ZL16", new go.Spot(0, 0.8), go.Spot.Left, true, true),
                        makePortX("ZL17", new go.Spot(0, 0.85), go.Spot.Left, true, true),
                        makePortX("ZL18", new go.Spot(0, 0.9), go.Spot.Left, true, true),
                        makePortX("ZL19", new go.Spot(0, 0.95), go.Spot.Left, true, true),
                        //右边框连接点
                        makePortX("ZR1", new go.Spot(1, 0.05), go.Spot.Right, true, true),
                        makePortX("ZR2", new go.Spot(1, 0.1), go.Spot.Right, true, true),
                        makePortX("ZR3", new go.Spot(1, 0.15), go.Spot.Right, true, true),
                        makePortX("ZR4", new go.Spot(1, 0.2), go.Spot.Right, true, true),
                        makePortX("ZR5", new go.Spot(1, 0.25), go.Spot.Right, true, true),
                        makePortX("ZR6", new go.Spot(1, 0.3), go.Spot.Right, true, true),
                        makePortX("ZR7", new go.Spot(1, 0.35), go.Spot.Right, true, true),
                        makePortX("ZR8", new go.Spot(1, 0.4), go.Spot.Right, true, true),
                        makePortX("ZR9", new go.Spot(1, 0.45), go.Spot.Right, true, true),
                        makePortX("ZR10", new go.Spot(1, 0.5), go.Spot.Right, true, true),
                        makePortX("ZR11", new go.Spot(1, 0.55), go.Spot.Right, true, true),
                        makePortX("ZR12", new go.Spot(1, 0.6), go.Spot.Right, true, true),
                        makePortX("ZR13", new go.Spot(1, 0.65), go.Spot.Right, true, true),
                        makePortX("ZR14", new go.Spot(1, 0.7), go.Spot.Right, true, true),
                        makePortX("ZR15", new go.Spot(1, 0.75), go.Spot.Right, true, true),
                        makePortX("ZR16", new go.Spot(1, 0.8), go.Spot.Right, true, true),
                        makePortX("ZR17", new go.Spot(1, 0.85), go.Spot.Right, true, true),
                        makePortX("ZR18", new go.Spot(1, 0.9), go.Spot.Right, true, true),
                        makePortX("ZR19", new go.Spot(1, 0.95), go.Spot.Right, true, true)
                    ));
    //#EA700D
	    myDiagram.nodeTemplateMap.add("ZoneEA700D",//信息框//ouyang
                        $$(go.Node, "Spot", nodeStyle(),
                            { width: 90, height: 260, background: "#ffffff" },
                            new go.Binding("width", "width").makeTwoWay(),
                                new go.Binding("height", "height").makeTwoWay(),
                                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                            /*$$(go.Panel, "Auto",
                            $$(go.Picture,
                                {
                                    name: "PICTURE",
                                    source: urlOfImages+"Zone.png",
                                    width: 45.0,
                                    height: 60.0
                                }
                            ),*/
                            $$(go.Shape, //形状:一个 矩形
                                {
                                    fill: "#ffffff",
                                    stroke: "#EA700D",
                                }/*,
                 new go.Binding("fill", "color")*/
                            ),
                            $$(go.TextBlock,
                                {
                                    font: "bold 24px Helvetica, Arial, sans-serif",
                                    stroke: lightText,
                                    background: "#ffffff",
                                    opacity: 1,
                                    margin: 0,
                                    maxSize: new go.Size(NaN, NaN),
                                    wrap: go.TextBlock.WrapFit,
                                    /* textAlign:center,*/
                                    editable: true,
                                    stroke: "#EA700D"
                                },
                                new go.Binding("text").makeTwoWay())
                           /* )*/
                            , makePort("T", go.Spot.Top, true, true),
                            makePort("L", go.Spot.Left, true, true),
                            makePort("R", go.Spot.Right, true, true),
                            makePort("B", go.Spot.Bottom, true, true),
                            makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                            makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                            makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                            makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                            /*makePortX("TLS", new go.Spot(0,0.25), go.Spot.Left, true, true),
                            makePortX("TRS", new go.Spot(1,0.25), go.Spot.Right, true, true),
                            makePortX("BLS", new go.Spot(0,0.75), go.Spot.Left, true, true),
                            makePortX("BRS", new go.Spot(1,0.75), go.Spot.Right, true, true)*/
                            //左边框链接点
                            makePortX("ZL1", new go.Spot(0, 0.05), go.Spot.Left, true, true),
                            makePortX("ZL2", new go.Spot(0, 0.1), go.Spot.Left, true, true),
                            makePortX("ZL3", new go.Spot(0, 0.15), go.Spot.Left, true, true),
                            makePortX("Z14", new go.Spot(0, 0.2), go.Spot.Left, true, true),
                            makePortX("ZL5", new go.Spot(0, 0.25), go.Spot.Left, true, true),
                            makePortX("ZL6", new go.Spot(0, 0.3), go.Spot.Left, true, true),
                            makePortX("ZL7", new go.Spot(0, 0.35), go.Spot.Left, true, true),
                            makePortX("ZL8", new go.Spot(0, 0.4), go.Spot.Left, true, true),
                            makePortX("ZL9", new go.Spot(0, 0.45), go.Spot.Left, true, true),
                            makePortX("ZL10", new go.Spot(0, 0.5), go.Spot.Left, true, true),
                            makePortX("ZL11", new go.Spot(0, 0.55), go.Spot.Left, true, true),
                            makePortX("ZL12", new go.Spot(0, 0.6), go.Spot.Left, true, true),
                            makePortX("ZL13", new go.Spot(0, 0.65), go.Spot.Left, true, true),
                            makePortX("ZL14", new go.Spot(0, 0.7), go.Spot.Left, true, true),
                            makePortX("ZL15", new go.Spot(0, 0.75), go.Spot.Left, true, true),
                            makePortX("ZL16", new go.Spot(0, 0.8), go.Spot.Left, true, true),
                            makePortX("ZL17", new go.Spot(0, 0.85), go.Spot.Left, true, true),
                            makePortX("ZL18", new go.Spot(0, 0.9), go.Spot.Left, true, true),
                            makePortX("ZL19", new go.Spot(0, 0.95), go.Spot.Left, true, true),
                            //右边框连接点
                            makePortX("ZR1", new go.Spot(1, 0.05), go.Spot.Right, true, true),
                            makePortX("ZR2", new go.Spot(1, 0.1), go.Spot.Right, true, true),
                            makePortX("ZR3", new go.Spot(1, 0.15), go.Spot.Right, true, true),
                            makePortX("ZR4", new go.Spot(1, 0.2), go.Spot.Right, true, true),
                            makePortX("ZR5", new go.Spot(1, 0.25), go.Spot.Right, true, true),
                            makePortX("ZR6", new go.Spot(1, 0.3), go.Spot.Right, true, true),
                            makePortX("ZR7", new go.Spot(1, 0.35), go.Spot.Right, true, true),
                            makePortX("ZR8", new go.Spot(1, 0.4), go.Spot.Right, true, true),
                            makePortX("ZR9", new go.Spot(1, 0.45), go.Spot.Right, true, true),
                            makePortX("ZR10", new go.Spot(1, 0.5), go.Spot.Right, true, true),
                            makePortX("ZR11", new go.Spot(1, 0.55), go.Spot.Right, true, true),
                            makePortX("ZR12", new go.Spot(1, 0.6), go.Spot.Right, true, true),
                            makePortX("ZR13", new go.Spot(1, 0.65), go.Spot.Right, true, true),
                            makePortX("ZR14", new go.Spot(1, 0.7), go.Spot.Right, true, true),
                            makePortX("ZR15", new go.Spot(1, 0.75), go.Spot.Right, true, true),
                            makePortX("ZR16", new go.Spot(1, 0.8), go.Spot.Right, true, true),
                            makePortX("ZR17", new go.Spot(1, 0.85), go.Spot.Right, true, true),
                            makePortX("ZR18", new go.Spot(1, 0.9), go.Spot.Right, true, true),
                            makePortX("ZR19", new go.Spot(1, 0.95), go.Spot.Right, true, true)
                        ));


		//20170515 新增
		myDiagram.nodeTemplateMap.add("Zone",//信息框//ouyang
        $$(go.Node, "Spot", nodeStyle(),
            { width: 90, height: 260, background: "#B7DDE8" },
            new go.Binding("width","width").makeTwoWay(),
                new go.Binding("height","height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
            /*$$(go.Panel, "Auto",
            $$(go.Picture,
                {
				    name: "PICTURE",
                    source: urlOfImages+"Zone.png",
                    width: 45.0,
                    height: 60.0
                }
            ),*/
            $$(go.Shape, //形状:一个 矩形
                {
                    fill: "#B7DDE8",
                    stroke: "black",
                }/*,
                 new go.Binding("fill", "color")*/
            ),
            $$(go.TextBlock,
                {
                    font: "bold 24px Helvetica, Arial, sans-serif",
                    stroke: lightText,
                    background: "#B7DDE8",
                    opacity: 1,
                    margin: 0,
                    maxSize: new go.Size(NaN, NaN),
                    wrap: go.TextBlock.WrapFit,
                   /* textAlign:center,*/
                    editable: true
                },
                new go.Binding("text").makeTwoWay())
           /* )*/
            , makePort("T", go.Spot.Top, true, true),
            makePort("L", go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, true, true),
            makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
            makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
            makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
            makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
			/*makePortX("TLS", new go.Spot(0,0.25), go.Spot.Left, true, true),
            makePortX("TRS", new go.Spot(1,0.25), go.Spot.Right, true, true),
            makePortX("BLS", new go.Spot(0,0.75), go.Spot.Left, true, true),
            makePortX("BRS", new go.Spot(1,0.75), go.Spot.Right, true, true)*/
            //左边框链接点
            makePortX("ZL1",new go.Spot(0,0.05), go.Spot.Left, true, true),
            makePortX("ZL2",new go.Spot(0,0.1), go.Spot.Left, true, true),
            makePortX("ZL3",new go.Spot(0,0.15), go.Spot.Left, true, true),
            makePortX("Z14",new go.Spot(0,0.2), go.Spot.Left, true, true),
            makePortX("ZL5",new go.Spot(0,0.25), go.Spot.Left, true, true),
            makePortX("ZL6",new go.Spot(0,0.3), go.Spot.Left, true, true),
            makePortX("ZL7",new go.Spot(0,0.35), go.Spot.Left, true, true),
            makePortX("ZL8",new go.Spot(0,0.4), go.Spot.Left, true, true),
            makePortX("ZL9",new go.Spot(0,0.45), go.Spot.Left, true, true),
            makePortX("ZL10",new go.Spot(0,0.5), go.Spot.Left, true, true),
            makePortX("ZL11",new go.Spot(0,0.55), go.Spot.Left, true, true),
            makePortX("ZL12",new go.Spot(0,0.6), go.Spot.Left, true, true),
            makePortX("ZL13",new go.Spot(0,0.65), go.Spot.Left, true, true),
            makePortX("ZL14",new go.Spot(0,0.7), go.Spot.Left, true, true),
            makePortX("ZL15",new go.Spot(0,0.75), go.Spot.Left, true, true),
            makePortX("ZL16",new go.Spot(0,0.8), go.Spot.Left, true, true),
            makePortX("ZL17",new go.Spot(0,0.85), go.Spot.Left, true, true),
            makePortX("ZL18",new go.Spot(0,0.9), go.Spot.Left, true, true),
            makePortX("ZL19",new go.Spot(0,0.95), go.Spot.Left, true, true),
            //右边框连接点
            makePortX("ZR1",new go.Spot(1,0.05), go.Spot.Right, true, true),
            makePortX("ZR2",new go.Spot(1,0.1), go.Spot.Right, true, true),
            makePortX("ZR3",new go.Spot(1,0.15), go.Spot.Right, true, true),
            makePortX("ZR4",new go.Spot(1,0.2), go.Spot.Right, true, true),
            makePortX("ZR5",new go.Spot(1,0.25), go.Spot.Right, true, true),
            makePortX("ZR6",new go.Spot(1,0.3), go.Spot.Right, true, true),
            makePortX("ZR7",new go.Spot(1,0.35), go.Spot.Right, true, true),
            makePortX("ZR8",new go.Spot(1,0.4), go.Spot.Right, true, true),
            makePortX("ZR9",new go.Spot(1,0.45), go.Spot.Right, true, true),
            makePortX("ZR10",new go.Spot(1,0.5), go.Spot.Right, true, true),
            makePortX("ZR11",new go.Spot(1,0.55), go.Spot.Right, true, true),
            makePortX("ZR12",new go.Spot(1,0.6), go.Spot.Right, true, true),
            makePortX("ZR13",new go.Spot(1,0.65), go.Spot.Right, true, true),
            makePortX("ZR14",new go.Spot(1,0.7), go.Spot.Right, true, true),
            makePortX("ZR15",new go.Spot(1,0.75), go.Spot.Right, true, true),
            makePortX("ZR16",new go.Spot(1,0.8), go.Spot.Right, true, true),
            makePortX("ZR17",new go.Spot(1,0.85), go.Spot.Right, true, true),
            makePortX("ZR18",new go.Spot(1,0.9), go.Spot.Right, true, true),
            makePortX("ZR19",new go.Spot(1,0.95), go.Spot.Right, true, true)
        ));
        myDiagram.nodeTemplateMap.add("Zone2",//信息框//ouyang
            $$(go.Node, "Spot", nodeStyle(),
                { width: 90, height: 260, background: "#E5B9B5" },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                /*$$(go.Panel, "Auto",
                 $$(go.Picture,
                 {
                 name: "PICTURE",
                 source: urlOfImages+"Zone.png",
                 width: 45.0,
                 height: 60.0
                 }
                 ),*/
                $$(go.Shape, //形状:一个 圆角矩形 ，默认填充色为 白色，边框颜色为 红色
                    {
                        fill: "#E5B9B5",
                        stroke: "black",
                    }/*,
                     new go.Binding("fill", "color")*/
                ),
                $$(go.TextBlock,
                    {
                        textAlign: "center",
                        font: "bold 24px Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "#E5B9B5",
                        opacity: 1,
                        margin: 0,
                        maxSize: new go.Size(NaN, NaN),
                        wrap: go.TextBlock.WrapFit,
                        /* textAlign:center,*/
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                /* )*/
                , makePort("T", go.Spot.Top, true, true),
                makePort("L", go.Spot.Left, true, true),
                makePort("R", go.Spot.Right, true, true),
                makePort("B", go.Spot.Bottom, true, true),
                makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                //左边框链接点
                makePortX("ZL1",new go.Spot(0,0.05), go.Spot.Left, true, true),
                makePortX("ZL2",new go.Spot(0,0.1), go.Spot.Left, true, true),
                makePortX("ZL3",new go.Spot(0,0.15), go.Spot.Left, true, true),
                makePortX("Z14",new go.Spot(0,0.2), go.Spot.Left, true, true),
                makePortX("ZL5",new go.Spot(0,0.25), go.Spot.Left, true, true),
                makePortX("ZL6",new go.Spot(0,0.3), go.Spot.Left, true, true),
                makePortX("ZL7",new go.Spot(0,0.35), go.Spot.Left, true, true),
                makePortX("ZL8",new go.Spot(0,0.4), go.Spot.Left, true, true),
                makePortX("ZL9",new go.Spot(0,0.45), go.Spot.Left, true, true),
                makePortX("ZL10",new go.Spot(0,0.5), go.Spot.Left, true, true),
                makePortX("ZL11",new go.Spot(0,0.55), go.Spot.Left, true, true),
                makePortX("ZL12",new go.Spot(0,0.6), go.Spot.Left, true, true),
                makePortX("ZL13",new go.Spot(0,0.65), go.Spot.Left, true, true),
                makePortX("ZL14",new go.Spot(0,0.7), go.Spot.Left, true, true),
                makePortX("ZL15",new go.Spot(0,0.75), go.Spot.Left, true, true),
                makePortX("ZL16",new go.Spot(0,0.8), go.Spot.Left, true, true),
                makePortX("ZL17",new go.Spot(0,0.85), go.Spot.Left, true, true),
                makePortX("ZL18",new go.Spot(0,0.9), go.Spot.Left, true, true),
                makePortX("ZL19",new go.Spot(0,0.95), go.Spot.Left, true, true),
                //右边框连接点
                makePortX("ZR1",new go.Spot(1,0.05), go.Spot.Right, true, true),
                makePortX("ZR2",new go.Spot(1,0.1), go.Spot.Right, true, true),
                makePortX("ZR3",new go.Spot(1,0.15), go.Spot.Right, true, true),
                makePortX("ZR4",new go.Spot(1,0.2), go.Spot.Right, true, true),
                makePortX("ZR5",new go.Spot(1,0.25), go.Spot.Right, true, true),
                makePortX("ZR6",new go.Spot(1,0.3), go.Spot.Right, true, true),
                makePortX("ZR7",new go.Spot(1,0.35), go.Spot.Right, true, true),
                makePortX("ZR8",new go.Spot(1,0.4), go.Spot.Right, true, true),
                makePortX("ZR9",new go.Spot(1,0.45), go.Spot.Right, true, true),
                makePortX("ZR10",new go.Spot(1,0.5), go.Spot.Right, true, true),
                makePortX("ZR11",new go.Spot(1,0.55), go.Spot.Right, true, true),
                makePortX("ZR12",new go.Spot(1,0.6), go.Spot.Right, true, true),
                makePortX("ZR13",new go.Spot(1,0.65), go.Spot.Right, true, true),
                makePortX("ZR14",new go.Spot(1,0.7), go.Spot.Right, true, true),
                makePortX("ZR15",new go.Spot(1,0.75), go.Spot.Right, true, true),
                makePortX("ZR16",new go.Spot(1,0.8), go.Spot.Right, true, true),
                makePortX("ZR17",new go.Spot(1,0.85), go.Spot.Right, true, true),
                makePortX("ZR18",new go.Spot(1,0.9), go.Spot.Right, true, true),
                makePortX("ZR19",new go.Spot(1,0.95), go.Spot.Right, true, true)
            ));
        myDiagram.nodeTemplateMap.add("Zone3",//信息框//ouyang
            $$(go.Node, "Spot", nodeStyle(),
                { width: 90, height: 260, background: "#D8D8D8" },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                /*$$(go.Panel, "Auto",
                 $$(go.Picture,
                 {
                 name: "PICTURE",
                 source: urlOfImages+"Zone.png",
                 width: 45.0,
                 height: 60.0
                 }
                 ),*/
                $$(go.Shape, //形状:一个 圆角矩形 ，默认填充色为 白色，边框颜色为 红色
                    {
                        fill: "#D8D8D8",
                        stroke: "black",
                    }/*,
                    new go.Binding("fill", "color")*/
                ),
                $$(go.TextBlock,
                    {
                        textAlign: "center",
                        font: "bold 24px Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "#D8D8D8",
                        opacity: 1,
                        margin: 0,
                        maxSize: new go.Size(NaN, NaN),
                        wrap: go.TextBlock.WrapFit,
                        /* textAlign:center,*/
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                /* )*/
                , makePort("T", go.Spot.Top, true, true),
                makePort("L", go.Spot.Left, true, true),
                makePort("R", go.Spot.Right, true, true),
                makePort("B", go.Spot.Bottom, true, true),
                makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                //左边框链接点
                makePortX("ZL1",new go.Spot(0,0.05), go.Spot.Left, true, true),
                makePortX("ZL2",new go.Spot(0,0.1), go.Spot.Left, true, true),
                makePortX("ZL3",new go.Spot(0,0.15), go.Spot.Left, true, true),
                makePortX("Z14",new go.Spot(0,0.2), go.Spot.Left, true, true),
                makePortX("ZL5",new go.Spot(0,0.25), go.Spot.Left, true, true),
                makePortX("ZL6",new go.Spot(0,0.3), go.Spot.Left, true, true),
                makePortX("ZL7",new go.Spot(0,0.35), go.Spot.Left, true, true),
                makePortX("ZL8",new go.Spot(0,0.4), go.Spot.Left, true, true),
                makePortX("ZL9",new go.Spot(0,0.45), go.Spot.Left, true, true),
                makePortX("ZL10",new go.Spot(0,0.5), go.Spot.Left, true, true),
                makePortX("ZL11",new go.Spot(0,0.55), go.Spot.Left, true, true),
                makePortX("ZL12",new go.Spot(0,0.6), go.Spot.Left, true, true),
                makePortX("ZL13",new go.Spot(0,0.65), go.Spot.Left, true, true),
                makePortX("ZL14",new go.Spot(0,0.7), go.Spot.Left, true, true),
                makePortX("ZL15",new go.Spot(0,0.75), go.Spot.Left, true, true),
                makePortX("ZL16",new go.Spot(0,0.8), go.Spot.Left, true, true),
                makePortX("ZL17",new go.Spot(0,0.85), go.Spot.Left, true, true),
                makePortX("ZL18",new go.Spot(0,0.9), go.Spot.Left, true, true),
                makePortX("ZL19",new go.Spot(0,0.95), go.Spot.Left, true, true),
                //右边框连接点
                makePortX("ZR1",new go.Spot(1,0.05), go.Spot.Right, true, true),
                makePortX("ZR2",new go.Spot(1,0.1), go.Spot.Right, true, true),
                makePortX("ZR3",new go.Spot(1,0.15), go.Spot.Right, true, true),
                makePortX("ZR4",new go.Spot(1,0.2), go.Spot.Right, true, true),
                makePortX("ZR5",new go.Spot(1,0.25), go.Spot.Right, true, true),
                makePortX("ZR6",new go.Spot(1,0.3), go.Spot.Right, true, true),
                makePortX("ZR7",new go.Spot(1,0.35), go.Spot.Right, true, true),
                makePortX("ZR8",new go.Spot(1,0.4), go.Spot.Right, true, true),
                makePortX("ZR9",new go.Spot(1,0.45), go.Spot.Right, true, true),
                makePortX("ZR10",new go.Spot(1,0.5), go.Spot.Right, true, true),
                makePortX("ZR11",new go.Spot(1,0.55), go.Spot.Right, true, true),
                makePortX("ZR12",new go.Spot(1,0.6), go.Spot.Right, true, true),
                makePortX("ZR13",new go.Spot(1,0.65), go.Spot.Right, true, true),
                makePortX("ZR14",new go.Spot(1,0.7), go.Spot.Right, true, true),
                makePortX("ZR15",new go.Spot(1,0.75), go.Spot.Right, true, true),
                makePortX("ZR16",new go.Spot(1,0.8), go.Spot.Right, true, true),
                makePortX("ZR17",new go.Spot(1,0.85), go.Spot.Right, true, true),
                makePortX("ZR18",new go.Spot(1,0.9), go.Spot.Right, true, true),
                makePortX("ZR19",new go.Spot(1,0.95), go.Spot.Right, true, true)

            ));
        //20170516 格式2
        myDiagram.nodeTemplateMap.add("Zone4",//信息框//ouyang
            $$(go.Node, "Spot", nodeStyle(),
                { width: 88, height: 168, background: "#B7DDE8" },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                /*$$(go.Panel, "Auto",
                 $$(go.Picture,
                 {
                 name: "PICTURE",
                 source: urlOfImages+"Zone.png",
                 width: 45.0,
                 height: 60.0
                 }
                 ),*/
                $$(go.Shape, //形状:一个 矩形
                    {
                        fill: "#B7DDE8",
                        stroke: "black",
                    }/*,
                     new go.Binding("fill", "color")*/
                ),
                $$(go.TextBlock,
                    {
                        font: "bold 24px Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "#B7DDE8",
                        opacity: 1,
                        margin: 0,
                        maxSize: new go.Size(NaN, NaN),
                        wrap: go.TextBlock.WrapFit,
                        /* textAlign:center,*/
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                /* )*/
                , makePort("T", go.Spot.Top, true, true),
                makePort("L", go.Spot.Left, true, true),
                makePort("R", go.Spot.Right, true, true),
                makePort("B", go.Spot.Bottom, true, true),
                makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                /*makePortX("TLS", new go.Spot(0,0.25), go.Spot.Left, true, true),
                 makePortX("TRS", new go.Spot(1,0.25), go.Spot.Right, true, true),
                 makePortX("BLS", new go.Spot(0,0.75), go.Spot.Left, true, true),
                 makePortX("BRS", new go.Spot(1,0.75), go.Spot.Right, true, true)*/
                //左边框链接点
                makePortX("ZL1",new go.Spot(0,0.05), go.Spot.Left, true, true),
                makePortX("ZL2",new go.Spot(0,0.1), go.Spot.Left, true, true),
                makePortX("ZL3",new go.Spot(0,0.15), go.Spot.Left, true, true),
                makePortX("Z14",new go.Spot(0,0.2), go.Spot.Left, true, true),
                makePortX("ZL5",new go.Spot(0,0.25), go.Spot.Left, true, true),
                makePortX("ZL6",new go.Spot(0,0.3), go.Spot.Left, true, true),
                makePortX("ZL7",new go.Spot(0,0.35), go.Spot.Left, true, true),
                makePortX("ZL8",new go.Spot(0,0.4), go.Spot.Left, true, true),
                makePortX("ZL9",new go.Spot(0,0.45), go.Spot.Left, true, true),
                makePortX("ZL10",new go.Spot(0,0.5), go.Spot.Left, true, true),
                makePortX("ZL11",new go.Spot(0,0.55), go.Spot.Left, true, true),
                makePortX("ZL12",new go.Spot(0,0.6), go.Spot.Left, true, true),
                makePortX("ZL13",new go.Spot(0,0.65), go.Spot.Left, true, true),
                makePortX("ZL14",new go.Spot(0,0.7), go.Spot.Left, true, true),
                makePortX("ZL15",new go.Spot(0,0.75), go.Spot.Left, true, true),
                makePortX("ZL16",new go.Spot(0,0.8), go.Spot.Left, true, true),
                makePortX("ZL17",new go.Spot(0,0.85), go.Spot.Left, true, true),
                makePortX("ZL18",new go.Spot(0,0.9), go.Spot.Left, true, true),
                makePortX("ZL19",new go.Spot(0,0.95), go.Spot.Left, true, true),
                //右边框连接点
                makePortX("ZR1",new go.Spot(1,0.05), go.Spot.Right, true, true),
                makePortX("ZR2",new go.Spot(1,0.1), go.Spot.Right, true, true),
                makePortX("ZR3",new go.Spot(1,0.15), go.Spot.Right, true, true),
                makePortX("ZR4",new go.Spot(1,0.2), go.Spot.Right, true, true),
                makePortX("ZR5",new go.Spot(1,0.25), go.Spot.Right, true, true),
                makePortX("ZR6",new go.Spot(1,0.3), go.Spot.Right, true, true),
                makePortX("ZR7",new go.Spot(1,0.35), go.Spot.Right, true, true),
                makePortX("ZR8",new go.Spot(1,0.4), go.Spot.Right, true, true),
                makePortX("ZR9",new go.Spot(1,0.45), go.Spot.Right, true, true),
                makePortX("ZR10",new go.Spot(1,0.5), go.Spot.Right, true, true),
                makePortX("ZR11",new go.Spot(1,0.55), go.Spot.Right, true, true),
                makePortX("ZR12",new go.Spot(1,0.6), go.Spot.Right, true, true),
                makePortX("ZR13",new go.Spot(1,0.65), go.Spot.Right, true, true),
                makePortX("ZR14",new go.Spot(1,0.7), go.Spot.Right, true, true),
                makePortX("ZR15",new go.Spot(1,0.75), go.Spot.Right, true, true),
                makePortX("ZR16",new go.Spot(1,0.8), go.Spot.Right, true, true),
                makePortX("ZR17",new go.Spot(1,0.85), go.Spot.Right, true, true),
                makePortX("ZR18",new go.Spot(1,0.9), go.Spot.Right, true, true),
                makePortX("ZR19",new go.Spot(1,0.95), go.Spot.Right, true, true)
            ));
        myDiagram.nodeTemplateMap.add("Zone5",//信息框//ouyang
            $$(go.Node, "Spot", nodeStyle(),
                { width: 88, height: 168, background: "#E5B9B5" },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                /*$$(go.Panel, "Auto",
                 $$(go.Picture,
                 {
                 name: "PICTURE",
                 source: urlOfImages+"Zone.png",
                 width: 45.0,
                 height: 60.0
                 }
                 ),*/
                $$(go.Shape, //形状:一个 圆角矩形 ，默认填充色为 白色，边框颜色为 红色
                    {
                        fill: "#E5B9B5",
                        stroke: "black",
                    }/*,
                     new go.Binding("fill", "color")*/
                ),
                $$(go.TextBlock,
                    {
                        textAlign: "center",
                        font: "bold 24px Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "#E5B9B5",
                        opacity: 1,
                        margin: 0,
                        maxSize: new go.Size(NaN, NaN),
                        wrap: go.TextBlock.WrapFit,
                        /* textAlign:center,*/
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                /* )*/
                , makePort("T", go.Spot.Top, true, true),
                makePort("L", go.Spot.Left, true, true),
                makePort("R", go.Spot.Right, true, true),
                makePort("B", go.Spot.Bottom, true, true),
                makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                //左边框链接点
                makePortX("ZL1",new go.Spot(0,0.05), go.Spot.Left, true, true),
                makePortX("ZL2",new go.Spot(0,0.1), go.Spot.Left, true, true),
                makePortX("ZL3",new go.Spot(0,0.15), go.Spot.Left, true, true),
                makePortX("Z14",new go.Spot(0,0.2), go.Spot.Left, true, true),
                makePortX("ZL5",new go.Spot(0,0.25), go.Spot.Left, true, true),
                makePortX("ZL6",new go.Spot(0,0.3), go.Spot.Left, true, true),
                makePortX("ZL7",new go.Spot(0,0.35), go.Spot.Left, true, true),
                makePortX("ZL8",new go.Spot(0,0.4), go.Spot.Left, true, true),
                makePortX("ZL9",new go.Spot(0,0.45), go.Spot.Left, true, true),
                makePortX("ZL10",new go.Spot(0,0.5), go.Spot.Left, true, true),
                makePortX("ZL11",new go.Spot(0,0.55), go.Spot.Left, true, true),
                makePortX("ZL12",new go.Spot(0,0.6), go.Spot.Left, true, true),
                makePortX("ZL13",new go.Spot(0,0.65), go.Spot.Left, true, true),
                makePortX("ZL14",new go.Spot(0,0.7), go.Spot.Left, true, true),
                makePortX("ZL15",new go.Spot(0,0.75), go.Spot.Left, true, true),
                makePortX("ZL16",new go.Spot(0,0.8), go.Spot.Left, true, true),
                makePortX("ZL17",new go.Spot(0,0.85), go.Spot.Left, true, true),
                makePortX("ZL18",new go.Spot(0,0.9), go.Spot.Left, true, true),
                makePortX("ZL19",new go.Spot(0,0.95), go.Spot.Left, true, true),
                //右边框连接点
                makePortX("ZR1",new go.Spot(1,0.05), go.Spot.Right, true, true),
                makePortX("ZR2",new go.Spot(1,0.1), go.Spot.Right, true, true),
                makePortX("ZR3",new go.Spot(1,0.15), go.Spot.Right, true, true),
                makePortX("ZR4",new go.Spot(1,0.2), go.Spot.Right, true, true),
                makePortX("ZR5",new go.Spot(1,0.25), go.Spot.Right, true, true),
                makePortX("ZR6",new go.Spot(1,0.3), go.Spot.Right, true, true),
                makePortX("ZR7",new go.Spot(1,0.35), go.Spot.Right, true, true),
                makePortX("ZR8",new go.Spot(1,0.4), go.Spot.Right, true, true),
                makePortX("ZR9",new go.Spot(1,0.45), go.Spot.Right, true, true),
                makePortX("ZR10",new go.Spot(1,0.5), go.Spot.Right, true, true),
                makePortX("ZR11",new go.Spot(1,0.55), go.Spot.Right, true, true),
                makePortX("ZR12",new go.Spot(1,0.6), go.Spot.Right, true, true),
                makePortX("ZR13",new go.Spot(1,0.65), go.Spot.Right, true, true),
                makePortX("ZR14",new go.Spot(1,0.7), go.Spot.Right, true, true),
                makePortX("ZR15",new go.Spot(1,0.75), go.Spot.Right, true, true),
                makePortX("ZR16",new go.Spot(1,0.8), go.Spot.Right, true, true),
                makePortX("ZR17",new go.Spot(1,0.85), go.Spot.Right, true, true),
                makePortX("ZR18",new go.Spot(1,0.9), go.Spot.Right, true, true),
                makePortX("ZR19",new go.Spot(1,0.95), go.Spot.Right, true, true)
            ));
        myDiagram.nodeTemplateMap.add("Zone6",//信息框//ouyang
            $$(go.Node, "Spot", nodeStyle(),
                { width: 88, height: 168, background: "#D8D8D8" },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                /*$$(go.Panel, "Auto",
                 $$(go.Picture,
                 {
                 name: "PICTURE",
                 source: urlOfImages+"Zone.png",
                 width: 45.0,
                 height: 60.0
                 }
                 ),*/
                $$(go.Shape, //形状:一个 圆角矩形 ，默认填充色为 白色，边框颜色为 红色
                    {
                        fill: "#D8D8D8",
                        stroke: "black",
                    }/*,
                     new go.Binding("fill", "color")*/
                ),
                $$(go.TextBlock,
                    {
                        textAlign: "center",
                        font: "bold 24px Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "#D8D8D8",
                        opacity: 1,
                        margin: 0,
                        maxSize: new go.Size(NaN, NaN),
                        wrap: go.TextBlock.WrapFit,
                        /* textAlign:center,*/
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                /* )*/
                , makePort("T", go.Spot.Top, true, true),
                makePort("L", go.Spot.Left, true, true),
                makePort("R", go.Spot.Right, true, true),
                makePort("B", go.Spot.Bottom, true, true),
                makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                //左边框链接点
                makePortX("ZL1",new go.Spot(0,0.05), go.Spot.Left, true, true),
                makePortX("ZL2",new go.Spot(0,0.1), go.Spot.Left, true, true),
                makePortX("ZL3",new go.Spot(0,0.15), go.Spot.Left, true, true),
                makePortX("Z14",new go.Spot(0,0.2), go.Spot.Left, true, true),
                makePortX("ZL5",new go.Spot(0,0.25), go.Spot.Left, true, true),
                makePortX("ZL6",new go.Spot(0,0.3), go.Spot.Left, true, true),
                makePortX("ZL7",new go.Spot(0,0.35), go.Spot.Left, true, true),
                makePortX("ZL8",new go.Spot(0,0.4), go.Spot.Left, true, true),
                makePortX("ZL9",new go.Spot(0,0.45), go.Spot.Left, true, true),
                makePortX("ZL10",new go.Spot(0,0.5), go.Spot.Left, true, true),
                makePortX("ZL11",new go.Spot(0,0.55), go.Spot.Left, true, true),
                makePortX("ZL12",new go.Spot(0,0.6), go.Spot.Left, true, true),
                makePortX("ZL13",new go.Spot(0,0.65), go.Spot.Left, true, true),
                makePortX("ZL14",new go.Spot(0,0.7), go.Spot.Left, true, true),
                makePortX("ZL15",new go.Spot(0,0.75), go.Spot.Left, true, true),
                makePortX("ZL16",new go.Spot(0,0.8), go.Spot.Left, true, true),
                makePortX("ZL17",new go.Spot(0,0.85), go.Spot.Left, true, true),
                makePortX("ZL18",new go.Spot(0,0.9), go.Spot.Left, true, true),
                makePortX("ZL19",new go.Spot(0,0.95), go.Spot.Left, true, true),
                //右边框连接点
                makePortX("ZR1",new go.Spot(1,0.05), go.Spot.Right, true, true),
                makePortX("ZR2",new go.Spot(1,0.1), go.Spot.Right, true, true),
                makePortX("ZR3",new go.Spot(1,0.15), go.Spot.Right, true, true),
                makePortX("ZR4",new go.Spot(1,0.2), go.Spot.Right, true, true),
                makePortX("ZR5",new go.Spot(1,0.25), go.Spot.Right, true, true),
                makePortX("ZR6",new go.Spot(1,0.3), go.Spot.Right, true, true),
                makePortX("ZR7",new go.Spot(1,0.35), go.Spot.Right, true, true),
                makePortX("ZR8",new go.Spot(1,0.4), go.Spot.Right, true, true),
                makePortX("ZR9",new go.Spot(1,0.45), go.Spot.Right, true, true),
                makePortX("ZR10",new go.Spot(1,0.5), go.Spot.Right, true, true),
                makePortX("ZR11",new go.Spot(1,0.55), go.Spot.Right, true, true),
                makePortX("ZR12",new go.Spot(1,0.6), go.Spot.Right, true, true),
                makePortX("ZR13",new go.Spot(1,0.65), go.Spot.Right, true, true),
                makePortX("ZR14",new go.Spot(1,0.7), go.Spot.Right, true, true),
                makePortX("ZR15",new go.Spot(1,0.75), go.Spot.Right, true, true),
                makePortX("ZR16",new go.Spot(1,0.8), go.Spot.Right, true, true),
                makePortX("ZR17",new go.Spot(1,0.85), go.Spot.Right, true, true),
                makePortX("ZR18",new go.Spot(1,0.9), go.Spot.Right, true, true),
                makePortX("ZR19",new go.Spot(1,0.95), go.Spot.Right, true, true)
            ));
        //20170516 格式3
        myDiagram.nodeTemplateMap.add("Zone7",//信息框//ouyang
            $$(go.Node, "Spot", nodeStyle(),
                { width: 21, height: 31, background: "#B7DDE8" },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                /*$$(go.Panel, "Auto",
                 $$(go.Picture,
                 {
                 name: "PICTURE",
                 source: urlOfImages+"Zone.png",
                 width: 45.0,
                 height: 60.0
                 }
                 ),*/
                $$(go.Shape, //形状:一个 矩形
                    {
                        fill: "#B7DDE8",
                        stroke: "black",
                    }/*,
                     new go.Binding("fill", "color")*/
                ),
                $$(go.TextBlock,
                    {
                        font: "bold 24px Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "#B7DDE8",
                        opacity: 1,
                        margin: 0,
                        maxSize: new go.Size(NaN, NaN),
                        wrap: go.TextBlock.WrapFit,
                        /* textAlign:center,*/
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                /* )*/
                , makePort("T", go.Spot.Top, true, true),
                makePort("L", go.Spot.Left, true, true),
                makePort("R", go.Spot.Right, true, true),
                makePort("B", go.Spot.Bottom, true, true),
                makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                /*makePortX("TLS", new go.Spot(0,0.25), go.Spot.Left, true, true),
                 makePortX("TRS", new go.Spot(1,0.25), go.Spot.Right, true, true),
                 makePortX("BLS", new go.Spot(0,0.75), go.Spot.Left, true, true),
                 makePortX("BRS", new go.Spot(1,0.75), go.Spot.Right, true, true)*/
                //左边框链接点
                makePortX("ZL1",new go.Spot(0,0.05), go.Spot.Left, true, true),
                makePortX("ZL2",new go.Spot(0,0.1), go.Spot.Left, true, true),
                makePortX("ZL3",new go.Spot(0,0.15), go.Spot.Left, true, true),
                makePortX("Z14",new go.Spot(0,0.2), go.Spot.Left, true, true),
                makePortX("ZL5",new go.Spot(0,0.25), go.Spot.Left, true, true),
                makePortX("ZL6",new go.Spot(0,0.3), go.Spot.Left, true, true),
                makePortX("ZL7",new go.Spot(0,0.35), go.Spot.Left, true, true),
                makePortX("ZL8",new go.Spot(0,0.4), go.Spot.Left, true, true),
                makePortX("ZL9",new go.Spot(0,0.45), go.Spot.Left, true, true),
                makePortX("ZL10",new go.Spot(0,0.5), go.Spot.Left, true, true),
                makePortX("ZL11",new go.Spot(0,0.55), go.Spot.Left, true, true),
                makePortX("ZL12",new go.Spot(0,0.6), go.Spot.Left, true, true),
                makePortX("ZL13",new go.Spot(0,0.65), go.Spot.Left, true, true),
                makePortX("ZL14",new go.Spot(0,0.7), go.Spot.Left, true, true),
                makePortX("ZL15",new go.Spot(0,0.75), go.Spot.Left, true, true),
                makePortX("ZL16",new go.Spot(0,0.8), go.Spot.Left, true, true),
                makePortX("ZL17",new go.Spot(0,0.85), go.Spot.Left, true, true),
                makePortX("ZL18",new go.Spot(0,0.9), go.Spot.Left, true, true),
                makePortX("ZL19",new go.Spot(0,0.95), go.Spot.Left, true, true),
                //右边框连接点
                makePortX("ZR1",new go.Spot(1,0.05), go.Spot.Right, true, true),
                makePortX("ZR2",new go.Spot(1,0.1), go.Spot.Right, true, true),
                makePortX("ZR3",new go.Spot(1,0.15), go.Spot.Right, true, true),
                makePortX("ZR4",new go.Spot(1,0.2), go.Spot.Right, true, true),
                makePortX("ZR5",new go.Spot(1,0.25), go.Spot.Right, true, true),
                makePortX("ZR6",new go.Spot(1,0.3), go.Spot.Right, true, true),
                makePortX("ZR7",new go.Spot(1,0.35), go.Spot.Right, true, true),
                makePortX("ZR8",new go.Spot(1,0.4), go.Spot.Right, true, true),
                makePortX("ZR9",new go.Spot(1,0.45), go.Spot.Right, true, true),
                makePortX("ZR10",new go.Spot(1,0.5), go.Spot.Right, true, true),
                makePortX("ZR11",new go.Spot(1,0.55), go.Spot.Right, true, true),
                makePortX("ZR12",new go.Spot(1,0.6), go.Spot.Right, true, true),
                makePortX("ZR13",new go.Spot(1,0.65), go.Spot.Right, true, true),
                makePortX("ZR14",new go.Spot(1,0.7), go.Spot.Right, true, true),
                makePortX("ZR15",new go.Spot(1,0.75), go.Spot.Right, true, true),
                makePortX("ZR16",new go.Spot(1,0.8), go.Spot.Right, true, true),
                makePortX("ZR17",new go.Spot(1,0.85), go.Spot.Right, true, true),
                makePortX("ZR18",new go.Spot(1,0.9), go.Spot.Right, true, true),
                makePortX("ZR19",new go.Spot(1,0.95), go.Spot.Right, true, true)
            ));
        myDiagram.nodeTemplateMap.add("Zone8",//信息框//ouyang
            $$(go.Node, "Spot", nodeStyle(),
                { width: 21, height: 31, background: "#E5B9B5" },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                /*$$(go.Panel, "Auto",
                 $$(go.Picture,
                 {
                 name: "PICTURE",
                 source: urlOfImages+"Zone.png",
                 width: 45.0,
                 height: 60.0
                 }
                 ),*/
                $$(go.Shape, //形状:一个 圆角矩形 ，默认填充色为 白色，边框颜色为 红色
                    {
                        fill: "#E5B9B5",
                        stroke: "black",
                    }/*,
                     new go.Binding("fill", "color")*/
                ),
                $$(go.TextBlock,
                    {
                        textAlign: "center",
                        font: "bold 24px Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "#E5B9B5",
                        opacity: 1,
                        margin: 0,
                        maxSize: new go.Size(NaN, NaN),
                        wrap: go.TextBlock.WrapFit,
                        /* textAlign:center,*/
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                /* )*/
                , makePort("T", go.Spot.Top, true, true),
                makePort("L", go.Spot.Left, true, true),
                makePort("R", go.Spot.Right, true, true),
                makePort("B", go.Spot.Bottom, true, true),
                makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                //左边框链接点
                makePortX("ZL1",new go.Spot(0,0.05), go.Spot.Left, true, true),
                makePortX("ZL2",new go.Spot(0,0.1), go.Spot.Left, true, true),
                makePortX("ZL3",new go.Spot(0,0.15), go.Spot.Left, true, true),
                makePortX("Z14",new go.Spot(0,0.2), go.Spot.Left, true, true),
                makePortX("ZL5",new go.Spot(0,0.25), go.Spot.Left, true, true),
                makePortX("ZL6",new go.Spot(0,0.3), go.Spot.Left, true, true),
                makePortX("ZL7",new go.Spot(0,0.35), go.Spot.Left, true, true),
                makePortX("ZL8",new go.Spot(0,0.4), go.Spot.Left, true, true),
                makePortX("ZL9",new go.Spot(0,0.45), go.Spot.Left, true, true),
                makePortX("ZL10",new go.Spot(0,0.5), go.Spot.Left, true, true),
                makePortX("ZL11",new go.Spot(0,0.55), go.Spot.Left, true, true),
                makePortX("ZL12",new go.Spot(0,0.6), go.Spot.Left, true, true),
                makePortX("ZL13",new go.Spot(0,0.65), go.Spot.Left, true, true),
                makePortX("ZL14",new go.Spot(0,0.7), go.Spot.Left, true, true),
                makePortX("ZL15",new go.Spot(0,0.75), go.Spot.Left, true, true),
                makePortX("ZL16",new go.Spot(0,0.8), go.Spot.Left, true, true),
                makePortX("ZL17",new go.Spot(0,0.85), go.Spot.Left, true, true),
                makePortX("ZL18",new go.Spot(0,0.9), go.Spot.Left, true, true),
                makePortX("ZL19",new go.Spot(0,0.95), go.Spot.Left, true, true),
                //右边框连接点
                makePortX("ZR1",new go.Spot(1,0.05), go.Spot.Right, true, true),
                makePortX("ZR2",new go.Spot(1,0.1), go.Spot.Right, true, true),
                makePortX("ZR3",new go.Spot(1,0.15), go.Spot.Right, true, true),
                makePortX("ZR4",new go.Spot(1,0.2), go.Spot.Right, true, true),
                makePortX("ZR5",new go.Spot(1,0.25), go.Spot.Right, true, true),
                makePortX("ZR6",new go.Spot(1,0.3), go.Spot.Right, true, true),
                makePortX("ZR7",new go.Spot(1,0.35), go.Spot.Right, true, true),
                makePortX("ZR8",new go.Spot(1,0.4), go.Spot.Right, true, true),
                makePortX("ZR9",new go.Spot(1,0.45), go.Spot.Right, true, true),
                makePortX("ZR10",new go.Spot(1,0.5), go.Spot.Right, true, true),
                makePortX("ZR11",new go.Spot(1,0.55), go.Spot.Right, true, true),
                makePortX("ZR12",new go.Spot(1,0.6), go.Spot.Right, true, true),
                makePortX("ZR13",new go.Spot(1,0.65), go.Spot.Right, true, true),
                makePortX("ZR14",new go.Spot(1,0.7), go.Spot.Right, true, true),
                makePortX("ZR15",new go.Spot(1,0.75), go.Spot.Right, true, true),
                makePortX("ZR16",new go.Spot(1,0.8), go.Spot.Right, true, true),
                makePortX("ZR17",new go.Spot(1,0.85), go.Spot.Right, true, true),
                makePortX("ZR18",new go.Spot(1,0.9), go.Spot.Right, true, true),
                makePortX("ZR19",new go.Spot(1,0.95), go.Spot.Right, true, true)
            ));
        myDiagram.nodeTemplateMap.add("Zone9",//信息框//ouyang
            $$(go.Node, "Spot", nodeStyle(),
                { width: 21, height: 31, background: "#D8D8D8" },
                new go.Binding("width", "width").makeTwoWay(),
                new go.Binding("height", "height").makeTwoWay(),
                new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                /*$$(go.Panel, "Auto",
                 $$(go.Picture,
                 {
                 name: "PICTURE",
                 source: urlOfImages+"Zone.png",
                 width: 45.0,
                 height: 60.0
                 }
                 ),*/
                $$(go.Shape, //形状:一个 圆角矩形 ，默认填充色为 白色，边框颜色为 红色
                    {
                        fill: "#D8D8D8",
                        stroke: "black",
                    }/*,
                     new go.Binding("fill", "color")*/
                ),
                $$(go.TextBlock,
                    {
                        textAlign: "center",
                        font: "bold 24px Helvetica, Arial, sans-serif",
                        stroke: lightText,
                        background: "#D8D8D8",
                        opacity: 1,
                        margin: 0,
                        maxSize: new go.Size(NaN, NaN),
                        wrap: go.TextBlock.WrapFit,
                        /* textAlign:center,*/
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
                /* )*/
                , makePort("T", go.Spot.Top, true, true),
                makePort("L", go.Spot.Left, true, true),
                makePort("R", go.Spot.Right, true, true),
                makePort("B", go.Spot.Bottom, true, true),
                makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                //左边框链接点
                makePortX("ZL1",new go.Spot(0,0.05), go.Spot.Left, true, true),
                makePortX("ZL2",new go.Spot(0,0.1), go.Spot.Left, true, true),
                makePortX("ZL3",new go.Spot(0,0.15), go.Spot.Left, true, true),
                makePortX("Z14",new go.Spot(0,0.2), go.Spot.Left, true, true),
                makePortX("ZL5",new go.Spot(0,0.25), go.Spot.Left, true, true),
                makePortX("ZL6",new go.Spot(0,0.3), go.Spot.Left, true, true),
                makePortX("ZL7",new go.Spot(0,0.35), go.Spot.Left, true, true),
                makePortX("ZL8",new go.Spot(0,0.4), go.Spot.Left, true, true),
                makePortX("ZL9",new go.Spot(0,0.45), go.Spot.Left, true, true),
                makePortX("ZL10",new go.Spot(0,0.5), go.Spot.Left, true, true),
                makePortX("ZL11",new go.Spot(0,0.55), go.Spot.Left, true, true),
                makePortX("ZL12",new go.Spot(0,0.6), go.Spot.Left, true, true),
                makePortX("ZL13",new go.Spot(0,0.65), go.Spot.Left, true, true),
                makePortX("ZL14",new go.Spot(0,0.7), go.Spot.Left, true, true),
                makePortX("ZL15",new go.Spot(0,0.75), go.Spot.Left, true, true),
                makePortX("ZL16",new go.Spot(0,0.8), go.Spot.Left, true, true),
                makePortX("ZL17",new go.Spot(0,0.85), go.Spot.Left, true, true),
                makePortX("ZL18",new go.Spot(0,0.9), go.Spot.Left, true, true),
                makePortX("ZL19",new go.Spot(0,0.95), go.Spot.Left, true, true),
                //右边框连接点
                makePortX("ZR1",new go.Spot(1,0.05), go.Spot.Right, true, true),
                makePortX("ZR2",new go.Spot(1,0.1), go.Spot.Right, true, true),
                makePortX("ZR3",new go.Spot(1,0.15), go.Spot.Right, true, true),
                makePortX("ZR4",new go.Spot(1,0.2), go.Spot.Right, true, true),
                makePortX("ZR5",new go.Spot(1,0.25), go.Spot.Right, true, true),
                makePortX("ZR6",new go.Spot(1,0.3), go.Spot.Right, true, true),
                makePortX("ZR7",new go.Spot(1,0.35), go.Spot.Right, true, true),
                makePortX("ZR8",new go.Spot(1,0.4), go.Spot.Right, true, true),
                makePortX("ZR9",new go.Spot(1,0.45), go.Spot.Right, true, true),
                makePortX("ZR10",new go.Spot(1,0.5), go.Spot.Right, true, true),
                makePortX("ZR11",new go.Spot(1,0.55), go.Spot.Right, true, true),
                makePortX("ZR12",new go.Spot(1,0.6), go.Spot.Right, true, true),
                makePortX("ZR13",new go.Spot(1,0.65), go.Spot.Right, true, true),
                makePortX("ZR14",new go.Spot(1,0.7), go.Spot.Right, true, true),
                makePortX("ZR15",new go.Spot(1,0.75), go.Spot.Right, true, true),
                makePortX("ZR16",new go.Spot(1,0.8), go.Spot.Right, true, true),
                makePortX("ZR17",new go.Spot(1,0.85), go.Spot.Right, true, true),
                makePortX("ZR18",new go.Spot(1,0.9), go.Spot.Right, true, true),
                makePortX("ZR19",new go.Spot(1,0.95), go.Spot.Right, true, true)
            ));
    //横向连接区域
        myDiagram.nodeTemplateMap.add("HZone",//信息框//ouyang
                $$(go.Node, "Spot", nodeStyle(),
                    { width: 100, height: 5, background: "#D8D8D8" },
                    new go.Binding("width", "width").makeTwoWay(),
                    new go.Binding("height", "height").makeTwoWay(),
                    new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                    /*$$(go.Panel, "Auto",
                     $$(go.Picture,
                     {
                     name: "PICTURE",
                     source: urlOfImages+"Zone.png",
                     width: 45.0,
                     height: 60.0
                     }
                     ),*/
                    $$(go.Shape, //形状:一个 圆角矩形 ，默认填充色为 白色，边框颜色为 红色
                        {
                            fill: "#D8D8D8",
                            stroke: "black",
                        }/*,
                     new go.Binding("fill", "color")*/
                    ),
                    $$(go.TextBlock,
                        {
                            textAlign: "center",
                            font: "bold 24px Helvetica, Arial, sans-serif",
                            stroke: lightText,
                            background: "#D8D8D8",
                            opacity: 1,
                            margin: 0,
                            maxSize: new go.Size(NaN, NaN),
                            wrap: go.TextBlock.WrapFit,
                            /* textAlign:center,*/
                            editable: true
                        },
                        new go.Binding("text").makeTwoWay())
                    /* )*/
                    , makePort("T", go.Spot.Top, true, true),
                    makePort("L", go.Spot.Left, true, true),
                    makePort("R", go.Spot.Right, true, true),
                    makePort("B", go.Spot.Bottom, true, true),
                    makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                    makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                    makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                    makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true),
                    //上边框链接点
                    makePort("ZL1c", new go.Spot(0.05, 0), go.Spot.Top, true, true),
                    makePort("ZL1", new go.Spot(0.1, 0), go.Spot.Top, true, true),
                    makePort("ZL1a", new go.Spot(0.15, 0), go.Spot.Top, true, true),
                    makePort("ZL2", new go.Spot(0.2, 0), go.Spot.Top, true, true),
                    makePort("ZL2a", new go.Spot(0.25, 0), go.Spot.Top, true, true),
                    makePort("ZL3", new go.Spot(0.3, 0), go.Spot.Top, true, true),
                    makePort("ZL3a", new go.Spot(0.35, 0), go.Spot.Top, true, true),
                    makePort("Z14", new go.Spot(0.4, 0), go.Spot.Top, true, true),
                    makePort("Z14a", new go.Spot(0.45, 0), go.Spot.Top, true, true),
                    makePort("ZL5", new go.Spot(0.5, 0), go.Spot.Top, true, true),
                    makePort("ZL5a", new go.Spot(0.55, 0), go.Spot.Top, true, true),
                    makePort("ZL6", new go.Spot(0.6, 0), go.Spot.Top, true, true),
                    makePort("ZL6a", new go.Spot(0.65, 0), go.Spot.Top, true, true),
                    makePort("ZL7", new go.Spot(0.7, 0), go.Spot.Top, true, true),
                    makePort("ZL7a", new go.Spot(0.75, 0), go.Spot.Top, true, true),
                    makePort("ZL8", new go.Spot(0.8, 0), go.Spot.Top, true, true),
                    makePort("ZL8a", new go.Spot(0.85, 0), go.Spot.Top, true, true),
                    makePort("ZL9", new go.Spot(0.9, 0), go.Spot.Top, true, true),
                     makePort("ZL9a", new go.Spot(0.95, 0), go.Spot.Top, true, true),
                    makePort("ZL10", new go.Spot(1, 0), go.Spot.Top, true, true)
                    
                    
                ));
    //横向文本区域
        myDiagram.nodeTemplateMap.add("HText",//信息框//ouyang
                $$(go.Node, "Spot", nodeStyle(),
                    { width: 100, height: 27, background: "#ffffff" },
                    new go.Binding("width", "width").makeTwoWay(),
                    new go.Binding("height", "height").makeTwoWay(),
                    new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
                    /*$$(go.Panel, "Auto",
                     $$(go.Picture,
                     {
                     name: "PICTURE",
                     source: urlOfImages+"Zone.png",
                     width: 45.0,
                     height: 60.0
                     }
                     ),*/
                    $$(go.Shape, //形状:一个 圆角矩形 ，默认填充色为 白色，边框颜色为 红色
                        {
                            fill: "#ffffff",
                            stroke: "black",
                        }/*,
                     new go.Binding("fill", "color")*/
                    ),
                    $$(go.TextBlock,
                        {
                            textAlign: "left",
                            font: "18px Helvetica, Arial, sans-serif",
                            stroke: lightText,
                            background: "ffffff",
                            opacity: 1,
                            margin: 0,
                            maxSize: new go.Size(NaN, NaN),
                            wrap: go.TextBlock.WrapFit,
                            /* textAlign:center,*/
                            editable: true
                        },
                        new go.Binding("text").makeTwoWay())
                    /* )*/
                    , makePort("T", go.Spot.Top, true, true),
                    makePort("L", go.Spot.Left, true, true),
                    makePort("R", go.Spot.Right, true, true),
                    makePort("B", go.Spot.Bottom, true, true),
                    makePortX("TL", go.Spot.TopLeft, go.Spot.Left, true, true),
                    makePortX("TR", go.Spot.TopRight, go.Spot.Right, true, true),
                    makePortX("BL", go.Spot.BottomLeft, go.Spot.Left, true, true),
                    makePortX("BR", go.Spot.BottomRight, go.Spot.Right, true, true)
                   
                ));


        //实时监控位号
		 myDiagram.nodeTemplateMap.add("dataTag",
			$$(go.Node, "Auto",{ 
				locationObjectName: "BODY",
				locationSpot: go.Spot.Center,
				selectionObjectName: "BODY",
				resizable: true, resizeObjectName: "BODY",
				toolTip: $$(go.Adornment,
                    "Auto",
                    $$(go.Shape, { fill: "#FFFFCC" }),
                    $$(go.TextBlock, { margin: 0 },
                    new go.Binding("text", "", function (data) { return data.TagFormulaRT })
                    )),
				doubleClick: function (e, node) {
					alert('显示趋势图：' + node.part.data.text);},
				contextMenu: $$(go.Adornment, "Vertical",$$("ContextMenuButton",
					  $$(go.TextBlock, "设置位号"),  { 
					    click: function (e, obj) { 
						var part = obj.part.adornedPart;
						debugger
						setPartOnEditing0(part);
						partToDialog("dialogOfTagFormulaRt");
						openDialog0("dialogOfTagFormulaRt");
					  }})
				),
			},
			new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),			
			$$(go.Panel,"Auto",	{
					height:15,width:50,name:"BODY"
				},
				new go.Binding("width","width").makeTwoWay(),
				new go.Binding("height","height").makeTwoWay(),
				new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
				$$(go.Shape, "Rectangle",{ fill: "white", stroke: null, strokeWidth: 0 }),
					$$(go.TextBlock,{ margin: 0, textAlign: "left", font: "14pt  宋体,sans-serif", 
					stroke: "black", editable: false
					},
					new go.Binding("text", "text").makeTwoWay()))
			
		  )
		); 
	    //实时监控位号 18号宋体黑色20170720
		 myDiagram.nodeTemplateMap.add("dataTag18",
			$$(go.Node, "Auto",{ 
			    locationObjectName: "BODY",
			    locationSpot: go.Spot.Center,
			    selectionObjectName: "BODY",
			    resizable: true, resizeObjectName: "BODY",
			    toolTip: $$(go.Adornment,
                    "Auto",
                    $$(go.Shape, { fill: "#FFFFCC" }),
                    $$(go.TextBlock, { margin: 0 },
                    new go.Binding("text", "", function (data) { return data.TagFormulaRT })
                    )),
			    doubleClick: function (e, node) {
			        alert('显示趋势图：' + node.part.data.text);},
			    contextMenu: $$(go.Adornment, "Vertical",$$("ContextMenuButton",
					  $$(go.TextBlock, "设置位号"),  { 
					      click: function (e, obj) { 
					          var part = obj.part.adornedPart;
					          setPartOnEditing0(part);
					          partToDialog("dialogOfTagFormulaRt");
					          openDialog0("dialogOfTagFormulaRt");
					      }})
				),
			},
			new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),			
			$$(go.Panel,"Auto",	{
			    height:18,width:50,name:"BODY"
			},
				new go.Binding("width","width").makeTwoWay(),
				new go.Binding("height","height").makeTwoWay(),
				new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
				$$(go.Shape, "Rectangle",{ fill: "white", stroke: null, strokeWidth: 0 }),
					$$(go.TextBlock,{ margin: 0, textAlign: "left", font: " 18pt  宋体,sans-serif",
					    stroke: "black", editable: false
					},
					new go.Binding("text", "text").makeTwoWay()))
			
		  )
		);  
	    //实时监控位号 16号宋体黑色20170721
		 myDiagram.nodeTemplateMap.add("dataTag16",
			$$(go.Node, "Auto",{ 
			    locationObjectName: "BODY",
			    locationSpot: go.Spot.Center,
			    selectionObjectName: "BODY",
			    resizable: true, resizeObjectName: "BODY",
			    toolTip: $$(go.Adornment,
                    "Auto",
                    $$(go.Shape, { fill: "#FFFFCC" }),
                    $$(go.TextBlock, { margin: 0 },
                    new go.Binding("text", "", function (data) { return data.TagFormulaRT })
                    )),
			    doubleClick: function (e, node) {
			        alert('显示趋势图：' + node.part.data.text);},
			    contextMenu: $$(go.Adornment, "Vertical",$$("ContextMenuButton",
					  $$(go.TextBlock, "设置位号"),  { 
					      click: function (e, obj) { 
					          var part = obj.part.adornedPart;
					          setPartOnEditing0(part);
					          partToDialog("dialogOfTagFormulaRt");
					          openDialog0("dialogOfTagFormulaRt");
					      }})
				),
			},
			new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),			
			$$(go.Panel,"Auto",	{
			    height:18,width:70,name:"BODY"
			},
				new go.Binding("width","width").makeTwoWay(),
				new go.Binding("height","height").makeTwoWay(),
				new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),
				$$(go.Shape, "Rectangle",{ fill: "white", stroke: null, strokeWidth: 0 }),
					$$(go.TextBlock,{ margin: 0, textAlign: "left", font: " 16pt  宋体,sans-serif",
					    stroke: "black", editable: false
					},
					new go.Binding("text", "text").makeTwoWay()))
			
		  )
		);  
		
		//实时监控位号 18号宋体红色，万金牛20170505增加
		 myDiagram.nodeTemplateMap.add("dataTagred",
			$$(go.Node, "Auto",{ 
				locationObjectName: "BODY",
				locationSpot: go.Spot.Center,
				selectionObjectName: "BODY",
				resizable: true, resizeObjectName: "BODY",
				toolTip: $$(go.Adornment,
                    "Auto",
                    $$(go.Shape, { fill: "#FFFFCC" }),
                    $$(go.TextBlock, { margin: 0 },
                    new go.Binding("text", "", function (data) { return data.TagFormulaRT })
                    )),
				doubleClick: function (e, node) {
					alert('显示趋势图：' + node.part.data.text);},
				contextMenu: $$(go.Adornment, "Vertical",$$("ContextMenuButton",
					  $$(go.TextBlock, "设置位号"),  { 
					    click: function (e, obj) { 
						var part = obj.part.adornedPart;
						setPartOnEditing0(part);
						partToDialog("dialogOfTagFormulaRt");
						openDialog0("dialogOfTagFormulaRt");
					  }})
				),
			},
			new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),			
			$$(go.Panel,"Auto",	{
					height:18,width:50,name:"BODY"
				},
				/*new go.Binding("width","width").makeTwoWay(),
				new go.Binding("height","height").makeTwoWay(),
				new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),*/
				$$(go.Shape, "Rectangle",{ fill: "white", stroke: null, strokeWidth: 0 }),
					$$(go.TextBlock,{ margin: 0, textAlign: "left", font: "bold 18pt  宋体,sans-serif",
					stroke: "red", editable: false
					},
					new go.Binding("text", "text").makeTwoWay()))
			
		  )
		);  
		
		//实时监控位号 12号宋体，万金牛20170505增加给主图使用
		 myDiagram.nodeTemplateMap.add("dataTagzt",
			$$(go.Node, "Auto",{ 
				locationObjectName: "BODY",
				locationSpot: go.Spot.Center,
				selectionObjectName: "BODY",
				resizable: true, resizeObjectName: "BODY",
				toolTip: $$(go.Adornment,
                    "Auto",
                    $$(go.Shape, { fill: "#FFFFCC" }),
                    $$(go.TextBlock, { margin: 0 },  
                    new go.Binding("text", "", function (data) { return data.TagFormulaRT })
                    )),
				doubleClick: function (e, node) {
					alert('显示趋势图：' + node.part.data.text);},
				contextMenu: $$(go.Adornment, "Vertical",$$("ContextMenuButton",
					  $$(go.TextBlock, "设置位号"),  { 
					    click: function (e, obj) { 
						var part = obj.part.adornedPart;
						setPartOnEditing0(part);
						partToDialog("dialogOfTagFormulaRt");
						openDialog0("dialogOfTagFormulaRt");
					  }})
				),
			},
			new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),			
			$$(go.Panel,"Auto",	{
					height:15,width:50,name:"BODY"
				},
				/*new go.Binding("width","width").makeTwoWay(),
				new go.Binding("height","height").makeTwoWay(),
				new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify),*/
				$$(go.Shape, "Rectangle",{ fill: "white", stroke: null, strokeWidth: 0 }),
					$$(go.TextBlock,{ margin: 0, textAlign: "left", font: "12pt  宋体,sans-serif", 
					stroke: "black", editable: false
					},
					new go.Binding("text", "text").makeTwoWay()))
			
		  )
		);  
		
		
		// myDiagram.nodeTemplateMap.add("dataTag",
			// $$(go.Panel, "Auto",
				  // { width: 20, 
					// height: 10
				  // }, // panel properties
				  // new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
				  // new go.Binding("width","width").makeTwoWay(),
				  // new go.Binding("height","height").makeTwoWay(),
				  //elements in the panel:
				  // $(go.Shape, "Rectangle", { fill: "white", stroke: null, strokeWidth:0 }),
				  // $(go.TextBlock, "SomeText",new go.Binding("text", "text").makeTwoWay())
			 // )
		// );
		
		
		/*// Full example:
$(go.Panel, "Horizontal",
  { width: 60, height: 60 }, // panel properties
  // elements in the panel:
  $(go.Shape, "Rectangle", { stroke: "lime" }),
  $(go.TextBlock, "Some Text")
) // end of panel definition  sh*/
		// svg图直接显示node模板
		// 添加显示流程图svg的node	
		/* myDiagram.nodeTemplateMap.add("flowchart",
			$$(go.Node, "Auto",
				{
					locationSpot: new go.Spot(0, 0),
					doubleClick: function (e, node) {
							var part = node.part;
							alert('to set svg');
							setPartOnEditing0(part);
							partToDialog("diaglogOfBindingSvg");
							openDialog0("diaglogOfBindingSvg");
						}
				},
				new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
				$$(go.Panel, "Auto",
					$$(go.Picture,
						{
							name: "PICTURE2",
							source:"./assets/images/ly2b.png"
							,width: 100
							,height: 100
						},
						new go.Binding("source", "figure").makeTwoWay()
						,new go.Binding("width","width").makeTwoWay()
						,new go.Binding("height","width").makeTwoWay()
					) 
				)));*/
				
		myDiagram.nodeTemplateMap.add("flowchart",
			$$(go.Node, "Auto",
				{
					locationObjectName: "PICTURE2",
					locationSpot: go.Spot.Center,
					selectionObjectName: "PICTURE2",
					resizable: true, resizeObjectName: "PICTURE2",
					locationSpot: new go.Spot(0, 0),
					doubleClick: function (e, node) {
							var part = node.part;
							//alert('to set svg');
							setPartOnEditing0(part);
							partToDialog("diaglogOfBindingSvg");
							openDialog0("diaglogOfBindingSvg");
						}
				},
				new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
				$$(go.Picture,
						{
							name: "PICTURE2",
							source:"./assets/images/ly2b.png"
							,width: 100
							,height: 100
						},
						new go.Binding("source", "figure").makeTwoWay()
						,new go.Binding("width","width").makeTwoWay()
						,new go.Binding("height","height").makeTwoWay()
					)
				));
		
			
		
	    //该信息框背景采用纯色，可任意添加文字//ouyang
        myDiagram.nodeTemplateMap.add("Comment",
          $$(go.Node, "Auto", nodeStyle(),
            $$(go.Shape, "File",
              { fill: "#FFFFFF", stroke: null }),
            $$(go.TextBlock,
              {
                  margin: 0,
                  maxSize: new go.Size(200, NaN),
                  wrap: go.TextBlock.WrapFit,
                  textAlign: "left",
                  editable: true,
                  font: "bold 10pt Helvetica, 宋体, sans-serif",
                  stroke: '#454545'
              },
              new go.Binding("text").makeTwoWay())
            // no ports, because no links are allowed to connect with a comment
          ));
        //20150516 新增文字模板
        myDiagram.nodeTemplateMap.add("Comment1",
            $$(go.Node, "Auto", nodeStyle(),
                $$(go.Shape, "File",
                    { fill: "#FFFFFF", stroke: null }),
                $$(go.TextBlock,
                    {
                        margin: 0,
                        maxSize: new go.Size(200, NaN),
                        wrap: go.TextBlock.WrapFit,
                        textAlign: "left",
                        editable: true,
                        font: "12pt  宋体,sans-serif",
                        stroke: '#454545'
                    },
                    new go.Binding("text").makeTwoWay())
                // no ports, because no links are allowed to connect with a comment
            ));
        myDiagram.nodeTemplateMap.add("Comment2",
            $$(go.Node, "Auto", nodeStyle(),
                $$(go.Shape, "File",
                    { fill: "#FFFFFF", stroke: null }),
                $$(go.TextBlock,
                    {
                        margin: 0,
                        maxSize: new go.Size(200, NaN),
                        wrap: go.TextBlock.WrapFit,
                        textAlign: "left",
                        editable: true,
                        font: "14pt  宋体,sans-serif",
                        stroke: '#454545'
                    },
                    new go.Binding("text").makeTwoWay())
                // no ports, because no links are allowed to connect with a comment
            ));
        //20170721 16号文本
        myDiagram.nodeTemplateMap.add("Comment16",
            $$(go.Node, "Auto", nodeStyle(),
                $$(go.Shape, "File",
                    { fill: "#FFFFFF", stroke: null }),
                $$(go.TextBlock,
                    {
                        margin: 0,
                        maxSize: new go.Size(200, NaN),
                        wrap: go.TextBlock.WrapFit,
                        textAlign: "left",
                        editable: true,
                        font: "16pt  宋体,sans-serif",
                        stroke: '#454545'
                    },
                    new go.Binding("text").makeTwoWay())
                // no ports, because no links are allowed to connect with a comment
            ));
        myDiagram.nodeTemplateMap.add("Comment3",
            $$(go.Node, "Auto", nodeStyle(),
                $$(go.Shape, "File",
                    { fill: "#FFFFFF", stroke: null }),
                $$(go.TextBlock,
                    {
                        margin: 0,
                        maxSize: new go.Size(200, NaN),
                        wrap: go.TextBlock.WrapFit,
                        textAlign: "left",
                        editable: true,
                        font: "18pt  宋体,sans-serif",
                        stroke: '#454545'
                    },
                    new go.Binding("text").makeTwoWay())
                // no ports, because no links are allowed to connect with a comment
            ));
        // replace the default Link template in the linkTemplateMap
        myDiagram.linkTemplate = $$(go.Link,  // the whole link panel
            {
				contextMenu: partContextMenu,
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5,
                //toShortLength: 4,
                toShortLength: -2,
                fromShortLength: -2,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                // mouse-overs subtly highlight links:
                mouseEnter: function (e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                mouseLeave: function (e, link) { link.findObject("HIGHLIGHT").stroke = "transparent";
                }
                , toolTip: $$(go.Adornment,
                    "Auto",
                    $$(go.Shape, { fill: "#FFFFCC" }),
                    $$(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                    new go.Binding("text", "", function (data) { return data.label })//new go.Binding("text", "", linkInfo))
                    )
                    )
            },
            new go.Binding("points").makeTwoWay(),
            // mark each Shape to get the link geometry with isPanelMain: true
            $$(go.Shape, { isPanelMain: true, stroke: "transparent"/* blue*/, strokeWidth: 4, name: "HIGHLIGHT" }),
            $$(go.Shape, { isPanelMain: true, stroke: "gray"/* blue*/, strokeWidth: 4 }, new go.Binding("stroke", "color")),
            $$(go.Shape, { isPanelMain: true, stroke: "white", name: "PIPE", strokeDashArray: [20, 40] }),
            $$(go.Shape,  // the arrowhead
            { toArrow: "standard", stroke: null, fill: "gray" }),
            $$(go.Panel, "Auto",  // the link label, normally not visible
            { visible: false, name: "LABEL", segmentIndex: 2, segmentFraction: 0.5 },
            new go.Binding("visible", "visible").makeTwoWay(),
            $$(go.Shape, "RoundedRectangle",  // the label shape
            { fill: "#F8F8F8", stroke: null }),
            $$(go.TextBlock,"",  // the label
            {
                textAlign: "center",
                font: "10pt helvetica, arial, sans-serif",
                stroke: "#333333",
                margin: 4,
                editable: true

            },
            new go.Binding("text").makeTwoWay()
            )
            )
            );

        //20170516新增两条线 ysh
        myDiagram.linkTemplateMap.add(
            "NoStart",
            $$(
                go.Link, {
                    contextMenu: partContextMenu,
                    routing: go.Link.AvoidsNodes,
                    curve: go.Link.JumpOver,
                    corner: 5,
                    //toShortLength: 4,
                    toShortLength: -2,
                    fromShortLength: -2,
                    relinkableFrom: true,
                    relinkableTo: true,
                    reshapable: true,
                    resegmentable: true,
                    // mouse-overs subtly highlight links:
                    mouseEnter: function(e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                    mouseLeave: function(e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                    toolTip: $$(go.Adornment, "Auto",
                        $$(go.Shape, { fill: "#FFFFCC" }),
                        $$(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                            new go.Binding("text", "", function(data) { return data.label })//new go.Binding("text", "", linkInfo))
                        ))
                },
                // make sure links come in from the proper direction and go out appropriately
                new go.Binding("fromSpot", "fromSpot", function(d) { return spotConverter(d);
                }),
                new go.Binding("toSpot", "toSpot", function(d) { return spotConverter(d); }),
                new go.Binding("points").makeTwoWay(),
                //new go.Binding("key").makeTwoWay(),
                $$(go.Shape, { isPanelMain: true, stroke: "transparent"/* blue*/, strokeWidth: 4, name: "HIGHLIGHT" }),
                // mark each Shape to get the link geometry with isPanelMain: true
                $$(go.Shape, { isPanelMain: true, stroke: "gray"/* blue*/, strokeWidth: 2 },
                    new go.Binding("stroke", "gray")
                ),
                $$(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [2, 10] }),
                $$(go.Shape,  // the arrowhead
                    { toArrow: "standard", stroke: null, fill: "gray" }/*gray*/
                )
                ,
                $$(go.TextBlock,
                    "",  // the label
                    {
                        textAlign: "center",
                        font: "10pt helvetica, arial, sans-serif",
                        stroke: "#333333",
                        margin: 4,
                        minSize: new go.Size(20, 20),
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay()
                )
            )
        );
        myDiagram.linkTemplateMap.add(
            "MaterialGAS",
            $$(
                go.Link, {
                    contextMenu: partContextMenu,
                    routing: go.Link.AvoidsNodes,
                    curve: go.Link.JumpOver,
                    corner: 5,
                    //toShortLength: 4,
                    toShortLength: -2,
                    fromShortLength: -2,
                    relinkableFrom: true,
                    relinkableTo: true,
                    reshapable: true,
                    resegmentable: true,
                    // mouse-overs subtly highlight links:
                    mouseEnter: function(e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                    mouseLeave: function(e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                    toolTip: $$(go.Adornment, "Auto",
                        $$(go.Shape, { fill: "#FFFFCC" }),
                        $$(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                            new go.Binding("text", "", function(data) { return data.label })//new go.Binding("text", "", linkInfo))
                        ))
                },
                // make sure links come in from the proper direction and go out appropriately
                new go.Binding("fromSpot", "fromSpot", function(d) { return spotConverter(d);
                }),
                new go.Binding("toSpot", "toSpot", function(d) { return spotConverter(d); }),
                new go.Binding("points").makeTwoWay(),
                //new go.Binding("key").makeTwoWay(),
                $$(go.Shape, { isPanelMain: true, stroke: "transparent"/* blue*/, strokeWidth: 4, name: "HIGHLIGHT" }),
                // mark each Shape to get the link geometry with isPanelMain: true
                $$(go.Shape, { isPanelMain: true, stroke: "#EA700D"/* blue*/, strokeWidth: 2 },
                    new go.Binding("stroke", "gray")
                ),
                $$(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [2, 10] }),
                $$(go.Shape,  // the arrowhead
                    { toArrow: "standard", stroke: null, fill: "#EA700D" }/*gray*/
                )
                ,
                $$(go.TextBlock,
                    "",  // the label
                    {
                        textAlign: "center",
                        font: "10pt helvetica, arial, sans-serif",
                        stroke: "#333333",
                        margin: 4,
                        minSize: new go.Size(20, 20),
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay()
                )
            )
        );
                            
        myDiagram.linkTemplateMap.add(
            "Material",
            $$(
            go.Link, {
				contextMenu: partContextMenu,
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5,
                //toShortLength: 4,
                toShortLength: -2,
                fromShortLength: -2,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                // mouse-overs subtly highlight links:
                mouseEnter: function(e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                mouseLeave: function(e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                toolTip: $$(go.Adornment, "Auto",
                      $$(go.Shape, { fill: "#FFFFCC" }),
                      $$(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                              new go.Binding("text", "", function(data) { return data.label })//new go.Binding("text", "", linkInfo))
              ))
            },
                       // make sure links come in from the proper direction and go out appropriately
                       new go.Binding("fromSpot", "fromSpot", function(d) { return spotConverter(d);
                       }),
                       new go.Binding("toSpot", "toSpot", function(d) { return spotConverter(d); }),
                       new go.Binding("points").makeTwoWay(),
                       //new go.Binding("key").makeTwoWay(),
                       $$(go.Shape, { isPanelMain: true, stroke: "transparent"/* blue*/, strokeWidth: 4, name: "HIGHLIGHT" }),
                       // mark each Shape to get the link geometry with isPanelMain: true
                       $$(go.Shape, { isPanelMain: true, stroke: "black"/* blue*/, strokeWidth: 2 },
            new go.Binding("stroke", "gray")
            ),
            $$(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [2, 10] }),
            $$(go.Shape,  // the arrowhead
            { toArrow: "standard", stroke: null, fill: "black" }/*gray*/
            )
            ,
            $$(go.TextBlock,
            "",  // the label
            {
                textAlign: "center",
                font: "10pt helvetica, arial, sans-serif",
                stroke: "#333333",
                margin: 4,
                minSize: new go.Size(20, 20),
                editable: true
            },
            new go.Binding("text").makeTwoWay()
            )
            )
            );
        
                            
        myDiagram.linkTemplateMap.add(
            "Steam_1_0_MPa",
            $$(
            go.Link, {
				contextMenu: partContextMenu,
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5,
                //toShortLength: 4,
                toShortLength: -2,
                fromShortLength: -2,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                // mouse-overs subtly highlight links:
                mouseEnter: function(e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                mouseLeave: function(e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                toolTip: $$(go.Adornment, "Auto",
                      $$(go.Shape, { fill: "#FFFFCC" }),
                      $$(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                              new go.Binding("text", "", function(data) { return data.label })//new go.Binding("text", "", linkInfo))
              ))
            },
                       // make sure links come in from the proper direction and go out appropriately
                       new go.Binding("fromSpot", "fromSpot", function(d) { return spotConverter(d);
                       }),
                       new go.Binding("toSpot", "toSpot", function(d) { return spotConverter(d); }),
                       new go.Binding("points").makeTwoWay(),
                       //new go.Binding("key").makeTwoWay(),
                       $$(go.Shape, { isPanelMain: true, stroke: "transparent"/* blue*/, strokeWidth: 4, name: "HIGHLIGHT" }),
                       // mark each Shape to get the link geometry with isPanelMain: true
                       $$(go.Shape, { isPanelMain: true, stroke: "red"/* blue*/, strokeWidth: 2 },
            new go.Binding("stroke", "red")
            ),
            $$(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [2, 10] }),
            $$(go.Shape,  // the arrowhead
            { toArrow: "standard", stroke: null, fill: "red" }
            )
            ,
            $$(go.TextBlock,
            "",  // the label
            {
                textAlign: "center",
                font: "10pt helvetica, arial, sans-serif",
                stroke: "#333333",
                margin: 4,
                minSize: new go.Size(20, 20),
                editable: true
            },
            new go.Binding("text").makeTwoWay()
            )
            )
            );
        
                            
        myDiagram.linkTemplateMap.add(
            "Water_Cycle",
            $$(
            go.Link, {
				contextMenu: partContextMenu,
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5,
                //toShortLength: 4,
                toShortLength: -2,
                fromShortLength: -2,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                // mouse-overs subtly highlight links:
                mouseEnter: function(e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                mouseLeave: function(e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                toolTip: $$(go.Adornment, "Auto",
                      $$(go.Shape, { fill: "#FFFFCC" }),
                      $$(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                              new go.Binding("text", "", function(data) { return data.label })//new go.Binding("text", "", linkInfo))
              ))
            },
                       // make sure links come in from the proper direction and go out appropriately
                       new go.Binding("fromSpot", "fromSpot", function(d) { return spotConverter(d);
                       }),
                       new go.Binding("toSpot", "toSpot", function(d) { return spotConverter(d); }),
                       new go.Binding("points").makeTwoWay(),
                       //new go.Binding("key").makeTwoWay(),
                       $$(go.Shape, { isPanelMain: true, stroke: "transparent"/* blue*/, strokeWidth: 4, name: "HIGHLIGHT" }),
                       // mark each Shape to get the link geometry with isPanelMain: true
                       $$(go.Shape, { isPanelMain: true, stroke: "green"/* blue*/, strokeWidth: 2 },
            new go.Binding("stroke", "green")
            ),
            $$(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [2, 10] }),
            $$(go.Shape,  // the arrowhead
            { toArrow: "standard", stroke: null, fill: "green" }
            )
            ,
            $$(go.TextBlock,
            "",  // the label
            {
                textAlign: "center",
                font: "10pt helvetica, arial, sans-serif",
                stroke: "#333333",
                margin: 4,
                minSize: new go.Size(20, 20),
                editable: true
            },
            new go.Binding("text").makeTwoWay()
            )
            )
            );
        
                            
        myDiagram.linkTemplateMap.add(
            "Electric",
            $$(
            go.Link, {
				contextMenu: partContextMenu,
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5,
                //toShortLength: 4,
                toShortLength: -2,
                fromShortLength: -2,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                // mouse-overs subtly highlight links:
                mouseEnter: function(e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                mouseLeave: function(e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                toolTip: $$(go.Adornment, "Auto",
                      $$(go.Shape, { fill: "#FFFFCC" }),
                      $$(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                              new go.Binding("text", "", function(data) { return data.label })//new go.Binding("text", "", linkInfo))
              ))
            },
                       // make sure links come in from the proper direction and go out appropriately
                       new go.Binding("fromSpot", "fromSpot", function(d) { return spotConverter(d);
                       }),
                       new go.Binding("toSpot", "toSpot", function(d) { return spotConverter(d); }),
                       new go.Binding("points").makeTwoWay(),
                       //new go.Binding("key").makeTwoWay(),
                       $$(go.Shape, { isPanelMain: true, stroke: "transparent"/* blue*/, strokeWidth: 4, name: "HIGHLIGHT" }),
                       // mark each Shape to get the link geometry with isPanelMain: true
                       $$(go.Shape, { isPanelMain: true, stroke: "yellow"/* blue*/, strokeWidth: 2 },
            new go.Binding("stroke", "yellow")
            ),
            $$(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [2, 10] }),
            $$(go.Shape,  // the arrowhead
            { toArrow: "standard", stroke: null, fill: "yellow" }
            )
            ,
            $$(go.TextBlock,
            "",  // the label
            {
                textAlign: "center",
                font: "10pt helvetica, arial, sans-serif",
                stroke: "#333333",
                margin: 4,
                minSize: new go.Size(20, 20),
                editable: true
            },
            new go.Binding("text").makeTwoWay()
            )
            )
            );
			
		//应甲方要求新增贫液、富液两种物流//ouyang
        myDiagram.linkTemplateMap.add(
            "PINYE",
            $$(
            go.Link, {
				contextMenu: partContextMenu,
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5,
                //toShortLength: 4,
                toShortLength: -2,
                fromShortLength: -2,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                // mouse-overs subtly highlight links:
                mouseEnter: function(e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                mouseLeave: function(e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                toolTip: $$(go.Adornment, "Auto",
                      $$(go.Shape, { fill: "#FFFFCC" }),
                      $$(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                              new go.Binding("text", "", function(data) { return data.label })//new go.Binding("text", "", linkInfo))
              ))
            },
                       // make sure links come in from the proper direction and go out appropriately
                       new go.Binding("fromSpot", "fromSpot", function(d) { return spotConverter(d);
                       }),
                       new go.Binding("toSpot", "toSpot", function(d) { return spotConverter(d); }),
                       new go.Binding("points").makeTwoWay(),
                       //new go.Binding("key").makeTwoWay(),
                       $$(go.Shape, { isPanelMain: true, stroke: "transparent"/* blue*/, strokeWidth: 4, name: "HIGHLIGHT" }),
                       // mark each Shape to get the link geometry with isPanelMain: true
                       $$(go.Shape, { isPanelMain: true, stroke: "blue"/* blue*/, strokeWidth: 2 },
            new go.Binding("stroke", "blue")
            ),
            $$(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [2, 10] }),
            $$(go.Shape,  // the arrowhead
            { toArrow: "standard", stroke: null, fill: "blue" }
            )
            ,
            $$(go.TextBlock,
            "",  // the label
            {
                textAlign: "center",
                font: "10pt helvetica, arial, sans-serif",
                stroke: "#333333",
                margin: 4,
                minSize: new go.Size(20, 20),
                editable: true
            },
            new go.Binding("text").makeTwoWay()
            )
            )
            );
        
        myDiagram.linkTemplateMap.add(
            "FUYE",
            $$(
            go.Link, {
				contextMenu: partContextMenu,
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5,
                //toShortLength: 4,
                toShortLength: -2,
                fromShortLength: -2,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                // mouse-overs subtly highlight links:
                mouseEnter: function(e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                mouseLeave: function(e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                toolTip: $$(go.Adornment, "Auto",
                      $$(go.Shape, { fill: "#FFFFCC" }),
                      $$(go.TextBlock, { margin: 4 },  // the tooltip shows the result of calling linkInfo(data)
                              new go.Binding("text", "", function(data) { return data.label })//new go.Binding("text", "", linkInfo))
              ))
            },
                       // make sure links come in from the proper direction and go out appropriately
                       new go.Binding("fromSpot", "fromSpot", function(d) { return spotConverter(d);
                       }),
                       new go.Binding("toSpot", "toSpot", function(d) { return spotConverter(d); }),
                       new go.Binding("points").makeTwoWay(),
                       //new go.Binding("key").makeTwoWay(),
                       $$(go.Shape, { isPanelMain: true, stroke: "transparent"/* blue*/, strokeWidth: 4, name: "HIGHLIGHT" }),
                       // mark each Shape to get the link geometry with isPanelMain: true
                       $$(go.Shape, { isPanelMain: true, stroke: "purple"/* blue*/, strokeWidth: 2 },
            new go.Binding("stroke", "purple")
            ),
            $$(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 3, name: "PIPE", strokeDashArray: [2, 10] }),
            $$(go.Shape,  // the arrowhead
            { toArrow: "standard", stroke: null, fill: "purple" }
            )
            ,
            $$(go.TextBlock,
            "",  // the label
            {
                textAlign: "center",
                font: "10pt helvetica, arial, sans-serif",
                stroke: "#333333",
                margin: 4,
                minSize: new go.Size(20, 20),
                editable: true
            },
            new go.Binding("text").makeTwoWay()
            )
            )
            );
		//应甲方要求新增贫液、富液两种物流//ouyang
		
        // Make link labels visible if coming out of a "conditional" node.
        // This listener is called by the "LinkDrawn" and "LinkRelinked" DiagramEvents.
        function showLinkLabel(e) {
            var label = e.subject.findObject("LABEL");
            if (label !== null) label.visible = (e.subject.fromNode.data.figure === "Diamond");
        }

        // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
        myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
        myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;
		  // support double-clicking in the background to add a copy of this data as a node
		if(isDrawing){
			myDiagram.toolManager.clickCreatingTool.archetypeNodeData = {
			  category:"dataTag",/*物料平衡实时监控位号*/
			  name: "物流",
			  label:null,/*位号公式*/
			  info:"实时监控位号(公式），支持运行,如：{{F1101.PV}}*100",
			  text:"0.00",
			  TagFormulaRT:null,
			  // info:"0.9 t/h",
			  // dataSource:"1-29"
			};
		}
		
        //load();  // 2017-04-04 lxf: 禁用自动加载，改用手动load an initial diagram from some JSON text
        // 2017-04-04 非编辑状态不显示右侧
        // initialize the Palette that is on the left side of the page
        //初始化左栏zuolan
        if(isDrawing)
		{
			myPalette =
				$$(go.Palette, "myPaletteDiv",  // must name or refer to the DIV HTML element
					{
						"animationManager.duration": 800, // slightly longer than default (600ms) animation
						nodeTemplateMap: myDiagram.nodeTemplateMap,  // share the templates used by myDiagram
						linkTemplateMap: myDiagram.linkTemplateMap,
						model: new go.GraphLinksModel(
							[  // specify the contents of the Palette
							 { category: "NBorderR", text: "", label: "界区"} ,
							 { category: "NBorderL", text: "", label: "界区"} ,
							 { category: "Nmix", text: "", label: "混合器"} ,
							 { category: "Nsplit", text: "", label: "分离器"} ,
							 { category: "NPump", text: "Tag", label: "离心泵"} ,
							 { category: "NRPump", text: "Tag", label: "离心泵(左流出)"} ,
							 { category: "NHeater", text: "Tag", label: "简单换热器"} ,
							 { category: "NRHeater", text: "Tag", label: "简单换热器(左流出)"} ,
							 { category: "N2HeatX", text: "Tag", label: "换热器"},
							 { category: "AirCooler", text: "Tag", label: "空冷器"} ,
							 { category: "FlashA", text: "Tag", label: "闪蒸罐"} ,
							 { category: "FlashB", text: "Tag", label: "卧式闪蒸罐"} ,
							 { category: "FlashD", text: "Tag", label: "卧式闪蒸罐"} ,
							 { category: "ColA", text: "Tag", label: "填料塔"} ,
							 { category: "ColB", text: "Tag", label: "板式塔"} ,
							 { category: "ColC", text: "Tag", label: "含再沸器的板式塔"} ,
							 { category: "ColD", text: "Tag", label: "含冷凝器和再沸器的板式塔"} ,								 
							 { category: "Zone", text: "", label: "区域"} ,
                                { category: "Zone2", text: "", label: "区域"} ,
                                { category: "Zone3", text: "", label: "区域"},
                                { category: "Zone4", text: "", label: "区域"} ,
                                { category: "Zone5", text: "", label: "区域"} ,
                                { category: "Zone6", text: "", label: "区域"},
                                { category: "Zone7", text: "", label: "区域"},
                                { category: "Zone8", text: "", label: "区域"},
                                { category: "Zone9", text: "", label: "区域" },
                                { category: "Zoneblue", text: "", label: "区域" },
							    { category: "Zonepurple", text: "", label: "区域" },
                                { category: "Zonegreen", text: "", label: "区域" },
                                { category: "Zonered", text: "", label: "区域" },
                                { category: "ZoneEA700D", text: "", label: "区域" },
							    { category: "HZone", text: "", label: "区域" },
                                { category: "HText", text: "", label: "区域" },
                                { category: "Comment", text: "文本", label: "备注"},
                                { category: "Comment1", text: "12宋", label: "备注"},
                                { category: "Comment2", text: "14宋", label: "备注"},
                                { category: "Comment16", text: "16宋", label: "备注"},
                                { category: "Comment3", text: "18宋", label: "备注"},
							 { category: "dataTag", text: "0.14", label: "",info:"实时监控数据源"},
                             { category: "dataTag16", text: "0.16", label: "",info:"实时监控数据源"},
							{ category: "dataTag18", text: "0.18", label: "",info:"实时监控数据源"},
							 { category: "dataTagred", text: "0.18", label: "",info:"实时监控数据源"},	
							 { category: "dataTagzt", text: "0.12", label: "",info:"实时监控数据源"},
							 { category: "flowchart",width:100,width:100,figure:"./assets/images/ly2b.png"},
							 //应甲方要求新增//ouyang
							],
							[
							 { category: "Material",  label: '物流',  points: new go.List(go.Point).addAll([new go.Point(0, 0), new go.Point(15, 0), new go.Point(15, 20), new go.Point(30, 20)]) },
							 { category: "Steam_1_0_MPa",  label: '1.0MPa蒸汽',  points: new go.List(go.Point).addAll([new go.Point(0, 0), new go.Point(15, 0), new go.Point(15, 20), new go.Point(30, 20)]) },
							 { category: "Water_Cycle",  label: '循环水',  points: new go.List(go.Point).addAll([new go.Point(0, 0), new go.Point(15, 0), new go.Point(15, 20), new go.Point(30, 20)]) },
							 { category: "Electric",  label: '电',  points: new go.List(go.Point).addAll([new go.Point(0, 0), new go.Point(15, 0), new go.Point(15, 20), new go.Point(30, 20)]) },
							 //应甲方要求新增贫液、富液两种物流//ouyang
							 { category: "PINYE",  label: '贫液',  points: new go.List(go.Point).addAll([new go.Point(0, 0), new go.Point(15, 0), new go.Point(15, 20), new go.Point(30, 20)]) },
							 { category: "FUYE",  label: '富液',  points: new go.List(go.Point).addAll([new go.Point(0, 0), new go.Point(15, 0), new go.Point(15, 20), new go.Point(30, 20)]) },
                                //20170516 新增 ysh
                                { category: "NoStart",  label: '未开工',  points: new go.List(go.Point).addAll([new go.Point(0, 0), new go.Point(15, 0), new go.Point(15, 20), new go.Point(30, 20)]) },
                                { category: "MaterialGAS",  label: '原料',  points: new go.List(go.Point).addAll([new go.Point(0, 0), new go.Point(15, 0), new go.Point(15, 20), new go.Point(30, 20)]) }
							]
						)
					});
        
		}
		
		//wjn added 20170518
		var inspector = new Inspector('myInspectorDiv', myDiagram,
      {
        // uncomment this line to only inspect the named properties below instead of all properties on each object:
        // includesOwnProperties: false,
        properties: {
          "text": {},
          // key would be automatically added for nodes, but we want to declare it read-only also:
          "key": { readOnly: true, show: Inspector.showIfPresent },
          // color would be automatically added for nodes, but we want to declare it a color also:
          "color": { show: Inspector.showIfPresent, type: 'color' },
          // Comments and LinkComments are not in any node or link data (yet), so we add them here:
          "Comments": { show: Inspector.showIfNode  },
          "flag": { show: Inspector.showIfNode, type: 'boolean', defaultValue: true  },
          "LinkComments": { show: Inspector.showIfLink },
        }
      });

        loop();  // animate some flow through the pipes
    }
    var opacity = 1;
    var down = true;
    function loop() {
        var diagram = myDiagram;
        setTimeout(function () {
            var oldskips = diagram.skipsUndoManager;
            diagram.skipsUndoManager = true;
            diagram.links.each(function (link) {
                var shape = link.findObject("PIPE");
                if (shape != null) {
                    var off = shape.strokeDashOffset - 3;
                    // animate (move) the stroke dash
                    shape.strokeDashOffset = (off <= 0) ? 60 : off;
                    // animte (strobe) the opacity:
                    if (down) opacity = opacity - 0.01;
                    else opacity = opacity + 0.003;
                    if (opacity <= 0) { down = !down; opacity = 0; }
                    if (opacity > 1) { down = !down; opacity = 1; }
                    shape.opacity = opacity;
                }
            });
            diagram.skipsUndoManager = oldskips;
            loop();
        }, 100);
    }
	
    // Make all ports on a node visible when the mouse is over the node
    function showPorts(node, show) {
        var diagram = node.diagram;
        if (!diagram || diagram.isReadOnly || !diagram.allowLink) return;
        node.ports.each(function (port) {
            port.stroke = (show ? "white" : null);
            //port.fill = (show ? "white" : "trasparent");
        });
    }

	
    // Show the diagram's model in JSON format that the user may edit
    function save() {
        var str = myDiagram.model.toJson();
        document.getElementById("mySavedModel").value=str;
        var modelObjet=JSON.parse(str);
        myDiagram.isModified = false;
        var data = {
            ID:1,
			AppId:1,
            nodeDataArray:modelObjet.nodeDataArray,
            linkDataArray:modelObjet.linkDataArray
        };

        $.ajax({
            type:"POST",
            url: "/FlowchartViewModels/Save",dataType:"json", data: data, success: function(){
            }
        });
    }
    function load() {
        myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").value);
    }
	

	
	$(function(){

		 // 关联Aspen
		 makeDiaglogOfSelect("dialogOfAspenElement");		 
		 // 设置Label
		 makeDiaglogOfSelect("dialogOfLabel");
		 
		 // 创建对话框3：选择介质
		 makeDiaglogOfSelect("diaglogOfBanlanceMedia");
		 // 创建对话框3：塔类型
		 makeDiaglogOfSelect("diaglogOfTowerType");
		 // Aspen参数对话
		 makeDiaglogOfAspenParams("diaglogOfAspenParamBinding");
		 // svg 选择（像素要转成数值型）
		 makeDiaglogOfSelectTryParseInt("diaglogOfBindingSvg");
		 // 实时位号定义
		 makeDiaglogOfSelect("dialogOfTagFormulaRt");
		 
		 // 输入参数
		 makeDiaglogOfRunInputAspenParams("dialogOfRunInputs");
        // 输入参数
        makeDiaglogOfRunInputAspenParamsF("dialogF");
		 
		 
	});
	
	
	
	function makeDiaglogOfSelect(myDiagId){
		// select diag and input
		$("#"+myDiagId).dialog({
			height:400,
			width: 800,
			modal:true,
			closed: true,
			buttons: [
				{
					text: "保存",
					iconCls:'icon-ok',
					handler: function() {
						if(partOnEditting!=null)
						{
							dialogToPart(myDiagId);
						}
						partOnEditting = null;
						$("#"+myDiagId).dialog( "close" );
					}
				},
				{
					text: "取消",
					handler: function() {
						partOnEditting = null;
						$( "#"+myDiagId ).dialog( "close" );
					}
				}
			]
		});
	}
	
	
	function makeDiaglogOfSelectTryParseInt(myDiagId)
	{
		// 会尝试转成int
		// select diag and input
		$("#"+myDiagId).dialog({
			height:400,
			width: 800,
			modal:true,
			closed: true,
			buttons: [
				{
					text: "保存",
					iconCls:'icon-ok',
					handler: function() {
						if(partOnEditting!=null)
						{
							dialogToPartTryParseInt(myDiagId);
						}
						partOnEditting = null;
						$( "#"+myDiagId ).dialog( "close" );
					}
				},
				{
					text: "取消",
					handler: function() {
						partOnEditting = null;
						$("#"+myDiagId).dialog("close");
					}
				}
			]
		});
	}
	
	function makeDiaglogOfAspenParams(myDiagId)
	{
		// Aspen参数对话
		// select diag
		$("#"+myDiagId).dialog({
			height:400,
			width: 800,
			modal:true,
			closed: true,
			buttons: [
				{
					text: "保存",
					iconCls:'icon-ok',
					handler: function(key) {
						if(partOnEditting!=null)
						{
							_tableToPart();
						}
						partOnEditting = null;
						$("#"+myDiagId).dialog("close");
					}
				},
				{
					text: "取消",
					handler: function() {
						partOnEditting = null;
						$( "#"+myDiagId ).dialog("close" );
					}
				}
			]
		});
	}
	
	function makeDiaglogOfRunInputAspenParams(myDiagId)
	{
		// 运行时，输入参数。
		// select diag
		$("#"+myDiagId).dialog({
			height:400,
			width: 800,
			modal:true,
			closed: true,
			buttons: [
				{
					text: "保存",
					iconCls:'icon-ok',
					handler: function(key) {
						if(partOnEditting!=null)
						{
							_inputPartToParamters();
						}
						partOnEditting = null;
						$("#"+myDiagId).dialog("close");
					}
				},
				{
					text: "取消",					
					handler: function() {
						partOnEditting = null;
						$( "#"+myDiagId ).dialog("close" );
					}
				}
			]
		});
	}
function makeDiaglogOfRunInputAspenParamsF(myDiagId)
{
    // 运行时，输入参数。
    // select diag
    $("#"+myDiagId).dialog({
        height:400,
        width: 800,
        modal:true,
        closed: true,
        buttons: [
            {
                text: "保存",
                iconCls:'icon-ok',
                handler: function(key) {
                    if(partOnEditting!=null)
                    {
                        _inputPartToParamters();
                    }
                    partOnEditting = null;
                    $("#"+myDiagId).dialog("close");
                }
            },
            {
                text: "取消",
                handler: function() {
                    partOnEditting = null;
                    $( "#"+myDiagId ).dialog("close" );
                }
            }
        ]
    });
}
	
	
	
	
	

	function _rebuildGoJs()
	{
		// 重新 渲染 GoJs
		myDiagram.model.startTransaction("update data info");
		myDiagram.rebuildParts();
		myDiagram.model.commitTransaction("update data info")
	}
	

	function openDialog0(diagId)
	{
		// 打开对话框
		$("#"+diagId).dialog("open");
	}

	function setPartOnEditing0(part)
	{
		// 设置部件到编辑状态
		partOnEditting = part;		
	}
	
	// 设置部件：选择
	function setPartOnSelecting(key,selectId)
	{
		var key = $("#"+selectId).data("partkey");
		partKeyOnEditing = key;
		selectOnEdittingId = selectId;
		var part = partOnEditting;
		if(part!=null&&part!=undefined)
		{
			if(part.data.hasOwnProperty(key)){
				var value0 = part.data[key];
				if(value0 != undefined)
				{
					$("#"+selectId).val(value0);
				}
			}
			//openDialog0(diagId);
		}		
	}
	
	function partToDialog(myDiagId)
	{
		// 使用 data-partkey 存储key
		var part = partOnEditting;
		if(part!=null&&part!=undefined)
		{
			var data = part.data;
			console.log("part's data is setting to diag:");
			console.log(data);
			// $("#id input, #id select") 将值放入input和select
			debugger
			$("#"+myDiagId +" input,#"+myDiagId+" select").each(function(){
				var key  = $(this).data('partkey');
				// ;
				if(data.hasOwnProperty(key)){
					var value0 = data[key];
					if(value0 != undefined)
					{
						$(this).val(value0);
					}
				}
			});
		}
	}
	//20170726 设置方向取值
function partToDialogF(myDiagId)
{
    // 使用 data-partkey 存储key
    var part = partOnEditting;
    if(part!=null&&part!=undefined)
    {
        var data = part.data;
        console.log("part's data is setting to diag:");
        console.log(data);
        // $("#id input, #id select") 将值放入input和select
        console.log(data);
        debugger
        $("#FANGXIANGfrom").val("text:"+data.text+"        key:"+data.key);
        /*$("#FANGXIANGto").val(data.to);*/
        $("#"+myDiagId +" input,#"+myDiagId+" select").each(function(){
            var key  = $(this).data('partkey');
            // ;
            if(data.hasOwnProperty(key)){
                var value0 = data[key];
                if(value0 != undefined)
                {
                    $(this).val(value0);
                }
            }
        });
    }
}
	
	function dialogToPart(myDiagId)
	{
		// 重新 渲染 GoJs
		myDiagram.model.startTransaction("update data info");
		var part = partOnEditting;
		//  提取 input和select的值
		
		$("#"+myDiagId +" input,#"+myDiagId+" select").each(function(){
			var key  = $(this).data('partkey');
			var value0 = $(this).val();
			if(part!=null&&part!=undefined)
			{
				part.data[key] = value0;
			}	
		});
		myDiagram.rebuildParts();
		myDiagram.model.commitTransaction("update data info")
		console.log("part's data from diag:");
		console.log(part.data);
	}
	
	function dialogToPartTryParseInt(myDiagId)
	{
		// 对话框传递给part（会尝试转成int）
		var part = partOnEditting;
		//  提取 input和select的值
		// 重新 渲染 GoJs
		myDiagram.model.startTransaction("update data info");
		$("#"+myDiagId +" input,#"+myDiagId+" select").each(function(){
			var key  = $(this).data('partkey');
			var value0 = $(this).val();
			if(part!=null&&part!=undefined)
			{
				var v = Number(value0);
				if(!(isNaN(v)))
				{
					value0 = v;
					//alert('number of value0 is' + v);
				}
				part.data[key] = value0;
			}	
		});
		myDiagram.rebuildParts();
		myDiagram.model.commitTransaction("update data info")
		console.log("part's data from diag:");
		console.log(part.data);
	}
	
	
	
	
	var aspenKeys = ["IsInput","Element","Name","UnitStr","Value","TagFormula","TagActive","Path"];//Aspen参数关键字
	var aspenKeysInput = ["Name","Value","TagFormula"];// 可输入key input * 变量名也可以编辑
	var aspenKeysCheckBox = ["TagActive"];
	var keyOfParams = "AspenParams";// part 中用于保存aspen参数的属性名称
	var aspenParams = null;// Aspen参数集合
	var keyOfAspenElementName = "AspenElementName"; // 与Aspen关联的元素名称
	
	
	
	function _partToTable(){
		var $container = $("#aspenParamContainer tbody");// 输入表格
		$container.empty();//清空
		$("#aspenParamContainer tbody tr").remove();
			
		// 部件→参数表
		var part = partOnEditting;//正在编辑的part
		
		// 设置该部件正在编辑
		var partName = "";// 部件元素名称
		var partType = "";// 部件元素类型 Stream或Other
		if (part instanceof go.Node)//节点
		{
			partType="other";// 只区分流股和其他
		}
		if (part instanceof go.Link)//节点
		{
			partType = "stream";// 流股
		}
		partName = part.data[keyOfAspenElementName];
		
		var partParams = [];//part中Aspen参数
		if(part.data.hasOwnProperty(keyOfParams))// 部件已有参数
		{
			partParams = part.data[keyOfParams];//part中Aspen参数
			if(partParams!=null&&partParams!=undefined)//apsen参数有效
			{
				// do something
			}
			else{
				partParams = [];
			}
		}
		// 从参数集合中检索，如果没有则补充
		var candidatParams = _findParams(aspenParams,partName,partType);// part对应的所有参数（可选的）
		if(partParams.length>0)
		{
			if(candidatParams!=null&&candidatParams!=undefined&&candidatParams.length>0)
			{
				for(var i=0;i<candidatParams.length;i++)// 遍历 apsen集合
				{
					var p = candidatParams[i];
					var path0 = p["Path"];
					var flag = false;// 是否已有
					for(var j=0;j<partParams.length;j++)//遍历部件已有参数
					{
						var p1 = partParams[j];
						var path1 = p1["Path"];
						if(path0==path1)
						{
							flag = true;
							break;
						}
					}
					if(!flag)//没有，追加
					{
						partParams.push(p);
					}
				}
			}
		}
		else{
			partParams = candidatParams;
		}
		
		// 填充到表格中
		//  构造输入和输出参数
		if(partParams!=null&&partParams.length>0)
		{
			for(var i=0;i<partParams.length;i++)
			{
				var p = partParams[i];//参数对象 
				var $trTemp = $("<tr></tr>");
				//console.log(i);
				for(var j=0;j<aspenKeys.length;j++)
				{
					var key = aspenKeys[j];
					var $tdTemp = $("<td></td>");
					$tdTemp.data('key',key);
					//console.log(key);
					var txt = "";
					if(p.hasOwnProperty(key))
					{
						txt = p[key];
					}
					// 输入框
					var $inputTemp = $("<input>");					
					if($.inArray(key, aspenKeysInput)>=0)//输入框
					{
						$inputTemp.attr('type','text');
						$inputTemp.val(txt);
						$tdTemp.append($inputTemp);
					}
					else if ($.inArray(key,aspenKeysCheckBox)>=0)
					{
						var checked = false;
						if(txt==true||txt=='true')
						{
							checked =true;
						}
						$inputTemp.attr('type','checkbox');
						$inputTemp.prop("checked",checked);
						$tdTemp.append($inputTemp);
					}
					else{
						$tdTemp.text(txt);
					}
					
					$trTemp.append($tdTemp);
				}
				$container.append($trTemp);
			}
		}
	}
	
	
	
	
	function _tableToPart()
	{
		
		// 表格到part
		// 部件→参数表
		var part = partOnEditting;//正在编辑的part
		
		var $container = $("#aspenParamContainer tbody tr");// 输入表格
		var arr = [];
		$container.each(function(){
			var $tr = $(this);
			var data = {};
			$tr.find("td").each(function(){
				var $td = $(this);
				var key = $td.data('key');
				var val0 = $td.text();
				// 输入框
				var $inputTemp = $td.find("input");	
				if($inputTemp.length>0)
				{
					if($inputTemp.attr('type')=='text')
					{
						val0 = $inputTemp.val();
					}
					else if($inputTemp.attr('type')=='checkbox')
					{
						val0 = $inputTemp.prop('checked');
						//console.log(val0);
					}
				}
				data[key] = val0; 
			});
			arr.push(data);
		});
		
		console.log(arr);
		part.data[keyOfParams] = arr;
	}
	
	
	function _findParams(aspenParams,elementName,elementType){
		// 从参数集合搜索元素类型和名称匹配的参数
		/*aspenParams = 参数
	    elementName 部件元素名称
	     elementType 部件元素类型 Stream或Other
		*/
		//var part = partOnEditting;
		//elementName = part.data['text'];		
		if(aspenParams!=null&&aspenParams!=undefined&&elementName!=undefined&&elementType!=undefined)
		{
			// 查找参数(匹配名称和类型）
			var filterarray = $.grep(aspenParams,function(value){
				var myElementType = value["ElementType"];// Stream
				myElementType = myElementType.toLowerCase()=="stream"?"stream":"other";//标准化 
				var myElementName = value["Element"];//DFQ
				var flag1 = myElementName.toLowerCase()==elementName.toLowerCase();
				var flag2 = myElementType.toLowerCase()==elementType.toLowerCase();
				return flag1 &&  flag2;
			});
			return filterarray;
		}
		else{
			return null;
		}
	}
	
	

	
	function initParameters(myParamArray){
		// 初始化参数集合
		aspenParams = myParamArray;
	}
	
	function _partToInputTable(){
		// 部件→输入参数表
		var $container = $("#aspenInpufParamContainer tbody");// 输入表格
		$container.empty();//清空
		
		var keys = ["Name","UnitStr","Value","Path"];//Aspen参数关键字
		var keysToInput = ["Value"];// 可输入key input * 变量名也可以编辑
		var keyOfParams = "AspenParams";// part 中用于保存aspen参数的属性名称
		var keyOfAspenElementNameInPart = "AspenElementName"; // 与Aspen关联的元素名称

		// 部件→参数表
		var part = partOnEditting;//正在编辑的part
		
		// 设置该部件正在编辑
		var partName = "";// 部件元素名称
		var partType = "";// 部件元素类型 Stream或Other
		if (part instanceof go.Node)//节点
		{
			partType="other";// 只区分流股和其他
		}
		if (part instanceof go.Link)//节点
		{
			partType = "stream";// 流股
		}
		partName = part.data[keyOfAspenElementNameInPart];
		
		var candidatParams = _findParams(aspenParams,partName,partType);// part对应的所有参数（可选的）
		if(candidatParams==null||candidatParams.length==0)
		{
			alert('没有输入参数');
			return false;
		}
		//  过滤输入参数
		//var partParams = $.grep(candidatParams,function(value){ return true });//part中Aspen参数
		var partParams = $.grep(candidatParams,function(value){ return value["IsInput"]});//part中Aspen参数
		// 填充到表格中
		//  构造输入和输出参数
		if(partParams!=null&&partParams.length>0)
		{
			for(var i=0;i<partParams.length;i++)
			{
				var p = partParams[i];//参数对象 
				var $trTemp = $("<tr></tr>");				
				for(var j=0;j<keys.length;j++)
				{
					var key = keys[j];
					var $tdTemp = $("<td></td>");
					$tdTemp.data('key',key);
					var txt = "";
					if(p.hasOwnProperty(key))
					{
						txt = p[key];
					}
					// 输入框
					var $inputTemp = $("<input>");					
					if($.inArray(key, keysToInput)>=0)//输入框
					{
						$inputTemp.attr('type','text');
						$inputTemp.val(txt);
						$tdTemp.append($inputTemp);
					}
					else{
						$tdTemp.text(txt);
					}
					
					$trTemp.append($tdTemp);
				}
				$container.append($trTemp);
			}
			return true;
		}
		else{
			alert("没有输入参数");
			return false;
		}
	}
	
	
	
	
	function _inputPartToParamters()
	{
		//debugger;
		// 将部件输入参数更新到Aspen参数对象集合中去
		var params = aspenParams;// aspen 参数集合
		var part = partOnEditting;
		
		var $container = $("#aspenInpufParamContainer tbody tr");// 输入表格
		
		var keysMatch = ["Path","UnitStr"];
		var keysValue = "Value";
		var arr = [];
		// 取出参数
		$container.each(function(){
			var $tr = $(this);
			var data = {};
			$tr.find("td").each(function(){
				var $td = $(this);
				var key = $td.data('key');
				var val0 = $td.text();

				// 取出值
				var $inputTemp = $td.find("input");	
				if($inputTemp.length>0)
				{
					if($inputTemp.attr('type')=='text')
					{
						val0 = $inputTemp.val();
					}
					else if($inputTemp.attr('type')=='checkbox')
					{
						val0 = $inputTemp.prop('checked');
					}
				}
				data[key] = val0; 
			});
			arr.push(data);
		});
		
		// 更新到参数
		var key1 = "Path";
		var key2 = "UnitStr";
		var key3 = "Value";		
		for(var i=0;i<arr.length;i++)
		{
			var d = arr[i];
			var v1 = d[key1];
			var v2 = d[key2];
			var v3 = d[key3];
			$.each(params,function(i,value){
				var flag = false;
				var pv1 = value[key1];
				var pv2 = value[key2];
				if((v2==null&&pv2==null)||(v2==undefined&&pv2==undefined))//不含单位，只需要比较路径
				{
					flag = v1==pv1;
				}
				else{
					flag = (v1==pv1&&v2==pv2);
				}
				if(flag)
				{
					value[key3] = v3;
				}
			});
		}
	}
	
	
	
	function updateTagFormulaRtText(results)
	{
		// 更新实时位号监控的结果
	    // 位号公式结果 [{'TagFormulaRT':'{{F1101.PV}}*100.0','Value':'100.9'}]
	    var dig = myDiagram;
	    var m = dig.model;
	    //console.log(dig.model.nodeDataArray);
	    var nodes = m.nodeDataArray;

	    var nodeTemplateMap = 'category';// 存于保存节点模板的属性
	    var nodeValueName = 'text';// 存于保存节点 值 的属性
	    var nodeTagAttrName = "TagFormulaRT";//结果中用于保存位号公式的属性名称
	    var dataTagCategoryName = "dataTag";// 监控位号的标签
	    var dataTagAttrName = "TagFormula";//结果中用于保存位号公式的属性名称
	    var dataValueName = "Value";// 结果中用于保存值的属性名

	    if (nodes != null && nodes != undefined && results != null && results != undefined && results.length > 0) {
	        m.startTransaction("update data info");
	        for (var i = 0; i < nodes.length; i++)// 遍历节点
	        {
	            var node = nodes[i];
	            if (node.hasOwnProperty(nodeTemplateMap) && node.hasOwnProperty(nodeTagAttrName)) {
	                var category = node[nodeTemplateMap];
	                var nodeTagFormula = node[nodeTagAttrName]; // 节点位号公式
	                if (nodeTagFormula != undefined && nodeTagFormula != null && nodeTagFormula != "") {
	                    //  标准化
	                    nodeTagFormula = nodeTagFormula.replace(/\{/g, "").replace(/\}/g, "");
	                    nodeTagFormula = nodeTagFormula.replace(/\[/g, "").replace(/\]/g, "");
	                    nodeTagFormula = nodeTagFormula.toLowerCase();
	                    if (category == dataTagCategoryName)// 是实时位号模板
	                    {
	                        // 遍历数据
	                        for (var j = 0; j < results.length; j++) {
	                            var r = results[j];
	                            var dataTagName = r[dataTagAttrName];// 数据位号名
	                            var dataValue = r[dataValueName];// 数据位号名
	                            //  标注化
	                            dataTagName = dataTagName.replace(/\{/g, "").replace(/\}/g, "");
	                            dataTagName = dataTagName.replace(/\[/g, "").replace(/\]/g, "");
	                            dataTagName = dataTagName.toLowerCase();
	                            if (nodeTagFormula == dataTagName) {
	                                node[nodeValueName] = dataValue;
	                                break;
	                            }
	                        }
	                    }
	                }

	            }
	        }
	        dig.rebuildParts();
	        m.commitTransaction("update data info");
	    }
	}
	

	
	function updateAppResult(results)
	{
		
		// 更新App计算结果到流程图中,如果不输入，则表示恢复到初始状态
		var toRestore = arguments[0] ? false:true;
		
		var flowchartValueAttrName= "text";// 流程图中的节点或连线用于显示计算结果的属性名称
		var flowchartValueAttrNameOfOld = "text_old";
		var flowchartAspenElementAtrrName = "AspenElementName";// 流程图中的节点或连线用于关联Aspen元素的属性名称
		
		var dataElementTypeAttrName = "ElementType";// 结果数据中用于保存参数所属的元素类型的属性名称
		var dataElementAttrName = "Element";// 结果数据中用于保存参数所属元素名称的属性名称
		var aspenParameterPathAtrName = "Path";// aspen参数中，路径属性的名称
		
		var dig = myDiagram;
	    var m = dig.model;
	    //console.log(dig.model.nodeDataArray);
	    var nodes = m.nodeDataArray;
		var links = m.linkDataArray;
		
		if(toRestore)// 恢复初始值
		{
			m.startTransaction("update data info");
			if(nodes!=null&&nodes!=undefined)//遍历nodes
			{
				
				for (var i = 0; i < nodes.length; i++)// 遍历节点
				{
					var data = nodes[i];
					if(data.hasOwnProperty(flowchartValueAttrNameOfOld)&&data.hasOwnProperty(flowchartValueAttrName));
					{
						data[flowchartValueAttrName]  = data[flowchartValueAttrNameOfOld] ;//保留原始值
					}
				}
			}
			if(links!=null&&links!=undefined)//遍历links
			{
				for (var i = 0; i < links.length; i++)// 遍历节点
				{
					var data = links[i];
					if(data.hasOwnProperty(flowchartValueAttrNameOfOld)&&data.hasOwnProperty(flowchartValueAttrName));
					{
						data[flowchartValueAttrName]  = data[flowchartValueAttrNameOfOld] ;//保留原始值
					}
				}
			}
			dig.rebuildParts();
			m.commitTransaction("update data info");
			return;
		}
		
		
		
	    if(results!=null&&results!=undefined&&results.length>0)
		{
			m.startTransaction("update data info");
			
			
			if(nodes!=null&&nodes!=undefined)//遍历nodes
			{
				var fElementType = "other"// 流程图的元素类型（流股或其他）
				for (var i = 0; i < nodes.length; i++)// 遍历节点
				{
					var data = nodes[i];
					if(data.hasOwnProperty(flowchartAspenElementAtrrName))
					{
						var fAspenName = data[flowchartAspenElementAtrrName];// 流程图中的Aspen元素
						if(fAspenName!=null&&fAspenName!=undefined)
						{
							// 结果中寻找相关的Aspen元素
							var arr = [];
							for(var j=0;j<results.length;j++)
							{
								var r = results[j];
								if(r.hasOwnProperty(dataElementAttrName))
								{
									var dAspenName  = r[dataElementAttrName];//结果中Aspen元素
									var dElementType = r[dataElementTypeAttrName];// app结果中Aspen元素类型（流股或其他）
									dElementType = dElementType.toLowerCase()=="stream"?"stream":"other";
									if(dAspenName==fAspenName&&dElementType==fElementType)
									{
										
										arr.push(r);
									}
								}
							}
							// 构造流程图显示结果
							if(arr.length>0)
							{
								if(!data.hasOwnProperty(flowchartValueAttrNameOfOld))// 若还没保留原始值，则保留
								{
									data[flowchartValueAttrNameOfOld]  = data[flowchartValueAttrName] ;//保留原始值
								}
								
								data[flowchartValueAttrName]=_bulidAppReusltContent(arr);
							}
						}
					}
				}			
				
			}
			
			if(links!=null&&links!=undefined)//遍历links
			{
				var fElementType = "stream"// 流程图的元素类型（流股或其他）
				for (var i = 0; i < links.length; i++)// 遍历节点
				{
					var data = links[i];
					if(data.hasOwnProperty(flowchartAspenElementAtrrName))
					{
						var fAspenName = data[flowchartAspenElementAtrrName];// 流程图中的Aspen元素
						if(fAspenName!=null&&fAspenName!=undefined)
						{
							// 结果中寻找相关的Aspen元素
							var arr = [];
							for(var j=0;j<results.length;j++)
							{
								var r = results[j];
								if(r.hasOwnProperty(dataElementAttrName))
								{
									var dAspenName  = r[dataElementAttrName];//结果中Aspen元素
									var dElementType = r[dataElementTypeAttrName];// app结果中Aspen元素类型（流股或其他）
									dElementType = dElementType.toLowerCase()=="stream"?"stream":"other";
									if(dAspenName==fAspenName&&dElementType==fElementType)
									{
										arr.push(r);
									}
								}
							}
							// 构造流程图显示结果
							if(arr.length>0)
							{
								if(!data.hasOwnProperty(flowchartValueAttrNameOfOld))
								{
									data[flowchartValueAttrNameOfOld]  = data[flowchartValueAttrName] ;//保留原始值
								}
								data[flowchartValueAttrName]=_bulidAppReusltContent(arr);
							}
						}
					}
				}
			}
			
			dig.rebuildParts();
			m.commitTransaction("update data info");
		}
		
	}
	
	function _bulidAppReusltContent(appResultArr)
	{
		
		// appResultArr 参数结果数组
		// 构造 app结果的显示内容
		var htmlStr = "";
		var dataNameAttrName = "Name";// 结果数据中用于保存参数名称的属性名称
		var dataLabelAttrName = "Label";// 结果数据中用于保存参数Label的属性名称
		var dataUnitAttrName = "UnitStr";// 结果数据中用于保存参数单位的属性名称
		var dataElementTypeAttrName = "ElementType";// 结果数据中用于保存参数所属的元素类型的属性名称
		var dataElementAttrName = "Element";// 结果数据中用于保存参数所属元素名称的属性名称
		var dataPathAttrName = "Path";// 结果数据中用于保存参数Path的属性名称
		var dataIsInputAttrName = "IsInput";// 结果数据中用于保存参数IsInput的属性名称
		
		/* var dataValueMeasureAttrName = "ValueMeasure";// 结果数据中用于保存参数ValueMeasure的属性名称
		var dataValueSimAttrName = "ValueSim";// 结果数据中用于保存参数ValueSim的属性名称
		var dataValueRecAttrName = "ValueRec";// 结果数据中用于保存参数ValueRec的属性名称
		var dataValueOptAttrName = "ValueOpt";// 结果数据中用于保存参数ValueOpt的属性名称 */
		
		
		var toDisplayValueMode = $("#appValueToDisplay input:radio:checked").val();//"ValueMeasure"; 
		//var toDisplayValueMode = $("#select_appValueToDisplay").combobox('getValue');// easyui 模式
		if(toDisplayValueMode==null || toDisplayValueMode== undefined){
			toDisplayValueMode = "ValueMeasure";
		}
		//显示的内容：测量、模拟、调和、优化
		
		// var keys = [dataLabelAttrName,dataUnitAttrName,dataValueMeasureAttrName,dataValueSimAttrName,dataValueRecAttrName,dataValueOptAttrName];
		var keys = [dataLabelAttrName,dataUnitAttrName,toDisplayValueMode];
		//var titles = "参数"
		if(appResultArr!=null&&appResultArr!=undefined&&appResultArr.length>0)
		{
			for(var i=0;i<appResultArr.length;i++)// 一行记录一条
			{
				var sTemp = "";
				var r = appResultArr[i];
				if(r.hasOwnProperty(dataPathAttrName))
				{
				
					var path = r[dataPathAttrName];//Aspne参数的路径
					var flag = false;// 改参数r 是否显示编辑
					if (allTowShowAspenTemplates == null || allTowShowAspenTemplates == undefined) {
						flag = true;
					}
					else{
						for(var m=0;m<allTowShowAspenTemplates.length;m++)// 遍历允许显示的模板
						{
							var tmpt = allTowShowAspenTemplates[m];
							if(IsInTemplate(path,tmpt))// 路径在允许的模板中
							{
								flag=true;// 允许显示
								break;
							}
						}
					}
					if(flag)// 允许显示
					{
						for(var j=0;j<keys.length;j++)
						{
							var key = keys[j];
							if(sTemp=="")
							{
								sTemp += r[key];
							}
							else{
								sTemp += ","+r[key];
							}
						}
						sTemp +="\n";
						htmlStr +=sTemp;
					}
				}
			}
		}
		return htmlStr;
	}
	

	function collectTagFormula()
	{
		// 收集实时位号（组）
	
		var arr = [];// arr=["F1101.PV","{{F1101.PV}}*1000/2""]

		var dig = myDiagram;
	    var m = dig.model;
	    var nodes = m.nodeDataArray;

		var nodeTemplateMap = 'category';// 存于保存节点模板的属性
		var nodeValueName = 'text';// 存于保存节点 值 的属性
		var dataTagCategoryName = "dataTag";// 监控位号的标签
		var dataTagAttrName = "TagFormulaRT";//结果中用于保存位号公式的属性名称
	    
		if(nodes!=null&&nodes!=undefined&&results!=null&&results!=undefined&&results.length>0)
		{
			for (var i = 0; i < nodes.length; i++)// 遍历节点
			{
				var node = nodes[i];
				if(node.hasOwnProperty(nodeTemplateMap)&&node.hasOwnProperty(dataTagAttrName))
				{
					var category = node[nodeTemplateMap];
					var nodeTagFormula  = node[dataTagAttrName]; // 节点位号公式
					if(category==dataTagCategoryName&&nodeTagFormula!=null&&nodeTagFormula!="")// 是实时位号模板
					{
						arr.push(nodeTagFormula);
					}
				}
			}
		}
		
		return arr;
	}
	
	
	function collecParams()
	{
		// 收集参数
		return aspenParams;
	}

	function IsInTemplate(path,template)
	{
		var f = false;
		// 判断Aspen路径是否与模板匹配
		if(path!=null&&template!=null&&path!=undefined&&template!=undefined)
		{
			// path 路径: \Data\Streams\DFQ\Input\TEMP\MIXED
			// template 模板: \Data\Streams\{0}\Input\TEMP\MIXED
			// 利用正则表示，将模板转成正则表达式的模式
			var re= new RegExp(/\{(\d+)\}/g,"i");//第二个参数,表示匹配时不分大小写
			var template2 = template.replace(re,"(.*)","i");// \Data\Streams\(.*)\Input\TEMP\MIXED
			// 测试路径是否与模板匹配
			var template3 = template2.replace(/\\/g,'\\\\');// 转移目录符号
			var re3 = new RegExp(template3); 
			var f = re3.test(path);
		}
		return f;
	}

	/* 
	

	
	
 */