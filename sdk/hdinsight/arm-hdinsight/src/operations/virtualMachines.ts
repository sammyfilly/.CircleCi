/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VirtualMachines } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HDInsightManagementClient } from "../hDInsightManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  VirtualMachinesListHostsOptionalParams,
  VirtualMachinesListHostsResponse,
  VirtualMachinesRestartHostsOptionalParams,
  VirtualMachinesGetAsyncOperationStatusOptionalParams,
  VirtualMachinesGetAsyncOperationStatusResponse
} from "../models";

/** Class containing VirtualMachines operations. */
export class VirtualMachinesImpl implements VirtualMachines {
  private readonly client: HDInsightManagementClient;

  /**
   * Initialize a new instance of the class VirtualMachines class.
   * @param client Reference to the service client
   */
  constructor(client: HDInsightManagementClient) {
    this.client = client;
  }

  /**
   * Lists the HDInsight clusters hosts
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  listHosts(
    resourceGroupName: string,
    clusterName: string,
    options?: VirtualMachinesListHostsOptionalParams
  ): Promise<VirtualMachinesListHostsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listHostsOperationSpec
    );
  }

  /**
   * Restarts the specified HDInsight cluster hosts.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param hosts The list of hosts to restart
   * @param options The options parameters.
   */
  async beginRestartHosts(
    resourceGroupName: string,
    clusterName: string,
    hosts: string[],
    options?: VirtualMachinesRestartHostsOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, clusterName, hosts, options },
      spec: restartHostsOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Restarts the specified HDInsight cluster hosts.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param hosts The list of hosts to restart
   * @param options The options parameters.
   */
  async beginRestartHostsAndWait(
    resourceGroupName: string,
    clusterName: string,
    hosts: string[],
    options?: VirtualMachinesRestartHostsOptionalParams
  ): Promise<void> {
    const poller = await this.beginRestartHosts(
      resourceGroupName,
      clusterName,
      hosts,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the async operation status.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param operationId The long running operation id.
   * @param options The options parameters.
   */
  getAsyncOperationStatus(
    resourceGroupName: string,
    clusterName: string,
    operationId: string,
    options?: VirtualMachinesGetAsyncOperationStatusOptionalParams
  ): Promise<VirtualMachinesGetAsyncOperationStatusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, operationId, options },
      getAsyncOperationStatusOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listHostsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/listHosts",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "HostInfo" } }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const restartHostsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/restartHosts",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.hosts,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAsyncOperationStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/restartHosts/azureasyncoperations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AsyncOperationResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};