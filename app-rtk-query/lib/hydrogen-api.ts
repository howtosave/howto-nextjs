import { emptySplitApi as api } from './empty-api';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHomepage: build.query<GetHomepageApiResponse, GetHomepageApiArg>({
      query: (queryArg) => ({
        url: '/homepage',
        params: {
          sort: queryArg.sort,
          pagination: queryArg.pagination,
          fields: queryArg.fields,
          populate: queryArg.populate,
        },
      }),
    }),
    getNoops: build.query<GetNoopsApiResponse, GetNoopsApiArg>({
      query: (queryArg) => ({
        url: '/noops',
        params: {
          sort: queryArg.sort,
          pagination: queryArg.pagination,
          fields: queryArg.fields,
          populate: queryArg.populate,
        },
      }),
    }),
    postNoops: build.mutation<PostNoopsApiResponse, PostNoopsApiArg>({
      query: (queryArg) => ({
        url: '/noops',
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getNoopsById: build.query<GetNoopsByIdApiResponse, GetNoopsByIdApiArg>({
      query: (queryArg) => ({ url: `/noops/${queryArg.id}` }),
    }),
    putNoopsById: build.mutation<PutNoopsByIdApiResponse, PutNoopsByIdApiArg>({
      query: (queryArg) => ({
        url: `/noops/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.body,
      }),
    }),
    deleteNoopsById: build.mutation<
      DeleteNoopsByIdApiResponse,
      DeleteNoopsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/noops/${queryArg.id}`, method: 'DELETE' }),
    }),
    postNoopsByIdLocalizations: build.mutation<
      PostNoopsByIdLocalizationsApiResponse,
      PostNoopsByIdLocalizationsApiArg
    >({
      query: (queryArg) => ({
        url: `/noops/${queryArg.id}/localizations`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postEmail: build.mutation<PostEmailApiResponse, PostEmailApiArg>({
      query: (queryArg) => ({
        url: '/email',
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    postEmailTest: build.mutation<
      PostEmailTestApiResponse,
      PostEmailTestApiArg
    >({
      query: (queryArg) => ({
        url: '/email/test',
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getEmailSettings: build.query<
      GetEmailSettingsApiResponse,
      GetEmailSettingsApiArg
    >({
      query: () => ({ url: '/email/settings' }),
    }),
    postUpload: build.mutation<PostUploadApiResponse, PostUploadApiArg>({
      query: (queryArg) => ({
        url: '/upload',
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getUploadFilesCount: build.query<
      GetUploadFilesCountApiResponse,
      GetUploadFilesCountApiArg
    >({
      query: () => ({ url: '/upload/files/count' }),
    }),
    getUploadFiles: build.query<
      GetUploadFilesApiResponse,
      GetUploadFilesApiArg
    >({
      query: (queryArg) => ({
        url: '/upload/files',
        params: {
          sort: queryArg.sort,
          pagination: queryArg.pagination,
          fields: queryArg.fields,
          populate: queryArg.populate,
        },
      }),
    }),
    getUploadFilesById: build.query<
      GetUploadFilesByIdApiResponse,
      GetUploadFilesByIdApiArg
    >({
      query: (queryArg) => ({ url: `/upload/files/${queryArg.id}` }),
    }),
    deleteUploadFilesById: build.mutation<
      DeleteUploadFilesByIdApiResponse,
      DeleteUploadFilesByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/upload/files/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as hydrogenApi };
export type GetHomepageApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      title?: string;
      slug?: string;
      single?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      multiple?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        }[];
      };
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: {};
        };
      };
      localizations?: {
        data?: {
          id?: string;
          attributes?: {
            title?: string;
            slug?: string;
            single?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            multiple?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            localizations?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            locale?: string;
          };
        }[];
      };
      locale?: string;
    };
  };
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
};
export type GetHomepageApiArg = {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  pagination?: {
    withCount?: boolean;
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
};
export type GetNoopsApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      short_text?: string;
      long_text?: string;
      rich_text?: string;
      integer?: number;
      biginteger?: string;
      decimal?: number;
      float?: number;
      date?: string;
      datetime?: string;
      time?: string;
      timestamp?: string;
      boolean?: boolean;
      email?: string;
      enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
      single_media?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      multiple_media?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        }[];
      };
      json?: any;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: {};
        };
      };
      localizations?: {
        data?: {
          id?: string;
          attributes?: {
            short_text?: string;
            long_text?: string;
            rich_text?: string;
            integer?: number;
            biginteger?: string;
            decimal?: number;
            float?: number;
            date?: string;
            datetime?: string;
            time?: string;
            timestamp?: string;
            boolean?: boolean;
            email?: string;
            enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
            single_media?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            multiple_media?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            json?: any;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            localizations?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            locale?: string;
          };
        }[];
      };
      locale?: string;
    };
  }[];
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
};
export type GetNoopsApiArg = {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  pagination?: {
    withCount?: boolean;
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
};
export type PostNoopsApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      short_text?: string;
      long_text?: string;
      rich_text?: string;
      integer?: number;
      biginteger?: string;
      decimal?: number;
      float?: number;
      date?: string;
      datetime?: string;
      time?: string;
      timestamp?: string;
      boolean?: boolean;
      email?: string;
      enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
      single_media?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      multiple_media?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        }[];
      };
      json?: any;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: {};
        };
      };
      localizations?: {
        data?: {
          id?: string;
          attributes?: {
            short_text?: string;
            long_text?: string;
            rich_text?: string;
            integer?: number;
            biginteger?: string;
            decimal?: number;
            float?: number;
            date?: string;
            datetime?: string;
            time?: string;
            timestamp?: string;
            boolean?: boolean;
            email?: string;
            enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
            single_media?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            multiple_media?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            json?: any;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            localizations?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            locale?: string;
          };
        }[];
      };
      locale?: string;
    };
  };
  meta?: object;
};
export type PostNoopsApiArg = {
  body: {
    data?: {
      short_text?: string;
      long_text?: string;
      rich_text?: string;
      integer?: number;
      biginteger?: string;
      decimal?: number;
      float?: number;
      date?: string;
      datetime?: string;
      time?: string;
      timestamp?: string;
      boolean?: boolean;
      email?: string;
      password?: string;
      enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
      single_media?: number | string;
      multiple_media?: (number | string)[];
      json?: any;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: number | string;
      updatedBy?: number | string;
      localizations?: (number | string)[];
      locale?: string;
    };
  };
};
export type GetNoopsByIdApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      short_text?: string;
      long_text?: string;
      rich_text?: string;
      integer?: number;
      biginteger?: string;
      decimal?: number;
      float?: number;
      date?: string;
      datetime?: string;
      time?: string;
      timestamp?: string;
      boolean?: boolean;
      email?: string;
      enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
      single_media?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      multiple_media?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        }[];
      };
      json?: any;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: {};
        };
      };
      localizations?: {
        data?: {
          id?: string;
          attributes?: {
            short_text?: string;
            long_text?: string;
            rich_text?: string;
            integer?: number;
            biginteger?: string;
            decimal?: number;
            float?: number;
            date?: string;
            datetime?: string;
            time?: string;
            timestamp?: string;
            boolean?: boolean;
            email?: string;
            enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
            single_media?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            multiple_media?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            json?: any;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            localizations?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            locale?: string;
          };
        }[];
      };
      locale?: string;
    };
  };
  meta?: object;
};
export type GetNoopsByIdApiArg = {
  id: string;
};
export type PutNoopsByIdApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      short_text?: string;
      long_text?: string;
      rich_text?: string;
      integer?: number;
      biginteger?: string;
      decimal?: number;
      float?: number;
      date?: string;
      datetime?: string;
      time?: string;
      timestamp?: string;
      boolean?: boolean;
      email?: string;
      enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
      single_media?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      multiple_media?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        }[];
      };
      json?: any;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: {};
        };
      };
      localizations?: {
        data?: {
          id?: string;
          attributes?: {
            short_text?: string;
            long_text?: string;
            rich_text?: string;
            integer?: number;
            biginteger?: string;
            decimal?: number;
            float?: number;
            date?: string;
            datetime?: string;
            time?: string;
            timestamp?: string;
            boolean?: boolean;
            email?: string;
            enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
            single_media?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            multiple_media?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            json?: any;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            localizations?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            locale?: string;
          };
        }[];
      };
      locale?: string;
    };
  };
  meta?: object;
};
export type PutNoopsByIdApiArg = {
  id: string;
  body: {
    data?: {
      short_text?: string;
      long_text?: string;
      rich_text?: string;
      integer?: number;
      biginteger?: string;
      decimal?: number;
      float?: number;
      date?: string;
      datetime?: string;
      time?: string;
      timestamp?: string;
      boolean?: boolean;
      email?: string;
      password?: string;
      enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
      single_media?: number | string;
      multiple_media?: (number | string)[];
      json?: any;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: number | string;
      updatedBy?: number | string;
      localizations?: (number | string)[];
      locale?: string;
    };
  };
};
export type DeleteNoopsByIdApiResponse = /** status 200 OK */ number;
export type DeleteNoopsByIdApiArg = {
  id: string;
};
export type PostNoopsByIdLocalizationsApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      short_text?: string;
      long_text?: string;
      rich_text?: string;
      integer?: number;
      biginteger?: string;
      decimal?: number;
      float?: number;
      date?: string;
      datetime?: string;
      time?: string;
      timestamp?: string;
      boolean?: boolean;
      email?: string;
      enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
      single_media?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      multiple_media?: {
        data?: {
          id?: string;
          attributes?: {
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {
                  firstname?: string;
                  lastname?: string;
                  username?: string;
                  email?: string;
                  resetPasswordToken?: string;
                  registrationToken?: string;
                  isActive?: boolean;
                  roles?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          }[];
                        };
                        permissions?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              action?: string;
                              subject?: string;
                              properties?: any;
                              conditions?: any;
                              role?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  blocked?: boolean;
                  preferedLanguage?: string;
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        }[];
      };
      json?: any;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: {};
        };
      };
      localizations?: {
        data?: {
          id?: string;
          attributes?: {
            short_text?: string;
            long_text?: string;
            rich_text?: string;
            integer?: number;
            biginteger?: string;
            decimal?: number;
            float?: number;
            date?: string;
            datetime?: string;
            time?: string;
            timestamp?: string;
            boolean?: boolean;
            email?: string;
            enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
            single_media?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              };
            };
            multiple_media?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                }[];
                              };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                    updatedBy?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {};
                                      };
                                    };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                              updatedBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {};
                                };
                              };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            json?: any;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            localizations?: {
              data?: {
                id?: string;
                attributes?: {};
              }[];
            };
            locale?: string;
          };
        }[];
      };
      locale?: string;
    };
  };
  meta?: object;
};
export type PostNoopsByIdLocalizationsApiArg = {
  id: string;
  body: {
    data?: {
      short_text?: string;
      long_text?: string;
      rich_text?: string;
      integer?: number;
      biginteger?: string;
      decimal?: number;
      float?: number;
      date?: string;
      datetime?: string;
      time?: string;
      timestamp?: string;
      boolean?: boolean;
      email?: string;
      password?: string;
      enumeration?: 'A' | 'B' | 'C' | 'D' | 'E';
      single_media?: number | string;
      multiple_media?: (number | string)[];
      json?: any;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: number | string;
      updatedBy?: number | string;
      localizations?: (number | string)[];
      locale?: string;
    };
  };
};
export type PostEmailApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      foo?: string;
    };
  };
  meta?: object;
};
export type PostEmailApiArg = {
  body: {
    data?: {
      foo?: string;
    };
  };
};
export type PostEmailTestApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      foo?: string;
    };
  };
  meta?: object;
};
export type PostEmailTestApiArg = {
  body: {
    data?: {
      foo?: string;
    };
  };
};
export type GetEmailSettingsApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      foo?: string;
    };
  };
  meta?: object;
};
export type GetEmailSettingsApiArg = void;
export type PostUploadApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        data?: {
          id?: string;
          attributes?: {};
        }[];
      };
      createdAt?: string;
      updatedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: {};
        };
      };
    };
  };
  meta?: object;
};
export type PostUploadApiArg = {
  body: {
    data?: {
      name?: string;
      hash?: string;
      mime?: string;
      size?: number;
      url?: string;
      provider?: string;
    };
  };
};
export type GetUploadFilesCountApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        data?: {
          id?: string;
          attributes?: {};
        }[];
      };
      createdAt?: string;
      updatedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: {};
        };
      };
    };
  };
  meta?: object;
};
export type GetUploadFilesCountApiArg = void;
export type GetUploadFilesApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        data?: {
          id?: string;
          attributes?: {};
        }[];
      };
      createdAt?: string;
      updatedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: {};
        };
      };
    };
  }[];
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
};
export type GetUploadFilesApiArg = {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  pagination?: {
    withCount?: boolean;
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
};
export type GetUploadFilesByIdApiResponse = /** status 200 OK */ {
  data?: {
    id?: string;
    attributes?: {
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: any;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      provider?: string;
      provider_metadata?: any;
      related?: {
        data?: {
          id?: string;
          attributes?: {};
        }[];
      };
      createdAt?: string;
      updatedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    }[];
                  };
                  permissions?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: {};
                          };
                        };
                      };
                    }[];
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: {};
                    };
                  };
                };
              }[];
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: {};
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: {};
        };
      };
    };
  };
  meta?: object;
};
export type GetUploadFilesByIdApiArg = {
  id: string;
};
export type DeleteUploadFilesByIdApiResponse = /** status 200 OK */ number;
export type DeleteUploadFilesByIdApiArg = {
  id: string;
};
export const {
  useGetHomepageQuery,
  useGetNoopsQuery,
  usePostNoopsMutation,
  useGetNoopsByIdQuery,
  usePutNoopsByIdMutation,
  useDeleteNoopsByIdMutation,
  usePostNoopsByIdLocalizationsMutation,
  usePostEmailMutation,
  usePostEmailTestMutation,
  useGetEmailSettingsQuery,
  usePostUploadMutation,
  useGetUploadFilesCountQuery,
  useGetUploadFilesQuery,
  useGetUploadFilesByIdQuery,
  useDeleteUploadFilesByIdMutation,
} = injectedRtkApi;
