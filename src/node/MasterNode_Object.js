/*==================================================*/
var MasterNode_Object = function(){

    Node_Object.call(
        this,
        global_height_Int,                      /*_width_Int,*/
        global_height_Int,                      /*_height_Int,*/
        global_xULBar_Int + (50/2),             /*_xC_Int,*/
        height - global_offset_Int- (50/2) ,    /*_yC_Int,*/
        true,                                   /*_fill_Bool,*/
        true,                                   /*_stroke_Bool,*/
        global_fillColor_String,                /*_fillColor_String,*/
        global_strokeWeight_Int,                /*_stroke_Int,*/
        global_strokeColor_String               /*_strokeColor_String*/
    );





    /*When this object is created automatically add this object
        into the main node array.*/
    global_Node_Object_Array.push(this);
    //console.log(global_Node_Object_Array.length);





    //console.log(this._Area_Struct.xUL_Int);

};
MasterNode_Object.prototype.constructor = MasterNode_Object;
/*==================================================*/





/*==================================================*/
MasterNode_Object.prototype.Update_MasterNode_Object = function(){

    Node_Object.prototype.CheckBound_Node_Object.call(this)
    Node_Object.prototype.CheckDelete_Node_Object.call(this)
    Node_Object.prototype.Draw_Node_Object.call(this);
    Node_Object.prototype.Set_yC_Int_Void.call(this, this.yC_Int - global_nodeSpeed_Int);





    //console.log("Test!");

};
/*==================================================*/