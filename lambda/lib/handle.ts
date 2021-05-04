import {APIGatewayEventRequestContext, APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import {fetchAddress} from "./fetch-address";

export const fetchAddressHandler = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> => {
    const postcode: String = event.queryStringParameters?.postcode ?? ""
    const result = await fetchAddress(postcode)
    return  {
        statusCode: 200,
        body: JSON.stringify(
            result
        )
    }
}