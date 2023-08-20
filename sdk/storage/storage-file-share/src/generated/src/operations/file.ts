/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { File } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageClient } from "../storageClient";
import {
  FileCreateOptionalParams,
  FileCreateResponse,
  FileDownloadOptionalParams,
  FileDownloadResponse,
  FileGetPropertiesOptionalParams,
  FileGetPropertiesResponse,
  FileDeleteOptionalParams,
  FileDeleteResponse,
  FileSetHttpHeadersOptionalParams,
  FileSetHttpHeadersResponse,
  FileSetMetadataOptionalParams,
  FileSetMetadataResponse,
  FileAcquireLeaseOptionalParams,
  FileAcquireLeaseResponse,
  FileReleaseLeaseOptionalParams,
  FileReleaseLeaseResponse,
  FileChangeLeaseOptionalParams,
  FileChangeLeaseResponse,
  FileBreakLeaseOptionalParams,
  FileBreakLeaseResponse,
  FileRangeWriteType,
  FileUploadRangeOptionalParams,
  FileUploadRangeResponse,
  FileUploadRangeFromURLOptionalParams,
  FileUploadRangeFromURLResponse,
  FileGetRangeListOptionalParams,
  FileGetRangeListResponse,
  FileStartCopyOptionalParams,
  FileStartCopyResponse,
  FileAbortCopyOptionalParams,
  FileAbortCopyResponse,
  FileListHandlesOptionalParams,
  FileListHandlesResponse,
  FileForceCloseHandlesOptionalParams,
  FileForceCloseHandlesResponse,
  FileRenameOptionalParams,
  FileRenameResponse
} from "../models";

/** Class containing File operations. */
export class FileImpl implements File {
  private readonly client: StorageClient;

  /**
   * Initialize a new instance of the class File class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClient) {
    this.client = client;
  }

  /**
   * Creates a new file or replaces a file. Note it only initializes the file with no content.
   * @param fileContentLength Specifies the maximum size for the file, up to 4 TB.
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   *                       ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param options The options parameters.
   */
  create(
    fileContentLength: number,
    fileAttributes: string,
    options?: FileCreateOptionalParams
  ): Promise<FileCreateResponse> {
    return this.client.sendOperationRequest(
      { fileContentLength, fileAttributes, options },
      createOperationSpec
    );
  }

  /**
   * Reads or downloads a file from the system, including its metadata and properties.
   * @param options The options parameters.
   */
  download(
    options?: FileDownloadOptionalParams
  ): Promise<FileDownloadResponse> {
    return this.client.sendOperationRequest({ options }, downloadOperationSpec);
  }

  /**
   * Returns all user-defined metadata, standard HTTP properties, and system properties for the file. It
   * does not return the content of the file.
   * @param options The options parameters.
   */
  getProperties(
    options?: FileGetPropertiesOptionalParams
  ): Promise<FileGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getPropertiesOperationSpec
    );
  }

  /**
   * removes the file from the storage account.
   * @param options The options parameters.
   */
  delete(options?: FileDeleteOptionalParams): Promise<FileDeleteResponse> {
    return this.client.sendOperationRequest({ options }, deleteOperationSpec);
  }

  /**
   * Sets HTTP headers on the file.
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   *                       ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param options The options parameters.
   */
  setHttpHeaders(
    fileAttributes: string,
    options?: FileSetHttpHeadersOptionalParams
  ): Promise<FileSetHttpHeadersResponse> {
    return this.client.sendOperationRequest(
      { fileAttributes, options },
      setHttpHeadersOperationSpec
    );
  }

  /**
   * Updates user-defined metadata for the specified file.
   * @param options The options parameters.
   */
  setMetadata(
    options?: FileSetMetadataOptionalParams
  ): Promise<FileSetMetadataResponse> {
    return this.client.sendOperationRequest(
      { options },
      setMetadataOperationSpec
    );
  }

  /**
   * [Update] The Lease File operation establishes and manages a lock on a file for write and delete
   * operations
   * @param options The options parameters.
   */
  acquireLease(
    options?: FileAcquireLeaseOptionalParams
  ): Promise<FileAcquireLeaseResponse> {
    return this.client.sendOperationRequest(
      { options },
      acquireLeaseOperationSpec
    );
  }

  /**
   * [Update] The Lease File operation establishes and manages a lock on a file for write and delete
   * operations
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  releaseLease(
    leaseId: string,
    options?: FileReleaseLeaseOptionalParams
  ): Promise<FileReleaseLeaseResponse> {
    return this.client.sendOperationRequest(
      { leaseId, options },
      releaseLeaseOperationSpec
    );
  }

  /**
   * [Update] The Lease File operation establishes and manages a lock on a file for write and delete
   * operations
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The options parameters.
   */
  changeLease(
    leaseId: string,
    options?: FileChangeLeaseOptionalParams
  ): Promise<FileChangeLeaseResponse> {
    return this.client.sendOperationRequest(
      { leaseId, options },
      changeLeaseOperationSpec
    );
  }

  /**
   * [Update] The Lease File operation establishes and manages a lock on a file for write and delete
   * operations
   * @param options The options parameters.
   */
  breakLease(
    options?: FileBreakLeaseOptionalParams
  ): Promise<FileBreakLeaseResponse> {
    return this.client.sendOperationRequest(
      { options },
      breakLeaseOperationSpec
    );
  }

  /**
   * Upload a range of bytes to a file.
   * @param range Specifies the range of bytes to be written. Both the start and end of the range must be
   *              specified. For an update operation, the range can be up to 4 MB in size. For a clear operation, the
   *              range can be up to the value of the file's full size. The File service accepts only a single byte
   *              range for the Range and 'x-ms-range' headers, and the byte range must be specified in the following
   *              format: bytes=startByte-endByte.
   * @param fileRangeWrite Specify one of the following options: - Update: Writes the bytes specified by
   *                       the request body into the specified range. The Range and Content-Length headers must match to
   *                       perform the update. - Clear: Clears the specified range and releases the space used in storage for
   *                       that range. To clear a range, set the Content-Length header to zero, and set the Range header to a
   *                       value that indicates the range to clear, up to maximum file size.
   * @param contentLength Specifies the number of bytes being transmitted in the request body. When the
   *                      x-ms-write header is set to clear, the value of this header must be set to zero.
   * @param options The options parameters.
   */
  uploadRange(
    range: string,
    fileRangeWrite: FileRangeWriteType,
    contentLength: number,
    options?: FileUploadRangeOptionalParams
  ): Promise<FileUploadRangeResponse> {
    return this.client.sendOperationRequest(
      { range, fileRangeWrite, contentLength, options },
      uploadRangeOperationSpec
    );
  }

  /**
   * Upload a range of bytes to a file where the contents are read from a URL.
   * @param range Writes data to the specified byte range in the file.
   * @param copySource Specifies the URL of the source file or blob, up to 2 KB in length. To copy a file
   *                   to another file within the same storage account, you may use Shared Key to authenticate the source
   *                   file. If you are copying a file from another storage account, or if you are copying a blob from the
   *                   same storage account or another storage account, then you must authenticate the source file or blob
   *                   using a shared access signature. If the source is a public blob, no authentication is required to
   *                   perform the copy operation. A file in a share snapshot can also be specified as a copy source.
   * @param contentLength Specifies the number of bytes being transmitted in the request body. When the
   *                      x-ms-write header is set to clear, the value of this header must be set to zero.
   * @param options The options parameters.
   */
  uploadRangeFromURL(
    range: string,
    copySource: string,
    contentLength: number,
    options?: FileUploadRangeFromURLOptionalParams
  ): Promise<FileUploadRangeFromURLResponse> {
    return this.client.sendOperationRequest(
      { range, copySource, contentLength, options },
      uploadRangeFromURLOperationSpec
    );
  }

  /**
   * Returns the list of valid ranges for a file.
   * @param options The options parameters.
   */
  getRangeList(
    options?: FileGetRangeListOptionalParams
  ): Promise<FileGetRangeListResponse> {
    return this.client.sendOperationRequest(
      { options },
      getRangeListOperationSpec
    );
  }

  /**
   * Copies a blob or file to a destination file within the storage account.
   * @param copySource Specifies the URL of the source file or blob, up to 2 KB in length. To copy a file
   *                   to another file within the same storage account, you may use Shared Key to authenticate the source
   *                   file. If you are copying a file from another storage account, or if you are copying a blob from the
   *                   same storage account or another storage account, then you must authenticate the source file or blob
   *                   using a shared access signature. If the source is a public blob, no authentication is required to
   *                   perform the copy operation. A file in a share snapshot can also be specified as a copy source.
   * @param options The options parameters.
   */
  startCopy(
    copySource: string,
    options?: FileStartCopyOptionalParams
  ): Promise<FileStartCopyResponse> {
    return this.client.sendOperationRequest(
      { copySource, options },
      startCopyOperationSpec
    );
  }

  /**
   * Aborts a pending Copy File operation, and leaves a destination file with zero length and full
   * metadata.
   * @param copyId The copy identifier provided in the x-ms-copy-id header of the original Copy File
   *               operation.
   * @param options The options parameters.
   */
  abortCopy(
    copyId: string,
    options?: FileAbortCopyOptionalParams
  ): Promise<FileAbortCopyResponse> {
    return this.client.sendOperationRequest(
      { copyId, options },
      abortCopyOperationSpec
    );
  }

  /**
   * Lists handles for file
   * @param options The options parameters.
   */
  listHandles(
    options?: FileListHandlesOptionalParams
  ): Promise<FileListHandlesResponse> {
    return this.client.sendOperationRequest(
      { options },
      listHandlesOperationSpec
    );
  }

  /**
   * Closes all handles open for given file
   * @param handleId Specifies handle ID opened on the file or directory to be closed. Asterisk (‘*’) is
   *                 a wildcard that specifies all handles.
   * @param options The options parameters.
   */
  forceCloseHandles(
    handleId: string,
    options?: FileForceCloseHandlesOptionalParams
  ): Promise<FileForceCloseHandlesResponse> {
    return this.client.sendOperationRequest(
      { handleId, options },
      forceCloseHandlesOperationSpec
    );
  }

  /**
   * Renames a file
   * @param renameSource Required. Specifies the URI-style path of the source file, up to 2 KB in length.
   * @param options The options parameters.
   */
  rename(
    renameSource: string,
    options?: FileRenameOptionalParams
  ): Promise<FileRenameResponse> {
    return this.client.sendOperationRequest(
      { renameSource, options },
      renameOperationSpec
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.FileCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileCreateExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.fileAttributes,
    Parameters.fileCreatedOn,
    Parameters.fileLastWriteOn,
    Parameters.fileChangeOn,
    Parameters.fileContentLength,
    Parameters.fileTypeConstant,
    Parameters.fileContentType,
    Parameters.fileContentEncoding,
    Parameters.fileContentLanguage,
    Parameters.fileCacheControl,
    Parameters.fileContentMD5,
    Parameters.fileContentDisposition
  ],
  isXML: true,
  serializer: xmlSerializer
};
const downloadOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.FileDownloadHeaders
    },
    206: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.FileDownloadHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileDownloadExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.range,
    Parameters.rangeGetContentMD5
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getPropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.FileGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileGetPropertiesExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.shareSnapshot],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.FileDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileDeleteExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setHttpHeadersOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.FileSetHttpHeadersHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSetHttpHeadersExceptionHeaders
    }
  },
  queryParameters: [Parameters.comp, Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.fileAttributes,
    Parameters.fileCreatedOn,
    Parameters.fileLastWriteOn,
    Parameters.fileChangeOn,
    Parameters.fileContentType,
    Parameters.fileContentEncoding,
    Parameters.fileContentLanguage,
    Parameters.fileCacheControl,
    Parameters.fileContentMD5,
    Parameters.fileContentDisposition,
    Parameters.fileContentLength1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setMetadataOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.FileSetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileSetMetadataExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp5],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const acquireLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.FileAcquireLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileAcquireLeaseExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.action,
    Parameters.duration,
    Parameters.proposedLeaseId,
    Parameters.requestId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const releaseLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.FileReleaseLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileReleaseLeaseExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.requestId,
    Parameters.action1,
    Parameters.leaseId1,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const changeLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.FileChangeLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileChangeLeaseExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.proposedLeaseId,
    Parameters.requestId,
    Parameters.leaseId1,
    Parameters.action2,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const breakLeaseOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.FileBreakLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileBreakLeaseExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.requestId,
    Parameters.action4,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const uploadRangeOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.FileUploadRangeHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileUploadRangeExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp12],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.leaseId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.contentType2,
    Parameters.accept3,
    Parameters.range1,
    Parameters.fileRangeWrite,
    Parameters.contentLength,
    Parameters.contentMD5,
    Parameters.fileLastWrittenMode
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "binary",
  serializer: xmlSerializer
};
const uploadRangeFromURLOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.FileUploadRangeFromURLHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileUploadRangeFromURLExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp12],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.allowTrailingDot,
    Parameters.allowSourceTrailingDot,
    Parameters.range1,
    Parameters.contentLength,
    Parameters.fileLastWrittenMode,
    Parameters.copySource,
    Parameters.sourceRange,
    Parameters.fileRangeWriteFromUrl,
    Parameters.sourceContentCrc64,
    Parameters.sourceIfMatchCrc64,
    Parameters.sourceIfNoneMatchCrc64,
    Parameters.copySourceAuthorization
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getRangeListOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ShareFileRangeList,
      headersMapper: Mappers.FileGetRangeListHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileGetRangeListExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.shareSnapshot,
    Parameters.comp13,
    Parameters.prevsharesnapshot
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.range
  ],
  isXML: true,
  serializer: xmlSerializer
};
const startCopyOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.FileStartCopyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileStartCopyExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.leaseId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.fileAttributes1,
    Parameters.fileCreationTime,
    Parameters.fileLastWriteTime,
    Parameters.fileChangeTime,
    Parameters.allowSourceTrailingDot,
    Parameters.copySource,
    Parameters.filePermissionCopyMode,
    Parameters.ignoreReadOnly1,
    Parameters.setArchiveAttribute
  ],
  isXML: true,
  serializer: xmlSerializer
};
const abortCopyOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    204: {
      headersMapper: Mappers.FileAbortCopyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileAbortCopyExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp14,
    Parameters.copyId
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.leaseId,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.copyActionAbortConstant
  ],
  isXML: true,
  serializer: xmlSerializer
};
const listHandlesOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListHandlesResponse,
      headersMapper: Mappers.FileListHandlesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileListHandlesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker,
    Parameters.maxResults,
    Parameters.shareSnapshot,
    Parameters.comp9
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const forceCloseHandlesOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.FileForceCloseHandlesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileForceCloseHandlesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker,
    Parameters.shareSnapshot,
    Parameters.comp10
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.handleId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const renameOperationSpec: coreClient.OperationSpec = {
  path: "/{shareName}/{directory}/{fileName}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.FileRenameHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.FileRenameExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.comp11],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.renameSource,
    Parameters.replaceIfExists,
    Parameters.ignoreReadOnly,
    Parameters.sourceLeaseId,
    Parameters.destinationLeaseId,
    Parameters.fileAttributes1,
    Parameters.fileCreationTime,
    Parameters.fileLastWriteTime,
    Parameters.fileChangeTime,
    Parameters.allowSourceTrailingDot,
    Parameters.fileContentType
  ],
  isXML: true,
  serializer: xmlSerializer
};