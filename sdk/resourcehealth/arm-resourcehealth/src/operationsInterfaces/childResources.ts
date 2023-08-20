/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AvailabilityStatus,
  ChildResourcesListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ChildResources. */
export interface ChildResources {
  /**
   * Lists the all the children and its current health status for a parent resource. Use the nextLink
   * property in the response to get the next page of children current health
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API only support not nested parent resource type:
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: ChildResourcesListOptionalParams
  ): PagedAsyncIterableIterator<AvailabilityStatus>;
}