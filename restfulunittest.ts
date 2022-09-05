const api_call = async (mode:string,key?:number,params?:{})  => {
    let method : string = "POST"
    let extra_params : string = ""
    let api_response

    if (mode=="read") {
        method = "GET"
        extra_params += "?key="+key +"&mode="+mode
        api_response = await fetch("restfulcrud.php"+extra_params,{"method":method,"headers":{"Content-Type":"application/json"}})
    }
    else {
        // let body = {key:key,mode:mode,test:"test"}
        extra_params += "?key="+key +"&mode="+mode
        api_response = await fetch("restfulcrud.php"+extra_params,{"method":method,"headers":{'Accept': 'application/json',"Content-Type":"application/json"}})
    }

    // "body":JSON.stringify(body)

    
    const result = await api_response.json()
    return result
}

const test_log = async (mode:string,key?:number,params?:{}) => {
    // Arrange
    const data_type_check : string = "string"
    const result_check : string = '{"result":0,"error_message":"error","data":[]}'

    // Act
    const result : string = JSON.stringify(await api_call(mode,key))

    console.log("Test record: " + mode)

    // Assert
    // test if result is string
    console.log("Is String?  " + (typeof result===data_type_check))
    console.log("Result Check " + (result_check===result))

}

test_log("read",2)
test_log("create",0,{"field_1":"field_1"})
test_log("update",3,{"field_1":"field_1"})
test_log("delete",4)