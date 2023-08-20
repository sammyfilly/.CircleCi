/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { KustoManagementClient } from "@azure/arm-kusto";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes a Kusto principalAssignment.
 *
 * @summary Deletes a Kusto principalAssignment.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-12-29/examples/KustoDatabasePrincipalAssignmentsDelete.json
 */
async function kustoDatabasePrincipalAssignmentsDelete() {
  const subscriptionId =
    process.env["KUSTO_SUBSCRIPTION_ID"] ||
    "12345678-1234-1234-1234-123456789098";
  const resourceGroupName =
    process.env["KUSTO_RESOURCE_GROUP"] || "kustorptest";
  const clusterName = "kustoCluster";
  const databaseName = "Kustodatabase8";
  const principalAssignmentName = "kustoprincipal1";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const result = await client.databasePrincipalAssignments.beginDeleteAndWait(
    resourceGroupName,
    clusterName,
    databaseName,
    principalAssignmentName
  );
  console.log(result);
}

async function main() {
  kustoDatabasePrincipalAssignmentsDelete();
}

main().catch(console.error);