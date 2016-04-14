var global_bar_Area_Struct;                 /*Variable initiated in Bar_Object.js.*/
var global_Bar_Object;                      /*Variable initiated in sketch.js.*/
var global_barPressedCountdown_Int;         /*Variable initiated in sketch.js.*/
var global_barWidth_Int;                    /*Variable initiated in Bar_Object.js.*/
var global_branch_Node_Object_Array;        /*Variable initiated in sketch.js.*/
var global_furthest_Node_Object;            /*Variable initiated in CheckFurthestBarNode_Void() in sketch.js.*/
var global_height_Int;                      /*Variable initiated in InitiateGlobalVariableFromScreenRatio_Void() in sketch.js.*/
var global_heightFix_Int;                   /*Variable initiated in sketch.js.*/
var global_nearest_Node_Object;             /*Variable initiated in CheckNearestBarNode_Void() in sketch.js.*/
var global_NodeGenerator_Object;            /*Variable initiated in sketch.js.*/
var global_nodeNearestYUL_Int;              /*Variable initiated in sketch.js.*/
var global_nodeSpawnPointY_Int;             /*Variable initiated in sketch.js.*/
var global_nodeSpeed_Int;                   /*Variable initiated in InitiateGlobalVariableFromScreenRatio_Void() in sketch.js.*/
var global_offset_Int;                      /*Variable initiated in InitiateGlobalVariableFromScreenRatio_Void() in sketch.js.*/
var global_offsetSizeFix_Int;               /*Variable initiated in InitiateGlobalVariableFromScreenRatio_Void() in sketch.js.*/
var global_screen_Area_Struct;              /*Variable initiated in sketch.js.*/
var global_strokeWeight_Int;                /*Variable initiated in InitiateGlobalVariableFromScreenRatio_Void() in sketch.js.*/
var global_TrailGenerator_Object;           /*Variable initiated in sketch.js*/
var global_xULBar_Int;                      /*Variable initiated in Bar_Object.js. CAUTION: Change this using setter.*/
var global_yULBar_Int;                      /*Variable initiated in Bar_Object.js. CAUTION: Change this using setter.*/
var global_barPressed_Bool                  = false;
var global_barPressedCountdownFix_Int       = 2;
var global_Node_Object_Array                = new Array();
var global_nodeAmount_Int                   = 5;
var global_nodeFurthestYUL_Int              = 0;
var global_nodeMasterInterval_Int           = 50;
var global_nodeMasterIntervalFix_Int        = 50;





var global_Trail_Object_Array               = new Array(global_nodeAmount_Int);
for(var i_Int = 0; i_Int < global_nodeAmount_Int; i_Int ++)
    { global_Trail_Object_Array[i_Int] = new Trail_Object(); }
var global_xUCNode_Int_Array                = new Array(global_nodeAmount_Int);








/*Color variables.*/
var global_backgroundColor_String           = "rgba(34, 32, 52, 1)";
var global_fillBarDefaultColor_String       = "rgba(69, 40, 60, 0.5)";
var global_fillBarPressedColor_String       = "rgba(143, 86, 59, 0.5)";
var global_fillColor_String                 = "rgba(69, 40, 60, 1)";
var global_fillNodeBlink_String             = "rgba(217, 87, 99, 1)";
var global_fillNodeOther_String             = "rgba(0, 0, 0, 1)";
var global_strokeBarColor_String            = "rgba(102, 57, 49, 0.5)";
var global_strokeColor_String               = "rgba(102, 57, 49, 1)";





var global_fillNode_String_Array            = new Array(global_nodeAmount_Int);
    global_fillNode_String_Array[0]         = "rgba(172, 50, 50, 1)";
    global_fillNode_String_Array[1]         = "rgba(251, 242, 54, 1)";
    global_fillNode_String_Array[2]         = "rgba(153, 229, 80, 1)";
    global_fillNode_String_Array[3]         = "rgba(106, 190, 48, 1)";
    global_fillNode_String_Array[4]         = "rgba(55, 148, 110, 1)";





/*Sound variables.*/
var global_nodeOther_Audio                  = new Audio("asset/sound/OtherNode.ogg");
var global_nodeMissed_Audio                 = new Audio("asset/sound/MissedNode.ogg");





var global_node_Audio_Array                 = new Array(global_nodeAmount_Int);
    global_node_Audio_Array[0]              = new Audio("asset/sound/MasterNode.ogg");
    global_node_Audio_Array[1]              = new Audio("asset/sound/_1Node.ogg");
    global_node_Audio_Array[2]              = new Audio("asset/sound/_2Node.ogg");
    global_node_Audio_Array[3]              = new Audio("asset/sound/_3Node.ogg");
    global_node_Audio_Array[4]              = new Audio("asset/sound/_4Node.ogg");




/*Variables that save the trail position.*/
var global_endNode_Point_Struct_Array       = new Array(global_nodeAmount_Int);
var global_startNode_Point_Struct_Array     = new Array(global_nodeAmount_Int);
var global_end_Node_Object_Array            = new Array(global_nodeAmount_Int);
var global_start_Node_Object_Array          = new Array(global_nodeAmount_Int);





/*==================================================*/
function Set_global_xULBar_Int_Void(_global_xULBar_Int){

    global_xULBar_Int = _global_xULBar_Int;
    global_bar_Area_Struct = new Area_Struct(
        global_barWidth_Int,
        global_heightFix_Int,
        global_xULBar_Int,
        global_yULBar_Int
    );

}
function Set_global_yULBar_Int_Void(_global_yULBar_Int){

    global_yULBar_Int = _global_yULBar_Int;
    global_bar_Area_Struct = new Area_Struct(
        global_barWidth_Int,
        global_heightFix_Int,
        global_xULBar_Int,
        global_yULBar_Int
    );

}
/*==================================================*/