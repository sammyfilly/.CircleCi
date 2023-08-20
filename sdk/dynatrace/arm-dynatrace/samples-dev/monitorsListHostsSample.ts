/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DynatraceObservability } from "@azure/arm-dynatrace";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List the compute resources currently being monitored by the Dynatrace resource.
 *
 * @summary List the compute resources currently being monitored by the Dynatrace resource.
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/Monitors_ListHosts_MaximumSet_Gen.json
 */
async function monitorsListHostsMaximumSetGen() {
  const subscriptionId =
    process.env["DYNATRACE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DYNATRACE_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.monitors.listHosts(
    resourceGroupName,
    monitorName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List the compute resources currently being monitored by the Dynatrace resource.
 *
 * @summary List the compute resources currently being monitored by the Dynatrace resource.
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/Monitors_ListHosts_MinimumSet_Gen.json
 */
async function monitorsListHostsMinimumSetGen() {
  const subscriptionId =
    process.env["DYNATRACE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DYNATRACE_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.monitors.listHosts(
    resourceGroupName,
    monitorName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  monitorsListHostsMaximumSetGen();
  monitorsListHostsMinimumSetGen();
}

main().catch(console.error);