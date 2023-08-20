// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Recorder, RecorderStartOptions, env, isPlaybackMode } from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import {
  AvailabilitySetsCreateOrUpdateParameters,
  AvailabilitySetsDeleteParameters,
  AvailabilitySetsGetParameters,
  AvailabilitySetsListParameters,
  AvailabilitySetsUpdateParameters,
  ComputeManagementClient,
  VirtualMachinesCreateOrUpdateParameters,
  VirtualMachinesDeleteParameters,
  VirtualMachinesGetParameters,
  VirtualMachinesListParameters,
  VirtualMachinesUpdateParameters,
  getLongRunningPoller,
  isUnexpected,
  paginate,
} from "../../src";
import {
  NetworkInterface,
  NetworkManagementClient,
  Subnet,
  VirtualNetwork,
} from "@azure/arm-network";
import { createTestComputeManagementClient } from "./utils/recordedClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id",
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
};

export const testPollingOptions = {
  intervalInMs: isPlaybackMode() ? 0 : undefined,
};
export const testPollingOptionsForNetwork = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Compute test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: ComputeManagementClient;
  let network_client: NetworkManagementClient;
  let location: string;
  let resourceGroupName: string;
  let availabilitySetName: string;
  let network_name: string;
  let subnet_name: string;
  let interface_name: string;
  let virtual_machine_name: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = createTestComputeManagementClient(recorder, credential);
    network_client = new NetworkManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({})
    );
    location = "eastus";
    resourceGroupName = "myjstest";
    availabilitySetName = "availabilitySets123";
    network_name = "networknamexx";
    subnet_name = "subnetnamexx";
    interface_name = "interfacex";
    virtual_machine_name = "virtualmachinex";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  // network_client.virtualNetworks.createOrUpdate
  async function createVirtualNetwork() {
    const parameter: VirtualNetwork = {
      location: location,
      addressSpace: {
        addressPrefixes: ["10.0.0.0/16"],
      },
    };
    const virtualNetworks_create_info =
      await network_client.virtualNetworks.beginCreateOrUpdateAndWait(
        resourceGroupName,
        network_name,
        parameter,
        testPollingOptionsForNetwork
      );
    console.log(virtualNetworks_create_info);
    const subnet_parameter: Subnet = {
      addressPrefix: "10.0.0.0/24",
    };
    const subnet__create_info = await network_client.subnets.beginCreateOrUpdateAndWait(
      resourceGroupName,
      network_name,
      subnet_name,
      subnet_parameter,
      testPollingOptionsForNetwork
    );
    console.log(subnet__create_info);
  }

  // network_client.networkInterfaces.createOrUpdate
  async function createNetworkInterface(group_name: any, nic_name: any) {
    const parameter: NetworkInterface = {
      location: location,
      ipConfigurations: [
        {
          name: "MyIpConfig",
          subnet: {
            id:
              "/subscriptions/" +
              subscriptionId +
              "/resourceGroups/" +
              resourceGroupName +
              "/providers/Microsoft.Network/virtualNetworks/" +
              network_name +
              "/subnets/" +
              subnet_name,
          },
        },
      ],
    };
    const nic_info = await network_client.networkInterfaces.beginCreateOrUpdateAndWait(
      group_name,
      nic_name,
      parameter,
      testPollingOptionsForNetwork
    );
    console.log(nic_info);
  }

  it("availabilitySets create test", async function () {
    const options: AvailabilitySetsCreateOrUpdateParameters = {
      body: {
        location: "westus",
        properties: { platformFaultDomainCount: 2, platformUpdateDomainCount: 20 },
      },
      queryParameters: { "api-version": "2022-08-01" },
    };
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
        subscriptionId,
        resourceGroupName,
        availabilitySetName
      )
      .put(options);
    if (isUnexpected(result)) {
      throw "create availability set error result" + result;
    }
    assert.equal(result.body.name, availabilitySetName);
  });

  it("availabilitySets update test", async function () {
    const options: AvailabilitySetsUpdateParameters = {
      body: {
        properties: { platformFaultDomainCount: 2, platformUpdateDomainCount: 20 },
      },
      queryParameters: { "api-version": "2022-08-01" },
    };
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
        subscriptionId,
        resourceGroupName,
        availabilitySetName
      )
      .patch(options);
    if (isUnexpected(result)) {
      throw "update availability set error. result" + result;
    }
    assert.equal(result.body.type, "Microsoft.Compute/availabilitySets");
  });

  it("availabilitySets get test", async function () {
    const options: AvailabilitySetsGetParameters = {
      queryParameters: { "api-version": "2022-08-01" },
    };
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
        subscriptionId,
        resourceGroupName,
        availabilitySetName
      )
      .get(options);
    if (isUnexpected(result)) {
      throw "update availability set error. result" + result;
    }
    assert.equal(result.body.name, availabilitySetName);
  });

  it("availabilitySets list test", async function () {
    const options: AvailabilitySetsListParameters = {
      queryParameters: { "api-version": "2022-08-01" },
    };
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets",
        subscriptionId,
        resourceGroupName
      )
      .get(options);
    const pageData = paginate(client, initialResponse);
    const result = [];
    for await (const item of pageData) {
      result.push(item);
    }
    assert.equal(result.length, 1);
  });

  it("availabilitySets delete test", async function () {
    const deleteOptions: AvailabilitySetsDeleteParameters = {
      queryParameters: { "api-version": "2022-08-01" },
    };
    const deleteResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
        subscriptionId,
        resourceGroupName,
        availabilitySetName
      )
      .delete(deleteOptions);
    if (isUnexpected(deleteResponse)) {
      throw "delete availability set error. result" + deleteResponse;
    }
    const options: AvailabilitySetsListParameters = {
      queryParameters: { "api-version": "2022-08-01" },
    };
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets",
        subscriptionId,
        resourceGroupName
      )
      .get(options);
    const pageData = paginate(client, initialResponse);
    const result = [];
    for await (const item of pageData) {
      result.push(item);
    }
    assert.equal(result.length, 0);
  });

  it("virtualMachines create test", async function () {
    await createVirtualNetwork();
    await createNetworkInterface(resourceGroupName, interface_name);
    const options: VirtualMachinesCreateOrUpdateParameters = {
      body: {
        location: location,
        properties: {
          hardwareProfile: {
            vmSize: "Standard_D2_v2",
          },
          storageProfile: {
            imageReference: {
              sku: "2016-Datacenter",
              publisher: "MicrosoftWindowsServer",
              version: "latest",
              offer: "WindowsServer",
            },
            osDisk: {
              caching: "ReadWrite",
              managedDisk: {
                storageAccountType: "Standard_LRS",
              },
              name: "myVMosdisk",
              createOption: "FromImage",
            },
            dataDisks: [
              {
                diskSizeGB: 1023,
                createOption: "Empty",
                lun: 0,
              },
              {
                diskSizeGB: 1023,
                createOption: "Empty",
                lun: 1,
              },
            ],
          },
          osProfile: {
            adminUsername: "testuser",
            computerName: "myVM",
            adminPassword: "SecretPlaceholder123",
            windowsConfiguration: {
              enableAutomaticUpdates: true, // need automatic update for reimage
            },
          },
          networkProfile: {
            networkInterfaces: [
              {
                id:
                  "/subscriptions/" +
                  subscriptionId +
                  "/resourceGroups/" +
                  resourceGroupName +
                  "/providers/Microsoft.Network/networkInterfaces/" +
                  interface_name +
                  "",
              },
            ],
          },
        },
      },

      queryParameters: {
        "api-version": "2022-08-01",
      },
    };
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
        subscriptionId,
        resourceGroupName,
        virtual_machine_name
      )
      .put(options);
    if (isUnexpected(initialResponse)) {
      throw "create virtual machine error. result" + initialResponse;
    }
    const poller = getLongRunningPoller(client, initialResponse, testPollingOptions);
    const result = await poller.pollUntilDone();
    assert.equal(result.body.name, virtual_machine_name);
  });

  it("virtualMachines get test", async function () {
    const options: VirtualMachinesGetParameters = {
      queryParameters: { "api-version": "2022-08-01" },
    };
    const result = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
        subscriptionId,
        resourceGroupName,
        virtual_machine_name
      )
      .get(options);
    if (isUnexpected(result)) {
      throw "create virtual machine error. result" + result;
    }
    assert.equal(result.body.name, virtual_machine_name);
  });

  it("virtualMachines list test", async function () {
    const options: VirtualMachinesListParameters = {
      queryParameters: {
        "api-version": "2022-08-01",
      },
    };
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines",
        subscriptionId,
        resourceGroupName
      )
      .get(options);
    const pageData = paginate(client, initialResponse);
    const result = [];
    for await (const item of pageData) {
      result.push(item);
    }
    assert.equal(result.length, 1);
  });

  it("virtualMachines update test", async function () {
    const options: VirtualMachinesUpdateParameters = {
      body: {
        properties: {
          networkProfile: {
            networkInterfaces: [
              {
                id:
                  "/subscriptions/" +
                  subscriptionId +
                  "/resourceGroups/" +
                  resourceGroupName +
                  "/providers/Microsoft.Network/networkInterfaces/" +
                  interface_name +
                  "",
              },
            ],
          },
        },
      },
      queryParameters: {
        "api-version": "2022-08-01",
      },
    };
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
        subscriptionId,
        resourceGroupName,
        virtual_machine_name
      )
      .patch(options);
    const poller = getLongRunningPoller(client, initialResponse, testPollingOptions);
    const result = await poller.pollUntilDone();
    if (isUnexpected(result)) {
      throw "update virtual machine error. result" + result;
    }
    assert.equal(result.body.type, "Microsoft.Compute/virtualMachines");
  });

  it("virtualMachines delete test", async function () {
    const deleteOptions: VirtualMachinesDeleteParameters = {
      queryParameters: { forceDeletion: true, "api-version": "2022-08-01" },
    };
    const deleteInitialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines/{vmName}",
        subscriptionId,
        resourceGroupName,
        virtual_machine_name
      )
      .delete(deleteOptions);
    const poller = getLongRunningPoller(client, deleteInitialResponse, testPollingOptions);
    const deleteResponse = await poller.pollUntilDone();
    if (isUnexpected(deleteResponse)) {
      throw "delete virtual machine error. result" + deleteResponse;
    }
    const options: VirtualMachinesListParameters = {
      queryParameters: {
        "api-version": "2022-08-01",
      },
    };
    const initialResponse = await client
      .path(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachines",
        subscriptionId,
        resourceGroupName
      )
      .get(options);
    const pageData = paginate(client, initialResponse);
    const result = [];
    for await (const item of pageData) {
      result.push(item);
    }
    assert.equal(result.length, 0);
    await network_client.networkInterfaces.beginDeleteAndWait(resourceGroupName, interface_name);
    await network_client.subnets.beginDeleteAndWait(resourceGroupName, network_name, subnet_name);
    await network_client.virtualNetworks.beginDeleteAndWait(resourceGroupName, network_name);
  });
});