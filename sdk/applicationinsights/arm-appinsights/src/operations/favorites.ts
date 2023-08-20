/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Favorites } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClient } from "../applicationInsightsManagementClient";
import {
  FavoritesListOptionalParams,
  FavoritesListResponse,
  FavoritesGetOptionalParams,
  FavoritesGetResponse,
  ApplicationInsightsComponentFavorite,
  FavoritesAddOptionalParams,
  FavoritesAddResponse,
  FavoritesUpdateOptionalParams,
  FavoritesUpdateResponse,
  FavoritesDeleteOptionalParams
} from "../models";

/** Class containing Favorites operations. */
export class FavoritesImpl implements Favorites {
  private readonly client: ApplicationInsightsManagementClient;

  /**
   * Initialize a new instance of the class Favorites class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of favorites defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: FavoritesListOptionalParams
  ): Promise<FavoritesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }

  /**
   * Get a single favorite by its FavoriteId, defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    favoriteId: string,
    options?: FavoritesGetOptionalParams
  ): Promise<FavoritesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, favoriteId, options },
      getOperationSpec
    );
  }

  /**
   * Adds a new favorites to an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param favoriteProperties Properties that need to be specified to create a new favorite and add it
   *                           to an Application Insights component.
   * @param options The options parameters.
   */
  add(
    resourceGroupName: string,
    resourceName: string,
    favoriteId: string,
    favoriteProperties: ApplicationInsightsComponentFavorite,
    options?: FavoritesAddOptionalParams
  ): Promise<FavoritesAddResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        favoriteId,
        favoriteProperties,
        options
      },
      addOperationSpec
    );
  }

  /**
   * Updates a favorite that has already been added to an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param favoriteProperties Properties that need to be specified to update the existing favorite.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    favoriteId: string,
    favoriteProperties: ApplicationInsightsComponentFavorite,
    options?: FavoritesUpdateOptionalParams
  ): Promise<FavoritesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        favoriteId,
        favoriteProperties,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Remove a favorite that is associated to an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    favoriteId: string,
    options?: FavoritesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, favoriteId, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationInsightsComponentFavorite"
            }
          }
        }
      }
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.favoriteType,
    Parameters.sourceType,
    Parameters.canFetchContent,
    Parameters.tags
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentFavorite
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.favoriteId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const addOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentFavorite
    }
  },
  requestBody: Parameters.favoriteProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.favoriteId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentFavorite
    }
  },
  requestBody: Parameters.favoriteProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.favoriteId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.favoriteId
  ],
  serializer
};