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
  BuildpackBindingResource,
  BuildpackBindingListForClusterOptionalParams,
  BuildpackBindingListOptionalParams,
  BuildpackBindingGetOptionalParams,
  BuildpackBindingGetResponse,
  BuildpackBindingCreateOrUpdateOptionalParams,
  BuildpackBindingCreateOrUpdateResponse,
  BuildpackBindingDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BuildpackBinding. */
export interface BuildpackBinding {
  /**
   * Get collection of buildpack bindings under all builders.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  listForCluster(
    resourceGroupName: string,
    serviceName: string,
    options?: BuildpackBindingListForClusterOptionalParams
  ): PagedAsyncIterableIterator<BuildpackBindingResource>;
  /**
   * Handles requests to list all buildpack bindings in a builder.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    options?: BuildpackBindingListOptionalParams
  ): PagedAsyncIterableIterator<BuildpackBindingResource>;
  /**
   * Get a buildpack binding by name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param buildpackBindingName The name of the Buildpack Binding Name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    buildpackBindingName: string,
    options?: BuildpackBindingGetOptionalParams
  ): Promise<BuildpackBindingGetResponse>;
  /**
   * Create or update a buildpack binding.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param buildpackBindingName The name of the Buildpack Binding Name
   * @param buildpackBinding The target buildpack binding for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    buildpackBindingName: string,
    buildpackBinding: BuildpackBindingResource,
    options?: BuildpackBindingCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BuildpackBindingCreateOrUpdateResponse>,
      BuildpackBindingCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a buildpack binding.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param buildpackBindingName The name of the Buildpack Binding Name
   * @param buildpackBinding The target buildpack binding for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    buildpackBindingName: string,
    buildpackBinding: BuildpackBindingResource,
    options?: BuildpackBindingCreateOrUpdateOptionalParams
  ): Promise<BuildpackBindingCreateOrUpdateResponse>;
  /**
   * Operation to delete a Buildpack Binding
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param buildpackBindingName The name of the Buildpack Binding Name
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    buildpackBindingName: string,
    options?: BuildpackBindingDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Operation to delete a Buildpack Binding
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param builderName The name of the builder resource.
   * @param buildpackBindingName The name of the Buildpack Binding Name
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    builderName: string,
    buildpackBindingName: string,
    options?: BuildpackBindingDeleteOptionalParams
  ): Promise<void>;
}