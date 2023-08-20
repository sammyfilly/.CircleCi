/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PriceSheet } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClient } from "../consumptionManagementClient";
import {
  PriceSheetGetOptionalParams,
  PriceSheetGetResponse,
  PriceSheetGetByBillingPeriodOptionalParams,
  PriceSheetGetByBillingPeriodResponse
} from "../models";

/** Class containing PriceSheet operations. */
export class PriceSheetImpl implements PriceSheet {
  private readonly client: ConsumptionManagementClient;

  /**
   * Initialize a new instance of the class PriceSheet class.
   * @param client Reference to the service client
   */
  constructor(client: ConsumptionManagementClient) {
    this.client = client;
  }

  /**
   * Gets the price sheet for a subscription. Price sheet is available via this API only for May 1, 2014
   * or later.
   * @param options The options parameters.
   */
  get(options?: PriceSheetGetOptionalParams): Promise<PriceSheetGetResponse> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }

  /**
   * Get the price sheet for a scope by subscriptionId and billing period. Price sheet is available via
   * this API only for May 1, 2014 or later.
   * @param billingPeriodName Billing Period Name.
   * @param options The options parameters.
   */
  getByBillingPeriod(
    billingPeriodName: string,
    options?: PriceSheetGetByBillingPeriodOptionalParams
  ): Promise<PriceSheetGetByBillingPeriodResponse> {
    return this.client.sendOperationRequest(
      { billingPeriodName, options },
      getByBillingPeriodOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Consumption/pricesheets/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PriceSheetResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.expand,
    Parameters.skiptoken,
    Parameters.top,
    Parameters.apiVersion
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getByBillingPeriodOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}/providers/Microsoft.Consumption/pricesheets/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PriceSheetResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.expand,
    Parameters.skiptoken,
    Parameters.top,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingPeriodName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};