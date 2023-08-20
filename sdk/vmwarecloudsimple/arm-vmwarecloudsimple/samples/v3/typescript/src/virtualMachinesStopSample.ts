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
  VirtualMachineStopMode,
  VirtualMachinesStopOptionalParams,
  VMwareCloudSimple
} from "@azure/arm-vmwarecloudsimple";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Power off virtual machine, options: shutdown, poweroff, and suspend
 *
 * @summary Power off virtual machine, options: shutdown, poweroff, and suspend
 * x-ms-original-file: specification/vmwarecloudsimple/resource-manager/Microsoft.VMwareCloudSimple/stable/2019-04-01/examples/StopInBodyVirtualMachine.json
 */
async function stopInBodyVirtualMachine() {
  const subscriptionId =
    process.env["VMWARECLOUDSIMPLE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["VMWARECLOUDSIMPLE_RESOURCE_GROUP"] || "myResourceGroup";
  const referer = "https://management.azure.com/";
  const virtualMachineName = "myVirtualMachine";
  const m: VirtualMachineStopMode = {};
  const options: VirtualMachinesStopOptionalParams = { m };
  const credential = new DefaultAzureCredential();
  const client = new VMwareCloudSimple(credential, subscriptionId);
  const result = await client.virtualMachines.beginStopAndWait(
    resourceGroupName,
    referer,
    virtualMachineName,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Power off virtual machine, options: shutdown, poweroff, and suspend
 *
 * @summary Power off virtual machine, options: shutdown, poweroff, and suspend
 * x-ms-original-file: specification/vmwarecloudsimple/resource-manager/Microsoft.VMwareCloudSimple/stable/2019-04-01/examples/StopInQueryVirtualMachine.json
 */
async function stopInQueryVirtualMachine() {
  const subscriptionId =
    process.env["VMWARECLOUDSIMPLE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["VMWARECLOUDSIMPLE_RESOURCE_GROUP"] || "myResourceGroup";
  const referer = "https://management.azure.com/";
  const virtualMachineName = "myVirtualMachine";
  const mode = "suspend";
  const options: VirtualMachinesStopOptionalParams = { mode };
  const credential = new DefaultAzureCredential();
  const client = new VMwareCloudSimple(credential, subscriptionId);
  const result = await client.virtualMachines.beginStopAndWait(
    resourceGroupName,
    referer,
    virtualMachineName,
    options
  );
  console.log(result);
}

async function main() {
  stopInBodyVirtualMachine();
  stopInQueryVirtualMachine();
}

main().catch(console.error);