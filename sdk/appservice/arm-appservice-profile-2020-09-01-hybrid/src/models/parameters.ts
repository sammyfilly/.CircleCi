/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  Certificate as CertificateMapper,
  CertificatePatchResource as CertificatePatchResourceMapper,
  Site as SiteMapper,
  SitePatchResource as SitePatchResourceMapper,
  CsmSlotEntity as CsmSlotEntityMapper,
  BackupRequest as BackupRequestMapper,
  RestoreRequest as RestoreRequestMapper,
  StringDictionary as StringDictionaryMapper,
  SiteAuthSettings as SiteAuthSettingsMapper,
  AzureStoragePropertyDictionaryResource as AzureStoragePropertyDictionaryResourceMapper,
  ConnectionStringDictionary as ConnectionStringDictionaryMapper,
  SiteLogsConfig as SiteLogsConfigMapper,
  PushSettings as PushSettingsMapper,
  SlotConfigNamesResource as SlotConfigNamesResourceMapper,
  SiteConfigResource as SiteConfigResourceMapper,
  Deployment as DeploymentMapper,
  Identifier as IdentifierMapper,
  MSDeploy as MSDeployMapper,
  FunctionEnvelope as FunctionEnvelopeMapper,
  KeyInfo as KeyInfoMapper,
  HostNameBinding as HostNameBindingMapper,
  HybridConnection as HybridConnectionMapper,
  RelayServiceConnectionEntity as RelayServiceConnectionEntityMapper,
  StorageMigrationOptions as StorageMigrationOptionsMapper,
  MigrateMySqlRequest as MigrateMySqlRequestMapper,
  SwiftVirtualNetwork as SwiftVirtualNetworkMapper,
  PremierAddOn as PremierAddOnMapper,
  PremierAddOnPatchResource as PremierAddOnPatchResourceMapper,
  PrivateAccess as PrivateAccessMapper,
  PublicCertificate as PublicCertificateMapper,
  CsmPublishingProfileOptions as CsmPublishingProfileOptionsMapper,
  DeletedAppRestoreRequest as DeletedAppRestoreRequestMapper,
  SnapshotRestoreRequest as SnapshotRestoreRequestMapper,
  SiteSourceControl as SiteSourceControlMapper,
  VnetInfo as VnetInfoMapper,
  VnetGateway as VnetGatewayMapper,
  User as UserMapper,
  SourceControl as SourceControlMapper,
  ResourceNameAvailabilityRequest as ResourceNameAvailabilityRequestMapper,
  NameIdentifier as NameIdentifierMapper,
  VnetParameters as VnetParametersMapper,
  CsmMoveResourceEnvelope as CsmMoveResourceEnvelopeMapper,
  ValidateRequest as ValidateRequestMapper,
  ValidateContainerSettingsRequest as ValidateContainerSettingsRequestMapper,
  AppServicePlan as AppServicePlanMapper,
  AppServicePlanPatchResource as AppServicePlanPatchResourceMapper,
  VnetRoute as VnetRouteMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    xmlName: "$host",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    xmlName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-02-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+[^\\.]$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    xmlName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    xmlName: "name",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const certificateEnvelope: OperationParameter = {
  parameterPath: "certificateEnvelope",
  mapper: CertificateMapper
};

export const certificateEnvelope1: OperationParameter = {
  parameterPath: "certificateEnvelope",
  mapper: CertificatePatchResourceMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    xmlName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const includeSlots: OperationQueryParameter = {
  parameterPath: ["options", "includeSlots"],
  mapper: {
    serializedName: "includeSlots",
    xmlName: "includeSlots",
    type: {
      name: "Boolean"
    }
  }
};

export const siteEnvelope: OperationParameter = {
  parameterPath: "siteEnvelope",
  mapper: SiteMapper
};

export const deleteMetrics: OperationQueryParameter = {
  parameterPath: ["options", "deleteMetrics"],
  mapper: {
    serializedName: "deleteMetrics",
    xmlName: "deleteMetrics",
    type: {
      name: "Boolean"
    }
  }
};

export const deleteEmptyServerFarm: OperationQueryParameter = {
  parameterPath: ["options", "deleteEmptyServerFarm"],
  mapper: {
    serializedName: "deleteEmptyServerFarm",
    xmlName: "deleteEmptyServerFarm",
    type: {
      name: "Boolean"
    }
  }
};

export const siteEnvelope1: OperationParameter = {
  parameterPath: "siteEnvelope",
  mapper: SitePatchResourceMapper
};

export const hostName: OperationQueryParameter = {
  parameterPath: ["options", "hostName"],
  mapper: {
    serializedName: "hostName",
    xmlName: "hostName",
    type: {
      name: "String"
    }
  }
};

export const slotSwapEntity: OperationParameter = {
  parameterPath: "slotSwapEntity",
  mapper: CsmSlotEntityMapper
};

export const request: OperationParameter = {
  parameterPath: "request",
  mapper: BackupRequestMapper
};

export const backupId: OperationURLParameter = {
  parameterPath: "backupId",
  mapper: {
    serializedName: "backupId",
    required: true,
    xmlName: "backupId",
    type: {
      name: "String"
    }
  }
};

export const request1: OperationParameter = {
  parameterPath: "request",
  mapper: RestoreRequestMapper
};

export const appSettings: OperationParameter = {
  parameterPath: "appSettings",
  mapper: StringDictionaryMapper
};

export const siteAuthSettings: OperationParameter = {
  parameterPath: "siteAuthSettings",
  mapper: SiteAuthSettingsMapper
};

export const azureStorageAccounts: OperationParameter = {
  parameterPath: "azureStorageAccounts",
  mapper: AzureStoragePropertyDictionaryResourceMapper
};

export const connectionStrings: OperationParameter = {
  parameterPath: "connectionStrings",
  mapper: ConnectionStringDictionaryMapper
};

export const siteLogsConfig: OperationParameter = {
  parameterPath: "siteLogsConfig",
  mapper: SiteLogsConfigMapper
};

export const metadata: OperationParameter = {
  parameterPath: "metadata",
  mapper: StringDictionaryMapper
};

export const pushSettings: OperationParameter = {
  parameterPath: "pushSettings",
  mapper: PushSettingsMapper
};

export const slotConfigNames: OperationParameter = {
  parameterPath: "slotConfigNames",
  mapper: SlotConfigNamesResourceMapper
};

export const siteConfig: OperationParameter = {
  parameterPath: "siteConfig",
  mapper: SiteConfigResourceMapper
};

export const snapshotId: OperationURLParameter = {
  parameterPath: "snapshotId",
  mapper: {
    serializedName: "snapshotId",
    required: true,
    xmlName: "snapshotId",
    type: {
      name: "String"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/octet-stream",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/zip",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const webJobName: OperationURLParameter = {
  parameterPath: "webJobName",
  mapper: {
    serializedName: "webJobName",
    required: true,
    xmlName: "webJobName",
    type: {
      name: "String"
    }
  }
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    xmlName: "id",
    type: {
      name: "String"
    }
  }
};

export const deployment: OperationParameter = {
  parameterPath: "deployment",
  mapper: DeploymentMapper
};

export const domainOwnershipIdentifierName: OperationURLParameter = {
  parameterPath: "domainOwnershipIdentifierName",
  mapper: {
    serializedName: "domainOwnershipIdentifierName",
    required: true,
    xmlName: "domainOwnershipIdentifierName",
    type: {
      name: "String"
    }
  }
};

export const domainOwnershipIdentifier: OperationParameter = {
  parameterPath: "domainOwnershipIdentifier",
  mapper: IdentifierMapper
};

export const mSDeploy: OperationParameter = {
  parameterPath: "mSDeploy",
  mapper: MSDeployMapper
};

export const functionName: OperationURLParameter = {
  parameterPath: "functionName",
  mapper: {
    serializedName: "functionName",
    required: true,
    xmlName: "functionName",
    type: {
      name: "String"
    }
  }
};

export const functionEnvelope: OperationParameter = {
  parameterPath: "functionEnvelope",
  mapper: FunctionEnvelopeMapper
};

export const key: OperationParameter = {
  parameterPath: "key",
  mapper: KeyInfoMapper
};

export const keyName: OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    serializedName: "keyName",
    required: true,
    xmlName: "keyName",
    type: {
      name: "String"
    }
  }
};

export const keyType: OperationURLParameter = {
  parameterPath: "keyType",
  mapper: {
    serializedName: "keyType",
    required: true,
    xmlName: "keyType",
    type: {
      name: "String"
    }
  }
};

export const hostName1: OperationURLParameter = {
  parameterPath: "hostName",
  mapper: {
    serializedName: "hostName",
    required: true,
    xmlName: "hostName",
    type: {
      name: "String"
    }
  }
};

export const hostNameBinding: OperationParameter = {
  parameterPath: "hostNameBinding",
  mapper: HostNameBindingMapper
};

export const namespaceName: OperationURLParameter = {
  parameterPath: "namespaceName",
  mapper: {
    serializedName: "namespaceName",
    required: true,
    xmlName: "namespaceName",
    type: {
      name: "String"
    }
  }
};

export const relayName: OperationURLParameter = {
  parameterPath: "relayName",
  mapper: {
    serializedName: "relayName",
    required: true,
    xmlName: "relayName",
    type: {
      name: "String"
    }
  }
};

export const connectionEnvelope: OperationParameter = {
  parameterPath: "connectionEnvelope",
  mapper: HybridConnectionMapper
};

export const entityName: OperationURLParameter = {
  parameterPath: "entityName",
  mapper: {
    serializedName: "entityName",
    required: true,
    xmlName: "entityName",
    type: {
      name: "String"
    }
  }
};

export const connectionEnvelope1: OperationParameter = {
  parameterPath: "connectionEnvelope",
  mapper: RelayServiceConnectionEntityMapper
};

export const instanceId: OperationURLParameter = {
  parameterPath: "instanceId",
  mapper: {
    serializedName: "instanceId",
    required: true,
    xmlName: "instanceId",
    type: {
      name: "String"
    }
  }
};

export const processId: OperationURLParameter = {
  parameterPath: "processId",
  mapper: {
    serializedName: "processId",
    required: true,
    xmlName: "processId",
    type: {
      name: "String"
    }
  }
};

export const baseAddress: OperationURLParameter = {
  parameterPath: "baseAddress",
  mapper: {
    serializedName: "baseAddress",
    required: true,
    xmlName: "baseAddress",
    type: {
      name: "String"
    }
  }
};

export const threadId: OperationURLParameter = {
  parameterPath: "threadId",
  mapper: {
    serializedName: "threadId",
    required: true,
    xmlName: "threadId",
    type: {
      name: "String"
    }
  }
};

export const details: OperationQueryParameter = {
  parameterPath: ["options", "details"],
  mapper: {
    serializedName: "details",
    xmlName: "details",
    type: {
      name: "Boolean"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    xmlName: "$filter",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const migrationOptions: OperationParameter = {
  parameterPath: "migrationOptions",
  mapper: StorageMigrationOptionsMapper
};

export const subscriptionName: OperationQueryParameter = {
  parameterPath: "subscriptionName",
  mapper: {
    serializedName: "subscriptionName",
    required: true,
    xmlName: "subscriptionName",
    type: {
      name: "String"
    }
  }
};

export const migrationRequestEnvelope: OperationParameter = {
  parameterPath: "migrationRequestEnvelope",
  mapper: MigrateMySqlRequestMapper
};

export const connectionEnvelope2: OperationParameter = {
  parameterPath: "connectionEnvelope",
  mapper: SwiftVirtualNetworkMapper
};

export const view: OperationURLParameter = {
  parameterPath: "view",
  mapper: {
    serializedName: "view",
    required: true,
    xmlName: "view",
    type: {
      name: "String"
    }
  }
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    xmlName: "operationId",
    type: {
      name: "String"
    }
  }
};

export const durationInSeconds: OperationQueryParameter = {
  parameterPath: ["options", "durationInSeconds"],
  mapper: {
    serializedName: "durationInSeconds",
    xmlName: "durationInSeconds",
    type: {
      name: "Number"
    }
  }
};

export const maxFrameLength: OperationQueryParameter = {
  parameterPath: ["options", "maxFrameLength"],
  mapper: {
    serializedName: "maxFrameLength",
    xmlName: "maxFrameLength",
    type: {
      name: "Number"
    }
  }
};

export const sasUrl: OperationQueryParameter = {
  parameterPath: ["options", "sasUrl"],
  mapper: {
    serializedName: "sasUrl",
    xmlName: "sasUrl",
    type: {
      name: "String"
    }
  }
};

export const premierAddOnName: OperationURLParameter = {
  parameterPath: "premierAddOnName",
  mapper: {
    serializedName: "premierAddOnName",
    required: true,
    xmlName: "premierAddOnName",
    type: {
      name: "String"
    }
  }
};

export const premierAddOn: OperationParameter = {
  parameterPath: "premierAddOn",
  mapper: PremierAddOnMapper
};

export const premierAddOn1: OperationParameter = {
  parameterPath: "premierAddOn",
  mapper: PremierAddOnPatchResourceMapper
};

export const access: OperationParameter = {
  parameterPath: "access",
  mapper: PrivateAccessMapper
};

export const publicCertificateName: OperationURLParameter = {
  parameterPath: "publicCertificateName",
  mapper: {
    serializedName: "publicCertificateName",
    required: true,
    xmlName: "publicCertificateName",
    type: {
      name: "String"
    }
  }
};

export const publicCertificate: OperationParameter = {
  parameterPath: "publicCertificate",
  mapper: PublicCertificateMapper
};

export const publishingProfileOptions: OperationParameter = {
  parameterPath: "publishingProfileOptions",
  mapper: CsmPublishingProfileOptionsMapper
};

export const accept3: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const softRestart: OperationQueryParameter = {
  parameterPath: ["options", "softRestart"],
  mapper: {
    serializedName: "softRestart",
    xmlName: "softRestart",
    type: {
      name: "Boolean"
    }
  }
};

export const synchronous: OperationQueryParameter = {
  parameterPath: ["options", "synchronous"],
  mapper: {
    serializedName: "synchronous",
    xmlName: "synchronous",
    type: {
      name: "Boolean"
    }
  }
};

export const restoreRequest: OperationParameter = {
  parameterPath: "restoreRequest",
  mapper: DeletedAppRestoreRequestMapper
};

export const restoreRequest1: OperationParameter = {
  parameterPath: "restoreRequest",
  mapper: SnapshotRestoreRequestMapper
};

export const siteExtensionId: OperationURLParameter = {
  parameterPath: "siteExtensionId",
  mapper: {
    serializedName: "siteExtensionId",
    required: true,
    xmlName: "siteExtensionId",
    type: {
      name: "String"
    }
  }
};

export const slot: OperationURLParameter = {
  parameterPath: "slot",
  mapper: {
    serializedName: "slot",
    required: true,
    xmlName: "slot",
    type: {
      name: "String"
    }
  }
};

export const siteSourceControl: OperationParameter = {
  parameterPath: "siteSourceControl",
  mapper: SiteSourceControlMapper
};

export const vnetName: OperationURLParameter = {
  parameterPath: "vnetName",
  mapper: {
    serializedName: "vnetName",
    required: true,
    xmlName: "vnetName",
    type: {
      name: "String"
    }
  }
};

export const connectionEnvelope3: OperationParameter = {
  parameterPath: "connectionEnvelope",
  mapper: VnetInfoMapper
};

export const gatewayName: OperationURLParameter = {
  parameterPath: "gatewayName",
  mapper: {
    serializedName: "gatewayName",
    required: true,
    xmlName: "gatewayName",
    type: {
      name: "String"
    }
  }
};

export const connectionEnvelope4: OperationParameter = {
  parameterPath: "connectionEnvelope",
  mapper: VnetGatewayMapper
};

export const userDetails: OperationParameter = {
  parameterPath: "userDetails",
  mapper: UserMapper
};

export const sourceControlType: OperationURLParameter = {
  parameterPath: "sourceControlType",
  mapper: {
    serializedName: "sourceControlType",
    required: true,
    xmlName: "sourceControlType",
    type: {
      name: "String"
    }
  }
};

export const requestMessage: OperationParameter = {
  parameterPath: "requestMessage",
  mapper: SourceControlMapper
};

export const billingLocation: OperationQueryParameter = {
  parameterPath: ["options", "billingLocation"],
  mapper: {
    serializedName: "billingLocation",
    xmlName: "billingLocation",
    type: {
      name: "String"
    }
  }
};

export const osType: OperationQueryParameter = {
  parameterPath: ["options", "osType"],
  mapper: {
    serializedName: "osType",
    xmlName: "osType",
    type: {
      name: "String"
    }
  }
};

export const name1: OperationParameter = {
  parameterPath: "name",
  mapper: ResourceNameAvailabilityRequestMapper
};

export const typeParam: OperationParameter = {
  parameterPath: "typeParam",
  mapper: ResourceNameAvailabilityRequestMapper
};

export const isFqdn: OperationParameter = {
  parameterPath: ["options", "isFqdn"],
  mapper: ResourceNameAvailabilityRequestMapper
};

export const sku: OperationQueryParameter = {
  parameterPath: ["options", "sku"],
  mapper: {
    serializedName: "sku",
    xmlName: "sku",
    type: {
      name: "String"
    }
  }
};

export const linuxWorkersEnabled: OperationQueryParameter = {
  parameterPath: ["options", "linuxWorkersEnabled"],
  mapper: {
    serializedName: "linuxWorkersEnabled",
    xmlName: "linuxWorkersEnabled",
    type: {
      name: "Boolean"
    }
  }
};

export const xenonWorkersEnabled: OperationQueryParameter = {
  parameterPath: ["options", "xenonWorkersEnabled"],
  mapper: {
    serializedName: "xenonWorkersEnabled",
    xmlName: "xenonWorkersEnabled",
    type: {
      name: "Boolean"
    }
  }
};

export const linuxDynamicWorkersEnabled: OperationQueryParameter = {
  parameterPath: ["options", "linuxDynamicWorkersEnabled"],
  mapper: {
    serializedName: "linuxDynamicWorkersEnabled",
    xmlName: "linuxDynamicWorkersEnabled",
    type: {
      name: "Boolean"
    }
  }
};

export const nameIdentifier: OperationParameter = {
  parameterPath: "nameIdentifier",
  mapper: NameIdentifierMapper
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: VnetParametersMapper
};

export const moveResourceEnvelope: OperationParameter = {
  parameterPath: "moveResourceEnvelope",
  mapper: CsmMoveResourceEnvelopeMapper
};

export const validateRequest: OperationParameter = {
  parameterPath: "validateRequest",
  mapper: ValidateRequestMapper
};

export const validateContainerSettingsRequest: OperationParameter = {
  parameterPath: "validateContainerSettingsRequest",
  mapper: ValidateContainerSettingsRequestMapper
};

export const detailed: OperationQueryParameter = {
  parameterPath: ["options", "detailed"],
  mapper: {
    serializedName: "detailed",
    xmlName: "detailed",
    type: {
      name: "Boolean"
    }
  }
};

export const appServicePlan: OperationParameter = {
  parameterPath: "appServicePlan",
  mapper: AppServicePlanMapper
};

export const appServicePlan1: OperationParameter = {
  parameterPath: "appServicePlan",
  mapper: AppServicePlanPatchResourceMapper
};

export const skipToken: OperationQueryParameter = {
  parameterPath: ["options", "skipToken"],
  mapper: {
    serializedName: "$skipToken",
    xmlName: "$skipToken",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    xmlName: "$top",
    type: {
      name: "String"
    }
  }
};

export const routeName: OperationURLParameter = {
  parameterPath: "routeName",
  mapper: {
    serializedName: "routeName",
    required: true,
    xmlName: "routeName",
    type: {
      name: "String"
    }
  }
};

export const route: OperationParameter = {
  parameterPath: "route",
  mapper: VnetRouteMapper
};

export const workerName: OperationURLParameter = {
  parameterPath: "workerName",
  mapper: {
    serializedName: "workerName",
    required: true,
    xmlName: "workerName",
    type: {
      name: "String"
    }
  }
};

export const osTypeSelected: OperationQueryParameter = {
  parameterPath: ["options", "osTypeSelected"],
  mapper: {
    serializedName: "osTypeSelected",
    xmlName: "osTypeSelected",
    type: {
      name: "String"
    }
  }
};

export const osTypeSelected1: OperationQueryParameter = {
  parameterPath: ["options", "osTypeSelected"],
  mapper: {
    serializedName: "osTypeSelected",
    xmlName: "osTypeSelected",
    type: {
      name: "String"
    }
  }
};

export const featured: OperationQueryParameter = {
  parameterPath: ["options", "featured"],
  mapper: {
    serializedName: "featured",
    xmlName: "featured",
    type: {
      name: "Boolean"
    }
  }
};

export const hostingEnvironmentName: OperationURLParameter = {
  parameterPath: "hostingEnvironmentName",
  mapper: {
    serializedName: "hostingEnvironmentName",
    required: true,
    xmlName: "hostingEnvironmentName",
    type: {
      name: "String"
    }
  }
};

export const expiredOnly: OperationQueryParameter = {
  parameterPath: ["options", "expiredOnly"],
  mapper: {
    serializedName: "expiredOnly",
    xmlName: "expiredOnly",
    type: {
      name: "Boolean"
    }
  }
};

export const environmentName: OperationQueryParameter = {
  parameterPath: "environmentName",
  mapper: {
    serializedName: "environmentName",
    required: true,
    xmlName: "environmentName",
    type: {
      name: "String"
    }
  }
};

export const updateSeen: OperationQueryParameter = {
  parameterPath: ["options", "updateSeen"],
  mapper: {
    serializedName: "updateSeen",
    xmlName: "updateSeen",
    type: {
      name: "Boolean"
    }
  }
};

export const recommendationId: OperationQueryParameter = {
  parameterPath: ["options", "recommendationId"],
  mapper: {
    serializedName: "recommendationId",
    xmlName: "recommendationId",
    type: {
      name: "String"
    }
  }
};

export const siteName: OperationURLParameter = {
  parameterPath: "siteName",
  mapper: {
    serializedName: "siteName",
    required: true,
    xmlName: "siteName",
    type: {
      name: "String"
    }
  }
};