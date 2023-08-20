/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { MsixImages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DesktopVirtualizationAPIClient } from "../desktopVirtualizationAPIClient";
import {
  ExpandMsixImage,
  MsixImageURI,
  MsixImagesExpandNextOptionalParams,
  MsixImagesExpandOptionalParams,
  MsixImagesExpandResponse,
  MsixImagesExpandNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing MsixImages operations. */
export class MsixImagesImpl implements MsixImages {
  private readonly client: DesktopVirtualizationAPIClient;

  /**
   * Initialize a new instance of the class MsixImages class.
   * @param client Reference to the service client
   */
  constructor(client: DesktopVirtualizationAPIClient) {
    this.client = client;
  }

  /**
   * Expands and Lists MSIX packages in an Image, given the Image Path.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param msixImageURI Object containing URI to MSIX Image
   * @param options The options parameters.
   */
  public listExpand(
    resourceGroupName: string,
    hostPoolName: string,
    msixImageURI: MsixImageURI,
    options?: MsixImagesExpandOptionalParams
  ): PagedAsyncIterableIterator<ExpandMsixImage> {
    const iter = this.expandPagingAll(
      resourceGroupName,
      hostPoolName,
      msixImageURI,
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
        return this.expandPagingPage(
          resourceGroupName,
          hostPoolName,
          msixImageURI,
          options,
          settings
        );
      }
    };
  }

  private async *expandPagingPage(
    resourceGroupName: string,
    hostPoolName: string,
    msixImageURI: MsixImageURI,
    options?: MsixImagesExpandOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ExpandMsixImage[]> {
    let result: MsixImagesExpandResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._expand(
        resourceGroupName,
        hostPoolName,
        msixImageURI,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._expandNext(
        resourceGroupName,
        hostPoolName,
        msixImageURI,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *expandPagingAll(
    resourceGroupName: string,
    hostPoolName: string,
    msixImageURI: MsixImageURI,
    options?: MsixImagesExpandOptionalParams
  ): AsyncIterableIterator<ExpandMsixImage> {
    for await (const page of this.expandPagingPage(
      resourceGroupName,
      hostPoolName,
      msixImageURI,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Expands and Lists MSIX packages in an Image, given the Image Path.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param msixImageURI Object containing URI to MSIX Image
   * @param options The options parameters.
   */
  private _expand(
    resourceGroupName: string,
    hostPoolName: string,
    msixImageURI: MsixImageURI,
    options?: MsixImagesExpandOptionalParams
  ): Promise<MsixImagesExpandResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, msixImageURI, options },
      expandOperationSpec
    );
  }

  /**
   * ExpandNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param msixImageURI Object containing URI to MSIX Image
   * @param nextLink The nextLink from the previous successful call to the Expand method.
   * @param options The options parameters.
   */
  private _expandNext(
    resourceGroupName: string,
    hostPoolName: string,
    msixImageURI: MsixImageURI,
    nextLink: string,
    options?: MsixImagesExpandNextOptionalParams
  ): Promise<MsixImagesExpandNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, msixImageURI, nextLink, options },
      expandNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const expandOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/expandMsixImage",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExpandMsixImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.msixImageURI,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const expandNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpandMsixImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};