/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ServiceRegistries } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ServiceRegistryResource,
  ServiceRegistriesListNextOptionalParams,
  ServiceRegistriesListOptionalParams,
  ServiceRegistriesListResponse,
  ServiceRegistriesGetOptionalParams,
  ServiceRegistriesGetResponse,
  ServiceRegistriesCreateOrUpdateOptionalParams,
  ServiceRegistriesCreateOrUpdateResponse,
  ServiceRegistriesDeleteOptionalParams,
  ServiceRegistriesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServiceRegistries operations. */
export class ServiceRegistriesImpl implements ServiceRegistries {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class ServiceRegistries class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Handles requests to list all resources in a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    options?: ServiceRegistriesListOptionalParams
  ): PagedAsyncIterableIterator<ServiceRegistryResource> {
    const iter = this.listPagingAll(resourceGroupName, serviceName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          serviceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: ServiceRegistriesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ServiceRegistryResource[]> {
    let result: ServiceRegistriesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, serviceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: ServiceRegistriesListOptionalParams
  ): AsyncIterableIterator<ServiceRegistryResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the Service Registry and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param serviceRegistryName The name of Service Registry.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    serviceRegistryName: string,
    options?: ServiceRegistriesGetOptionalParams
  ): Promise<ServiceRegistriesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, serviceRegistryName, options },
      getOperationSpec
    );
  }

  /**
   * Create the default Service Registry or update the existing Service Registry.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param serviceRegistryName The name of Service Registry.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    serviceRegistryName: string,
    options?: ServiceRegistriesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ServiceRegistriesCreateOrUpdateResponse>,
      ServiceRegistriesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServiceRegistriesCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, serviceName, serviceRegistryName, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ServiceRegistriesCreateOrUpdateResponse,
      OperationState<ServiceRegistriesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create the default Service Registry or update the existing Service Registry.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param serviceRegistryName The name of Service Registry.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    serviceRegistryName: string,
    options?: ServiceRegistriesCreateOrUpdateOptionalParams
  ): Promise<ServiceRegistriesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      serviceRegistryName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Disable the default Service Registry.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param serviceRegistryName The name of Service Registry.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serviceName: string,
    serviceRegistryName: string,
    options?: ServiceRegistriesDeleteOptionalParams
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
      args: { resourceGroupName, serviceName, serviceRegistryName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Disable the default Service Registry.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param serviceRegistryName The name of Service Registry.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    serviceRegistryName: string,
    options?: ServiceRegistriesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serviceName,
      serviceRegistryName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Handles requests to list all resources in a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    options?: ServiceRegistriesListOptionalParams
  ): Promise<ServiceRegistriesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: ServiceRegistriesListNextOptionalParams
  ): Promise<ServiceRegistriesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries/{serviceRegistryName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceRegistryResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.serviceRegistryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries/{serviceRegistryName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceRegistryResource
    },
    201: {
      bodyMapper: Mappers.ServiceRegistryResource
    },
    202: {
      bodyMapper: Mappers.ServiceRegistryResource
    },
    204: {
      bodyMapper: Mappers.ServiceRegistryResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.serviceRegistryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries/{serviceRegistryName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.serviceRegistryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/serviceRegistries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceRegistryResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceRegistryResourceCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};