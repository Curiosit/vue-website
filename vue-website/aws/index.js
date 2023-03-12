
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
        return responseReturn(500, err.response.data);
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
        return responseReturn(500, err.response.data);
    })
}



function responseReturn(statusCode, body){
    return{
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods" : "OPTIONS, POST, GET",
            'Content-Type' : 'application/json'
            "Authorization" : "eyJraWQiOiJZT0FCQ1o5Y2NlbWN4amlqWWZJV2VpSHp0WTBZT1NMcUprUHgxT25uRWRFPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmZTMzZTYxMS0xMDE4LTRkYTYtYjdhYy1hNzcyMzNhZTMzMDIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfMnZCQjQ2MlU5IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImFkbWluIiwib3JpZ2luX2p0aSI6IjE2ZDlhNzNhLWY4ZTMtNDdiNi04NjVhLWIzMWVjYTljNjAwMSIsImF1ZCI6IjQzbWN0OGZwNTNmNHVhMzUzZm5obHVsOTZtIiwiZXZlbnRfaWQiOiIyOGU5OWIzOC0yODc5LTQ1YmEtYmVhMi04YjJjZTg2NjQyZjEiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY3ODYxMDczMSwicGhvbmVfbnVtYmVyIjoiKzQ4Njk1NTc3NDMzIiwiZXhwIjoxNjc4NjE0MzMxLCJpYXQiOjE2Nzg2MTA3MzEsImp0aSI6IjQ5NWQxMTZhLWU2NGEtNDEyZC04ZThlLTdjOWRiZTYyYjNlYyIsImVtYWlsIjoibWFpbGluZ2JvdEBnbWFpbC5jb20ifQ.jsddo73elMjeprvIppyZqeh49i2WLXyyeff2hG7YUkOKDMDPbXE7oX3_T2hzwU3Nq04CZyBkHoyzpt0wTAjx_wtnRjBRRcOkdfN4RQERbXbAJSVSbCoxsYqp05CwK879l5ZNunPrD3Ov0Lkp3n7js3zLBf0cXrIFu7Z_vXicV7AAf2f0nXfvR2TEHZjawQHEtBuahSyQxjEO8VrsaKmoXvsi-PS335FNBc8SfCPKTzVRDQtADu16Os16e0m_yZBbAVJuuI0OzlqPUbT0LYyMc5hVh4lTH9iH_x1rvHTxxHaXKS2uYaR8kUyC_sUUU0kOI3W6390QDhbrV8UF67LW6w"

        },
        body: JSON.stringify(body)
    }
}



