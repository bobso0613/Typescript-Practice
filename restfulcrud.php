<?php
$mode = ((isset($_POST["mode"]))?$_POST["mode"]:@$_GET["mode"]);
$db_class = new DatabaseClass();
$result_array = array();
switch($mode) {
    case "create":
        $field_1 = @$_POST["field_1"];
        $field_2 = @$_POST["field_2"];
        $field_3 = @$_POST["field_3"];

        // pseudocode:
        // validations here

        // assumes all validation are passed
        $result_array = $db_class->create_record(array("field_1"=>$field_1,
                        "field_2"=>$field_2,
                        "field_3"=>$field_3));

    break;
    case "read":
        $key = @$_GET["key"];

        $result_array = $db_class->read_record($key);

    break;
    case "update":
    
        $key = @$_POST["key"];
        $field_1 = @$_POST["field_1"];
        $field_2 = @$_POST["field_2"];
        $field_3 = @$_POST["field_3"];

        // pseudocode:
        // validations here

        // assumes all validation are passed
        $result_array = $db_class->update_record($key,array("field_1"=>$field_1,
                        "field_2"=>$field_2,
                        "field_3"=>$field_3));

    break;
    case "delete":

        $key = @$_POST["key"];

        // pseudocode:
        // validations here

        // assumes all validation are passed
        $result_array = $db_class->delete_record($key);

    break;
    default:
        $result_array = array("result"=>0,"error_message"=>"Select a mode");
    break;
}
echo json_encode($result_array);

class DatabaseClass {
    function __construct(){

        // pseudocode:
        // database initialization, ie. connecting / opening instance
        
    }

    function create_record($params=array()) {

        $result = 0;
        $error_message = "error";

        // pseudocode:
        // call function actual insert to DB ($params)

        // if success (assuming)
        $result = 1;
        $error_message = "Record Added successfully.";

        return array("result"=>$result,"error_message"=>$error_message);
    }

    function update_record($key=0,$params=array()) {

        $result = 0;
        $error_message = "error";

        // pseudocode:
        // call function actual update to DB ($params), $key as primary key

        // if success (assuming)
        $result = 1;
        $error_message = "Record Updated successfully.";

        return array("result"=>$result,"error_message"=>$error_message);
    }

    function delete_record($key=0) {

        $result = 0;
        $error_message = "error";

        // pseudocode:
        // call function actual delete to DB, $key as primary key

         // if success (assuming)
         $result = 1;
         $error_message = "Record Deleted successfully.";

        return array("result"=>$result,"error_message"=>$error_message);
    }

    function read_record($key=0) {

        $result = 0;
        $error_message = "error";
        $data = array();

        // pseudocode:
        // call function query here to get data, all if $key==0

        return array("result"=>$result,"error_message"=>$error_message, "data"=>$data);
    }
}