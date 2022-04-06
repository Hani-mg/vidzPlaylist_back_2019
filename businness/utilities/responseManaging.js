function formatResponse(error, result){
    var data = [];
    if(error == null){
        data['status']= {code : "200", error:null, message: 'succes'};
        data['data']= JSON.parse(JSON.stringify(result));;
    }
    else{
        data['status']={code : error.code , error: error.name, message: error.message};
        data['data']= null;
    }

    return {status : data.status, data : data.data};
}

module.exports = { formatResponse };