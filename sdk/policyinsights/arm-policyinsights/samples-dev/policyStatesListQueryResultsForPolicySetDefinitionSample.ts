/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  PolicyStatesListQueryResultsForPolicySetDefinitionOptionalParams,
  PolicyInsightsClient
} from "@azure/arm-policyinsights";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Queries policy states for the subscription level policy set definition.
 *
 * @summary Queries policy states for the subscription level policy set definition.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyStates_QuerySubscriptionLevelPolicySetDefinitionScope.json
 */
async function queryLatestAtSubscriptionLevelPolicySetDefinitionScope() {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const policyStatesResource = "latest";
  const policySetDefinitionName = "3e3807c1-65c9-49e0-a406-82d8ae3e338c";
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyStates.listQueryResultsForPolicySetDefinition(
    policyStatesResource,
    subscriptionId,
    policySetDefinitionName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Queries policy states for the subscription level policy set definition.
 *
 * @summary Queries policy states for the subscription level policy set definition.
 * x-ms-original-file: specification/policyinsights/resource-manager/Microsoft.PolicyInsights/stable/2019-10-01/examples/PolicyStates_QuerySubscriptionLevelPolicySetDefinitionScopeNextLink.json
 */
async function queryLatestAtSubscriptionLevelPolicySetDefinitionScopeWithNextLink() {
  const subscriptionId =
    process.env["POLICYINSIGHTS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const policyStatesResource = "latest";
  const policySetDefinitionName = "3e3807c1-65c9-49e0-a406-82d8ae3e338c";
  const skipToken = "WpmWfBSvPhkAK6QD";
  const options: PolicyStatesListQueryResultsForPolicySetDefinitionOptionalParams = {
    queryOptions: { skipToken: skipToken }
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyInsightsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.policyStates.listQueryResultsForPolicySetDefinition(
    policyStatesResource,
    subscriptionId,
    policySetDefinitionName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  queryLatestAtSubscriptionLevelPolicySetDefinitionScope();
  queryLatestAtSubscriptionLevelPolicySetDefinitionScopeWithNextLink();
}

main().catch(console.error);