/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Configurations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBForPostgreSQL } from "../cosmosDBForPostgreSQL";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ServerConfiguration,
  ConfigurationsListByServerNextOptionalParams,
  ConfigurationsListByServerOptionalParams,
  ConfigurationsListByServerResponse,
  Configuration,
  ConfigurationsListByClusterNextOptionalParams,
  ConfigurationsListByClusterOptionalParams,
  ConfigurationsListByClusterResponse,
  ConfigurationsGetOptionalParams,
  ConfigurationsGetResponse,
  ConfigurationsGetCoordinatorOptionalParams,
  ConfigurationsGetCoordinatorResponse,
  ConfigurationsUpdateOnCoordinatorOptionalParams,
  ConfigurationsUpdateOnCoordinatorResponse,
  ConfigurationsGetNodeOptionalParams,
  ConfigurationsGetNodeResponse,
  ConfigurationsUpdateOnNodeOptionalParams,
  ConfigurationsUpdateOnNodeResponse,
  ConfigurationsListByServerNextResponse,
  ConfigurationsListByClusterNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Configurations operations. */
export class ConfigurationsImpl implements Configurations {
  private readonly client: CosmosDBForPostgreSQL;

  /**
   * Initialize a new instance of the class Configurations class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBForPostgreSQL) {
    this.client = client;
  }

  /**
   * List all the configurations of a server in cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    clusterName: string,
    serverName: string,
    options?: ConfigurationsListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerConfiguration> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      clusterName,
      serverName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByServerPagingPage(
          resourceGroupName,
          clusterName,
          serverName,
          options,
          settings
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    clusterName: string,
    serverName: string,
    options?: ConfigurationsListByServerOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ServerConfiguration[]> {
    let result: ConfigurationsListByServerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByServer(
        resourceGroupName,
        clusterName,
        serverName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        clusterName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    clusterName: string,
    serverName: string,
    options?: ConfigurationsListByServerOptionalParams
  ): AsyncIterableIterator<ServerConfiguration> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      clusterName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the configurations of a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  public listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: ConfigurationsListByClusterOptionalParams
  ): PagedAsyncIterableIterator<Configuration> {
    const iter = this.listByClusterPagingAll(
      resourceGroupName,
      clusterName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByClusterPagingPage(
          resourceGroupName,
          clusterName,
          options,
          settings
        );
      }
    };
  }

  private async *listByClusterPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: ConfigurationsListByClusterOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Configuration[]> {
    let result: ConfigurationsListByClusterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCluster(
        resourceGroupName,
        clusterName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByClusterNext(
        resourceGroupName,
        clusterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByClusterPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: ConfigurationsListByClusterOptionalParams
  ): AsyncIterableIterator<Configuration> {
    for await (const page of this.listByClusterPagingPage(
      resourceGroupName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the configurations of a server in cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    clusterName: string,
    serverName: string,
    options?: ConfigurationsListByServerOptionalParams
  ): Promise<ConfigurationsListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, serverName, options },
      listByServerOperationSpec
    );
  }

  /**
   * List all the configurations of a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  private _listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: ConfigurationsListByClusterOptionalParams
  ): Promise<ConfigurationsListByClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listByClusterOperationSpec
    );
  }

  /**
   * Gets information of a configuration for coordinator and nodes.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    configurationName: string,
    options?: ConfigurationsGetOptionalParams
  ): Promise<ConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, configurationName, options },
      getOperationSpec
    );
  }

  /**
   * Gets information of a configuration for coordinator.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param options The options parameters.
   */
  getCoordinator(
    resourceGroupName: string,
    clusterName: string,
    configurationName: string,
    options?: ConfigurationsGetCoordinatorOptionalParams
  ): Promise<ConfigurationsGetCoordinatorResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, configurationName, options },
      getCoordinatorOperationSpec
    );
  }

  /**
   * Updates configuration of coordinator in a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param parameters The required parameters for updating a cluster configuration.
   * @param options The options parameters.
   */
  async beginUpdateOnCoordinator(
    resourceGroupName: string,
    clusterName: string,
    configurationName: string,
    parameters: ServerConfiguration,
    options?: ConfigurationsUpdateOnCoordinatorOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationsUpdateOnCoordinatorResponse>,
      ConfigurationsUpdateOnCoordinatorResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ConfigurationsUpdateOnCoordinatorResponse> => {
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
      args: {
        resourceGroupName,
        clusterName,
        configurationName,
        parameters,
        options
      },
      spec: updateOnCoordinatorOperationSpec
    });
    const poller = await createHttpPoller<
      ConfigurationsUpdateOnCoordinatorResponse,
      OperationState<ConfigurationsUpdateOnCoordinatorResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates configuration of coordinator in a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param parameters The required parameters for updating a cluster configuration.
   * @param options The options parameters.
   */
  async beginUpdateOnCoordinatorAndWait(
    resourceGroupName: string,
    clusterName: string,
    configurationName: string,
    parameters: ServerConfiguration,
    options?: ConfigurationsUpdateOnCoordinatorOptionalParams
  ): Promise<ConfigurationsUpdateOnCoordinatorResponse> {
    const poller = await this.beginUpdateOnCoordinator(
      resourceGroupName,
      clusterName,
      configurationName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information of a configuration for worker nodes.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param options The options parameters.
   */
  getNode(
    resourceGroupName: string,
    clusterName: string,
    configurationName: string,
    options?: ConfigurationsGetNodeOptionalParams
  ): Promise<ConfigurationsGetNodeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, configurationName, options },
      getNodeOperationSpec
    );
  }

  /**
   * Updates configuration of worker nodes in a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param parameters The required parameters for updating a cluster configuration.
   * @param options The options parameters.
   */
  async beginUpdateOnNode(
    resourceGroupName: string,
    clusterName: string,
    configurationName: string,
    parameters: ServerConfiguration,
    options?: ConfigurationsUpdateOnNodeOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationsUpdateOnNodeResponse>,
      ConfigurationsUpdateOnNodeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ConfigurationsUpdateOnNodeResponse> => {
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
      args: {
        resourceGroupName,
        clusterName,
        configurationName,
        parameters,
        options
      },
      spec: updateOnNodeOperationSpec
    });
    const poller = await createHttpPoller<
      ConfigurationsUpdateOnNodeResponse,
      OperationState<ConfigurationsUpdateOnNodeResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates configuration of worker nodes in a cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param configurationName The name of the cluster configuration.
   * @param parameters The required parameters for updating a cluster configuration.
   * @param options The options parameters.
   */
  async beginUpdateOnNodeAndWait(
    resourceGroupName: string,
    clusterName: string,
    configurationName: string,
    parameters: ServerConfiguration,
    options?: ConfigurationsUpdateOnNodeOptionalParams
  ): Promise<ConfigurationsUpdateOnNodeResponse> {
    const poller = await this.beginUpdateOnNode(
      resourceGroupName,
      clusterName,
      configurationName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    clusterName: string,
    serverName: string,
    nextLink: string,
    options?: ConfigurationsListByServerNextOptionalParams
  ): Promise<ConfigurationsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, serverName, nextLink, options },
      listByServerNextOperationSpec
    );
  }

  /**
   * ListByClusterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param nextLink The nextLink from the previous successful call to the ListByCluster method.
   * @param options The options parameters.
   */
  private _listByClusterNext(
    resourceGroupName: string,
    clusterName: string,
    nextLink: string,
    options?: ConfigurationsListByClusterNextOptionalParams
  ): Promise<ConfigurationsListByClusterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, nextLink, options },
      listByClusterNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/servers/{serverName}/configurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConfigurationListResult
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
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByClusterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/configurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterConfigurationListResult
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
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/configurations/{configurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Configuration
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
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getCoordinatorOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/coordinatorConfigurations/{configurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConfiguration
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
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOnCoordinatorOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/coordinatorConfigurations/{configurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConfiguration
    },
    201: {
      bodyMapper: Mappers.ServerConfiguration
    },
    202: {
      bodyMapper: Mappers.ServerConfiguration
    },
    204: {
      bodyMapper: Mappers.ServerConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getNodeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/nodeConfigurations/{configurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConfiguration
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
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOnNodeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/nodeConfigurations/{configurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConfiguration
    },
    201: {
      bodyMapper: Mappers.ServerConfiguration
    },
    202: {
      bodyMapper: Mappers.ServerConfiguration
    },
    204: {
      bodyMapper: Mappers.ServerConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.nextLink,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByClusterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};