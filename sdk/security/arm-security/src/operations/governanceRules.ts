/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { GovernanceRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  GovernanceRule,
  GovernanceRulesListNextOptionalParams,
  GovernanceRulesListOptionalParams,
  GovernanceRulesListResponse,
  GovernanceRulesGetOptionalParams,
  GovernanceRulesGetResponse,
  GovernanceRulesCreateOrUpdateOptionalParams,
  GovernanceRulesCreateOrUpdateResponse,
  GovernanceRulesDeleteOptionalParams,
  GovernanceRulesExecuteOptionalParams,
  GovernanceRulesExecuteResponse,
  GovernanceRulesOperationResultsOptionalParams,
  GovernanceRulesOperationResultsResponse,
  GovernanceRulesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GovernanceRules operations. */
export class GovernanceRulesImpl implements GovernanceRules {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class GovernanceRules class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Get a list of all relevant governance rules over a scope
   * @param scope The scope of the Governance rules. Valid scopes are: management group (format:
   *              'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param options The options parameters.
   */
  public list(
    scope: string,
    options?: GovernanceRulesListOptionalParams
  ): PagedAsyncIterableIterator<GovernanceRule> {
    const iter = this.listPagingAll(scope, options);
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
        return this.listPagingPage(scope, options, settings);
      }
    };
  }

  private async *listPagingPage(
    scope: string,
    options?: GovernanceRulesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<GovernanceRule[]> {
    let result: GovernanceRulesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(scope, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    scope: string,
    options?: GovernanceRulesListOptionalParams
  ): AsyncIterableIterator<GovernanceRule> {
    for await (const page of this.listPagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all relevant governance rules over a scope
   * @param scope The scope of the Governance rules. Valid scopes are: management group (format:
   *              'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param options The options parameters.
   */
  private _list(
    scope: string,
    options?: GovernanceRulesListOptionalParams
  ): Promise<GovernanceRulesListResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listOperationSpec
    );
  }

  /**
   * Get a specific governance rule for the requested scope by ruleId
   * @param scope The scope of the Governance rules. Valid scopes are: management group (format:
   *              'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param options The options parameters.
   */
  get(
    scope: string,
    ruleId: string,
    options?: GovernanceRulesGetOptionalParams
  ): Promise<GovernanceRulesGetResponse> {
    return this.client.sendOperationRequest(
      { scope, ruleId, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a governance rule over a given scope
   * @param scope The scope of the Governance rules. Valid scopes are: management group (format:
   *              'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param governanceRule Governance rule over a given scope
   * @param options The options parameters.
   */
  createOrUpdate(
    scope: string,
    ruleId: string,
    governanceRule: GovernanceRule,
    options?: GovernanceRulesCreateOrUpdateOptionalParams
  ): Promise<GovernanceRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { scope, ruleId, governanceRule, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete a Governance rule over a given scope
   * @param scope The scope of the Governance rules. Valid scopes are: management group (format:
   *              'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param options The options parameters.
   */
  async beginDelete(
    scope: string,
    ruleId: string,
    options?: GovernanceRulesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { scope, ruleId, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Governance rule over a given scope
   * @param scope The scope of the Governance rules. Valid scopes are: management group (format:
   *              'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    scope: string,
    ruleId: string,
    options?: GovernanceRulesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(scope, ruleId, options);
    return poller.pollUntilDone();
  }

  /**
   * Execute a governance rule
   * @param scope The scope of the Governance rules. Valid scopes are: management group (format:
   *              'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param options The options parameters.
   */
  async beginExecute(
    scope: string,
    ruleId: string,
    options?: GovernanceRulesExecuteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<GovernanceRulesExecuteResponse>,
      GovernanceRulesExecuteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GovernanceRulesExecuteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { scope, ruleId, options },
      spec: executeOperationSpec
    });
    const poller = await createHttpPoller<
      GovernanceRulesExecuteResponse,
      OperationState<GovernanceRulesExecuteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Execute a governance rule
   * @param scope The scope of the Governance rules. Valid scopes are: management group (format:
   *              'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param options The options parameters.
   */
  async beginExecuteAndWait(
    scope: string,
    ruleId: string,
    options?: GovernanceRulesExecuteOptionalParams
  ): Promise<GovernanceRulesExecuteResponse> {
    const poller = await this.beginExecute(scope, ruleId, options);
    return poller.pollUntilDone();
  }

  /**
   * Get governance rules long run operation result for the requested scope by ruleId and operationId
   * @param scope The scope of the Governance rules. Valid scopes are: management group (format:
   *              'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param ruleId The governance rule key - unique key for the standard governance rule (GUID)
   * @param operationId The governance rule long running operation unique key
   * @param options The options parameters.
   */
  operationResults(
    scope: string,
    ruleId: string,
    operationId: string,
    options?: GovernanceRulesOperationResultsOptionalParams
  ): Promise<GovernanceRulesOperationResultsResponse> {
    return this.client.sendOperationRequest(
      { scope, ruleId, operationId, options },
      operationResultsOperationSpec
    );
  }

  /**
   * ListNext
   * @param scope The scope of the Governance rules. Valid scopes are: management group (format:
   *              'providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format:
   *              'subscriptions/{subscriptionId}'), or security connector (format:
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scope: string,
    nextLink: string,
    options?: GovernanceRulesListNextOptionalParams
  ): Promise<GovernanceRulesListNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Security/governanceRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GovernanceRuleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [Parameters.$host, Parameters.scope1],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Security/governanceRules/{ruleId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GovernanceRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [Parameters.$host, Parameters.scope1, Parameters.ruleId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Security/governanceRules/{ruleId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GovernanceRule
    },
    201: {
      bodyMapper: Mappers.GovernanceRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.governanceRule,
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [Parameters.$host, Parameters.scope1, Parameters.ruleId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Security/governanceRules/{ruleId}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [Parameters.$host, Parameters.scope1, Parameters.ruleId],
  serializer
};
const executeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Security/governanceRules/{ruleId}/execute",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.GovernanceRulesExecuteHeaders
    },
    201: {
      headersMapper: Mappers.GovernanceRulesExecuteHeaders
    },
    202: {
      headersMapper: Mappers.GovernanceRulesExecuteHeaders
    },
    204: {
      headersMapper: Mappers.GovernanceRulesExecuteHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.executeGovernanceRuleParams,
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [Parameters.$host, Parameters.scope1, Parameters.ruleId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const operationResultsOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Security/governanceRules/{ruleId}/operationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationResultAutoGenerated
    },
    202: {
      headersMapper: Mappers.GovernanceRulesOperationResultsHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion16],
  urlParameters: [
    Parameters.$host,
    Parameters.scope1,
    Parameters.ruleId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GovernanceRuleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope1],
  headerParameters: [Parameters.accept],
  serializer
};