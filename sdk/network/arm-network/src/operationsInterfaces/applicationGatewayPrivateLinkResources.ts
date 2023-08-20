/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApplicationGatewayPrivateLinkResource,
  ApplicationGatewayPrivateLinkResourcesListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApplicationGatewayPrivateLinkResources. */
export interface ApplicationGatewayPrivateLinkResources {
  /**
   * Lists all private link resources on an application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: ApplicationGatewayPrivateLinkResourcesListOptionalParams
  ): PagedAsyncIterableIterator<ApplicationGatewayPrivateLinkResource>;
}