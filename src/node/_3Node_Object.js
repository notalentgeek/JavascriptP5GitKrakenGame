/*==================================================*/
var _3Node_Object = function(){

    Node_Object.call(
        this,
        global_node_Audio_Array[3],         /*__Audio,*/
        Branch_Enum._3_BRANCH,              /*__Branch_Enum,*/
        global_branch_Node_Object_Array[3], /*_branch_Node_Object_Array,*/
        global_heightFix_Int,               /*_width_Int,*/
        global_heightFix_Int,               /*_height_Int,*/
        global_xUCNode_Int_Array[3],        /*_xC_Int,*/
        global_nodeSpawnPointY_Int,         /*_yC_Int,*/
        true,                               /*_fill_Bool,*/
        true,                               /*_stroke_Bool,*/
        global_fillNode_String_Array[3],    /*_fillColor_String,*/
        global_strokeWeight_Int,            /*_stroke_Int,*/
        global_strokeColor_String           /*_strokeColor_String*/
    );





    //console.log(this._Area_Struct.xUL_Int);

};
_3Node_Object.prototype.constructor = _3Node_Object;
/*==================================================*/





/*==================================================*/
_3Node_Object.prototype.Update_Node_Object = function(){

    Node_Object.prototype.CheckDelete_Node_Object.call(this);





    Node_Object.prototype.CheckBound_Node_Object.call(this)
    Node_Object.prototype.Draw_Node_Object.call(this);
    Node_Object.prototype.Set_yC_Int_Void.call(this, this.yC_Int - global_nodeSpeed_Int);





    //console.log("Test!");

};
/*==================================================*/