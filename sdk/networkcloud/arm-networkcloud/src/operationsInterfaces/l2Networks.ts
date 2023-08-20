/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  L2Network,
  L2NetworksListBySubscriptionOptionalParams,
  L2NetworksListByResourceGroupOptionalParams,
  L2NetworksGetOptionalParams,
  L2NetworksGetResponse,
  L2NetworksCreateOrUpdateOptionalParams,
  L2NetworksCreateOrUpdateResponse,
  L2NetworksDeleteOptionalParams,
  L2NetworksUpdateOptionalParams,
  L2NetworksUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a L2Networks. */
export interface L2Networks {
  /**
   * Get a list of layer 2 (L2) networks in the provided subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: L2NetworksListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<L2Network>;
  /**
   * Get a list of layer 2 (L2) networks in the provided resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: L2NetworksListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<L2Network>;
  /**
   * Get properties of the provided layer 2 (L2) network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l2NetworkName The name of the L2 network.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    l2NetworkName: string,
    options?: L2NetworksGetOptionalParams
  ): Promise<L2NetworksGetResponse>;
  /**
   * Create a new layer 2 (L2) network or update the properties of the existing network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l2NetworkName The name of the L2 network.
   * @param l2NetworkParameters The request body.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    l2NetworkName: string,
    l2NetworkParameters: L2Network,
    options?: L2NetworksCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L2NetworksCreateOrUpdateResponse>,
      L2NetworksCreateOrUpdateResponse
    >
  >;
  /**
   * Create a new layer 2 (L2) network or update the properties of the existing network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l2NetworkName The name of the L2 network.
   * @param l2NetworkParameters The request body.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    l2NetworkName: string,
    l2NetworkParameters: L2Network,
    options?: L2NetworksCreateOrUpdateOptionalParams
  ): Promise<L2NetworksCreateOrUpdateResponse>;
  /**
   * Delete the provided layer 2 (L2) network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l2NetworkName The name of the L2 network.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    l2NetworkName: string,
    options?: L2NetworksDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the provided layer 2 (L2) network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l2NetworkName The name of the L2 network.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    l2NetworkName: string,
    options?: L2NetworksDeleteOptionalParams
  ): Promise<void>;
  /**
   * Update tags associated with the provided layer 2 (L2) network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l2NetworkName The name of the L2 network.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    l2NetworkName: string,
    options?: L2NetworksUpdateOptionalParams
  ): Promise<L2NetworksUpdateResponse>;
}