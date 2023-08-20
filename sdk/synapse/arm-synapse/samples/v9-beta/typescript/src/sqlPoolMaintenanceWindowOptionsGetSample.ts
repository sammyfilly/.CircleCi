/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get list of SQL pool's available maintenance windows.
 *
 * @summary Get list of SQL pool's available maintenance windows.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/GetMaintenanceWindowOptions.json
 */
async function getListOfTransparentDataEncryptionConfigurationsOfASqlAnalyticsPool() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "samplerg";
  const workspaceName = "testworkspace";
  const sqlPoolName = "testsp";
  const maintenanceWindowOptionsName = "current";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolMaintenanceWindowOptions.get(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    maintenanceWindowOptionsName
  );
  console.log(result);
}

async function main() {
  getListOfTransparentDataEncryptionConfigurationsOfASqlAnalyticsPool();
}

main().catch(console.error);