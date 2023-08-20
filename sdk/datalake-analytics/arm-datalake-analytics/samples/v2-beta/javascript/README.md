# client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for in some common scenarios.

| **File Name**                                                                               | **Description**                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [accountsCheckNameAvailabilitySample.js][accountschecknameavailabilitysample]               | Checks whether the specified account name is available or taken. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Accounts_CheckNameAvailability.json                                                                                                                                              |
| [accountsCreateSample.js][accountscreatesample]                                             | Creates the specified Data Lake Analytics account. This supplies the user with computation services for Data Lake Analytics workloads. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Accounts_Create.json                                                                                       |
| [accountsDeleteSample.js][accountsdeletesample]                                             | Begins the delete process for the Data Lake Analytics account object specified by the account name. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Accounts_Delete.json                                                                                                                          |
| [accountsGetSample.js][accountsgetsample]                                                   | Gets details of the specified Data Lake Analytics account. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Accounts_Get.json                                                                                                                                                                      |
| [accountsListByResourceGroupSample.js][accountslistbyresourcegroupsample]                   | Gets the first page of Data Lake Analytics accounts, if any, within a specific resource group. This includes a link to the next page, if any. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Accounts_ListByResourceGroup.json                                                                   |
| [accountsListSample.js][accountslistsample]                                                 | Gets the first page of Data Lake Analytics accounts, if any, within the current subscription. This includes a link to the next page, if any. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Accounts_List.json                                                                                   |
| [accountsUpdateSample.js][accountsupdatesample]                                             | Updates the Data Lake Analytics account object specified by the accountName with the contents of the account object. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Accounts_Update.json                                                                                                         |
| [computePoliciesCreateOrUpdateSample.js][computepoliciescreateorupdatesample]               | Creates or updates the specified compute policy. During update, the compute policy with the specified name will be replaced with this new compute policy. An account supports, at most, 50 policies x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/ComputePolicies_CreateOrUpdate.json           |
| [computePoliciesDeleteSample.js][computepoliciesdeletesample]                               | Deletes the specified compute policy from the specified Data Lake Analytics account x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/ComputePolicies_Delete.json                                                                                                                                   |
| [computePoliciesGetSample.js][computepoliciesgetsample]                                     | Gets the specified Data Lake Analytics compute policy. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/ComputePolicies_Get.json                                                                                                                                                                   |
| [computePoliciesListByAccountSample.js][computepolicieslistbyaccountsample]                 | Lists the Data Lake Analytics compute policies within the specified Data Lake Analytics account. An account supports, at most, 50 policies x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/ComputePolicies_ListByAccount.json                                                                     |
| [computePoliciesUpdateSample.js][computepoliciesupdatesample]                               | Updates the specified compute policy. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/ComputePolicies_Update.json                                                                                                                                                                                 |
| [dataLakeStoreAccountsAddSample.js][datalakestoreaccountsaddsample]                         | Updates the specified Data Lake Analytics account to include the additional Data Lake Store account. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/DataLakeStoreAccounts_Add.json                                                                                                               |
| [dataLakeStoreAccountsDeleteSample.js][datalakestoreaccountsdeletesample]                   | Updates the Data Lake Analytics account specified to remove the specified Data Lake Store account. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/DataLakeStoreAccounts_Delete.json                                                                                                              |
| [dataLakeStoreAccountsGetSample.js][datalakestoreaccountsgetsample]                         | Gets the specified Data Lake Store account details in the specified Data Lake Analytics account. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/DataLakeStoreAccounts_Get.json                                                                                                                   |
| [dataLakeStoreAccountsListByAccountSample.js][datalakestoreaccountslistbyaccountsample]     | Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/DataLakeStoreAccounts_ListByAccount.json                                              |
| [firewallRulesCreateOrUpdateSample.js][firewallrulescreateorupdatesample]                   | Creates or updates the specified firewall rule. During update, the firewall rule with the specified name will be replaced with this new firewall rule. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/FirewallRules_CreateOrUpdate.json                                                          |
| [firewallRulesDeleteSample.js][firewallrulesdeletesample]                                   | Deletes the specified firewall rule from the specified Data Lake Analytics account x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/FirewallRules_Delete.json                                                                                                                                      |
| [firewallRulesGetSample.js][firewallrulesgetsample]                                         | Gets the specified Data Lake Analytics firewall rule. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/FirewallRules_Get.json                                                                                                                                                                      |
| [firewallRulesListByAccountSample.js][firewallruleslistbyaccountsample]                     | Lists the Data Lake Analytics firewall rules within the specified Data Lake Analytics account. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/FirewallRules_ListByAccount.json                                                                                                                   |
| [firewallRulesUpdateSample.js][firewallrulesupdatesample]                                   | Updates the specified firewall rule. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/FirewallRules_Update.json                                                                                                                                                                                    |
| [locationsGetCapabilitySample.js][locationsgetcapabilitysample]                             | Gets subscription-level properties and limits for Data Lake Analytics specified by resource location. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Locations_GetCapability.json                                                                                                                |
| [operationsListSample.js][operationslistsample]                                             | Lists all of the available Data Lake Analytics REST API operations. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/Operations_List.json                                                                                                                                                          |
| [storageAccountsAddSample.js][storageaccountsaddsample]                                     | Updates the specified Data Lake Analytics account to add an Azure Storage account. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_Add.json                                                                                                                                       |
| [storageAccountsDeleteSample.js][storageaccountsdeletesample]                               | Updates the specified Data Lake Analytics account to remove an Azure Storage account. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_Delete.json                                                                                                                                 |
| [storageAccountsGetSample.js][storageaccountsgetsample]                                     | Gets the specified Azure Storage account linked to the given Data Lake Analytics account. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_Get.json                                                                                                                                |
| [storageAccountsGetStorageContainerSample.js][storageaccountsgetstoragecontainersample]     | Gets the specified Azure Storage container associated with the given Data Lake Analytics and Azure Storage accounts. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_GetStorageContainer.json                                                                                     |
| [storageAccountsListByAccountSample.js][storageaccountslistbyaccountsample]                 | Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account. The response includes a link to the next page, if any. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_ListByAccount.json                                             |
| [storageAccountsListSasTokensSample.js][storageaccountslistsastokenssample]                 | Gets the SAS token associated with the specified Data Lake Analytics and Azure Storage account and container combination. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_ListSasTokens.json                                                                                      |
| [storageAccountsListStorageContainersSample.js][storageaccountsliststoragecontainerssample] | Lists the Azure Storage containers, if any, associated with the specified Data Lake Analytics and Azure Storage account combination. The response includes a link to the next page of results, if any. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_ListStorageContainers.json |
| [storageAccountsUpdateSample.js][storageaccountsupdatesample]                               | Updates the Data Lake Analytics account to replace Azure Storage blob account details, such as the access key and/or suffix. x-ms-original-file: specification/datalake-analytics/resource-manager/Microsoft.DataLakeAnalytics/preview/2019-11-01-preview/examples/StorageAccounts_Update.json                                                                                          |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node accountsCheckNameAvailabilitySample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env  node accountsCheckNameAvailabilitySample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[accountschecknameavailabilitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/accountsCheckNameAvailabilitySample.js
[accountscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/accountsCreateSample.js
[accountsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/accountsDeleteSample.js
[accountsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/accountsGetSample.js
[accountslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/accountsListByResourceGroupSample.js
[accountslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/accountsListSample.js
[accountsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/accountsUpdateSample.js
[computepoliciescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/computePoliciesCreateOrUpdateSample.js
[computepoliciesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/computePoliciesDeleteSample.js
[computepoliciesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/computePoliciesGetSample.js
[computepolicieslistbyaccountsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/computePoliciesListByAccountSample.js
[computepoliciesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/computePoliciesUpdateSample.js
[datalakestoreaccountsaddsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/dataLakeStoreAccountsAddSample.js
[datalakestoreaccountsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/dataLakeStoreAccountsDeleteSample.js
[datalakestoreaccountsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/dataLakeStoreAccountsGetSample.js
[datalakestoreaccountslistbyaccountsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/dataLakeStoreAccountsListByAccountSample.js
[firewallrulescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/firewallRulesCreateOrUpdateSample.js
[firewallrulesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/firewallRulesDeleteSample.js
[firewallrulesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/firewallRulesGetSample.js
[firewallruleslistbyaccountsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/firewallRulesListByAccountSample.js
[firewallrulesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/firewallRulesUpdateSample.js
[locationsgetcapabilitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/locationsGetCapabilitySample.js
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/operationsListSample.js
[storageaccountsaddsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/storageAccountsAddSample.js
[storageaccountsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/storageAccountsDeleteSample.js
[storageaccountsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/storageAccountsGetSample.js
[storageaccountsgetstoragecontainersample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/storageAccountsGetStorageContainerSample.js
[storageaccountslistbyaccountsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/storageAccountsListByAccountSample.js
[storageaccountslistsastokenssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/storageAccountsListSasTokensSample.js
[storageaccountsliststoragecontainerssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/storageAccountsListStorageContainersSample.js
[storageaccountsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/datalake-analytics/arm-datalake-analytics/samples/v2-beta/javascript/storageAccountsUpdateSample.js
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-datalake-analytics?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/datalake-analytics/arm-datalake-analytics/README.md