/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { FarmBeatsExtensions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AgriFoodMgmtClient } from "../agriFoodMgmtClient";
import {
  FarmBeatsExtension,
  FarmBeatsExtensionsListNextOptionalParams,
  FarmBeatsExtensionsListOptionalParams,
  FarmBeatsExtensionsListResponse,
  FarmBeatsExtensionsGetOptionalParams,
  FarmBeatsExtensionsGetResponse,
  FarmBeatsExtensionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FarmBeatsExtensions operations. */
export class FarmBeatsExtensionsImpl implements FarmBeatsExtensions {
  private readonly client: AgriFoodMgmtClient;

  /**
   * Initialize a new instance of the class FarmBeatsExtensions class.
   * @param client Reference to the service client
   */
  constructor(client: AgriFoodMgmtClient) {
    this.client = client;
  }

  /**
   * Get list of farmBeats extension.
   * @param options The options parameters.
   */
  public list(
    options?: FarmBeatsExtensionsListOptionalParams
  ): PagedAsyncIterableIterator<FarmBeatsExtension> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: FarmBeatsExtensionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<FarmBeatsExtension[]> {
    let result: FarmBeatsExtensionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: FarmBeatsExtensionsListOptionalParams
  ): AsyncIterableIterator<FarmBeatsExtension> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get list of farmBeats extension.
   * @param options The options parameters.
   */
  private _list(
    options?: FarmBeatsExtensionsListOptionalParams
  ): Promise<FarmBeatsExtensionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get farmBeats extension.
   * @param farmBeatsExtensionId farmBeatsExtensionId to be queried.
   * @param options The options parameters.
   */
  get(
    farmBeatsExtensionId: string,
    options?: FarmBeatsExtensionsGetOptionalParams
  ): Promise<FarmBeatsExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      { farmBeatsExtensionId, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: FarmBeatsExtensionsListNextOptionalParams
  ): Promise<FarmBeatsExtensionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FarmBeatsExtensionListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.extensionCategories,
    Parameters.maxPageSize,
    Parameters.farmBeatsExtensionIds,
    Parameters.farmBeatsExtensionNames,
    Parameters.publisherIds
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions/{farmBeatsExtensionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FarmBeatsExtension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.farmBeatsExtensionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FarmBeatsExtensionListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.extensionCategories,
    Parameters.maxPageSize,
    Parameters.farmBeatsExtensionIds,
    Parameters.farmBeatsExtensionNames,
    Parameters.publisherIds
  ],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};