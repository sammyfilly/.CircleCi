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
  Application,
  ApplicationsListByClusterOptionalParams,
  ApplicationsGetOptionalParams,
  ApplicationsGetResponse,
  ApplicationsCreateOptionalParams,
  ApplicationsCreateResponse,
  ApplicationsDeleteOptionalParams,
  ApplicationsGetAzureAsyncOperationStatusOptionalParams,
  ApplicationsGetAzureAsyncOperationStatusResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Applications. */
export interface Applications {
  /**
   * Lists all of the applications for the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: ApplicationsListByClusterOptionalParams
  ): PagedAsyncIterableIterator<Application>;
  /**
   * Gets properties of the specified application.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    options?: ApplicationsGetOptionalParams
  ): Promise<ApplicationsGetResponse>;
  /**
   * Creates applications for the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param parameters The application create request.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    parameters: Application,
    options?: ApplicationsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ApplicationsCreateResponse>,
      ApplicationsCreateResponse
    >
  >;
  /**
   * Creates applications for the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param parameters The application create request.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    parameters: Application,
    options?: ApplicationsCreateOptionalParams
  ): Promise<ApplicationsCreateResponse>;
  /**
   * Deletes the specified application on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    options?: ApplicationsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified application on the HDInsight cluster.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    options?: ApplicationsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the async operation status.
   * @param resourceGroupName The name of the resource group.
   * @param clusterName The name of the cluster.
   * @param applicationName The constant value for the application name.
   * @param operationId The long running operation id.
   * @param options The options parameters.
   */
  getAzureAsyncOperationStatus(
    resourceGroupName: string,
    clusterName: string,
    applicationName: string,
    operationId: string,
    options?: ApplicationsGetAzureAsyncOperationStatusOptionalParams
  ): Promise<ApplicationsGetAzureAsyncOperationStatusResponse>;
}