/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { IntegrationRuntimeAuthKeysOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  IntegrationRuntimeRegenerateKeyParameters,
  IntegrationRuntimeAuthKeysRegenerateOptionalParams,
  IntegrationRuntimeAuthKeysRegenerateResponse,
  IntegrationRuntimeAuthKeysListOptionalParams,
  IntegrationRuntimeAuthKeysListResponse
} from "../models";

/** Class containing IntegrationRuntimeAuthKeysOperations operations. */
export class IntegrationRuntimeAuthKeysOperationsImpl
  implements IntegrationRuntimeAuthKeysOperations {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class IntegrationRuntimeAuthKeysOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Regenerate the authentication key for an integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param regenerateKeyParameters The parameters for regenerating integration runtime authentication
   *                                key.
   * @param options The options parameters.
   */
  regenerate(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    regenerateKeyParameters: IntegrationRuntimeRegenerateKeyParameters,
    options?: IntegrationRuntimeAuthKeysRegenerateOptionalParams
  ): Promise<IntegrationRuntimeAuthKeysRegenerateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        regenerateKeyParameters,
        options
      },
      regenerateOperationSpec
    );
  }

  /**
   * List authentication keys in an integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeAuthKeysListOptionalParams
  ): Promise<IntegrationRuntimeAuthKeysListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, integrationRuntimeName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const regenerateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/regenerateAuthKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeAuthKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.regenerateKeyParameters,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/listAuthKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeAuthKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};