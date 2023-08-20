/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Linker } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ServiceLinkerManagementClient } from "../serviceLinkerManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  LinkerResource,
  LinkerListNextOptionalParams,
  LinkerListOptionalParams,
  LinkerListResponse,
  LinkerGetOptionalParams,
  LinkerGetResponse,
  LinkerCreateOrUpdateOptionalParams,
  LinkerCreateOrUpdateResponse,
  LinkerDeleteOptionalParams,
  LinkerPatch,
  LinkerUpdateOptionalParams,
  LinkerUpdateResponse,
  LinkerValidateOptionalParams,
  LinkerValidateResponse,
  LinkerListConfigurationsOptionalParams,
  LinkerListConfigurationsResponse,
  LinkerListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Linker operations. */
export class LinkerImpl implements Linker {
  private readonly client: ServiceLinkerManagementClient;

  /**
   * Initialize a new instance of the class Linker class.
   * @param client Reference to the service client
   */
  constructor(client: ServiceLinkerManagementClient) {
    this.client = client;
  }

  /**
   * Returns list of Linkers which connects to the resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param options The options parameters.
   */
  public list(
    resourceUri: string,
    options?: LinkerListOptionalParams
  ): PagedAsyncIterableIterator<LinkerResource> {
    const iter = this.listPagingAll(resourceUri, options);
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
        return this.listPagingPage(resourceUri, options, settings);
      }
    };
  }

  private async *listPagingPage(
    resourceUri: string,
    options?: LinkerListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<LinkerResource[]> {
    let result: LinkerListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceUri, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(resourceUri, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceUri: string,
    options?: LinkerListOptionalParams
  ): AsyncIterableIterator<LinkerResource> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * Returns list of Linkers which connects to the resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: LinkerListOptionalParams
  ): Promise<LinkerListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }

  /**
   * Returns Linker resource for a given name.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    linkerName: string,
    options?: LinkerGetOptionalParams
  ): Promise<LinkerGetResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, linkerName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update linker resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param parameters Linker details.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceUri: string,
    linkerName: string,
    parameters: LinkerResource,
    options?: LinkerCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LinkerCreateOrUpdateResponse>,
      LinkerCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LinkerCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceUri, linkerName, parameters, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update linker resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param parameters Linker details.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceUri: string,
    linkerName: string,
    parameters: LinkerResource,
    options?: LinkerCreateOrUpdateOptionalParams
  ): Promise<LinkerCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceUri,
      linkerName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a link.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceUri: string,
    linkerName: string,
    options?: LinkerDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceUri, linkerName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a link.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceUri: string,
    linkerName: string,
    options?: LinkerDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceUri, linkerName, options);
    return poller.pollUntilDone();
  }

  /**
   * Operation to update an existing link.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param parameters Linker details.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceUri: string,
    linkerName: string,
    parameters: LinkerPatch,
    options?: LinkerUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<LinkerUpdateResponse>, LinkerUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LinkerUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceUri, linkerName, parameters, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Operation to update an existing link.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param parameters Linker details.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceUri: string,
    linkerName: string,
    parameters: LinkerPatch,
    options?: LinkerUpdateOptionalParams
  ): Promise<LinkerUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceUri,
      linkerName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Validate a link.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param options The options parameters.
   */
  async beginValidate(
    resourceUri: string,
    linkerName: string,
    options?: LinkerValidateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LinkerValidateResponse>,
      LinkerValidateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LinkerValidateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceUri, linkerName, options },
      validateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Validate a link.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param options The options parameters.
   */
  async beginValidateAndWait(
    resourceUri: string,
    linkerName: string,
    options?: LinkerValidateOptionalParams
  ): Promise<LinkerValidateResponse> {
    const poller = await this.beginValidate(resourceUri, linkerName, options);
    return poller.pollUntilDone();
  }

  /**
   * list source configurations for a linker.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param options The options parameters.
   */
  listConfigurations(
    resourceUri: string,
    linkerName: string,
    options?: LinkerListConfigurationsOptionalParams
  ): Promise<LinkerListConfigurationsResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, linkerName, options },
      listConfigurationsOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceUri: string,
    nextLink: string,
    options?: LinkerListNextOptionalParams
  ): Promise<LinkerListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkerList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkerResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.linkerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LinkerResource
    },
    201: {
      bodyMapper: Mappers.LinkerResource
    },
    202: {
      bodyMapper: Mappers.LinkerResource
    },
    204: {
      bodyMapper: Mappers.LinkerResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.linkerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.linkerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LinkerResource
    },
    201: {
      bodyMapper: Mappers.LinkerResource
    },
    202: {
      bodyMapper: Mappers.LinkerResource
    },
    204: {
      bodyMapper: Mappers.LinkerResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.linkerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const validateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}/validateLinker",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ValidateOperationResult
    },
    201: {
      bodyMapper: Mappers.ValidateOperationResult
    },
    202: {
      bodyMapper: Mappers.ValidateOperationResult
    },
    204: {
      bodyMapper: Mappers.ValidateOperationResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.linkerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listConfigurationsOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceUri}/providers/Microsoft.ServiceLinker/linkers/{linkerName}/listConfigurations",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SourceConfigurationResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.linkerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkerList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};