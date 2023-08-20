/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Status of the long running operation */
export interface EmailSendResult {
  /** The unique id of the operation. Use a UUID. */
  id: string;
  /** Status of operation. */
  status: EmailSendStatus;
  /** Error details when status is a non-success terminal state. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** Message payload for sending an email */
export interface EmailMessage {
  /** Custom email headers to be passed. */
  headers?: { [propertyName: string]: string };
  /** Sender email address from a verified domain. */
  senderAddress: string;
  /** Email content to be sent. */
  content: EmailContent;
  /** Recipients for the email. */
  recipients: EmailRecipients;
  /** List of attachments. Please note that we limit the total size of an email request (which includes attachments) to 10MB. */
  attachments?: EmailAttachment[];
  /** Email addresses where recipients' replies will be sent to. */
  replyTo?: EmailAddress[];
  /** Indicates whether user engagement tracking should be disabled for this request if the resource-level user engagement tracking setting was already enabled in the control plane. */
  disableUserEngagementTracking?: boolean;
}

/** Content of the email. */
export interface EmailContent {
  /** Subject of the email message */
  subject: string;
  /** Plain text version of the email message. */
  plainText?: string;
  /** Html version of the email message. */
  html?: string;
}

/** Recipients of the email */
export interface EmailRecipients {
  /** Email To recipients */
  to?: EmailAddress[];
  /** Email CC recipients */
  cc?: EmailAddress[];
  /** Email BCC recipients */
  bcc?: EmailAddress[];
}

/** An object representing the email address and its display name */
export interface EmailAddress {
  /** Email address. */
  address: string;
  /** Email display name. */
  displayName?: string;
}

/** Attachment to the email. */
export interface EmailAttachment {
  /** Name of the attachment */
  name: string;
  /** MIME type of the content being attached. */
  contentType: string;
  /** Base64 encoded contents of the attachment */
  contentInBase64: string;
}

/** Defines headers for Email_getSendResult operation. */
export interface EmailGetSendResultHeaders {
  /** This header will only be present when the status is a non-terminal status. It indicates the minimum amount of time in seconds to wait before polling for operation status again. */
  retryAfter?: number;
}

/** Defines headers for Email_getSendResult operation. */
export interface EmailGetSendResultExceptionHeaders {
  /** Error code - this will be the same as the code in the error property in the response body. */
  xMsErrorCode?: string;
}

/** Defines headers for Email_send operation. */
export interface EmailSendHeaders {
  /** Location url of where to poll the status of this operation from. */
  operationLocation?: string;
  /** This header will only be present when the operation status is a non-terminal status. It indicates the minimum amount of time in seconds to wait before polling for operation status again. */
  retryAfter?: number;
}

/** Defines headers for Email_send operation. */
export interface EmailSendExceptionHeaders {
  /** Error code - this will be the same as the code in the error property in the response body. */
  xMsErrorCode?: string;
}

/** Known values of {@link EmailSendStatus} that the service accepts. */
export enum KnownEmailSendStatus {
  /** NotStarted */
  NotStarted = "NotStarted",
  /** Running */
  Running = "Running",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled"
}

/**
 * Defines values for EmailSendStatus. \
 * {@link KnownEmailSendStatus} can be used interchangeably with EmailSendStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotStarted** \
 * **Running** \
 * **Succeeded** \
 * **Failed** \
 * **Canceled**
 */
export type EmailSendStatus = string;

/** Optional parameters. */
export interface EmailGetSendResultOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getSendResult operation. */
export type EmailGetSendResultResponse = EmailGetSendResultHeaders &
  EmailSendResult;

/** Optional parameters. */
export interface EmailSendOptionalParams extends coreClient.OperationOptions {
  /** This is the ID provided by the customer to identify the long running operation. If an ID is not provided by the customer, the service will generate one. */
  operationId?: string;
  /** Tracking ID sent with the request to help with debugging. */
  clientRequestId?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the send operation. */
export type EmailSendResponse = EmailSendHeaders & EmailSendResult;

/** Optional parameters. */
export interface EmailRestApiClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}