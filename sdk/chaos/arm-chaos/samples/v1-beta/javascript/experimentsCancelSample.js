/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ChaosManagementClient } = require("@azure/arm-chaos");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Cancel a running Experiment resource.
 *
 * @summary Cancel a running Experiment resource.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/preview/2022-10-01-preview/examples/CancelAExperiment.json
 */
async function cancelARunningExperiment() {
  const subscriptionId =
    process.env["CHAOS_SUBSCRIPTION_ID"] || "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const resourceGroupName = process.env["CHAOS_RESOURCE_GROUP"] || "exampleRG";
  const experimentName = "exampleExperiment";
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const result = await client.experiments.cancel(resourceGroupName, experimentName);
  console.log(result);
}

async function main() {
  cancelARunningExperiment();
}

main().catch(console.error);