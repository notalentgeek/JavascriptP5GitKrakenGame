/*==================================================*/
var Bar_Object = function(){

    global_barWidth_Int     = ((3/4)*width) - global_offsetSizeFix_Int;
    global_xULBar_Int       = ((1/4)*width) + global_offset_Int;                        /*CAUTION: Change this using setter.*/
    global_yULBar_Int       = height - global_heightFix_Int - global_offset_Int;        /*CAUTION: Change this using setter.*/
    //console.log(global_heightFix_Int);





    global_bar_Area_Struct = new Area_Struct(
        global_barWidth_Int,
        global_heightFix_Int,
        global_xULBar_Int,
        global_yULBar_Int
    );




    //console.log(this.width_Int);

};
Bar_Object.prototype.constructor = Bar_Object;
/*==================================================*/





/*==================================================*/
Bar_Object.prototype.Draw_Bar_Object = function(){

    if(global_barPressed_Bool == true)
        { global_fillBarColor_String = global_fillBarPressedColor_String; }
    else if(global_barPressed_Bool == false)
        { global_fillBarColor_String = global_fillBarDefaultColor_String; }





    rectMode(CORNER);
    fill(global_fillBarColor_String);
    stroke(global_strokeBarColor_String);
    strokeWeight(global_strokeWeight_Int);





    rect(
        global_xULBar_Int,
        global_yULBar_Int,
        global_barWidth_Int,
        global_heightFix_Int,
        global_offset_Int
    );





    fill("#FFFFFF");
    stroke("#000000");
    strokeWeight(1);
    rectMode(CORNER);

};
/*==================================================*/





/*==================================================*/
Bar_Object.prototype.Update_Bar_Object = function(){

    global_bar_Area_Struct = new Area_Struct(
        global_barWidth_Int,
        global_heightFix_Int,
        global_xULBar_Int,
        global_yULBar_Int
    );
    this.Draw_Bar_Object();





    return this;

};
/*==================================================*/