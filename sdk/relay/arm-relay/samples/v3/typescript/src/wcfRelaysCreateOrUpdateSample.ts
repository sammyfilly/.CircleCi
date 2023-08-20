/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WcfRelay, RelayAPI } from "@azure/arm-relay";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a WCF relay. This operation is idempotent.
 *
 * @summary Creates or updates a WCF relay. This operation is idempotent.
 * x-ms-original-file: specification/relay/resource-manager/Microsoft.Relay/stable/2017-04-01/examples/Relay/RelayCreate.json
 */
async function relayCreate() {
  const subscriptionId =
    process.env["RELAY_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["RELAY_RESOURCE_GROUP"] || "resourcegroup";
  const namespaceName = "example-RelayNamespace-9953";
  const relayName = "example-Relay-Wcf-1194";
  const parameters: WcfRelay = {
    relayType: "NetTcp",
    requiresClientAuthorization: true,
    requiresTransportSecurity: true
  };
  const credential = new DefaultAzureCredential();
  const client = new RelayAPI(credential, subscriptionId);
  const result = await client.wCFRelays.createOrUpdate(
    resourceGroupName,
    namespaceName,
    relayName,
    parameters
  );
  console.log(result);
}

async function main() {
  relayCreate();
}

main().catch(console.error);