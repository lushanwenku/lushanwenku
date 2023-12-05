/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { NotifierDescriptor } from "../models";
// @ts-ignore
import { NotifierDescriptorList } from "../models";
/**
 * NotificationHaloRunV1alpha1NotifierDescriptorApi - axios parameter creator
 * @export
 */
export const NotificationHaloRunV1alpha1NotifierDescriptorApiAxiosParamCreator =
  function (configuration?: Configuration) {
    return {
      /**
       * Create notification.halo.run/v1alpha1/NotifierDescriptor
       * @param {NotifierDescriptor} [notifierDescriptor] Fresh notifierDescriptor
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      createnotificationHaloRunV1alpha1NotifierDescriptor: async (
        notifierDescriptor?: NotifierDescriptor,
        options: AxiosRequestConfig = {}
      ): Promise<RequestArgs> => {
        const localVarPath = `/apis/notification.halo.run/v1alpha1/notifierDescriptors`;
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        let baseOptions;
        if (configuration) {
          baseOptions = configuration.baseOptions;
        }

        const localVarRequestOptions = {
          method: "POST",
          ...baseOptions,
          ...options,
        };
        const localVarHeaderParameter = {} as any;
        const localVarQueryParameter = {} as any;

        // authentication BasicAuth required
        // http basic authentication required
        setBasicAuthToObject(localVarRequestOptions, configuration);

        // authentication BearerAuth required
        // http bearer authentication required
        await setBearerAuthToObject(localVarHeaderParameter, configuration);

        localVarHeaderParameter["Content-Type"] = "application/json";

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        let headersFromBaseOptions =
          baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
          ...localVarHeaderParameter,
          ...headersFromBaseOptions,
          ...options.headers,
        };
        localVarRequestOptions.data = serializeDataIfNeeded(
          notifierDescriptor,
          localVarRequestOptions,
          configuration
        );

        return {
          url: toPathString(localVarUrlObj),
          options: localVarRequestOptions,
        };
      },
      /**
       * Delete notification.halo.run/v1alpha1/NotifierDescriptor
       * @param {string} name Name of notifierDescriptor
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      deletenotificationHaloRunV1alpha1NotifierDescriptor: async (
        name: string,
        options: AxiosRequestConfig = {}
      ): Promise<RequestArgs> => {
        // verify required parameter 'name' is not null or undefined
        assertParamExists(
          "deletenotificationHaloRunV1alpha1NotifierDescriptor",
          "name",
          name
        );
        const localVarPath =
          `/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}`.replace(
            `{${"name"}}`,
            encodeURIComponent(String(name))
          );
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        let baseOptions;
        if (configuration) {
          baseOptions = configuration.baseOptions;
        }

        const localVarRequestOptions = {
          method: "DELETE",
          ...baseOptions,
          ...options,
        };
        const localVarHeaderParameter = {} as any;
        const localVarQueryParameter = {} as any;

        // authentication BasicAuth required
        // http basic authentication required
        setBasicAuthToObject(localVarRequestOptions, configuration);

        // authentication BearerAuth required
        // http bearer authentication required
        await setBearerAuthToObject(localVarHeaderParameter, configuration);

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        let headersFromBaseOptions =
          baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
          ...localVarHeaderParameter,
          ...headersFromBaseOptions,
          ...options.headers,
        };

        return {
          url: toPathString(localVarUrlObj),
          options: localVarRequestOptions,
        };
      },
      /**
       * Get notification.halo.run/v1alpha1/NotifierDescriptor
       * @param {string} name Name of notifierDescriptor
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      getnotificationHaloRunV1alpha1NotifierDescriptor: async (
        name: string,
        options: AxiosRequestConfig = {}
      ): Promise<RequestArgs> => {
        // verify required parameter 'name' is not null or undefined
        assertParamExists(
          "getnotificationHaloRunV1alpha1NotifierDescriptor",
          "name",
          name
        );
        const localVarPath =
          `/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}`.replace(
            `{${"name"}}`,
            encodeURIComponent(String(name))
          );
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        let baseOptions;
        if (configuration) {
          baseOptions = configuration.baseOptions;
        }

        const localVarRequestOptions = {
          method: "GET",
          ...baseOptions,
          ...options,
        };
        const localVarHeaderParameter = {} as any;
        const localVarQueryParameter = {} as any;

        // authentication BasicAuth required
        // http basic authentication required
        setBasicAuthToObject(localVarRequestOptions, configuration);

        // authentication BearerAuth required
        // http bearer authentication required
        await setBearerAuthToObject(localVarHeaderParameter, configuration);

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        let headersFromBaseOptions =
          baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
          ...localVarHeaderParameter,
          ...headersFromBaseOptions,
          ...options.headers,
        };

        return {
          url: toPathString(localVarUrlObj),
          options: localVarRequestOptions,
        };
      },
      /**
       * List notification.halo.run/v1alpha1/NotifierDescriptor
       * @param {Array<string>} [fieldSelector] Field selector for filtering.
       * @param {Array<string>} [labelSelector] Label selector for filtering.
       * @param {number} [page] The page number. Zero indicates no page.
       * @param {number} [size] Size of one page. Zero indicates no limit.
       * @param {Array<string>} [sort] Sort property and direction of the list result. Support sorting based on attribute name path.
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      listnotificationHaloRunV1alpha1NotifierDescriptor: async (
        fieldSelector?: Array<string>,
        labelSelector?: Array<string>,
        page?: number,
        size?: number,
        sort?: Array<string>,
        options: AxiosRequestConfig = {}
      ): Promise<RequestArgs> => {
        const localVarPath = `/apis/notification.halo.run/v1alpha1/notifierDescriptors`;
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        let baseOptions;
        if (configuration) {
          baseOptions = configuration.baseOptions;
        }

        const localVarRequestOptions = {
          method: "GET",
          ...baseOptions,
          ...options,
        };
        const localVarHeaderParameter = {} as any;
        const localVarQueryParameter = {} as any;

        // authentication BasicAuth required
        // http basic authentication required
        setBasicAuthToObject(localVarRequestOptions, configuration);

        // authentication BearerAuth required
        // http bearer authentication required
        await setBearerAuthToObject(localVarHeaderParameter, configuration);

        if (fieldSelector) {
          localVarQueryParameter["fieldSelector"] = fieldSelector;
        }

        if (labelSelector) {
          localVarQueryParameter["labelSelector"] = labelSelector;
        }

        if (page !== undefined) {
          localVarQueryParameter["page"] = page;
        }

        if (size !== undefined) {
          localVarQueryParameter["size"] = size;
        }

        if (sort) {
          localVarQueryParameter["sort"] = Array.from(sort);
        }

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        let headersFromBaseOptions =
          baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
          ...localVarHeaderParameter,
          ...headersFromBaseOptions,
          ...options.headers,
        };

        return {
          url: toPathString(localVarUrlObj),
          options: localVarRequestOptions,
        };
      },
      /**
       * Update notification.halo.run/v1alpha1/NotifierDescriptor
       * @param {string} name Name of notifierDescriptor
       * @param {NotifierDescriptor} [notifierDescriptor] Updated notifierDescriptor
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      updatenotificationHaloRunV1alpha1NotifierDescriptor: async (
        name: string,
        notifierDescriptor?: NotifierDescriptor,
        options: AxiosRequestConfig = {}
      ): Promise<RequestArgs> => {
        // verify required parameter 'name' is not null or undefined
        assertParamExists(
          "updatenotificationHaloRunV1alpha1NotifierDescriptor",
          "name",
          name
        );
        const localVarPath =
          `/apis/notification.halo.run/v1alpha1/notifierDescriptors/{name}`.replace(
            `{${"name"}}`,
            encodeURIComponent(String(name))
          );
        // use dummy base URL string because the URL constructor only accepts absolute URLs.
        const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
        let baseOptions;
        if (configuration) {
          baseOptions = configuration.baseOptions;
        }

        const localVarRequestOptions = {
          method: "PUT",
          ...baseOptions,
          ...options,
        };
        const localVarHeaderParameter = {} as any;
        const localVarQueryParameter = {} as any;

        // authentication BasicAuth required
        // http basic authentication required
        setBasicAuthToObject(localVarRequestOptions, configuration);

        // authentication BearerAuth required
        // http bearer authentication required
        await setBearerAuthToObject(localVarHeaderParameter, configuration);

        localVarHeaderParameter["Content-Type"] = "application/json";

        setSearchParams(localVarUrlObj, localVarQueryParameter);
        let headersFromBaseOptions =
          baseOptions && baseOptions.headers ? baseOptions.headers : {};
        localVarRequestOptions.headers = {
          ...localVarHeaderParameter,
          ...headersFromBaseOptions,
          ...options.headers,
        };
        localVarRequestOptions.data = serializeDataIfNeeded(
          notifierDescriptor,
          localVarRequestOptions,
          configuration
        );

        return {
          url: toPathString(localVarUrlObj),
          options: localVarRequestOptions,
        };
      },
    };
  };

/**
 * NotificationHaloRunV1alpha1NotifierDescriptorApi - functional programming interface
 * @export
 */
export const NotificationHaloRunV1alpha1NotifierDescriptorApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    NotificationHaloRunV1alpha1NotifierDescriptorApiAxiosParamCreator(
      configuration
    );
  return {
    /**
     * Create notification.halo.run/v1alpha1/NotifierDescriptor
     * @param {NotifierDescriptor} [notifierDescriptor] Fresh notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createnotificationHaloRunV1alpha1NotifierDescriptor(
      notifierDescriptor?: NotifierDescriptor,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<NotifierDescriptor>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createnotificationHaloRunV1alpha1NotifierDescriptor(
          notifierDescriptor,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Delete notification.halo.run/v1alpha1/NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletenotificationHaloRunV1alpha1NotifierDescriptor(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deletenotificationHaloRunV1alpha1NotifierDescriptor(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get notification.halo.run/v1alpha1/NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getnotificationHaloRunV1alpha1NotifierDescriptor(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<NotifierDescriptor>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getnotificationHaloRunV1alpha1NotifierDescriptor(
          name,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List notification.halo.run/v1alpha1/NotifierDescriptor
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [sort] Sort property and direction of the list result. Support sorting based on attribute name path.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listnotificationHaloRunV1alpha1NotifierDescriptor(
      fieldSelector?: Array<string>,
      labelSelector?: Array<string>,
      page?: number,
      size?: number,
      sort?: Array<string>,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<NotifierDescriptorList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listnotificationHaloRunV1alpha1NotifierDescriptor(
          fieldSelector,
          labelSelector,
          page,
          size,
          sort,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update notification.halo.run/v1alpha1/NotifierDescriptor
     * @param {string} name Name of notifierDescriptor
     * @param {NotifierDescriptor} [notifierDescriptor] Updated notifierDescriptor
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatenotificationHaloRunV1alpha1NotifierDescriptor(
      name: string,
      notifierDescriptor?: NotifierDescriptor,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<NotifierDescriptor>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatenotificationHaloRunV1alpha1NotifierDescriptor(
          name,
          notifierDescriptor,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * NotificationHaloRunV1alpha1NotifierDescriptorApi - factory interface
 * @export
 */
export const NotificationHaloRunV1alpha1NotifierDescriptorApiFactory =
  function (
    configuration?: Configuration,
    basePath?: string,
    axios?: AxiosInstance
  ) {
    const localVarFp =
      NotificationHaloRunV1alpha1NotifierDescriptorApiFp(configuration);
    return {
      /**
       * Create notification.halo.run/v1alpha1/NotifierDescriptor
       * @param {NotificationHaloRunV1alpha1NotifierDescriptorApiCreatenotificationHaloRunV1alpha1NotifierDescriptorRequest} requestParameters Request parameters.
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      createnotificationHaloRunV1alpha1NotifierDescriptor(
        requestParameters: NotificationHaloRunV1alpha1NotifierDescriptorApiCreatenotificationHaloRunV1alpha1NotifierDescriptorRequest = {},
        options?: AxiosRequestConfig
      ): AxiosPromise<NotifierDescriptor> {
        return localVarFp
          .createnotificationHaloRunV1alpha1NotifierDescriptor(
            requestParameters.notifierDescriptor,
            options
          )
          .then((request) => request(axios, basePath));
      },
      /**
       * Delete notification.halo.run/v1alpha1/NotifierDescriptor
       * @param {NotificationHaloRunV1alpha1NotifierDescriptorApiDeletenotificationHaloRunV1alpha1NotifierDescriptorRequest} requestParameters Request parameters.
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      deletenotificationHaloRunV1alpha1NotifierDescriptor(
        requestParameters: NotificationHaloRunV1alpha1NotifierDescriptorApiDeletenotificationHaloRunV1alpha1NotifierDescriptorRequest,
        options?: AxiosRequestConfig
      ): AxiosPromise<void> {
        return localVarFp
          .deletenotificationHaloRunV1alpha1NotifierDescriptor(
            requestParameters.name,
            options
          )
          .then((request) => request(axios, basePath));
      },
      /**
       * Get notification.halo.run/v1alpha1/NotifierDescriptor
       * @param {NotificationHaloRunV1alpha1NotifierDescriptorApiGetnotificationHaloRunV1alpha1NotifierDescriptorRequest} requestParameters Request parameters.
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      getnotificationHaloRunV1alpha1NotifierDescriptor(
        requestParameters: NotificationHaloRunV1alpha1NotifierDescriptorApiGetnotificationHaloRunV1alpha1NotifierDescriptorRequest,
        options?: AxiosRequestConfig
      ): AxiosPromise<NotifierDescriptor> {
        return localVarFp
          .getnotificationHaloRunV1alpha1NotifierDescriptor(
            requestParameters.name,
            options
          )
          .then((request) => request(axios, basePath));
      },
      /**
       * List notification.halo.run/v1alpha1/NotifierDescriptor
       * @param {NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptorRequest} requestParameters Request parameters.
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      listnotificationHaloRunV1alpha1NotifierDescriptor(
        requestParameters: NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptorRequest = {},
        options?: AxiosRequestConfig
      ): AxiosPromise<NotifierDescriptorList> {
        return localVarFp
          .listnotificationHaloRunV1alpha1NotifierDescriptor(
            requestParameters.fieldSelector,
            requestParameters.labelSelector,
            requestParameters.page,
            requestParameters.size,
            requestParameters.sort,
            options
          )
          .then((request) => request(axios, basePath));
      },
      /**
       * Update notification.halo.run/v1alpha1/NotifierDescriptor
       * @param {NotificationHaloRunV1alpha1NotifierDescriptorApiUpdatenotificationHaloRunV1alpha1NotifierDescriptorRequest} requestParameters Request parameters.
       * @param {*} [options] Override http request option.
       * @throws {RequiredError}
       */
      updatenotificationHaloRunV1alpha1NotifierDescriptor(
        requestParameters: NotificationHaloRunV1alpha1NotifierDescriptorApiUpdatenotificationHaloRunV1alpha1NotifierDescriptorRequest,
        options?: AxiosRequestConfig
      ): AxiosPromise<NotifierDescriptor> {
        return localVarFp
          .updatenotificationHaloRunV1alpha1NotifierDescriptor(
            requestParameters.name,
            requestParameters.notifierDescriptor,
            options
          )
          .then((request) => request(axios, basePath));
      },
    };
  };

/**
 * Request parameters for createnotificationHaloRunV1alpha1NotifierDescriptor operation in NotificationHaloRunV1alpha1NotifierDescriptorApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotifierDescriptorApiCreatenotificationHaloRunV1alpha1NotifierDescriptorRequest
 */
export interface NotificationHaloRunV1alpha1NotifierDescriptorApiCreatenotificationHaloRunV1alpha1NotifierDescriptorRequest {
  /**
   * Fresh notifierDescriptor
   * @type {NotifierDescriptor}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApiCreatenotificationHaloRunV1alpha1NotifierDescriptor
   */
  readonly notifierDescriptor?: NotifierDescriptor;
}

/**
 * Request parameters for deletenotificationHaloRunV1alpha1NotifierDescriptor operation in NotificationHaloRunV1alpha1NotifierDescriptorApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotifierDescriptorApiDeletenotificationHaloRunV1alpha1NotifierDescriptorRequest
 */
export interface NotificationHaloRunV1alpha1NotifierDescriptorApiDeletenotificationHaloRunV1alpha1NotifierDescriptorRequest {
  /**
   * Name of notifierDescriptor
   * @type {string}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApiDeletenotificationHaloRunV1alpha1NotifierDescriptor
   */
  readonly name: string;
}

/**
 * Request parameters for getnotificationHaloRunV1alpha1NotifierDescriptor operation in NotificationHaloRunV1alpha1NotifierDescriptorApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotifierDescriptorApiGetnotificationHaloRunV1alpha1NotifierDescriptorRequest
 */
export interface NotificationHaloRunV1alpha1NotifierDescriptorApiGetnotificationHaloRunV1alpha1NotifierDescriptorRequest {
  /**
   * Name of notifierDescriptor
   * @type {string}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApiGetnotificationHaloRunV1alpha1NotifierDescriptor
   */
  readonly name: string;
}

/**
 * Request parameters for listnotificationHaloRunV1alpha1NotifierDescriptor operation in NotificationHaloRunV1alpha1NotifierDescriptorApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptorRequest
 */
export interface NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptorRequest {
  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptor
   */
  readonly fieldSelector?: Array<string>;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptor
   */
  readonly labelSelector?: Array<string>;

  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptor
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptor
   */
  readonly size?: number;

  /**
   * Sort property and direction of the list result. Support sorting based on attribute name path.
   * @type {Array<string>}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptor
   */
  readonly sort?: Array<string>;
}

/**
 * Request parameters for updatenotificationHaloRunV1alpha1NotifierDescriptor operation in NotificationHaloRunV1alpha1NotifierDescriptorApi.
 * @export
 * @interface NotificationHaloRunV1alpha1NotifierDescriptorApiUpdatenotificationHaloRunV1alpha1NotifierDescriptorRequest
 */
export interface NotificationHaloRunV1alpha1NotifierDescriptorApiUpdatenotificationHaloRunV1alpha1NotifierDescriptorRequest {
  /**
   * Name of notifierDescriptor
   * @type {string}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApiUpdatenotificationHaloRunV1alpha1NotifierDescriptor
   */
  readonly name: string;

  /**
   * Updated notifierDescriptor
   * @type {NotifierDescriptor}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApiUpdatenotificationHaloRunV1alpha1NotifierDescriptor
   */
  readonly notifierDescriptor?: NotifierDescriptor;
}

/**
 * NotificationHaloRunV1alpha1NotifierDescriptorApi - object-oriented interface
 * @export
 * @class NotificationHaloRunV1alpha1NotifierDescriptorApi
 * @extends {BaseAPI}
 */
export class NotificationHaloRunV1alpha1NotifierDescriptorApi extends BaseAPI {
  /**
   * Create notification.halo.run/v1alpha1/NotifierDescriptor
   * @param {NotificationHaloRunV1alpha1NotifierDescriptorApiCreatenotificationHaloRunV1alpha1NotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApi
   */
  public createnotificationHaloRunV1alpha1NotifierDescriptor(
    requestParameters: NotificationHaloRunV1alpha1NotifierDescriptorApiCreatenotificationHaloRunV1alpha1NotifierDescriptorRequest = {},
    options?: AxiosRequestConfig
  ) {
    return NotificationHaloRunV1alpha1NotifierDescriptorApiFp(
      this.configuration
    )
      .createnotificationHaloRunV1alpha1NotifierDescriptor(
        requestParameters.notifierDescriptor,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete notification.halo.run/v1alpha1/NotifierDescriptor
   * @param {NotificationHaloRunV1alpha1NotifierDescriptorApiDeletenotificationHaloRunV1alpha1NotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApi
   */
  public deletenotificationHaloRunV1alpha1NotifierDescriptor(
    requestParameters: NotificationHaloRunV1alpha1NotifierDescriptorApiDeletenotificationHaloRunV1alpha1NotifierDescriptorRequest,
    options?: AxiosRequestConfig
  ) {
    return NotificationHaloRunV1alpha1NotifierDescriptorApiFp(
      this.configuration
    )
      .deletenotificationHaloRunV1alpha1NotifierDescriptor(
        requestParameters.name,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get notification.halo.run/v1alpha1/NotifierDescriptor
   * @param {NotificationHaloRunV1alpha1NotifierDescriptorApiGetnotificationHaloRunV1alpha1NotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApi
   */
  public getnotificationHaloRunV1alpha1NotifierDescriptor(
    requestParameters: NotificationHaloRunV1alpha1NotifierDescriptorApiGetnotificationHaloRunV1alpha1NotifierDescriptorRequest,
    options?: AxiosRequestConfig
  ) {
    return NotificationHaloRunV1alpha1NotifierDescriptorApiFp(
      this.configuration
    )
      .getnotificationHaloRunV1alpha1NotifierDescriptor(
        requestParameters.name,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List notification.halo.run/v1alpha1/NotifierDescriptor
   * @param {NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApi
   */
  public listnotificationHaloRunV1alpha1NotifierDescriptor(
    requestParameters: NotificationHaloRunV1alpha1NotifierDescriptorApiListnotificationHaloRunV1alpha1NotifierDescriptorRequest = {},
    options?: AxiosRequestConfig
  ) {
    return NotificationHaloRunV1alpha1NotifierDescriptorApiFp(
      this.configuration
    )
      .listnotificationHaloRunV1alpha1NotifierDescriptor(
        requestParameters.fieldSelector,
        requestParameters.labelSelector,
        requestParameters.page,
        requestParameters.size,
        requestParameters.sort,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update notification.halo.run/v1alpha1/NotifierDescriptor
   * @param {NotificationHaloRunV1alpha1NotifierDescriptorApiUpdatenotificationHaloRunV1alpha1NotifierDescriptorRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NotificationHaloRunV1alpha1NotifierDescriptorApi
   */
  public updatenotificationHaloRunV1alpha1NotifierDescriptor(
    requestParameters: NotificationHaloRunV1alpha1NotifierDescriptorApiUpdatenotificationHaloRunV1alpha1NotifierDescriptorRequest,
    options?: AxiosRequestConfig
  ) {
    return NotificationHaloRunV1alpha1NotifierDescriptorApiFp(
      this.configuration
    )
      .updatenotificationHaloRunV1alpha1NotifierDescriptor(
        requestParameters.name,
        requestParameters.notifierDescriptor,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
