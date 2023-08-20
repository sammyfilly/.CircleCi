/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  EmergingIssuesGetResult,
  EmergingIssuesListOptionalParams,
  IssueNameParameter,
  EmergingIssuesGetOptionalParams,
  EmergingIssuesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EmergingIssues. */
export interface EmergingIssues {
  /**
   * Lists Azure services' emerging issues.
   * @param options The options parameters.
   */
  list(
    options?: EmergingIssuesListOptionalParams
  ): PagedAsyncIterableIterator<EmergingIssuesGetResult>;
  /**
   * Gets Azure services' emerging issues.
   * @param issueName The name of the emerging issue.
   * @param options The options parameters.
   */
  get(
    issueName: IssueNameParameter,
    options?: EmergingIssuesGetOptionalParams
  ): Promise<EmergingIssuesGetResponse>;
}