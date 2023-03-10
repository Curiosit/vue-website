
const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-west-2'

});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamoDBTableName = 'pw-projects-table';

const getProjectsPath = '/getprojects';
const postProjectsPath = '/postprojects';

exports.handler = async function(event){
    
    let response;
    switch(true){
        case event.httpMethod === 'GET' && event.path === getProjectsPath:
            response = getProjects();
            break;
        case event.httpMethod === 'POST' && event.path === postProjectsPath:
            response = await postProjects(JSON.parse(event.body));
            break;
        default:
            response = responseReturn(404,  event.path)
    }
    return response;
}


async function getProjects(){
    const params = {
        TableName: dynamoDBTableName,
    }

    try{
        const data = await dynamodb.scan(params).promise();
        return responseReturn(200, data);
    }catch(err){
        return responseReturn(500, err);
    }
}


async function postProjects(requestBody){
    const params = {
        TableName: dynamoDBTableName,
        Item: requestBody
    }

    return await dynamodb.put(params).promise().then(()=>{
        const body = {
            Message: 'Success',
            Item: requestBody
        }
        return responseReturn(200, body)
    }, (err) =>{
        return err;
    })
}



function responseReturn(statusCode, body){
    return{
        statusCode: statusCode,
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    }
}



