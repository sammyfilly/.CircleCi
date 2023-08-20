/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { Percentile } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import {
  PercentileMetric,
  PercentileListMetricsOptionalParams,
  PercentileListMetricsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Percentile operations. */
export class PercentileImpl implements Percentile {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class Percentile class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account. This url is
   * only for PBS and Replication Latency data
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  public listMetrics(
    resourceGroupName: string,
    accountName: string,
    filter: string,
    options?: PercentileListMetricsOptionalParams
  ): PagedAsyncIterableIterator<PercentileMetric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      accountName,
      filter,
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
        return this.listMetricsPagingPage(
          resourceGroupName,
          accountName,
          filter,
          options,
          settings
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    resourceGroupName: string,
    accountName: string,
    filter: string,
    options?: PercentileListMetricsOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<PercentileMetric[]> {
    let result: PercentileListMetricsResponse;
    result = await this._listMetrics(
      resourceGroupName,
      accountName,
      filter,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    resourceGroupName: string,
    accountName: string,
    filter: string,
    options?: PercentileListMetricsOptionalParams
  ): AsyncIterableIterator<PercentileMetric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      accountName,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account. This url is
   * only for PBS and Replication Latency data
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  private _listMetrics(
    resourceGroupName: string,
    accountName: string,
    filter: string,
    options?: PercentileListMetricsOptionalParams
  ): Promise<PercentileListMetricsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, filter, options },
      listMetricsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/percentile/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PercentileMetricListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};