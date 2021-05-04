import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import * as apigateway from '@aws-cdk/aws-apigateway';
import {Duration} from "@aws-cdk/core";

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const fetchAddressFunc = new lambda.NodejsFunction(this, "fetchAddress", {
      entry: './lib/handle.ts',
      handler: 'fetchAddressHandler',
      timeout: Duration.seconds(15)
    })

    const api = new apigateway.RestApi(this, 'ServerlessRestApi', {cloudWatchRole: false})
    api.root.addMethod('GET', new apigateway.LambdaIntegration(fetchAddressFunc))
  }
}
