/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const AcquiredShortCodes: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AcquiredShortCodes",
    modelProperties: {
      shortCodes: {
        serializedName: "shortCodes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ShortCode"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ShortCode: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ShortCode",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        type: {
          name: "String"
        }
      },
      programBriefIds: {
        serializedName: "programBriefIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      purchaseDate: {
        serializedName: "purchaseDate",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const CommunicationError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommunicationError"
            }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const ShortCodeCosts: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ShortCodeCosts",
    modelProperties: {
      costs: {
        serializedName: "costs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ShortCodeCost"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ShortCodeCost: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ShortCodeCost",
    modelProperties: {
      amount: {
        serializedName: "amount",
        type: {
          name: "Number"
        }
      },
      currencyCode: {
        serializedName: "currencyCode",
        type: {
          name: "String"
        }
      },
      countryCode: {
        serializedName: "countryCode",
        type: {
          name: "String"
        }
      },
      isVanityShortCode: {
        serializedName: "isVanityShortCode",
        type: {
          name: "Boolean"
        }
      },
      billingFrequency: {
        serializedName: "billingFrequency",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const USProgramBrief: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "USProgramBrief",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      number: {
        serializedName: "number",
        type: {
          name: "String"
        }
      },
      reviewNotes: {
        serializedName: "reviewNotes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReviewNote"
            }
          }
        }
      },
      costs: {
        serializedName: "costs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ShortCodeCost"
            }
          }
        }
      },
      submissionDate: {
        serializedName: "submissionDate",
        type: {
          name: "DateTime"
        }
      },
      statusUpdatedDate: {
        serializedName: "statusUpdatedDate",
        type: {
          name: "DateTime"
        }
      },
      programDetails: {
        serializedName: "programDetails",
        type: {
          name: "Composite",
          className: "ProgramDetails"
        }
      },
      companyInformation: {
        serializedName: "companyInformation",
        type: {
          name: "Composite",
          className: "CompanyInformation"
        }
      },
      messageDetails: {
        serializedName: "messageDetails",
        type: {
          name: "Composite",
          className: "MessageDetails"
        }
      },
      trafficDetails: {
        serializedName: "trafficDetails",
        type: {
          name: "Composite",
          className: "TrafficDetails"
        }
      },
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProgramBriefAttachmentSummary"
            }
          }
        }
      }
    }
  }
};

export const ReviewNote: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReviewNote",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      date: {
        serializedName: "date",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ProgramDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProgramDetails",
    modelProperties: {
      isVanity: {
        serializedName: "isVanity",
        type: {
          name: "Boolean"
        }
      },
      preferredVanityNumbers: {
        serializedName: "preferredVanityNumbers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      numberType: {
        serializedName: "numberType",
        type: {
          name: "String"
        }
      },
      isPoliticalCampaign: {
        serializedName: "isPoliticalCampaign",
        type: {
          name: "Boolean"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      callToActionTypes: {
        serializedName: "callToActionTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "website",
                "pointOfSale",
                "sms",
                "interactiveVoiceResponse"
              ]
            }
          }
        }
      },
      callToActionUrl: {
        serializedName: "callToActionUrl",
        type: {
          name: "String"
        }
      },
      callToAction: {
        serializedName: "callToAction",
        type: {
          name: "String"
        }
      },
      termsOfServiceUrl: {
        serializedName: "termsOfServiceUrl",
        type: {
          name: "String"
        }
      },
      privacyPolicyUrl: {
        serializedName: "privacyPolicyUrl",
        type: {
          name: "String"
        }
      },
      expectedDateOfService: {
        serializedName: "expectedDateOfService",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CompanyInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CompanyInformation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      contactInformation: {
        serializedName: "contactInformation",
        type: {
          name: "Composite",
          className: "ContactInformation"
        }
      },
      customerCareInformation: {
        serializedName: "customerCareInformation",
        type: {
          name: "Composite",
          className: "CustomerCareInformation"
        }
      }
    }
  }
};

export const ContactInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContactInformation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CustomerCareInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomerCareInformation",
    modelProperties: {
      tollFreeNumber: {
        serializedName: "tollFreeNumber",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MessageDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MessageDetails",
    modelProperties: {
      supportedProtocol: {
        serializedName: "supportedProtocol",
        type: {
          name: "String"
        }
      },
      recurrence: {
        serializedName: "recurrence",
        type: {
          name: "String"
        }
      },
      helpAnswerToUser: {
        serializedName: "helpAnswerToUser",
        type: {
          name: "String"
        }
      },
      optOutAnswerToUser: {
        serializedName: "optOutAnswerToUser",
        type: {
          name: "String"
        }
      },
      optInMessageToUser: {
        serializedName: "optInMessageToUser",
        type: {
          name: "String"
        }
      },
      optInAnswerFromUser: {
        serializedName: "optInAnswerFromUser",
        type: {
          name: "String"
        }
      },
      optInConfirmationMessageToUser: {
        serializedName: "optInConfirmationMessageToUser",
        type: {
          name: "String"
        }
      },
      directionality: {
        serializedName: "directionality",
        type: {
          name: "String"
        }
      },
      useCases: {
        serializedName: "useCases",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UseCase"
            }
          }
        }
      }
    }
  }
};

export const UseCase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCase",
    modelProperties: {
      contentType: {
        serializedName: "contentType",
        type: {
          name: "String"
        }
      },
      customContentType: {
        serializedName: "customContentType",
        type: {
          name: "String"
        }
      },
      examples: {
        serializedName: "examples",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MessageExampleSequence"
            }
          }
        }
      }
    }
  }
};

export const MessageExampleSequence: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MessageExampleSequence",
    modelProperties: {
      messages: {
        serializedName: "messages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MessageExample"
            }
          }
        }
      }
    }
  }
};

export const MessageExample: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MessageExample",
    modelProperties: {
      direction: {
        serializedName: "direction",
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrafficDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrafficDetails",
    modelProperties: {
      totalMonthlyVolume: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 0
        },
        serializedName: "totalMonthlyVolume",
        type: {
          name: "Number"
        }
      },
      monthlyAverageMessagesFromUser: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 0
        },
        serializedName: "monthlyAverageMessagesFromUser",
        type: {
          name: "Number"
        }
      },
      monthlyAverageMessagesToUser: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 0
        },
        serializedName: "monthlyAverageMessagesToUser",
        type: {
          name: "Number"
        }
      },
      isSpiky: {
        serializedName: "isSpiky",
        type: {
          name: "Boolean"
        }
      },
      spikeDetails: {
        serializedName: "spikeDetails",
        type: {
          name: "String"
        }
      },
      estimatedRampUpTimeInDays: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 0
        },
        serializedName: "estimatedRampUpTimeInDays",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ProgramBriefAttachmentSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProgramBriefAttachmentSummary",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      fileName: {
        serializedName: "fileName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const USProgramBriefs: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "USProgramBriefs",
    modelProperties: {
      programBriefs: {
        serializedName: "programBriefs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "USProgramBrief"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProgramBriefAttachment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProgramBriefAttachment",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Uuid"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      fileName: {
        constraints: {
          MinLength: 1
        },
        serializedName: "fileName",
        required: true,
        type: {
          name: "String"
        }
      },
      fileSizeInBytes: {
        serializedName: "fileSizeInBytes",
        type: {
          name: "Number"
        }
      },
      fileType: {
        serializedName: "fileType",
        required: true,
        type: {
          name: "String"
        }
      },
      fileContentBase64: {
        constraints: {
          MinLength: 1
        },
        serializedName: "fileContentBase64",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProgramBriefAttachments: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProgramBriefAttachments",
    modelProperties: {
      attachments: {
        serializedName: "attachments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProgramBriefAttachment"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};