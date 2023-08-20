/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  BatchDeployment,
  BatchDeploymentsListOptionalParams,
  BatchDeploymentsDeleteOptionalParams,
  BatchDeploymentsGetOptionalParams,
  BatchDeploymentsGetResponse,
  PartialBatchDeploymentPartialMinimalTrackedResourceWithProperties,
  BatchDeploymentsUpdateOptionalParams,
  BatchDeploymentsUpdateResponse,
  BatchDeploymentsCreateOrUpdateOptionalParams,
  BatchDeploymentsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BatchDeployments. */
export interface BatchDeployments {
  /**
   * Lists Batch inference deployments in the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Endpoint name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: BatchDeploymentsListOptionalParams
  ): PagedAsyncIterableIterator<BatchDeployment>;
  /**
   * Delete Batch Inference deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Endpoint name
   * @param deploymentName Inference deployment identifier.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    options?: BatchDeploymentsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete Batch Inference deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Endpoint name
   * @param deploymentName Inference deployment identifier.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    options?: BatchDeploymentsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets a batch inference deployment by id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Endpoint name
   * @param deploymentName The identifier for the Batch deployments.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    options?: BatchDeploymentsGetOptionalParams
  ): Promise<BatchDeploymentsGetResponse>;
  /**
   * Update a batch inference deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name
   * @param deploymentName The identifier for the Batch inference deployment.
   * @param body Batch inference deployment definition object.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    body: PartialBatchDeploymentPartialMinimalTrackedResourceWithProperties,
    options?: BatchDeploymentsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BatchDeploymentsUpdateResponse>,
      BatchDeploymentsUpdateResponse
    >
  >;
  /**
   * Update a batch inference deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name
   * @param deploymentName The identifier for the Batch inference deployment.
   * @param body Batch inference deployment definition object.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    body: PartialBatchDeploymentPartialMinimalTrackedResourceWithProperties,
    options?: BatchDeploymentsUpdateOptionalParams
  ): Promise<BatchDeploymentsUpdateResponse>;
  /**
   * Creates/updates a batch inference deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name
   * @param deploymentName The identifier for the Batch inference deployment.
   * @param body Batch inference deployment definition object.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    body: BatchDeployment,
    options?: BatchDeploymentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BatchDeploymentsCreateOrUpdateResponse>,
      BatchDeploymentsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates/updates a batch inference deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name
   * @param deploymentName The identifier for the Batch inference deployment.
   * @param body Batch inference deployment definition object.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    body: BatchDeployment,
    options?: BatchDeploymentsCreateOrUpdateOptionalParams
  ): Promise<BatchDeploymentsCreateOrUpdateResponse>;
}