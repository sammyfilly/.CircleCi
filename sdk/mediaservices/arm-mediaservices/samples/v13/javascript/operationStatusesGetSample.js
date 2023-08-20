/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get asset track operation status.
 *
 * @summary Get asset track operation status.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/asset-tracks-operation-status-by-id-terminal-state-failed.json
 */
async function getStatusOfAsynchronousOperationWhenItIsCompletedWithError() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const assetName = "ClimbingMountRainer";
  const trackName = "text1";
  const operationId = "86835197-3b47-402e-b313-70b82eaba296";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.operationStatuses.get(
    resourceGroupName,
    accountName,
    assetName,
    trackName,
    operationId
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Get asset track operation status.
 *
 * @summary Get asset track operation status.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/asset-tracks-operation-status-by-id-terminal-state.json
 */
async function getStatusOfAsynchronousOperationWhenItIsCompleted() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const assetName = "ClimbingMountRainer";
  const trackName = "text1";
  const operationId = "e78f8d40-7aaa-4f2f-8ae6-73987e7c5a08";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.operationStatuses.get(
    resourceGroupName,
    accountName,
    assetName,
    trackName,
    operationId
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Get asset track operation status.
 *
 * @summary Get asset track operation status.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/asset-tracks-operation-status-by-id-non-terminal-state.json
 */
async function getStatusOfAsynchronousOperationWhenItIsOngoing() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const assetName = "ClimbingMountRainer";
  const trackName = "text1";
  const operationId = "5827d9a1-1fb4-4e54-ac40-8eeed9b862c8";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.operationStatuses.get(
    resourceGroupName,
    accountName,
    assetName,
    trackName,
    operationId
  );
  console.log(result);
}

async function main() {
  getStatusOfAsynchronousOperationWhenItIsCompletedWithError();
  getStatusOfAsynchronousOperationWhenItIsCompleted();
  getStatusOfAsynchronousOperationWhenItIsOngoing();
}

main().catch(console.error);