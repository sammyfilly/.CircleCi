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
  Endpoint as EndpointMapper,
  CheckTrafficManagerRelativeDnsNameAvailabilityParameters as CheckTrafficManagerRelativeDnsNameAvailabilityParametersMapper,
  Profile as ProfileMapper
} from "../models/mappers";

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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: EndpointMapper
};

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
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const profileName: OperationURLParameter = {
  parameterPath: "profileName",
  mapper: {
    serializedName: "profileName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const endpointType: OperationURLParameter = {
  parameterPath: "endpointType",
  mapper: {
    serializedName: "endpointType",
    required: true,
    type: {
      name: "Enum",
      allowedValues: ["AzureEndpoints", "ExternalEndpoints", "NestedEndpoints"]
    }
  }
};

export const endpointName: OperationURLParameter = {
  parameterPath: "endpointName",
  mapper: {
    serializedName: "endpointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-04-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: CheckTrafficManagerRelativeDnsNameAvailabilityParametersMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ProfileMapper
};

export const heatMapType: OperationURLParameter = {
  parameterPath: "heatMapType",
  mapper: {
    defaultValue: "default",
    isConstant: true,
    serializedName: "heatMapType",
    type: {
      name: "String"
    }
  }
};

export const topLeft: OperationQueryParameter = {
  parameterPath: ["options", "topLeft"],
  mapper: {
    constraints: {
      MinItems: 2,
      MaxItems: 2
    },
    serializedName: "topLeft",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Number"
        }
      }
    }
  },
  collectionFormat: "CSV"
};

export const botRight: OperationQueryParameter = {
  parameterPath: ["options", "botRight"],
  mapper: {
    constraints: {
      MinItems: 2,
      MaxItems: 2
    },
    serializedName: "botRight",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Number"
        }
      }
    }
  },
  collectionFormat: "CSV"
};